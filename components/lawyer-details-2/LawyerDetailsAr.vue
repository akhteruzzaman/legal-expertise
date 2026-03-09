<template>
  <section class="details-section">
    <div class="container">

      <!-- نبذة عن المحامي -->
      <div class="details-block">
        <h2 class="block-title">نبذة عن المحامي</h2>
        <p class="block-text">
          محام ومستشار قانوني يتمتع بخبرة عملية في القضايا التجارية وصياغة العقود. ويعمل على تقديم حلول قانونية متكاملة تخدم مصالح الشركات والأفراد وفق الأنظمة المعتمدة في المملكة العربية السعودية، يتميز بالدقة في دراسة القضايا، والقدرة على تحليل المخاطر القانونية، وتقديم استشارات واضحة تساعد العملاء على اتخاذ قرارات قانونية صحيحة.
        </p>
      </div>

      <!-- مجالات التخصص -->
      <div class="details-block">
        <h2 class="block-title">مجالات التخصص</h2>
        <ul class="details-list">
          <li>القضايا التجارية وقانون الشركات</li>
          <li>صياغة ومراجعة العقود والاتفاقيات</li>
          <li>الاستشارات القانونية للشركات</li>
          <li>التمثيل القانوني في النزاعات التجارية</li>
          <li>تسوية النزاعات التفاوضية</li>
        </ul>
      </div>

      <!-- المؤهلات والخبرة -->
      <div class="details-block">
        <h2 class="block-title">المؤهلات والخبرة</h2>
        <ul class="details-list">
          <li>محام مرخص في المملكة العربية السعودية</li>
          <li>خبرة في التعامل مع ملفات الشركات والأفراد</li>
          <li>متابعة مستمرة للتحديثات التنظيمية والتشريعية</li>
        </ul>
      </div>

      <!-- منهجية العمل -->
      <div class="details-block">
        <h2 class="block-title">منهجية العمل</h2>
        <p class="block-text">
          يحرص على فهم احتياجات العميل بشكل دقيق، ودراسة كل قضية بعناية، مع تقديم حلول قانونية عملية قائمة على الأنظمة والنوائح ذات الصلة، بما يحقق أفضل النتائج الممكنة.
        </p>
      </div>

    </div>
  </section>
</template>

<style scoped>
.details-section {
  background-color: #ffffff;
  padding: 50px 0 30px;
  direction: rtl;
}

.details-block {
  margin-bottom: 40px;
  max-width: 780px;
  margin-left: auto;
  text-align: right;
}

.block-title {
  font-family: 'Cairo', sans-serif;
  font-size: 1.2rem;
  font-weight: 800;
  color: #1a2b4b;
  margin-bottom: 14px;
}

.block-text {
  font-family: 'Cairo', sans-serif;
  font-size: 0.9rem;
  color: #4a4a4a;
  line-height: 1.95;
}

.details-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.details-list li {
  font-family: 'Cairo', sans-serif;
  font-size: 0.9rem;
  color: #4a4a4a;
  line-height: 2;
}
</style>
