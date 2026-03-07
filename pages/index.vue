<template>
  <div class="selection-page">
    <div class="container text-center">
      <div class="logo-wrapper">
        <img src="/assets/logo-dark.png" alt="Logo" class="main-logo">
      </div>
      
      <Transition name="fade" mode="out-in">
        <!-- Step 1: Theme Selection -->
        <div v-if="!selectedTheme" key="step1">
          <h1 class="main-title">Choose Your Version</h1>
          <p class="subtitle">Select the theme for your Legal Law experience</p>

          <div class="row g-4 mt-4 justify-content-center">
            <!-- Landing Page 1 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'landing-page-1'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="sun"></i>
                </div>
                <div class="content">
                  <h3>Landing Page 1</h3>
                  <span>Light Version</span>
                </div>
              </div>
            </div>

            <!-- Landing Page 2 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'landing-page-2'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="sun"></i>
                </div>
                <div class="content">
                  <h3>Landing Page 2</h3>
                  <span>Light Version</span>
                </div>
              </div>
            </div>

            <!-- Landing Page 3 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'landing-page-3'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="sun"></i>
                </div>
                <div class="content">
                  <h3>Landing Page 3</h3>
                  <span>Light Version</span>
                </div>
              </div>
            </div>

            <!-- Landing Page 4 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'landing-page-4'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="sun"></i>
                </div>
                <div class="content">
                  <h3>Landing Page 4</h3>
                  <span>Light Version</span>
                </div>
              </div>
            </div>

            <!-- Landing Page 5 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'landing-page-5'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="sun"></i>
                </div>
                <div class="content">
                  <h3>Landing Page 5</h3>
                  <span>Light Version</span>
                </div>
              </div>
            </div>

            <!-- Landing Page Dark -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'landing-page-dark'" class="choice-card dark clickable">
                <div class="icon-box dark">
                  <i data-lucide="moon"></i>
                </div>
                <div class="content">
                  <h3>Landing Page Dark</h3>
                  <span>Dark Version</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 2: Language Selection -->
        <div v-else key="step2">
          <h1 class="main-title">{{ (selectedTheme === 'landing-page-5' || selectedTheme === 'landing-page-4' || selectedTheme === 'landing-page-3' || selectedTheme === 'landing-page-1' || selectedTheme === 'landing-page-2') ? 'Light Version' : 'Dark Version' }}</h1>
          <p class="subtitle">Select your preferred language</p>

          <div class="row g-4 mt-4 justify-content-center">
            <!-- Arabic -->
            <div class="col-md-5 col-lg-4">
              <NuxtLink :to="`/${selectedTheme}/ar`" class="choice-card">
                <div class="icon-box gold">
                  <i data-lucide="languages"></i>
                </div>
                <div class="content">
                  <h3>العربية</h3>
                  <span>Arabic</span>
                </div>
              </NuxtLink>
            </div>

            <!-- English -->
            <div class="col-md-5 col-lg-4">
              <NuxtLink :to="`/${selectedTheme}/en`" class="choice-card">
                <div class="icon-box gold">
                  <i data-lucide="languages"></i>
                </div>
                <div class="content">
                  <h3>English</h3>
                  <span>English</span>
                </div>
              </NuxtLink>
            </div>
          </div>

          <div class="mt-5">
            <button @click="selectedTheme = null" class="btn-back">
              <i data-lucide="arrow-left"></i>
              Back to Versions
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const selectedTheme = ref(null)

useHead({
  title: 'Al Riyadh Law Firm | Version Selection',
  link: [
    { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' }
  ],
  script: [
    { src: 'https://unpkg.com/lucide@latest' }
  ]
})

const initIcons = () => {
  if (window.lucide) {
    window.lucide.createIcons()
  }
}

onMounted(() => {
  initIcons()
})

// Re-initialize icons when switching steps
watch(selectedTheme, () => {
  setTimeout(initIcons, 50)
})
</script>

<style scoped>
.selection-page {
  min-height: 100vh;
  background-color: #0c142b;
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
  color: #c3a46e;
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
  padding: 40px 30px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  height: 100%;
  cursor: pointer;
}

.choice-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.1);
  border-color: #c3a46e;
}

.icon-box {
  width: 70px;
  height: 70px;
  margin: 0 auto 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
}

.icon-box.light {
  background: #f8f9fa;
  color: #c3a46e;
}

.icon-box.dark {
  background: #1a222e;
  color: #c3a46e;
}

.icon-box.gold {
  background: rgba(195, 164, 110, 0.1);
  color: #c3a46e;
  border: 1px solid rgba(195, 164, 110, 0.3);
}

.icon-box i {
  width: 35px;
  height: 35px;
}

.content h3 {
  font-weight: 700;
  font-size: 1.5rem;
  color: white;
  margin-bottom: 8px;
}

.content span {
  color: #c3a46e;
  font-weight: 600;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.btn-back {
  background: transparent;
  border: 1px solid rgba(195, 164, 110, 0.5);
  color: #c3a46e;
  padding: 12px 25px;
  border-radius: 12px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
}

.btn-back:hover {
  background: rgba(195, 164, 110, 0.1);
  border-color: #c3a46e;
  transform: translateX(-5px);
}

.btn-back i {
  width: 20px;
  height: 20px;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 768px) {
  .main-title { font-size: 2rem; }
  .choice-card { padding: 30px 20px; }
}
</style>

