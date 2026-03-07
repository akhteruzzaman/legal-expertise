<template>
  <div class="hero-outer-wrapper">
    <section class="landing-3-hero">
      <!-- Scale Watermark Pattern -->
      <div class="watermark-pattern"></div>
      
      <div class="container hero-container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-10">
            <h1 class="hero-title animate-up">Trusted Legal Expertise<br>to Protect Your Rights</h1>
            <p class="hero-subtitle animate-up-delayed">
              We provide professional legal services for individuals and companies,<br>
              based on expertise, integrity, and strict adherence to the highest<br>
              professional standards.
            </p>
            <div class="hero-actions animate-up-more-delayed">
              <a href="#" class="btn-hero-centered">Request Consultation</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-outer-wrapper {
  padding: 20px;
  background-color: #ffffff;
}

.landing-3-hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a2b4b;
  border-radius: 25px;
  overflow: hidden;
  padding: 80px 0;
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
  z-index: 5;
  color: #ffffff;
}

.hero-title {
  margin-top: 50px;
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: 2rem;
  letter-spacing: -0.5px;
  color: #ffffff !important;
  text-align: center;
}

.hero-subtitle {
  font-size: 1.3rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9) !important;
  margin-bottom: 3rem;
  font-weight: 500;
  text-align: center;
}

.btn-hero-centered {
  background-color: #ffffff;
  color: #1a2b4b !important;
  border-radius: 50px;
  padding: 16px 45px;
  font-weight: 700;
  text-decoration: none;
  font-size: 1.1rem;
  display: inline-block;
  transition: all 0.3s ease;
}

.btn-hero-centered:hover {
  transform: translateY(-5px);
  background-color: #f8f9fa;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
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
    transform: translateY(30px);
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
  .landing-3-hero {
    border-radius: 20px;
    min-height: 70vh;
  }
}
</style>
