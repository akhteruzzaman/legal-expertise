<template>
  <div class="light-version">
    <Landing4Header />
    <Landing4Hero />
    <Landing4WhyUs />
    <Landing4ServicesSlider />
    <Landing4Blog />
    <Landing4Team />
    <Landing4Accreditations />
    <Landing4Testimonials />
    <Landing4CTA />
    <Landing4Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Landing4Header from '@/components/landing-4/HeaderEn.vue'
import Landing4Hero from '@/components/landing-4/HeroEn.vue'
import Landing4WhyUs from '@/components/landing-4/WhyUsEn.vue'
import Landing4ServicesSlider from '@/components/landing-4/ServicesSliderEn.vue'
import Landing4Team from '@/components/landing-4/TeamEn.vue'
import Landing4Blog from '@/components/landing-4/BlogEn.vue'
import Landing4Accreditations from '@/components/landing-4/AccreditationsEn.vue'
import Landing4Testimonials from '@/components/landing-4/TestimonialsEn.vue'
import Landing4CTA from '@/components/landing-4/CTAEn.vue'
import Landing4Footer from '@/components/landing-4/FooterEn.vue'

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
