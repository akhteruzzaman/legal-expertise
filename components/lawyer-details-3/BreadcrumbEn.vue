<template>
  <div class="breadcrumb-bar">
    <div class="container-fluid px-lg-5">
      <nav class="breadcrumb-nav">
        <a href="/">Home</a>
        <span class="sep"> / </span>
        <a href="#">Our Team</a>
        <span class="sep"> / </span>
        <span class="current">Attorney Abdullah bin Mohammed Al-Fadhli</span>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.breadcrumb-bar {
  background-color: #f5f0e6;
  padding: 18px 0;
  text-align: right;
}

.breadcrumb-nav {
  display: flex;
  align-items: center;
  font-size: 0.78rem;
  justify-content: flex-start;
  color: #6c757d;
  line-height: 1;
}

.breadcrumb-nav a {
  color: #6c757d;
  text-decoration: none;
}

.breadcrumb-nav a:hover {
  color: #c3a46e;
}

.sep {
  color: #9a9a9a;
}

.current {
  color: #1a222e;
  font-weight: 600;
}
</style>
