<template>
  <section class="services-slider-section">
    <div class="container">
      <div class="section-header text-start mb-5">
        <h2 class="section-title">Our Legal Services</h2>
        <p class="section-subtitle">We provide legal services based on expertise and commitment, with clear and reliable solutions tailored to our clients' needs.</p>
      </div>

      <div class="slider-wrapper">
        <Swiper
          :modules="[SwiperAutoplay]"
          :slides-per-view="1"
          :space-between="30"
          :dir="'ltr'"
          :loop="true"
          :autoplay="{
            delay: 4000,
            disableOnInteraction: false,
          }"
          :breakpoints="{
            '640': { slidesPerView: 1.5 },
            '768': { slidesPerView: 2.2 },
            '1024': { slidesPerView: 3.2 },
            '1200': { slidesPerView: 3.5 }
          }"
          class="services-swiper"
        >
          <SwiperSlide v-for="(service, index) in services" :key="index">
            <div class="service-slider-card">
              <div class="service-icon mb-4">
                <i :data-lucide="service.icon"></i>
              </div>
              <h3 class="service-title mb-3">{{ service.title }}</h3>
              <p class="service-desc mb-4">{{ service.description }}</p>
              <a href="#" class="service-btn">
                More Details <i data-lucide="chevron-right" class="ms-1"></i>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay as SwiperAutoplay } from 'swiper/modules'
import 'swiper/css'

const services = [
  {
    icon: 'gavel',
    title: 'Drafting and Reviewing Contracts',
    description: 'Preparing and reviewing contracts to preserve rights and reduce legal risks.'
  },
  {
    icon: 'shield',
    title: 'Civil and Criminal Cases',
    description: 'Handling civil and criminal cases with professionalism and complete confidentiality.'
  },
  {
    icon: 'user-check',
    title: 'Arbitration and Dispute Settlement',
    description: 'Resolving disputes with alternative legal methods that save time and costs.'
  },
  {
    icon: 'scale',
    title: 'Legal Consultations',
    description: 'Providing accurate legal consultations to help make correct decisions.'
  },
  {
    icon: 'briefcase',
    title: 'Corporate Law',
    description: 'Establishing companies and providing continuous legal support for businesses.'
  }
]

onMounted(() => {
  if (window.lucide) {
    window.lucide.createIcons()
  }
})
</script>

<style scoped>
.services-slider-section {
  padding: 100px 0;
  background-color: #fff;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1a2b4b;
  margin-bottom: 20px;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #6c757d;
  max-width: 800px;
}

.slider-wrapper {
  padding: 20px 0 50px;
}

.service-slider-card {
  background-color: #fcf9f2;
  border-radius: 25px;
  padding: 50px 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.service-slider-card:hover {
  transform: translateY(-10px);
  background-color: #fff;
  border-color: #e9e0d1;
  box-shadow: 0 15px 40px rgba(0,0,0,0.05);
}

.service-icon {
  color: #c3a46e;
}

.service-icon i {
  width: 45px;
  height: 45px;
  stroke-width: 1.5;
}

.service-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a2b4b;
}

.service-desc {
  font-size: 1rem;
  color: #6c757d;
  line-height: 1.8;
  flex-grow: 1;
}

.service-btn {
  color: #c3a46e;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  transition: gap 0.3s ease;
}

.service-btn:hover {
  gap: 8px;
}
</style>
