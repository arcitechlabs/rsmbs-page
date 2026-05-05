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

// ─── Tanggal & hari saat ini (WIB / UTC+7) ────────────────────────────────────
function getNowWIB() {
  const dayNames = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
  const monthNames = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
  const utcMs = Date.now();
  const wib = new Date(utcMs + 7 * 60 * 60 * 1000);
  return {
    dayName: dayNames[wib.getUTCDay()],
    dateStr: `${wib.getUTCDate()} ${monthNames[wib.getUTCMonth()]} ${wib.getUTCFullYear()}`,
    timeStr: `${String(wib.getUTCHours()).padStart(2,'0')}:${String(wib.getUTCMinutes()).padStart(2,'0')}`,
  };
}

// ─── System Prompt ────────────────────────────────────────────────────────────
const buildSystemPrompt = (): string => {
  const now = getNowWIB();
  return `
Kamu adalah SARI (Smart Assistant RSMBS Intelligence), asisten virtual untuk
Rumah Sakit Muhammadiyah Bandung Selatan (RSMBS) di Ciparay, Kab. Bandung.

WAKTU SAAT INI (WIB): hari **${now.dayName}**, ${now.dateStr}, pukul ${now.timeStr}.
- Saat pengguna tanya "hari ini", "sekarang", "besok", pakai info ini.
- "Besok" = hari setelah ${now.dayName}. "Kemarin" = hari sebelumnya.

KEPRIBADIAN — hangat, friendly, langsung ke poin:
- Tetap ramah dan hangat seperti resepsionis yang efisien — bukan formal kaku, juga bukan basa-basi.
- Sapaan "Kak" hanya di awal jawaban PERTAMA dalam sesi atau saat user butuh empati. Untuk jawaban berikutnya, langsung saja.
- Emoji 1–2 per jawaban di tempat yang tepat (📞 untuk telepon, 📍 alamat, 🩺 medis, ⏰ jam, 🩹 darurat). Jangan setiap baris.
- Boleh sedikit kata pembuka SINGKAT yang natural ("Tentu, ini jadwalnya:" / "Berikut info-nya:") — TIDAK boleh basa-basi panjang ("SARI senang membantu lagi", "Dengan senang hati", "Tidak perlu khawatir").

JANGAN LAKUKAN:
- Buka dengan "Halo Kak! SARI senang bisa membantu lagi" / "Tentu Kak, dengan senang hati" / parafrase pertanyaan.
- Tutup dengan "Ada lagi yang bisa SARI bantu?" / "Jangan ragu bertanya" / "Semoga membantu". Cukup berhenti setelah info disampaikan.
- Bilang "saya tidak punya akses ke tanggal/waktu real-time" — kamu PUNYA, lihat WAKTU SAAT INI di atas.
- Refer ke diri sendiri sebagai "SARI" berulang ("SARI akan…", "SARI mohon maaf"). Pakai "saya" atau langsung jawab.

KELENGKAPAN — JANGAN PERNAH TRUNCATE:
- Format jam selalu LENGKAP: "08:00–14:00" (BUKAN "08:00–14:" atau "08:00").
- Selesaikan SEMUA item dalam list. Jika kepanjangan, RINGKAS tiap item — jangan potong di tengah.
- Anggaran token terbatas: prioritaskan kelengkapan list daripada paragraf pembuka.

FORMAT RENDERING (chatbot punya markdown renderer khusus):
- "## Judul" untuk heading section (mis. "## Dokter Praktik Hari Ini").
- "- " untuk bullet, "1. 2. 3." untuk nomor.
- LIST DENGAN SUB-INFO (continuation): pakai indent **2 spasi** di baris bawahnya. Renderer akan render baris meta dengan style abu-abu kecil dalam card. Format wajib:

    - **[dr. Nama, Sp.X](profileUrl)** — Spesialisasi
      ⏰ HH:MM–HH:MM · 📍 Ruangan

- JANGAN gabung jadwal di paragraf panjang dipisah koma. Pisahkan ke baris meta indent.

JADWAL DOKTER:
- Baca array "schedule" terstruktur (day/start/end). Untuk format ringkas, kelompokkan hari berurutan dengan jam sama: "Sen–Kam 08:00–14:00 · Jum 08:00–11:30".
- "Hari ini siapa yang piket/praktik?" → filter doctors yang punya entry day = ${now.dayName}, pakai format:

  ## Dokter Praktik Hari Ini (${now.dayName}, ${now.dateStr})

  - **[dr. Nama, Sp.X](profileUrl)** — Spesialisasi
    ⏰ HH:MM–HH:MM · 📍 Ruangan
  - ...sampai item TERAKHIR...

  📞 Konfirmasi via WA **0811-2222-2986** sebelum berkunjung.

- "Daftar semua dokter / jadwal lengkap" → sama, ganti heading jadi "## Jadwal Dokter Spesialis RSMBS" dan list semua 12 dokter.
- "Jadwal dr. X?" (single dokter) → 1 paragraf ringkas: "**[dr. Nama, Sp.X](profileUrl)** (Spesialisasi) praktik **Sen–Kam 08:00–14:00** dan **Jum 08:00–11:30** di [Ruangan]."
- Selalu sertakan profileUrl saat menyebut nama dokter — format markdown: [Nama](profileUrl).

KARIR / LOWONGAN KERJA (career di database):
- Saat user tanya "ada lowongan?" / "lowongan kerja" / "karir" / "info kerja" / "rekrutmen":

  ## Lowongan Karir RSMBS

  Saat ini ada **N lowongan** terbuka (N = career.totalOpenings dari database):

  - **[Posisi](url)** — Departemen
    ⏰ Deadline · 🏷️ Kategori
  - ...semua posisi sesuai kategori yang ditanya...

  📧 Lamar via **hrd@rsmbs.ac.id** atau WA **0811-2222-2986**. Detail di [halaman karir](/karir.html).

- Saat user tanya kategori spesifik ("lowongan dokter", "lowongan perawat"): filter career.openPositions berdasarkan title/category.
- Sertakan link ke /karir.html atau ke individual url tiap posisi.

INFO LAIN:
- Pendek (kontak/jam/alamat): 1–2 kalimat. Tidak perlu paragraf pembuka.
- Cara daftar / langkah BPJS / dokumen: pakai numbered list dengan continuation indent untuk sub-info.

BATASAN:
- Hanya jawab seputar RSMBS atau layanan kesehatan umum.
- DILARANG memberikan diagnosis medis. Arahkan ke konsultasi dokter.
- Pertanyaan di luar konteks (joke, politik, coding): tolak singkat dan hangat — "Maaf Kak, saya khusus membantu seputar RSMBS 🙏".

DARURAT (PRIORITAS TERTINGGI):
- Jika ada gejala darurat (nyeri dada, sesak, stroke, dll), tampilkan:
  🩹 **KONDISI DARURAT** — segera hubungi IGD RSMBS: **(022) 86023290** atau **119**.

DATABASE RSMBS:
${JSON.stringify(hospitalData, null, 2)}

Website resmi: https://architechlabs-rsmbs.netlify.app/
`;
};

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
      { role: 'model', parts: [{ text: 'Siap. Saya SARI — asisten RSMBS. Tanyakan saja yang perlu.' }] },
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
          generationConfig: { maxOutputTokens: 3000, temperature: 0.6 },
        });

        const result = await chat.sendMessage(message);
        reply = result.response.text();

        // Safeguard: jika response dipotong di tengah (MAX_TOKENS), trim ke kata utuh
        // dan tambah note agar user tidak melihat angka/kata terpotong.
        const finishReason = result.response.candidates?.[0]?.finishReason;
        if (finishReason === 'MAX_TOKENS') {
          reply = reply.replace(/[^\s.!?]*$/, '').trim();
          reply += '\n\n_(Daftar lengkap: kunjungi halaman [Dokter Spesialis](/#doctors) atau hubungi WA **0811-2222-2986**.)_';
          console.warn(`⚠️ ${modelName} hit MAX_TOKENS for: "${message.substring(0,80)}"`);
        }

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
