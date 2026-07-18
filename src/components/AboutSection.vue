<script setup>
/**
 * AboutSection.vue — Tentang Kami
 * - Background sage muda #EEF3EC
 * - Layout 2 kolom: teks kiri + stat cards kanan
 * - Checklist items dan stat cards dengan border warna berbeda
 * - Fade-in scroll animation
 */
import { onMounted } from 'vue'

const checklistItems = [
  'Teknologi Ramah Lingkungan',
  'Dukungan Komunitas Petani',
  'Peningkatan Hasil Panen Berkelanjutan',
]

const statCards = [
  {
    value: '50K+',
    label: 'Hektar Lahan Terkelola',
    sublabel: 'Lahan pertanian di seluruh Indonesia',
    borderColor: 'border-l-[#2D8659]',
    valueColor: 'text-[#2D8659]',
    bg: 'bg-white',
  },
  {
    value: '10K+',
    label: 'Petani Terdaftar',
    sublabel: 'Petani aktif menggunakan platform',
    borderColor: 'border-l-[#D9A441]',
    valueColor: 'text-[#D9A441]',
    bg: 'bg-white',
  },
  {
    value: '30%',
    label: 'Peningkatan Efisiensi',
    sublabel: 'Rata-rata efisiensi biaya produksi',
    borderColor: 'border-l-[#0B3D2E]',
    valueColor: 'text-[#0B3D2E]',
    bg: 'bg-white',
  },
]

// Fade-in scroll observer
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
  document.querySelectorAll('#tentang .fade-in-up').forEach((el) => observer.observe(el))
})
</script>

<template>
  <section id="tentang" class="bg-[#EEF3EC] py-20 lg:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <!-- LEFT: Text Content -->
        <div class="fade-in-up">
          <span
            class="inline-block bg-[#2D8659]/15 text-[#2D8659] text-xs font-bold
                   uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
          >
            Tentang Kami
          </span>

          <h2
            class="text-3xl sm:text-4xl font-extrabold text-[#0B3D2E] leading-tight mb-6"
          >
            Membawa Transformasi Digital ke
            <span class="text-[#2D8659]">Setiap Petak Tanah</span>
          </h2>

          <p class="text-gray-600 leading-relaxed mb-8">
            Kami berkomitmen untuk mendorong pertanian Indonesia maju melalui teknologi
            inovatif, memberikan akses yang sama kepada seluruh petani dari Sabang sampai
            Merauke untuk memanfaatkan kecerdasan buatan demi hasil panen yang optimal
            dan berkelanjutan.
          </p>

          <ul class="flex flex-col gap-4">
            <li
              v-for="(item, i) in checklistItems"
              :key="i"
              class="flex items-center gap-3"
            >
              <!-- Centang hijau -->
              <div
                class="w-6 h-6 rounded-full bg-[#2D8659] flex items-center justify-center
                       flex-shrink-0 shadow-sm shadow-[#2D8659]/30"
              >
                <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                        d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <span class="text-gray-700 font-medium">{{ item }}</span>
            </li>
          </ul>

          <a
            href="#kontak"
            class="btn-primary inline-flex items-center gap-2 mt-10 px-7 py-3.5 rounded-xl font-semibold"
          >
            Bergabung Sekarang
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        <!-- RIGHT: Stat Cards -->
        <div class="flex flex-col gap-4 fade-in-up delay-200">
          <div
            v-for="(stat, i) in statCards"
            :key="i"
            class="card-hover bg-white rounded-xl shadow-sm border-l-4 p-6"
            :class="stat.borderColor"
          >
            <div class="flex items-center justify-between">
              <div>
                <div :class="['text-3xl font-extrabold mb-1', stat.valueColor]">
                  {{ stat.value }}
                </div>
                <div class="text-[#0B3D2E] font-semibold text-base">{{ stat.label }}</div>
                <div class="text-gray-400 text-sm mt-1">{{ stat.sublabel }}</div>
              </div>
              <!-- Decorative dot pattern -->
              <div class="opacity-10">
                <div class="grid grid-cols-4 gap-1">
                  <div
                    v-for="n in 16"
                    :key="n"
                    class="w-1.5 h-1.5 rounded-full bg-gray-800"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
