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
              To be a trusted and leading legal partner, distinguished by efficiency and professionalism, contributing to enhancing justice and building trust within the legal community in the Kingdom of Saudi Arabia.
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
  padding: 80px 0;
  background-color: #ffffff;
  direction: ltr;
}

.mvv-card {
  background-color: #ffffff; /* Removed background color */
  padding: 50px 35px;
  border: 1px solid #f2e8d5; /* Added light border as per sample */
  border-radius: 35px;
  text-align: left; /* Standard LTR alignment */
  height: 100%;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
}

.mvv-card:hover {
  transform: translateY(-8px);
  border-color: #c3a46e;
  box-shadow: 0 15px 35px rgba(195, 164, 110, 0.1);
}

.icon-box {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 25px;
  color: #c3a46e;
}

.icon-box i {
  width: 50px;
  height: 50px;
  stroke-width: 1.2px;
}

.card-title {
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 1.7rem;
  color: #0c142b;
  margin-bottom: 20px;
  width: 100%;
}

.card-text {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  margin: 0;
  width: 100%;
}

@media (max-width: 991px) {
  .mvv-card {
    padding: 40px 25px;
  }
  .card-title {
    font-size: 1.4rem;
  }
}
</style>
