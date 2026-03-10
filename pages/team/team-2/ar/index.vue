<template>
  <div class="light-version">
    <HeaderAr />
    <HeroAr />
    <TeamGridAr />
    <CTAAr />
    <FooterAr />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import HeaderAr from '@/components/team-2/HeaderAr.vue'
import HeroAr from '@/components/team-2/HeroAr.vue'
import TeamGridAr from '@/components/team-2/TeamGridAr.vue'
import CTAAr from '@/components/team-2/CTAAr.vue'
import FooterAr from '@/components/team-2/FooterAr.vue'

useHead({
  title: 'فريق العمل 2 | مكتب الرياض للمحاماة',
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
/* Reset body styles for perfect match */
body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}
</style>
