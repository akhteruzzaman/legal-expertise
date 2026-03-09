<template>
  <section class="mission-vision-values">
    <div class="container">
      <div class="row g-4 justify-content-center">
        <!-- رسالتنا -->
        <div class="col-lg-4 col-md-6">
          <div class="mvv-card">
            <div class="icon-box">
              <i data-lucide="target"></i>
            </div>
            <h3 class="card-title">رسالتنا</h3>
            <p class="card-text">
              تقديم خدمات قانونية عالية الجودة ترتكز على النزاهة والمهنية، مع الالتزام الكامل بمصالح عملائنا، والعمل على تحقيق أفضل النتائج الممكنة من خلال حلول قانونية مدروسة وعملية.
            </p>
          </div>
        </div>

        <!-- رؤيتنا -->
        <div class="col-lg-4 col-md-6">
          <div class="mvv-card">
            <div class="icon-box">
              <i data-lucide="telescope"></i>
            </div>
            <h3 class="card-title">رؤيتنا</h3>
            <p class="card-text">
              أن نكون شريكاً قانونياً موثوقاً ورائداً، يتميز بالكفاءة والاحترافية، ويسهم في تعزيز العدالة وبناء الثقة داخل المجتمع القانوني في المملكة العربية السعودية.
            </p>
          </div>
        </div>

        <!-- قيمنا -->
        <div class="col-lg-4 col-md-6">
          <div class="mvv-card">
            <div class="icon-box">
              <i data-lucide="gem"></i>
            </div>
            <h3 class="card-title">قيمنا</h3>
            <p class="card-text">
              نؤمن بأن النزاهة والاحترافية هما أساس العمل القانوني الناجح، لذلك نلتزم بأعلى المعايير الأخلاقية والمهنية في جميع تعاملاتنا.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  if (window.lucide) {
    window.lucide.createIcons()
  }
})
</script>

<style scoped>
.mission-vision-values {
  padding: 80px 0;
  background-color: #ffffff;
  direction: rtl;
}

.mvv-card {
  background-color: #ffffff; /* Removed background color */
  padding: 50px 35px;
  border: 1px solid #f2e8d5; /* Added light border as per sample */
  border-radius: 35px;
  text-align: right; /* Right aligned as per sample */
  height: 100%;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Standard RTL alignment */
  position: relative;
}

.mvv-card:hover {
  transform: translateY(-8px);
  border-color: #c3a46e;
  box-shadow: 0 15px 35px rgba(195, 164, 110, 0.1);
}

.icon-box {
  width: 100%;
  display: flex;
  justify-content: flex-start; /* Right side in RTL */
  margin-bottom: 25px;
  color: #c3a46e;
}

.icon-box i {
  width: 50px;
  height: 50px;
  stroke-width: 1.2px;
}

.card-title {
  font-family: 'Cairo', sans-serif;
  font-weight: 800;
  font-size: 1.7rem;
  color: #0c142b;
  margin-bottom: 20px;
  width: 100%;
  text-align: right;
}

.card-text {
  font-family: 'Cairo', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  margin: 0;
  width: 100%;
  text-align: right;
}

@media (max-width: 991px) {
  .mvv-card {
    padding: 40px 25px;
  }
  .card-title {
    font-size: 1.4rem;
  }
}
</style>
