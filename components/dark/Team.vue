<template>
  <section class="team-section">
    <div class="container ">
        <h2 class="section-title-services mb-2">فريق العمل</h2>
        <p class="section-subtitle-services mb-5">
            يضم مكتبنا نخبة من المحامين والمستشارين القانونيين الذين يعملون بروح الفريق لتقديم أفضل الحلول القانونية لعملائنا.
        </p>

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
              '768': { slidesPerView: 2 },
              '992': { slidesPerView: 3 }
            }"
            class="team-swiper"
          >
            <!-- Team Member 1 -->
            <SwiperSlide>
                <div class="feature-card team-card h-100 text-center">
                    <div class="team-img-container mb-4">
                        <img src="/assets/team-members.png" alt="المحامي عبدالله بن محمد القحطاني" class="team-img">
                    </div>
                    <h3 class="feature-title">المحامي عبدالله بن محمد القحطاني</h3>
                    <p class="feature-text">
                        محام ومستشار قانوني متخصص في القضايا التجارية وصياغة العقود، يتمتع بخبرة عملية في تمثيل الشركات والأفراد.
                    </p>
                    <a href="#" class="details-link">تفاصيل أكثر <i data-lucide="chevron-left"
                            class="small-icon"></i></a>
                </div>
            </SwiperSlide>

            <!-- Team Member 2 -->
            <SwiperSlide>
                <div class="feature-card team-card h-100 text-center">
                    <div class="team-img-container mb-4">
                        <img src="/assets/team-members.png" alt="المحامي فهد بن سعود العتيبي" class="team-img">
                    </div>
                    <h3 class="feature-title">المحامي فهد بن سعود العتيبي</h3>
                    <p class="feature-text">
                        مختص في التقاضي والتمثيل أمام المحاكم، مع خبرة في القضايا المدنية والنزاعات القانونية المختلفة.
                    </p>
                    <a href="#" class="details-link">تفاصيل أكثر <i data-lucide="chevron-left"
                            class="small-icon"></i></a>
                </div>
            </SwiperSlide>

            <!-- Team Member 3 -->
            <SwiperSlide>
                <div class="feature-card team-card h-100 text-center">
                    <div class="team-img-container mb-4">
                        <img src="/assets/team-members.png" alt="المستشار القانوني أحمد بن خالد الحربي"
                            class="team-img">
                    </div>
                    <h3 class="feature-title">المستشار القانوني أحمد بن خالد الحربي</h3>
                    <p class="feature-text">
                        مستشار قانوني في شؤون الشركات والأنظمة التجارية، يقدم حلول قانونية مدروسة تدعم نمو الأعمال.
                    </p>
                    <a href="#" class="details-link">تفاصيل أكثر <i data-lucide="chevron-left"
                            class="small-icon"></i></a>
                </div>
            </SwiperSlide>

            <!-- Team Member 4 -->
            <SwiperSlide>
                <div class="feature-card team-card h-100 text-center">
                    <div class="team-img-container mb-4">
                        <img src="/assets/team-members.png" alt="المحامي خالد بن وليد" class="team-img">
                    </div>
                    <h3 class="feature-title">المحامي خالد بن وليد</h3>
                    <p class="feature-text">
                        متخصص في قضايا الأحوال الشخصية والمواريث، بخبرة واسعة في الترافع أمام محاكم الأحوال الشخصية.
                    </p>
                    <a href="#" class="details-link">تفاصيل أكثر <i data-lucide="chevron-left"
                            class="small-icon"></i></a>
                </div>
            </SwiperSlide>

            <!-- Team Member 5 -->
            <SwiperSlide>
                <div class="feature-card team-card h-100 text-center">
                    <div class="team-img-container mb-4">
                        <img src="/assets/team-members.png" alt="المستشارة نورة عبدالعزيز" class="team-img">
                    </div>
                    <h3 class="feature-title">المستشارة نورة عبدالعزيز</h3>
                    <p class="feature-text">
                        خبيرة في الأنظمة العمالية وحماية حقوق الموظفين، وتقديم الاستشارات في عقود العمل والتوظيف.
                    </p>
                    <a href="#" class="details-link">تفاصيل أكثر <i data-lucide="chevron-left"
                            class="small-icon"></i></a>
                </div>
            </SwiperSlide>

            <!-- Team Member 6 -->
            <SwiperSlide>
                <div class="feature-card team-card h-100 text-center">
                    <div class="team-img-container mb-4">
                        <img src="/assets/team-members.png" alt="المحامي فيصل عبدالرحمن" class="team-img">
                    </div>
                    <h3 class="feature-title">المحامي فيصل عبدالرحمن</h3>
                    <p class="feature-text">
                        متخصص في القضايا العقارية ومنازعات الأراضي، مع خبرة في توثيق العقود والإفراغ العقاري.
                    </p>
                    <a href="#" class="details-link">تفاصيل أكثر <i data-lucide="chevron-left"
                            class="small-icon"></i></a>
                </div>
            </SwiperSlide>
          </Swiper>

        </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay as SwiperAutoplay } from 'swiper/modules'
import 'swiper/css'
</script>

<style scoped>
.swiper-container-wrapper {
  position: relative;
}

.team-swiper {
  padding: 10px 5px 20px;
}
</style>
