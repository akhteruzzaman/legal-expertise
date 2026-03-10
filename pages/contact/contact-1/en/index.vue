<template>
  <div class="light-version">
    <HeaderEn />
    <HeroEn />
    <ContactInfoEn />
    <FooterEn />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import HeaderEn from '~/components/contact-1/HeaderEn.vue'
import HeroEn from '~/components/contact-1/HeroEn.vue'
    import ContactInfoEn from '~/components/contact-1/ContactInfoEn.vue'
import FooterEn from '~/components/contact-1/FooterEn.vue'

useHead({
  title: 'Contact 1 | Al Riyadh Law Firm',
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
