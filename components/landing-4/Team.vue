<template>
  <section class="team-section">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="section-title mb-2 text-center">فريق العمل</h2>
        <p class="section-subtitle text-muted text-center">يضم مكتبنا نخبة من المحامين والمستشارين القانونيين الذين يعملون بروح الفريق لتقديم أفضل الحلول القانونية لعملائنا.</p>
      </div>
      
      <div class="swiper-container-wrapper">
        <Swiper
          :modules="[SwiperAutoplay]"
          :slides-per-view="1"
          :space-between="30"
          :dir="'rtl'"
          :loop="true"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          :breakpoints="{
            '640': { slidesPerView: 2 },
            '992': { slidesPerView: 3 },
            '1200': { slidesPerView: 4 }
          }"
          class="team-swiper"
        >
          <!-- Member 1 -->
          <SwiperSlide>
            <div class="team-card">
              <div class="team-img-wrapper">
                <img src="/assets/team-members.png" alt="المحامي عبدالله بن محمد القحطاني">
              </div>
              <h4 class="team-member-name">المحامي عبدالله بن محمد القحطاني</h4>
              <p class="team-member-role">محام ومستشار قانوني متخصص في القضايا التجارية وصياغة العقود، يتمتع بخبرة عملية في تمثيل الشركات والأفراد.</p>
              <a href="#" class="team-link">تفاصيل أكثر <i data-lucide="chevron-left"></i></a>
            </div>
          </SwiperSlide>

          <!-- Member 2 -->
          <SwiperSlide>
            <div class="team-card">
              <div class="team-img-wrapper">
                <img src="/assets/team-members.png" alt="المحامي فهد بن سعود العتيبي">
              </div>
              <h4 class="team-member-name">المحامي فهد بن سعود العتيبي</h4>
              <p class="team-member-role">مختص في التقاضي والتمثيل أمام المحاكم، مع خبرة في القضايا المدنية والنزاعات القانونية المختلفة.</p>
              <a href="#" class="team-link">تفاصيل أكثر <i data-lucide="chevron-left"></i></a>
            </div>
          </SwiperSlide>

          <!-- Member 3 -->
          <SwiperSlide>
            <div class="team-card">
              <div class="team-img-wrapper">
                <img src="/assets/team-members.png" alt="المستشار القانوني أحمد بن خالد الحربي">
              </div>
              <h4 class="team-member-name">المستشار القانوني أحمد بن خالد الحربي</h4>
              <p class="team-member-role">مستشار قانوني في شؤون الشركات والأنظمة التجارية، يقدم حلولاً قانونية مدروسة تدعم نمو الأعمال.</p>
              <a href="#" class="team-link">تفاصيل أكثر <i data-lucide="chevron-left"></i></a>
            </div>
          </SwiperSlide>

          <!-- Member 4 -->
          <SwiperSlide>
            <div class="team-card">
              <div class="team-img-wrapper">
                <img src="/assets/team-members.png" alt="المحامي">
              </div>
              <h4 class="team-member-name">المحامي</h4>
              <p class="team-member-role">مختص في القضايا المدنية، مع خبرة في الدفاع عن حقوق العملاء وفق الأنظمة والقوانين.</p>
              <a href="#" class="team-link">تفاصيل أكثر <i data-lucide="chevron-left"></i></a>
            </div>
          </SwiperSlide>

          <!-- Member 5 -->
          <SwiperSlide>
            <div class="team-card">
              <div class="team-img-wrapper">
                <img src="/assets/team-members.png" alt="المحامي خالد بن وليد">
              </div>
              <h4 class="team-member-name">المحامي خالد بن وليد</h4>
              <p class="team-member-role">متخصص في قضايا الأحوال الشخصية والمواريث، بخبرة واسعة في الترافع أمام محاكم الأحوال الشخصية.</p>
              <a href="#" class="team-link">تفاصيل أكثر <i data-lucide="chevron-left"></i></a>
            </div>
          </SwiperSlide>

          <!-- Member 6 -->
          <SwiperSlide>
            <div class="team-card">
              <div class="team-img-wrapper">
                <img src="/assets/team-members.png" alt="المستشارة نورة عبدالعزيز">
              </div>
              <h4 class="team-member-name">المستشارة نورة عبدالعزيز</h4>
              <p class="team-member-role">خبيرة في الأنظمة العمالية وحماية حقوق الموظفين، وتقديم الاستشارات في عقود العمل والتوظيف.</p>
              <a href="#" class="team-link">تفاصيل أكثر <i data-lucide="chevron-left"></i></a>
            </div>
          </SwiperSlide>

          <!-- Member 7 -->
          <SwiperSlide>
            <div class="team-card">
              <div class="team-img-wrapper">
                <img src="/assets/team-members.png" alt="المحامي فيصل عبدالرحمن">
              </div>
              <h4 class="team-member-name">المحامي فيصل عبدالرحمن</h4>
              <p class="team-member-role">متخصص في القضايا العقارية ومنازعات الأراضي، مع خبرة في توثيق العقود والإفراغ العقاري.</p>
              <a href="#" class="team-link">تفاصيل أكثر <i data-lucide="chevron-left"></i></a>
            </div>
          </SwiperSlide>
        </Swiper>

      </div>
    </div>
  </section>
</template>

<script setup>
// Swiper is automatically available in Nuxt if registered, 
// otherwise we use the direct components if swiper is installed as a dependency.
// For this environment, we'll use the components directly from the package.
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay as SwiperAutoplay } from 'swiper/modules'
import 'swiper/css'
</script>

<style scoped>
.swiper-container-wrapper {
  position: relative;
}

.team-swiper {
  padding: 15px 5px 20px;
}
</style>
