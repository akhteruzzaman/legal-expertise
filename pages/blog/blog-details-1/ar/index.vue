<template>
  <div class="light-version">
    <LightHeader />
    <BreadcrumbAr />
    <BlogHeroAr />
    <BlogTermsAr />
    <BlogRelatedAr />
    <BlogCTAAr />
    <FooterAr />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import LightHeader from '@/components/light/Header.vue'
import BreadcrumbAr from '@/components/blog-details-1/BreadcrumbAr.vue'
import BlogHeroAr from '@/components/blog-details-1/BlogHeroAr.vue'
import BlogTermsAr from '@/components/blog-details-1/BlogTermsAr.vue'
import BlogRelatedAr from '@/components/blog-details-1/BlogRelatedAr.vue'
import BlogCTAAr from '@/components/blog-details-1/BlogCTAAr.vue'
import FooterAr from '@/components/blog-details-1/FooterAr.vue'

useHead({
  title: 'تفاصيل المقال | مكتب الرياض للمحاماة',
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
