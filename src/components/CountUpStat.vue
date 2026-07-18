<script setup>
/**
 * CountUpStat.vue — Reusable count-up number animation
 *
 * Props:
 *   value        {Number}  — angka akhir (contoh: 500, 10000, 98)
 *   suffix       {String}  — karakter setelah angka ('+', '%', '')
 *   useThousands {Boolean} — pakai separator titik ribuan (contoh: 10.000)
 *   duration     {Number}  — durasi animasi dalam ms (default 1800)
 *
 * Behavior:
 *   - Animasi mulai saat elemen masuk viewport (Intersection Observer)
 *   - Hanya berjalan sekali (observer di-disconnect setelah trigger pertama)
 *   - Easing ease-out: 1 - (1 - t)^3
 *   - Menggunakan requestAnimationFrame — tanpa library eksternal
 */
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  value:        { type: Number, required: true },
  suffix:       { type: String, default: '' },
  useThousands: { type: Boolean, default: false },
  duration:     { type: Number, default: 1800 },
})

const displayText = ref('0' + props.suffix)

// id-ID menghasilkan titik sebagai separator ribuan (10.000), sesuai format Indonesia
const formatNumber = (n) => {
  const rounded = Math.floor(n)
  if (!props.useThousands) return rounded.toString()
  return rounded.toLocaleString('id-ID')
}

let rafId = null
let observer = null
const statEl = ref(null)

// Ease-out cubic: cepat di awal, melambat mendekati nilai akhir
const easeOut = (t) => 1 - Math.pow(1 - t, 3)

const runCountUp = () => {
  if (rafId) cancelAnimationFrame(rafId)
  const startTime = performance.now()

  const tick = (now) => {
    const elapsed = now - startTime
    const t = Math.min(elapsed / props.duration, 1)
    const current = easeOut(t) * props.value

    displayText.value = formatNumber(current) + props.suffix

    if (t < 1) {
      rafId = requestAnimationFrame(tick)
    } else {
      // Pastikan nilai akhir exact (hindari floating point rounding)
      displayText.value = formatNumber(props.value) + props.suffix
    }
  }

  rafId = requestAnimationFrame(tick)
}

onMounted(() => {
  displayText.value = '0' + props.suffix

  // threshold 0.3: animasi mulai saat 30% elemen terlihat
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runCountUp()
          observer.disconnect() // hanya sekali
        }
      })
    },
    { threshold: 0.3 }
  )

  if (statEl.value) observer.observe(statEl.value)
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
  if (observer) observer.disconnect()
})
</script>

<template>
  <span ref="statEl">{{ displayText }}</span>
</template>
