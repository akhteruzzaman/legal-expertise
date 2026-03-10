<template>
  <div class="light-version">
    <HeaderAr />
    <HeroAr />
    <TermsContentAr />
    <FooterAr />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import HeaderAr from '~/components/terms-2/HeaderAr.vue'
import HeroAr from '~/components/terms-2/HeroAr.vue'
import TermsContentAr from '~/components/terms-2/TermsContentAr.vue'
import FooterAr from '~/components/terms-2/FooterAr.vue'

useHead({
  title: 'الشروط والأحكام | مكتب الرياض للمحاماة',
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
  // Delay icon creation to ensure images paint first
  setTimeout(() => {
    if (window.lucide) {
      window.lucide.createIcons()
    }
  }, 100)
})
</script>

<style>
body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}
</style>
