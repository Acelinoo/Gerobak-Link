# Brief Tambahan — Prompt Final untuk Antigravity (GerobakLink Studio Web)

Dokumen ini **melengkapi**, bukan menggantikan, `PRD-web-utama-gerobaklink.md` dan `PRD-migrasi-nextjs.md`. Kirim keempatnya bareng ke Antigravity: kedua PRD + `gerobaklink-demo.html` + file ini.

---

## Prompt siap pakai (copy ke Antigravity)

> Bangun website ini langsung dalam Next.js 14+ (App Router) dan TypeScript — **jangan** bangun versi vanilla HTML ke production dulu. `gerobaklink-demo.html` hanya referensi visual & interaksi ground-truth (fidelity 1:1, bukan sekadar inspirasi, bukan file yang dijalankan). Ikuti struktur project, design token, tipografi, dan aturan porting interaksi (cursor reticle, magnetic button, scroll reveal, line draw-on-scroll, marquee) persis seperti di `PRD-migrasi-nextjs.md` §2–3 dan `PRD-web-utama-gerobaklink.md` §3–5.
>
> Tiga hal ini **mengoverride** draft PRD sebelumnya:
>
> **1. Database & form kontak dipakai dari awal (bukan opsional fase 2).**
> Setup Prisma + PostgreSQL (Neon) sesuai skema `Lead` di `PRD-migrasi-nextjs.md` §4. Section CTA/Kontak (§4.6 PRD utama) berisi tombol WhatsApp "Mulai Konsultasi" (fast path) **dan** form kontak singkat (nama, kontak, kategori yang diminati — dropdown 4 kategori, kebutuhan) yang submit ke `app/api/contact/route.ts`, insert ke tabel `Lead` via Prisma Client. **Tidak** perlu notifikasi email otomatis, **tidak** perlu admin panel — submission dicek manual lewat dashboard Neon.
>
> **2. Tambahkan price range estimasi di tiap row katalog** (§4.3).
> Field baru `priceRange` (string) di `data/packages.ts`. Ditampilkan sebagai teks mono kecil — ikuti gaya label yang sudah ada (`--ink-dim`, uppercase, letter-spacing ~0.08em), format `MULAI RP [X]` — diletakkan di antara deskripsi kategori dan tag fitur. **Bukan** badge/pill/kotak background baru — ini elemen visual baru yang tidak ada di `gerobaklink-demo.html`, jadi harus ngikutin sistem tipografi yang sudah ada, jangan improvisasi gaya sendiri.
>
> **3.** Semua bagian `[LENGKAPI: ...]` tetap pakai placeholder yang jelas ditandai — jangan mengarang data final.

---

## Kenapa ini penting ditulis eksplisit

- Addendum migrasi tadinya bilang "jangan setup Prisma kecuali diminta" — sekarang **memang diminta**, jadi instruksi lama itu perlu dioverride biar Antigravity nggak skip.
- Price range **tidak ada sama sekali** di `gerobaklink-demo.html`. Tanpa arahan penempatan & gaya yang jelas, ada risiko Antigravity naruh badge/pill warna baru yang melanggar prinsip "boldness cuma di satu tempat" di PRD §2.

## Asumsi yang aku ambil — koreksi kalau salah

- **CTA tetap dual-path**: tombol WA cepat + form di bawahnya. Kalau maunya form jadi satu-satunya mekanisme (WA cuma link kecil di footer), bilang saja.
- **MVP tanpa notifikasi email & tanpa admin UI** — kamu cek lead baru langsung dari Neon console. Ini gampang ditambah belakangan (integrasi email) tanpa bongkar struktur, jadi aman ditunda.
- Kamu perlu bikin **project Neon + `DATABASE_URL`** sebelum form kontak bisa jalan end-to-end — sebelumnya opsional, sekarang wajib dari awal.

## Konten yang masih boleh placeholder (belum blocking)

Sesuai checklist §8 PRD utama — nama brand & logo, domain, 4 URL contoh situs, screenshot asli, testimoni asli, nomor WA/email asli, link sosmed, copy SEO/OG, dan sekarang tambahan: **angka price range tiap kategori**.
