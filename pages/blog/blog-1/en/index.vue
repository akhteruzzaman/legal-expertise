<template>
  <div class="light-version">
    <LightEnHeader />
    <BlogHeroEn />
    <BlogCTAEn />
    <FooterEn />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import LightEnHeader from '@/components/light-en/Header.vue'
import BlogHeroEn from '@/components/blog-1/BlogHeroEn.vue'
import BlogCTAEn from '@/components/blog-1/BlogCTAEn.vue'
import FooterEn from '@/components/blog-1/FooterEn.vue'

useHead({
  title: 'Blog 1 | Al Riyadh Law Firm',
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
