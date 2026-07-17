# 🌿 AgriSmart — Platform Pertanian Presisi Berbasis AI

> Platform pertanian cerdas yang menggabungkan kecerdasan buatan dengan kearifan pertanian tradisional untuk masa depan yang berkelanjutan.

---

## 📸 Screenshot

<!-- Tambahkan screenshot Anda di sini setelah development -->
<!-- Contoh: ![Landing Page](./screenshots/hero.png) -->

_Tambahkan screenshot halaman utama Anda di sini._

---

## 🔗 Link Deployment

<!-- Tambahkan link deployment Anda di sini -->
_Link deployment akan ditambahkan setelah proses deploy selesai._

- **Staging:** `https://agrismart-staging.vercel.app` _(placeholder)_
- **Production:** `https://agrismart.id` _(placeholder)_

---

## 🚀 Cara Instalasi & Menjalankan

### Prasyarat
- **Node.js** v18 atau lebih baru
- **npm** v9 atau lebih baru

### Langkah Instalasi

```bash
# 1. Clone repository
git clone <url-repository>
cd landing_pade\ aigra

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm run dev
```

Aplikasi akan berjalan di **http://localhost:5173**

### Build untuk Production

```bash
# Build production bundle
npm run build

# Preview production build secara lokal
npm run preview
```

---

## 🛠️ Tech Stack

| Teknologi | Versi | Keterangan |
|-----------|-------|------------|
| Vue.js | 3 | Framework utama (Composition API + `<script setup>`) |
| Vite | 6+ | Build tool & dev server |
| Tailwind CSS | 4 | Utility-first CSS framework (via `@tailwindcss/vite`) |
| Vanilla JS | ES2022 | Intersection Observer API untuk animasi scroll |

---

## 📁 Struktur Folder

```
landing_pade aigra/
├── public/
│   └── favicon.svg              # Favicon ikon daun AgriSmart
│
├── src/
│   ├── components/
│   │   ├── NavBar.vue           # Navbar sticky dengan hamburger mobile
│   │   ├── HeroSection.vue      # Hero full-width dengan stats card
│   │   ├── FeaturesSection.vue  # Grid 4 fitur unggulan
│   │   ├── AboutSection.vue     # Tentang kami + stat cards
│   │   ├── ContactSection.vue   # Form kontak + info panel
│   │   └── FooterComponent.vue  # Footer dengan navigasi & copyright
│   │
│   ├── App.vue                  # Root component (menyusun semua section)
│   ├── main.js                  # Entry point aplikasi
│   └── style.css                # Global styles + Tailwind import
│
├── index.html                   # HTML template dengan SEO meta tags
├── vite.config.js               # Konfigurasi Vite + Tailwind plugin
├── package.json
└── README.md
```

---

## 🎨 Desain & Palet Warna

| Token | Kode Hex | Penggunaan |
|-------|----------|------------|
| Primary (Hijau Tua) | `#0B3D2E` | Navbar, footer, panel gelap |
| Leaf (Hijau Daun) | `#2D8659` | Tombol CTA, ikon aktif, aksen |
| Gold (Emas) | `#D9A441` | Badge, aksen border, highlight |
| Cream | `#FBF9F3` | Background utama |
| Sage | `#EEF3EC` | Background section alternatif |

**Tipografi:** [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts) — weights 300–900

---

## ⚙️ Fitur Teknis

### ✅ Wajib
- [x] **Fully Responsive** — Mobile (<768px), Tablet (768–1024px), Desktop (>1024px)
- [x] **Smooth Scroll** — Anchor link navigasi dengan `scroll-behavior: smooth`
- [x] **Composition API** — Semua komponen menggunakan `<script setup>`
- [x] **v-for data arrays** — Fitur, checklist, stats, info kontak semua dari `const` array
- [x] **v-model** — Two-way binding di seluruh form input
- [x] **Validasi Form** — Required fields + regex email, pesan error per field
- [x] **Hamburger Menu** — Fungsional dengan Vue `ref`, animasi CSS transform
- [x] **Modular Components** — Setiap section adalah file `.vue` terpisah

### 🌟 Bonus
- [x] **Fade-in Scroll Animation** — Native `IntersectionObserver` di setiap section
- [x] **Hover Effects** — Card lift, button scale, navbar link underline
- [x] **Toast Notification** — Vue `<Transition>` sukses submit form
- [x] **Animated Hamburger** — Transform ke × saat terbuka
- [x] **Navbar Scroll-aware** — Transparan → solid background saat scroll
- [x] **SEO Optimized** — Title, meta description, OG tags, semantic HTML

---

## 📋 Komponen Detail

### `NavBar.vue`
- Sticky position dengan `z-50`
- Background transparan → `#0B3D2E` saat `window.scrollY > 20`
- Smooth scroll via anchor href
- Hamburger menu dengan animated icon (☰ → ✕)
- Vue `<Transition>` untuk dropdown mobile

### `HeroSection.vue`
- Background image Unsplash (ladang pertanian) + gradient overlay
- Badge animasi pulse
- Dua CTA button: solid & outline
- Stats card floating (overlap ke section berikutnya via `translate-y-1/2`)

### `FeaturesSection.vue`
- Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- Data dari `const features = [...]` → `v-for`
- Card hover: `translateY(-6px)` + box-shadow
- Accent color bar muncul saat hover

### `AboutSection.vue`
- 2-kolom layout: `grid-cols-1 lg:grid-cols-2`
- Checklist items dari `const checklistItems = [...]`
- Stat cards dengan `border-l-4` warna berbeda per card

### `ContactSection.vue`
- Form state: `reactive({})` + `v-model`
- Validasi: `validateField()` dipanggil saat `@blur`
- Submit disabled saat `!isFormValid` (computed)
- Toast notification dengan Vue `<Transition>`

### `FooterComponent.vue`
- Background `#0B3D2E`
- 4-kolom grid (responsive ke 1 kolom mobile)
- Social media icons (Instagram, LinkedIn, X)
- Animated link underline effect

---

## 🧪 Testing Manual

Setelah `npm run dev`, cek hal berikut:

- [ ] Navbar berubah background saat scroll
- [ ] Menu hamburger terbuka/tutup di mobile
- [ ] Semua anchor link smooth scroll ke section yang benar
- [ ] Form validation menampilkan error saat field kosong/email salah format
- [ ] Tombol submit disable saat form belum valid
- [ ] Toast muncul setelah submit berhasil
- [ ] Fade-in animation bekerja saat scroll ke setiap section
- [ ] Hover effects aktif di semua card dan button
- [ ] Responsive di semua breakpoint (gunakan DevTools)

---

## 👨‍💻 Dibuat Oleh

**PT AIGRA EON INDONESIA**
© 2024. Hak Cipta Dilindungi.
