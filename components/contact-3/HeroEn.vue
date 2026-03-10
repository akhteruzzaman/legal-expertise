<template>
  <div class="hero-outer-wrapper">
    <section class="landing-2-hero">
      <div class="watermark-pattern"></div>
      <div class="container hero-container">
        <div class="row align-items-center">
          <!-- Text Column (Right side in LTR) -->
          <div class="col-lg-6 order-lg-2 ps-lg-5 mt-lg-5">
            <h1 class="hero-title animate-up">
              <span class="text-gold">How can we help you?</span>
            </h1>
            <p class="hero-subtitle animate-up-delayed">
              Our specialized legal team is ready to answer your inquiries and provide the necessary support in various legal cases, whether you need legal advice, case follow-up, or clarification regarding the services we provide.
            </p>
          </div>

          <!-- Form Column (Left side in LTR) -->
          <div class="col-lg-6 order-lg-1 mt-lg-5">
            <div class="contact-form-card animate-up">
              <div class="card-header-content text-center mb-4">
                <h2 class="form-title">Contact Us Now</h2>
                <p class="form-subtitle">Fill in the data to contact you as soon as possible</p>
              </div>
              
              <form class="contact-form">
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label class="form-label">Name</label>
                    <input type="text" class="form-control" placeholder="Write your name">
                  </div>
                  <div class="col-md-6 mb-3">
                    <label class="form-label">Email Address</label>
                    <input type="email" class="form-control" placeholder="Write your email">
                  </div>
                  <div class="col-md-6 mb-3">
                    <label class="form-label">Phone</label>
                    <input type="text" class="form-control" placeholder="+966">
                  </div>
                  <div class="col-md-6 mb-3">
                    <label class="form-label">Subject</label>
                    <input type="text" class="form-control" placeholder="Write the subject title">
                  </div>
                  <div class="col-12 mb-4">
                    <label class="form-label">Message</label>
                    <textarea class="form-control" rows="4" placeholder="Message"></textarea>
                  </div>
                  <div class="col-12 text-center">
                    <button type="submit" class="btn-send-contact">Send</button>
                  </div>
                </div>
              </form>
            </div>
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
  padding: 0 20px 20px 20px;
  background-color: #ffffff;
}

.landing-2-hero {
  position: relative;
  min-height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f0e6;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  overflow: hidden;
  padding: 140px 0 100px 0;
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
  margin-bottom: 1.5rem;
  text-align: center !important;
}

.text-gold {
  color: #1a222e !important;
}

.hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.8;
  color: #1a222e !important;
  margin-bottom: 2rem;
  font-weight: 500;
  text-align: center !important;
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
  text-align: left;
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
  text-align: left;
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
    padding: 60px 0;
    text-align: center;
  }
  .hero-title, .hero-subtitle {
    text-align: center !important;
  }
  .hero-title {
    font-size: 2.5rem;
  }
  .contact-form-card {
    margin-top: 40px;
    padding: 30px 20px;
  }
}
</style>
