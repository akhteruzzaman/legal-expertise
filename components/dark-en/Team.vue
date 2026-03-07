<template>
  <section class="team-section">
    <div class="container ">
        <h2 class="section-title-services mb-2">Our Team</h2>
        <p class="section-subtitle-services mb-5">
            Our firm includes elite lawyers and legal consultants who work with team spirit to provide the best legal solutions for our clients.
        </p>

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
              '768': { slidesPerView: 2 },
              '992': { slidesPerView: 3 }
            }"
            class="team-swiper"
          >
            <!-- Member 1 -->
            <SwiperSlide>
                <div class="feature-card team-card h-100 text-center">
                    <div class="team-img-container mb-4">
                        <img src="/assets/team-members.png" alt="Lawyer Abdullah bin Mohammed Al-Qahtani" class="team-img">
                    </div>
                    <h3 class="feature-title">Lawyer Abdullah bin Mohammed Al-Qahtani</h3>
                    <p class="feature-text">
                        Lawyer and legal consultant specializing in commercial cases and contract drafting, with practical experience representing companies and individuals.
                    </p>
                    <a href="#" class="details-link">Read More <i data-lucide="chevron-right"
                            class="small-icon"></i></a>
                </div>
            </SwiperSlide>

            <!-- Member 2 -->
            <SwiperSlide>
                <div class="feature-card team-card h-100 text-center">
                    <div class="team-img-container mb-4">
                        <img src="/assets/team-members.png" alt="Lawyer Fahd bin Saud Al-Otaibi" class="team-img">
                    </div>
                    <h3 class="feature-title">Lawyer Fahd bin Saud Al-Otaibi</h3>
                    <p class="feature-text">
                        Specialist in litigation and court representation, with experience in civil cases and various legal disputes.
                    </p>
                    <a href="#" class="details-link">Read More <i data-lucide="chevron-right"
                            class="small-icon"></i></a>
                </div>
            </SwiperSlide>

            <!-- Member 3 -->
            <SwiperSlide>
                <div class="feature-card team-card h-100 text-center">
                    <div class="team-img-container mb-4">
                        <img src="/assets/team-members.png" alt="Legal Consultant Ahmed bin Khalid Al-Harbi"
                            class="team-img">
                    </div>
                    <h3 class="feature-title">Legal Consultant Ahmed bin Khalid Al-Harbi</h3>
                    <p class="feature-text">
                        Legal consultant in corporate affairs and commercial regulations, providing deliberate legal solutions supporting business growth.
                    </p>
                    <a href="#" class="details-link">Read More <i data-lucide="chevron-right"
                            class="small-icon"></i></a>
                </div>
            </SwiperSlide>

            <!-- Member 4 -->
            <SwiperSlide>
                <div class="feature-card team-card h-100 text-center">
                    <div class="team-img-container mb-4">
                        <img src="/assets/team-members.png" alt="Lawyer Khalid bin Walid" class="team-img">
                    </div>
                    <h3 class="feature-title">Lawyer Khalid bin Walid</h3>
                    <p class="feature-text">
                        Specialized in personal status and inheritance cases, with extensive experience in family courts.
                    </p>
                    <a href="#" class="details-link">Read More <i data-lucide="chevron-right"
                            class="small-icon"></i></a>
                </div>
            </SwiperSlide>

            <!-- Member 5 -->
            <SwiperSlide>
                <div class="feature-card team-card h-100 text-center">
                    <div class="team-img-container mb-4">
                        <img src="/assets/team-members.png" alt="Consultant Noura Abdulaziz" class="team-img">
                    </div>
                    <h3 class="feature-title">Consultant Noura Abdulaziz</h3>
                    <p class="feature-text">
                        Expert in labor regulations and employee rights protection, providing consultations on labor contracts.
                    </p>
                    <a href="#" class="details-link">Read More <i data-lucide="chevron-right"
                            class="small-icon"></i></a>
                </div>
            </SwiperSlide>

            <!-- Member 6 -->
            <SwiperSlide>
                <div class="feature-card team-card h-100 text-center">
                    <div class="team-img-container mb-4">
                        <img src="/assets/team-members.png" alt="Lawyer Faisal Abdulrahman" class="team-img">
                    </div>
                    <h3 class="feature-title">Lawyer Faisal Abdulrahman</h3>
                    <p class="feature-text">
                        Specialized in real estate cases and land disputes, with experience in contract documentation.
                    </p>
                    <a href="#" class="details-link">Read More <i data-lucide="chevron-right"
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
