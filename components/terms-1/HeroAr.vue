<template>
  <div class="hero-outer-wrapper">
    <section class="landing-2-hero">
      <div class="watermark-pattern"></div>
      <div class="container hero-container">
        <div class="row">
          <div class="col-lg-5 text-start ps-lg-5 mt-lg-3">
            <h1 class="hero-title animate-up">الشروط والأحكام</h1>
            <p class="hero-subtitle animate-up-delayed">
              هل لديك أسئلة حول شروطنا؟ <span class="text-gold-link">تواصل معنا</span>
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
  padding: 20px 20px 20px 20px;
  background-color: #ffffff;
}

.landing-2-hero {
  position: relative;
  min-height: 350px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #f5f0e6;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  overflow: hidden;
  padding: 120px 0 60px 0;
}

.watermark-pattern {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 90%;
  background-image: url("/assets/bicon.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 0.1;
  filter: brightness(0.8);
  pointer-events: none;
  z-index: 1;
}

.hero-container {
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: 3.2rem;
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: 0.5rem;
  color: #1a222e;
}

.text-gold {
  color: #1a222e !important;
}

.hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.8;
  color: #1a222e !important;
  margin-bottom: 1rem;
  font-weight: 500;
}

.text-gold-link {
  color: #cda656 !important;
  cursor: pointer;
}

/* Contact Form Card */
.contact-form-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  max-width: 550px;
  margin: 0 auto;
}

.form-title {
  color: #0c142b;
  font-weight: 800;
  font-size: 1.6rem;
  margin-bottom: 8px;
}

.form-subtitle {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 0;
}

.form-label {
  display: block;
  text-align: right;
  color: #0c142b;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 8px;
}

.form-control {
  background: #f8f9fa;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 12px 15px;
  font-size: 0.9rem;
  text-align: right;
}

.form-control:focus {
  background: #fff;
  border-color: #c3a46e;
  box-shadow: none;
}

.btn-send-contact {
  background-color: #c3a46e;
  color: #ffffff;
  border: none;
  border-radius: 30px;
  padding: 12px 60px;
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.btn-send-contact:hover {
  background-color: #b0935d;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(195, 164, 110, 0.3);
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
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 991px) {
  .landing-2-hero {
    min-height: 300px;
    padding: 60px 0;
  }
}
</style>
