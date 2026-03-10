<template>
  <div class="light-version">
    <LightEnHeader />
    <BreadcrumbEn />
    <BlogHeroEn />
    <BlogRelatedEn />
    <BlogCTAEn />
    <FooterEn />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import LightEnHeader from '@/components/light-en/Header.vue'
import BreadcrumbEn from '@/components/blog-details-3/BreadcrumbEn.vue'
import BlogHeroEn from '@/components/blog-details-3/BlogHeroEn.vue'
import BlogRelatedEn from '@/components/blog-details-3/BlogRelatedEn.vue'
import BlogCTAEn from '@/components/blog-details-3/BlogCTAEn.vue'
import FooterEn from '@/components/blog-details-3/FooterEn.vue'

useHead({
  title: 'Blog Post Details 3 | Al Riyadh Law Firm',
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
