export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    id: 'faq-01',
    category: 'Proses & Durasi',
    question: 'Berapa lama proses pembuatan websitenya?',
    answer:
      'Pengerjaan standar memakan waktu 3–7 hari kerja tergantung kelengkapan materi (logo, foto, dan teks) serta paket yang dipilih. Kami menjamin pengerjaan tepat waktu sesuai timeline yang disepakati bersama.',
  },
  {
    id: 'faq-02',
    category: 'Harga & Fasilitas',
    question: 'Apakah harga sudah termasuk Domain dan Cloud Hosting?',
    answer:
      'Ya! Semua paket di GerobakLink sudah ALL-IN mencakup nama domain pilihan (.com / .id), cloud hosting berkecepatan tinggi, sertifikat keamanan SSL (HTTPS), dan konfigurasi email bisnis gratis untuk 1 tahun pertama.',
  },
  {
    id: 'faq-03',
    category: 'Konten & Desain',
    question: 'Bagaimana jika saya belum punya tulisan atau foto sendiri?',
    answer:
      'Jangan khawatir. Tim kami menyediakan bantuan penyusunan copywriting dasar, struktur halaman, serta kurasi foto stock resolusi tinggi yang relevan agar websitemu langsung tampil menarik dan profesional.',
  },
  {
    id: 'faq-04',
    category: 'Pengelolaan',
    question: 'Apakah websitenya bisa saya edit sendiri setelah selesai?',
    answer:
      'Tentu saja. Kami memberikan akses penuh dashboard CMS yang mudah dipahami. Kami juga menyertakan panduan video singkat agar kamu bisa mengubah teks, mengganti foto, atau menambah produk secara mandiri tanpa koding.',
  },
  {
    id: 'faq-05',
    category: 'Harga & Fasilitas',
    question: 'Bagaimana sistem dan mekanisme pembayarannya?',
    answer:
      'Sistem pembayaran menggunakan DP 50% di awal sebelum pengerjaan dimulai, dan pelunasan 50% sisanya dilakukan setelah website selesai diuji coba & kamu sudah puas dengan hasilnya sebelum serah terima domain & akun.',
  },
  {
    id: 'faq-06',
    category: 'Teknis & SEO',
    question: 'Apakah website ramah layar HP (Mobile) dan Google (SEO)?',
    answer:
      '100% Responsif! Website dirancang agar nyaman diakses di smartphone, tablet, maupun laptop. Kami juga mengoptimasi kecepatan loading serta memasang struktur SEO Dasar agar website kamu mudah ditemukan di Google.',
  },
  {
    id: 'faq-07',
    category: 'Garansi & Support',
    question: 'Bagaimana jika ada kendala atau eror setelah website selesai?',
    answer:
      'Kami menyediakan Garansi Maintenance dan Dukungan Teknis gratis selama 3–6 bulan pasca serah terima. Jika terjadi bug, error, atau gangguan server, tim teknis kami akan langsung memperbaikinya tanpa biaya tambahan.',
  },
  {
    id: 'faq-08',
    category: 'Teknis & SEO',
    question: 'Apakah bisa request fitur khusus seperti Payment Gateway atau Booking?',
    answer:
      'Bisa! Kami siap mengintegrasikan fitur tambahan sesuai kebutuhan bisnismu, seperti integrasi pembayaran otomatis (Midtrans/Xendit/QRIS), kalkulator ongkir, sistem booking jadwal online, hingga form order WhatsApp.',
  },
];
