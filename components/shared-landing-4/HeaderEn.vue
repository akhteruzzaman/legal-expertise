<template>
  <nav class="navbar navbar-expand-lg landing-2-navbar">
    <div class="container-fluid px-lg-5">
      <!-- Logo on the Left (English) -->
      <NuxtLink class="navbar-brand me-lg-4" to="/">
        <img src="/assets/logo-dark.png" alt="Logo" class="logo-img">
      </NuxtLink>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <!-- Center Navigation -->
        <ul class="navbar-nav mx-auto">
          <li class="nav-item"><NuxtLink class="nav-link" to="/">Home</NuxtLink></li>
          <li class="nav-item"><a class="nav-link" href="#">About Us</a></li>
          <li class="nav-item"><NuxtLink class="nav-link active-gold" to="#">Services</NuxtLink></li>
          <li class="nav-item"><a class="nav-link" href="#">Our Team</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Blog</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Contact Us</a></li>
        </ul>

        <!-- Right Consultation Button -->
        <div class="d-flex">
          <a href="#" class="btn btn-consult-white rounded-pill">Request Consultation</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.landing-2-navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: transparent !important;
  padding: 30px 40px;
}

.logo-img {
  height: 65px;
}

.nav-link {
  color: #ffffff !important;
  font-weight: 600;
  margin: 0 12px;
  font-size: 1.05rem;
  transition: opacity 0.3s;
  opacity: 0.9;
}

.nav-link:hover, .nav-link.active-gold {
  opacity: 1;
  color: #c3a46e !important;
}

.btn-consult-white {
  background-color: #f5f0e6;
  color: #1a222e !important;
  border-radius: 12px;
  padding: 12px 28px;
  font-weight: 700;
  border: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.btn-consult-white:hover {
  transform: translateY(-2px);
  background-color: #ffffff;
}

@media (max-width: 991px) {
  .landing-2-navbar {
    padding: 15px 20px;
  }
}
</style>
