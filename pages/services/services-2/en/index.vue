<template>
  <div class="light-version">
    <HeaderEn />
    <HeroEn />
    <ServicesGridEn />
    <CTAEn />
    <FooterEn />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import HeaderEn from '@/components/shared-landing-4/HeaderEn.vue'
import HeroEn from '@/components/shared-landing-4/HeroEn.vue'
import ServicesGridEn from '@/components/services-2/ServicesGridEn.vue'
import CTAEn from '@/components/services-2/CTAEn.vue'
import FooterEn from '@/components/services-2/FooterEn.vue'

useHead({
  title: 'Services 2 | Al Riyadh Law Firm',
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
