<script setup>
/**
 * HeroSection.vue — Hero utama landing page
 * - Background foto ladang dengan overlay gradasi hijau tua
 * - Badge, judul besar, deskripsi, dua tombol CTA
 * - Card statistik melayang (overlap ke section berikutnya)
 * - Fade-in animation via IntersectionObserver
 */
import { onMounted } from 'vue'
import CountUpStat from './CountUpStat.vue'

const stats = [
  {
    icon: 'users',
    value: '500+',
    numericValue: 500,
    suffix: '+',
    useThousands: false,
    label: 'Petani Aktif',
    color: '#2D8659',
    bgColor: '#EEF3EC',
    bgColorDark: '#1a3d28',
    labelColor: '#6b7280',
  },
  {
    icon: 'area',
    value: '10.000+',
    numericValue: 10000,
    suffix: '+',
    useThousands: true,
    label: 'Hektar Terkelola',
    color: '#D9A441',
    bgColor: '#FEF9EE',
    bgColorDark: '#3d2e0f',
    labelColor: '#6b7280',
  },
  {
    icon: 'accuracy',
    value: '98%',
    numericValue: 98,
    suffix: '%',
    useThousands: false,
    label: 'Akurasi Prediksi',
    color: '#0B3D2E',
    bgColor: '#EEF3EC',
    bgColorDark: '#1a3d28',
    labelColor: '#6b7280',
  },
]

// Gunakan hex string untuk warna agar tidak bergantung pada Tailwind class scanner
// (class dinamis dari JS tidak akan di-purge oleh Tailwind JIT)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        } else {
          entry.target.classList.remove('visible')
        }
      })
    },
    { threshold: 0.1 }
  )
  document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el))
})
</script>

<template>
  <!--
    Wrapper div: membungkus hero + stats card.
    Stats card harus di LUAR section yang memiliki overflow-hidden
    agar tidak ter-clip. Keduanya dibungkus dalam satu div relative.
  -->
  <div class="relative">

    <section
      id="hero"
      class="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style="background-image: url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1920&q=85&auto=format&fit=crop')"
      />

      <div
        class="absolute inset-0"
        style="background: linear-gradient(135deg, rgba(11,61,46,0.90) 0%, rgba(11,61,46,0.70) 50%, rgba(45,134,89,0.55) 100%)"
      />

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-36 lg:pb-44">
        <div class="max-w-3xl">

          <h1
            class="text-4xl sm:text-5xl lg:text-6xl font-extrabold
                   text-white leading-tight mb-6"
          >
            Pertanian Cerdas untuk
            <span class="text-[#D9A441]"> Masa Depan</span>
            yang Berkelanjutan
          </h1>

          <p
            class="text-white/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl"
          >
            Optimalkan hasil panen dan kelola risiko dengan insight berbasis data.
            AgriSmart menggabungkan teknologi presisi dengan kearifan pertanian tradisional.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <a
              href="#kontak"
              class="btn-primary inline-flex items-center justify-center gap-2
                     px-8 py-4 rounded-xl font-semibold text-base"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              Coba Gratis
            </a>
            <a
              href="#fitur"
              class="btn-outline inline-flex items-center justify-center gap-2
                     px-8 py-4 rounded-xl font-semibold text-base"
            >
              Pelajari Lebih Lanjut
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M19 9l-7 7-7-7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!--
      ===== FLOATING STATS CARD =====
      Diletakkan DI LUAR <section> (sehingga tidak ter-clip oleh overflow-hidden),
      namun masih dalam wrapper div yang sama.
      -mt-20: menarik card ke atas agar overlap dengan bagian bawah hero.
      z-20: memastikan card tampil di atas elemen lain.
    -->
    <div class="relative z-20 -mt-20 px-4 sm:px-6 lg:px-8 mb-0">
      <div class="max-w-4xl mx-auto">
        <div
          class="bg-white dark:bg-[#1a2e22] rounded-2xl p-6 sm:p-8 grid grid-cols-3
                 transition-colors duration-300"
          style="box-shadow: 0 8px 48px rgba(11,61,46,0.18), 0 2px 8px rgba(0,0,0,0.06);"
        >
          <div
            v-for="(stat, i) in stats"
            :key="i"
            class="flex flex-col items-center text-center gap-3 py-2"
            :class="i === 1 ? 'border-x border-gray-100 dark:border-white/10 px-4' : 'px-2'"
          >
            <div
              class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0
                     transition-colors duration-300"
              :style="{ backgroundColor: stat.bgColor }"
            >
              <svg v-if="stat.icon === 'users'" class="w-5 h-5"
                   :style="{ color: stat.color }"
                   fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <svg v-else-if="stat.icon === 'area'" class="w-5 h-5"
                   :style="{ color: stat.color }"
                   fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 3C7 3 4 8 4 13c0 4 3 7 8 8 5-1 8-4 8-8 0-5-3-10-8-10z M12 21V12 M12 12 C9 9 6 7 4 13"/>
              </svg>
              <svg v-else class="w-5 h-5"
                   :style="{ color: stat.color === '#0B3D2E' ? '#3da06a' : stat.color }"
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>

            <span
              class="text-2xl sm:text-3xl font-extrabold leading-tight transition-colors duration-300"
              :style="{ color: stat.icon === 'accuracy' ? undefined : stat.color }"
              :class="stat.icon === 'accuracy' ? 'text-[#0B3D2E] dark:text-[#3da06a]' : ''"
            >
              <CountUpStat
                :value="stat.numericValue"
                :suffix="stat.suffix"
                :use-thousands="stat.useThousands"
                :duration="1800"
              />
            </span>

            <span
              class="text-xs sm:text-sm font-medium leading-tight transition-colors duration-300"
              :style="{ color: stat.icon === 'accuracy' ? undefined : stat.color }"
              :class="stat.icon === 'accuracy' ? 'text-[#0B3D2E] dark:text-[#3da06a]' : ''"
            >
              {{ stat.label }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
