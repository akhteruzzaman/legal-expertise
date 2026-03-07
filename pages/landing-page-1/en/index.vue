<template>
  <div class="light-version">
    <LightEnHeader />
    <LightEnHero :show-play-button="false" />
    <LightEnWhyUs />
    <LightEnServices />
    <LightEnTeam />
    <LightEnBlog />
    <LightEnAccreditations />
    <LightEnTestimonials />
    <LightEnCTA />
    <LightEnFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import LightEnHeader from '@/components/light-en/Header.vue'
import LightEnHero from '@/components/light-en/Hero.vue'
import LightEnWhyUs from '@/components/light-en/WhyUs.vue'
import LightEnServices from '@/components/light-en/Services.vue'
import LightEnTeam from '@/components/light-en/Team.vue'
import LightEnBlog from '@/components/light-en/Blog.vue'
import LightEnAccreditations from '@/components/light-en/Accreditations.vue'
import LightEnTestimonials from '@/components/light-en/Testimonials.vue'
import LightEnCTA from '@/components/light-en/CTA.vue'
import LightEnFooter from '@/components/light-en/Footer.vue'

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
