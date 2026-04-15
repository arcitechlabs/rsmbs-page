export const hospitalData = {
  about: {
    name: "Rumah Sakit Muhammadiyah Bandung Selatan",
    shortName: "RSMBS",
    tagline: "Layanan Kesehatan PRIMA Islami",
    taglineHash: "#RSMBSPRIMA",
    accreditation: "LARSI Paripurna — Standar Akreditasi Tertinggi RS Indonesia",
    type: "Rumah Sakit Umum Swasta Tipe B",
    address: "Jl. Raya Laswi, Ciheulang, Kec. Ciparay, Kabupaten Bandung, Jawa Barat 40375",
    phone: "(022) 86023290",
    igd: "(022) 86023290",
    email: "info@rsmbs.ac.id",
    website: "https://architechlabs-rsmbs.netlify.app/",
    whatsapp: "0811-2222-2986",
    whatsappFull: "+6281122222986",
    facebook: "https://www.facebook.com/rsmbsofficial/",
    instagram: "https://www.instagram.com/rsmbsofficial/",
    googleRating: "4.1",
    totalReviews: "459",
    totalDoctors: "141",
    totalBeds: "200+",
    operationalHours: "Buka 24 Jam (termasuk hari libur)",
    organization: "Persyarikatan Muhammadiyah",
    values: "PRIMA — Profesional, Ramah, Islami, Modern, Amanah",
  },

  registration: {
    channels: [
      {
        name: "WhatsApp (Paling Cepat & Direkomendasikan)",
        contact: "0811-2222-2986",
        link: "https://wa.me/6281122222986",
        hours: "Senin–Sabtu 07.00–20.00",
        note: "Ketik: nama lengkap, tanggal lahir, poli/dokter yang dituju, tanggal preferensi"
      },
      {
        name: "Telepon",
        contact: "(022) 86023290",
        hours: "24 jam (untuk IGD), pendaftaran 07.00–19.00",
        note: "Hubungi loket pendaftaran"
      },
      {
        name: "Datang Langsung",
        location: "Loket Pendaftaran, Lt. 1 RSMBS",
        hours: "Senin–Jumat 07.00–19.00 | Sabtu 07.00–14.00",
        note: "Bawa identitas (KTP/KK) dan kartu BPJS (jika ada)"
      }
    ],
    steps: [
      "1️⃣ Pilih cara daftar: WhatsApp, telepon, atau datang langsung",
      "2️⃣ Siapkan: KTP/KK, kartu BPJS (jika BPJS), surat rujukan (jika BPJS/rawat jalan spesialis)",
      "3️⃣ Pilih poli/dokter spesialis dan tanggal kunjungan",
      "4️⃣ Dapatkan nomor antrian / konfirmasi jadwal",
      "5️⃣ Datang 15–30 menit sebelum jadwal, ambil nomor antrian di loket",
      "6️⃣ Tunggu panggilan, lalu masuk ke poli yang dituju"
    ],
    bpjsRequirements: [
      "Kartu BPJS Kesehatan aktif",
      "KTP/KK asli",
      "Surat rujukan dari Puskesmas/FKTP (untuk poliklinik spesialis)",
      "Surat Eligibilitas Peserta (SEP) — diterbitkan di loket RSMBS"
    ],
    generalRequirements: [
      "KTP atau kartu identitas lainnya",
      "Kartu asuransi swasta (jika ada)",
      "Surat pengantar dokter (jika dari dokter lain)"
    ],
    appointmentHours: {
      outpatient: "Senin–Jumat 07.00–20.00 | Sabtu 07.00–15.00",
      specialist: "Sesuai jadwal masing-masing dokter spesialis",
      emergency: "IGD buka 24 jam, tidak perlu daftar terlebih dahulu"
    }
  },

  doctors: [
    { name: "dr. Ahmad Fauzi, Sp.PD", specialist: "Penyakit Dalam", schedule: "Senin–Jumat 08.00–14.00", room: "Poliklinik Penyakit Dalam" },
    { name: "dr. Siti Rahmawati, Sp.A", specialist: "Dokter Anak (Pediatri)", schedule: "Senin–Sabtu 08.00–13.00", room: "Poliklinik Anak" },
    { name: "dr. Budi Santoso, Sp.OG", specialist: "Kandungan & Kebidanan", schedule: "Selasa–Sabtu 09.00–14.00", room: "Poliklinik Kebidanan" },
    { name: "dr. Dewi Kartika, Sp.JP", specialist: "Jantung & Pembuluh Darah", schedule: "Senin–Jumat 13.00–18.00", room: "Poliklinik Jantung" },
    { name: "dr. Rizky Pratama, Sp.BS", specialist: "Bedah Saraf", schedule: "Senin, Rabu, Jumat 09.00–14.00", room: "Poliklinik Bedah" },
    { name: "dr. Nurul Hidayah, Sp.N", specialist: "Saraf (Neurologi)", schedule: "Selasa–Jumat 09.00–15.00", room: "Poliklinik Saraf" },
    { name: "dr. Yoga Perdana, Sp.OT", specialist: "Ortopedi & Traumatologi", schedule: "Senin–Sabtu 10.00–15.00", room: "Poliklinik Ortopedi" },
    { name: "dr. Maya Lestari, Sp.B", specialist: "Bedah Umum", schedule: "Selasa, Rabu, Sabtu 08.00–13.00", room: "Poliklinik Bedah" },
    { name: "dr. Farhan Halim, Sp.M", specialist: "Mata", schedule: "Senin–Sabtu 09.00–14.00", room: "Poliklinik Mata" },
    { name: "dr. Lina Kusuma, Sp.KK", specialist: "Kulit & Kelamin", schedule: "Senin–Jumat 10.00–15.00", room: "Poliklinik Kulit" },
    { name: "dr. Rina Pratiwi, Sp.THT", specialist: "THT (Telinga, Hidung, Tenggorokan)", schedule: "Rabu–Minggu 08.00–13.00", room: "Poliklinik THT" },
    { name: "dr. Yusuf Hakim, Sp.KJ", specialist: "Kesehatan Jiwa (Psikiatri)", schedule: "Senin–Jumat 14.00–18.00", room: "Poliklinik Jiwa" },
  ],

  services: [
    "IGD 24 Jam dengan respon time < 5 menit",
    "ICU / ICCU / NICU (Neonatal ICU)",
    "Kamar Operasi — termasuk operasi jantung",
    "Hemodialisis (Cuci Darah)",
    "Kemoterapi Rawat Jalan",
    "Laboratorium Klinik & Patologi Anatomi (buka setiap hari 06.00–22.00)",
    "Radiologi: X-Ray, USG, CT Scan 128-slice, MRI 1.5 Tesla",
    "Endoskopi & Kolonoskopi",
    "Fisioterapi & Rehabilitasi Medik",
    "Bank Darah RS",
    "Apotek 24 Jam",
    "Ambulans 24 Jam",
    "Poliklinik Umum & Spesialis (18 poli)",
    "Medical Check-Up (MCU) — Paket Reguler & Eksekutif",
    "Layanan BPJS Kesehatan",
    "Vaksinasi (Influenza, HPV, dll)",
    "Konsultasi Gizi Klinik",
  ],

  rooms: {
    paviliun: { name: "Paviliun", desc: "Suite eksklusif, AC, TV, sofa keluarga, fasilitas premium", tariff: "Hubungi RS untuk info tarif", capacity: 10 },
    vip: { name: "VIP", desc: "Kamar pribadi, AC, TV, sofa keluarga, wifi", tariff: "Hubungi RS untuk info tarif", capacity: 25 },
    kelas1: { name: "Kelas I", desc: "Kamar 2 bed, AC, TV, wifi", tariff: "Hubungi RS untuk info tarif", capacity: 40 },
    kelas2: { name: "Kelas II", desc: "Kamar 4 bed, AC, wifi", tariff: "Sesuai tarif BPJS/RS", capacity: 50 },
    kelas3: { name: "Kelas III", desc: "Kamar 6 bed, AC, wifi", tariff: "Sesuai tarif BPJS/RS", capacity: 80 },
    bpjs: { name: "Kelas BPJS (I/II/III)", desc: "Sesuai hak kelas BPJS peserta", tariff: "Gratis sesuai ketentuan BPJS Kesehatan", capacity: 100 },
  },

  schedules: {
    outpatient: "Senin–Jumat 07.00–20.00 | Sabtu 07.00–15.00",
    specialist: "Senin–Sabtu, sesuai jadwal masing-masing dokter",
    inpatient: "24 Jam",
    emergency: "24 Jam (setiap hari, termasuk hari libur)",
    pharmacy: "24 Jam",
    laboratory: "Setiap hari 06.00–22.00",
    radiology: "Setiap hari 07.00–21.00",
    registration: "Senin–Jumat 07.00–19.00 | Sabtu 07.00–14.00",
  },

  insurance: {
    bpjs: true,
    bpjsNote: "RSMBS adalah FKTL (Fasilitas Kesehatan Tingkat Lanjut) mitra BPJS Kesehatan. Wajib membawa kartu BPJS aktif + surat rujukan dari Puskesmas/FKTP.",
    swasta: ["Prudential", "AIA", "Allianz", "Manulife", "AXA Mandiri", "Lippo Insurance", "Inhealth", "Generali", "Sinarmas"],
    payment: ["Tunai", "Kartu Debit", "Kartu Kredit (Visa/Mastercard)", "Transfer Bank (BCA, BRI, BNI, Mandiri, BJB)", "QRIS", "GoPay", "OVO"],
  },

  location: {
    address: "Jl. Raya Laswi, Ciheulang, Kec. Ciparay, Kabupaten Bandung, Jawa Barat 40375",
    landmark: "Dekat Pasar Ciparay, di Jalan Raya Laswi arah Majalaya",
    googleMaps: "https://maps.google.com/?q=Rumah+Sakit+Muhammadiyah+Bandung+Selatan",
    parking: "Tersedia parkir luas di area RS",
  },
};
