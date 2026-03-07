<template>
  <div class="blog-outer-wrapper">
    <section class="blog-section-inner pt-5 pb-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="section-title mb-2 text-center">المدونة القانونية</h2>
          <p class="section-subtitle text-muted text-center">نشارككم مقالات قانونية مبسطة تسلّط الضوء على الأنظمة والتشريعات، وتساعد الأفراد والشركات على فهم حقوقهم واتخاذ قرارات قانونية واعية.</p>
        </div>
        <div class="row g-4 px-lg-5">
          <!-- Blog 1 - Larger Column (Right in RTL) -->
          <div class="col-lg-8">
            <div class="blog-card wide-card h-100">
              <div class="blog-img-wrapper wide-img mb-4">
                <img src="/assets/blog1.png" alt="أهمية الاستشارة القانونية قبل توقيع العقود" class="img-fluid rounded-4">
              </div>
              <div class="blog-content">
                <h3 class="blog-title mb-3">أهمية الاستشارة القانونية قبل توقيع العقود</h3>
                <p class="blog-description mb-4">تعرف على أهمية الحصول على استشارة قانونية قبل توقيع أي عقد، وكيف تساهم في حماية حقوقك وتجنب المخاطر القانونية.</p>
                <a href="#" class="blog-link">اقرأ المزيد <i data-lucide="chevron-left"></i></a>
              </div>
            </div>
          </div>
          <!-- Blog 2 - Smaller Column (Left in RTL) -->
          <div class="col-lg-4">
            <div class="blog-card fixed-card h-100">
              <div class="blog-img-wrapper mb-4">
                <img src="/assets/blog3.png" alt="أبرز الأخطاء القانونية التي تقع فيها الشركات الناشئة" class="img-fluid rounded-4">
              </div>
              <div class="blog-content">
                <h3 class="blog-title mb-3">أبرز الأخطاء القانونية التي تقع فيها الشركات الناشئة</h3>
                <p class="blog-description mb-4">نستعرض أكثر الأخطاء القانونية شيوعاً لدى الشركات الناشئة، مع نصائح عملية لتجنبها منذ البداية.</p>
                <a href="#" class="blog-link">اقرأ المزيد <i data-lucide="chevron-left"></i></a>
              </div>
            </div>
          </div>
        </div>
        <!-- Read More Button -->
        <div class="text-center mt-5">
          <a href="#" class="btn-blog-more">اقرأ أكثر</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.blog-outer-wrapper {
  padding: 20px;
  background-color: #ffffff;
}

.blog-section-inner {
  background-color: #fdfbf7;
  border-radius: 25px;
  overflow: hidden;
}

.blog-card {
  background: white;
  border-radius: 30px;
  padding: 25px;
  border: none;
  display: flex;
  flex-direction: column;
}

.blog-img-wrapper img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 20px !important;
}

.wide-img img {
  height: 300px;
}

.blog-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a2b4b;
  line-height: 1.5;
  text-align: right;
}

.blog-description {
  font-size: 0.95rem;
  color: #6c757d;
  line-height: 1.7;
  text-align: right;
  flex-grow: 1;
}

.blog-link {
  color: #c3a46e;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
}

.btn-blog-more {
  background-color: #1a2b4b;
  color: white;
  padding: 12px 40px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  display: inline-block;
  transition: all 0.3s ease;
}

.btn-blog-more:hover {
  background-color: #c3a46e;
  transform: translateY(-3px);
  color: white;
}

@media (max-width: 992px) {
  .wide-img img {
    height: 250px;
  }
}
</style>
