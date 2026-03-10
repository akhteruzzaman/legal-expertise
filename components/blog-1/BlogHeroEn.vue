<template>
  <section class="blog-main-section">
    <!-- Header Area -->
    <div class="container text-center mb-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <h2 class="section-title">The Legal Blog</h2>
          <p class="section-subtitle">
            We share simplified legal articles highlighting systems and legislation, helping individuals and companies understand their rights and make informed legal decisions.
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
                <img src="/assets/b4.png" alt="VAT Guide for Business" class="blog-img" />
              </div>
              <div class="card-content">
                <h3 class="card-title text-center">Comprehensive Guide to Value Added Tax for Businesses</h3>
                <div class="text-center">
                  <NuxtLink to="/blog/blog-details-1/en" class="read-more">
                    Read More <i data-lucide="chevron-right"></i>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="blog-card">
              <div class="card-img-wrap">
                <img src="/assets/b5.png" alt="Internal Regulations for Organizations" class="blog-img" />
              </div>
              <div class="card-content">
                <h3 class="card-title text-center">Importance of Drafting Internal Regulations for Organizations</h3>
                <div class="text-center">
                  <NuxtLink to="/blog/blog-details-2/en" class="read-more">
                    Read More <i data-lucide="chevron-right"></i>
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
                <img src="/assets/b6.png" alt="Cybercrimes and Prevention" class="blog-img" />
              </div>
              <div class="card-content">
                <h3 class="card-title text-center">Understanding Cybercrimes and How to Prevent Them</h3>
                <div class="text-center">
                  <NuxtLink to="/blog/blog-details-3/en" class="read-more">
                    Read More <i data-lucide="chevron-right"></i>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="blog-card">
              <div class="card-img-wrap">
                <img src="/assets/blog1.png" alt="Commercial Court System Developments" class="blog-img" />
              </div>
              <div class="card-content">
                <h3 class="card-title text-center">Key Developments in the Commercial Court System</h3>
                <div class="text-center">
                  <NuxtLink to="/blog/blog-details-1/en" class="read-more">
                    Read More <i data-lucide="chevron-right"></i>
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
}

.section-title {
  font-family: 'Inter', sans-serif;
  font-size: 2.25rem;
  font-weight: 800;
  color: #1a2b4b;
  margin-bottom: 20px;
  text-align: center;
}

.section-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  color: #5a6070;
  line-height: 1.7;
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
  font-family: 'Inter', sans-serif;
  font-size: 1.35rem;
  font-weight: 800;
  color: #1a2b4b;
  margin-bottom: 15px;
  line-height: 1.4;
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: 'Inter', sans-serif;
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
