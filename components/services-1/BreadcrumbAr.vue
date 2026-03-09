<template>
  <div class="breadcrumb-bar">
    <div class="container py-2">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item"><a href="/">الرئيسية</a></li>
          <li class="breadcrumb-item"><a href="/services">خدماتنا</a></li>
          <li class="breadcrumb-item active" aria-current="page">الاستشارات القانونية</li>
        </ol>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.breadcrumb-bar {
  background-color: #fcf8f3;
  border-bottom: 1px solid rgba(195, 164, 110, 0.1);
}

.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
}

.breadcrumb-item {
  font-family: 'Cairo', sans-serif;
  font-size: 0.85rem;
  color: #616161;
  display: flex;
  align-items: center;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: "/";
  padding: 0 8px;
  color: #c3a46e;
}

.breadcrumb-item a {
  color: #616161;
  text-decoration: none;
  transition: color 0.3s ease;
}

.breadcrumb-item a:hover {
  color: #c3a46e;
}

.breadcrumb-item.active {
  color: #101c3b;
  font-weight: 600;
}

@media (max-width: 768px) {
  .breadcrumb-item {
    font-size: 0.75rem;
  }
}
</style>
