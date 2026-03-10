<template>
  <section class="related-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-11">
          
          <!-- Section Title -->
          <h2 class="related-title">مقالات ذات صلة</h2>

          <!-- Cards Row -->
          <div class="row g-4">

            <!-- Card 1 -->
            <div class="col-lg-4 col-md-6">
              <div class="related-card">
                <div class="card-img-wrap">
                  <img src="/assets/b1.png" alt="أهمية الاستشارة القانونية قبل توقيع العقود" class="card-img" />
                </div>
                <div class="card-body">
                  <h3 class="card-title">أهمية الاستشارة القانونية قبل توقيع العقود</h3>
                  <a href="#" class="card-link">اقرأ المزيد <span class="chevron">›</span></a>
                </div>
              </div>
            </div>

            <!-- Card 2 -->
            <div class="col-lg-4 col-md-6">
              <div class="related-card">
                <div class="card-img-wrap">
                  <img src="/assets/b2.png" alt="متى تحتاج إلى اللجوء للتحكيم بدلًا من التقاضي؟" class="card-img" />
                </div>
                <div class="card-body">
                  <h3 class="card-title">متى تحتاج إلى اللجوء للتحكيم بدلًا من التقاضي؟</h3>
                  <a href="#" class="card-link">اقرأ المزيد <span class="chevron">›</span></a>
                </div>
              </div>
            </div>

            <!-- Card 3 -->
            <div class="col-lg-4 col-md-6">
              <div class="related-card">
                <div class="card-img-wrap">
                  <img src="/assets/b3.png" alt="أبرز الأخطاء القانونية التي تقع فيها الشركات الناشئة" class="card-img" />
                </div>
                <div class="card-body">
                  <h3 class="card-title">أبرز الأخطاء القانونية التي تقع فيها الشركات الناشئة</h3>
                  <a href="#" class="card-link">اقرأ المزيد <span class="chevron">›</span></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.related-section {
  background-color: #ffffff;
  padding: 0 0 80px;
  direction: rtl;
}

.related-title {
  font-family: 'Cairo', sans-serif;
  font-size: 1.4rem;
  font-weight: 800;
  color: #1a2b4b;
  text-align: right;
  margin-bottom: 30px;
}

/* ── Card ── */
.related-card {
  border-radius: 16px;
  overflow: hidden;
  background-color: #ffffff;
}

.card-img-wrap {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 16px;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.35s ease;
}

.related-card:hover .card-img {
  transform: scale(1.04);
}

.card-body {
  padding: 22px 4px 10px;
  text-align: right;
}

.card-title {
  font-family: 'Cairo', sans-serif;
  font-size: 1.05rem;
  font-weight: 800;
  color: #1a2b4b;
  margin-bottom: 12px;
  line-height: 1.6;
}

.card-link {
  font-family: 'Cairo', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: #c3a46e;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.2s ease;
}

.card-link .chevron {
    margin-right: 6px;
    font-size: 1.1rem;
    line-height: 1;
}

.card-link:hover {
  color: #1a2b4b;
}

@media (max-width: 991px) {
    .related-section { padding: 40px 0 60px; }
}

@media (max-width: 575px) {
  .related-title { font-size: 1.25rem; }
  .card-title { font-size: 0.95rem; }
}
</style>
