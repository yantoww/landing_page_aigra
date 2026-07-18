<script setup>
/**
 * ContactSection.vue — Formulir Kontak
 * - Layout split 2 kolom (form kiri, info kontak kanan)
 * - v-model two-way binding untuk semua input
 * - Validasi dasar: required + format email valid
 * - Pesan error di bawah setiap input
 * - Tombol submit di-disable saat form tidak valid
 * - Toast sukses setelah submit
 */
import { ref, reactive, computed, onMounted } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  message: '',
})

const showToast = ref(false)
const isSubmitting = ref(false)

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const validateField = (field) => {
  if (field === 'name') {
    errors.name = form.name.trim() ? '' : 'Nama lengkap wajib diisi.'
  }
  if (field === 'email') {
    if (!form.email.trim()) {
      errors.email = 'Email wajib diisi.'
    } else if (!isValidEmail(form.email)) {
      errors.email = 'Format email tidak valid.'
    } else {
      errors.email = ''
    }
  }
  if (field === 'message') {
    errors.message = form.message.trim() ? '' : 'Pesan wajib diisi.'
  }
}

// Semua field harus terisi dan tidak ada error aktif
const isFormValid = computed(() => {
  return (
    form.name.trim() !== '' &&
    form.email.trim() !== '' &&
    isValidEmail(form.email) &&
    form.message.trim() !== ''
  )
})

// Submit handler
const handleSubmit = async () => {
  validateField('name')
  validateField('email')
  validateField('message')

  if (!isFormValid.value) return

  isSubmitting.value = true
  // Simulasi request (mock delay)
  await new Promise((resolve) => setTimeout(resolve, 1000))

  form.name = ''
  form.email = ''
  form.message = ''

  isSubmitting.value = false
  showToast.value = true
  // Sembunyikan toast setelah 4 detik
  setTimeout(() => { showToast.value = false }, 4000)
}

const contactInfo = [
  {
    icon: 'email',
    label: 'Email',
    value: 'hello@agrismart.id',
  },
  {
    icon: 'phone',
    label: 'Telepon',
    value: '+62 811 2345 6789',
  },
  {
    icon: 'location',
    label: 'Alamat',
    value: 'Jl. Pertanian Cerdas No. 12, Jakarta Selatan',
  },
  {
    icon: 'clock',
    label: 'Jam Kerja',
    value: 'Senin–Jumat 08.00–17.00',
  },
]

// Fade-in observer
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
  document.querySelectorAll('#kontak .fade-in-up').forEach((el) => observer.observe(el))
})
</script>

<template>
  <section id="kontak" class="bg-white dark:bg-[#0d1f17] py-20 lg:py-28 relative
                               transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="text-center mb-14 fade-in-up">
        <span
          class="inline-block bg-[#EEF3EC] dark:bg-[#1a2e22] text-[#2D8659] text-xs font-bold
                 uppercase tracking-widest px-4 py-1.5 rounded-full mb-4
                 transition-colors duration-300"
        >
          Hubungi Kami
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-[#0B3D2E] dark:text-[#f0f4f2] mb-4
                   transition-colors duration-300">
          Siap Memulai Transformasi?
        </h2>
        <p class="text-gray-500 dark:text-gray-400 max-w-xl mx-auto
                  transition-colors duration-300">
          Tim kami siap membantu Anda setiap hari kerja. Isi form di bawah dan kami
          akan merespons dalam 24 jam.
        </p>
      </div>

      <!-- Split Layout: form kiri, info kontak kanan -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        <!-- LEFT: Contact Form -->
        <div class="fade-in-up bg-white dark:bg-[#1a2e22] border border-gray-100 dark:border-white/10
                    rounded-2xl p-8 shadow-sm transition-colors duration-300">
          <form @submit.prevent="handleSubmit" novalidate class="flex flex-col gap-6">

            <div>
              <label for="name" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2
                                        transition-colors duration-300">
                Nama Lengkap
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                placeholder="Masukkan nama Anda"
                autocomplete="name"
                :class="[
                  'w-full px-4 py-3 rounded-xl border text-gray-800 dark:text-[#f0f4f2]',
                  'placeholder-gray-400 dark:placeholder-gray-500',
                  'bg-white dark:bg-[#0d1f17]',
                  'focus:outline-none focus:ring-2 transition-all duration-200',
                  errors.name
                    ? 'border-red-400 focus:ring-red-200'
                    : 'border-gray-200 dark:border-white/20 focus:ring-[#2D8659]/30 focus:border-[#2D8659]'
                ]"
                @blur="validateField('name')"
              />
              <Transition name="err">
                <p v-if="errors.name" class="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                  <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clip-rule="evenodd"/>
                  </svg>
                  {{ errors.name }}
                </p>
              </Transition>
            </div>

            <div>
              <label for="email" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2
                                         transition-colors duration-300">
                Email
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="nama@email.com"
                autocomplete="email"
                :class="[
                  'w-full px-4 py-3 rounded-xl border text-gray-800 dark:text-[#f0f4f2]',
                  'placeholder-gray-400 dark:placeholder-gray-500',
                  'bg-white dark:bg-[#0d1f17]',
                  'focus:outline-none focus:ring-2 transition-all duration-200',
                  errors.email
                    ? 'border-red-400 focus:ring-red-200'
                    : 'border-gray-200 dark:border-white/20 focus:ring-[#2D8659]/30 focus:border-[#2D8659]'
                ]"
                @blur="validateField('email')"
              />
              <Transition name="err">
                <p v-if="errors.email" class="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                  <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clip-rule="evenodd"/>
                  </svg>
                  {{ errors.email }}
                </p>
              </Transition>
            </div>

            <div>
              <label for="message" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2
                                           transition-colors duration-300">
                Pesan
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                placeholder="Tuliskan pesan atau pertanyaan Anda..."
                :class="[
                  'w-full px-4 py-3 rounded-xl border text-gray-800 dark:text-[#f0f4f2]',
                  'placeholder-gray-400 dark:placeholder-gray-500',
                  'bg-white dark:bg-[#0d1f17]',
                  'focus:outline-none focus:ring-2 transition-all duration-200 resize-none',
                  errors.message
                    ? 'border-red-400 focus:ring-red-200'
                    : 'border-gray-200 dark:border-white/20 focus:ring-[#2D8659]/30 focus:border-[#2D8659]'
                ]"
                @blur="validateField('message')"
              />
              <Transition name="err">
                <p v-if="errors.message" class="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                  <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clip-rule="evenodd"/>
                  </svg>
                  {{ errors.message }}
                </p>
              </Transition>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="btn-primary w-full py-4 rounded-xl font-semibold text-base
                     flex items-center justify-center gap-2
                     disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:transform-none"
            >
              <svg
                v-if="isSubmitting"
                class="w-5 h-5 animate-spin"
                fill="none" viewBox="0 0 24 24"
              >
                <circle class="opacity-25" cx="12" cy="12" r="10"
                        stroke="currentColor" stroke-width="4"/>
                <path class="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
              <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
              </svg>
              {{ isSubmitting ? 'Mengirim...' : 'Kirim Pesan' }}
            </button>
          </form>
        </div>

        <!-- RIGHT: Contact Info Panel -->
        <div class="fade-in-up delay-200">
          <!-- Panel sudah gelap (#0B3D2E), minimal perubahan di dark mode -->
          <div class="bg-[#0B3D2E] dark:bg-[#1a2e22] rounded-2xl p-8 text-white h-full
                      border border-transparent dark:border-white/10 transition-colors duration-300">
            <h3 class="text-xl font-bold mb-2">Informasi Kontak</h3>
            <p class="text-white/60 text-sm mb-8">
              Tim kami siap membantu Anda setiap hari kerja.
            </p>

            <div class="flex flex-col gap-6">
              <div
                v-for="(info, i) in contactInfo"
                :key="i"
                class="flex items-start gap-4"
              >
                <div class="w-10 h-10 rounded-xl bg-[#2D8659]/30 flex items-center
                            justify-center flex-shrink-0 mt-0.5">
                  <svg v-if="info.icon === 'email'" class="w-5 h-5 text-[#D9A441]"
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <svg v-else-if="info.icon === 'phone'" class="w-5 h-5 text-[#D9A441]"
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <svg v-else-if="info.icon === 'location'" class="w-5 h-5 text-[#D9A441]"
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <svg v-else class="w-5 h-5 text-[#D9A441]"
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-white/50 text-xs font-medium uppercase tracking-wide mb-1">
                    {{ info.label }}
                  </div>
                  <div class="text-white font-medium text-sm leading-relaxed">
                    {{ info.value }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Decorative element -->
            <div
              class="mt-10 pt-8 border-t border-white/10 flex items-center gap-3"
            >
              <div class="w-2 h-2 rounded-full bg-[#2D8659] animate-pulse" />
              <span class="text-white/60 text-xs">Kami aktif melayani hari ini</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Success Toast Notification -->
    <Transition name="toast">
      <div
        v-if="showToast"
        class="fixed bottom-6 right-6 z-50 bg-[#2D8659] text-white
               px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3
               max-w-sm"
      >
        <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
          </svg>
        </div>
        <div>
          <div class="font-semibold text-sm">Pesan terkirim!</div>
          <div class="text-white/70 text-xs">Kami akan menghubungi Anda segera.</div>
        </div>
        <button
          class="ml-auto text-white/60 hover:text-white transition-colors"
          @click="showToast = false"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
/* Error message transition */
.err-enter-active,
.err-leave-active {
  transition: all 0.2s ease;
}
.err-enter-from,
.err-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

/* Toast transition */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}
</style>
