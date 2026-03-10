<template>
  <nav class="navbar navbar-expand-lg landing-2-navbar">
    <div class="container-fluid px-lg-5">
      <!-- Logo on the Right (Arabic) -->
      <NuxtLink class="navbar-brand me-lg-4 ms-0" to="/">
        <div class="logo-with-text">
          <img src="/assets/logo-dark.png" alt="Logo" class="logo-img">
        </div>
      </NuxtLink>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <!-- Center Navigation -->
        <ul class="navbar-nav mx-auto">
          <li class="nav-item"><NuxtLink class="nav-link" to="/">الرئيسية</NuxtLink></li>
          <li class="nav-item"><a class="nav-link" href="#">من نحن</a></li>
          <li class="nav-item"><NuxtLink class="nav-link active-gold" to="#">خدماتنا</NuxtLink></li>
          <li class="nav-item"><a class="nav-link" href="#">فريق العمل</a></li>
          <li class="nav-item"><a class="nav-link" href="#">المدونة</a></li>
          <li class="nav-item"><a class="nav-link" href="#">تواصل معنا</a></li>
        </ul>
      </div>
      <!-- Left Consultation Button -->
      <div class="d-flex align-items-center">
        <a href="#" class="btn btn-consult-white rounded-pill">طلب استشارة قانونية</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.landing-2-navbar {
  position: absolute;
  top: 20px;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: #1a2b4b !important;
  padding: 30px 40px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin: 0 20px;
  width: calc(100% - 40px);
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
  color: #cda656 !important;
}

.btn-consult-white {
  background-color: #f5f0e6;
  color: #1a222e !important;
  border-radius: 30px;
  padding: 12px 28px;
  font-weight: 700;
  border: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.btn-consult-white:hover {
  transform: translateY(-2px);
  background-color: #ffffff;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

@media (max-width: 991px) {
  .landing-2-navbar {
    padding: 15px 20px;
  }
}
</style>
