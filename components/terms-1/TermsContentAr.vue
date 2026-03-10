<template>
  <div class="terms-content-wrapper pb-5" dir="rtl">
    <div class="container container-boxed">
      <div class="terms-inner-card animate-up">
        <div class="update-date mb-4 text-start">
          تاريخ آخر تحديث: ١٤ يناير ٢٠٢٤
        </div>
        
        <div class="terms-intro mb-5 text-start">
          <p>يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام هذا الموقع. باستخدامك للموقع أو أي من خدماتنا، فإنك توافق على الالتزام بهذه الشروط بصفتك مستخدماً للموقع.</p>
          <p>مرحباً بك في الموقع الإلكتروني لمكتبنا القانوني. يهدف هذا الموقع إلى تقديم معلومات عامة عن خدماتنا القانونية، ولا يعد استخدامه بديلاً عن الاستشارة القانونية المباشرة.</p>
        </div>

        <div class="terms-sections">
          <div class="terms-item mb-5 text-start">
            <h3 class="item-title">١. استخدام الموقع</h3>
            <p class="item-text">يشترط أن يكون عمر المستخدم ١٨ عاماً أو أكثر لاستخدام هذا الموقع. يلتزم المستخدم باستخدام الموقع لأغراض مشروعة فقط، وبما لا يخالف الأنظمة المعمول بها في المملكة العربية السعودية.</p>
          </div>

          <div class="terms-item mb-5 text-start">
            <h3 class="item-title">٢. طبيعة المحتوى</h3>
            <p class="item-text">جميع المعلومات والمحتويات المتوفرة على الموقع هي لأغراض تعريفية عامة فقط، ولا تشكل بأي حال من الأحوال استشارة قانونية ملزمة. لا ينشأ عن استخدام الموقع أي علاقة محامي وموكل إلا بعد اتفاق رسمي مكتوب.</p>
          </div>

          <div class="terms-item mb-5 text-start">
            <h3 class="item-title">٣. الاستشارات القانونية</h3>
            <p class="item-text">أي طلب لاستشارة يتم عبر الموقع أو نماذج التواصل لا يعد التزاماً بتقديم خدمة قانونية إلا بعد مراجعة الطلب والموافقة عليه من قبل المكتب. يحق للمكتب قبول أو رفض أي طلب، وفق تقديره المهني.</p>
          </div>

          <div class="terms-item mb-5 text-start">
            <h3 class="item-title">٤. الملكية الفكرية</h3>
            <p class="item-text">جميع النصوص، الشعارات، التصاميم، والمحتويات المعروضة على الموقع مملوكة للمكتب أو مرخص باستخدامها، ولا يجوز نسخها أو إعادة استخدامها أو نشرها دون موافقة خطية مسبقة.</p>
          </div>

          <div class="terms-item mb-5 text-start">
            <h3 class="item-title">٥. حدود المسؤولية</h3>
            <p class="item-text">لا يتحمل المكتب أي مسؤولية عن أي أضرار مباشرة أو غير مباشرة قد تنشأ نتيجة استخدام الموقع أو الاعتماد على محتواه، كما لا يضمن الموقع خلوه من الأخطاء التقنية أو انقطاع الخدمة.</p>
          </div>

          <div class="terms-item mb-5 text-start">
            <h3 class="item-title">٦. التعديلات على الشروط</h3>
            <p class="item-text">يحتفظ المكتب بحقه في تعديل أو تحديث هذه الشروط في أي وقت دون إشعار مسبق. ويعد استمرار استخدام الموقع موافقة على الشروط المعدلة.</p>
          </div>

          <div class="terms-item mb-0 text-start">
            <h3 class="item-title">٧. سياسة الخصوصية والتغييرات الجوهرية</h3>
            <p class="item-text">يحق للمكتب تعديل هذه الشروط في أي وقت. في حال إجراء تغييرات جوهرية، سيتم إخطار المستخدمين عبر البريد الإلكتروني أو من خلال إشعارات داخل المنصة. استمرار استخدام المنصة بعد التعديلات يعني موافقتك على الشروط الجديدة.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.terms-content-wrapper {
  background-color: #ffffff;
  padding-top: 20px;
  text-align: right;
}

.container-boxed {
  padding: 0 20px;
}

.terms-inner-card {
  background: #ffffff;
  padding: 60px 80px;
  border-radius: 25px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.03);
}

.update-date {
  color: #cda656;
  font-weight: 700;
  font-size: 1rem;
}

.terms-intro p {
  color: #1a222e;
  font-size: 1.15rem;
  line-height: 2;
  font-weight: 400;
}

.item-title {
  color: #1a222e;
  font-weight: 800;
  font-size: 1.6rem;
  margin-bottom: 15px;
}

.item-text {
  color: #666;
  font-size: 1.1rem;
  line-height: 1.9;
  font-weight: 400;
}

.animate-up {
  animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 991px) {
  .terms-inner-card {
    padding: 40px 30px;
  }
  
  .item-title {
    font-size: 1.4rem;
  }
  
  .terms-intro p {
    font-size: 1.05rem;
  }
}
</style>
