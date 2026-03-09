<template>
  <section class="about-hero-section">
    <div class="container">
      <div class="row align-items-center">
        <!-- Text Column (Right in RTL) -->
        <div class="col-lg-5">
          <div class="about-hero-content-new">
            <h2 class="section-title-new">من نحن</h2>
            <p class="section-desc-new">
              نحن مكتب محاماة واستشارات قانونية مقره المملكة العربية السعودية، نقدم خدمات قانونية متكاملة للأفراد والشركات وفق أعلى المعايير المهنية، وبما يتوافق مع الأنظمة واللوائح المعمول بها في المملكة. نعمل على بناء علاقات قائمة على الثقة والشفافية، ونحرص على حماية حقوق عملائنا ومساعدتهم في اتخاذ قرارات قانونية مدروسة تحقق لهم الاستقرار والأمان القانوني.
            </p>
          </div>
        </div>

        <!-- Images Column (Left in RTL) -->
        <div class="col-lg-7">
          <div class="about-hero-collage-new">
            <div class="pillar pillar-1">
              <img src="/assets/about-hero-1.jpg" alt="Scale of Justice" />
            </div>
            <div class="pillar pillar-2">
              <img src="/assets/about-hero-2.jpg" alt="Legal Team Meeting" />
            </div>
            <div class="pillar pillar-3">
              <img src="/assets/about-hero-3.jpg" alt="Legal Gavel" />
              <div class="gold-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.about-hero-section {
  background-color: #ffffff;
  padding: 100px 0;
  overflow: hidden;
}

.about-hero-collage-new {
  display: flex;
  gap: 25px;
  align-items: center;
}

.pillar {
  flex: 1;
  aspect-ratio: 1 / 2.2;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.pillar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Grayscale Pillar */
.pillar-1 img {
  filter: grayscale(100%) contrast(1.1);
}

/* Blueish Pillar */
.pillar-2 img {
  filter: grayscale(100%) brightness(0.8) sepia(50%) hue-rotate(180deg) saturate(200%);
}

/* Golden Pillar */
.pillar-3 {
  box-shadow: 0 15px 40px rgba(195, 164, 110, 0.3);
}

.pillar-3 img {
  filter: sepia(30%) saturate(150%) brightness(0.9);
}

.gold-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(195, 164, 110, 0.3) 0%, transparent 70%);
  pointer-events: none;
}

/* Content Styling */
.about-hero-content-new {
  padding-left: 40px;
  text-align: right;
  direction: rtl;
}

.section-title-new {
  font-family: 'Cairo', sans-serif;
  font-weight: 900;
  font-size: 2.8rem;
  color: #0c142b;
  margin-bottom: 25px;
}

.section-desc-new {
  font-family: 'Cairo', sans-serif;
  font-size: 1.15rem;
  line-height: 1.8;
  color: #555555;
  font-weight: 500;
}

/* Responsive */
@media (max-width: 1200px) {
  .section-title-new { font-size: 2.3rem; }
  .pillar { border-radius: 20px; }
}

@media (max-width: 991px) {
  .about-hero-collage-new {
    margin-bottom: 50px;
  }
  .about-hero-content-new {
    padding-left: 0;
    text-align: center;
  }
}

@media (max-width: 576px) {
  .about-hero-collage-new {
    gap: 10px;
  }
  .pillar {
    border-radius: 16px;
  }
  .section-title-new { font-size: 2rem; }
  .section-desc-new { font-size: 1rem; }
}
</style>
