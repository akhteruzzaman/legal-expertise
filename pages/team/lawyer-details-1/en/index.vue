<template>
  <div class="light-version">
    <LightEnHeader />
    <BreadcrumbEn />
    <LawyerProfileEn />
    <LawyerDetailsEn />
    <TeamGridEn />
    <FooterEn />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import LightEnHeader from '@/components/light-en/Header.vue'
import BreadcrumbEn from '@/components/lawyer-details-1/BreadcrumbEn.vue'
import LawyerProfileEn from '@/components/lawyer-details-1/LawyerProfileEn.vue'
import LawyerDetailsEn from '@/components/lawyer-details-1/LawyerDetailsEn.vue'
import TeamGridEn from '@/components/lawyer-details-1/TeamGridEn.vue'
import FooterEn from '@/components/lawyer-details-1/FooterEn.vue'

useHead({
  title: 'Lawyer Details | Al Riyadh Law Firm',
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
body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}
</style>
