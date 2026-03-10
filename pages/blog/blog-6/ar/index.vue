<template>
  <div class="light-version">
    <HeaderAr />
    <HeroAr />
    <BlogHeroAr />
    <BlogCTAAr />
    <FooterAr />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import HeaderAr from '@/components/blog-6/HeaderAr.vue'
import HeroAr from '@/components/blog-6/HeroAr.vue'
import BlogHeroAr from '@/components/blog-6/BlogHeroAr.vue'
import BlogCTAAr from '@/components/blog-6/BlogCTAAr.vue'
import FooterAr from '@/components/blog-6/FooterAr.vue'

useHead({
  title: 'المدونة 6 | مكتب الرياض للمحاماة',
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
