<template>
  <section class="testimonials-section">
    <div class="container">
      <div class="mb-5">
        <h2 class="section-title mb-2 text-start">Client Testimonials</h2>
        <p class="section-subtitle text-muted text-start">We cherish our clients' trust and continuously strive to provide legal services that exceed their expectations.</p>
      </div>

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
            <div class="testimonial-card">
              <div class="testimonial-stars">
                <i data-lucide="star" fill="#c3a46e"></i>
                <i data-lucide="star" fill="#c3a46e"></i>
                <i data-lucide="star" fill="#c3a46e"></i>
                <i data-lucide="star" fill="#c3a46e"></i>
                <i data-lucide="star" fill="#c3a46e"></i>
              </div>
              <p class="testimonial-text">"Classy treatment and high professionalism. I received a clear legal consultation that helped me make the right decision with complete confidence."</p>
              <div class="testimonial-author">
                <span class="testimonial-name">Mohammed bin Abdullah Al-Subaie</span>
                <span class="testimonial-role">Businessman</span>
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
              <p class="testimonial-text">"An outstanding legal team, precise case follow-up, and continuous communication until reaching a satisfactory result."</p>
              <div class="testimonial-author">
                <span class="testimonial-name">Sarah bint Khalid Al-Otaibi</span>
                <span class="testimonial-role">Business Owner</span>
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
              <p class="testimonial-text">"Evident legal expertise and dedication to the client's best interests. I recommend dealing with them for anyone looking for trust and professionalism."</p>
              <div class="testimonial-author">
                <span class="testimonial-name">Abdulrahman bin Fahad Al-Qahtani</span>
                <span class="testimonial-role">Company Manager</span>
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
              <p class="testimonial-text">"Excellent service and punctuality. A highly professional office and their treatment is reassuring for any legal matter."</p>
              <div class="testimonial-author">
                <span class="testimonial-name">Khalid Al-Otaibi</span>
                <span class="testimonial-role">Client</span>
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
              <p class="testimonial-text">"They helped us solve a complex commercial case with great success. Their expertise in commercial law is truly unmatched in the region."</p>
              <div class="testimonial-author">
                <span class="testimonial-name">Al-Noor Real Estate Co.</span>
                <span class="testimonial-role">Strategic Partner</span>
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
              <p class="testimonial-text">"I advise anyone with a legal consultation to go to them. Fast response, attention to detail, and many innovative legal solutions."</p>
              <div class="testimonial-author">
                <span class="testimonial-name">Nasser Al-Harbi</span>
                <span class="testimonial-role">Business Consultant</span>
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
