# Website Profil Resmi — Dio Vito Delvino

Situs web profil pribadi 3 halaman dengan tema abu-abu gelap (*dark grey theme*) dan bahasa Indonesia formal, yang dikonfigurasi agar siap ditampilkan di **Vercel**.

## Struktur Halaman

1. **`index.html` (Halaman 01 — Pembukaan)**
   Memuat judul menarik tentang "Profil Saya", kata pengantar formal, serta ringkasan navigasi antarhalaman.
2. **`profil.html` (Halaman 02 — Profil Saya)**
   Menyajikan informasi identitas dan pendidikan:
   - **Nama**: Dio Vito Delvino
   - **Umur**: 16 Tahun
   - **Student of**: SMK Telkom Malang
   - **Jurusan**: Teknik Komputer & Jaringan
3. **`kontak.html` (Halaman 03 — Informasi Kontak)**
   Menampilkan informasi kontak resmi melalui Instagram (`@vinoo.vi`).

## Konfigurasi Vercel

Berkas `vercel.json` telah dikonfigurasi dengan:
- `"cleanUrls": true` (rute `/`, `/profil`, dan `/kontak` aktif secara otomatis)
- `"trailingSlash": false`
- Header keamanan HTTP dasar (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`)

## Cara Menampilkan ke Vercel

### Opsi 1 — Melalui Vercel CLI
1. Pastikan Node.js terpasang, lalu jalankan di dalam folder proyek ini:
   ```bash
   npx vercel
   ```
2. Ikuti petunjuk login dan pilih pengaturan bawaan (*default*).
3. Untuk merilis versi produksi:
   ```bash
   npx vercel --prod
   ```

### Opsi 2 — Melalui GitHub + Vercel Dashboard
1. Unggah (*push*) seluruh isi folder ini ke repositori GitHub Anda.
2. Buka [vercel.com](https://vercel.com), pilih **Add New Project**, lalu impor repositori tersebut.
3. Pada **Framework Preset**, biarkan **Other** (tidak perlu *build command*), lalu klik **Deploy**.
