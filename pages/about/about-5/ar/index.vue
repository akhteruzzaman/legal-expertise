<template>
  <div class="light-version">
    <Landing2Header />
    <HeroAr />
    <MissionAr />
    <WhyUsAr />
    <LightAccreditations />
    <LightTestimonials />
    <LightCTA />
    <LightFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Landing2Header from '@/components/about-5/HeaderAr.vue'
import HeroAr from '@/components/about-5/HeroAr.vue'
import MissionAr from '@/components/about-5/MissionAr.vue'
import WhyUsAr from '@/components/about-5/WhyUsAr.vue'
import LightAccreditations from '@/components/light/Accreditations.vue'
import LightTestimonials from '@/components/light/Testimonials.vue'
import LightCTA from '@/components/light/CTA.vue'
import LightFooter from '@/components/light/Footer.vue'

useHead({
  title: 'من نحن - نسخة 5 | مكتب الرياض للمحاماة',
  htmlAttrs: {
    lang: 'ar',
    dir: 'rtl'
  },
  link: [
    { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css' },
    { rel: 'stylesheet', href: '/assets/css/light.css' }
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
