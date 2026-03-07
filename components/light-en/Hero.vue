<template>
  <section class="hero-section">
    <div class="container">
      <div class="row align-items-center gx-lg-5">
        <!-- Content Side (Right) -->
        <div class="col-lg-5 text-start hero-content ps-lg-0">
          <h1 class="hero-title text-start">Trusted legal expertise to protect your rights</h1>
          <p class="hero-subtitle text-start">
            We provide professional legal services for individuals and companies, based on expertise, integrity, and strict adherence to the highest professional standards.
          </p>
          <a href="#" class="btn-hero">Request Consultation</a>
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
