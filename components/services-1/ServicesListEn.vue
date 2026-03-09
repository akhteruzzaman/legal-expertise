<template>
  <section class="services-list py-5">
    <div class="container">
      <div class="row g-4">
        <!-- Service Card 1 -->
        <div class="col-md-6 col-lg-4">
          <div class="service-card shadow-sm">
            <div class="icon-wrapper">
              <i data-lucide="gavel" class="icon-gold"></i>
            </div>
            <h3 class="card-title">Legal Consultations</h3>
            <p class="card-text">
              Providing accurate legal consultations to help you make informed decisions.
            </p>
            <a href="#" class="details-link">
              <span>More Details</span>
              <i data-lucide="chevron-right" class="arrow-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
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
.services-list {
  background-color: #ffffff;
  min-height: 400px;
}

.service-card {
  background-color: #fcf8f3;
  border-radius: 35px;
  padding: 40px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  margin-top: 200px;
}

.service-card:hover {
  transform: translateY(-10px);
  border-color: #c3a46e;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05) !important;
}

.icon-wrapper {
  margin-bottom: 25px;
}

.icon-gold {
  color: #c3a46e;
  width: 48px;
  height: 48px;
}

.card-title {
  font-family: 'Inter', sans-serif;
  color: #101c3b;
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 15px;
}

.card-text {
  font-family: 'Inter', sans-serif;
  color: #616161;
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 25px;
}

.details-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #c3a46e;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  transition: transform 0.3s ease;
}

.details-link:hover {
  transform: translateX(5px);
}

.arrow-icon {
  width: 16px;
  height: 16px;
}
</style>
