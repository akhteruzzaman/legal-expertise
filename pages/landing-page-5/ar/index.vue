<template>
  <div class="light-version">
    <LightHeader />
    <LightHero />
    <LightWhyUs />
    <LightServices />
    <LightTeam />
    <LightBlog />
    <LightAccreditations />
    <LightTestimonials />
    <LightCTA />
    <LightFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import LightHeader from '@/components/light/Header.vue'
import LightHero from '@/components/light/Hero.vue'
import LightWhyUs from '@/components/light/WhyUs.vue'
import LightServices from '@/components/light/Services.vue'
import LightTeam from '@/components/light/Team.vue'
import LightBlog from '@/components/light/Blog.vue'
import LightAccreditations from '@/components/light/Accreditations.vue'
import LightTestimonials from '@/components/light/Testimonials.vue'
import LightCTA from '@/components/light/CTA.vue'
import LightFooter from '@/components/light/Footer.vue'

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
