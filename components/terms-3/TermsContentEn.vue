<template>
  <div class="terms-content-wrapper pb-5" dir="ltr">
    <div class="container container-boxed">
      <div class="terms-inner-card animate-up">
        <div class="update-date mb-4 text-start">
          Last Updated: January 14, 2024
        </div>
        
        <div class="terms-intro mb-5 text-start">
          <p>Please read these terms and conditions carefully before using this site. By using the site or any of our services, you agree to be bound by these terms as a user of the site.</p>
          <p>Welcome to our law firm's website. This site aims to provide general information about our legal services and is not a substitute for direct legal advice.</p>
        </div>

        <div class="terms-sections">
          <div class="terms-item mb-5 text-start">
            <h3 class="item-title">1. Site Usage</h3>
            <p class="item-text">Users must be 18 years of age or older to use this site. The user is committed to using the site for lawful purposes only and in a manner that does not violate the regulations in force in the Kingdom of Saudi Arabia.</p>
          </div>

          <div class="terms-item mb-5 text-start">
            <h3 class="item-title">2. Nature of Content</h3>
            <p class="item-text">All information and content available on the site are for general informational purposes only and do not constitute binding legal advice in any way. No attorney-client relationship arises from using the site except after a formal written agreement.</p>
          </div>

          <div class="terms-item mb-5 text-start">
            <h3 class="item-title">3. Legal Consultations</h3>
            <p class="item-text">Any request for consultation made through the site or communication forms does not constitute a commitment to provide a legal service until the request is reviewed and approved by the office. The office has the right to accept or reject any request at its professional discretion.</p>
          </div>

          <div class="terms-item mb-5 text-start">
            <h3 class="item-title">4. Intellectual Property</h3>
            <p class="item-text">All texts, logos, designs, and content displayed on the site are owned by the office or licensed for use, and may not be copied, reused, or published without prior written consent.</p>
          </div>

          <div class="terms-item mb-5 text-start">
            <h3 class="item-title">5. Limitation of Liability</h3>
            <p class="item-text">The office does not assume any responsibility for any direct or indirect damages that may arise as a result of using the site or relying on its content, and the site does not guarantee that it is free from technical errors or service interruptions.</p>
          </div>

          <div class="terms-item mb-5 text-start">
            <h3 class="item-title">6. Amendments to Terms</h3>
            <p class="item-text">The office reserves the right to modify or update these terms at any time without prior notice. Continued use of the site constitutes acceptance of the modified terms.</p>
          </div>

          <div class="terms-item mb-0 text-start">
            <h3 class="item-title">7. Privacy Policy and Significant Changes</h3>
            <p class="item-text">The office has the right to modify these terms at any time. In the event of significant changes, users will be notified via email or through notices within the platform. Continued use of the platform after modifications constitutes your agreement to the new terms.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.terms-content-wrapper {
  background-color: #ffffff;
  padding-top: 20px;
  text-align: left;
}

.container-boxed {
  padding: 0 20px;
}

.terms-inner-card {
  background: #ffffff;
  padding: 60px 80px;
  border-radius: 25px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.03);
}

.update-date {
  color: #cda656;
  font-weight: 700;
  font-size: 1rem;
}

.terms-intro p {
  color: #1a222e;
  font-size: 1.15rem;
  line-height: 2;
  font-weight: 400;
}

.item-title {
  color: #1a222e;
  font-weight: 800;
  font-size: 1.6rem;
  margin-bottom: 15px;
}

.item-text {
  color: #666;
  font-size: 1.1rem;
  line-height: 1.9;
  font-weight: 400;
}

.animate-up {
  animation: fadeInUp 0.8s ease forwards;
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
  .terms-inner-card {
    padding: 40px 30px;
  }
  
  .item-title {
    font-size: 1.4rem;
  }
  
  .terms-intro p {
    font-size: 1.05rem;
  }
}
</style>
