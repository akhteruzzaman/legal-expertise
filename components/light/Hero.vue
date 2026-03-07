<template>
  <section class="hero-section">
    <div class="container">
      <div class="row align-items-center gx-lg-5">
        <!-- Content Side (Right) -->
        <div class="col-lg-5  hero-content ps-lg-0">
          <h1 class="hero-title ">خبرة قانونية موثوقة لحماية حقوقك</h1>
          <p class="hero-subtitle ">
            نقدم خدمات قانونية احترافية للأفراد والشركات، تعتمد على الخبرة، النزاهة، والالتزام التام بأعلى المعايير المهنية.
          </p>
          <a href="#" class="btn-hero">طلب استشارة قانونية</a>
        </div>
        <!-- Image Side (Left) -->
        <div class="col-lg-7">
          <div class="hero-img-container">
            <img src="/assets/home-bg-light.jpg" alt="Legal Expertise" class="hero-img">
            <div v-if="showPlayButton" class="play-button">
              <i data-lucide="play"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  showPlayButton: {
    type: Boolean,
    default: true
  }
})
</script>
