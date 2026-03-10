<template>
  <div class="terms-content-wrapper pb-5" dir="ltr">
    <div class="container container-boxed">
      <div class="terms-inner-card animate-up">
        <div class="update-date mb-4 text-start">
          Last Updated: January 16, 2024
        </div>
        
        <div class="terms-intro mb-5 animate-up text-start">
          <p>
            By using this website, you agree to the Privacy Policy set out below.
          </p>
          <p>
            We place the utmost importance on the privacy of our visitors and clients, and we are committed to protecting all personal data and information collected through this website, in accordance with the regulations in force in the Kingdom of Saudi Arabia.
          </p>
        </div>

        <div class="terms-sections">
          <div class="terms-item mb-5 animate-up text-start">
            <h3 class="item-title mb-3">1. Information We Collect</h3>
            <p class="item-text">
              We may collect some personal information when you use the website, such as:
              <ul class="ms-4 mt-2">
                <li>Name</li>
                <li>Phone Number</li>
                <li>Email</li>
                <li>Any information entered through contact forms or consultation requests</li>
              </ul>
              This information is only collected when provided voluntarily by the user.
            </p>
          </div>

          <div class="terms-item mb-5 animate-up text-start">
            <h3 class="item-title mb-3">2. Use of Information</h3>
            <p class="item-text">
              We use the information collected for the following purposes:
              <ul class="ms-4 mt-2">
                <li>Responding to inquiries and contact requests</li>
                <li>Providing requested legal consultations or services</li>
                <li>Improving the user experience on the website</li>
                <li>Communicating with the user when necessary and in a manner that serves the legal or service purpose</li>
              </ul>
            </p>
          </div>

          <div class="terms-item mb-5 animate-up text-start">
            <h3 class="item-title mb-3">3. Information Protection</h3>
            <p class="item-text">
              We are committed to taking appropriate technical and organizational measures to protect personal information from unauthorized access, modification, disclosure, or destruction.
            </p>
          </div>

          <div class="terms-item mb-5 animate-up text-start">
            <h3 class="item-title mb-3">4. Confidentiality of Information</h3>
            <p class="item-text">
              We are committed to maintaining the confidentiality of all data and information provided to us, and it is not shared with any third party except in cases imposed by the system or with the express consent of the data owner.
            </p>
          </div>

          <div class="terms-item mb-5 animate-up text-start">
            <h3 class="item-title mb-3">5. Cookies</h3>
            <p class="item-text">
              The website may use cookies to improve user experience and analyze website performance. The user can control cookie settings through their browser settings.
            </p>
          </div>

          <div class="terms-item mb-0 animate-up text-start">
            <h3 class="item-title mb-3">8. Amendments to the Privacy Policy</h3>
            <p class="item-text">
              The office reserves the right to modify or update the Privacy Policy at any time. Any update is posted on this page, and continued use of the website constitutes acceptance of the modifications.
            </p>
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
