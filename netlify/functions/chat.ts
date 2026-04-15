import type { Handler } from '@netlify/functions';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { hospitalData } from './data';

// ─── Model Priority ───────────────────────────────────────────────────────────
const MODEL_PRIORITY = [
  'gemini-flash-latest',
  'gemini-2.5-flash',
  'gemini-2.0-flash',
  'gemma-3-4b-it',
];

// ─── CORS Headers ─────────────────────────────────────────────────────────────
const CORS_HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

// ─── System Prompt ────────────────────────────────────────────────────────────
const buildSystemPrompt = (): string => `
Kamu adalah SARI (Smart Assistant RSMBS Intelligence), asisten virtual cerdas
untuk Rumah Sakit Muhammadiyah Bandung Selatan (RSMBS) di Ciparay, Kab. Bandung, Jawa Barat.

PERAN DAN KEPRIBADIAN:
- Bersikap hangat, ramah, empatik, profesional seperti resepsionis medis berpengalaman.
- Gunakan sapaan "Kak" untuk sapaan santai, atau "Bapak/Ibu" jika terasa lebih formal.
- Sertakan emoji yang relevan secukupnya untuk membuat percakapan terasa hangat.
- Berikan jawaban yang terstruktur, gunakan poin-poin bila informasinya banyak.

ATURAN JAWABAN (SANGAT PENTING):
- SELALU selesaikan jawaban hingga tuntas dalam satu respons. JANGAN pernah memotong di tengah.
- JANGAN menggunakan kalimat seperti "silakan tanya lagi untuk lanjutan" jika informasinya masih ada.
- Jika ada beberapa langkah/poin, tampilkan SEMUA langkah/poin tersebut sekaligus.
- Jawaban maksimal boleh panjang jika memang diperlukan — jangan dipotong.
- HANYA jawab pertanyaan yang berkaitan dengan RSMBS atau layanan kesehatan umum.
- JANGAN memberikan diagnosis medis. Selalu sarankan konsultasi langsung dengan dokter.

PENANGANAN DARURAT (PRIORITAS TERTINGGI):
- Jika ada indikasi kondisi darurat, SEGERA tampilkan:
  🚨 KONDISI DARURAT! Hubungi:
  📞 IGD RSMBS 24 Jam: (022) 86023290
  📞 Hotline Nasional: 119

DATABASE PENGETAHUAN RSMBS:
${JSON.stringify(hospitalData, null, 2)}

FORMAT JAWABAN:
- Gunakan bahasa yang natural, ringkas, dan hangat.
- Untuk info tunggal (misal kontak, jam buka): jawab langsung 1–2 kalimat.
- Untuk info kompleks (langkah, prosedur): gunakan nomor urut (1. 2. 3. dst) dan tampilkan SEMUA.
- Gunakan **bold** untuk nomor kontak, nama dokter, atau info penting.
- Selalu tutup dengan tawaran bantuan lanjutan.
- Website resmi RSMBS: https://architechlabs-rsmbs.netlify.app/
`;

// ─── History Entry Type ───────────────────────────────────────────────────────
interface HistoryEntry { role: string; parts: string; }

// ─── Handler ─────────────────────────────────────────────────────────────────
export const handler: Handler = async (event) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: CORS_HEADERS, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: CORS_HEADERS, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const message: string = (body.message || '').trim();
    const history: HistoryEntry[] = Array.isArray(body.history) ? body.history : [];

    if (!message) {
      return { statusCode: 400, headers: CORS_HEADERS, body: JSON.stringify({ error: 'Pesan tidak boleh kosong.' }) };
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error('GEMINI_API_KEY tidak ditemukan.');

    const genAI = new GoogleGenerativeAI(apiKey);

    // Bangun history dalam format Gemini (system prompt + riwayat percakapan)
    const geminiHistory = [
      { role: 'user',  parts: [{ text: buildSystemPrompt() }] },
      { role: 'model', parts: [{ text: 'Siap! Saya SARI, asisten virtual RSMBS. Siap membantu Anda. 😊' }] },
      ...history.map(h => ({ role: h.role, parts: [{ text: h.parts }] })),
    ];

    let reply = '';
    let modelUsed = '';
    let lastError: Error | null = null;

    for (const modelName of MODEL_PRIORITY) {
      try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const chat = model.startChat({
          history: geminiHistory,
          generationConfig: { maxOutputTokens: 1500, temperature: 0.7 },
        });

        const result = await chat.sendMessage(message);
        reply = result.response.text();
        modelUsed = modelName;
        break;

      } catch (err: unknown) {
        const error = err as Error;
        const isRecoverable =
          error.message.includes('503') ||
          error.message.includes('429') ||
          error.message.includes('overloaded') ||
          error.message.includes('quota') ||
          error.message.includes('not found');

        if (isRecoverable) { lastError = error; continue; }
        throw error;
      }
    }

    if (!reply) throw lastError ?? new Error('Semua model AI tidak tersedia.');

    // Update history dan trim agar tidak terlalu panjang (maks 10 pasang)
    const updatedHistory: HistoryEntry[] = [
      ...history,
      { role: 'user',  parts: message },
      { role: 'model', parts: reply },
    ].slice(-20);

    console.log(`✅ SARI responded via ${modelUsed}`);

    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify({ reply, history: updatedHistory }),
    };

  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error('❌ SARI Function Error:', msg);
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: 'Maaf, SARI sedang mengalami gangguan sistem. Silakan coba beberapa saat lagi.' }),
    };
  }
};
