<template>
  <div class="light-version">
    <HeaderEn />
    <HeroEn />
    <TermsContentEn />
    <FooterEn />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import HeaderEn from '~/components/terms-1/HeaderEn.vue'
import HeroEn from '~/components/terms-1/HeroEn.vue'
import TermsContentEn from '~/components/terms-1/TermsContentEn.vue'
import FooterEn from '~/components/terms-1/FooterEn.vue'

useHead({
  title: 'Terms & Conditions | Al Riyadh Law Firm',
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
