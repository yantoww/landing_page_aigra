/**
 * useColorMode.js — Global dark/light mode composable
 *
 * - State tersimpan di localStorage untuk persist antar sesi
 * - Pada init: cek localStorage dulu, fallback ke prefers-color-scheme sistem
 * - Menerapkan class 'dark' pada <html> agar Tailwind dark: variants aktif
 */
import { ref } from 'vue'

const isDark = ref(false)

// Init: localStorage > system preference
const stored = localStorage.getItem('agrismart-color-mode')
if (stored) {
  isDark.value = stored === 'dark'
} else {
  isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
}

// Terapkan class ke <html> sesuai nilai awal
document.documentElement.classList.toggle('dark', isDark.value)

const toggleDark = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('agrismart-color-mode', isDark.value ? 'dark' : 'light')
}

export function useColorMode() {
  return { isDark, toggleDark }
}
