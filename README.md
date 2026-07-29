# 🌐 Portofolio-Next: Next.js Personal Portfolio Website

Website portofolio pribadi modern, interaktif, dan berperforma tinggi yang dibangun menggunakan ekosistem **Next.js (App Router)**. Proyek ini memadukan keindahan komponen visual siap pakai dari **Shadcn/ui** dengan fleksibilitas **Tailwind CSS** untuk menyajikan resume digital, galeri proyek, dan keahlian teknis secara profesional.

🔗 **Live Website**: [ekoaryanto-porto.vercel.app](https://vercel.app)

---

## 📌 Daftar Isi
1. [Fitur Utama](#-fitur-utama)
2. [Teknologi & Pustaka (Tech Stack)](#-teknologi--pustaka-tech-stack)
3. [Arsitektur Folder Proyek (Deep Dive)](#-arsitektur-folder-proyek-deep-dive)
4. [Instalasi & Pengoperasian Lokal](#-instalasi--pengoperasian-lokal)
5. [Skrip Automasi Pengembangan](#-skrip-automasi-pengembangan)
6. [Panduan Kustomisasi Konten](#-panduan-kustomisasi-konten)

---

## 🚀 Fitur Utama

* **⚡ Blazing Fast Performance**: Optimalisasi penuh menggunakan *Server-Side Rendering* (SSR) dan *Static Site Generation* (SSG) bawaan Next.js untuk pemuatan halaman instan.
* **🧩 Modular Component Design**: Antarmuka berbasis komponen yang rapi dan terukur menggunakan kombinasi Tailwind CSS dan sistem Shadcn/ui.
* **🎨 Next-Gen Optimization**: Penerapan `next/font` untuk optimasi pemuatan Google Fonts (Inter) tanpa memicu pergeseran tata letak (*layout shift*).
* **📱 Adaptive Grid Layout**: Desain responsif tingkat tinggi yang proporsional saat diakses melalui smartphone, tablet, maupun monitor desktop.

---

## 🛠️ Teknologi & Pustaka (Tech Stack)

Proyek ini menggabungkan ekosistem pengembangan *front-end* modern mutakhir:

* **Next.js 14+ (App Router)** - Framework React utama untuk penanganan rute berbasis folder (`app/`), optimasi SEO, dan rendering sisi server.
* **React.js** - Pustaka inti untuk pengembangan berbasis komponen dan manajemen status aplikasi.
* **Tailwind CSS** - Kerangka kerja gaya (*utility-first*) utama untuk kustomisasi visual cepat via file `tailwind.config.js`.
* **Shadcn/ui** - Sistem komponen UI primitif yang dapat diakses penuh dan dikustomisasi lewat berkas `components.json`.
* **PostCSS** - Plugin otomatisasi pemrosesan baris kode gaya agar kompatibel di berbagai web browser.

---

## 📂 Arsitektur Folder Proyek (Deep Dive)

Berikut adalah pemetaan berkas utama di dalam repositori untuk mempermudah navigasi pengembangan komponen:

```text
portofolio-next/
│
├── app/                   # Arsitektur App Router (Halaman, layout, & rute utama situs)
│   ├── layout.js          # Kerangka global web (Navbar, Footer, penampung Font)
│   └── page.js            # Entry Point halaman utama portofolio
├── components/            # Komponen UI modular (Hero, ProjectCard, ContactForm, dll)
├── lib/                   # Fungsi pembantu kustom (*utility functions* seperti cn untuk Shadcn)
├── public/                # Aset statis publik (CV, ikon, favicon, gambar proyek)
├── .eslintrc.json         # Konfigurasi standarisasi kualitas penulisan kode JavaScript
├── components.json        # Berkas konfigurasi struktur instalasi komponen Shadcn/ui
├── jsconfig.json          # Pengaturan alias jalur impor (*path mapping* seperti @/components)
├── next.config.mjs        # Pengaturan kustomisasi fitur internal framework Next.js
├── package.json           # Manajer dependensi npm, versi pustaka, dan skrip automasi
├── postcss.config.mjs     # Konfigurasi plugin pemrosesan gaya CSS eksternal
└── tailwind.config.js     # Kustomisasi tema, warna, dan jangkauan kelas Tailwind
```

---

## 💻 Instalasi & Pengoperasian Lokal

Ikuti langkah di bawah ini untuk menjalankan salinan lingkungan proyek ini di komputer lokal Anda:

1. **Clone Repositori**
   ```bash
   git clone https://github.com
   ```
2. **Masuk ke Direktori Kerja**
   ```bash
   cd portofolio-next
   ```
3. **Instal Seluruh Dependensi Paket**
   ```bash
   npm install
   ```
4. **Jalankan Aplikasi dalam Mode Pengembangan**
   ```bash
   npm run dev
   ```
5. **Buka di Browser**
   * Buka tautan lokal [http://localhost:3000](http://localhost:3000) pada browser Anda untuk meninjau perubahan visual aplikasi secara langsung (*hot-reloading*).

---

## 🚀 Skrip Automasi Pengembangan

Di dalam proyek ini, Anda dapat mengeksekusi beberapa perintah skrip bawaan berikut:

* **`npm run dev`**: Menjalankan server pengembang lokal dengan fitur pembaruan modul instan.
* **`npm run build`**: Mengompilasi dan mengoptimasi seluruh modul React/Next.js ke dalam folder produksi `.next/` agar siap di-deploy ke Vercel.
* **`npm run start`**: Menjalankan aplikasi versi produksi yang sudah di-build sebelumnya di server lokal.
* **`npm run lint`**: Memeriksa seluruh baris kode untuk mendeteksi potensi kesalahan penulisan sesuai aturan ESLint.

---

## 📸 Panduan Kustomisasi Konten

* **Mengubah Data Profil & Proyek**: Anda dapat membuka folder `components/` atau memodifikasi file `app/page.js` untuk menyesuaikan teks bio, daftar riwayat kerja, serta tautan repositori proyek Anda.
* **Menambahkan Komponen Baru**: Karena Shadcn/ui sudah terkonfigurasi via `components.json`, Anda dapat menambah komponen baru secara instan dengan perintah, contoh: `npx shadcn-ui@latest add button`.

---
Dikembangkan dengan penuh dedikasi oleh [chochocookies](https://github.com).
