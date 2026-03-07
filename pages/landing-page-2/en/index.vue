<template>
  <div class="light-version">
    <Landing2Header />
    <Landing2Hero />
    <Landing2WhyUs />
    <Landing2Services />
    <Landing2Team />
    <Landing2Blog />
    <Landing2Accreditations />
    <Landing2Testimonials />
    <Landing2CTA />
    <Landing2Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Landing2Header from '@/components/landing-2/HeaderEn.vue'
import Landing2Hero from '@/components/landing-2/HeroEn.vue'
import Landing2WhyUs from '@/components/landing-2/WhyUsEn.vue'
import Landing2Services from '@/components/landing-2/ServicesEn.vue'
import Landing2Team from '@/components/landing-2/TeamEn.vue'
import Landing2Blog from '@/components/landing-2/BlogEn.vue'
import Landing2Accreditations from '@/components/landing-2/AccreditationsEn.vue'
import Landing2Testimonials from '@/components/landing-2/TestimonialsEn.vue'
import Landing2CTA from '@/components/landing-2/CTAEn.vue'
import Landing2Footer from '@/components/landing-2/FooterEn.vue'

useHead({
  title: 'Al Riyadh Law Firm | Trusted Legal Expertise',
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
/* Reset body styles for perfect match */
body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}
</style>
