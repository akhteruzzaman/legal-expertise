<template>
  <div class="hero-outer-wrapper">
    <section class="landing-2-hero">
      <div class="hero-overlay"></div>
      <div class="container hero-container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-10">
            <h1 class="hero-title animate-up">About Us</h1>
            <p class="hero-subtitle animate-up-delayed">
              We are a law and legal consultancy firm based in the Kingdom of Saudi Arabia, providing integrated legal services to individuals and companies according to the highest professional standards, and in compliance with the laws and regulations in force in the Kingdom. We work on building relationships based on trust and transparency, and we are keen to protect our clients' rights and assist them in making informed legal decisions that achieve stability and legal security for them.
            </p>
          </div>
        </div>
      </div>
    </section>
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
.hero-outer-wrapper {
  padding: 20px;
  background-color: #ffffff;
  direction: ltr;
}

.landing-2-hero {
  position: relative;
  min-height: 92vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('/assets/home-bg-light.jpg') no-repeat center center;
  background-size: cover;
  border-radius: 25px;
  overflow: hidden;
  padding-top: 80px;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(85, 68, 45, 0.8) 0%, rgba(16, 28, 59, 1) 100%);
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
  line-height: 1.3;
  margin-top: 60px;
  margin-bottom: 1.5rem;
  letter-spacing: -0.5px;
  color: #ffffff !important;
  text-align: center !important;
}

.hero-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  line-height: 1.8;
  color: #ffffff !important;
  margin-bottom: 2.5rem;
  font-weight: 500;
  text-align: center !important;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.btn-hero-centered {
  background-color: #f5f0e6;
  color: #1a222e !important;
  border-radius: 50px;
  padding: 14px 40px;
  font-weight: 700;
  text-decoration: none;
  font-size: 1.05rem;
  display: inline-block;
  transition: all 0.3s ease;
}

.btn-hero-centered:hover {
  transform: scale(1.05);
  background-color: #ffffff;
}

.animate-up {
  animation: fadeInUp 0.8s ease forwards;
}

.animate-up-delayed {
  opacity: 0;
  animation: fadeInUp 0.8s ease 0.2s forwards;
}

.animate-up-more-delayed {
  opacity: 0;
  animation: fadeInUp 0.8s ease 0.4s forwards;
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
  .hero-title {
    font-size: 2.5rem;
  }
  .hero-outer-wrapper {
    padding: 10px;
  }
  .landing-2-hero {
    border-radius: 20px;
  }
}
</style>
