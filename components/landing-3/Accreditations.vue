<template>
  <div class="accreditations-outer-wrapper">
    <section class="accreditations-section-inner pt-5 pb-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="section-title mb-2 text-center text-white">اعتمادات الشركة</h2>
          <p class="section-subtitle text-center" style="color: rgba(255, 255, 255, 0.8);">نمتلك اعتمادات وتراخيص مهنية تعكس التزامنا بالمعايير النظامية وأفضل الممارسات في تقديم الخدمات القانونية والاستشارية، محلياً ودولياً.</p>
        </div>
        <div class="row g-4">
          <!-- Accreditation 1 -->
          <div class="col-lg-4 col-md-6">
            <div class="accreditation-card text-center">
              <div class="accreditation-logo-wrapper mb-4">
                <img src="/assets/s3.png" alt="الهيئة السعودية للملكية الفكرية" class="img-fluid" style="height: 60px; object-fit: contain;">
              </div>
              <h3 class="accreditation-title h5 fw-bold mb-3">الهيئة السعودية للملكية الفكرية</h3>
              <p class="accreditation-description text-muted mb-3">نساعد في حماية الحقوق الفكرية عبر إعداد الطلبات والمتطلبات التنظيمية ذات الصلة وتقديم الاستشارات المتخصصة.</p>
              <a href="#" class="accreditation-link text-decoration-none fw-bold" style="color: #c3a46e;">تفاصيل أكثر <i data-lucide="chevron-left"></i></a>
            </div>
          </div>
          <!-- Accreditation 2 -->
          <div class="col-lg-4 col-md-6">
            <div class="accreditation-card text-center">
              <div class="accreditation-logo-wrapper mb-4">
                <img src="/assets/s2.png" alt="وزارة الموارد البشرية والتنمية الاجتماعية" class="img-fluid" style="height: 60px; object-fit: contain;">
              </div>
              <h3 class="accreditation-title h5 fw-bold mb-3">وزارة الموارد البشرية والتنمية الاجتماعية</h3>
              <p class="accreditation-description text-muted mb-3">نقـدّم دعمـاً في إعـداد ومراجعـة اللوائـح الداخليـة والامتثـال التنظيمـي، بمـا يضمـن توافـق المنشـأة مع المتطلبـات النظاميـة.</p>
              <a href="#" class="accreditation-link text-decoration-none fw-bold" style="color: #c3a46e;">تفاصيل أكثر <i data-lucide="chevron-left"></i></a>
            </div>
          </div>
          <!-- Accreditation 3 -->
          <div class="col-lg-4 col-md-6">
            <div class="accreditation-card text-center">
              <div class="accreditation-logo-wrapper mb-4">
                <img src="/assets/s1.png" alt="الهيئة السعودية للمحامين" class="img-fluid" style="height: 60px; object-fit: contain;">
              </div>
              <h3 class="accreditation-title h5 fw-bold mb-3">الهيئة السعودية للمحامين</h3>
              <p class="accreditation-description text-muted mb-3">مكتبنا مسجل وملتزم بالمعايير المهنية المعتمدة، ونقـدم خدمات قانونية وفق الأنظمة واللوائح ذات العلاقة.</p>
              <a href="#" class="accreditation-link text-decoration-none fw-bold" style="color: #c3a46e;">تفاصيل أكثر <i data-lucide="chevron-left"></i></a>
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
  background-color: #1a2b4b;
  border-radius: 25px;
  overflow: hidden;
  position: relative;
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
