<template>
  <div class="services-version">
    <LightHeader />
    <BreadcrumbAr />
    <ServicesListAr />
    <CTAAr />
    <LightFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import LightHeader from '@/components/light/Header.vue'
import BreadcrumbAr from '@/components/services-1/BreadcrumbAr.vue'
import ServicesListAr from '@/components/services-1/ServicesListAr.vue'
import CTAAr from '@/components/services-1/CTAAr.vue'
import LightFooter from '@/components/light/Footer.vue'

useHead({
  title: 'خدماتنا | مكتب الرياض للمحاماة',
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
