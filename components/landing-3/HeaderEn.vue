<template>
  <header class="landing-3-header py-3 bg-white">
    <div class="container-fluid px-lg-5">
      <div class="d-flex align-items-center justify-content-between w-100">
        <!-- Left: Logo -->
        <div class="header-logo-left">
          <NuxtLink to="/landing-page-3/en" class="navbar-brand">
            <img src="/assets/logo-light.png" alt="Logo" class="logo-img">
          </NuxtLink>
        </div>

        <!-- Center: Navigation -->
        <div class="header-nav-center d-none d-lg-block">
          <ul class="nav justify-content-center">
            <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#">About Us</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Services</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Our Team</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Blog</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Contact Us</a></li>
          </ul>
        </div>

        <!-- Right: Consultation Button (Cream) -->
        <div class="header-action-right">
          <a href="#" class="btn-consult-cream">Request Consultation</a>
        </div>

        <!-- Mobile Toggler -->
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navCollapseEn">
          <i data-lucide="menu"></i>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div class="collapse d-lg-none mt-3" id="navCollapseEn">
        <ul class="nav flex-column text-center">
          <li class="nav-item py-2"><a class="nav-link" href="#">Home</a></li>
          <li class="nav-item py-2"><a class="nav-link" href="#">About Us</a></li>
          <li class="nav-item py-2"><a class="nav-link" href="#">Services</a></li>
          <li class="nav-item py-2"><a class="nav-link" href="#">Our Team</a></li>
          <li class="nav-item py-2"><a class="nav-link" href="#">Blog</a></li>
          <li class="nav-item py-2"><a class="nav-link" href="#">Contact Us</a></li>
          <li class="nav-item py-2 mt-2">
            <a href="#" class="btn-consult-cream w-100">Request Consultation</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
.logo-img {
  height: 60px;
}

.nav-link {
  color: #1a2b4b !important;
  font-weight: 600;
  margin: 0 10px;
  font-size: 1rem;
  transition: color 0.3s;
}

.nav-link:hover, .nav-link.active {
  color: #c3a46e !important;
}

.btn-consult-cream {
  background-color: #fcf9f2;
  color: #1a2b4b !important;
  border-radius: 50px;
  padding: 10px 25px;
  font-weight: 700;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: inline-block;
  white-space: nowrap;
}

.btn-consult-cream:hover {
  background-color: #f5f0e6;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.navbar-toggler {
  border: none;
  color: #1a2b4b;
  padding: 0;
}

@media (max-width: 991px) {
  .logo-img {
    height: 45px;
  }
}
</style>
