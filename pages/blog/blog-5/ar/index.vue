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
import HeaderAr from '@/components/blog-5/HeaderAr.vue'
import HeroAr from '@/components/blog-5/HeroAr.vue'
import BlogHeroAr from '@/components/blog-5/BlogHeroAr.vue'
import BlogCTAAr from '@/components/blog-5/BlogCTAAr.vue'
import FooterAr from '@/components/blog-5/FooterAr.vue'

useHead({
  title: 'المدونة 5 | مكتب الرياض للمحاماة',
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
