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
import Landing3Header from '@/components/landing-3/Header.vue'
import Landing3Hero from '@/components/landing-3/Hero.vue'
import Landing3WhyUs from '@/components/landing-3/WhyUs.vue'
import Landing3Services from '@/components/landing-3/Services.vue'
import Landing3Team from '@/components/landing-3/Team.vue'
import Landing3Blog from '@/components/landing-3/Blog.vue'
import Landing3Accreditations from '@/components/landing-3/Accreditations.vue'
import Landing3Testimonials from '@/components/landing-3/Testimonials.vue'
import Landing3CTA from '@/components/landing-3/CTA.vue'
import Landing3Footer from '@/components/landing-3/Footer.vue'

useHead({
  title: 'مكتب الرياض للمحاماة | خبرة قانونية موثوقة',
  htmlAttrs: {
    lang: 'ar',
    dir: 'rtl'
  },
  link: [
    { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css' },
    { rel: 'stylesheet', href: '/assets/css/light.css' }
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
