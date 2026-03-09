<template>
  <section class="why-us-about">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header text-center mb-5">
        <h2 class="section-title">Why Us</h2>
        <p class="section-subtitle">
          Established legal expertise in Saudi regulations, a professional and committed team, and clear consultations focused on protecting the client's interest and building relationships based on trust.
        </p>
      </div>

      <!-- Alternating Rows -->
      <div class="why-us-rows">
        <!-- Row 1: Image Left, Text Right -->
        <div class="row align-items-center mb-5">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <div class="image-wrapper">
              <img src="/assets/about-hero-1.jpg" alt="Expertise" class="img-fluid rounded-custom shadow" />
              <div class="sepia-overlay"></div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="content-wrapper ps-lg-5">
              <h3 class="item-title">Deep Knowledge of Saudi Laws and Regulations</h3>
              <p class="item-text">
                We possess deep knowledge and practical experience in the laws and regulations in force in the Kingdom of Saudi Arabia, enabling us to provide accurate advice and effective legal solutions.
              </p>
            </div>
          </div>
        </div>

        <!-- Row 2: Text Left, Image Right -->
        <div class="row align-items-center flex-row-reverse mb-5">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <div class="image-wrapper">
              <img src="/assets/about-hero-2.jpg" alt="Team" class="img-fluid rounded-custom shadow" />
              <div class="sepia-overlay"></div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="content-wrapper pe-lg-5">
              <h3 class="item-title">Qualified and Committed Legal Team</h3>
              <p class="item-text">
                Our team includes a group of highly qualified lawyers and legal consultants who work with team spirit and full commitment to achieve the best results for our clients.
              </p>
            </div>
          </div>
        </div>

        <!-- Row 3: Image Left, Text Right -->
        <div class="row align-items-center mb-5">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <div class="image-wrapper">
              <img src="/assets/b5.png" alt="Consultation" class="img-fluid rounded-custom shadow" />
              <div class="sepia-overlay"></div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="content-wrapper ps-lg-5">
              <h3 class="item-title">Clear and Practical Legal Consultations</h3>
              <p class="item-text">
                We are keen to provide simplified and clear legal consultations that help our clients understand their legal position and make informed decisions with confidence.
              </p>
            </div>
          </div>
        </div>

        <!-- Row 4: Text Left, Image Right -->
        <div class="row align-items-center flex-row-reverse">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <div class="image-wrapper">
              <img src="/assets/b2.png" alt="Client Focus" class="img-fluid rounded-custom shadow" />
              <div class="sepia-overlay"></div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="content-wrapper pe-lg-5">
              <h3 class="item-title">Full Focus on Client Interest and Long-term Partnerships</h3>
              <p class="item-text">
                Drafting and reviewing all types of contracts, with a focus on clarity of clauses, protection of rights, and reduction of legal risks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-us-about {
  padding: 100px 0;
  background-color: #fff;
  direction: ltr;
}

.section-title {
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 2.5rem;
  color: #0c142b;
  margin-bottom: 15px;
  text-align: center;
}

.section-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto 60px;
  line-height: 1.6;
  text-align: center;
}

.rounded-custom {
  border-radius: 30px;
}

.item-title {
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 1.8rem;
  color: #0c142b;
  margin-bottom: 20px;
}

.item-text {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin: 0;
}

.image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 30px;
}

.image-wrapper img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.3s ease;
  display: block;
}

/* Sepia Overlay for About 4 */
.sepia-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(74, 54, 34, 0.45); /* Brownish tint inspired by sample */
  mix-blend-mode: multiply; /* Blends with original for sepia look */
  z-index: 1;
  pointer-events: none;
}

.image-wrapper:hover img {
  transform: scale(1.02);
}

@media (max-width: 991px) {
  .ps-lg-5, .pe-lg-5 {
    padding: 0 !important;
  }
  .section-title { font-size: 2rem; }
  .item-title { font-size: 1.5rem; }
  .image-wrapper img { height: 300px; }
}
</style>
