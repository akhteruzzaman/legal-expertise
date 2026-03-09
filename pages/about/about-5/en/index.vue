<template>
  <div class="light-version">
    <Landing2HeaderEn />
    <HeroEn />
    <MissionEn />
    <WhyUsEn />
    <LightEnAccreditations />
    <LightEnTestimonials />
    <LightEnCTA />
    <LightEnFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Landing2HeaderEn from '@/components/about-5/HeaderEn.vue'
import HeroEn from '@/components/about-5/HeroEn.vue'
import MissionEn from '@/components/about-5/MissionEn.vue'
import WhyUsEn from '@/components/about-5/WhyUsEn.vue'
import LightEnAccreditations from '@/components/light-en/Accreditations.vue'
import LightEnTestimonials from '@/components/light-en/Testimonials.vue'
import LightEnCTA from '@/components/light-en/CTA.vue'
import LightEnFooter from '@/components/light-en/Footer.vue'

useHead({
  title: 'About Us - Version 5 | Al Riyadh Law Firm',
  htmlAttrs: {
    lang: 'en',
    dir: 'ltr'
  },
  link: [
    { id: 'bootstrap-css', rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' },
    { rel: 'stylesheet', href: '/assets/css/light-en.css' }
  ],
  script: [
    { src: 'https://unpkg.com/lucide@latest' },
    { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js' }
  ]
})

onMounted(() => {
  if (window.lucide) {
    window.lucide.createIcons()
  }
})
</script>

<style>
/* Page-specific overrides if any */
</style>
