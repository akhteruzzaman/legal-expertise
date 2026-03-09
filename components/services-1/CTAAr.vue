<template>
  <section class="cta-section">
    <div class="container">
      <div class="cta-container">
        <div class="cta-pattern"></div>
        <div class="cta-content">
          <h2 class="cta-title">هل تحتاج إلى دعم قانوني؟</h2>
          <p class="cta-subtitle">احصل على استشارة قانونية من فريقنا المتخصص، ودعنا نساعدك في اتخاذ القرار القانوني الصحيح.</p>
          <a href="#" class="cta-btn">طلب استشارة قانونية</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  padding-bottom: 20px;
}

.cta-container {
  background-color: #fff7e8;
  border-radius: 15px;
  padding: 40px 100px;
  position: relative;
  overflow: hidden;
  margin: 0 -100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 40px;
}

.cta-pattern {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 86c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm66-3c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm-46-45c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm54 54c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM58 7c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2zM6 46c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2zM33 0c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2zM50 94c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2zM44 47c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z' fill='%23c3a46e' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
  opacity: 0.5;
}

.cta-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
}

.cta-title {
  color: #101c3b;
  font-family: 'Cairo', sans-serif;
  font-weight: 800;
  font-size: 2.2rem;
  margin-bottom: 15px;
}

.cta-subtitle {
  color: #616161;
  font-family: 'Cairo', sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 30px;
}

.cta-btn {
  display: inline-block;
  background-color: #c3a46e;
  color: white;
  text-decoration: none;
  padding: 12px 35px;
  border-radius: 8px;
  font-family: 'Cairo', sans-serif;
  font-weight: 700;
  transition: all 0.3s ease;
}

.cta-btn:hover {
  background-color: #101c3b;
  transform: translateY(-3px);
  color: white;
}

@media (max-width: 991px) {
  .cta-container {
    margin: 0;
    padding: 40px;
    justify-content: center;
    text-align: center;
  }
}
</style>
