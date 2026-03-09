<template>
  <section class="about-3-hero">
    <div class="container">
      <div class="row align-items-center">
        <!-- Text Column (Screen-Right in RTL) -->
        <div class="col-lg-6 mb-4 mb-lg-0">
          <div class="content-wrapper pe-lg-5">
            <h2 class="section-title">من نحن</h2>
            <p class="section-text">
              نحن مكتب محاماة واستشارات قانونية مقره المملكة العربية السعودية، نقدم خدمات قانونية متكاملة للأفراد والشركات وفق أعلى المعايير المهنية، وبما يتوافق مع الأنظمة واللوائح المعمول بها في المملكة. نعمل على بناء علاقات قائمة على الثقة والشفافية، ونحرص على حماية حقوق عملائنا ومساعدتهم في اتخاذ قرارات قانونية مدروسة تحقق لهم الاستقرار والأمان القانوني.
            </p>
          </div>
        </div>
        <!-- Image Column (Screen-Left in RTL) -->
        <div class="col-lg-6">
          <div class="image-container video-hero-container">
            <img src="/assets/b5.png" alt="من نحن" class="img-fluid hero-image">
            <!-- Concept from Landing Page 5: Navy Blue Opacity Overlay -->
            <div class="video-overlay"></div>
            <!-- Concept from Landing Page 5: Play Button -->
            <div class="play-button">
              <i data-lucide="play"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  if (window.lucide) {
    window.lucide.createIcons()
  }
})
</script>

<style scoped>
.about-3-hero {
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

/* Concept from Landing Page 5: Navy Blue Overlay with Opacity */
.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(40 55 102 / 55%);
  z-index: 1;
}

/* Concept from Landing Page 5: Centered Play Button */
.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.play-button:hover {
  transform: translate(-50%, -50%) scale(1.1);
  background: white;
}

.play-button i {
  color: #1a222e; /* matches --text-dark from light.css */
  width: 30px;
  height: 30px;
  margin-right: -5px; /* Visual centering adjustment for play triangle */
}

.section-title {
  font-family: 'Cairo', sans-serif;
  font-weight: 800;
  font-size: 2.5rem;
  color: #0c142b;
  margin-bottom: 25px;
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
  .pe-lg-5 {
    padding-right: 0 !important;
  }
  .content-wrapper {
    text-align: center;
    margin-top: 30px;
  }
}
</style>
