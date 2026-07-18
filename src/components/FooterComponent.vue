<script setup>
/**
 * FooterComponent.vue — Footer utama
 * - Background hijau tua #0B3D2E
 * - Logo + tagline kiri, menu navigasi kanan
 * - Copyright PT AIGRA EON INDONESIA
 */

// Menu footer sama dengan navbar
const footerLinks = [
  { label: 'Beranda',  href: '#hero'    },
  { label: 'Fitur',   href: '#fitur'   },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Kontak',  href: '#kontak'  },
]

// Social media links (opsional, dekoratif)
const socialLinks = [
  { name: 'Instagram', icon: 'ig' },
  { name: 'LinkedIn',  icon: 'li' },
  { name: 'Twitter',   icon: 'tw' },
]
</script>

<template>
  <footer class="bg-[#0B3D2E]">
    <!-- Main Footer -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">

        <!-- Brand Column -->
        <div class="lg:col-span-2">
          <!-- Logo -->
          <a href="#hero" class="flex items-center gap-2 mb-4 group w-fit">
            <div class="w-9 h-9 bg-[#2D8659] rounded-lg flex items-center justify-center
                        group-hover:bg-[#D9A441] transition-colors duration-200">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2 .8-2 4-3.7 5-4S9 3 7 7c0 0 1.18-.73 3.3-1.02C8.43 7.34 6 10.51 6 15a5 5 0 0 0 5 5c.45 0 .89-.05 1.31-.13C12.93 19.07 14 17.43 14 16c0-2.76-2.24-5-5-5"/>
              </svg>
            </div>
            <span class="text-white font-bold text-xl tracking-tight">AgriSmart</span>
          </a>

          <!-- Tagline -->
          <p class="text-white/50 text-sm leading-relaxed max-w-xs">
            Platform pertanian presisi yang menggabungkan kecerdasan buatan
            dengan keberlanjutan.
          </p>

          <!-- Social links -->
          <div class="flex items-center gap-3 mt-6">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              href="#"
              :aria-label="social.name"
              class="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#2D8659] flex items-center
                     justify-center transition-all duration-200 hover:scale-110"
            >
              <!-- Instagram -->
              <svg v-if="social.icon === 'ig'" class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              <!-- LinkedIn -->
              <svg v-else-if="social.icon === 'li'" class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <!-- Twitter/X -->
              <svg v-else class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Navigation Links -->
        <div>
          <h4 class="text-white font-semibold text-sm uppercase tracking-wider mb-5">
            Navigasi
          </h4>
          <ul class="flex flex-col gap-3">
            <li v-for="link in footerLinks" :key="link.href">
              <a
                :href="link.href"
                class="text-white/50 hover:text-[#D9A441] text-sm transition-colors duration-200
                       flex items-center gap-2 group"
              >
                <span class="w-0 group-hover:w-3 h-0.5 bg-[#D9A441] transition-all duration-200 rounded" />
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Quick Info -->
        <div>
          <h4 class="text-white font-semibold text-sm uppercase tracking-wider mb-5">
            Kontak
          </h4>
          <ul class="flex flex-col gap-3 text-sm text-white/50">
            <li>hello@agrismart.id</li>
            <li>+62 811 2345 6789</li>
            <li class="leading-relaxed">Jl. Pertanian Cerdas No. 12,<br>Jakarta Selatan</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Copyright Bar -->
    <div class="border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5
                  flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-white/40 text-xs text-center sm:text-left">
          © 2024 PT AIGRA EON INDONESIA. Hak Cipta Dilindungi.
        </p>
        <div class="flex items-center gap-4 text-white/30 text-xs">
          <a href="#" class="hover:text-white/60 transition-colors">Kebijakan Privasi</a>
          <span>·</span>
          <a href="#" class="hover:text-white/60 transition-colors">Syarat Layanan</a>
        </div>
      </div>
    </div>
  </footer>
</template>
