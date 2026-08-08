export interface PackageItem {
  id: string;
  code: string;
  pkgTag: string;
  title: string;
  description: string;
  priceRange: string;
  tags: string[];
  surfaceColor: string;
  demoUrl: string;
}

export const PACKAGES: PackageItem[] = [
  {
    id: 'kat-01',
    code: '01 / 06',
    pkgTag: 'PKG.01',
    title: 'Company Profile',
    description: 'Untuk bisnis yang butuh tampil kredibel — profil, layanan, tim, dan kontak, tersusun rapi dan cepat diakses.',
    priceRange: 'MULAI RP 3.500.000',
    tags: ['Responsif', 'SEO Dasar', 'CMS Ringan'],
    surfaceColor: 'var(--navy)',
    demoUrl: 'https://wa.me/6289655223792?text=Halo%20GerobakLink,%20saya%20ingin%20konsultasi%20paket%20Company%20Profile',
  },
  {
    id: 'kat-02',
    code: '02 / 06',
    pkgTag: 'PKG.02',
    title: 'Toko Online',
    description: 'Katalog produk, keranjang, checkout, dan integrasi pembayaran — dibangun untuk konversi, bukan cuma tampil.',
    priceRange: 'MULAI RP 5.000.000',
    tags: ['Payment Gateway', 'Manajemen Stok', 'Multi Produk'],
    surfaceColor: 'var(--crimson)',
    demoUrl: 'https://wa.me/6289655223792?text=Halo%20GerobakLink,%20saya%20ingin%20konsultasi%20paket%20Toko%20Online',
  },
  {
    id: 'kat-03',
    code: '03 / 06',
    pkgTag: 'PKG.03',
    title: 'Undangan Digital',
    description: 'Undangan pernikahan atau acara dengan nuansa personal, RSVP, galeri, dan musik — elegan tanpa terasa template.',
    priceRange: 'MULAI RP 450.000',
    tags: ['RSVP Online', 'Galeri Foto', 'Custom Nama'],
    surfaceColor: 'var(--rose)',
    demoUrl: 'https://wa.me/6289655223792?text=Halo%20GerobakLink,%20saya%20ingin%20konsultasi%20paket%20Undangan%20Digital',
  },
  {
    id: 'kat-04',
    code: '04 / 06',
    pkgTag: 'PKG.04',
    title: 'Portofolio',
    description: 'Untuk individu kreatif — karya, studi kasus, dan identitas personal yang mudah diingat orang lain.',
    priceRange: 'MULAI RP 1.800.000',
    tags: ['Studi Kasus', 'CV Interaktif', 'Personal Brand'],
    surfaceColor: 'var(--ochre)',
    demoUrl: 'https://wa.me/6289655223792?text=Halo%20GerobakLink,%20saya%20ingin%20konsultasi%20paket%20Portofolio',
  },
  {
    id: 'kat-05',
    code: '05 / 06',
    pkgTag: 'PKG.05',
    title: 'Web Pendidikan',
    description: 'Website pendidikan modern untuk sekolah & institusi — portal sekolah, SIMAK, PPDB Online, dan administrasi akademik.',
    priceRange: 'MULAI RP 1.200.000',
    tags: ['Portal Sekolah', 'Akademik Terintegrasi', 'Mudah Digunakan'],
    surfaceColor: 'var(--navy)',
    demoUrl: 'https://wa.me/6289655223792?text=Halo%20GerobakLink,%20saya%20ingin%20konsultasi%20paket%20Web%20Pendidikan',
  },
  {
    id: 'kat-06',
    code: '06 / 06',
    pkgTag: 'PKG.06',
    title: 'Joki Tugas',
    description: 'Format rapi, pengerjaan cepat, dan jaminan aman — dirancang buat bantu tugasmu beres tepat waktu, bukan asal selesai.',
    priceRange: 'MULAI RP 150.000',
    tags: ['Proses Cepat', 'Support Berbagai Mapel/Matkul'],
    surfaceColor: 'var(--crimson)',
    demoUrl: 'https://wa.me/6289655223792?text=Halo%20GerobakLink,%20saya%20ingin%20konsultasi%20Joki%20Tugas',
  }
];
