<script setup>
/**
 * FeaturesSection.vue — Fitur Unggulan AgriSmart
 * - Grid 4 kolom (desktop), 2 kolom (tablet), 1 kolom (mobile)
 * - Data fitur disimpan sebagai const array (bukan hardcode di template)
 * - Hover-lift effect via card-hover CSS class
 * - Fade-in scroll animation via IntersectionObserver
 */
import { onMounted } from 'vue'

// Data fitur — digunakan dengan v-for di template
const features = [
  {
    id: 1,
    title: 'Monitoring Lahan Real-time',
    description:
      'Pantau kondisi tanah dan tanaman secara real-time melalui sensor IoT yang terintegrasi.',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-[#2D8659]',
    borderColor: 'border-[#2D8659]',
    accentColor: 'bg-[#2D8659]',
  },
  {
    id: 2,
    title: 'Prediksi Cuaca & Panen',
    description:
      'Antisipasi perubahan cuaca ekstrim dengan analisis prediktif berbasis machine learning.',
    iconBg: 'bg-amber-50',
    iconColor: 'text-[#D9A441]',
    borderColor: 'border-[#D9A441]',
    accentColor: 'bg-[#D9A441]',
  },
  {
    id: 3,
    title: 'Dashboard Investor',
    description:
      'Laporan performa lahan komprehensif yang disajikan dalam metrik finansial yang jelas.',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-400',
    accentColor: 'bg-blue-500',
  },
  {
    id: 4,
    title: 'Rekomendasi Otomatis',
    description:
      'Sistem AI memberikan saran intervensi irigasi dan pupuk yang presisi berdasarkan data lapangan.',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-400',
    accentColor: 'bg-purple-500',
  },
]

// Intersection Observer untuk fade-in saat scroll
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )
  document.querySelectorAll('#fitur .fade-in-up').forEach((el) => observer.observe(el))
})
</script>

<template>
  <!-- Features Section -->
  <section id="fitur" class="bg-white pt-12 pb-20 lg:pt-16 lg:pb-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section Header -->
      <div class="text-center mb-16 fade-in-up">
        <!-- Badge -->
        <span
          class="inline-block bg-[#EEF3EC] text-[#2D8659] text-xs font-bold
                 uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
        >
  
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-[#0B3D2E] mb-4">
          Fitur Unggulan
        </h2>
        <p class="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
          Teknologi mutakhir yang dirancang khusus untuk memenuhi kebutuhan proses
          pertanian modern.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(feature, index) in features"
          :key="feature.id"
          class="fade-in-up card-hover bg-white border border-gray-100 rounded-2xl
                 p-6 flex flex-col gap-4 cursor-default group"
          :class="`delay-${(index + 1) * 100}`"
        >
          <!-- Icon circle with colored background -->
          <div
            :class="[
              'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0',
              feature.iconBg,
              'group-hover:scale-110 transition-transform duration-300'
            ]"
          >
            <!-- Monitoring icon (signal/radio waves) -->
            <svg v-if="feature.id === 1" :class="['w-6 h-6', feature.iconColor]"
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/>
            </svg>

            <!-- Weather/Sun icon -->
            <svg v-else-if="feature.id === 2" :class="['w-6 h-6', feature.iconColor]"
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>

            <!-- Dashboard icon -->
            <svg v-else-if="feature.id === 3" :class="['w-6 h-6', feature.iconColor]"
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"/>
            </svg>

            <!-- AI/Robot icon -->
            <svg v-else :class="['w-6 h-6', feature.iconColor]"
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-2"/>
            </svg>
          </div>

          <!-- Text Content -->
          <div>
            <h3 class="text-base font-bold text-[#0B3D2E] mb-2 group-hover:text-[#2D8659]
                       transition-colors duration-200">
              {{ feature.title }}
            </h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              {{ feature.description }}
            </p>
          </div>

          <!-- Colored accent bar at bottom -->
          <div
            :class="['h-1 rounded-full mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300', feature.accentColor]"
          />
        </div>
      </div>
    </div>
  </section>
</template>
