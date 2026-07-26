# PRD — Website Utama (Katalog 4 Paket Website)

**Nama proyek (placeholder):** INDEKS — Studio Web
**Jenis dokumen:** Product Requirements Document untuk build via Antigravity
**File referensi wajib dilampirkan:** `indeks-demo.html` (prototype visual — jadi ground truth, bukan sekadar inspirasi)

---

## 1. Ringkasan Proyek

Website utama ini adalah **hub/katalog** yang menampilkan 4 kategori website yang dijual studio ini:

1. Company Profile
2. Toko Online
3. Undangan Digital
4. Portofolio

Tugas tunggal halaman ini: membantu calon customer (segmen campuran — UMKM, personal brand, korporat) **memahami perbedaan tiap kategori, melihat contoh nyata, membaca ulasan, lalu memulai konsultasi/kontak.** Ini bukan e-commerce — tidak ada checkout langsung di situs ini, tujuan akhirnya adalah lead/kontak.

**Yang tidak boleh terjadi:** desain jatuh ke pola generik "AI-made template" — gradient blob ungu-pink, card serba rounded + shadow tipis, hero headline-subhead-2 tombol tanpa karakter, font Inter/Poppins default tanpa treatment. Lihat §4 untuk sistem desain yang wajib diikuti persis.

---

## 2. Konsep Desain (jangan diubah tanpa alasan kuat)

Tema besar: **"presisi/index"** — situs ini berperilaku seperti katalog teknis/blueprint yang rapi, bukan landing page marketing biasa. Setiap kategori punya kode referensi (PKG.01–04), semua elemen grid-locked, sudut tajam (bukan rounded), dan satu signature interaction (cursor reticle + koordinat live) yang jadi ciri khas yang diingat orang.

Prinsip: **boldness hanya di satu tempat** (sistem cursor + garis proses yang "digambar" saat scroll). Selain itu, layout tetap tenang, disiplin, banyak white space — supaya kesan "bersih & rapih" konsisten di seluruh halaman.

---

## 3. Design Tokens

### Warna

| Token | Hex | Peran |
|---|---|---|
| `--paper` | `#F7F7F4` | Background utama |
| `--paper-dim` | `#EFEFEA` | Background sekunder/alternatif |
| `--ink` | `#101114` | Teks utama, elemen solid |
| `--ink-dim` | `#55565C` | Teks sekunder |
| `--ink-faint` | `#9C9D97` | Teks tersier/caption |
| `--line` | `#D9DAD3` | Semua border/divider (1px, hairline) |
| `--blue` | `#1B3BFF` | Aksen brand utama (link progress, fokus, hover state) |
| `--navy` | `#1C2333` | Swatch kategori "Company Profile" |
| `--crimson` | `#E63946` | Swatch kategori "Toko Online" |
| `--rose` | `#B76E79` | Swatch kategori "Undangan Digital" |
| `--ochre` | `#C08A12` | Swatch kategori "Portofolio" |

**Aturan:** tidak ada warna baru di luar tabel ini tanpa alasan. Warna kategori (navy/crimson/rose/ochre) HANYA dipakai di panel visual kategori masing-masing, tidak di elemen global (nav, tombol utama, dll).

### Tipografi

| Peran | Font | Sumber |
|---|---|---|
| Display / heading | **Space Grotesk** (500–700) | Google Fonts |
| Body | **IBM Plex Sans** (400–600) | Google Fonts |
| Label / eyebrow / kode / nav / mono readout | **IBM Plex Mono** (400–500), uppercase, letter-spacing ~0.08–0.14em | Google Fonts |

Dilarang mengganti ke Inter/Poppins/Roboto atau font default lain.

### Bentuk & Struktur

- **Sudut nyaris tajam** — radius maksimum 2px di seluruh situs (tombol, card, panel). Ini prinsip yang disengaja untuk menghindari kesan "template generik".
- Border 1px solid `--line`, tidak pakai box-shadow blur lembut sebagai pengganti border.
- Grid 12 kolom di desktop, dengan garis grid tipis yang sesekali terlihat (hero) sebagai elemen dekoratif blueprint.
- Easing gerakan: `cubic-bezier(.16,.84,.44,1)` — halus dan "berat", bukan bouncy/elastic murahan.

---

## 4. Struktur Halaman (single page, section-by-section)

### 4.1 Header / Navigasi
- Fixed top. Transparan di atas hero, dapat background blur + border bawah setelah discroll (>40px).
- Kiri: wordmark logo (mono) — **[LENGKAPI: nama brand final]**, saat ini pakai placeholder "INDEKS".
- Tengah/kanan: nav ke `#katalog`, `#proses`, `#ulasan`.
- Kanan: tombol CTA primer "Mulai Project" → scroll ke section kontak.

### 4.2 Hero
- Eyebrow mono: nama posisi studio.
- Headline besar (Space Grotesk): pernyataan singkat yang merangkum "1 studio, 4 kategori situs" — **[LENGKAPI: copy final, boleh pakai draft di reference file]**.
- Sub-paragraf penjelasan singkat 4 kategori.
- Dua tombol: "Lihat Katalog" (scroll ke `#katalog`) dan "Cara Kerja Kami" (scroll ke `#proses`).
- **Index ruler**: strip horizontal 4 kolom berisi kode + nama tiap kategori (01 Profil / 02 Toko / 03 Undangan / 04 Karya), masing-masing link-anchor ke card kategori terkait di section katalog. Border-top garis biru muncul progresif saat hover (lihat reference file).
- Scroll cue kecil di pojok kiri bawah (garis vertikal dengan animasi "tetes").

### 4.3 Katalog (4 kategori)
Untuk tiap kategori, tampilkan sebagai row full-width bergantian kiri-kanan (zig-zag), berisi:
- Kode `0X / 04`
- Judul kategori
- Deskripsi singkat (1–2 kalimat, lihat draft di reference file, boleh disesuaikan)
- 3 tag fitur singkat (mono, kotak border tipis)
- Link **"Lihat contoh situs →"** — **[LENGKAPI: URL live 4 website yang sudah di-deploy]**
- Panel visual di sisi lain: saat ini abstrak (blok warna + grid overlay muncul on-hover). **[LENGKAPI: ganti dengan screenshot/preview asli tiap website begitu live — pertahankan aspect-ratio 4:3 dan style frame yang konsisten]**

Urutan & kode kategori:
1. Company Profile — swatch `--navy`
2. Toko Online — swatch `--crimson`
3. Undangan Digital — swatch `--rose`
4. Portofolio — swatch `--ochre`

### 4.4 Proses
- 4 langkah (Konsultasi → Desain → Build → Deploy & Review), masing-masing dengan nomor bulat + judul + deskripsi 1 kalimat.
- Garis vertikal di kiri list yang "terisi" (fill) warna biru secara progresif saat section masuk viewport — bukan langsung penuh.

### 4.5 Ulasan
- Marquee horizontal auto-scroll (loop seamless, pause saat di-hover) berisi quote card pendek.
- **[LENGKAPI: ganti seluruh isi dengan testimoni asli dari klien — jangan publish versi placeholder]**. Sertakan nama/role klien dengan izin mereka.

### 4.6 CTA / Kontak
- Headline penutup singkat + 1 kalimat ajakan + 1 tombol utama.
- **[LENGKAPI: tentukan mekanisme kontak]** — rekomendasi: tombol langsung buka WhatsApp dengan pesan pre-filled, plus email sebagai alternatif. Kalau mau, tambahkan form kontak singkat (nama, kategori situs yang diminati, kebutuhan) sebagai enhancement opsional.

### 4.7 Footer
- Copyright, link kontak/sosial media. **[LENGKAPI: link sosial media & kontak asli]**.

---

## 5. Signature Interactions (wajib dipertahankan)

1. **Custom cursor reticle** — ring + dot kecil mengikuti kursor dengan smoothing (lerp, bukan snap instan), memakai `mix-blend-mode: difference` agar otomatis kontras di background apa pun (termasuk panel warna kategori). Menampilkan koordinat X/Y live di label mono kecil di sebelah kursor; berubah jadi label kontekstual (mis. "LIHAT", "PILIH") saat hover elemen interaktif. **Nonaktif di perangkat sentuh** (`pointer: coarse`) dan saat `prefers-reduced-motion: reduce`.
2. **Magnetic button** — tombol bergeser halus mengikuti posisi kursor saat di-hover, kembali ke posisi awal saat kursor keluar.
3. **Scroll reveal** — elemen fade + translateY masuk saat memasuki viewport (IntersectionObserver), staggered secukupnya, tidak berlebihan.
4. **Proses line draw-on-scroll** — garis vertikal proses terisi progresif saat section terlihat.
5. **Hover state di card katalog** — grid overlay muncul di panel visual + blok konten bergeser halus ke atas.

Semua animasi harus tetap smooth di 60fps dan menghormati `prefers-reduced-motion`.

---

## 6. Requirement Teknis

- **Responsive** penuh sampai mobile (breakpoint utama di ~860px dan ~600px, lihat reference file untuk detail). Di mobile: cursor custom otomatis nonaktif, layout katalog jadi 1 kolom, nav link disederhanakan.
- **Aksesibilitas:** semua interactive element harus keyboard-accessible dengan focus state terlihat (outline biru), semantic HTML, kontras warna AA minimum, hormati `prefers-reduced-motion`.
- **Performa:** hindari library JS berat yang tidak perlu; gunakan vanilla JS/CSS seperti di reference file kecuali ada kebutuhan spesifik untuk framework (React/Next.js) dari sisi development studio ini sendiri — kalau pakai framework, port 1:1 tanpa mengubah visual/interaksi.
- **Gambar:** setelah screenshot asli 4 website tersedia, kompres ke WebP dan lazy-load, jangan pakai gambar mentah besar.
- **SEO dasar:** title, meta description, Open Graph tags — **[LENGKAPI: copy final untuk ini setelah nama brand & value proposition final]**.

---

## 7. Di Luar Cakupan (untuk versi pertama)

- Checkout/pembayaran langsung di web utama (arahnya tetap lead ke konsultasi)
- CMS/admin panel untuk edit konten (kecuali diminta terpisah)
- Multi-bahasa

---

## 8. Checklist Konten yang Harus Dilengkapi Sebelum Live

- [ ] Nama brand & logo final (ganti dari "INDEKS")
- [ ] Domain
- [ ] 4 URL live website contoh per kategori
- [ ] Screenshot/preview asli tiap kategori (ganti panel abstrak)
- [ ] Testimoni asli klien (ganti 6 quote placeholder)
- [ ] Nomor WhatsApp / email kontak asli
- [ ] Link sosial media asli
- [ ] Keputusan: harga paket ditampilkan di halaman ini atau hanya lewat konsultasi?

---

## 9. Prompt Ringkas untuk Antigravity

> Bangun website ini persis mengikuti struktur, design token, dan interaksi yang dijelaskan di `PRD-web-utama-indeks.md`, dengan `indeks-demo.html` sebagai referensi visual ground-truth (pertahankan fidelity animasi & layout-nya, jangan diinterpretasi ulang secara bebas). Semua bagian yang ditandai `[LENGKAPI: ...]` di PRD adalah tempat aku akan isi konten asli — untuk sekarang gunakan placeholder yang jelas ditandai, jangan mengarang data final. Pastikan responsive penuh, aksesibel (keyboard focus, prefers-reduced-motion), dan performanya ringan.
