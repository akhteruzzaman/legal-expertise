<template>
  <section class="about-2-hero">
    <div class="container">
      <div class="row align-items-center">
        <!-- Text Column -->
        <div class="col-lg-6 mb-4 mb-lg-0">
          <div class="content-wrapper pe-lg-5">
            <h2 class="section-title">من نحن</h2>
            <p class="section-text">
              نحن مكتب محاماة واستشارات قانونية مقره المملكة العربية السعودية، نقدم خدمات قانونية متكاملة للأفراد والشركات وفق أعلى المعايير المهنية، وبما يتوافق مع الأنظمة واللوائح المعمول بها في المملكة. نعمل على بناء علاقات قائمة على الثقة والشفافية، ونحرص على حماية حقوق عملائنا ومساعدتهم في اتخاذ قرارات قانونية مدروسة تحقق لهم الاستقرار والأمان القانوني.
            </p>
          </div>
        </div>
        <!-- Image Column -->
        <div class="col-lg-6">
          <div class="image-container">
            <img src="/assets/b5.png" alt="من نحن" class="img-fluid hero-image">
            <div class="blue-tint-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
onMounted(() => {
  if (window.lucide) {
    window.lucide.createIcons()
  }
})
</script>

<style scoped>
.about-2-hero {
  padding: 50px 0;
  background-color: #ffffff;
  direction: rtl;
}

.image-container {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
}

.blue-tint-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(12, 20, 43, 0.4); /* Navy blue tint */
  mix-blend-mode: multiply;
}

.section-title {
  font-family: 'Cairo', sans-serif;
  font-weight: 800;
  font-size: 2.5rem;
  color: #0c142b;
  margin-bottom: 25px;
  position: relative;
}

.section-text {
  font-family: 'Cairo', sans-serif;
  font-size: 1.15rem;
  line-height: 1.8;
  color: #555;
  margin: 0;
}

@media (max-width: 991px) {
  .section-title {
    font-size: 2rem;
  }
  .ps-lg-5 {
    padding-left: 0 !important;
  }
  .content-wrapper {
    text-align: center;
    margin-top: 30px;
  }
}
</style>
