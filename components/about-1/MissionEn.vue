<template>
  <section class="mission-vision-values">
    <div class="container">
      <div class="row g-4 justify-content-center">
        <!-- Our Mission -->
        <div class="col-lg-4 col-md-6">
          <div class="mvv-card">
            <div class="icon-box">
              <i data-lucide="target"></i>
            </div>
            <h3 class="card-title">Our Mission</h3>
            <p class="card-text">
              Providing high-quality legal services based on integrity and professionalism, with full commitment to our clients' interests, and working to achieve the best possible results through well-thought-out and practical legal solutions.
            </p>
          </div>
        </div>

        <!-- Our Vision -->
        <div class="col-lg-4 col-md-6">
          <div class="mvv-card">
            <div class="icon-box">
              <i data-lucide="telescope"></i>
            </div>
            <h3 class="card-title">Our Vision</h3>
            <p class="card-text">
              To be a trusted and leading legal partner, characterized by efficiency and professionalism, contributing to the promotion of justice and building trust within the legal community in the Kingdom of Saudi Arabia.
            </p>
          </div>
        </div>

        <!-- Our Values -->
        <div class="col-lg-4 col-md-6">
          <div class="mvv-card">
            <div class="icon-box">
              <i data-lucide="gem"></i>
            </div>
            <h3 class="card-title">Our Values</h3>
            <p class="card-text">
              We believe that integrity and professionalism are the foundation of successful legal work, therefore we are committed to the highest ethical and professional standards in all our dealings.
            </p>
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
.mission-vision-values {
  padding: 50px 0;
  background-color: #ffffff;
  direction: ltr;
}

.mvv-card {
  background-color: #fcf8f3;
  padding: 50px 30px;
  border-radius: 35px;
  text-align: center;
  height: 100%;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mvv-card:hover {
  transform: translateY(-5px);
}

.icon-box {
  width: 60px;
  height: 60px;
  background-color: transparent;
  color: #c3a46e;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
}

.icon-box i {
  width: 45px;
  height: 45px;
  stroke-width: 1.5px;
}

.card-title {
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 1.6rem;
  color: #0c142b;
  margin-bottom: 20px;
}

.card-text {
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  line-height: 1.7;
  color: #444;
  margin: 0;
}

@media (max-width: 991px) {
  .mvv-card {
    padding: 40px 25px;
  }
}
</style>
