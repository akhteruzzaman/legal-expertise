<template>
  <section class="hero-section">
    <!-- Navigation is technically inside Hero in dark theme's absolute position -->
    <slot name="nav"></slot>

    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="hero-title">Trusted legal expertise<br>to protect your rights</h1>
      <p class="hero-subtitle">
        We provide professional legal services for individuals and companies,<br>
        based on expertise, integrity, and absolute commitment to the highest<br>
        professional standards.
      </p>
      <a href="#" class="hero-btn">Request Legal Consultation</a>
    </div>
    <!-- Section Title at bottom right of background -->
    <h2 class="section-title-hero">Why Our Clients Trust Us</h2>
  </section>
</template>

<script setup>
</script>
