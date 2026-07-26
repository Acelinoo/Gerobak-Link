# Addendum PRD — Migrasi ke Next.js + TypeScript

**Berlaku di atas:** `PRD-web-utama-indeks.md` (spesifikasi desain/konten — tetap jadi sumber kebenaran untuk visual & copy)
**Dokumen ini mengatur:** stack teknis, struktur project, dan aturan porting. **Ini migrasi bahasa/framework, BUKAN redesign** — tidak ada satupun nilai visual yang boleh berubah.

---

## 1. Tech Stack

| Layer | Pilihan | Alasan singkat |
|---|---|---|
| Framework | **Next.js 14+ (App Router)** | SSR/SSG untuk SEO situs marketing, siap dikembangkan (halaman detail per paket, dsb) |
| Bahasa | **TypeScript** (strict mode) | Type-safety, khususnya untuk data 4 paket & testimoni |
| Styling | **CSS Modules / global CSS**, tetap pakai CSS custom properties yang sama persis dengan token di PRD desain §3 | Menghindari pergeseran visual — **jangan pindah ke Tailwind atau design system lain** |
| Font | `next/font/google` untuk Space Grotesk, IBM Plex Sans, IBM Plex Mono | Pengganti `<link>` manual, font & weight harus sama persis |
| Gambar | `next/image` | Siap dipakai begitu screenshot asli 4 paket tersedia (menggantikan panel abstrak) |
| Deploy target | Vercel (direkomendasikan) | Native support Next.js + pairing mudah dengan Neon kalau Fase 2 DB dipakai |

---

## 2. Struktur Project (rekomendasi)

```
app/
  layout.tsx
  page.tsx
  globals.css
components/
  Header.tsx
  Hero.tsx
  Katalog.tsx        (+ KatalogCard.tsx)
  Proses.tsx
  Ulasan.tsx
  Cta.tsx
  Footer.tsx
  CustomCursor.tsx
hooks/
  useCustomCursor.ts
  useRevealOnScroll.ts
  useMagneticButton.ts
data/
  packages.ts         // 4 kategori — single source of truth, dipakai Katalog & Index Ruler di Hero
  testimonials.ts
```

---

## 3. Aturan Porting Interaksi (wajib 1:1, bukan reinterpretasi)

- **Custom cursor reticle** — port logic lerp (`0.18`) + `mix-blend-mode: difference` + koordinat live persis seperti reference, via `useRef`/`useEffect` di `useCustomCursor.ts`. Tidak pakai library cursor pihak ketiga.
- **Magnetic button, scroll reveal (IntersectionObserver), line draw-on-scroll, marquee** — port logic yang sama persis, dibungkus custom hook agar reusable antar komponen.
- Semua **nilai easing, durasi, dan token warna** wajib diambil dari CSS variables yang sama seperti `indeks-demo.html` — tidak dibulatkan atau diganti nilai lain.
- `data-cursor` attribute (label kontekstual saat hover) tetap dipertahankan per elemen interaktif.

---

## 4. Database & Data

**MVP (default sekarang): TIDAK pakai database.** Data 4 paket dan testimoni cukup disimpan sebagai file TypeScript statis di `data/` — type-safe, tanpa infra tambahan.

**Opsional — Fase 2, hanya jika form kontak butuh menyimpan submission (bukan cuma tombol WhatsApp/email):**

- ORM: **Prisma**
- Database: **PostgreSQL via Neon** (serverless, pairing alami dengan Vercel) — alternatif: Supabase kalau ke depan juga butuh auth/storage.
- Schema minimal:

```prisma
model Lead {
  id        String   @id @default(cuid())
  name      String
  contact   String   // email atau nomor WA
  interest  String?  // kategori paket yang diminati
  message   String?
  createdAt DateTime @default(now())
}
```

- Endpoint: `app/api/contact/route.ts` (Route Handler) — insert ke tabel `Lead` via Prisma Client.
- Env var yang dibutuhkan kalau Fase 2 ini dipakai: `DATABASE_URL`

**Jangan setup Prisma/koneksi database di fase ini kecuali secara eksplisit diminta.**

---

## 5. Yang TIDAK Boleh Berubah

Seluruh design token, tipografi, radius, border, dan signature interaction dari `PRD-web-utama-indeks.md` §3–§5. Kalau ada bagian yang ambigu saat porting ke React, rujuk balik ke `indeks-demo.html`, bukan menginterpretasi ulang.

---

## 6. Prompt untuk Antigravity

> Migrasikan implementasi `index.html` (vanilla HTML/CSS/JS) yang sudah jadi ke Next.js 14+ (App Router) dengan TypeScript, mengikuti struktur project & aturan porting di `PRD-migrasi-nextjs.md`. Pertahankan 100% fidelity visual & interaksi — ini migrasi teknis, bukan redesign. Pecah jadi komponen sesuai struktur yang disarankan, dan pindahkan data paket & testimoni ke file TypeScript type-safe di folder `data/`. Untuk database: jangan setup Prisma/koneksi database dulu di fase ini — itu baru dipakai kalau nanti diminta form kontak yang submission-nya perlu disimpan, dengan skema sesuai §4.
