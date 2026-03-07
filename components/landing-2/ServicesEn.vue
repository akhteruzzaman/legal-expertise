<template>
  <section class="services-section">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="section-title mb-2 text-center">Our Legal Services</h2>
        <p class="section-subtitle text-muted text-center">We provide legal services based on expertise and commitment, with clear and reliable solutions tailored to our clients' needs.</p>
      </div>

      <!-- Service 1 -->
      <div class="row align-items-center staggered-row flex-lg-row-reverse">
        <div class="col-lg-6">
          <div class="service-img-wrapper rounded-4 shadow">
            <img src="/assets/b1.png" alt="Legal Consultations" class="img-fluid service-img">
          </div>
        </div>
        <div class="col-lg-6">
          <div class="service-content p-lg-5">
            <h3 class="service-item-title mb-3">Legal Consultations</h3>
            <p class="service-description text-muted mb-4">
              Providing accurate legal advice based on approved regulations, helping individuals and businesses make sound and well-studied legal decisions.
            </p>
            <a href="#" class="btn-read-more">Read More <i data-lucide="chevron-right" class="ms-1"></i></a>
          </div>
        </div>
      </div>

      <!-- Service 2 -->
      <div class="row align-items-center staggered-row">
        <div class="col-lg-6">
          <div class="service-img-wrapper rounded-4 shadow">
            <img src="/assets/b2.png" alt="Litigation and Court Representation" class="img-fluid service-img">
          </div>
        </div>
        <div class="col-lg-6">
          <div class="service-content p-lg-5">
            <h3 class="service-item-title mb-3">Litigation and Court Representation</h3>
            <p class="service-description text-muted mb-4">
              Professional legal representation before various judicial authorities, with comprehensive follow-up of cases at all stages until the best possible outcomes are achieved.
            </p>
            <a href="#" class="btn-read-more">Read More <i data-lucide="chevron-right" class="ms-1"></i></a>
          </div>
        </div>
      </div>

      <!-- Service 3 -->
      <div class="row align-items-center staggered-row flex-lg-row-reverse">
        <div class="col-lg-6">
          <div class="service-img-wrapper rounded-4 shadow">
            <img src="/assets/b3.png" alt="Corporate Cases and Commercial Law" class="img-fluid service-img">
          </div>
        </div>
        <div class="col-lg-6">
          <div class="service-content p-lg-5">
            <h3 class="service-item-title mb-3">Corporate Cases and Commercial Law</h3>
            <p class="service-description text-muted mb-4">
              Providing comprehensive legal support for companies, including establishment, dispute management, and organizing commercial relations to ensure compliance and protect interests.
            </p>
            <a href="#" class="btn-read-more">Read More <i data-lucide="chevron-right" class="ms-1"></i></a>
          </div>
        </div>
      </div>

      <!-- Service 4 -->
      <div class="row align-items-center staggered-row">
        <div class="col-lg-6">
          <div class="service-img-wrapper rounded-4 shadow">
            <img src="/assets/b4.png" alt="Drafting and Reviewing Contracts" class="img-fluid service-img">
          </div>
        </div>
        <div class="col-lg-6">
          <div class="service-content p-lg-5">
            <h3 class="service-item-title mb-3">Drafting and Reviewing Contracts</h3>
            <p class="service-description text-muted mb-4">
              Preparing, drafting, and reviewing all contracts and agreements professionally, focusing on clarity of clauses, protecting rights, and minimizing legal risks.
            </p>
            <a href="#" class="btn-read-more">Read More <i data-lucide="chevron-right" class="ms-1"></i></a>
          </div>
        </div>
      </div>

      <!-- Service 5 -->
      <div class="row align-items-center staggered-row flex-lg-row-reverse">
        <div class="col-lg-6">
          <div class="service-img-wrapper rounded-4 shadow">
            <img src="/assets/b5.png" alt="Civil and Criminal Cases" class="img-fluid service-img">
          </div>
        </div>
        <div class="col-lg-6">
          <div class="service-content p-lg-5">
            <h3 class="service-item-title mb-3">Civil and Criminal Cases</h3>
            <p class="service-description text-muted mb-4">
              Handling civil and criminal cases highly efficiently, maintaining complete confidentiality, and defending clients' rights according to rules and regulations.
            </p>
            <a href="#" class="btn-read-more">Read More <i data-lucide="chevron-right" class="ms-1"></i></a>
          </div>
        </div>
      </div>

      <!-- Service 6 -->
      <div class="row align-items-center staggered-row">
        <div class="col-lg-6">
          <div class="service-img-wrapper rounded-4 shadow">
            <img src="/assets/b6.png" alt="Arbitration and Dispute Settlement" class="img-fluid service-img">
          </div>
        </div>
        <div class="col-lg-6">
          <div class="service-content p-lg-5">
            <h3 class="service-item-title mb-3">Arbitration and Dispute Settlement</h3>
            <p class="service-description text-muted mb-4">
              Resolving disputes through alternative legal means such as arbitration and mediation, helping to save time and costs while achieving fair solutions.
            </p>
            <a href="#" class="btn-read-more">Read More <i data-lucide="chevron-right" class="ms-1"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.service-img-wrapper {
  position: relative;
  overflow: hidden;
  background-color: #7a9cc6; /* Softened light blue */
}

.service-img {
  width: 100%;
  height: auto;
  display: block;
  filter: grayscale(100%) contrast(1.1) brightness(1.25);
  mix-blend-mode: multiply;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-img-wrapper:hover .service-img {
  filter: grayscale(0%) contrast(1) brightness(1);
  mix-blend-mode: normal;
  transform: scale(1.05);
}
</style>
