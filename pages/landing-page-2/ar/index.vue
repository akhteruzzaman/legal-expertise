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
import Landing2Header from '@/components/landing-2/Header.vue'
import Landing2Hero from '@/components/landing-2/Hero.vue'
import Landing2WhyUs from '@/components/landing-2/WhyUs.vue'
import Landing2Services from '@/components/landing-2/Services.vue'
import Landing2Team from '@/components/landing-2/Team.vue'
import Landing2Blog from '@/components/landing-2/Blog.vue'
import Landing2Accreditations from '@/components/landing-2/Accreditations.vue'
import Landing2Testimonials from '@/components/landing-2/Testimonials.vue'
import Landing2CTA from '@/components/landing-2/CTA.vue'
import Landing2Footer from '@/components/landing-2/Footer.vue'

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
