<template>
  <section class="hero-section">
    <!-- Navigation is technically inside Hero in dark theme's absolute position -->
    <slot name="nav"></slot>

    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="hero-title">خبرة قانونية موثوقة<br>لحماية حقوقك</h1>
      <p class="hero-subtitle">
        نقدم خدمات قانونية احترافية للأفراد والشركات،<br>
        تعتمد على الخبرة، النزاهة، والالتزام التام بأعلى<br>
        المعايير المهنية.
      </p>
      <a href="#" class="hero-btn">طلب استشارة قانونية</a>
    </div>
    <!-- Section Title at bottom right of background -->
    <h2 class="section-title-hero">لماذا يثق بنا عملاؤنا</h2>
  </section>
</template>

<script setup>
</script>
