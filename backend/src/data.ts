export const hospitalData = {
    about: {
      name: "Rumah Sakit Mitra Bandung Selatan",
      shortName: "RSMBS",
      tagline: "Mitra Kesehatan Anda",
      taglineHash: "#RSMBSMitraKesehatan",
      founded: "2015",
      accreditation: "KARS Paripurna (Versi 2022)",
      type: "Rumah Sakit Umum Swasta Tipe B",
      address: "Jl. Moch. Toha No. 123, Bandung Selatan, Jawa Barat 40253",
      phone: "(022) 7310-XXXX",
      igd: "(022) 7310-0001",
      email: "info@rsmbs.co.id",
      website: "www.rsmbs.co.id",
      whatsapp: "0811-2000-XXXX",
      facebook: "https://www.facebook.com/rsmbsofficial/",
      instagram: "https://www.instagram.com/rsmbsofficial/",
      googleRating: "4.2",
      totalDoctors: "85"
    },
    doctors: [
      { name: "Dr. Budi Santoso, Sp.A", specialist: "Anak", schedule: "Senin – Jumat 08:00 – 12:00", room: "Poliklinik Anak" },
      { name: "Dr. Siti Aminah, Sp.JP", specialist: "Jantung", schedule: "Senin – Kamis 13:00 – 17:00", room: "Poliklinik Jantung" },
      { name: "Dr. Ahmad Rahman, Sp.M", specialist: "Mata", schedule: "Selasa – Sabtu 09:00 – 14:00", room: "Poliklinik Mata" },
      { name: "Dr. Maya Sari, Sp.KK", specialist: "Kulit", schedule: "Senin – Jumat 10:00 – 15:00", room: "Poliklinik Kulit" },
      { name: "Dr. Hendro Wibowo, Sp.THT", specialist: "THT", schedule: "Rabu – Minggu 08:00 – 13:00", room: "Poliklinik THT" },
      { name: "Dr. Lina Kusuma, Sp.KG", specialist: "Gigi", schedule: "Senin – Sabtu 09:00 – 16:00", room: "Poliklinik Gigi" },
      { name: "Dr. Rina Pratiwi, Sp.OG", specialist: "Kebidanan", schedule: "Senin – Jumat 09:00 – 14:00", room: "Poliklinik Kebidanan" },
      { name: "Dr. Andi Pratama, Sp.OT", specialist: "Ortopedi", schedule: "Selasa – Jumat 10:00 – 16:00", room: "Poliklinik Ortopedi" },
      { name: "Dr. Farhan Halim, Sp.PD", specialist: "Penyakit Dalam", schedule: "Senin – Sabtu 07:00 – 14:00", room: "Poliklinik Penyakit Dalam" },
      { name: "Dr. Yusuf Hakim, Sp.S", specialist: "Saraf", schedule: "Senin – Jumat 14:00 – 18:00", room: "Poliklinik Saraf" }
    ],
    services: [
      "IGD 24 Jam dengan respon time < 5 menit",
      "ICU / ICCU / NICU (Neonatal ICU)",
      "Kamar Operasi 6 ruang, termasuk operasi jantung",
      "Hemodialisis (Cuci Darah) — 20 tempat",
      "Kemoterapi Rawat Jalan",
      "Laboratorium Klinik & Patologi Anatomi",
      "Radiologi: X-Ray, USG, CT Scan 128-slice, MRI 1.5 Tesla",
      "Endoskopi & Kolonoskopi",
      "Fisioterapi & Rehabilitasi Medik",
      "Bank Darah RS",
      "Apotek 24 Jam",
      "Ambulans 24 Jam",
      "Poliklinik Umum & Spesialis (18 poli)",
      "Pemeriksaan Kesehatan (MCU)",
      "BPJS Kesehatan"
    ],
    rooms: {
      vvip: { name: "VVIP", desc: "Suite room, AC, TV, sofa tamu, kulkas, wifi", tariff: "Rp 1.500.000 – Rp 2.500.000/malam", capacity: 5 },
      vip: { name: "VIP", desc: "Kamar private, AC, TV, sofa, wifi", tariff: "Rp 800.000 – Rp 1.200.000/malam", capacity: 20 },
      kelas1: { name: "Kelas I", desc: "Kamar 2 bed, AC, TV, wifi", tariff: "Rp 400.000 – Rp 600.000/malam", capacity: 30 },
      kelas2: { name: "Kelas II", desc: "Kamar 4 bed, AC, wifi", tariff: "Rp 250.000 – Rp 400.000/malam", capacity: 40 },
      kelas3: { name: "Kelas III", desc: "Kamar 6 bed, kipas angin, wifi", tariff: "Rp 150.000 – Rp 250.000/malam", capacity: 60 },
      bpjs: { name: "Kelas BPJS", desc: "Sesuai hak kelas BPJS (I/II/III)", tariff: "Gratis sesuai ketentuan BPJS", capacity: 80 }
    },
    schedules: {
      outpatient: "Senin - Jumat: 07.00 – 20.00 | Sabtu: 07.00 – 15.00",
      specialist: "Senin - Sabtu, sesuai jadwal dokter",
      inpatient: "24 Jam",
      emergency: "24 Jam (setiap hari)",
      pharmacy: "24 Jam",
      laboratory: "Setiap hari 06.00 – 22.00",
      radiology: "Setiap hari 07.00 – 21.00",
      registration: "Senin - Jumat: 07.00 – 19.00 | Sabtu: 07.00 – 14.00"
    },
    insurance: {
      bpjs: true,
      swasta: ["Prudential", "AXA Mandiri", "Allianz", "Sinarmas", "Lippo", "Admedika", "Inhealth", "Generali", "BNI Life"],
      payment: ["Tunai", "Debit", "Kartu Kredit (Visa/MC/JCB)", "Transfer Bank (BCA, BRI, BNI, Mandiri)", "QRIS", "GoPay", "OVO"]
    }
  };
