# Rancangan UI/UX Komprehensif: Website Utama Gerobak-Link

Dokumen ini berisi panduan komprehensif mengenai rancangan User Interface (UI) dan User Experience (UX) untuk website utama **Gerobak-Link** (Company Profile). Desain ini dirancang untuk menampilkan kesan profesional, tepercaya, elegan, namun tetap bersih dan mudah dinavigasi oleh calon klien.

---

## 1. Konsep Visual & Estetika

Panduan gaya (Style Guide) Gerobak-Link difokuskan pada harmoni antara warna dominan Navy (Biru Dongker) dan Putih untuk menciptakan kontras yang kuat, tingkat keterbacaan tinggi, serta kesan teknologi yang mapan.

### Palet Warna
*   **Primary Color (Warna Utama):** **Navy Blue (`#0F172A` atau `#1E3A8A`)**
    *   *Penggunaan:* Header/Navbar (saat di-scroll), Teks utama (Heading), Latar belakang bagian CTA (Call to Action), dan Tombol Utama (Primary Button).
    *   *Makna:* Mewakili kepercayaan, profesionalisme, keamanan, dan keahlian di bidang teknologi/digital.
*   **Background / Base Color:** **Pure White (`#FFFFFF`) & Off-White/Light Gray (`#F8FAFC`)**
    *   *Penggunaan:* `#FFFFFF` digunakan sebagai latar belakang utama halaman agar terkesan luas dan bersih (clean). `#F8FAFC` digunakan sebagai latar belakang selang-seling antar-section (misal untuk section "Mengapa Memilih Kami") agar ada pemisah visual tanpa garis keras.
*   **Accent Color (Warna Aksen):** **Soft Blue (`#3B82F6`) atau Subtle Silver**
    *   *Penggunaan:* Efek *hover* pada tombol, ikon-ikon fitur, dan tautan (links).

### Tipografi
*   **Heading (Judul):** Menggunakan font *Sans-serif* modern dan geometris seperti **'Plus Jakarta Sans'**, **'Outfit'**, atau **'Inter'**. Memberikan kesan tegas, kekinian, dan mudah dibaca pada ukuran besar.
*   **Body Text (Teks Paragraf):** Menggunakan font **'Inter'** atau **'Roboto'** dengan *line-height* (jarak antar baris) sekitar `1.6` agar nyaman dibaca panjang.

### Gaya Desain (CSS Style)
*   **Clean & Minimalist:** Pemanfaatan *Whitespace* (ruang kosong) yang luas. Jarak antar elemen (padding/margin) dibuat lega agar pengunjung tidak merasa "sesak" saat membaca informasi.
*   **Bentuk Geometris Halus:** Menggunakan *border-radius* sedang (sekitar `8px` - `12px`) untuk tombol dan kartu (*cards*). Ini memberikan kesan ramah (tidak terlalu kaku/tajam) namun tetap profesional.
*   **Soft Shadows:** Penggunaan bayangan (drop shadow) yang sangat halus dan terdistribusi luas pada kartu layanan atau portofolio untuk menciptakan efek kedalaman (depth), bukan bayangan yang keras/pekat. *(Contoh CSS: `box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05)`)*.
*   **Subtle Glassmorphism:** Efek kaca buram transparan (menggunakan `backdrop-filter: blur()`) hanya diaplikasikan pada Navbar saat di-scroll ke bawah.

---

## 2. Struktur Tata Letak (Layout) - Halaman Beranda

Halaman utama dirancang untuk menceritakan sebuah "alur persuasif", dari perkenalan hingga ajakan bertindak (CTA).

### A. Header / Navbar (Sticky)
*   **Kiri:** Logo **Gerobak-Link** (Varian warna Navy jika background putih, varian Putih jika background Navy).
*   **Tengah:** Navigasi minimalis: Beranda, Layanan, Portofolio, Tentang Kami.
*   **Kanan:** Tombol CTA bergaris luar (Outline Button) bertuliskan **"Hubungi Kami"** atau **"Konsultasi Gratis"**.

### B. Hero Section (Kesan Pertama)
*   **Layout:** *Split 2 Kolom* (Kiri Teks, Kanan Visual) atau *Center-Aligned* (Teks di tengah dengan visual pendukung di bawahnya). Direkomendasikan *Split 2 Kolom* untuk desktop.
*   **Sisi Kiri (Teks):**
    *   *Headline (H1):* Tebal, menggunakan warna Navy. Contoh: "Wujudkan Website Impian Bisnis Anda Bersama Gerobak-Link."
    *   *Sub-headline:* Paragraf singkat (abu-abu gelap) yang menjelaskan bahwa Gerobak-Link menyediakan jasa pembuatan web cepat, elegan, dan terjangkau.
    *   *Tombol:* 2 Tombol berdampingan. Tombol Utama (Solid Navy: **"Lihat Paket Layanan"**) dan Tombol Sekunder (Teks/Outline: **"Lihat Portofolio"**).
*   **Sisi Kanan (Visual):** Ilustrasi 3D modern atau *Mockup* UI website elegan yang seolah mengambang (floating). Hindari menggunakan stok foto orang tersenyum klise; fokus pada *hasil karya* teknologi.

### C. Section "Mengapa Memilih Kami?" (Unique Selling Proposition / USP)
*   **Background:** Off-White (`#F8FAFC`).
*   **Layout:** Judul di tengah ("Kenapa Gerobak-Link?"). Di bawahnya terdapat Grid berisi 3 atau 4 Kartu (Cards).
*   **Isi Kartu:** Masing-masing kartu memiliki:
    *   Ikon minimalis (warna aksen biru/Navy).
    *   Judul fitur (misal: "Desain Responsif", "SEO Friendly", "Performa Cepat", "Dukungan Penuh").
    *   Deskripsi singkat (2-3 baris teks).

### D. Section Portofolio / Klien Kami
*   **Background:** Putih (`#FFFFFF`).
*   **Logos Marquee:** Baris berjalan (auto-scroll) berisi logo-logo klien yang pernah bekerja sama (dibuat *grayscale* / hitam-putih agar rapi).
*   **Showcase Project:** 3 Kartu Portofolio unggulan. Menampilkan *thumbnail* gambar website klien, nama proyek, dan kategori (misal: "E-Commerce", "Company Profile").

### E. Section Alur Kerja (Proses Pembuatan)
*   Menjelaskan betapa mudahnya bekerja sama dengan Gerobak-Link.
*   **Layout:** Garis waktu horizontal (Timeline) berisi 4 langkah sederhana:
    1. Konsultasi & Kebutuhan
    2. Perancangan & Desain (UI/UX)
    3. Pengembangan Web (Coding)
    4. Peluncuran & Serah Terima (Launch)

### F. Call to Action (CTA) Banner
*   **Background:** Warna dominan **Navy** dengan elemen desain minimalis (seperti pola garis samar atau gradien tipis).
*   **Konten:** Teks putih tebal di tengah: "Siap Meningkatkan Kehadiran Digital Bisnis Anda?".
*   **Tombol:** Tombol solid berwarna putih dengan teks Navy bertuliskan **"Pilih Paket Layanan"**.

### G. Footer
*   **Background:** Navy Gelap (Lebih gelap dari warna utama, misal `#0B1120`).
*   **Struktur 4 Kolom:**
    1. Deskripsi Singkat: Logo Gerobak-Link putih, dan satu paragraf tentang misi perusahaan.
    2. Tautan Cepat: Beranda, Layanan, Portofolio, Tentang.
    3. Kontak: Email, No WhatsApp, Alamat kantor.
    4. Sosial Media: Ikon-ikon minimalis (Instagram, LinkedIn, dll).
*   **Copyright:** Garis pemisah tipis di bagian paling bawah, beserta tulisan "© 2026 Gerobak-Link. All rights reserved."

---

## 3. Alur Navigasi (User Flow)

Perjalanan pengguna (User Journey) dirancang seperti sebuah "Corong" (*Funnel*) menuju konversi (melihat paket):

1.  **Titik Masuk (Entry):** Pengunjung mendarat di *Hero Section*. Mereka langsung disajikan *Value Proposition* utama dan tombol yang jelas.
2.  **Eksplorasi (Discovery):** Pengunjung melakukan *scroll* ke bawah. Mereka akan diyakinkan oleh fitur unggulan (USP) dan bukti sosial berupa logo klien serta portofolio (membangun *Trust*).
3.  **Pemahaman (Education):** Melalui section Alur Kerja, pengunjung menyadari bahwa prosesnya mudah dan tidak merepotkan.
4.  **Arahan Bertindak (Action):** Di bagian bawah halaman (CTA Banner), alih-alih melepaskan pengunjung, fokus utama mengarahkan mereka untuk menekan tombol **"Pilih Paket Layanan"**.
5.  **Tujuan Akhir (Conversion Point):** Klik pada tombol tersebut akan menavigasi pengunjung ke halaman (atau section) **Daftar Paket Harga**. Dari sana, mereka akan memilih paket dan diarahkan ke WhatsApp untuk closing.

---

## 4. Elemen Interaktif & Animasi

Interaksi dirancang agar terasa "mahal" dan modern, yang berarti menghindari animasi berlebihan atau *bouncing* yang terlalu cepat.

*   **Hover State pada Tombol Utama:**
    *   Saat *cursor* diarahkan (*hover*), tombol akan mengalami perubahan warna latar sedikit lebih terang, dan ukurannya membesar secara sangat halus (`transform: scale(1.03)`).
    *   Diberikan efek transisi lembut: `transition: all 0.3s ease-in-out`.
*   **Efek Angkat Kartu (Card Elevation):**
    *   Pada section USP dan Portofolio, ketika kartu di-hover, kartu tersebut akan naik sedikit (`transform: translateY(-5px)`) dan bayangannya (*box-shadow*) menjadi lebih kentara. Ini memberi umpan balik visual bahwa elemen tersebut dapat diklik atau berinteraksi.
*   **Navbar Transisi Blur:**
    *   Saat berada di atas (*scroll position 0*), Navbar transparan tanpa batas. Begitu pengguna *scroll* ke bawah, Navbar berubah memiliki latar belakang semi-transparan (putih dengan *opacity* 85%) dan diberikan efek `backdrop-filter: blur(10px)` serta garis batas tipis di bawahnya.
*   **Fade-in on Scroll (Lazy Reveal):**
    *   Elemen-elemen seperti gambar portofolio atau teks judul tiap section tidak langsung muncul. Saat pengguna melakukan *scroll* dan elemen tersebut masuk ke dalam *viewport*, elemen akan muncul perlahan (*fade-in*) dengan sedikit pergerakan dari bawah ke atas (*slide-up*). Ini memberikan kesan website yang dinamis dan terstruktur.
*   **Interaksi Gambar Klien (Logos):**
    *   Logo klien awalnya berwarna *grayscale* dengan *opacity* 60%. Saat di-hover, logo berubah warna sepenuhnya (*full color*) dan *opacity* 100%.

---
Dokumen ini berfungsi sebagai fondasi utama (Blueprint). Dengan berpatokan pada panduan ini, Anda dapat membangun *dummy website* yang memiliki arah visual dan struktural yang jelas.
