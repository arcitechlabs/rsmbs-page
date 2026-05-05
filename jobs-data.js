// ============================================================================
// RSMBS — JOBS DATA (Single Source of Truth)
// Dipakai oleh: karir.html.
// Saat update, sinkron juga dengan netlify/functions/data.ts (career section).
// ============================================================================

window.JOBS = [
  // ── TENAGA MEDIS ───────────────────────────────────────────────────────────
  {
    id: 'dokter-spesialis-anak',
    title: 'Dokter Spesialis Anak (Sp.A)',
    department: 'Poliklinik Anak',
    category: 'medis',
    type: 'Full-time',
    postedDate: '2026-04-15',
    deadline: '2026-05-31',
    isUrgent: true,
    summary: 'Bergabung sebagai dokter spesialis anak untuk pelayanan rawat jalan & rawat inap pediatri.',
    requirements: [
      'STR & SIP aktif (Sp.A)',
      'Pengalaman minimal 2 tahun di RS Tipe B/A',
      'Bersedia jadwal praktik 5–6 hari/minggu',
      'Memiliki rekomendasi IDAI',
      'Mampu bekerja dalam tim multidisiplin',
    ],
    responsibilities: [
      'Pemeriksaan dan diagnosis pasien anak rawat jalan',
      'Visite pasien rawat inap pediatri',
      'Konsultasi tumbuh kembang & imunisasi',
      'Edukasi orang tua dan keluarga pasien',
    ],
    benefits: [
      'Fee per pasien kompetitif',
      'BPJS Kesehatan & Ketenagakerjaan',
      'Tunjangan transportasi',
      'Pelatihan & seminar berkala',
    ],
  },
  {
    id: 'dokter-umum-igd',
    title: 'Dokter Umum (IGD)',
    department: 'IGD 24 Jam',
    category: 'medis',
    type: 'Full-time / Shift',
    postedDate: '2026-04-20',
    deadline: '2026-05-25',
    isUrgent: true,
    summary: 'Dokter umum untuk shift IGD 24 jam, menangani pasien gawat darurat dan triase.',
    requirements: [
      'STR & SIP aktif',
      'Sertifikat ACLS & ATLS masih berlaku',
      'Pengalaman IGD minimal 1 tahun (fresh graduate dipertimbangkan)',
      'Bersedia kerja shift (pagi/sore/malam)',
      'Sehat jasmani & rohani',
    ],
    responsibilities: [
      'Triase dan penanganan awal pasien gawat darurat',
      'Stabilisasi pasien sebelum rujukan/MRS',
      'Pengisian rekam medis IGD lengkap',
      'Koordinasi dengan dokter spesialis on-call',
    ],
    benefits: [
      'Gaji pokok kompetitif + tunjangan shift',
      'Insentif jaga malam',
      'BPJS Kesehatan & Ketenagakerjaan',
      'Pelatihan ACLS/ATLS rutin',
    ],
  },
  {
    id: 'perawat-icu',
    title: 'Perawat ICU',
    department: 'ICU / ICCU',
    category: 'medis',
    type: 'Full-time / Shift',
    postedDate: '2026-04-10',
    deadline: '2026-05-30',
    isUrgent: false,
    summary: 'Perawat untuk unit perawatan intensif (ICU/ICCU) dengan pengalaman penanganan pasien kritis.',
    requirements: [
      'D3/S1 Keperawatan + STR aktif',
      'Pengalaman ICU minimal 2 tahun',
      'Sertifikat BTCLS/PPGD',
      'Mampu mengoperasikan ventilator & syringe pump',
      'Bersedia kerja shift',
    ],
    responsibilities: [
      'Asuhan keperawatan pasien kritis 24 jam',
      'Monitoring hemodinamik & vital sign berkala',
      'Operasi alat life support',
      'Dokumentasi rekam medis lengkap',
    ],
    benefits: [
      'Gaji + tunjangan ICU',
      'Insentif shift malam',
      'BPJS Kesehatan & Ketenagakerjaan',
      'Pelatihan in-house ICU',
    ],
  },
  {
    id: 'perawat-umum',
    title: 'Perawat Umum (Beberapa Posisi)',
    department: 'Rawat Inap & Rawat Jalan',
    category: 'medis',
    type: 'Full-time / Shift',
    postedDate: '2026-04-22',
    deadline: '2026-05-31',
    isUrgent: false,
    summary: 'Perawat untuk unit rawat inap (Kelas I, II, III, VIP) dan poliklinik. Multiple positions.',
    requirements: [
      'D3/S1 Keperawatan + STR aktif',
      'Sertifikat BTCLS/PPGD diutamakan',
      'Komunikasi yang baik dan empati tinggi',
      'Bersedia kerja shift',
      'Fresh graduate dipersilakan melamar',
    ],
    responsibilities: [
      'Asuhan keperawatan pasien rawat inap',
      'Pemberian obat sesuai instruksi dokter',
      'Edukasi pasien & keluarga',
      'Dokumentasi rekam medis',
    ],
    benefits: [
      'Gaji UMR+ + tunjangan shift',
      'BPJS Kesehatan & Ketenagakerjaan',
      'Tunjangan makan',
      'Jenjang karir jelas',
    ],
  },
  {
    id: 'bidan',
    title: 'Bidan',
    department: 'Poliklinik Kebidanan & VK',
    category: 'medis',
    type: 'Full-time',
    postedDate: '2026-04-18',
    deadline: '2026-05-30',
    isUrgent: false,
    summary: 'Bidan untuk poli kebidanan, ruang bersalin (VK), dan asuhan kebidanan komprehensif.',
    requirements: [
      'D3/D4 Kebidanan + STR aktif',
      'Pengalaman 1+ tahun (fresh graduate dipertimbangkan)',
      'Sertifikat APN (Asuhan Persalinan Normal)',
      'Bersedia on-call',
    ],
    responsibilities: [
      'Asuhan ibu hamil, bersalin, nifas',
      'Asuhan bayi baru lahir',
      'Konseling KB & laktasi',
      'Dokumentasi rekam medis kebidanan',
    ],
    benefits: [
      'Gaji UMR+ + tunjangan jaga',
      'BPJS Kesehatan & Ketenagakerjaan',
      'Pelatihan APN & USG dasar',
    ],
  },

  // ── TENAGA PENUNJANG MEDIS ────────────────────────────────────────────────
  {
    id: 'apoteker',
    title: 'Apoteker',
    department: 'Instalasi Farmasi',
    category: 'penunjang',
    type: 'Full-time',
    postedDate: '2026-04-12',
    deadline: '2026-05-28',
    isUrgent: false,
    summary: 'Apoteker untuk pelayanan farmasi rawat jalan, rawat inap, dan apotek 24 jam.',
    requirements: [
      'S1 Apoteker + STRA aktif',
      'Pengalaman 1+ tahun di RS/apotek (fresh graduate dipersilakan)',
      'Mampu mengoperasikan SIM Farmasi',
      'Memahami pelayanan BPJS',
    ],
    responsibilities: [
      'Skrining resep & dispensing obat',
      'Konseling pasien rawat jalan',
      'Manajemen stok obat',
      'Visite farmasi klinis (rawat inap)',
    ],
    benefits: [
      'Gaji kompetitif + tunjangan profesi',
      'BPJS Kesehatan & Ketenagakerjaan',
      'Tunjangan PPA (Pendidikan Profesi Berkelanjutan)',
    ],
  },
  {
    id: 'analis-laboratorium',
    title: 'Analis Laboratorium',
    department: 'Laboratorium Klinik',
    category: 'penunjang',
    type: 'Full-time / Shift',
    postedDate: '2026-04-25',
    deadline: '2026-06-05',
    isUrgent: false,
    summary: 'Analis laboratorium klinik untuk pemeriksaan hematologi, kimia klinik, mikrobiologi.',
    requirements: [
      'D3/D4 Analis Kesehatan / TLM + STR aktif',
      'Pengalaman 1+ tahun di lab RS',
      'Mampu mengoperasikan alat hematology analyzer & chemistry analyzer',
      'Bersedia kerja shift',
    ],
    responsibilities: [
      'Pengambilan sampel (phlebotomy)',
      'Pemeriksaan hematologi, kimia darah, urinalisis',
      'Quality control alat laboratorium',
      'Pelaporan hasil ke dokter',
    ],
    benefits: [
      'Gaji UMR+ + tunjangan shift',
      'BPJS Kesehatan & Ketenagakerjaan',
      'Pelatihan teknis alat baru',
    ],
  },
  {
    id: 'radiografer',
    title: 'Radiografer',
    department: 'Radiologi',
    category: 'penunjang',
    type: 'Full-time',
    postedDate: '2026-04-28',
    deadline: '2026-06-10',
    isUrgent: false,
    summary: 'Radiografer untuk pemeriksaan X-Ray, USG, CT Scan 128-slice, dan MRI 1.5 Tesla.',
    requirements: [
      'D3/D4 Teknik Radiologi + STR aktif',
      'Pengalaman dengan CT Scan & MRI diutamakan',
      'Sertifikat proteksi radiasi (BAPETEN)',
      'Bersedia stand-by on-call',
    ],
    responsibilities: [
      'Pengoperasian alat X-Ray, USG, CT Scan, MRI',
      'Posisioning pasien sesuai prosedur',
      'Quality control gambar radiologi',
      'Edukasi pasien tentang prosedur',
    ],
    benefits: [
      'Gaji + tunjangan radiasi',
      'BPJS Kesehatan & Ketenagakerjaan',
      'Pelatihan modalitas baru',
    ],
  },
  {
    id: 'fisioterapis',
    title: 'Fisioterapis',
    department: 'Rehabilitasi Medik',
    category: 'penunjang',
    type: 'Full-time',
    postedDate: '2026-04-30',
    deadline: '2026-06-15',
    isUrgent: false,
    summary: 'Fisioterapis untuk rehabilitasi pasien pasca-bedah, stroke, ortopedi, dan tumbuh kembang.',
    requirements: [
      'D3/S1 Fisioterapi + STR aktif',
      'Pengalaman 1+ tahun (fresh graduate dipertimbangkan)',
      'Memahami modalitas: TENS, USG terapi, traksi',
      'Komunikasi yang baik dengan pasien',
    ],
    responsibilities: [
      'Asesmen & rencana terapi fisioterapi',
      'Penerapan modalitas dan exercise therapy',
      'Edukasi home program kepada pasien',
      'Dokumentasi rekam terapi',
    ],
    benefits: [
      'Gaji kompetitif',
      'BPJS Kesehatan & Ketenagakerjaan',
      'Pelatihan teknik manual therapy',
    ],
  },

  // ── NON-MEDIS ──────────────────────────────────────────────────────────────
  {
    id: 'customer-service',
    title: 'Customer Service / Front Office',
    department: 'Pelayanan Pelanggan',
    category: 'non-medis',
    type: 'Full-time',
    postedDate: '2026-04-26',
    deadline: '2026-05-31',
    isUrgent: false,
    summary: 'Customer service di front office, melayani pendaftaran, informasi, dan keluhan pasien.',
    requirements: [
      'Min. D3 segala jurusan',
      'Pengalaman customer service / front office RS diutamakan',
      'Penampilan menarik & komunikasi baik',
      'Mampu mengoperasikan komputer & SIM RS',
      'Bersedia bekerja shift',
    ],
    responsibilities: [
      'Pendaftaran pasien rawat jalan',
      'Memberikan informasi layanan & dokter',
      'Penanganan keluhan pelanggan tahap awal',
      'Koordinasi dengan poliklinik & kasir',
    ],
    benefits: [
      'Gaji UMR+',
      'BPJS Kesehatan & Ketenagakerjaan',
      'Seragam & tunjangan makan',
      'Jenjang karir',
    ],
  },
  {
    id: 'it-support',
    title: 'IT Support',
    department: 'IT & SIM RS',
    category: 'non-medis',
    type: 'Full-time',
    postedDate: '2026-04-08',
    deadline: '2026-05-28',
    isUrgent: false,
    summary: 'IT support untuk pemeliharaan SIM RS, jaringan, dan helpdesk user.',
    requirements: [
      'D3/S1 Teknik Informatika / Sistem Informasi',
      'Pengalaman support SIM RS / aplikasi BPJS (V-Claim, Mobile JKN)',
      'Memahami networking dasar (LAN/WAN, switch, router)',
      'Mampu troubleshoot hardware & OS Windows/Linux',
    ],
    responsibilities: [
      'Helpdesk user (dokter, perawat, admin)',
      'Pemeliharaan SIM RS & integrasi BPJS',
      'Setup workstation & printer',
      'Backup data & maintenance jaringan',
    ],
    benefits: [
      'Gaji kompetitif',
      'BPJS Kesehatan & Ketenagakerjaan',
      'Sertifikasi IT (jika diperlukan)',
      'WFO + on-call',
    ],
  },
  {
    id: 'akuntan',
    title: 'Staff Akuntansi',
    department: 'Keuangan',
    category: 'non-medis',
    type: 'Full-time',
    postedDate: '2026-04-14',
    deadline: '2026-06-01',
    isUrgent: false,
    summary: 'Staff akuntansi untuk pencatatan transaksi keuangan, klaim BPJS, dan pelaporan.',
    requirements: [
      'S1 Akuntansi (IPK ≥ 3.00)',
      'Pengalaman 1+ tahun di RS/healthcare diutamakan',
      'Memahami PSAK & perpajakan dasar',
      'Mahir Excel & sistem akuntansi (Accurate/Zahir/SAP)',
    ],
    responsibilities: [
      'Jurnal transaksi harian',
      'Rekonsiliasi bank & klaim BPJS',
      'Penyusunan laporan keuangan bulanan',
      'Pelaporan pajak (PPh & PPN)',
    ],
    benefits: [
      'Gaji kompetitif',
      'BPJS Kesehatan & Ketenagakerjaan',
      'Tunjangan profesi & PPL',
    ],
  },
];

// ── Helpers ─────────────────────────────────────────────────────────────────
window.JOB_HELPERS = {
  /** Cari job berdasarkan id. */
  findById(id) {
    return window.JOBS.find(j => j.id === id) || null;
  },

  /** Format tanggal ISO ke "5 Mei 2026". */
  formatDate(iso) {
    const months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
    const d = new Date(iso);
    return `${d.getUTCDate()} ${months[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
  },

  /** Sisa hari sampai deadline. Negatif = sudah lewat. */
  daysUntilDeadline(iso) {
    const today = new Date();
    today.setUTCHours(0,0,0,0);
    const deadline = new Date(iso);
    deadline.setUTCHours(0,0,0,0);
    return Math.round((deadline - today) / (1000 * 60 * 60 * 24));
  },

  /** Email apply link. */
  buildEmailLink(job) {
    const subject = encodeURIComponent(`[KARIR RSMBS] Lamaran ${job.title}`);
    const body = encodeURIComponent(
      `Kepada Tim HRD RSMBS,\n\n` +
      `Saya tertarik untuk melamar posisi *${job.title}* (Departemen ${job.department}).\n\n` +
      `Berikut detail singkat saya:\n` +
      `- Nama lengkap: \n` +
      `- Pendidikan terakhir: \n` +
      `- Pengalaman kerja: \n` +
      `- Nomor STR/SIP (jika tenaga medis): \n` +
      `- Nomor HP/WA: \n\n` +
      `Saya lampirkan CV, ijazah, transkrip, STR/SIP, dan dokumen pendukung lainnya.\n\n` +
      `Terima kasih atas kesempatan ini.\n\n` +
      `Hormat saya,\n[Nama Anda]`
    );
    return `mailto:hrd@rsmbs.ac.id?subject=${subject}&body=${body}`;
  },

  /** WhatsApp apply link. */
  buildWaLink(job) {
    const text = encodeURIComponent(
      `Halo HRD RSMBS, saya tertarik melamar posisi *${job.title}* (${job.department}). ` +
      `Mohon info prosedur pengiriman lamaran. Terima kasih.`
    );
    return `https://wa.me/6281122222986?text=${text}`;
  },

  /** Label warna untuk kategori. */
  categoryLabel(cat) {
    const map = {
      medis: { label: 'Tenaga Medis', color: 'teal' },
      penunjang: { label: 'Penunjang Medis', color: 'navy' },
      'non-medis': { label: 'Non-Medis', color: 'gold' },
    };
    return map[cat] || { label: cat, color: 'navy' };
  },
};
