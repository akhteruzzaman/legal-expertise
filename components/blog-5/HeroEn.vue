<template>
  <div class="hero-outer-wrapper">
    <section class="landing-2-hero">
      <div class="watermark-pattern"></div>
      <div class="container hero-container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-10">
            <h1 class="hero-title animate-up">
              <span class="text-gold">The Legal Blog</span>
            </h1>
            <p class="hero-subtitle animate-up-delayed">
              We share simplified legal articles highlighting systems and legislation, helping individuals and companies understand their rights and make informed legal decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.hero-outer-wrapper {
  padding: 20px;
  background-color: #ffffff;
}

.landing-2-hero {
  position: relative;
  min-height: 92vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a2b4b;
  border-radius: 25px;
  overflow: hidden;
  padding-top: 80px;
}

.watermark-pattern {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  background-image: url("/assets/bicon.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 0.3;
  filter: brightness(2.5) contrast(1.2);
  pointer-events: none;
  z-index: 1;
}

.hero-container {
  position: relative;
  z-index: 2;
  color: #ffffff;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-top: 40px;
  margin-bottom: 2rem;
  letter-spacing: -0.5px;
  text-align: center !important;
}

.text-gold {
  color: #c3a46e !important;
}

.text-white {
  color: #ffffff !important;
}

.hero-subtitle {
  font-size: 1.3rem;
  line-height: 1.8;
  color: #ffffff !important;
  margin-bottom: 2.5rem;
  font-weight: 500;
  text-align: center !important;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
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
  .hero-title {
    font-size: 2.2rem;
  }
  .hero-subtitle {
    font-size: 1.1rem;
  }
  .hero-outer-wrapper {
    padding: 10px;
  }
  .landing-2-hero {
    min-height: 60vh;
    border-radius: 20px;
  }
}
</style>
