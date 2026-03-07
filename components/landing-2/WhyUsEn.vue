<template>
  <section class="why-us-landing-2">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="section-title-centered text-dark">Why Our Clients Trust Us</h2>
      </div>
      
      <div class="row g-4">
        <!-- Row 1 -->
        <div class="col-lg-4 col-md-6" v-for="(item, index) in features" :key="index">
          <div class="feature-card-v2">
            <div class="feature-icon-v2">
              <i :data-lucide="item.icon"></i>
            </div>
            <h3 class="feature-title-v2">{{ item.title }}</h3>
            <p class="feature-text-v2">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

const features = [
  {
    icon: 'gavel',
    title: 'Specialized Legal Expertise',
    description: 'A team of lawyers and legal consultants with extensive experience in various legal fields.'
  },
  {
    icon: 'shield-check',
    title: 'Complete Confidentiality',
    description: 'We commit to the highest standards of professional confidentiality and legal ethics.'
  },
  {
    icon: 'user-check',
    title: 'Strong Legal Representation',
    description: 'We defend our clients\' rights before judicial authorities with utmost professionalism.'
  },
  {
    icon: 'file-text',
    title: 'Accurate Case Tracking',
    description: 'We ensure to follow all cases step-by-step and keep our clients constantly informed.'
  },
  {
    icon: 'calendar-check',
    title: 'Commitment to Deadlines',
    description: 'We are committed to accuracy and respecting time, focusing on achieving the best results.'
  },
  {
    icon: 'scale',
    title: 'Customized Legal Solutions',
    description: 'We provide studied legal solutions that suit the nature of each case and client needs.'
  }
]

onMounted(() => {
  if (window.lucide) {
    window.lucide.createIcons()
  }
})
</script>

<style scoped>
.why-us-landing-2 {
  padding: 80px 0;
  background-color: #ffffff;
}

.section-title-centered {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 3rem;
  color: #1a222e;
}

.feature-card-v2 {
  background-color: #fcfaf3;
  border-radius: 25px;
  padding: 40px 30px;
  height: 100%;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.feature-card-v2:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
}

.feature-icon-v2 {
  margin-bottom: 1.5rem;
  color: #c3a46e;
}

.feature-icon-v2 i,
.feature-icon-v2 svg {
  width: 42px;
  height: 42px;
  stroke-width: 1.5;
}

.feature-title-v2 {
  font-size: 1.35rem;
  font-weight: 800;
  color: #1a222e;
  margin-bottom: 1rem;
}

.feature-text-v2 {
  font-size: 0.95rem;
  color: #6c757d;
  line-height: 1.7;
  margin-bottom: 0;
}

@media (max-width: 991px) {
  .section-title-centered {
    font-size: 1.8rem;
  }
  .feature-card-v2 {
    padding: 30px 20px;
  }
}
</style>
