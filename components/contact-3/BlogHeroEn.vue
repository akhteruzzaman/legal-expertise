<template>
  <section class="blog-main-section">


    <!-- Articles Grid -->
    <ClientOnly>
      <div class="container-xl mt-5 mb-5 px-lg-3">
        <!-- Rows - duplicated 5 times total -->
        <div v-for="i in 5" :key="i" class="row g-5 justify-content-center mb-5">
          <!-- Card 1 -->
          <div class="col-md-6 col-lg-4">
            <div class="blog-card-v2">
              <div class="card-img-wrap-v2">
                <img src="/assets/b1.png" alt="Importance of Legal Consultation" class="blog-img-v2" />
              </div>
              <div class="card-content-v2">
                <h3 class="card-title-v2">The Importance of Legal Consultation Before Signing Contracts</h3>
                <p class="card-description-v2">
                  Learn about the importance of obtaining legal advice before signing any contract, and how it contributes to protecting your rights and avoiding legal risks.
                </p>
                <NuxtLink to="/blog/blog-details-1/en" class="read-more-v2">
                  <span>Read More</span> <i data-lucide="chevron-right"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
          <!-- Card 2 -->
          <div class="col-md-6 col-lg-4">
            <div class="blog-card-v2">
              <div class="card-img-wrap-v2">
                <img src="/assets/b2.png" alt="Arbitration vs Litigation" class="blog-img-v2" />
              </div>
              <div class="card-content-v2">
                <h3 class="card-title-v2">When do you need to resort to arbitration instead of litigation?</h3>
                <p class="card-description-v2">
                  A simplified explanation of the differences between arbitration and litigation, and when arbitration is the most appropriate option for resolving disputes.
                </p>
                <NuxtLink to="/blog/blog-details-2/en" class="read-more-v2">
                  <span>Read More</span> <i data-lucide="chevron-right"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
          <!-- Card 3 -->
          <div class="col-md-6 col-lg-4">
            <div class="blog-card-v2">
              <div class="card-img-wrap-v2">
                <img src="/assets/b3.png" alt="Startup Legal Mistakes" class="blog-img-v2" />
              </div>
              <div class="card-content-v2">
                <h3 class="card-title-v2">The most prominent legal mistakes made by startups</h3>
                <p class="card-description-v2">
                  We review the most common legal mistakes among startups, with practical tips to avoid them from the beginning.
                </p>
                <NuxtLink to="/blog/blog-details-3/en" class="read-more-v2">
                  <span>Read More</span> <i data-lucide="chevron-right"></i>
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
  text-align: left;
  font-family: 'Inter', sans-serif;
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
  font-family: 'Inter', sans-serif;
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
  font-family: 'Inter', sans-serif;
  font-size: 1.35rem;
  font-weight: 800;
  color: #1a2b4b;
  margin-bottom: 15px;
  line-height: 1.4;
  text-align: left;
  width: 100%;
}

.card-description-v2 {
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  color: #5a6070;
  line-height: 1.7;
  margin-bottom: 25px;
  text-align: left;
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
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: #c3a46e;
  text-decoration: none;
  transition: all 0.3s ease;
  align-self: flex-start;
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
