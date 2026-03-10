<template>
  <section class="related-section">
    <div class="container">

      <!-- Section Title -->
      <h2 class="related-title">Related Posts</h2>

      <!-- Cards Row -->
      <div class="row g-4">

        <!-- Card 1 -->
        <div class="col-md-6">
          <div class="related-card">
            <div class="card-img-wrap">
              <img src="/assets/blog-hero-wide.png" alt="The Importance of Legal Consultation Before Signing Contracts" class="card-img" />
            </div>
            <div class="card-body">
              <h3 class="card-title">The Importance of Legal Consultation Before Signing Contracts</h3>
              <a href="#" class="card-link">Read More ›</a>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="col-md-6">
          <div class="related-card">
            <div class="card-img-wrap">
              <img src="/assets/blog1.png" alt="When Do You Need Arbitration Instead of Litigation?" class="card-img" />
            </div>
            <div class="card-body">
              <h3 class="card-title">When Do You Need Arbitration Instead of Litigation?</h3>
              <a href="#" class="card-link">Read More ›</a>
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
  padding: 20px 0 80px;
}

.related-title {
  font-family: 'Inter', sans-serif;
  font-size: 1.4rem;
  font-weight: 800;
  color: #1a2b4b;
  text-align: left;
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
  aspect-ratio: 16 / 9;
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
  padding: 18px 4px 10px;
  text-align: left;
}

.card-title {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #1a2b4b;
  margin-bottom: 10px;
  line-height: 1.6;
}

.card-link {
  font-family: 'Inter', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  color: #c3a46e;
  text-decoration: none;
  transition: color 0.2s ease;
}

.card-link:hover {
  color: #a8854e;
}

@media (max-width: 575px) {
  .related-title { font-size: 1.2rem; }
  .card-title { font-size: 0.93rem; }
}
</style>
