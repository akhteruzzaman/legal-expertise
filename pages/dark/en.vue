<template>
  <div class="dark-version">
    <DarkHero>
      <template #nav>
        <DarkHeader />
      </template>
    </DarkHero>
    <DarkWhyUs />
    <DarkServices />
    <DarkTeam />
    <DarkBlog />
    <DarkAccreditations />
    <DarkTestimonials />
    <DarkCTA />
    <DarkFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import DarkHeader from '@/components/dark-en/Header.vue'
import DarkHero from '@/components/dark-en/Hero.vue'
import DarkWhyUs from '@/components/dark-en/WhyUs.vue'
import DarkServices from '@/components/dark-en/Services.vue'
import DarkTeam from '@/components/dark-en/Team.vue'
import DarkBlog from '@/components/dark-en/Blog.vue'
import DarkAccreditations from '@/components/dark-en/Accreditations.vue'
import DarkTestimonials from '@/components/dark-en/Testimonials.vue'
import DarkCTA from '@/components/dark-en/CTA.vue'
import DarkFooter from '@/components/dark-en/Footer.vue'

useHead({
  title: 'Al Riyadh Law Firm | Trusted Legal Expertise',
  htmlAttrs: {
    lang: 'en',
    dir: 'ltr'
  },
  link: [
    { id: 'bootstrap-css', rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' },
    { rel: 'stylesheet', href: '/assets/css/dark-en.css' }
  ],
  script: [
    { src: 'https://unpkg.com/lucide@latest' }
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
