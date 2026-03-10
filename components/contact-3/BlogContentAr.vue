<template>
  <section class="details-section">
    <div class="container">

      <!-- مقدمة المقال -->
      <div class="details-block">
        <h2 class="block-title">مقدمة</h2>
        <p class="block-text">
          تُعدّ العقود التجارية ركيزةً أساسية في منظومة الأعمال داخل المملكة العربية السعودية، إذ تحكم العلاقات بين الأطراف وتُرسي حقوق والتزامات كلٍّ منهم. وتستمد هذه العقود قوتها الملزِمة من نظام التجارة وما يرتبط به من أنظمة ولوائح تنفيذية.
        </p>
      </div>

      <!-- أركان العقد -->
      <div class="details-block">
        <h2 class="block-title">أركان العقد التجاري</h2>
        <ul class="details-list">
          <li>الإيجاب والقبول: التعبير الصريح لكلا الطرفين عن إرادتهما</li>
          <li>الأهلية القانونية: توافر الأهلية الكاملة لدى المتعاقدين</li>
          <li>المحل: وجود موضوع مشروع للعقد</li>
          <li>السبب: وجود غرض مشروع من إبرام العقد</li>
        </ul>
      </div>

      <!-- الأحكام الجوهرية -->
      <div class="details-block">
        <h2 class="block-title">الأحكام الجوهرية</h2>
        <ul class="details-list">
          <li>وجوب تحديد الالتزامات بصورة واضحة وصريحة</li>
          <li>تضمين آليات فض النزاعات وفق الأنظمة المعتمدة</li>
          <li>مراعاة أحكام نظام التحكيم في حال الاتفاق عليه</li>
          <li>الامتثال للوائح هيئة السوق المالية فيما يخص العقود المالية</li>
        </ul>
      </div>

      <!-- خاتمة -->
      <div class="details-block">
        <h2 class="block-title">خاتمة</h2>
        <p class="block-text">
          يُسهم الفهم الدقيق لأحكام العقود التجارية في حماية حقوق الأطراف وتجنيب الشركات النزاعات القانونية المكلفة. ولذلك يُنصح دائمًا بالاستعانة بمستشار قانوني متخصص عند صياغة أي عقد أو مراجعته.
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
