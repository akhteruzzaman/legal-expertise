<template>
  <div class="light-version">
    <Landing3Header />
    <Landing3Hero />
    <Landing3WhyUs />
    <Landing3Services />
    <Landing3Accreditations />
    <Landing3Team />
    <Landing3Blog />
    <Landing3Testimonials />
    <Landing3CTA />
    <Landing3Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Landing3Header from '@/components/landing-3/HeaderEn.vue'
import Landing3Hero from '@/components/landing-3/HeroEn.vue'
import Landing3WhyUs from '@/components/landing-3/WhyUsEn.vue'
import Landing3Services from '@/components/landing-3/ServicesEn.vue'
import Landing3Team from '@/components/landing-3/TeamEn.vue'
import Landing3Blog from '@/components/landing-3/BlogEn.vue'
import Landing3Accreditations from '@/components/landing-3/AccreditationsEn.vue'
import Landing3Testimonials from '@/components/landing-3/TestimonialsEn.vue'
import Landing3CTA from '@/components/landing-3/CTAEn.vue'
import Landing3Footer from '@/components/landing-3/FooterEn.vue'

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
    { src: 'https://unpkg.com/lucide@latest' }
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
