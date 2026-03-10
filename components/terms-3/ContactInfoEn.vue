<template>
  <section class="contact-info-section">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="section-title">Contact Us Easily</h2>
        <p class="section-subtitle">
          We are here to answer your questions and help you at any time. Feel free to contact us via phone or email, or visit us at the address shown below. We are always happy to hear from you.
        </p>
      </div>

      <div class="row g-4 justify-content-center">
        <!-- Phone Card -->
        <div class="col-lg-4 col-md-6">
          <div class="info-card">
            <div class="icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <h3 class="card-title">Phone</h3>
            <p class="card-detail">+966000000000</p>
          </div>
        </div>

        <!-- Email Card -->
        <div class="col-lg-4 col-md-6">
          <div class="info-card active">
            <div class="icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path><rect width="20" height="14" x="2" y="5" rx="2"></rect></svg>
            </div>
            <h3 class="card-title">Email Address</h3>
            <p class="card-detail">info@example.sa</p>
          </div>
        </div>

        <!-- Address Card -->
        <div class="col-lg-4 col-md-6">
          <div class="info-card">
            <div class="icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <h3 class="card-title">Address</h3>
            <p class="card-detail">Kingdom of Saudi Arabia, Riyadh</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.contact-info-section {
  padding: 80px 0;
  background-color: #ffffff;
}

.section-title {
  color: #0c142b;
  font-weight: 800;
  font-size: 2.2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.section-subtitle {
  color: #666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
  font-size: 1.1rem;
  text-align: center;
}

.info-card {
  background-color: #fbf8f2;
  border-radius: 20px;
  padding: 50px 30px;
  text-align: center;
  transition: all 0.3s ease;
  height: 100%;
}

.info-card:hover, .info-card.active {
  transform: translateY(-5px);
  background-color: #fbf8f2;
}

.icon-box {
  width: 60px;
  height: 60px;
  background-color: rgba(195, 164, 110, 0.1);
  color: #c3a46e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.icon-box i {
  width: 25px;
  height: 25px;
}

.card-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #0c142b;
  margin-bottom: 10px;
}

.card-detail {
  font-size: 1.15rem;
  font-weight: 800;
  color: #0c142b;
  margin-bottom: 0;
}

@media (max-width: 991px) {
  .section-title {
    font-size: 1.8rem;
  }
  .info-card {
    padding: 30px 20px;
  }
}
</style>
