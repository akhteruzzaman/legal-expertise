<template>
  <section class="testimonials-section">
    <div class="container ">
        <h2 class="section-title-services mb-2">Our Clients' Reviews</h2>
        <p class="section-subtitle-services mb-5">
            We cherish the trust of our clients and always strive to provide legal services exceeding their expectations.
        </p>

        <div class="swiper-container-wrapper">
          <Swiper
            :modules="[SwiperAutoplay]"
            :slides-per-view="1"
            :space-between="30"
            :dir="'ltr'"
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
                        "Elegant dealing and high professionalism, I got clear legal consultation helping me make the right decision with confidence."
                    </p>
                    <div class="reviewer-info">
                        <h4 class="reviewer-name">Mohammed bin Abdullah Al-Subaie</h4>
                        <span class="reviewer-role">Businessman</span>
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
                        "Outstanding legal team, precise case tracking, and continuous communication until reaching a satisfactory result."
                    </p>
                    <div class="reviewer-info">
                        <h4 class="reviewer-name">Sarah bint Khalid Al-Otaibi</h4>
                        <span class="reviewer-role">Business Owner</span>
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
                        "Clear legal expertise and care for the client's interest, I advise dealing with them for those seeking trust and professionalism."
                    </p>
                    <div class="reviewer-info">
                        <h4 class="reviewer-name">Abdulrahman bin Fahad Al-Qahtani</h4>
                        <span class="reviewer-role">Company Manager</span>
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
                        "Excellent service and punctuality. A highly professional office and their treatment is reassuring for any legal matter."
                    </p>
                    <div class="reviewer-info">
                        <h4 class="reviewer-name">Khalid Al-Otaibi</h4>
                        <span class="reviewer-role">Client</span>
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
                        "They helped us solve a complex commercial case with great success. Their expertise in commercial law is truly unmatched in the region."
                    </p>
                    <div class="reviewer-info">
                        <h4 class="reviewer-name">Al-Noor Real Estate Co.</h4>
                        <span class="reviewer-role">Strategic Partner</span>
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
                        "I advise anyone with a legal consultation to go to them. Fast response, attention to detail, and many innovative legal solutions."
                    </p>
                    <div class="reviewer-info">
                        <h4 class="reviewer-name">Nasser Al-Harbi</h4>
                        <span class="reviewer-role">Business Consultant</span>
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
