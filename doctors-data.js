// ============================================================================
// RSMBS — DOCTORS DATA (Single Source of Truth)
// Dipakai oleh: index.html (listing), dokter.html (detail).
// Jaga konsistensi struktur dengan netlify/functions/data.ts (backend SARI AI).
// ============================================================================

window.DOCTORS = [
  {
    id: 'ahmad-fauzi',
    name: 'dr. Ahmad Fauzi, Sp.PD',
    spec: 'Penyakit Dalam',
    category: 'Penyakit Dalam',
    img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&h=400&q=80',
    schedule: [
      { day: 'Senin',   start: '08:00', end: '14:00' },
      { day: 'Selasa',  start: '08:00', end: '14:00' },
      { day: 'Rabu',    start: '08:00', end: '14:00' },
      { day: 'Kamis',   start: '08:00', end: '14:00' },
      { day: 'Jumat',   start: '08:00', end: '11:30' },
    ],
    room: 'Poliklinik Penyakit Dalam — Lt. 2',
    experienceYears: 18,
    education: [
      'S1 Kedokteran — Universitas Padjadjaran (2008)',
      'Sp. Penyakit Dalam — Universitas Padjadjaran (2014)',
    ],
    expertise: ['Diabetes Mellitus', 'Hipertensi', 'Hepatitis', 'Gangguan Pencernaan', 'Kolesterol Tinggi'],
    bio: 'Lulusan FK UNPAD dengan fokus penanganan penyakit dalam dewasa, terutama diabetes, hipertensi, dan gangguan pencernaan. Aktif memberikan edukasi gaya hidup sehat kepada pasien.',
  },
  {
    id: 'siti-rahmawati',
    name: 'dr. Siti Rahmawati, Sp.A',
    spec: 'Dokter Anak (Pediatri)',
    category: 'Anak',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&h=400&q=80',
    schedule: [
      { day: 'Senin',  start: '08:00', end: '13:00' },
      { day: 'Selasa', start: '08:00', end: '13:00' },
      { day: 'Rabu',   start: '08:00', end: '13:00' },
      { day: 'Kamis',  start: '08:00', end: '13:00' },
      { day: 'Jumat',  start: '08:00', end: '11:00' },
      { day: 'Sabtu',  start: '08:00', end: '12:00' },
    ],
    room: 'Poliklinik Anak — Lt. 2',
    experienceYears: 12,
    education: [
      'S1 Kedokteran — Universitas Indonesia (2010)',
      'Sp. Anak — Universitas Indonesia (2017)',
    ],
    expertise: ['Tumbuh Kembang Anak', 'Imunisasi', 'Nutrisi Anak', 'Demam Berdarah', 'Asma Anak'],
    bio: 'Spesialis Anak yang ramah dengan pasien kecil. Berpengalaman menangani imunisasi rutin, tumbuh kembang, dan penyakit infeksi pada bayi & anak.',
  },
  {
    id: 'budi-santoso',
    name: 'dr. Budi Santoso, Sp.OG',
    spec: 'Kandungan & Kebidanan',
    category: 'Kandungan',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&h=400&q=80',
    schedule: [
      { day: 'Selasa', start: '09:00', end: '14:00' },
      { day: 'Rabu',   start: '09:00', end: '14:00' },
      { day: 'Kamis',  start: '09:00', end: '14:00' },
      { day: 'Jumat',  start: '09:00', end: '11:30' },
      { day: 'Sabtu',  start: '09:00', end: '13:00' },
    ],
    room: 'Poliklinik Kebidanan & Kandungan — Lt. 3',
    experienceYears: 20,
    education: [
      'S1 Kedokteran — Universitas Gadjah Mada (2006)',
      'Sp. Obstetri & Ginekologi — Universitas Gadjah Mada (2013)',
    ],
    expertise: ['Kehamilan Risiko Tinggi', 'USG 4D', 'Persalinan Normal & SC', 'KB & Kontrasepsi', 'Kista & Mioma'],
    bio: 'Spesialis Obstetri & Ginekologi dengan 20 tahun pengalaman. Fokus pada perawatan ibu hamil dan persalinan aman, termasuk USG 4D dan kasus kandungan.',
  },
  {
    id: 'dewi-kartika',
    name: 'dr. Dewi Kartika, Sp.JP',
    spec: 'Jantung & Pembuluh Darah',
    category: 'Jantung',
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&h=400&q=80',
    schedule: [
      { day: 'Senin',  start: '13:00', end: '18:00' },
      { day: 'Selasa', start: '13:00', end: '18:00' },
      { day: 'Rabu',   start: '13:00', end: '18:00' },
      { day: 'Kamis',  start: '13:00', end: '18:00' },
      { day: 'Jumat',  start: '13:00', end: '17:00' },
    ],
    room: 'Poliklinik Jantung — Lt. 3',
    experienceYears: 15,
    education: [
      'S1 Kedokteran — Universitas Indonesia (2008)',
      'Sp. Jantung & Pembuluh Darah — Universitas Indonesia (2015)',
    ],
    expertise: ['Hipertensi', 'Penyakit Jantung Koroner', 'Aritmia', 'Gagal Jantung', 'EKG & Echocardiography'],
    bio: 'Spesialis Jantung dengan pendekatan preventif. Berpengalaman menangani hipertensi, penyakit jantung koroner, dan aritmia.',
  },
  {
    id: 'rizky-pratama',
    name: 'dr. Rizky Pratama, Sp.BS',
    spec: 'Bedah Saraf',
    category: 'Bedah',
    img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&h=400&q=80',
    schedule: [
      { day: 'Senin',  start: '09:00', end: '14:00' },
      { day: 'Rabu',   start: '09:00', end: '14:00' },
      { day: 'Jumat',  start: '09:00', end: '12:00' },
    ],
    room: 'Poliklinik Bedah — Lt. 3',
    experienceYears: 14,
    education: [
      'S1 Kedokteran — Universitas Airlangga (2009)',
      'Sp. Bedah Saraf — Universitas Indonesia (2016)',
    ],
    expertise: ['Cedera Kepala', 'Tumor Otak', 'Saraf Terjepit (HNP)', 'Hidrosefalus', 'Operasi Tulang Belakang'],
    bio: 'Spesialis Bedah Saraf yang menangani kasus cedera kepala, tumor otak, dan saraf terjepit. Mengutamakan teknik bedah minimal invasif.',
  },
  {
    id: 'nurul-hidayah',
    name: 'dr. Nurul Hidayah, Sp.N',
    spec: 'Saraf (Neurologi)',
    category: 'Saraf',
    img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&h=400&q=80',
    schedule: [
      { day: 'Selasa', start: '09:00', end: '15:00' },
      { day: 'Rabu',   start: '09:00', end: '15:00' },
      { day: 'Kamis',  start: '09:00', end: '15:00' },
      { day: 'Jumat',  start: '09:00', end: '11:30' },
    ],
    room: 'Poliklinik Saraf — Lt. 2',
    experienceYears: 11,
    education: [
      'S1 Kedokteran — Universitas Padjadjaran (2011)',
      'Sp. Neurologi — Universitas Padjadjaran (2018)',
    ],
    expertise: ['Stroke', 'Migrain & Sakit Kepala', 'Epilepsi', 'Vertigo', 'Gangguan Tidur'],
    bio: 'Spesialis Saraf yang fokus pada penanganan stroke akut, migrain kronis, dan gangguan saraf perifer.',
  },
  {
    id: 'yoga-perdana',
    name: 'dr. Yoga Perdana, Sp.OT',
    spec: 'Ortopedi & Traumatologi',
    category: 'Ortopedi',
    img: 'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=400&h=400&q=80',
    schedule: [
      { day: 'Senin',  start: '10:00', end: '15:00' },
      { day: 'Selasa', start: '10:00', end: '15:00' },
      { day: 'Rabu',   start: '10:00', end: '15:00' },
      { day: 'Kamis',  start: '10:00', end: '15:00' },
      { day: 'Jumat',  start: '10:00', end: '11:30' },
      { day: 'Sabtu',  start: '09:00', end: '13:00' },
    ],
    room: 'Poliklinik Ortopedi — Lt. 3',
    experienceYears: 13,
    education: [
      'S1 Kedokteran — Universitas Brawijaya (2009)',
      'Sp. Ortopedi & Traumatologi — Universitas Indonesia (2016)',
    ],
    expertise: ['Patah Tulang', 'Cedera Olahraga', 'Penggantian Sendi (Lutut/Pinggul)', 'Skoliosis', 'Osteoporosis'],
    bio: 'Spesialis Ortopedi dengan keahlian dalam penanganan trauma muskuloskeletal, cedera olahraga, serta penggantian sendi lutut dan pinggul.',
  },
  {
    id: 'maya-lestari',
    name: 'dr. Maya Lestari, Sp.B',
    spec: 'Bedah Umum',
    category: 'Bedah',
    img: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=400&h=400&q=80',
    schedule: [
      { day: 'Selasa', start: '08:00', end: '13:00' },
      { day: 'Rabu',   start: '08:00', end: '13:00' },
      { day: 'Sabtu',  start: '08:00', end: '12:00' },
    ],
    room: 'Poliklinik Bedah — Lt. 3',
    experienceYears: 16,
    education: [
      'S1 Kedokteran — Universitas Diponegoro (2007)',
      'Sp. Bedah Umum — Universitas Indonesia (2014)',
    ],
    expertise: ['Apendisitis', 'Hernia', 'Benjolan/Tumor Jinak', 'Bedah Tiroid', 'Bedah Laparoskopi'],
    bio: 'Spesialis Bedah Umum dengan pengalaman menangani kasus apendisitis, hernia, dan tumor jinak. Mahir dalam teknik bedah laparoskopi.',
  },
  {
    id: 'farhan-halim',
    name: 'dr. Farhan Halim, Sp.M',
    spec: 'Mata',
    category: 'Mata',
    img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&h=400&q=80',
    schedule: [
      { day: 'Senin',  start: '09:00', end: '14:00' },
      { day: 'Selasa', start: '09:00', end: '14:00' },
      { day: 'Rabu',   start: '09:00', end: '14:00' },
      { day: 'Kamis',  start: '09:00', end: '14:00' },
      { day: 'Jumat',  start: '09:00', end: '11:30' },
      { day: 'Sabtu',  start: '08:00', end: '12:00' },
    ],
    room: 'Poliklinik Mata — Lt. 2',
    experienceYears: 10,
    education: [
      'S1 Kedokteran — Universitas Padjadjaran (2012)',
      'Sp. Mata — Universitas Padjadjaran (2019)',
    ],
    expertise: ['Katarak', 'Glaukoma', 'Refraksi (Minus/Plus)', 'Mata Merah', 'LASIK Konsultasi'],
    bio: 'Spesialis Mata yang menangani gangguan refraksi, katarak, dan glaukoma. Memberikan konsultasi pra-LASIK untuk pasien yang ingin lepas kacamata.',
  },
  {
    id: 'lina-kusuma',
    name: 'dr. Lina Kusuma, Sp.KK',
    spec: 'Kulit & Kelamin',
    category: 'Kulit & Kelamin',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&h=400&q=80',
    schedule: [
      { day: 'Senin',  start: '10:00', end: '15:00' },
      { day: 'Selasa', start: '10:00', end: '15:00' },
      { day: 'Rabu',   start: '10:00', end: '15:00' },
      { day: 'Kamis',  start: '10:00', end: '15:00' },
      { day: 'Jumat',  start: '10:00', end: '11:30' },
    ],
    room: 'Poliklinik Kulit & Kelamin — Lt. 2',
    experienceYears: 9,
    education: [
      'S1 Kedokteran — Universitas Indonesia (2013)',
      'Sp. Dermatologi & Venereologi — Universitas Indonesia (2020)',
    ],
    expertise: ['Jerawat', 'Eksim', 'Psoriasis', 'Infeksi Kulit', 'Estetika Medis Dasar'],
    bio: 'Spesialis Kulit & Kelamin yang menangani masalah kulit umum seperti jerawat, eksim, dan infeksi kulit. Memberikan layanan estetika medis dasar.',
  },
  {
    id: 'rina-pratiwi',
    name: 'dr. Rina Pratiwi, Sp.THT',
    spec: 'THT (Telinga, Hidung, Tenggorokan)',
    category: 'THT',
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&h=400&q=80',
    schedule: [
      { day: 'Rabu',   start: '08:00', end: '13:00' },
      { day: 'Kamis',  start: '08:00', end: '13:00' },
      { day: 'Jumat',  start: '08:00', end: '11:30' },
      { day: 'Sabtu',  start: '08:00', end: '12:00' },
      { day: 'Minggu', start: '09:00', end: '12:00' },
    ],
    room: 'Poliklinik THT — Lt. 2',
    experienceYears: 12,
    education: [
      'S1 Kedokteran — Universitas Airlangga (2010)',
      'Sp. THT-KL — Universitas Airlangga (2017)',
    ],
    expertise: ['Sinusitis', 'Tonsilitis', 'Vertigo', 'Gangguan Pendengaran', 'Polip Hidung'],
    bio: 'Spesialis THT yang berpengalaman menangani sinusitis kronis, tonsilitis, gangguan pendengaran, dan kasus vertigo perifer.',
  },
  {
    id: 'yusuf-hakim',
    name: 'dr. Yusuf Hakim, Sp.KJ',
    spec: 'Kesehatan Jiwa (Psikiatri)',
    category: 'Jiwa',
    img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&h=400&q=80',
    schedule: [
      { day: 'Senin',  start: '14:00', end: '18:00' },
      { day: 'Selasa', start: '14:00', end: '18:00' },
      { day: 'Rabu',   start: '14:00', end: '18:00' },
      { day: 'Kamis',  start: '14:00', end: '18:00' },
      { day: 'Jumat',  start: '14:00', end: '17:00' },
    ],
    room: 'Poliklinik Kesehatan Jiwa — Lt. 4',
    experienceYears: 11,
    education: [
      'S1 Kedokteran — Universitas Gadjah Mada (2011)',
      'Sp. Kedokteran Jiwa — Universitas Gadjah Mada (2018)',
    ],
    expertise: ['Depresi', 'Gangguan Cemas', 'Insomnia', 'Stres Pekerjaan', 'Konseling Pasangan'],
    bio: 'Spesialis Kesehatan Jiwa dengan pendekatan empatik dan rahasia. Membantu pasien mengatasi depresi, kecemasan, dan masalah tidur.',
  },
];

// ── Helpers ─────────────────────────────────────────────────────────────────
window.DOCTOR_HELPERS = {
  /**
   * Format jadwal jadi string ringkas. Mengelompokkan hari berurutan dengan jam yang sama.
   * Contoh:
   *   [Sen,Sel,Rab,Kam] 08-14, [Jum] 08-11:30  →  "Sen–Kam 08:00–14:00 · Jum 08:00–11:30"
   *   [Sen..Jum] 13-18                          →  "Sen–Jum 13:00–18:00"
   *   [Sel,Rab,Sab] 08-13                       →  "Sel, Rab, Sab 08:00–13:00"
   */
  formatScheduleShort(schedule) {
    if (!schedule || schedule.length === 0) return '—';
    const dayShort = { Senin:'Sen', Selasa:'Sel', Rabu:'Rab', Kamis:'Kam', Jumat:'Jum', Sabtu:'Sab', Minggu:'Min' };
    const order = ['Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu'];
    const sorted = [...schedule].sort((a,b) => order.indexOf(a.day) - order.indexOf(b.day));

    // Pisah jadwal jadi "groups" berdasarkan kesamaan jam (start-end).
    const groups = [];
    for (const slot of sorted) {
      const key = `${slot.start}-${slot.end}`;
      const last = groups[groups.length - 1];
      if (last && last.key === key) {
        last.days.push(slot.day);
      } else {
        groups.push({ key, start: slot.start, end: slot.end, days: [slot.day] });
      }
    }

    // Format setiap group → "Hari range jam"
    const fmtDays = (days) => {
      const idx = days.map(d => order.indexOf(d));
      const contiguous = idx.every((v,i) => i === 0 || v === idx[i-1] + 1);
      if (contiguous && days.length > 1) return `${dayShort[days[0]]}–${dayShort[days[days.length-1]]}`;
      if (days.length === 1)             return dayShort[days[0]];
      return days.map(d => dayShort[d]).join(', ');
    };

    return groups.map(g => `${fmtDays(g.days)} ${g.start}–${g.end}`).join(' · ');
  },

  /**
   * Sama seperti formatScheduleShort tapi return array `[{days, time}]`
   * untuk dirender vertikal sebagai daftar (1 baris per group jam).
   */
  getScheduleGroups(schedule) {
    if (!schedule || schedule.length === 0) return [];
    const dayShort = { Senin:'Sen', Selasa:'Sel', Rabu:'Rab', Kamis:'Kam', Jumat:'Jum', Sabtu:'Sab', Minggu:'Min' };
    const order = ['Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu'];
    const sorted = [...schedule].sort((a,b) => order.indexOf(a.day) - order.indexOf(b.day));

    const groups = [];
    for (const slot of sorted) {
      const key = `${slot.start}-${slot.end}`;
      const last = groups[groups.length - 1];
      if (last && last.key === key) last.daysFull.push(slot.day);
      else groups.push({ key, start: slot.start, end: slot.end, daysFull: [slot.day] });
    }
    return groups.map(g => {
      const idx = g.daysFull.map(d => order.indexOf(d));
      const contiguous = idx.every((v,i) => i === 0 || v === idx[i-1] + 1);
      let days;
      if (contiguous && g.daysFull.length > 1) {
        days = `${dayShort[g.daysFull[0]]}–${dayShort[g.daysFull[g.daysFull.length-1]]}`;
      } else if (g.daysFull.length === 1) {
        days = dayShort[g.daysFull[0]];
      } else {
        days = g.daysFull.map(d => dayShort[d]).join(', ');
      }
      return { days, time: `${g.start}–${g.end}` };
    });
  },

  /** Cari dokter berdasarkan id (slug). */
  findById(id) {
    return window.DOCTORS.find(d => d.id === id) || null;
  },

  /** WA link untuk buat janji. */
  buildWaLink(doctor) {
    const text = encodeURIComponent(
      `Halo RSMBS, saya ingin buat janji konsultasi dengan ${doctor.name} (${doctor.spec}). Mohon info jadwal terdekat. Terima kasih.`
    );
    return `https://wa.me/6281122222986?text=${text}`;
  },
};
