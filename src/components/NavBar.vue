<script setup>
/**
 * NavBar.vue — Sticky navigation bar
 * - Transparan di atas hero, berubah menjadi solid saat scroll
 * - Smooth scroll ke anchor section (href="#id")
 * - Hamburger menu untuk mobile (toggle via ref)
 */
import { ref, inject, onMounted, onUnmounted } from 'vue'

const { isDark, toggleDark } = inject('colorMode')

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const activeLink = ref(null)

const navLinks = [
  { label: 'Beranda',  href: '#hero'    },
  { label: 'Fitur',   href: '#fitur'   },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Kontak',  href: '#kontak'  },
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Delay penutupan menu agar animasi klik sempat terlihat
const handleLinkClick = (href) => {
  activeLink.value = href
  setTimeout(() => {
    isMenuOpen.value = false
    activeLink.value = null
  }, 300)
}

const closeMenu = () => {
  isMenuOpen.value = false
}

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
 
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled
        ? 'bg-[#0B3D2E] shadow-lg shadow-black/20'
        : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">

        <!-- Logo -->
        <a href="#hero" class="flex items-center gap-2 group" @click="closeMenu">
          <div class="w-8 h-8 bg-[#2D8659] rounded-lg flex items-center justify-center
                      group-hover:bg-[#D9A441] transition-colors duration-200">
            <!-- Ikon daun SVG -->
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

          <!-- Dark mode toggle -->
          <button
            @click="toggleDark()"
            class="text-white/90 hover:text-[#D9A441] transition-colors duration-200 p-1 rounded-lg hover:bg-white/10"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <!-- Moon icon — ditampilkan di light mode -->
            <svg v-if="!isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
            </svg>
            <!-- Sun icon — ditampilkan di dark mode -->
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
          </button>

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
          <!-- 3 garis beranimasi → tanda × saat menu terbuka -->
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

          <!-- Dark mode toggle row (mobile) -->
          <button
            @click="toggleDark()"
            class="flex items-center gap-3 text-white/70 hover:text-[#D9A441] py-2 px-3
                   rounded-lg hover:bg-white/5 transition-all duration-200 text-sm font-medium"
          >
            <svg v-if="!isDark" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
            </svg>
            <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
            {{ isDark ? 'Mode Terang' : 'Mode Gelap' }}
          </button>

          <div class="border-t border-white/10 my-1" />

          <a
            v-for="(link, index) in navLinks"
            :key="link.href"
            :href="link.href"
            :style="{ animationDelay: `${index * 60}ms` }"
            :class="[
              'mobile-nav-item mobile-nav-item-hover relative overflow-hidden font-medium py-3 px-4 rounded-lg',
              'transition-all duration-200',
              activeLink === link.href
                ? 'bg-[#2D8659] text-white scale-[0.96]'
                : 'text-white/90'
            ]"
            @click="handleLinkClick(link.href)"
          >
            <span class="relative z-10 flex items-center gap-3">
            
              <span
                class="nav-dot w-1.5 h-1.5 rounded-full bg-[#2D8659] flex-shrink-0"
                :class="activeLink === link.href ? 'bg-white' : ''"
              />
              <span class="nav-label">{{ link.label }}</span>
              
              <svg class="nav-arrow w-4 h-4 ml-auto opacity-0 -translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </span>
        
            <span
              v-if="activeLink === link.href"
              class="absolute inset-0 rounded-lg bg-[#2D8659]/30 animate-ping-once"
            />
          </a>
          <a
            href="#kontak"
            :class="[
              'py-3 px-4 rounded-lg text-sm font-semibold text-center mt-2 transition-all duration-200',
              activeLink === '#kontak'
                ? 'btn-primary scale-[0.96] opacity-80'
                : 'btn-primary'
            ]"
            @click="handleLinkClick('#kontak')"
          >
            Mulai Sekarang
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>
