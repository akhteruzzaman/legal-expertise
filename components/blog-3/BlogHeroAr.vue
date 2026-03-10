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

    <!-- Search and Filter Bar -->
    <div class="container-xl mb-5 px-lg-3">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="filter-wrapper d-flex gap-3 align-items-center">
            <!-- Search Input -->
            <div class="search-box flex-grow-1">
              <div class="search-pill">
                <i data-lucide="search" class="search-icon icon-gray"></i>
                <input 
                  type="text" 
                  class="search-input" 
                  placeholder="ابحث عن الموضوع .."
                >
              </div>
            </div>
            <!-- Category Dropdown -->
            <div class="dropdown-box">
              <div class="dropdown-pill d-flex align-items-center justify-content-between px-4">
                <i data-lucide="chevron-down" class="me-2 icon-gray small-icon"></i>
                <span>كل المواضيع</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Articles Grid -->
    <ClientOnly>
      <div class="container-xl mt-5 mb-5 px-lg-3">
        <!-- Rows - duplicated 5 times total -->
        <div v-for="i in 5" :key="i" class="row g-5 justify-content-center mb-5">
          <!-- Card 1 -->
          <div class="col-md-6 col-lg-4">
            <div class="blog-card-v2">
              <div class="card-img-wrap-v2">
                <img src="/assets/b1.png" alt="أهمية الاستشارة القانونية" class="blog-img-v2" />
              </div>
              <div class="card-content-v2">
                <h3 class="card-title-v2">أهمية الاستشارة القانونية قبل توقيع العقود</h3>
                <p class="card-description-v2">
                  تعرّف على أهمية الحصول على استشارة قانونية قبل توقيع أي عقد، وكيف تساهم في حماية حقوقك وتجنب المخاطر القانونية.
                </p>
                <NuxtLink to="/blog/blog-details-1/ar" class="read-more-v2">
                  <span>اقرأ المزيد</span> <i data-lucide="chevron-left"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
          <!-- Card 2 -->
          <div class="col-md-6 col-lg-4">
            <div class="blog-card-v2">
              <div class="card-img-wrap-v2">
                <img src="/assets/b2.png" alt="التحكيم بدلًا من التقاضي" class="blog-img-v2" />
              </div>
              <div class="card-content-v2">
                <h3 class="card-title-v2">متى تحتاج إلى اللجوء للتحكيم بدلًا من التقاضي؟</h3>
                <p class="card-description-v2">
                  شرح مبسط للفروقات بين التحكيم والتقاضي، ومتى يكون التحكيم الخيار الأنسب لحل النزاعات.
                </p>
                <NuxtLink to="/blog/blog-details-2/ar" class="read-more-v2">
                  <span>اقرأ المزيد</span> <i data-lucide="chevron-left"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
          <!-- Card 3 -->
          <div class="col-md-6 col-lg-4">
            <div class="blog-card-v2">
              <div class="card-img-wrap-v2">
                <img src="/assets/b3.png" alt="أخطاء الشركات الناشئة" class="blog-img-v2" />
              </div>
              <div class="card-content-v2">
                <h3 class="card-title-v2">أبرز الأخطاء القانونية التي تقع فيها الشركات الناشئة</h3>
                <p class="card-description-v2">
                  نستعرض أكثر الأخطاء القانونية شيوعًا لدى الشركات الناشئة، مع نصائح عملية لتجنبها منذ البداية.
                </p>
                <NuxtLink to="/blog/blog-details-3/ar" class="read-more-v2">
                  <span>اقرأ المزيد</span> <i data-lucide="chevron-left"></i>
                </NuxtLink>
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
  .filter-wrapper {
    flex-direction: column;
  }
  .dropdown-box {
    width: 100%;
  }
}

/* Filter Styles */
.filter-wrapper {
  max-width: 100%;
}

.search-pill {
  position: relative;
  background: white;
  border: 1px solid #f1e8d9;
  border-radius: 50rem;
  height: 55px;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.search-icon {
  width: 20px;
  height: 20px;
  color: #333;
}

.search-input {
  flex-grow: 1;
  border: none;
  background: transparent;
  padding: 0 15px;
  text-align: right;
  font-family: 'Cairo', sans-serif;
  font-size: 0.95rem;
  color: #1a2b4b;
}

.search-input:focus {
  outline: none;
}

.search-input::placeholder {
  color: #1a2b4b;
  opacity: 0.8;
}

.dropdown-pill {
  background-color: white;
  border: 1px solid #f1e8d9;
  height: 55px;
  border-radius: 50rem;
  min-width: 220px;
  cursor: pointer;
  font-family: 'Cairo', sans-serif;
  font-size: 0.95rem;
  color: #1a2b4b;
}

.small-icon {
  width: 18px;
  height: 18px;
}

.icon-gray {
  color: #9e9e9e;
}

/* Blog Card V2 Styles (3 Columns) - Redesigned to match image */
.blog-card-v2 {
  background: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.3s ease;
  margin-bottom: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);
}

.blog-card-v2:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 45px rgba(0,0,0,0.08);
}

.card-img-wrap-v2 {
  width: 100%;
  aspect-ratio: 3 / 2;
  overflow: hidden;
  padding: 15px 15px 0 15px;
}

.blog-img-v2 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.card-content-v2 {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card-title-v2 {
  font-family: 'Cairo', sans-serif;
  font-size: 1.35rem;
  font-weight: 800;
  color: #1a2b4b;
  margin-bottom: 15px;
  line-height: 1.4;
  text-align: right;
  width: 100%;
}

.card-description-v2 {
  font-family: 'Cairo', sans-serif;
  font-size: 1.05rem;
  color: #5a6070;
  line-height: 1.7;
  margin-bottom: 25px;
  text-align: right;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.read-more-v2 {
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'Cairo', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: #c3a46e;
  text-decoration: none;
  transition: all 0.3s ease;
  align-self: flex-start; /* Right aligned in RTL */
}

.read-more-v2:hover {
  color: #1a2b4b;
  gap: 12px;
}

.read-more-v2 i {
  width: 16px;
  height: 16px;
}
</style>
