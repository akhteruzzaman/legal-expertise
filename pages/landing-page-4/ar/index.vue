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
import Landing4Header from '@/components/landing-4/Header.vue'
import Landing4Hero from '@/components/landing-4/Hero.vue'
import Landing4WhyUs from '@/components/landing-4/WhyUs.vue'
import Landing4ServicesSlider from '@/components/landing-4/ServicesSlider.vue'
import Landing4Team from '@/components/landing-4/Team.vue'
import Landing4Blog from '@/components/landing-4/Blog.vue'
import Landing4Accreditations from '@/components/landing-4/Accreditations.vue'
import Landing4Testimonials from '@/components/landing-4/Testimonials.vue'
import Landing4CTA from '@/components/landing-4/CTA.vue'
import Landing4Footer from '@/components/landing-4/Footer.vue'

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
