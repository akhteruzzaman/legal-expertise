<template>
  <section class="mission-section">
    <div class="container px-lg-5">
      <div class="mission-grid">
        <!-- Row 1: Mission (Full Width) -->
        <div class="row mb-4">
          <div class="col-12">
            <div class="mission-card full-width">
              <div class="icon-box">
                <i data-lucide="target" class="gold-icon"></i>
              </div>
              <div class="card-content">
                <h3 class="card-title">رسالتنا</h3>
                <p class="card-text">
                  تقديم خدمات قانونية عالية الجودة ترتكز على النزاهة والمهنية، مع الالتزام الكامل بمصالح عملائنا، والعمل على تحقيق أفضل النتائج الممكنة من خلال حلول قانونية مدروسة وعملية.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Row 2: Values & Vision (Half Width) -->
        <div class="row">
          <div class="col-md-6 mb-4 mb-md-0">
            <div class="mission-card">
              <div class="icon-box">
                <i data-lucide="gem" class="gold-icon"></i>
              </div>
              <div class="card-content">
                <h3 class="card-title">قيمنا</h3>
                <p class="card-text">
                  نؤمن بأن النزاهة والاحترافية هما أساس العمل القانوني الناجح، لذلك نلتزم بأعلى المعايير الأخلاقية والمهنية في جميع تعاملاتنا.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mission-card">
              <div class="icon-box">
                <i data-lucide="telescope" class="gold-icon"></i>
              </div>
              <div class="card-content">
                <h3 class="card-title">رؤيتنا</h3>
                <p class="card-text">
                  أن نكون شريكا قانونيا موثوقا ورائدا، يتميز بالكفاءة والاحترافية، ويسهم في تعزيز العدالة وبناء الثقة داخل المجتمع القانوني في المملكة العربية السعودية.
                </p>
              </div>
            </div>
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
.mission-section {
  padding: 80px 0;
  background-color: #ffffff;
  direction: rtl;
}

.mission-card {
  background-color: #fcf8f3;
  border-radius: 35px;
  padding: 50px 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.3s ease;
  text-align: right;
}

.mission-card:hover {
  transform: translateY(-5px);
}

.icon-box {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 25px;
}

.gold-icon {
  width: 45px;
  height: 45px;
  color: #c3a46e;
  stroke-width: 1.5;
}

.card-title {
  font-family: 'Cairo', sans-serif;
  font-weight: 800;
  font-size: 1.8rem;
  color: #0c142b;
  margin-bottom: 20px;
}

.card-text {
  font-family: 'Cairo', sans-serif;
  font-size: 1.15rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 0;
}

@media (max-width: 991px) {
  .mission-card {
    padding: 40px 30px;
  }
  .card-title {
    font-size: 1.5rem;
  }
  .card-text {
    font-size: 1.05rem;
  }
}
</style>
