<script setup>
/**
 * App.vue — Root application component
 * Menyusun semua section komponen dalam urutan yang benar.
 */
import { provide } from 'vue'
import { useColorMode } from './composables/useColorMode.js'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterComponent from './components/FooterComponent.vue'

// Provide ke semua komponen child via inject
const colorMode = useColorMode()
provide('colorMode', colorMode)
</script>

<template>
  <div class="min-h-screen">
    <NavBar />
    <main>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ContactSection />
    </main>
    <FooterComponent />
  </div>
</template>
