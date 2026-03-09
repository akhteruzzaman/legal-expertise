<template>
  <div class="light-version">
    <LightHeader />
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
import LightHeader from '@/components/light/Header.vue'
import HeroAr from '@/components/about-2/HeroAr.vue'
import MissionAr from '@/components/about-1/MissionAr.vue'
import WhyUsAr from '@/components/about-1/WhyUsAr.vue'
import LightAccreditations from '@/components/light/Accreditations.vue'
import LightTestimonials from '@/components/light/Testimonials.vue'
import LightCTA from '@/components/light/CTA.vue'
import LightFooter from '@/components/light/Footer.vue'

useHead({
  title: 'مكتب الرياض للمحاماة | خبرة قانونية موثوقة (About 2)',
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
/* Reset body styles for perfect match */
body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}
</style>
