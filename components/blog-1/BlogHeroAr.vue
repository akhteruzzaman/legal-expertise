<template>
  <section class="blog-main-section">
    <!-- Header Area -->
    <div class="container text-center mb-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <h2 class="section-title">المدونة القانونية</h2>
          <p class="section-subtitle">
            نشارككم مقالات قانونية مبسطة تسلّط الضوء على الأنظمة والتشريعات، وتساعد الأفراد والشركات على فهم حقوقهم واتخاذ قرارات قانونية واعية.
          </p>
        </div>
      </div>
    </div>

    <!-- Articles Grid -->
    <ClientOnly>
      <div class="container mt-5">
        <!-- Row 4 -->
        <div class="row g-5 justify-content-center mb-5">
          <div class="col-lg-6">
            <div class="blog-card">
              <div class="card-img-wrap">
                <img src="/assets/b4.png" alt="دليل شامل حول ضريبة القيمة المضافة" class="blog-img" />
              </div>
              <div class="card-content">
                <h3 class="card-title text-center">دليل شامل حول ضريبة القيمة المضافة</h3>
                <div class="text-start">
                  <NuxtLink to="/blog/blog-details-1/ar" class="read-more">
                    اقرأ المزيد <i data-lucide="chevron-left"></i>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="blog-card">
              <div class="card-img-wrap">
                <img src="/assets/b5.png" alt="أهمية صياغة اللوائح الداخلية للمؤسسات" class="blog-img" />
              </div>
              <div class="card-content">
                <h3 class="card-title text-center">أهمية صياغة اللوائح الداخلية للمؤسسات</h3>
                <div class="text-center">
                  <NuxtLink to="/blog/blog-details-2/ar" class="read-more">
                    اقرأ المزيد <i data-lucide="chevron-left"></i>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Row 5 -->
        <div class="row g-5 justify-content-center">
          <div class="col-lg-6">
            <div class="blog-card">
              <div class="card-img-wrap">
                <img src="/assets/b6.png" alt="الجرائم المعلوماتية وكيفية الوقاية منها" class="blog-img" />
              </div>
              <div class="card-content">
                <h3 class="card-title text-center">الجرائم المعلوماتية وكيفية الوقاية منها</h3>
                <div class="text-center">
                  <NuxtLink to="/blog/blog-details-3/ar" class="read-more">
                    اقرأ المزيد <i data-lucide="chevron-left"></i>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="blog-card">
              <div class="card-img-wrap">
                <img src="/assets/blog1.png" alt="تطورات نظام المحاكم التجارية" class="blog-img" />
              </div>
              <div class="card-content">
                <h3 class="card-title text-center">تطورات نظام المحاكم التجارية</h3>
                <div class="text-start">
                  <NuxtLink to="/blog/blog-details-1/ar" class="read-more">
                    اقرأ المزيد <i data-lucide="chevron-left"></i>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientOnly>
  </section>
</template>

<script setup>
// Redundant Lucide init removed to stabilize hydration
</script>

<style scoped>
.blog-main-section {
  background-color: #ffffff;
  padding: 80px 0 40px;
  direction: rtl;
}

.section-title {
  font-family: 'Cairo', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: #1a2b4b;
  margin-bottom: 20px;
  text-align: center;
}

.section-subtitle {
  font-family: 'Cairo', sans-serif;
  font-size: 1rem;
  color: #5a6070;
  line-height: 1.8;
  margin-bottom: 0;
  text-align: center;
}

.blog-card {
  transition: transform 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-5px);
}

.card-img-wrap {
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: 28px;
  overflow: hidden;
  margin-bottom: 25px;
  background-color: #f8f9fa;
}

.blog-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-title {
  font-family: 'Cairo', sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  color: #1a2b4b;
  margin-bottom: 15px;
  line-height: 1.5;
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: 'Cairo', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: #c3a46e;
  text-decoration: none;
  transition: gap 0.3s ease;
}

.read-more:hover {
  gap: 8px;
}

.read-more i {
  width: 16px;
  height: 16px;
}

@media (max-width: 991px) {
  .section-title { font-size: 1.75rem; }
  .blog-card { margin-bottom: 20px; }
}
</style>
