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
    <DarkAccreditations />
    <DarkBlog />
    <DarkTestimonials />
    <DarkCTA />
    <DarkFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import DarkHeader from '@/components/dark/Header.vue'
import DarkHero from '@/components/dark/Hero.vue'
import DarkWhyUs from '@/components/dark/WhyUs.vue'
import DarkServices from '@/components/dark/Services.vue'
import DarkTeam from '@/components/dark/Team.vue'
import DarkAccreditations from '@/components/dark/Accreditations.vue'
import DarkBlog from '@/components/dark/Blog.vue'
import DarkTestimonials from '@/components/dark/Testimonials.vue'
import DarkCTA from '@/components/dark/CTA.vue'
import DarkFooter from '@/components/dark/Footer.vue'

useHead({
  title: 'مكتب الرياض للمحاماة | نسخة داكنة',
  link: [
    { rel: 'stylesheet', href: '/assets/css/dark.css' }
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
body {
  margin: 0;
  padding: 20px; /* Match dark.css requirement */
  background-color: #0a1128;
  overflow-x: hidden;
}
</style>
