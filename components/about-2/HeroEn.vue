<template>
  <section class="about-2-hero">
    <div class="container">
      <div class="row align-items-center">
        <!-- Text Column -->
        <div class="col-lg-6 mb-4 mb-lg-0">
          <div class="content-wrapper pe-lg-5">
            <h2 class="section-title">About Us</h2>
            <p class="section-text">
              We are a law and legal consultancy firm based in the Kingdom of Saudi Arabia, providing integrated legal services to individuals and companies according to the highest professional standards, and in compliance with the laws and regulations in force in the Kingdom. We work on building relationships based on trust and transparency, and we are keen to protect our clients' rights and assist them in making informed legal decisions that achieve stability and legal security for them.
            </p>
          </div>
        </div>
        <!-- Image Column -->
        <div class="col-lg-6">
          <div class="image-container">
            <img src="/assets/b5.png" alt="About Us" class="img-fluid hero-image">
            <div class="blue-tint-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
onMounted(() => {
  if (window.lucide) {
    window.lucide.createIcons()
  }
})
</script>

<style scoped>
.about-2-hero {
  padding: 50px 0;
  background-color: #ffffff;
  direction: ltr;
}

.image-container {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
}

.blue-tint-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(12, 20, 43, 0.4); /* Navy blue tint */
  mix-blend-mode: multiply;
}

.section-title {
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 2.5rem;
  color: #0c142b;
  margin-bottom: 25px;
  position: relative;
}

.section-text {
  font-family: 'Inter', sans-serif;
  font-size: 1.15rem;
  line-height: 1.8;
  color: #555;
  margin: 0;
}

@media (max-width: 991px) {
  .section-title {
    font-size: 2rem;
  }
  .pe-lg-5 {
    padding-right: 0 !important;
  }
  .content-wrapper {
    text-align: center;
    margin-top: 30px;
  }
}
</style>
