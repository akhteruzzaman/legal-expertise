<template>
  <section class="blog-hero-section">

    <!-- Text Block — aligned with image -->
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-11">
          <div class="hero-text-block">
            <h2 class="hero-title">The Importance of Legal Consultation Before Signing Contracts</h2>
            <p class="hero-desc">
              Learn about the importance of obtaining legal advice before signing any contract, and how it helps protect your rights and avoid legal risks.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Banner Image — full width like blog-details-1 -->
    <div class="container-fluid px-lg-5">
      <div class="hero-image-wrap">
        <img src="/assets/blog-hero-wide.png" alt="The Importance of Legal Consultation Before Signing Contracts" class="hero-image" />
      </div>
    </div>

    <!-- Content Block — after banner -->
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-11">

          <!-- Intro paragraph -->
          <p class="content-intro">
            Welcome to the official website of our law firm. This website aims to provide general information about the firm's legal services and does not constitute a substitute for direct legal consultation.
          </p>

          <!-- Numbered Item 1 -->
          <div class="content-item">
            <h3 class="content-item-title"><span class="item-num">1.</span> Website Use</h3>
            <p class="content-item-text">
              Users must be 18 years of age or older to use this website. Users agree to use the site for lawful purposes only. This website is primarily intended for individuals and entities based in the Kingdom of Saudi Arabia.
            </p>
          </div>

          <!-- Centered Logo -->
          <div class="logo-wrap">
            <img src="/assets/logo-light.png" alt="Al Riyadh Law Firm Logo" class="logo-img" />
          </div>

          <!-- Numbered Item 2 -->
          <div class="content-item">
            <h3 class="content-item-title"><span class="item-num">2.</span> Nature of Content</h3>
            <p class="content-item-text">
              All information and content available on the site are for informational purposes only and do not constitute binding legal advice. Use of the site does not create an attorney-client relationship until a formal written agreement is reached.
            </p>
          </div>

          <!-- Numbered Item 3 -->
          <div class="content-item">
            <h3 class="content-item-title"><span class="item-num">3.</span> Legal Consultations</h3>
            <p class="content-item-text">
              Any request for consultation made via the site or contact forms does not constitute an obligation to provide legal services until the request is reviewed and approved by the firm. The firm reserves the right to accept or reject any request at its professional discretion.
            </p>
          </div>

          <!-- Video Section Box -->
          <div class="video-wrap">
            <div class="video-content">
              <img src="/assets/logo-light.png" alt="Al Riyadh Law Firm Logo" class="logo-img" />
              <div class="play-button">
                <i data-lucide="play"></i>
              </div>
            </div>
          </div>

          <!-- Numbered Item 4 -->
          <div class="content-item">
            <h3 class="content-item-title"><span class="item-num">4.</span> Intellectual Property</h3>
            <p class="content-item-text">
              All texts, logos, designs, and content displayed on the site are owned by the firm or licensed for use, and may not be copied, reused, or published without prior written consent.
            </p>
          </div>

          <!-- Numbered Item 5 -->
          <div class="content-item">
            <h3 class="content-item-title"><span class="item-num">5.</span> Limitation of Liability</h3>
            <p class="content-item-text">
              The firm assumes no responsibility for any direct or indirect damages that may arise from the use of the site or reliance on its content, nor does the site guarantee that it is completely free of technical errors or service interruptions.
            </p>
          </div>

          <!-- Dual Logo Boxes -->
          <div class="row g-4 mb-4">
            <div class="col-md-6">
              <div class="logo-wrap mt-0 mb-0">
                <img src="/assets/logo-light.png" alt="Al Riyadh Law Firm Logo" class="logo-img" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="logo-wrap mt-0 mb-0">
                <img src="/assets/logo-light.png" alt="Al Riyadh Law Firm Logo" class="logo-img" />
              </div>
            </div>
          </div>

          <!-- Numbered Item 6 -->
          <div class="content-item">
            <h3 class="content-item-title"><span class="item-num">6.</span> Amendments to Terms</h3>
            <p class="content-item-text">
              The firm reserves the right to amend or update these terms at any time without prior notice. Continued use of the site constitutes acceptance of the amended terms.
            </p>
          </div>

          <!-- Numbered Item 7 -->
          <div class="content-item">
            <h3 class="content-item-title"><span class="item-num">7.</span> Amendments to Terms</h3>
            <p class="content-item-text">
              "Starter" reserves the right to amend these terms at any time. In the event of material changes, users will be notified via email or through in-platform notifications. Continued use of the platform after the amendments signifies your agreement to the new terms.
            </p>
          </div>

        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
.blog-hero-section {
  background-color: #ffffff;
  padding: 40px 0 60px;
}

.hero-text-block {
  text-align: left;
  margin-bottom: 28px;
}

.hero-title {
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: #1a2b4b;
  margin-bottom: 12px;
  line-height: 1.5;
}

.hero-desc {
  font-family: 'Inter', sans-serif;
  font-size: 0.92rem;
  color: #5a6070;
  line-height: 1.85;
  max-width: 680px;
  margin-left: 0;
  margin-right: auto;
  margin-bottom: 0;
}

.hero-image-wrap {
  width: 100%;
  border-radius: 18px;
  overflow: hidden;
  aspect-ratio: 1400 / 400;
  max-height: 400px;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

/* ── Content block below banner ── */
.content-intro {
  font-family: 'Inter', sans-serif;
  font-size: 0.92rem;
  color: #5a6070;
  line-height: 1.9;
  text-align: left;
  margin: 40px 0 30px;
}

.content-item {
  text-align: left;
  margin-bottom: 24px;
}

.content-item-title {
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  font-weight: 800;
  color: #1a2b4b;
  margin-bottom: 10px;
}

.item-num {
  color: #c3a46e;
}

.content-item-text {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #5a6070;
  line-height: 1.9;
}

/* Centered logo box — cream background with rounded corners */
.logo-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0 20px;
  background-color: #f9f6f2;
  height: 380px;
  border-radius: 28px;
}

.logo-wrap.mt-0 { margin-top: 0 !important; }
.logo-wrap.mb-0 { margin-bottom: 0 !important; }

/* Video Section Box — light blue-grey background */
.video-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0 20px;
  background-color: #ebedef;
  height: 380px;
  border-radius: 28px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.video-wrap:hover {
  transform: scale(1.01);
}

.video-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.play-button {
  position: absolute;
  width: 70px;
  height: 70px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  color: #1a2b4b;
}

.play-button i {
  width: 24px;
  height: 24px;
}

.logo-img {
  max-width: 160px;
  height: auto;
  display: inline-block;
}

@media (max-width: 768px) {
  .hero-title { font-size: 1.2rem; }
  .hero-image-wrap { border-radius: 12px; max-height: 260px; }
  .content-intro { font-size: 0.87rem; }
  .content-item-text { font-size: 0.85rem; }
}
</style>
