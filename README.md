# RSMBS Hospital Chatbot

Chatbot interaktif untuk website Company Profile Rumah Sakit Muhammadiyah Bandung Selatan (RSMBS).

## Fitur

- **Quick Actions**: Tombol cepat untuk navigasi instan
- **Rule-based NLP**: Sistem respons berbasis aturan dengan fuzzy matching
- **Context Handling**: Menyimpan konteks percakapan
- **Data Structure**: Data terstruktur dalam JSON
- **UI/UX Modern**: Floating chat button, responsive design
- **Security**: Input sanitization, XSS prevention
- **Error Handling**: Fallback untuk error dan input tidak dikenal

## Struktur File

- `index.html`: Halaman utama website dengan embed chatbot
- `style.css`: Styling untuk chatbot UI
- `script.js`: Logic chatbot dengan data dummy
- `README.md`: Dokumentasi ini

## Cara Menjalankan

1. Jalankan server lokal:
   ```bash
   python3 -m http.server 8000
   ```

2. Buka browser dan akses `http://localhost:8000`

## Data Dummy

Data tersimpan dalam `hospitalData` object di `script.js`:

- **doctors**: Array dokter dengan nama, spesialis, jadwal
- **services**: Layanan rumah sakit
- **schedules**: Jadwal operasional
- **faq**: Pertanyaan umum
- **contact**: Informasi kontak

## Keyword Mapping

Chatbot merespons berdasarkan keyword:

- "jadwal dokter" → Tampilkan jadwal dokter
- "dokter [spesialis]" → Filter dokter spesialis
- "layanan" → Daftar layanan
- "lokasi/kontak" → Informasi kontak
- "jam operasional" → Jadwal buka
- dll.

## Context Handling

- Menyimpan `lastTopic` untuk respons kontekstual
- Contoh: Setelah tanya "dokter anak", bisa tanya "jadwalnya?"

## Security

- Input disanitasi (hapus < >, batas 300 char)
- Tidak ada eval() atau innerHTML berbahaya

## Future Enhancement

- Integrasi API backend
- AI-based responses (OpenAI)
- Database integration
- Multi-language support

## Dependencies

- Pure JavaScript (ES6+)
- Tailwind CSS (sudah included via CDN)
- Font: Plus Jakarta Sans

## Browser Support

- Modern browsers dengan ES6 support
- Responsive design untuk mobile

## Lisensi

Untuk keperluan internal RSMBS.