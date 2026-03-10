<template>
  <section class="blog-terms-section">
    <div class="container">

      <div class="terms-inner">

        <!-- Intro -->
        <p class="intro-text">
          مرحبًا بك في الموقع الإلكتروني للمكتب القانوني. يهدف هذا الموقع إلى تقديم معلومات عامة عن خدمات المكتب القانونية، ولا يُعدّ استخدامه بديلًا عن الاستشارة القانونية المباشرة.
        </p>

        <!-- Terms Items -->
        <div class="terms-list">

        <!-- 1 -->
        <div class="terms-item">
          <h3 class="terms-title"><span class="term-num">1.</span> استخدام الموقع</h3>
          <p class="terms-text">
            يُشترط أن يكون عمر المستخدم 18 عامًا أو أكثر لاستخدام هذا الموقع. يلتزم المستخدم باستخدام الموقع لأغراض مشروعة فقط، ويُعدّ هذا الموقع موجّهًا بصفة أساسية للأشخاص المعنيين بها في المملكة العربية السعودية.
          </p>
        </div>

        <!-- 2 -->
        <div class="terms-item">
          <h3 class="terms-title"><span class="term-num">2.</span> طبيعة المحتوى</h3>
          <p class="terms-text">
            جميع المعلومات والمحتويات المتوفرة على الموقع هي لأغراض تعريفية فقط، ولا تشكل بأي حال من الأحوال استشارة قانونية. لا يُنشئ أي استخدام للموقع أي علاقة محامٍ وموكّل ما لم يكن ثمة اتفاق رسمي مكتوب.
          </p>
        </div>

        <!-- 3 -->
        <div class="terms-item">
          <h3 class="terms-title"><span class="term-num">3.</span> الاستشارات القانونية</h3>
          <p class="terms-text">
            أي طلب استشارة يتم عبر الموقع لا يُعدّ التزامًا بتقديم خدمة قانونية إلا بعد مراجعة الطلب والموافقة عليه من قِبل المكتب، وقبول أي طلب يستوجب توقيع اتفاق يحدد نطاق التمثيل المهني.
          </p>
        </div>

        <!-- 4 -->
        <div class="terms-item">
          <h3 class="terms-title"><span class="term-num">4.</span> الملكية الفكرية</h3>
          <p class="terms-text">
            جميع النصوص، الشعارات، التصاميم، والمحتويات المنشورة على هذا الموقع مملوكة للمكتب أو مرخّص باستخدامها، ولا يجوز نسخها أو إعادة استخدامها من دون موافقة خطية مسبقة.
          </p>
        </div>

        <!-- 5 -->
        <div class="terms-item">
          <h3 class="terms-title"><span class="term-num">5.</span> حدود المسؤولية</h3>
          <p class="terms-text">
            لا يتحمل المكتب مسؤولية أي أضرار مباشرة أو غير مباشرة قد تنشأ نتيجة استخدام الموقع أو الاعتماد على محتواه. كما لا يضمن الموقع خلوّه التام من الأخطاء التقنية أو انقطاع الخدمة.
          </p>
        </div>

        <!-- 6 -->
        <div class="terms-item">
          <h3 class="terms-title"><span class="term-num">6.</span> التعديلات على الشروط</h3>
          <p class="terms-text">
            يحتفظ المكتب بحقه في تعديل أو تحديث هذه الشروط في أي وقت دون إشعار مسبق. ويُعدّ استمرار استخدام الموقع بعد نشر التعديلات موافقةً ضمنية على الشروط المعدَّلة.
          </p>
        </div>

        <!-- 7 -->
        <div class="terms-item">
          <h3 class="terms-title"><span class="term-num">7.</span> إشعارات التعديلات</h3>
          <p class="terms-text">
            يحق للمكتب تعديل هذه الشروط في أي وقت. في حال إجراء تغييرات جوهرية، سيتم إخطار المستخدمين عبر البريد الإلكتروني أو من خلال إشعارات داخل المنصة. استمرار استخدام المنصة بعد اطلاعك على التعديلات يُعني موافقتك على الشروط الجديدة.
          </p>
        </div>
        </div>

      </div> <!-- /terms-inner -->
    </div>
  </section>
</template>

<style scoped>
.blog-terms-section {
  background-color: #ffffff;
  padding: 60px 0 80px;
  direction: rtl;
}

.terms-inner {
  max-width: 860px;
  margin: 0 auto;
}

.intro-text {
  font-family: 'Cairo', sans-serif;
  font-size: 0.92rem;
  color: #5a6070;
  line-height: 1.9;
  text-align: right;
  max-width: 720px;
  margin: 0 0 50px auto;
}

.terms-list {
  display: flex;
  flex-direction: column;
  gap: 36px;
}

.terms-item {
  text-align: right;
}

.terms-title {
  font-family: 'Cairo', sans-serif;
  font-size: 1.05rem;
  font-weight: 800;
  color: #1a2b4b;
  margin-bottom: 10px;
}

.term-num {
  color: #c3a46e;
}

.terms-text {
  font-family: 'Cairo', sans-serif;
  font-size: 0.9rem;
  color: #5a6070;
  line-height: 1.9;
  max-width: 700px;
  margin: 0 0 0 auto;
}

@media (max-width: 768px) {
  .intro-text { font-size: 0.87rem; }
  .terms-text { font-size: 0.85rem; }
  .terms-title { font-size: 0.98rem; }
}
</style>
