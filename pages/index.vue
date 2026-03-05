<template>
  <div class="selection-page">
    <div class="container">
      <div class="logo-wrapper text-center">
        <img src="/assets/logo-dark.png" alt="Logo" class="main-logo">
      </div>
      
      <h1 class="text-center main-title">Choose Your Version</h1>
      <p class="text-center subtitle">Select the theme and language for the Law Firm experience</p>

      <div class="row g-4 mt-4 justify-content-center">
        <!-- Light Arabic -->
        <div class="col-md-5 col-lg-3">
          <NuxtLink to="/light/ar" class="choice-card">
            <div class="icon-box light">
              <i data-lucide="sun"></i>
            </div>
            <div class="content">
              <h3>النسخة الفاتحة</h3>
              <span>العربية</span>
            </div>
          </NuxtLink>
        </div>

        <!-- Light English -->
        <div class="col-md-5 col-lg-3">
          <NuxtLink to="/light/en" class="choice-card">
            <div class="icon-box light">
              <i data-lucide="sun"></i>
            </div>
            <div class="content">
              <h3>Light Version</h3>
              <span>English</span>
            </div>
          </NuxtLink>
        </div>

        <!-- Dark Arabic -->
        <div class="col-md-5 col-lg-3">
          <NuxtLink to="/dark/ar" class="choice-card dark">
            <div class="icon-box dark">
              <i data-lucide="moon"></i>
            </div>
            <div class="content">
              <h3>النسخة الداكنة</h3>
              <span>العربية</span>
            </div>
          </NuxtLink>
        </div>

        <!-- Dark English -->
        <div class="col-md-5 col-lg-3">
          <NuxtLink to="/dark/en" class="choice-card dark">
            <div class="icon-box dark">
              <i data-lucide="moon"></i>
            </div>
            <div class="content">
              <h3>Dark Version</h3>
              <span>English</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

useHead({
  title: 'Al Riyadh Law Firm | Version Selection',
  link: [
    { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' }
  ],
  script: [
    { src: 'https://unpkg.com/lucide@latest' }
  ]
})

onMounted(() => {
  if (window.lucide) {
    window.lucide.createIcons()
  }
})
</script>

<style scoped>
.selection-page {
  min-height: 100vh;
  background-color: #0c142b; /* Deep navy from dark theme */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  color: white;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

.main-logo {
  height: 80px;
  margin-bottom: 30px;
}

.main-title {
  font-weight: 800;
  font-size: 2.5rem;
  color: #c3a46e; /* Gold */
  margin-bottom: 10px;
}

.subtitle {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
  margin-bottom: 40px;
}

.choice-card {
  display: block;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  height: 100%;
}

.choice-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.1);
  border-color: #c3a46e;
}

.icon-box {
  width: 60px;
  height: 60px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
}

.icon-box.light {
  background: #f8f9fa;
  color: #c3a46e;
}

.icon-box.dark {
  background: #1a222e;
  color: #c3a46e;
}

.icon-box i {
  width: 30px;
  height: 30px;
}

.content h3 {
  font-weight: 700;
  font-size: 1.25rem;
  color: white;
  margin-bottom: 5px;
}

.content span {
  color: #c3a46e;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .main-title { font-size: 2rem; }
  .choice-card { padding: 20px; }
}
</style>
