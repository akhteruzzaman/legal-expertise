<template>
  <section class="blog-hero-section">

    <!-- Text Block — aligned with header logo -->
    <div class="container">
      <div class="hero-text-block">
        <h2 class="hero-title">أهمية الاستشارة القانونية قبل توقيع العقود</h2>
        <p class="hero-desc">
          تعرف على أهمية الحصول على استشارة قانونية قبل توقيع أي عقد، وكيف تساهم في حماية حقوقك وتجنب المخاطر القانونية.
        </p>
      </div>
    </div>

    <!-- Banner Image — full width -->
    <div class="container-fluid px-lg-5">
      <div class="hero-image-wrap">
        <img src="/assets/blog-hero-wide.png" alt="أهمية الاستشارة القانونية قبل توقيع العقود" class="hero-image" />
      </div>
    </div>

  </section>
</template>

<style scoped>
.blog-hero-section {
  background-color: #ffffff;
  padding: 40px 0 60px;
  direction: rtl;
}

.hero-text-block {
  text-align: right;
  margin-bottom: 28px;
}

.hero-title {
  font-family: 'Cairo', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: #1a2b4b;
  margin-bottom: 12px;
  line-height: 1.5;
}

.hero-desc {
  font-family: 'Cairo', sans-serif;
  font-size: 0.92rem;
  color: #5a6070;
  line-height: 1.85;
  max-width: 680px;
  margin-right: 0;
  margin-left: auto;
  margin-bottom: 0;
}

.hero-image-wrap {
  width: 100%;
  border-radius: 18px;
  overflow: hidden;
  aspect-ratio: 1400 / 400;
  max-height: 400px;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

@media (max-width: 768px) {
  .hero-title { font-size: 1.2rem; }
  .hero-image-wrap { border-radius: 12px; max-height: 260px; }
}
</style>
