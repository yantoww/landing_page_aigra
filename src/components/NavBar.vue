<script setup>
/**
 * NavBar.vue — Sticky navigation bar
 * - Transparan di atas hero, berubah menjadi solid saat scroll
 * - Smooth scroll ke anchor section (href="#id")
 * - Hamburger menu untuk mobile (toggle via ref)
 */
import { ref, onMounted, onUnmounted } from 'vue'

// State untuk hamburger menu
const isMenuOpen = ref(false)

// State untuk scroll position (navbar background change)
const isScrolled = ref(false)

// Daftar menu navigasi
const navLinks = [
  { label: 'Beranda',  href: '#hero'    },
  { label: 'Fitur',   href: '#fitur'   },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Kontak',  href: '#kontak'  },
]

// Toggle hamburger menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Tutup menu setelah klik link
const closeMenu = () => {
  isMenuOpen.value = false
}

// Handle scroll event untuk ubah navbar style
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <!-- Sticky navbar: transparan di awal, solid setelah scroll -->
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled
        ? 'bg-[#0B3D2E] shadow-lg shadow-black/20'
        : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-18">

        <!-- Logo -->
        <a href="#hero" class="flex items-center gap-2 group" @click="closeMenu">
          <!-- Ikon daun SVG -->
          <div class="w-8 h-8 bg-[#2D8659] rounded-lg flex items-center justify-center
                      group-hover:bg-[#D9A441] transition-colors duration-200">
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2 .8-2 4-3.7 5-4S9 3 7 7c0 0 1.18-.73 3.3-1.02C8.43 7.34 6 10.51 6 15a5 5 0 0 0 5 5c.45 0 .89-.05 1.31-.13C12.93 19.07 14 17.43 14 16c0-2.76-2.24-5-5-5"/>
            </svg>
          </div>
          <span class="text-white font-bold text-xl tracking-tight">AgriSmart</span>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-white/90 hover:text-[#D9A441] font-medium text-sm
                   transition-colors duration-200 relative
                   after:absolute after:bottom-[-4px] after:left-0 after:w-0
                   after:h-[2px] after:bg-[#D9A441] after:transition-all after:duration-200
                   hover:after:w-full"
          >
            {{ link.label }}
          </a>
          <a
            href="#kontak"
            class="btn-primary px-5 py-2 rounded-lg text-sm font-semibold"
          >
            Mulai Sekarang
          </a>
        </div>

        <!-- Hamburger Button (Mobile) -->
        <button
          class="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          @click="toggleMenu"
          aria-label="Toggle menu"
          :aria-expanded="isMenuOpen"
        >
          <!-- Ikon hamburger / close animated -->
          <div class="w-5 h-4 flex flex-col justify-between">
            <span
              :class="['block h-0.5 bg-white transition-all duration-300 origin-center',
                       isMenuOpen ? 'rotate-45 translate-y-[7px]' : '']"
            />
            <span
              :class="['block h-0.5 bg-white transition-all duration-300',
                       isMenuOpen ? 'opacity-0 scale-x-0' : '']"
            />
            <span
              :class="['block h-0.5 bg-white transition-all duration-300 origin-center',
                       isMenuOpen ? '-rotate-45 -translate-y-[9px]' : '']"
            />
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMenuOpen"
        class="md:hidden bg-[#0B3D2E] border-t border-white/10"
      >
        <div class="px-4 py-4 flex flex-col gap-2">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-white/90 hover:text-[#D9A441] hover:bg-white/5 font-medium
                   py-3 px-3 rounded-lg transition-all duration-200"
            @click="closeMenu"
          >
            {{ link.label }}
          </a>
          <a
            href="#kontak"
            class="btn-primary py-3 px-4 rounded-lg text-sm font-semibold text-center mt-2"
            @click="closeMenu"
          >
            Mulai Sekarang
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>
