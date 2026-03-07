<template>
  <div class="accreditations-outer-wrapper">
    <section class="accreditations-section-inner pt-5 pb-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="section-title mb-2 text-center">Company Accreditations</h2>
          <p class="section-subtitle text-muted text-center">We hold professional accreditations and licenses reflecting our commitment to regulatory standards and best practices in providing legal and consulting services, locally and internationally.</p>
        </div>
        <div class="row g-4">
          <!-- Accreditation 1 -->
          <div class="col-lg-4 col-md-6">
            <div class="accreditation-card text-center">
              <div class="accreditation-logo-wrapper mb-4">
                <img src="/assets/s3.png" alt="Saudi Authority for Intellectual Property" class="img-fluid" style="height: 60px; object-fit: contain;">
              </div>
              <h3 class="accreditation-title h5 fw-bold mb-3">Saudi Authority for Intellectual Property</h3>
              <p class="accreditation-description text-muted mb-3">We help protect intellectual property rights by preparing applications and related regulatory requirements and providing specialized consultations.</p>
              <a href="#" class="accreditation-link text-decoration-none fw-bold" style="color: #c3a46e;">Read More <i data-lucide="chevron-right"></i></a>
            </div>
          </div>
          <!-- Accreditation 2 -->
          <div class="col-lg-4 col-md-6">
            <div class="accreditation-card text-center">
              <div class="accreditation-logo-wrapper mb-4">
                <img src="/assets/s2.png" alt="Ministry of Human Resources and Social Development" class="img-fluid" style="height: 60px; object-fit: contain;">
              </div>
              <h3 class="accreditation-title h5 fw-bold mb-3">Ministry of Human Resources and Social Development</h3>
              <p class="accreditation-description text-muted mb-3">We provide support in preparing and reviewing internal regulations and regulatory compliance, ensuring the facility aligns with regulatory requirements.</p>
              <a href="#" class="accreditation-link text-decoration-none fw-bold" style="color: #c3a46e;">Read More <i data-lucide="chevron-right"></i></a>
            </div>
          </div>
          <!-- Accreditation 3 -->
          <div class="col-lg-4 col-md-6">
            <div class="accreditation-card text-center">
              <div class="accreditation-logo-wrapper mb-4">
                <img src="/assets/s1.png" alt="Saudi Bar Association" class="img-fluid" style="height: 60px; object-fit: contain;">
              </div>
              <h3 class="accreditation-title h5 fw-bold mb-3">Saudi Bar Association</h3>
              <p class="accreditation-description text-muted mb-3">Our office is registered and committed to approved professional standards, providing legal services in accordance with relevant laws and regulations.</p>
              <a href="#" class="accreditation-link text-decoration-none fw-bold" style="color: #c3a46e;">Read More <i data-lucide="chevron-right"></i></a>
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
.accreditations-outer-wrapper {
  padding: 20px;
  background-color: #ffffff;
}

.accreditations-section-inner {
  background-color: #fdfbf7;
  border-radius: 25px;
  overflow: hidden;
}

.accreditation-card {
  background: white;
  border-radius: 20px;
  padding: 30px;
  height: 100%;
  transition: all 0.3s ease;
  border: 1px solid rgba(0,0,0,0.05);
}

.accreditation-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}
</style>
