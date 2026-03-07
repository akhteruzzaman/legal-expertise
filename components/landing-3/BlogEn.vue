<template>
  <div class="blog-outer-wrapper">
    <section class="blog-section-inner pt-5 pb-5">
      <div class="container py-4">
        <div class="row justify-content-center mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-title mb-3 text-center">Legal Blog</h2>
            <p class="section-subtitle text-center">We share simplified legal articles highlighting regulations and legislation, helping individuals and companies understand their rights and make informed legal decisions.</p>
          </div>
        </div>
        
        <div class="row g-4 px-lg-5 justify-content-center">
          <!-- Card 1 -->
          <div class="col-lg-6 col-md-10">
            <div class="blog-card-v3 h-100">
              <div class="blog-img-wrapper mb-4">
                <img src="/assets/blog1.png" alt="The Importance of Legal Consultation before Signing Contracts" class="img-fluid">
              </div>
              <div class="blog-content">
                <h3 class="blog-title mb-3">The Importance of Legal Consultation before Signing Contracts</h3>
                <p class="blog-description mb-4">Learn about the importance of getting a legal consultation before signing any contract, and how it helps protect your rights and avoid legal risks.</p>
                <a href="#" class="blog-link">Read More <i data-lucide="chevron-right"></i></a>
              </div>
            </div>
          </div>
          
          <!-- Card 2 -->
          <div class="col-lg-6 col-md-10">
            <div class="blog-card-v3 h-100">
              <div class="blog-img-wrapper mb-4">
                <img src="/assets/blog3.png" alt="The Most Prominent Legal Mistakes Made by Startups" class="img-fluid">
              </div>
              <div class="blog-content">
                <h3 class="blog-title mb-3">The Most Prominent Legal Mistakes Made by Startups</h3>
                <p class="blog-description mb-4">We review the most common legal mistakes made by startups, with practical advice on how to avoid them from the start.</p>
                <a href="#" class="blog-link">Read More <i data-lucide="chevron-right"></i></a>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Action Button -->
        <div class="text-center mt-5">
          <a href="#" class="btn-blog-main">Read More</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
</script>

<style scoped>
.blog-outer-wrapper {
  padding: 20px;
  background-color: #ffffff;
}

.blog-section-inner {
  background-color: #f9f6f0; /* Cream background as per screenshot */
  border-radius: 40px;
  overflow: hidden;
  padding: 80px 0;
}

.section-title {
  color: #1a2b4b;
  font-weight: 800;
  font-size: 2.25rem;
  text-align: center;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #1a2b4b;
  opacity: 0.8;
  line-height: 1.6;
  text-align: center;
}

.blog-card-v3 {
  background: #ffffff;
  border-radius: 35px;
  padding: 20px;
  border: none;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  text-align: center;
  align-items: center;
}

.blog-card-v3:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.04);
}

.blog-img-wrapper {
  width: 100%;
  overflow: hidden;
  border-radius: 25px;
}

.blog-img-wrapper img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.blog-card-v3:hover .blog-img-wrapper img {
  transform: scale(1.05);
}

.blog-content {
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.blog-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: #1a2b4b;
  line-height: 1.4;
  margin-bottom: 1rem;
}

.blog-description {
  font-size: 1rem;
  color: #1a2b4b;
  opacity: 0.7;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.blog-link {
  color: #c5a059;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: opacity 0.3s ease;
}

.blog-link:hover {
  opacity: 0.8;
}

.blog-link i {
  width: 18px;
  height: 18px;
}

.btn-blog-main {
  background-color: #1a2b4b;
  color: #ffffff !important;
  padding: 14px 50px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
}

.btn-blog-main:hover {
  background-color: #132038;
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

@media (max-width: 991px) {
  .blog-section-inner {
    padding: 60px 0;
    border-radius: 30px;
  }
  .blog-title {
    font-size: 1.2rem;
  }
}
</style>
