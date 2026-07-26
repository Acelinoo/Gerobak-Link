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
    code: '01 / 04',
    pkgTag: 'PKG.01',
    title: 'Company Profile',
    description: 'Untuk bisnis yang butuh tampil kredibel — profil, layanan, tim, dan kontak, tersusun rapi dan cepat diakses.',
    priceRange: 'MULAI RP 3.500.000',
    tags: ['Responsif', 'SEO Dasar', 'CMS Ringan'],
    surfaceColor: 'var(--navy)',
    demoUrl: 'https://company.gerobaklink.com',
  },
  {
    id: 'kat-02',
    code: '02 / 04',
    pkgTag: 'PKG.02',
    title: 'Toko Online',
    description: 'Katalog produk, keranjang, checkout, dan integrasi pembayaran — dibangun untuk konversi, bukan cuma tampil.',
    priceRange: 'MULAI RP 5.000.000',
    tags: ['Payment Gateway', 'Manajemen Stok', 'Multi Produk'],
    surfaceColor: 'var(--crimson)',
    demoUrl: 'https://store.gerobaklink.com',
  },
  {
    id: 'kat-03',
    code: '03 / 04',
    pkgTag: 'PKG.03',
    title: 'Undangan Digital',
    description: 'Undangan pernikahan atau acara dengan nuansa personal, RSVP, galeri, dan musik — elegan tanpa terasa template.',
    priceRange: 'MULAI RP 450.000',
    tags: ['RSVP Online', 'Galeri Foto', 'Custom Nama'],
    surfaceColor: 'var(--rose)',
    demoUrl: 'https://undangan.gerobaklink.com',
  },
  {
    id: 'kat-04',
    code: '04 / 04',
    pkgTag: 'PKG.04',
    title: 'Portofolio',
    description: 'Untuk individu kreatif — karya, studi kasus, dan identitas personal yang mudah diingat orang lain.',
    priceRange: 'MULAI RP 1.800.000',
    tags: ['Studi Kasus', 'CV Interaktif', 'Personal Brand'],
    surfaceColor: 'var(--ochre)',
    demoUrl: 'https://portofolio.gerobaklink.com',
  },
];
