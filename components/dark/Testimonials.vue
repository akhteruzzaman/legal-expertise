<template>
  <section class="testimonials-section">
    <div class="container ">
        <h2 class="section-title-services mb-2">آراء عملائنا</h2>
        <p class="section-subtitle-services mb-5">
            نعتز بثقة عملائنا ونسعى دائماً لتقديم خدمات قانونية ترتقي لتوقعاتهم.
        </p>

        <div class="swiper-container-wrapper">
          <Swiper
            :modules="[SwiperAutoplay]"
            :slides-per-view="1"
            :space-between="30"
            :dir="'rtl'"
            :loop="true"
            :autoplay="{
              delay: 4000,
              disableOnInteraction: false,
            }"
            :breakpoints="{
              '768': { slidesPerView: 2 },
              '1024': { slidesPerView: 3 }
            }"
            class="testimonials-swiper"
          >
            <!-- Testimonial 1 -->
            <SwiperSlide>
                <div class="feature-card testimonial-card h-100">
                    <div class="star-rating mb-3">
                        <i data-lucide="star" class="star-icon"></i>
                        <i data-lucide="star" class="star-icon"></i>
                        <i data-lucide="star" class="star-icon"></i>
                        <i data-lucide="star" class="star-icon"></i>
                        <i data-lucide="star" class="star-icon"></i>
                    </div>
                    <p class="feature-text testimonial-text mb-4">
                        "تعامل راقٍ واحترافية عالية، حصلت على استشارة قانونية واضحة ساعدتني في اتخاذ القرار الصحيح بكل ثقة."
                    </p>
                    <div class="reviewer-info">
                        <h4 class="reviewer-name">محمد بن عبدالله السبيعي</h4>
                        <span class="reviewer-role">رجل أعمال</span>
                    </div>
                </div>
            </SwiperSlide>

            <!-- Testimonial 2 -->
            <SwiperSlide>
                <div class="feature-card testimonial-card h-100">
                    <div class="star-rating mb-3">
                        <i data-lucide="star" class="star-icon"></i>
                        <i data-lucide="star" class="star-icon"></i>
                        <i data-lucide="star" class="star-icon"></i>
                        <i data-lucide="star" class="star-icon"></i>
                        <i data-lucide="star" class="star-icon"></i>
                    </div>
                    <p class="feature-text testimonial-text mb-4">
                        "فريق قانوني متميز، متابعة دقيقة للقضية وتواصل مستمر حتى الوصول إلى نتيجة مرضية."
                    </p>
                    <div class="reviewer-info">
                        <h4 class="reviewer-name">سارة بنت خالد العتيبي</h4>
                        <span class="reviewer-role">صاحبة منشأة</span>
                    </div>
                </div>
            </SwiperSlide>

            <!-- Testimonial 3 -->
            <SwiperSlide>
                <div class="feature-card testimonial-card h-100">
                    <div class="star-rating mb-3">
                        <i data-lucide="star" class="star-icon"></i>
                        <i data-lucide="star" class="star-icon"></i>
                        <i data-lucide="star" class="star-icon"></i>
                        <i data-lucide="star" class="star-icon"></i>
                        <i data-lucide="star" class="star-icon"></i>
                    </div>
                    <p class="feature-text testimonial-text mb-4">
                        "خبرة قانونية واضحة وحرص على مصلحة العميل، أنصح بالتعامل معهم لمن يبحث عن الثقة والمهنية."
                    </p>
                    <div class="reviewer-info">
                        <h4 class="reviewer-name">عبدالرحمن بن فهد القحطاني</h4>
                        <span class="reviewer-role">مدير شركة</span>
                    </div>
                </div>
            </SwiperSlide>

            <!-- Testimonial 4 -->
            <SwiperSlide>
                <div class="feature-card testimonial-card h-100">
                    <div class="star-rating mb-3">
                        <i data-lucide="star" class="star-icon"></i>
                        <i data-lucide="star" class="star-icon"></i>
                        <i data-lucide="star" class="star-icon"></i>
                        <i data-lucide="star" class="star-icon"></i>
                        <i data-lucide="star" class="star-icon"></i>
                    </div>
                    <p class="feature-text testimonial-text mb-4">
                        "خدمة ممتازة ودقة في المواعيد. مكتب محترف للغاية وتعاملهم يبعث على الاطمئنان في كل خطوة."
                    </p>
                    <div class="reviewer-info">
                        <h4 class="reviewer-name">خالد العتيبي</h4>
                        <span class="reviewer-role">عميل</span>
                    </div>
                </div>
            </SwiperSlide>

            <!-- Testimonial 5 -->
            <SwiperSlide>
                <div class="feature-card testimonial-card h-100">
                    <div class="star-rating mb-3">
                        <i data-lucide="star" class="star-icon"></i>
                        <i data-lucide="star" class="star-icon"></i>
                        <i data-lucide="star" class="star-icon"></i>
                        <i data-lucide="star" class="star-icon"></i>
                        <i data-lucide="star" class="star-icon"></i>
                    </div>
                    <p class="feature-text testimonial-text mb-4">
                        "ساعدوني في حل قضية تجارية معقدة بنجاح باهر. خبرتهم في القانون التجاري لا تضاهى في المنطقة."
                    </p>
                    <div class="reviewer-info">
                        <h4 class="reviewer-name">شركة النور العقارية</h4>
                        <span class="reviewer-role">شريك استراتيجي</span>
                    </div>
                </div>
            </SwiperSlide>

            <!-- Testimonial 6 -->
            <SwiperSlide>
                <div class="feature-card testimonial-card h-100">
                    <div class="star-rating mb-3">
                        <i data-lucide="star" class="star-icon"></i>
                        <i data-lucide="star" class="star-icon"></i>
                        <i data-lucide="star" class="star-icon"></i>
                        <i data-lucide="star" class="star-icon"></i>
                        <i data-lucide="star" class="star-icon"></i>
                    </div>
                    <p class="feature-text testimonial-text mb-4">
                        "أنصح كل من لديه استشارة قانونية بالتوجه إليهم. سرعة في الرد واهتمام بالتفاصيل وحلول قانونية مبتكرة."
                    </p>
                    <div class="reviewer-info">
                        <h4 class="reviewer-name">ناصر الحربي</h4>
                        <span class="reviewer-role">مستشار أعمال</span>
                    </div>
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

.testimonials-swiper {
  padding: 10px 5px 20px;
}
</style>
