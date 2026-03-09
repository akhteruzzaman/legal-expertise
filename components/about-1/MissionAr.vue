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
  padding: 50px 0;
  background-color: #ffffff;
  direction: rtl;
}

.mvv-card {
  background-color: #fcf8f3;
  padding: 50px 30px;
  border-radius: 35px;
  text-align: center;
  height: 100%;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mvv-card:hover {
  transform: translateY(-5px);
}

.icon-box {
  width: 60px;
  height: 60px;
  background-color: transparent;
  color: #c3a46e;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
}

.icon-box i {
  width: 45px;
  height: 45px;
  stroke-width: 1.5px;
}

.card-title {
  font-family: 'Cairo', sans-serif;
  font-weight: 800;
  font-size: 1.6rem;
  color: #0c142b;
  margin-bottom: 20px;
}

.card-text {
  font-family: 'Cairo', sans-serif;
  font-size: 1.05rem;
  line-height: 1.7;
  color: #444;
  margin: 0;
}

@media (max-width: 991px) {
  .mvv-card {
    padding: 40px 25px;
  }
}
</style>
