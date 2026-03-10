<template>
  <section class="blog-main-section">
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
        <div v-for="n in 5" :key="n" class="section-block mb-5 pb-5">
          <!-- Grid Header -->
          <div class="row align-items-center mb-5 section-header-row">
            <div class="col-6 text-start">
              <h2 class="grid-title">الاستشارات القانونية</h2>
            </div>
            <div class="col-6 text-end">
              <NuxtLink to="#" class="view-all-link">شاهد الكل</NuxtLink>
            </div>
          </div>

          <!-- Grid Row -->
          <div class="row g-5 justify-content-center">
            <!-- Card 1 -->
            <div class="col-md-6 col-lg-4">
              <div class="blog-card-v3">
                <div class="card-img-wrap-v3">
                  <img src="/assets/b1.png" alt="أهمية الاستشارة القانونية" class="blog-img-v3" />
                </div>
                <div class="card-content-v3">
                  <h3 class="card-title-v3">أبرز الأخطاء القانونية التي تقع فيها الشركات الناشئة</h3>
                  <p class="card-description-v3">
                    نستعرض أكثر الأخطاء القانونية شيوعًا لدى الشركات الناشئة، مع نصائح عملية لتجنبها منذ البداية.
                  </p>
                  <NuxtLink to="/blog/blog-details-1/ar" class="read-more-v3">
                    اقرأ المزيد <i data-lucide="chevron-left"></i>
                  </NuxtLink>
                </div>
              </div>
            </div>
            <!-- Card 2 -->
            <div class="col-md-6 col-lg-4">
              <div class="blog-card-v3">
                <div class="card-img-wrap-v3">
                  <img src="/assets/b2.png" alt="التحكيم بدلًا من التقاضي" class="blog-img-v3" />
                </div>
                <div class="card-content-v3">
                  <h3 class="card-title-v3">متى تحتاج إلى اللجوء للتحكيم بدلًا من التقاضي؟</h3>
                  <p class="card-description-v3">
                    شرح مبسط للفروقات بين التحكيم والتقاضي، ومتى يكون التحكيم الخيار الأنسب لحل النزاعات.
                  </p>
                  <NuxtLink to="/blog/blog-details-2/ar" class="read-more-v3">
                    اقرأ المزيد <i data-lucide="chevron-left"></i>
                  </NuxtLink>
                </div>
              </div>
            </div>
            <!-- Card 3 -->
            <div class="col-md-6 col-lg-4">
              <div class="blog-card-v3">
                <div class="card-img-wrap-v3">
                  <img src="/assets/b3.png" alt="أخطاء الشركات الناشئة" class="blog-img-v3" />
                </div>
                <div class="card-content-v3">
                  <h3 class="card-title-v3">أهمية الاستشارة القانونية قبل توقيع العقود</h3>
                  <p class="card-description-v3">
                    تعرّف على أهمية الحصول على استشارة قانونية قبل توقيع أي عقد، وكيف تساهم في حماية حقوقك وتجنب المخاطر القانونية.
                  </p>
                  <NuxtLink to="/blog/blog-details-3/ar" class="read-more-v3">
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
  padding: 40px 0 40px;
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

/* Blog Card V3 Styles (3 Columns) - Based on new image */


.grid-title {
  font-family: 'Cairo', sans-serif;
  font-size: 1.75rem;
  font-weight: 800;
  color: #1a2b4b;
  margin: 0;
}

.view-all-link {
  font-family: 'Cairo', sans-serif;
  color: #5a6070;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  transition: color 0.3s;
}

.view-all-link:hover {
  color: #c3a46e;
}

.blog-card-v3 {
  background: #ffffff;
  border: 1px solid #f8f8f8;
  border-radius: 32px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  margin-bottom: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 40px rgba(0,0,0,0.04);
}

.blog-card-v3:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.1);
}

.card-img-wrap-v3 {
  width: 100%;
  aspect-ratio: 3 / 2;
  overflow: hidden;
  padding: 18px 18px 0 18px;
}

.blog-img-v3 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
}

.card-content-v3 {
  padding: 24px 28px 32px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: right;
}

.card-title-v3 {
  font-family: 'Cairo', sans-serif;
  font-size: 1.3rem;
  font-weight: 800;
  color: #1a2b4b;
  margin-bottom: 15px;
  line-height: 1.5;
}

.card-description-v3 {
  font-family: 'Cairo', sans-serif;
  font-size: 1rem;
  color: #666e80;
  line-height: 1.8;
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.read-more-v3 {
  margin-top: 15px;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  font-family: 'Cairo', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: #c3a46e;
  text-decoration: none;
  transition: all 0.3s ease;
}

.read-more-v3:hover {
  color: #1a2b4b;
  gap: 12px;
}

.read-more-v3 i {
  width: 16px;
  height: 16px;
}
</style>
