<template>
  <section class="mission-section">
    <div class="container px-lg-5">
      <div class="mission-grid">
        <!-- Row 1: Mission (Full Width) -->
        <div class="row mb-4">
          <div class="col-12">
            <div class="mission-card full-width">
              <div class="icon-box">
                <i data-lucide="target" class="gold-icon"></i>
              </div>
              <div class="card-content">
                <h3 class="card-title">Our Mission</h3>
                <p class="card-text">
                  Providing high-quality legal services based on integrity and professionalism, with full commitment to our clients' interests, and working to achieve the best possible results through thoughtful and practical legal solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Row 2: Values & Vision (Half Width) -->
        <div class="row">
          <div class="col-md-6 mb-4 mb-md-0">
            <div class="mission-card">
              <div class="icon-box">
                <i data-lucide="gem" class="gold-icon"></i>
              </div>
              <div class="card-content">
                <h3 class="card-title">Our Values</h3>
                <p class="card-text">
                  We believe that integrity and professionalism are the basis of successful legal work, so we are committed to the highest ethical and professional standards in all our dealings.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mission-card">
              <div class="icon-box">
                <i data-lucide="telescope" class="gold-icon"></i>
              </div>
              <div class="card-content">
                <h3 class="card-title">Our Vision</h3>
                <p class="card-text">
                  To be a reliable and leading legal partner, characterized by efficiency and professionalism, and contributing to enhancing justice and building trust within the legal community in the Kingdom of Saudi Arabia.
                </p>
              </div>
            </div>
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
.mission-section {
  padding: 80px 0;
  background-color: #ffffff;
  direction: ltr;
}

.mission-card {
  background-color: #fcf8f3;
  border-radius: 35px;
  padding: 50px 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.3s ease;
  text-align: left;
}

.mission-card:hover {
  transform: translateY(-5px);
}

.icon-box {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 25px;
}

.gold-icon {
  width: 45px;
  height: 45px;
  color: #c3a46e;
  stroke-width: 1.5;
}

.card-title {
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 1.8rem;
  color: #0c142b;
  margin-bottom: 20px;
}

.card-text {
  font-family: 'Inter', sans-serif;
  font-size: 1.15rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 0;
}

@media (max-width: 991px) {
  .mission-card {
    padding: 40px 30px;
  }
  .card-title {
    font-size: 1.5rem;
  }
  .card-text {
    font-size: 1.05rem;
  }
}
</style>
