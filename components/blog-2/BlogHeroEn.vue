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

    <!-- Search and Filter Bar -->
    <div class="container mb-5">
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
                  placeholder="Search for topic .."
                >
              </div>
            </div>
            <!-- Category Dropdown -->
            <div class="dropdown-box">
              <div class="dropdown-pill d-flex align-items-center justify-content-between px-4">
                <i data-lucide="chevron-down" class="me-2 icon-gray small-icon"></i>
                <span>All Topics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Articles Grid -->
    <ClientOnly>
      <div class="container mt-5 mb-5">
        <!-- Row 5 - duplicated 5 times total -->
        <div class="row g-5 justify-content-center mb-5">
          <div class="col-md-6 col-lg-4">
            <div class="blog-card-v2">
              <div class="card-img-wrap-v2">
                <img src="/assets/b1.png" alt="Labor Judiciary" class="blog-img-v2" />
              </div>
              <div class="card-content-v2">
                <h3 class="card-title-v2">Labor Judiciary and Its Procedures in Saudi Arabia</h3>
                <NuxtLink to="/blog/blog-details-1/en" class="read-more-v2">
                  <span>Read More</span> <i data-lucide="chevron-right"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="blog-card-v2">
              <div class="card-img-wrap-v2">
                <img src="/assets/b2.png" alt="Construction Contracts" class="blog-img-v2" />
              </div>
              <div class="card-content-v2">
                <h3 class="card-title-v2">Mastering Construction and Contracting Agreement Laws</h3>
                <NuxtLink to="/blog/blog-details-2/en" class="read-more-v2">
                  <span>Read More</span> <i data-lucide="chevron-right"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="blog-card-v2">
              <div class="card-img-wrap-v2">
                <img src="/assets/b3.png" alt="Venture Capital" class="blog-img-v2" />
              </div>
              <div class="card-content-v2">
                <h3 class="card-title-v2">Venture Capital and Financing Legal frameworks</h3>
                <NuxtLink to="/blog/blog-details-3/en" class="read-more-v2">
                  <span>Read More</span> <i data-lucide="chevron-right"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <div class="row g-5 justify-content-center mb-5">
          <div class="col-md-6 col-lg-4">
            <div class="blog-card-v2">
              <div class="card-img-wrap-v2">
                <img src="/assets/b1.png" alt="Labor Judiciary" class="blog-img-v2" />
              </div>
              <div class="card-content-v2">
                <h3 class="card-title-v2">Labor Judiciary and Its Procedures in Saudi Arabia</h3>
                <NuxtLink to="/blog/blog-details-1/en" class="read-more-v2">
                  <span>Read More</span> <i data-lucide="chevron-right"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="blog-card-v2">
              <div class="card-img-wrap-v2">
                <img src="/assets/b2.png" alt="Construction Contracts" class="blog-img-v2" />
              </div>
              <div class="card-content-v2">
                <h3 class="card-title-v2">Mastering Construction and Contracting Agreement Laws</h3>
                <NuxtLink to="/blog/blog-details-2/en" class="read-more-v2">
                  <span>Read More</span> <i data-lucide="chevron-right"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="blog-card-v2">
              <div class="card-img-wrap-v2">
                <img src="/assets/b3.png" alt="Venture Capital" class="blog-img-v2" />
              </div>
              <div class="card-content-v2">
                <h3 class="card-title-v2">Venture Capital and Financing Legal frameworks</h3>
                <NuxtLink to="/blog/blog-details-3/en" class="read-more-v2">
                  <span>Read More</span> <i data-lucide="chevron-right"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <div class="row g-5 justify-content-center mb-5">
          <div class="col-md-6 col-lg-4">
            <div class="blog-card-v2">
              <div class="card-img-wrap-v2">
                <img src="/assets/b1.png" alt="Labor Judiciary" class="blog-img-v2" />
              </div>
              <div class="card-content-v2">
                <h3 class="card-title-v2">Labor Judiciary and Its Procedures in Saudi Arabia</h3>
                <NuxtLink to="/blog/blog-details-1/en" class="read-more-v2">
                  <span>Read More</span> <i data-lucide="chevron-right"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="blog-card-v2">
              <div class="card-img-wrap-v2">
                <img src="/assets/b2.png" alt="Construction Contracts" class="blog-img-v2" />
              </div>
              <div class="card-content-v2">
                <h3 class="card-title-v2">Mastering Construction and Contracting Agreement Laws</h3>
                <NuxtLink to="/blog/blog-details-2/en" class="read-more-v2">
                  <span>Read More</span> <i data-lucide="chevron-right"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="blog-card-v2">
              <div class="card-img-wrap-v2">
                <img src="/assets/b3.png" alt="Venture Capital" class="blog-img-v2" />
              </div>
              <div class="card-content-v2">
                <h3 class="card-title-v2">Venture Capital and Financing Legal frameworks</h3>
                <NuxtLink to="/blog/blog-details-3/en" class="read-more-v2">
                  <span>Read More</span> <i data-lucide="chevron-right"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <div class="row g-5 justify-content-center mb-5">
          <div class="col-md-6 col-lg-4">
            <div class="blog-card-v2">
              <div class="card-img-wrap-v2">
                <img src="/assets/b1.png" alt="Labor Judiciary" class="blog-img-v2" />
              </div>
              <div class="card-content-v2">
                <h3 class="card-title-v2">Labor Judiciary and Its Procedures in Saudi Arabia</h3>
                <NuxtLink to="/blog/blog-details-1/en" class="read-more-v2">
                  <span>Read More</span> <i data-lucide="chevron-right"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="blog-card-v2">
              <div class="card-img-wrap-v2">
                <img src="/assets/b2.png" alt="Construction Contracts" class="blog-img-v2" />
              </div>
              <div class="card-content-v2">
                <h3 class="card-title-v2">Mastering Construction and Contracting Agreement Laws</h3>
                <NuxtLink to="/blog/blog-details-2/en" class="read-more-v2">
                  <span>Read More</span> <i data-lucide="chevron-right"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="blog-card-v2">
              <div class="card-img-wrap-v2">
                <img src="/assets/b3.png" alt="Venture Capital" class="blog-img-v2" />
              </div>
              <div class="card-content-v2">
                <h3 class="card-title-v2">Venture Capital and Financing Legal frameworks</h3>
                <NuxtLink to="/blog/blog-details-3/en" class="read-more-v2">
                  <span>Read More</span> <i data-lucide="chevron-right"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <div class="row g-5 justify-content-center">
          <div class="col-md-6 col-lg-4">
            <div class="blog-card-v2">
              <div class="card-img-wrap-v2">
                <img src="/assets/b1.png" alt="Labor Judiciary" class="blog-img-v2" />
              </div>
              <div class="card-content-v2">
                <h3 class="card-title-v2">Labor Judiciary and Its Procedures in Saudi Arabia</h3>
                <NuxtLink to="/blog/blog-details-1/en" class="read-more-v2">
                  <span>Read More</span> <i data-lucide="chevron-right"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="blog-card-v2">
              <div class="card-img-wrap-v2">
                <img src="/assets/b2.png" alt="Construction Contracts" class="blog-img-v2" />
              </div>
              <div class="card-content-v2">
                <h3 class="card-title-v2">Mastering Construction and Contracting Agreement Laws</h3>
                <NuxtLink to="/blog/blog-details-2/en" class="read-more-v2">
                  <span>Read More</span> <i data-lucide="chevron-right"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="blog-card-v2">
              <div class="card-img-wrap-v2">
                <img src="/assets/b3.png" alt="Venture Capital" class="blog-img-v2" />
              </div>
              <div class="card-content-v2">
                <h3 class="card-title-v2">Venture Capital and Financing Legal frameworks</h3>
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

/* Blog Card V2 Styles (3 Columns) */
.blog-card-v2 {
  transition: transform 0.3s ease;
  margin-bottom: 20px;
}

.blog-card-v2:hover {
  transform: translateY(-10px);
}

.card-img-wrap-v2 {
  width: 100%;
  aspect-ratio: 0.85 / 1;
  border-radius: 45px;
  overflow: hidden;
  margin-bottom: 25px;
  background-color: #f8f9fa;
  box-shadow: 0 15px 40px rgba(0,0,0,0.04);
}

.blog-img-v2 {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content-v2 {
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.card-title-v2 {
  font-family: 'Inter', sans-serif;
  font-size: 1.15rem;
  font-weight: 800;
  color: #1a2b4b;
  margin-bottom: 12px;
  line-height: 1.5;
  text-align: left;
  width: 100%;
}

.read-more-v2 {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: #c3a46e;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-left: auto;
}

.read-more-v2:hover {
  color: #1a2b4b;
  gap: 12px;
}

.read-more-v2 i {
  width: 18px;
  height: 18px;
}
</style>
