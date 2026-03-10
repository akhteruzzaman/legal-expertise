<template>
  <div class="terms-content-wrapper pb-5" dir="rtl">
    <div class="container container-boxed">
      <div class="terms-inner-card animate-up">
        <div class="update-date mb-4 text-start">
          تاريخ آخر تحديث: ١٦ يناير ٢٠٢٤
        </div>
        
        <div class="terms-intro mb-5 animate-up text-start">
          <p>
            باستخدامك لهذا الموقع، فإنك توافق على سياسة الخصوصية الموضحة أدناه.
          </p>
          <p>
            نحن نولي خصوصية زوارنا وعملائنا أهمية قصوى، ونلتزم بحماية جميع البيانات والمعلومات الشخصية التي يتم جمعها عبر هذا الموقع، وذلك وفق الأنظمة المعمول بها في المملكة العربية السعودية.
          </p>
        </div>

        <div class="terms-sections">
          <div class="terms-item mb-5 animate-up text-start">
            <h3 class="item-title mb-3">1. المعلومات التي نقوم بجمعها</h3>
            <p class="item-text">
              قد نقوم بجمع بعض المعلومات الشخصية عند استخدامك للموقع، مثل:
              <ul class="ms-4 mt-2">
                <li>الاسم</li>
                <li>رقم الهاتف</li>
                <li>البريد الإلكتروني</li>
                <li>أي معلومات يتم إدخالها عبر نماذج التواصل أو طلب الاستشارة</li>
              </ul>
              يتم جمع هذه المعلومات فقط عند تقديمها بشكل تطوعي من قبل المستخدم.
            </p>
          </div>

          <div class="terms-item mb-5 animate-up text-start">
            <h3 class="item-title mb-3">2. استخدام المعلومات</h3>
            <p class="item-text">
              نستخدم المعلومات التي يتم جمعها للأغراض التالية:
              <ul class="ms-4 mt-2">
                <li>الرد على الاستفسارات وطلبات التواصل</li>
                <li>تقديم الاستشارات أو الخدمات القانونية المطلوبة</li>
                <li>تحسين تجربة المستخدم على الموقع</li>
                <li>التواصل مع المستخدم عند الحاجة وبما يخدم الغرض القانوني أو الخدمي</li>
              </ul>
            </p>
          </div>

          <div class="terms-item mb-5 animate-up text-start">
            <h3 class="item-title mb-3">3. حماية المعلومات</h3>
            <p class="item-text">
              نلتزم باتخاذ التدابير التقنية والتنظيمية المناسبة لحماية المعلومات الشخصية من الوصول غير المصرح به أو التعديل أو الإفصاح أو الإتلاف.
            </p>
          </div>

          <div class="terms-item mb-5 animate-up text-start">
            <h3 class="item-title mb-3">4. سرية المعلومات</h3>
            <p class="item-text">
              نلتزم بالحفاظ على سرية جميع البيانات والمعلومات التي يتم تزويدنا بها، ولا يتم مشاركتها مع أي طرف ثالث إلا في الحالات التي يفرضها النظام أو بموافقة صريحة من صاحب البيانات.
            </p>
          </div>

          <div class="terms-item mb-5 animate-up text-start">
            <h3 class="item-title mb-3">5. ملفات تعريف الارتباط (Cookies)</h3>
            <p class="item-text">
              قد يستخدم الموقع ملفات تعريف الارتباط لتحسين تجربة المستخدم وتحليل أداء الموقع. يمكن للمستخدم التحكم في إعدادات ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص به.
            </p>
          </div>

          <div class="terms-item mb-0 animate-up text-start">
            <h3 class="item-title mb-3">8. التعديلات على سياسة الخصوصية</h3>
            <p class="item-text">
              يحتفظ المكتب بحقه في تعديل أو تحديث سياسة الخصوصية في أي وقت، يتم نشر أي تحديث على هذه الصفحة، ويعد استمرار استخدام الموقع موافقة على التعديلات.
            </p>
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
