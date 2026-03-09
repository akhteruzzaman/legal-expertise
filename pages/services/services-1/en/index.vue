<template>
  <div class="services-version">
    <LightEnHeader />
    <BreadcrumbEn />
    <ServicesListEn />
    <CTAEn />
    <LightEnFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import LightEnHeader from '@/components/light-en/Header.vue'
import BreadcrumbEn from '@/components/services-1/BreadcrumbEn.vue'
import ServicesListEn from '@/components/services-1/ServicesListEn.vue'
import CTAEn from '@/components/services-1/CTAEn.vue'
import LightEnFooter from '@/components/light-en/Footer.vue'

useHead({
  title: 'Our Services | Al Riyadh Law Firm',
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
