export interface Variant {
  id: string;
  nama: string;
}

export interface MenuItem {
  id: string;
  nama: string;
  deskripsi: string;
  harga: number;
  foto_url: string;
  kategori: string;
  tersedia: boolean;
  varian: string[]; // e.g. ["Original", "Pedas Dikit", "Pedas Pol"]
  badge?: string;   // e.g. "Best Seller", "Rekomendasi"
}

export interface CartItem {
  cartItemId: string; // unique ID combining item.id + variant
  menuItem: MenuItem;
  selectedVariant: string;
  quantity: number;
  catatan: string;
}

export interface BankAccount {
  nama_bank: string;
  no_rekening: string;
  nama_pemilik: string;
}

export interface StoreConfig {
  nama_toko: string;
  tagline: string;
  alamat: string;
  jam_buka: string; // e.g. "09:00"
  jam_tutup: string; // e.g. "21:00"
  no_wa_pemilik: string; // formatted cleanly, e.g. "6281234567890"
  metode_bayar: {
    qris_aktif: boolean;
    transfer_aktif: boolean;
    cod_aktif: boolean;
  };
  qris_image_url: string;
  rekening: BankAccount[];
}

export interface OrderData {
  orderCode: string;
  customerName: string;
  customerPhone: string;
  items: CartItem[];
  totalAmount: number;
  paymentMethod: 'qris' | 'transfer' | 'cod';
  createdAt: string;
}
