<template>
  <div class="hero-services">
    <div class="hero-overlay"></div>
    <div class="container hero-container text-center">
      <h1 class="hero-title animate-up">Our Legal Services</h1>
      <p class="hero-subtitle animate-up-delayed">
        We provide a comprehensive range of specialized legal services for individuals and companies, with a commitment to the highest standards of professionalism and transparency.
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  if (window.lucide) {
    window.lucide.createIcons()
  }
})
</script>

<style scoped>
.hero-services {
  position: relative;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('/assets/home-bg-light.jpg') no-repeat center center;
  background-size: cover;
  padding-top: 100px;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(16, 28, 59, 0.8) 0%, rgba(12, 20, 43, 0.95) 100%);
  z-index: 1;
}

.hero-container {
  position: relative;
  z-index: 2;
  color: #ffffff;
}

.hero-title {
  font-family: 'Inter', sans-serif;
  font-size: 3.5rem;
  font-weight: 800;
  color: #c3a46e;
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  line-height: 1.8;
  color: #ffffff;
  max-width: 800px;
  margin: 0 auto;
}

.animate-up {
  animation: fadeInUp 0.8s ease forwards;
}

.animate-up-delayed {
  opacity: 0;
  animation: fadeInUp 0.8s ease 0.2s forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 991px) {
  .hero-title { font-size: 2.5rem; }
  .hero-services { min-height: 40vh; }
}
</style>
