<template>
  <section class="blog-terms-section">
    <div class="container">

      <!-- Intro -->
      <p class="intro-text">
        Welcome to the Law Firm's website. This website aims to provide general information about the firm's legal services and does not constitute a substitute for direct legal consultation.
      </p>

      <!-- Terms Items -->
      <div class="terms-list">

        <!-- 1 -->
        <div class="terms-item">
          <h3 class="terms-title"><span class="term-num">1.</span> Use of the Website</h3>
          <p class="terms-text">
            Users must be at least 18 years of age to use this website. Users agree to use the site for lawful purposes only. This website is primarily intended for individuals and entities based in Saudi Arabia.
          </p>
        </div>

        <!-- 2 -->
        <div class="terms-item">
          <h3 class="terms-title"><span class="term-num">2.</span> Nature of Content</h3>
          <p class="terms-text">
            All information and content available on the website is provided for informational purposes only and does not constitute legal advice under any circumstances. Use of the site does not create an attorney-client relationship unless a formal written agreement is signed.
          </p>
        </div>

        <!-- 3 -->
        <div class="terms-item">
          <h3 class="terms-title"><span class="term-num">3.</span> Legal Consultations</h3>
          <p class="terms-text">
            Any consultation request submitted through the website does not constitute a commitment to provide legal services until the request has been reviewed and approved by the firm. Acceptance of any request requires the signing of an agreement defining the scope of professional representation.
          </p>
        </div>

        <!-- 4 -->
        <div class="terms-item">
          <h3 class="terms-title"><span class="term-num">4.</span> Intellectual Property</h3>
          <p class="terms-text">
            All texts, logos, designs, and content published on this website are owned by or licensed to the firm. They may not be copied or reused without prior written consent.
          </p>
        </div>

        <!-- 5 -->
        <div class="terms-item">
          <h3 class="terms-title"><span class="term-num">5.</span> Limitation of Liability</h3>
          <p class="terms-text">
            The firm is not liable for any direct or indirect damages arising from the use of the website or reliance on its content. The firm also does not guarantee that the website will be entirely free from technical errors or service interruptions.
          </p>
        </div>

        <!-- 6 -->
        <div class="terms-item">
          <h3 class="terms-title"><span class="term-num">6.</span> Amendments to Terms</h3>
          <p class="terms-text">
            The firm reserves the right to amend or update these terms at any time without prior notice. Continued use of the website following publication of changes constitutes implicit acceptance of the revised terms.
          </p>
        </div>

        <!-- 7 -->
        <div class="terms-item">
          <h3 class="terms-title"><span class="term-num">7.</span> Amendment Notifications</h3>
          <p class="terms-text">
            The firm may modify these terms at any time. In the event of material changes, users will be notified via email or through in-platform notifications. Your continued use of the platform after reviewing the amendments constitutes your acceptance of the updated terms.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.blog-terms-section {
  background-color: #ffffff;
  padding: 60px 0 80px;
}

.intro-text {
  font-family: 'Inter', sans-serif;
  font-size: 0.92rem;
  color: #5a6070;
  line-height: 1.9;
  text-align: center;
  max-width: 720px;
  margin: 0 auto 50px;
}

.terms-list {
  display: flex;
  flex-direction: column;
  gap: 36px;
}

.terms-item {
  text-align: center;
}

.terms-title {
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  font-weight: 800;
  color: #1a2b4b;
  margin-bottom: 10px;
}

.term-num {
  color: #c3a46e;
}

.terms-text {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #5a6070;
  line-height: 1.9;
  max-width: 700px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .intro-text { font-size: 0.87rem; }
  .terms-text { font-size: 0.85rem; }
  .terms-title { font-size: 0.98rem; }
}
</style>
