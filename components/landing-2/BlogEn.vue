<template>
  <section class="blog-section">
    <div class="container">
      <div class="blog-outer-wrapper pt-5 pb-5">
        <div class="text-center mb-5">
          <h2 class="section-title mb-2 text-center">Legal Blog</h2>
          <p class="section-subtitle text-muted text-center">We share simplified legal articles highlighting regulations and legislation, helping individuals and companies understand their rights and make informed legal decisions.</p>
        </div>
        <div class="row g-4 px-lg-5">
          <!-- Blog 1 - Smaller Column (Left in LTR) -->
          <div class="col-lg-4">
            <div class="blog-card h-100">
              <div class="blog-img-wrapper mb-4">
                <img src="/assets/blog3.png" alt="The Most Prominent Legal Mistakes Made by Startups" class="img-fluid rounded-4">
              </div>
              <div class="blog-content">
                <h3 class="blog-title mb-3">The Most Prominent Legal Mistakes Made by Startups</h3>
                <p class="blog-description mb-4">We review the most common legal mistakes made by startups, with practical advice on how to avoid them from the start.</p>
                <a href="#" class="blog-link">Read More <i data-lucide="chevron-right"></i></a>
              </div>
            </div>
          </div>
          <!-- Blog 2 - Larger Column (Right in LTR) -->
          <div class="col-lg-8">
            <div class="blog-card wide-card h-100">
              <div class="blog-img-wrapper wide-img mb-4">
                <img src="/assets/blog1.png" alt="The Importance of Legal Consultation before Signing Contracts" class="img-fluid rounded-4">
              </div>
              <div class="blog-content">
                <h3 class="blog-title mb-3">The Importance of Legal Consultation before Signing Contracts</h3>
                <p class="blog-description mb-4">Learn about the importance of getting a legal consultation before signing any contract, and how it helps protect your rights and avoid legal risks.</p>
                <a href="#" class="blog-link">Read More <i data-lucide="chevron-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.blog-outer-wrapper {
  background-color: #fdfbf7;
  border-radius: 40px;
  padding: 60px 20px;
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
  text-align: left;
}

.blog-description {
  font-size: 0.95rem;
  color: #6c757d;
  line-height: 1.7;
  text-align: left;
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

@media (max-width: 992px) {
  .wide-img img {
    height: 250px;
  }
}
</style>
