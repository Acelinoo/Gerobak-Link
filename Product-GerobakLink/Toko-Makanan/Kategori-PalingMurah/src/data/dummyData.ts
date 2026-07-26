import { MenuItem, StoreConfig } from '@/types/store';

export const DUMMY_STORE_CONFIG: StoreConfig = {
  nama_toko: 'Sambal Bakar',
  tagline: 'Sensasi Pedas Mantap, Bikin Ketagihan! Fresh Made Every Day',
  alamat: 'Jl. Raya Kuliner No. 18, Kebayoran Baru, Jakarta Selatan',
  jam_buka: '09:00',
  jam_tutup: '21:00',
  no_wa_pemilik: '6281234567890',
  metode_bayar: {
    qris_aktif: true,
    transfer_aktif: true,
    cod_aktif: true,
  },
  qris_image_url: '/images/qris.png',
  rekening: [
    {
      nama_bank: 'BCA',
      no_rekening: '8830-1928-441',
      nama_pemilik: 'Sambal Bakar',
    },
    {
      nama_bank: 'Mandiri',
      no_rekening: '137-00-1992031-8',
      nama_pemilik: 'Sambal Bakar',
    },
  ],
};

export const DUMMY_CATEGORIES = [
  { id: 'semua', label: '🔥 Semua Menu' },
  { id: 'makanan-utama', label: '🍗 Makanan Utama' },
  { id: 'paket-hemat', label: '🍱 Paket Hemat' },
  { id: 'extra-sambal', label: '🌶️ Extra Sambal' },
  { id: 'minuman', label: '🥤 Minuman Segar' },
];

export const DUMMY_MENU_ITEMS: MenuItem[] = [
  {
    id: 'menu-1',
    nama: 'Ayam Geprek Sambal Bakar',
    deskripsi: 'Ayam goreng krispi renyah digeprek dengan sambal korek pedas gurih khas Sambal Bakar + nasi hangat.',
    harga: 22000,
    foto_url: '/images/ayam-geprek.png',
    kategori: 'makanan-utama',
    tersedia: true,
    varian: ['Original (Tidak Pedas)', 'Pedas Sedang (Level 1)', 'Pedas Nampol (Level 3)', 'Pedas Mampus (Level 5)'],
    badge: '🏆 Best Seller',
  },
  {
    id: 'menu-2',
    nama: 'Nasi Bebek Goreng Madura',
    deskripsi: 'Bebek goreng empuk dengan bumbu rempah meresap, disiram bumbu hitam khas Madura yang gurih pedas.',
    harga: 32000,
    foto_url: '/images/bebek-goreng.png',
    kategori: 'makanan-utama',
    tersedia: true,
    varian: ['Bumbu Hitam Original', 'Extra Pedas Bumbu Hitam'],
    badge: '⭐ Rekomendasi',
  },
  {
    id: 'menu-3',
    nama: 'Paket Komplit Ayam Penyet',
    deskripsi: 'Nasi hangat + Ayam penyet krispi + Tahu & Tempe goreng + Lalapan segar + Sambel terasi bakar.',
    harga: 27000,
    foto_url: '/images/paket-penyet.png',
    kategori: 'paket-hemat',
    tersedia: true,
    varian: ['Sambel Terasi Bakar', 'Sambel Ijo Limau'],
    badge: ' Hemat Komplit',
  },
  {
    id: 'menu-4',
    nama: 'Nasi Goreng Sambel Ijo',
    deskripsi: 'Nasi goreng bumbu sambal ijo khas dapur lengkap dengan telor ceplok dan kerupuk renyah.',
    harga: 20000,
    foto_url: '/images/ayam-geprek.png',
    kategori: 'makanan-utama',
    tersedia: false, // Out of stock example for demonstration
    varian: ['Pedas Sedang', 'Pedas Banget'],
  },
  {
    id: 'menu-5',
    nama: 'Extra Sambal Bakar (Cup)',
    deskripsi: 'Cup ekstra sambal bakar spesial dengan cabai pilihan.',
    harga: 5000,
    foto_url: '/images/paket-penyet.png',
    kategori: 'extra-sambal',
    tersedia: true,
    varian: ['Pedas Sedang', 'Super Pedas'],
  },
  {
    id: 'menu-6',
    nama: 'Es Teh Manis Jumbo',
    deskripsi: 'Es teh manis dingin dingin dalam gelas jumbo 500ml penyegar rasa pedas.',
    harga: 6000,
    foto_url: '/images/es-teh.png',
    kategori: 'minuman',
    tersedia: true,
    varian: ['Manis Normal', 'Sedikit Gula (Less Sugar)', 'Tawar'],
    badge: '🥤 Favorit',
  },
  {
    id: 'menu-7',
    nama: 'Es Jeruk Peras Murni',
    deskripsi: 'Es jeruk peras manis segar dari jeruk peras pilihan tanpa bahan pengawet.',
    harga: 8000,
    foto_url: '/images/es-teh.png',
    kategori: 'minuman',
    tersedia: true,
    varian: ['Dingin Pakai Es', 'Warm (Jeruk Hangat)'],
  },
];
