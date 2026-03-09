<template>
  <div class="light-version">
    <LightHeader />
    <BreadcrumbAr />
    <LawyerProfileAr />
    <LawyerDetailsAr />
    <TeamGridAr />
    <FooterAr />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import LightHeader from '@/components/light/Header.vue'
import BreadcrumbAr from '@/components/lawyer-details-2/BreadcrumbAr.vue'
import LawyerProfileAr from '@/components/lawyer-details-2/LawyerProfileAr.vue'
import LawyerDetailsAr from '@/components/lawyer-details-2/LawyerDetailsAr.vue'
import TeamGridAr from '@/components/lawyer-details-2/TeamGridAr.vue'
import FooterAr from '@/components/lawyer-details-2/FooterAr.vue'

useHead({
  title: 'تفاصيل المحامي | مكتب الرياض للمحاماة',
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
body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}
</style>
