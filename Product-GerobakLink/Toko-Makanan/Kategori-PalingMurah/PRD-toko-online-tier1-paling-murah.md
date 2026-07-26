# PRD — Toko Online: Tier PALING MURAH (Contoh Kasus: Toko Makanan)

**Konteks:** Ini adalah situs **contoh/demo** untuk kategori paket **Toko Online** milik INDEKS — Studio Web, tier termurah. Situs ini AKAN jadi link "Lihat contoh situs →" di katalog INDEKS, jadi harus benar-benar berfungsi (bukan mockup statis) dan enak dipakai calon pembeli asli.

**Penting — ini BUKAN situs INDEKS itu sendiri.** Jangan pakai design token/estetika blueprint INDEKS (Space Grotesk, hairline border, cursor reticle, dst). Ini situs milik bisnis fiktif contoh — sebuah toko makanan — jadi harus terasa seperti toko makanan asli: hangat, appetizing, gampang dipahami orang awam yang mau pesan makanan dari HP-nya.

---

## 1. Studi Kasus & Posisi Tier

**Nama bisnis contoh (placeholder):** "Dapur Sambel Raja" — **[LENGKAPI: nama toko asli kalau mau dipakai jadi demo publik]**

Tier Paling Murah ditujukan untuk usaha kecil/rumahan yang baru mulai jualan online — 1 orang kelola, belum butuh dashboard rumit, cukup terima order lewat WhatsApp yang sudah rapi formatnya.

**Batasan tier ini (jangan over-engineer):**
- 1 halaman saja (single page, semua section di satu URL)
- Tidak ada login/akun customer
- Tidak ada payment gateway — pembayaran statis + verifikasi manual
- Tidak ada admin panel custom — pengaturan toko diedit lewat Google Sheets

---

## 2. Struktur Halaman (1 halaman)

1. **Header** — Nama toko + indikator status **BUKA / TUTUP** real-time (hijau/merah) berdasar jam operasional dari config.
2. **Menu** — Daftar item makanan (grid/list, 1 kolom di mobile, 2-3 kolom di desktop).
3. **Keranjang** — Floating button (pojok bawah, sticky) dengan badge jumlah item → buka sebagai drawer/modal.
4. **Popup Checkout** — Muncul saat klik "Checkout" dari keranjang.
5. **Footer** — Jam operasional lengkap, kontak, alamat singkat.

---

## 3. Detail Fitur

### 3.1 Menu & Varian
- Tiap item: foto, nama, harga, deskripsi singkat, pilihan varian (radio button — contoh: Original / Pedas Dikit / Pedas), tombol "+ Tambah ke Keranjang".
- **Stok habis:** kalau item ditandai habis di config, tombol tambah nonaktif + label "Habis" menimpa foto/harga.
- Kalau memungkinkan, kelompokkan per kategori sederhana (mis. Makanan / Minuman) walau tetap 1 halaman.

### 3.2 Keranjang
- List item dengan varian yang dipilih, qty (+/-), dan **catatan pesanan per item** (input teks bebas, mis. "setengah mateng", "extra sambal").
- Subtotal otomatis terupdate.
- Input **nomor WhatsApp customer — wajib diisi** sebelum lanjut checkout (validasi sederhana: minimal 10 digit, hanya angka).

### 3.3 Popup Checkout
Urutan konten dalam popup:
1. Ringkasan pesanan (nama item, varian, qty, catatan, subtotal, total).
2. Pilihan **metode pembayaran** — hanya menampilkan metode yang sedang **aktif** di config:
   - **QRIS** — tampilkan gambar QR statis + instruksi "Screenshot bukti bayar, nanti kirim bareng pesan WA."
   - **Transfer Bank** — tampilkan nama bank, nomor rekening, nama pemilik rekening.
   - **COD (Bayar di Tempat)** — catatan "Bayar saat ambil/terima pesanan."
3. Tombol final **"Kirim Pesanan via WhatsApp"** → generate pesan WA otomatis (format di bawah) lalu buka `wa.me/[nomor_pemilik]?text=...` di tab baru.
4. Setelah tombol diklik, tampilkan **nomor pesanan/kode struk** (mis. `#DSR-0421`) di layar sebagai bukti, dengan tombol screenshot-friendly.

**Format pesan WA otomatis (contoh):**
```
Halo Dapur Sambel Raja, saya mau pesan:
- Ayam Geprek (Pedas) x2 — catatan: setengah mateng
- Es Teh Manis x1
Total: Rp 45.000
Metode Bayar: QRIS (bukti terlampir)
Nama: [nama customer]
No. HP: [no wa customer]
Kode pesanan: #DSR-0421
```

### 3.4 Jam Operasional
- Kalau waktu saat ini di luar jam buka (dari config), seluruh tombol "+ Tambah ke Keranjang" nonaktif, ganti dengan banner: *"Maaf, kami sedang tutup. Jam operasional: 09.00–21.00 WIB."*
- Status header (BUKA/TUTUP) update otomatis tanpa perlu refresh manual kalau memungkinkan (cek ulang tiap menit).

---

## 4. Sumber Konfigurasi — Google Sheets (bukan database, bukan admin panel)

Pemilik toko cukup edit langsung di Google Sheet, tanpa login ke sistem terpisah. Struktur yang disarankan:

**Sheet "Menu"** — kolom: `id`, `nama`, `deskripsi`, `harga`, `foto_url`, `varian` (dipisah koma), `tersedia` (TRUE/FALSE), `kategori`

**Sheet "Pengaturan"** — kolom `key` / `value`, berisi baris seperti:
`jam_buka`, `jam_tutup`, `qris_aktif`, `transfer_aktif`, `cod_aktif`, `no_rekening`, `nama_bank`, `nama_pemilik_rekening`, `no_wa_pemilik`, `qris_image_url`

**Catatan teknis penting:** JANGAN panggil Google Sheets API langsung dari browser (butuh service account key yang harus dirahasiakan). Buat 1 API route sederhana di server (mis. `app/api/config/route.ts` kalau pakai Next.js) yang membaca Sheet lewat service account di server-side, lalu kirim hasilnya sebagai JSON ke frontend. Ini satu-satunya bagian "backend" di tier ini — tidak perlu database sungguhan.

---

## 5. Rekomendasi Tambahan (di luar yang diminta awal)

- **Nomor pesanan/kode struk** otomatis tiap kali checkout, biar customer punya bukti yang bisa ditunjukkan.
- **Validasi nomor WA wajib** sebelum bisa checkout.
- **Mobile-first** — mayoritas customer pesan dari HP; keranjang & popup checkout harus nyaman dipakai satu tangan.
- Tampilkan estimasi total jelas di tiap tahap (keranjang & popup) supaya tidak ada kejutan harga.

---

## 6. Arahan Desain

- **Bukan** gaya blueprint INDEKS. Desain untuk toko makanan sungguhan: palet warna hangat (merah/oranye/krem), boleh rounded corner (nggak ada aturan sudut tajam di sini), tipografi yang gampang dibaca untuk daftar menu.
- Foto makanan jadi elemen visual utama — kalau belum ada foto asli, pakai placeholder foto makanan yang related dulu, tandai **[LENGKAPI: foto asli]**.
- Warna & CTA cukup 1 warna aksen kuat (mis. merah cabai) untuk tombol utama (Tambah ke Keranjang, Checkout, Kirim via WA) — jangan terlalu ramai.

---

## 7. Requirement Teknis

- **Stack:** Next.js (App Router) + TypeScript direkomendasikan — konsisten dengan tooling studio, dan memudahkan bikin 1 API route kecil untuk Google Sheets tanpa expose credential. Kalau mau lebih ringan, vanilla HTML/CSS/JS + 1 serverless function juga bisa, asal credential Sheets tetap di server-side.
- **Responsive** penuh mobile-first.
- **Aksesibilitas dasar:** kontras warna cukup, tombol keyboard-accessible, ukuran tap target minimal 44px di mobile.
- **Performa:** foto dikompres/lazy-load, tanpa library JS berat yang tidak perlu.

---

## 8. Di Luar Cakupan Tier Ini

- Payment gateway otomatis (baru masuk di tier Medium ke atas)
- Admin panel dengan login (baru masuk di tier Medium ke atas)
- Akun/login customer, riwayat pesanan tersimpan di server
- Ongkir otomatis / integrasi ojol

---

## 9. Checklist Konten Sebelum Live

- [ ] Nama toko & logo final
- [ ] Daftar menu, harga, dan varian real
- [ ] Foto asli tiap menu
- [ ] Nomor rekening, nama bank, gambar QRIS asli
- [ ] Nomor WhatsApp pemilik untuk terima order
- [ ] Jam operasional real
- [ ] Google Sheet sudah dibuat & dihubungkan (service account credential siap)

---

## 10. Prompt Ringkas untuk Antigravity

> Bangun website Toko Online tier "Paling Murah" untuk contoh bisnis toko makanan bernama "Dapur Sambel Raja" (placeholder). Situs 1 halaman, TIDAK menggunakan design system INDEKS (bukan blueprint aesthetic) — desain harus terasa seperti toko makanan asli: hangat, mobile-first, foto makanan jadi elemen utama.
>
> Fitur wajib: (1) daftar menu dengan varian pilihan (radio button) dan tombol tambah ke keranjang, tandai item habis stok sebagai nonaktif; (2) keranjang berupa drawer/modal dengan qty, catatan pesanan per item, dan input nomor WA wajib; (3) popup checkout menampilkan ringkasan pesanan, lalu pilihan metode bayar (QRIS/Transfer/COD) — hanya tampilkan metode yang aktif di config — diakhiri tombol yang men-generate pesan WhatsApp otomatis (format pesan sesuai §3.3) dan membuka `wa.me` link, plus menampilkan kode pesanan di layar; (4) jam operasional yang menonaktifkan seluruh pemesanan kalau toko sedang tutup, dengan banner status.
>
> Semua pengaturan toko (menu, harga, stok, toggle metode bayar, jam buka-tutup, info rekening/QRIS, nomor WA pemilik) diambil dari Google Sheets lewat 1 API route server-side (jangan expose credential ke client) — TIDAK perlu database maupun admin panel di tier ini.
>
> Pakai Next.js (App Router) + TypeScript. Bagian yang ditandai `[LENGKAPI: ...]` di PRD gunakan placeholder yang jelas, jangan mengarang data final.
