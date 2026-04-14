import { GoogleGenerativeAI } from "@google/generative-ai";
import { hospitalData } from "./data";
import dotenv from "dotenv";

dotenv.config();

// ─── Model Priority List (urutan prioritas, mulai dari terbaik) ────────────
const MODEL_PRIORITY = [
    "gemini-flash-latest",
    "gemini-2.5-flash",
    "gemini-2.0-flash",
    "gemma-3-12b-it",
    "gemma-3-4b-it",
];

// ─── System Prompt Persona SARI ───────────────────────────────────────────
const buildSystemPrompt = (): string => `
Kamu adalah SARI (Smart Assistant RSMBS Intelligence), asisten virtual cerdas 
untuk Rumah Sakit Mitra Bandung Selatan (RSMBS) yang terletak di Bandung, Jawa Barat.

PERAN DAN KEPRIBADIAN:
- Bersikap hangat, ramah, empatik, profesional seperti resepsionis medis berpengalaman.
- Gunakan sapaan "Kak" untuk sapaan santai, atau "Bapak/Ibu" jika terasa lebih formal.
- Sertakan emoji yang relevan secukupnya untuk membuat percakapan terasa hangat.
- Berikan jawaban yang terstruktur, menggunakan poin-poin bila informasinya banyak.
- Ingat konteks percakapan sebelumnya dalam sesi ini (kamu punya memori percakapan).

BATASAN WAJIB:
- HANYA jawab pertanyaan yang berkaitan dengan RSMBS atau layanan kesehatan umum.
- JANGAN memberikan diagnosis medis. Selalu sarankan konsultasi langsung dengan dokter.
- JANGAN jawab pertanyaan di luar topik medis/RS. Arahkan kembali ke topik layanan RS.
- Jika pertanyaan medis serius, selalu sarankan pemeriksaan langsung ke dokter terkait.

PENANGANAN DARURAT (PRIORITAS TERTINGGI):
- Jika ada indikasi kondisi darurat (serangan jantung, stroke, tidak sadar, pendarahan hebat, sesak napas berat, kecelakaan, keracunan), SEGERA tampilkan:
  🚨 KONDISI DARURAT! Hubungi:
  📞 IGD RSMBS 24 Jam: (022) 7310-0001
  📞 Ambulans: (022) 7310-0002
  📞 Hotline Nasional: 119

DATABASE PENGETAHUAN RSMBS (gunakan ini sebagai sumber utama jawaban):
${JSON.stringify(hospitalData, null, 2)}

FORMAT JAWABAN:
- Gunakan bahasa yang natural, ringkas, dan hangat.
- Untuk info tunggal (misal kontak, jam buka): jawab langsung dalam 1–2 kalimat, TANPA daftar atau format berlebihan.
- Untuk info kompleks (misal jadwal dokter, prosedur pendaftaran): gunakan daftar bullet (- item) atau nomor (1. item).
- Gunakan **bold** HANYA untuk nomor kontak penting atau nama spesifik — JANGAN bold seluruh kalimat atau setiap judul.
- HINDARI membuat banyak sub-heading atau kategori berlapis. Cukup gunakan daftar sederhana bila perlu.
- Selalu tutup jawaban dengan tawaran bantuan lanjutan atau langkah berikutnya.
`;

// ─── In-Memory Session Store ──────────────────────────────────────────────
interface HistoryEntry { role: string; parts: string; }
const sessionStore: Record<string, HistoryEntry[]> = {};
const MAX_HISTORY_PAIRS = 10; // Hemat token: simpan maks 10 tanya-jawab

// ─── Core AI Call dengan Auto-Retry & Fallback Model ─────────────────────
export const getGeminiResponse = async (
    userMessage: string,
    sid: string
): Promise<{ reply: string; modelUsed: string }> => {

    const apiKey = process.env.GEMINI_API_KEY ?? "";
    if (!apiKey) throw new Error("GEMINI_API_KEY tidak ditemukan di environment.");

    const configuration = new GoogleGenerativeAI(apiKey);

    // Init atau ambil session history
    if (!sessionStore[sid]) sessionStore[sid] = [];
    const history = sessionStore[sid];

    // Build history dalam format Google Generative AI 
    const geminiHistory = history.map(h => ({
        role: h.role,
        parts: [{ text: h.parts }],
    }));

    const fullHistory = [
        { role: "user",  parts: [{ text: buildSystemPrompt() }] },
        { role: "model", parts: [{ text: "Siap! Saya SARI, asisten virtual RSMBS. Saya siap membantu Anda dengan informasi layanan kesehatan yang akurat dan ramah. 😊" }] },
        ...geminiHistory,
    ];

    // ── Coba satu per satu model dari priority list ──
    let lastError: Error | null = null;

    for (const modelName of MODEL_PRIORITY) {
        try {
            const model = configuration.getGenerativeModel({ model: modelName });
            const chat = model.startChat({
                history: fullHistory,
                generationConfig: {
                    maxOutputTokens: 800,
                    temperature: 0.75,
                },
            });

            const result = await chat.sendMessage(userMessage);
            const reply = result.response.text();

            // Simpan ke session history
            history.push({ role: "user",  parts: userMessage });
            history.push({ role: "model", parts: reply });

            // Trim history agar tidak terlalu panjang (hemat token)
            const maxEntries = MAX_HISTORY_PAIRS * 2;
            if (history.length > maxEntries) {
                history.splice(0, history.length - maxEntries);
            }

            console.log(`✅ [${sid}] Responded via ${modelName}`);
            return { reply, modelUsed: modelName };

        } catch (err: unknown) {
            const error = err as Error;
            const isRecoverable =
                error.message.includes("503") ||
                error.message.includes("429") ||
                error.message.includes("overloaded") ||
                error.message.includes("quota") ||
                error.message.includes("not found");

            if (isRecoverable) {
                console.warn(`⚠️  Model ${modelName} tidak tersedia, mencoba berikutnya...`);
                lastError = error;
                continue; // coba model berikutnya
            }

            // Error lain (misal koneksi total putus) — lempar langsung
            throw error;
        }
    }

    // Semua model gagal
    console.error("❌ Semua model gagal:", lastError?.message);
    throw lastError ?? new Error("Semua model AI tidak tersedia saat ini.");
};

// ─── Hapus session (untuk reset chat) ────────────────────────────────────
export const clearSession = (sid: string): void => {
    delete sessionStore[sid];
    console.log(`🗑️  Session ${sid} dihapus.`);
};

// ─── Info jumlah session aktif (untuk monitoring) ────────────────────────
export const getSessionCount = (): number => Object.keys(sessionStore).length;
