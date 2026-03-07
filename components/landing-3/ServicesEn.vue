<template>
  <section class="services-section py-5">
    <div class="container py-lg-5">
      <!-- Section Header -->
      <div class="row justify-content-center mb-5">
        <div class="col-lg-8 mx-auto text-center">
          <h2 class="section-title mb-3 text-center">Our Legal Services</h2>
          <p class="section-subtitle text-muted text-center">
            We provide legal services based on expertise and commitment, with clear and reliable solutions tailored to our clients' needs.
          </p>
        </div>
      </div>

      <!-- Services Grid -->
      <div class="row g-4">
        <!-- Card 1 -->
        <div class="col-lg-4 col-md-6">
          <div class="service-card-v3 h-100">
            <div class="card-icon-box">
              <i data-lucide="scale" class="card-icon"></i>
            </div>
            <h3 class="card-title">Legal Consultations</h3>
            <p class="card-text text-muted">
              Providing accurate legal advice to help you make informed decisions.
            </p>
            <a href="#" class="card-link">Read More <i data-lucide="chevron-right" class="link-icon"></i></a>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="col-lg-4 col-md-6">
          <div class="service-card-v3 h-100">
            <div class="card-icon-box">
              <i data-lucide="shield-check" class="card-icon"></i>
            </div>
            <h3 class="card-title">Litigation & Court Representation</h3>
            <p class="card-text text-muted">
              Professional legal representation before various judicial authorities.
            </p>
            <a href="#" class="card-link">Read More <i data-lucide="chevron-right" class="link-icon"></i></a>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="col-lg-4 col-md-6">
          <div class="service-card-v3 h-100">
            <div class="card-icon-box">
              <i data-lucide="briefcase" class="card-icon"></i>
            </div>
            <h3 class="card-title">Corporate & Commercial Law</h3>
            <p class="card-text text-muted">
              Comprehensive legal support for companies in various transactions and disputes.
            </p>
            <a href="#" class="card-link">Read More <i data-lucide="chevron-right" class="link-icon"></i></a>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="col-lg-4 col-md-6">
          <div class="service-card-v3 h-100">
            <div class="card-icon-box">
              <i data-lucide="scroll-text" class="card-icon"></i>
            </div>
            <h3 class="card-title">Drafting & Reviewing Contracts</h3>
            <p class="card-text text-muted">
              Preparing and reviewing contracts to protect rights and minimize risks.
            </p>
            <a href="#" class="card-link">Read More <i data-lucide="chevron-right" class="link-icon"></i></a>
          </div>
        </div>

        <!-- Card 5 -->
        <div class="col-lg-4 col-md-6">
          <div class="service-card-v3 h-100">
            <div class="card-icon-box">
              <i data-lucide="gavel" class="card-icon"></i>
            </div>
            <h3 class="card-title">Civil & Criminal Cases</h3>
            <p class="card-text text-muted">
              Handling civil and criminal cases with professionalism and complete confidentiality.
            </p>
            <a href="#" class="card-link">Read More <i data-lucide="chevron-right" class="link-icon"></i></a>
          </div>
        </div>

        <!-- Card 6 -->
        <div class="col-lg-4 col-md-6">
          <div class="service-card-v3 h-100">
            <div class="card-icon-box">
              <i data-lucide="users-2" class="card-icon"></i>
            </div>
            <h3 class="card-title">Arbitration & Dispute Resolution</h3>
            <p class="card-text text-muted">
              Resolving disputes through alternative legal means that save time and costs.
            </p>
            <a href="#" class="card-link">Read More <i data-lucide="chevron-right" class="link-icon"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
</script>

<style scoped>
.services-section {
  background-color: #ffffff;
}

.section-title {
  color: #1a2b4b;
  font-weight: 800;
  font-size: 2.25rem;
  text-align: center;
}

.section-subtitle {
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: center;
}

.service-card-v3 {
  background-color: #fcfaf5; /* Cream background */
  border-radius: 30px;
  padding: 3rem 2rem;
  text-align: center;
  border: none;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.service-card-v3:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.05);
}

.card-icon-box {
  width: 60px;
  height: 60px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  color: #c5a059; /* Bronze/Gold color */
  box-shadow: 0 5px 15px rgba(0,0,0,0.03);
}

.card-icon {
  width: 30px;
  height: 30px;
}

.card-title {
  color: #1a2b4b;
  font-weight: 700;
  font-size: 1.4rem;
  margin-bottom: 1.25rem;
}

.card-text {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  flex-grow: 1;
}

.card-link {
  color: #c5a059;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  transition: color 0.3s ease;
}

.card-link:hover {
  color: #a88543;
}

.link-icon {
  width: 18px;
  height: 18px;
  margin-left: 5px;
}
</style>
