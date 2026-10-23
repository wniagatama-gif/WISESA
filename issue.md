# Tugas: Menyiapkan Dependensi Website Company Profile

## Tujuan proyek
Proyek ini sekarang adalah **website company profile**, bukan aplikasi absensi karyawan. Siapkan fondasi pengembangan lokal untuk website company profile yang profesional dan responsif. Jangan membuat fitur absensi, HR, karyawan, KPI, penjadwalan, atau penggajian.

## Teknologi yang disarankan

### Frontend
- React
- Vite
- TypeScript
- Tailwind CSS dipasang sebagai dependensi lokal proyek (paket npm/Bun dan dikompilasi saat build Vite; **jangan gunakan CDN Tailwind atau script jarak jauh**)
- `lucide-react` untuk ikon
- `react-router-dom` hanya jika membutuhkan beberapa route
- shadcn/ui hanya untuk komponen yang benar-benar digunakan; jangan memasang seluruh katalog komponennya

### Backend
**Jangan tambahkan backend pada tahap awal.** Website company profile dengan konten statis dapat dibuat dan dihosting sebagai file statis.
Jika nantinya diperlukan fitur dinamis yang nyata (misalnya API formulir kontak), gunakan Bun + ElysiaJS di direktori `backend/` terpisah. Jangan membuat kerangka backend sebelum dibutuhkan.

### Database
**Jangan tambahkan MySQL, ORM, driver database, Drizzle, Prisma, schema, atau migration untuk company profile tahap awal.** Website awal tidak membutuhkan database. Pertimbangkan kembali hanya jika ada fitur nyata yang memerlukan penyimpanan data.

## Konteks proyek dan batasan
- Proyek sebelumnya adalah aplikasi absensi. Tugas ini khusus untuk website company profile baru.
- Jangan gunakan kembali penamaan, route, dependensi, schema, atau logika bisnis khusus absensi.
- Kerjakan secara lokal terlebih dahulu.
- Deployment ke cPanel Rumahweb dilakukan pada tahap berikutnya. Pengguna pernah melihat Node.js Application Manager dan Node.js 22.23.4, tetapi jangan melakukan deployment, membuat aplikasi cPanel, mengubah DNS, atau mengunggah file sekarang.
- Periksa repository sebelum melakukan perubahan. Pertahankan pekerjaan yang sudah ada dan jangan menimpa file tanpa pemeriksaan.
- Gunakan versi paket stabil yang kompatibel. Jangan menambahkan tooling monorepo kecuali sudah digunakan.
- Jangan mengarang nama perusahaan, alamat, telepon, email, layanan, sertifikasi, atau klaim bisnis. Gunakan placeholder yang ditandai dengan jelas.

## Dependensi frontend

Pasang hanya yang diperlukan:
- `react`
- `react-dom`
- `lucide-react`

Dependensi untuk pengembangan:
- `vite`
- `typescript`
- `@vitejs/plugin-react`
- `@types/react`
- `@types/react-dom`
- Tailwind CSS and its currently recommended Vite integration installed locally in `package.json` (do not load Tailwind from CDN, external URL, or runtime network script)

Tambahkan `react-router-dom` hanya jika website membutuhkan beberapa route.
Tambahkan `react-hook-form` dan `zod` hanya jika formulir kontak dibuat dalam tugas ini.
Jangan tambahkan TanStack Query kecuali ada kebutuhan API/pengambilan data.
Jangan tambahkan Next.js atau SSR tanpa membahas perubahan arsitektur terlebih dahulu.

## Kerangka awal
Siapkan fondasi company profile yang rapi dan responsif:
- Header/navigasi
- Placeholder bagian hero
- Placeholder bagian tentang perusahaan
- Placeholder bagian layanan/produk
- Placeholder kontak/footer
- Komponen/bagian yang dapat digunakan kembali jika memang bermanfaat
- HTML semantik yang aksesibel dan tata letak responsif

Gunakan teks placeholder dan jangan membuat detail bisnis fiktif. Pastikan kerangka mudah diganti dengan konten perusahaan yang sebenarnya.


## Pengaturan CSS (wajib)
Pisahkan CSS ke dalam file-file yang fokus dan teratur. Jangan menaruh semua gaya dalam satu stylesheet besar atau menggunakan objek `style` inline yang besar untuk kebutuhan styling biasa.

Gunakan struktur seperti berikut:

```text
src/
├── styles/
│   ├── index.css          # Tailwind directives/imports and global entry only
│   ├── variables.css      # CSS custom properties / design tokens
│   ├── base.css          # reset, body, typography defaults
│   ├── layout.css        # shared layout utilities if needed
│   └── components/
│       ├── header.css
│       ├── hero.css
│       ├── about.css
│       ├── services.css
│       └── footer.css
├── components/
├── sections/
└── ...
```

Panduan:
- Jaga `index.css` tetap ringkas: hanya import dan direktif/import entry yang dibutuhkan Tailwind.
- Letakkan variabel global dan gaya dasar pada file masing-masing.
- Letakkan CSS khusus bagian/komponen pada file yang sesuai.
- Import stylesheet secara konsisten dari entry aplikasi atau komponen/bagian yang menggunakannya.
- Utamakan class utility Tailwind untuk layout dan spacing sederhana. Gunakan file CSS terpisah untuk gaya khusus yang meningkatkan keterbacaan atau digunakan ulang.
- Hindari membuat satu file CSS untuk setiap elemen kecil; kelompokkan gaya yang berkaitan secara wajar.
- Jangan menaruh banyak CSS di `App.tsx`, atribut style JSX, atau satu file global.
- Tailwind harus tetap dipasang lokal dan dikompilasi oleh Vite. Jangan gunakan CDN atau stylesheet/script jarak jauh.

## SEO dan performa
- Tambahkan judul halaman dan meta description placeholder yang ditandai untuk diganti.
- Gunakan landmark semantik dan hierarki heading yang tepat.
- Buat aplikasi ramah untuk konten statis dan hindari library client-side yang tidak diperlukan.
- Tailwind harus dapat digunakan secara offline setelah dependensi dipasang: gunakan file paket lokal dan kompilasi CSS saat build. Jangan sertakan `https://cdn.tailwindcss.com`, tautan CDN, atau script Tailwind jarak jauh di HTML.
- Jangan menyatakan React + Vite saja menjamin SEO yang kuat. Jika SEO lanjutan/SSR diperlukan, jelaskan Astro atau framework React SSR sebagai keputusan terpisah; jangan beralih tanpa persetujuan.

## Struktur yang disarankan
For a static company profile, use a structure similar to:

```text
project-root/
├── public/
├── src/
│   ├── components/
│   ├── sections/
│   ├── assets/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

Sesuaikan dengan repository yang ada jika strukturnya sudah baik. Tambahkan `backend/` hanya jika terdapat kebutuhan dinamis yang nyata.

## Script
Atur script frontend:
- `dev`
- `build`
- `preview`
- `typecheck`

Gunakan Bun untuk pengelolaan paket jika tersedia, dengan tetap mempertahankan script Vite standar.

## Git dan environment
- Tambahkan `.gitignore` untuk `node_modules`, hasil build, file environment lokal, log, serta file editor/OS.
- Buat `.env.example` hanya jika variabel environment benar-benar diperlukan.
- Jangan membuat kredensial palsu atau memasukkan `.env` asli ke Git.
- Jika backend belum ada, jangan tambahkan file environment backend.

## README
Dokumentasikan:
- Tujuan: website company profile
- Perangkat lokal yang diperlukan
- Perintah instalasi dan menjalankan proyek
- Perintah build production dan preview
- Lokasi untuk mengganti konten placeholder perusahaan
- Tailwind dipasang lokal dan dibundel/dikompilasi; tanpa CDN atau dependensi jarak jauh
- Backend/database sengaja tidak disertakan sampai ada kebutuhan dinamis
- Deployment Rumahweb dilakukan pada tahap berikutnya

## Validasi
1. Pasang dependensi.
2. Jalankan pemeriksaan tipe TypeScript.
3. Jalankan build production Vite.
4. Jalankan development server jika memungkinkan.
5. Laporkan hanya pemeriksaan yang benar-benar dijalankan.
6. Ringkas file yang dibuat/diubah dan kendala yang ditemukan.

## Kriteria selesai
- Proyek berupa company profile, bukan aplikasi absensi.
- Fondasi frontend React + Vite + TypeScript tersedia.
- Tailwind dikonfigurasi dengan benar.
- Dependensi tetap minimal.
- Backend atau database tidak ditambahkan tanpa kebutuhan nyata.
- Pengembangan lokal berjalan dan build production berhasil.
- Tidak ada perubahan deployment atau hosting.

## Skill AI Anti-Slop

- Gunakan skill AI Anti-Slop yang sudah terpasang di repository. Temukan dan baca instruksinya sebelum melakukan perubahan besar, lalu ikuti panduannya selama pengerjaan.
- Utamakan hasil yang jelas, terarah, dan mudah dipelihara. Hindari konten generik buatan AI, abstraksi yang tidak perlu, teks pengisi, komentar berlebihan, atau kompleksitas dekoratif.
- Pilih implementasi yang praktis dan sesuai kebutuhan website company profile. Hindari overengineering serta penjelasan langkah teknis yang terlalu rinci.
- Jangan menyalin ulang aturan skill ke file ini. Jadikan skill yang ada di repository sebagai sumber aturan utama.
