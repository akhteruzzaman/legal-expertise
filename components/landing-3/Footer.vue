<template>
  <section class="pb-5">
    <div class="container">
      <footer class="footer-section">
        <div class="footer-content ">
          <div class="footer-top mb-5">
            <div class="d-flex justify-content-start align-items-center mb-4">
              <img src="/assets/logo-dark.png" alt="Logo" class="footer-logo">
            </div>
          </div>
          <div class="row g-4 footer-links-row">
            <div class="col-lg-3 col-md-6">
              <h5 class="footer-heading mb-4">روابط سريعة</h5>
              <ul class="list-unstyled footer-list">
                <li><a href="#" class="footer-link">الرئيسية</a></li>
                <li><a href="#" class="footer-link">من نحن</a></li>
                <li><a href="#" class="footer-link">الخدمات</a></li>
                <li><a href="#" class="footer-link">فريق العمل</a></li>
                <li><a href="#" class="footer-link">المدونة</a></li>
                <li><a href="#" class="footer-link">وظائف</a></li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6">
              <h5 class="footer-heading mb-4">خدماتنا</h5>
              <ul class="list-unstyled footer-list">
                <li><a href="#" class="footer-link">الاستشارات القانونية</a></li>
                <li><a href="#" class="footer-link">التقاضي والتمثيل أمام المحاكم</a></li>
                <li><a href="#" class="footer-link">قضايا الشركات والقانون التجاري</a></li>
                <li><a href="#" class="footer-link">صياغة ومراجعة العقود</a></li>
                <li><a href="#" class="footer-link">القضايا المدنية والجنائية</a></li>
                <li><a href="#" class="footer-link">التحكيم وتسوية النزاعات</a></li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6">
              <h5 class="footer-heading mb-4">المدونة</h5>
              <ul class="list-unstyled footer-list">
                <li><a href="#" class="footer-link">العقود والاتفاقيات</a></li>
                <li><a href="#" class="footer-link">القانون التجاري والشركات</a></li>
                <li><a href="#" class="footer-link">القضايا المدنية</a></li>
                <li><a href="#" class="footer-link">القضايا الجنائية</a></li>
                <li><a href="#" class="footer-link">التحكيم وتسوية النزاعات</a></li>
                <li><a href="#" class="footer-link">أنظمة ولوائح سعودية</a></li>
                <li><a href="#" class="footer-link">حوكمة وامتثال</a></li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6">
              <h5 class="footer-heading mb-4">معلومات التواصل</h5>
              <div class="contact-item mb-3">
                <span class="contact-label">الهاتف:</span><br>
                <a href="tel:05XXXXXXXX" class="footer-link">05XXXXXXXX</a>
              </div>
              <div class="contact-item mb-3">
                <span class="contact-label">البريد الإلكتروني:</span><br>
                <a href="mailto:info@lawfirm.sa" class="footer-link">info@lawfirm.sa</a>
              </div>
              <div class="contact-item">
                <span class="contact-label">العنوان:</span><br>
                <span class="footer-text">المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
          <div class="footer-bottom mt-5 pt-4 border-top border-secondary d-flex flex-md-row flex-column justify-content-between align-items-center">
            <p class="copyright mb-0">© جميع الحقوق محفوظة - مكتب محاماة</p>
            <div class="social-links mb-3 mb-md-0 d-flex gap-3">
              <a href="#" class="social-icon social-icon-primary"><i data-lucide="instagram"></i></a>
              <a href="#" class="social-icon"><i data-lucide="facebook"></i></a>
              <a href="#" class="social-icon brand-icon-x">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a href="#" class="social-icon"><i data-lucide="linkedin"></i></a>
              <a href="#" class="social-icon"><i data-lucide="youtube"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.footer-section {
  background-color: #f9f6f0; /* Cream background matching Blog */
  padding: 80px 60px;
  border-radius: 40px;
  color: #1a2b4b;
}

.footer-logo {
  height: 60px;
  object-fit: contain;
}

.footer-heading {
  color: #1a2b4b;
  font-weight: 800;
  font-size: 1.25rem;
  position: relative;
  padding-bottom: 15px;
}

.footer-heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40px;
  height: 3px;
  background-color: #c5a059;
  border-radius: 2px;
}

.footer-link {
  color: #1a2b4b;
  opacity: 0.8;
  text-decoration: none;
  transition: all 0.3s ease;
  display: block;
  margin-bottom: 12px;
  font-weight: 500;
}

.footer-link:hover {
  color: #c5a059;
  opacity: 1;
  padding-right: 5px;
}

.contact-label {
  color: #c5a059;
  font-weight: 700;
  display: block;
  margin-bottom: 5px;
}

.footer-text {
  color: #1a2b4b;
  opacity: 0.8;
}

.footer-bottom {
  border-top: 1px solid rgba(26, 43, 75, 0.1) !important;
}

.copyright {
  color: #1a2b4b;
  opacity: 0.6;
}

.social-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1a2b4b;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-icon-primary {
  background-color: #c5a059;
  border-radius: 8px; /* Slightly rounded as in screenshot */
  color: #ffffff;
  width: 36px;
  height: 36px;
}

.social-icon:hover {
  color: #c5a059;
  transform: translateY(-2px);
}

.social-icon-primary:hover {
  background-color: #1a2b4b;
  color: #ffffff;
}

@media (max-width: 991px) {
  .footer-section {
    padding: 60px 40px;
  }
}
</style>
