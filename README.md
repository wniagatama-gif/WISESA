# WISESA Company Profile Website

Repositori ini memuat fondasi website profil perusahaan (company profile) yang profesional, modular, dan responsif. Didesain secara khusus untuk kebutuhan profil bisnis tanpa fitur absensi, HR, atau aplikasi internal lainnya.

## Tujuan Proyek
Menyediakan website company profile statis berbasis React, TypeScript, dan Tailwind CSS lokal yang cepat, mudah disesuaikan, dan siap dideploy ke berbagai layanan hosting statis atau cPanel.

## Perangkat Lokal yang Diperlukan
- Node.js versi 18 atau 20+ (direkomendasikan Node.js LTS, misal Node.js 22 yang tersedia di Laragon atau instalasi sistem).
- Paket pengelola: npm (atau Bun jika tersedia).

## Instalasi dan Menjalankan Proyek

1. **Memasang dependensi:**
   ```bash
   npm install
   ```

2. **Menjalankan server pengembangan (local development):**
   ```bash
   npm run dev
   ```
   Buka alamat URL lokal yang ditampilkan (biasanya `http://localhost:5173`) di browser.

3. **Pemeriksaan tipe TypeScript:**
   ```bash
   npm run typecheck
   ```

4. **Kompilasi produksi (build production):**
   ```bash
   npm run build
   ```
   Hasil build siap saji akan dibuat di folder `dist/`.

5. **Pratinjau hasil build (preview):**
   ```bash
   npm run preview
   ```

## Lokasi Mengganti Konten Placeholder Perusahaan
Seluruh konten bisnis menggunakan teks placeholder yang ditandai dengan jelas (misalnya `[NAMA PERUSAHAAN]`):

- **Judul dan Meta Deskripsi SEO**: `index.html` (bagian `<title>` dan `<meta name="description">`).
- **Nama Perusahaan & Navigasi**: `src/components/Header.tsx` dan `src/components/Footer.tsx`.
- **Bagian Utama (Hero)**: `src/sections/HeroSection.tsx` (heading, tagline, dan tombol aksi).
- **Profil, Visi, dan Misi**: `src/sections/AboutSection.tsx` (visi, misi, dan nilai perusahaan).
- **Daftar Layanan**: `src/sections/ServicesSection.tsx` (kartu layanan dan cakupan pekerjaan).
- **Kontak & Alamat**: `src/sections/ContactSection.tsx` (alamat kantor, nomor telepon, email resmi).

## Pengaturan CSS dan Tailwind
- Tailwind CSS dipasang secara lokal sebagai dependensi proyek di `package.json` dan dikompilasi oleh Vite melalui plugin resmi `@tailwindcss/vite`.
- Proyek ini tidak menggunakan CDN eksternal atau runtime script Tailwind jarak jauh. Website dapat dikompilasi dan dijalankan secara offline setelah dependensi terpasang.
- Arsitektur CSS dipisahkan secara modular pada direktori `src/styles/`:
  - `src/styles/index.css`: Direktif import Tailwind dan import entry utama.
  - `src/styles/variables.css`: Token desain dan variabel CSS kustom.
  - `src/styles/base.css`: Reset, tipografi dasar, dan styling fokus aksesibilitas.
  - `src/styles/layout.css`: Utility container dan jarak section.
  - `src/styles/components/`: Berkas CSS spesifik per bagian komponen (`header.css`, `hero.css`, `about.css`, `services.css`, `footer.css`).

## Backend dan Database
- Sesuai dengan spesifikasi tahap awal, proyek ini sengaja tidak menyertakan backend, database, ORM, schema, atau migration.
- Jika di masa mendatang dibutuhkan fitur dinamis (seperti endpoint formulir kontak yang mengirim email ke server), backend terpisah dapat ditambahkan menggunakan Bun + ElysiaJS di folder `backend/`.

## Rencana Deployment
- Deployment ke hosting cPanel Rumahweb akan dilakukan pada fase selanjutnya setelah seluruh konten resmi perusahaan diverifikasi dan difinalisasi.
- Jangan melakukan konfigurasi DNS atau modifikasi aplikasi cPanel sebelum tahap deployment resmi dimulai.
