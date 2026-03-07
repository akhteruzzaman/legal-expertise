<template>
  <section class="team-section">
    <div class="container">
      <div class="mb-5">
        <h2 class="section-title mb-2 text-start">Our Team</h2>
        <p class="section-subtitle text-muted text-start">Our office includes a group of elite lawyers and legal consultants who work as a team to provide the best legal solutions for our clients.</p>
      </div>

      <div class="swiper-container-wrapper">
        <Swiper
          :modules="[SwiperAutoplay]"
          :slides-per-view="1"
          :space-between="30"
          :dir="'ltr'"
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
                <img src="/assets/team-members.png" alt="Lawyer Abdullah bin Mohammed Al-Qahtani">
              </div>
              <h4 class="team-member-name">Lawyer Abdullah bin Mohammed Al-Qahtani</h4>
              <p class="team-member-role">Lawyer and legal consultant specialized in commercial cases and contract drafting, with practical experience in representing companies and individuals.</p>
              <a href="#" class="team-link">Read More <i data-lucide="chevron-right"></i></a>
            </div>
          </SwiperSlide>

          <!-- Member 2 -->
          <SwiperSlide>
            <div class="team-card">
              <div class="team-img-wrapper">
                <img src="/assets/team-members.png" alt="Lawyer Fahad bin Saud Al-Otaibi">
              </div>
              <h4 class="team-member-name">Lawyer Fahad bin Saud Al-Otaibi</h4>
              <p class="team-member-role">Specialized in litigation and court representation, with experience in civil cases and various legal disputes.</p>
              <a href="#" class="team-link">Read More <i data-lucide="chevron-right"></i></a>
            </div>
          </SwiperSlide>

          <!-- Member 3 -->
          <SwiperSlide>
            <div class="team-card">
              <div class="team-img-wrapper">
                <img src="/assets/team-members.png" alt="Legal Consultant Ahmed bin Khalid Al-Harbi">
              </div>
              <h4 class="team-member-name">Legal Consultant Ahmed bin Khalid Al-Harbi</h4>
              <p class="team-member-role">Legal consultant in corporate affairs and commercial regulations, providing well-studied legal solutions that support business growth.</p>
              <a href="#" class="team-link">Read More <i data-lucide="chevron-right"></i></a>
            </div>
          </SwiperSlide>

          <!-- Member 4 -->
          <SwiperSlide>
            <div class="team-card">
              <div class="team-img-wrapper">
                <img src="/assets/team-members.png" alt="Lawyer">
              </div>
              <h4 class="team-member-name">Lawyer</h4>
              <p class="team-member-role">Specialized in civil cases, with experience in defending clients' rights according to rules and regulations.</p>
              <a href="#" class="team-link">Read More <i data-lucide="chevron-right"></i></a>
            </div>
          </SwiperSlide>

          <!-- Member 5 -->
          <SwiperSlide>
            <div class="team-card">
              <div class="team-img-wrapper">
                <img src="/assets/team-members.png" alt="Lawyer Khalid bin Walid">
              </div>
              <h4 class="team-member-name">Lawyer Khalid bin Walid</h4>
              <p class="team-member-role">Specialized in personal status and inheritance cases, with extensive experience in family courts.</p>
              <a href="#" class="team-link">Read More <i data-lucide="chevron-right"></i></a>
            </div>
          </SwiperSlide>

          <!-- Member 6 -->
          <SwiperSlide>
            <div class="team-card">
              <div class="team-img-wrapper">
                <img src="/assets/team-members.png" alt="Consultant Noura Abdulaziz">
              </div>
              <h4 class="team-member-name">Consultant Noura Abdulaziz</h4>
              <p class="team-member-role">Expert in labor regulations and employee rights protection, providing consultations on labor contracts.</p>
              <a href="#" class="team-link">Read More <i data-lucide="chevron-right"></i></a>
            </div>
          </SwiperSlide>

          <!-- Member 7 -->
          <SwiperSlide>
            <div class="team-card">
              <div class="team-img-wrapper">
                <img src="/assets/team-members.png" alt="Lawyer Faisal Abdulrahman">
              </div>
              <h4 class="team-member-name">Lawyer Faisal Abdulrahman</h4>
              <p class="team-member-role">Specialized in real estate cases and land disputes, with experience in contract documentation.</p>
              <a href="#" class="team-link">Read More <i data-lucide="chevron-right"></i></a>
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
import 'swiper/css/autoplay'
</script>

<style scoped>
.swiper-container-wrapper {
  position: relative;
}

.team-swiper {
  padding: 15px 100px 20px;
  overflow: visible !important;
}
</style>
