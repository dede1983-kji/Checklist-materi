# KJI Dojo Pangandaran — Digital Check List Book

Aplikasi checklist materi Ju-Jitsu berbasis HTML/CSS/JavaScript, siap dipasang di GitHub Pages.

## Fitur
- Halaman login.
- Logo KJI Dojo Pangandaran.
- Data nama kohai, alamat, dan tingkatan/sabuk.
- Materi mengikuti Buku Check List KJI Dojo Pangandaran.
- 5 status:
  - ○ Belum Dipelajari
  - ◐ Sedang Dipelajari
  - ✓ Cukup
  - ☑ Dikuasai
  - ! Kurang
- Progress otomatis.
- Pencarian dan filter materi.
- Cetak.
- Penyimpanan browser (localStorage).
- Responsif untuk HP dan komputer.

## Login awal
Username: `admin`
Password: `kji12345`

Untuk mengubahnya, buka `script.js` dan cari:
```js
const LOGIN_USER = "admin";
const LOGIN_PASS = "kji12345";
```

## Cara memasang di GitHub
1. Buat repository baru, misalnya `kji-checklist`.
2. Upload:
   - `index.html`
   - `style.css`
   - `script.js`
   - folder `assets` beserta `logo-dojo.png`
3. Buka **Settings → Pages**.
4. Pilih **Deploy from a branch**.
5. Branch `main`, folder `/ (root)`.
6. Save.

## Catatan keamanan
Login ini adalah login sisi-browser untuk aplikasi statis. Username/password dapat diketahui jika seseorang melihat kode sumber. Jangan gunakan mekanisme ini untuk data rahasia atau sistem yang memerlukan keamanan tinggi. Untuk login sungguhan dengan akun masing-masing pelatih/kohai, gunakan backend seperti Firebase/Supabase.
