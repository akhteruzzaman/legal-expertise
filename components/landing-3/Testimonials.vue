<template>
  <section class="testimonials-section">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="section-title mb-2 text-center">آراء عملائنا</h2>
        <p class="section-subtitle text-muted text-center">نعتز بثقة عملائنا ونسعى دائماً لتقديم خدمات قانونية ترتقي لتوقعاتهم.</p>
      </div>

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
            <div class="testimonial-card">
              <div class="testimonial-stars">
                <i data-lucide="star" fill="#c3a46e"></i>
                <i data-lucide="star" fill="#c3a46e"></i>
                <i data-lucide="star" fill="#c3a46e"></i>
                <i data-lucide="star" fill="#c3a46e"></i>
                <i data-lucide="star" fill="#c3a46e"></i>
              </div>
              <p class="testimonial-text">"تعامل راق وااحترافية عالية، حصلت على استشارة قانونية واضحة ساعدتني في اتخاذ القرار الصحيح بكل ثقة."</p>
              <div class="testimonial-author">
                <span class="testimonial-name">محمد بن عبدالله السبيعي</span>
                <span class="testimonial-role">رجل أعمال</span>
              </div>
            </div>
          </SwiperSlide>

          <!-- Testimonial 2 -->
          <SwiperSlide>
            <div class="testimonial-card">
              <div class="testimonial-stars">
                <i data-lucide="star" fill="#c3a46e"></i>
                <i data-lucide="star" fill="#c3a46e"></i>
                <i data-lucide="star" fill="#c3a46e"></i>
                <i data-lucide="star" fill="#c3a46e"></i>
                <i data-lucide="star" fill="#c3a46e"></i>
              </div>
              <p class="testimonial-text">"فريق قانوني متميز، متابعة دقيقة للقضية وتواصل مستمر حتى الوصول إلى نتيجة مرضية."</p>
              <div class="testimonial-author">
                <span class="testimonial-name">سارة بنت خالد العتيبي</span>
                <span class="testimonial-role">صاحبة منشأة</span>
              </div>
            </div>
          </SwiperSlide>

          <!-- Testimonial 3 -->
          <SwiperSlide>
            <div class="testimonial-card">
              <div class="testimonial-stars">
                <i data-lucide="star" fill="#c3a46e"></i>
                <i data-lucide="star" fill="#c3a46e"></i>
                <i data-lucide="star" fill="#c3a46e"></i>
                <i data-lucide="star" fill="#c3a46e"></i>
                <i data-lucide="star" fill="#c3a46e"></i>
              </div>
              <p class="testimonial-text">"خبرة قانونية وااضحة وحرص على مصلحة العميل، أنصح بالتعامل معهم لمن يبحث عن الثقة والمهنية."</p>
              <div class="testimonial-author">
                <span class="testimonial-name">عبدالرحمن بن فهد القحطاني</span>
                <span class="testimonial-role">مدير شركة</span>
              </div>
            </div>
          </SwiperSlide>

          <!-- Testimonial 4 -->
          <SwiperSlide>
            <div class="testimonial-card">
              <div class="testimonial-stars">
                <i data-lucide="star" fill="#c3a46e"></i>
                <i data-lucide="star" fill="#c3a46e"></i>
                <i data-lucide="star" fill="#c3a46e"></i>
                <i data-lucide="star" fill="#c3a46e"></i>
                <i data-lucide="star" fill="#c3a46e"></i>
              </div>
              <p class="testimonial-text">"خدمة ممتازة ودقة في المواعيد. مكتب محترف للغاية وتعاملهم يبعث على الاطمئنان."</p>
              <div class="testimonial-author">
                <span class="testimonial-name">خالد العتيبي</span>
                <span class="testimonial-role">عميل</span>
              </div>
            </div>
          </SwiperSlide>

          <!-- Testimonial 5 -->
          <SwiperSlide>
            <div class="testimonial-card">
              <div class="testimonial-stars">
                <i data-lucide="star" fill="#c3a46e"></i>
                <i data-lucide="star" fill="#c3a46e"></i>
                <i data-lucide="star" fill="#c3a46e"></i>
                <i data-lucide="star" fill="#c3a46e"></i>
                <i data-lucide="star" fill="#c3a46e"></i>
              </div>
              <p class="testimonial-text">"ساعدوني في حل قضية تجارية معقدة بنجاح باهر. خبرتهم في القانون التجاري لا تضاهى."</p>
              <div class="testimonial-author">
                <span class="testimonial-name">شركة النور العقارية</span>
                <span class="testimonial-role">شريك استراتيجي</span>
              </div>
            </div>
          </SwiperSlide>

          <!-- Testimonial 6 -->
          <SwiperSlide>
            <div class="testimonial-card">
              <div class="testimonial-stars">
                <i data-lucide="star" fill="#c3a46e"></i>
                <i data-lucide="star" fill="#c3a46e"></i>
                <i data-lucide="star" fill="#c3a46e"></i>
                <i data-lucide="star" fill="#c3a46e"></i>
                <i data-lucide="star" fill="#c3a46e"></i>
              </div>
              <p class="testimonial-text">"أنصح كل من لديه استشارة قانونية بالتوجه إليهم. سرعة في الرد وحلول قانونية مبتكرة."</p>
              <div class="testimonial-author">
                <span class="testimonial-name">ناصر الحربي</span>
                <span class="testimonial-role">مستشار أعمال</span>
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
  padding: 15px 5px 20px;
}
</style>
