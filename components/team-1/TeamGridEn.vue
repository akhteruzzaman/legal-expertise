<template>
  <section class="team-grid-section py-5">
    <div class="container">
      <!-- Team Sections -->
      <div v-for="(section, sIndex) in teamSections" :key="sIndex" class="team-section mb-100">
        <!-- Section Header -->
        <div class="row mb-4 align-items-center">
          <div class="col-6 text-start">
            <h2 class="section-v3-title mb-0">{{ section.title }}</h2>
          </div>
          <div class="col-6 text-end">
            <a href="#" class="view-all-link">View All</a>
          </div>
        </div>

        <!-- Team Grid -->
        <div class="row g-4 justify-content-center">
          <div v-for="(member, index) in section.members" :key="index" class="col-md-6 col-lg-3">
            <div class="team-v2-card h-100 shadow-sm">
              <div class="member-image-wrapper mb-4">
                <div class="member-image-placeholder">
                  <i data-lucide="user" class="icon-gold"></i>
                </div>
              </div>
              <h3 class="member-v2-title">{{ member.name }}</h3>
              <p class="member-v2-role">{{ member.role }}</p>
              <div class="social-links-v2 mt-auto">
                <a href="#" class="social-link-v2"><i data-lucide="linkedin"></i></a>
                <a href="#" class="social-link-v2"><i data-lucide="mail"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

const teamSections = [
  {
    title: 'Founding Partners',
    members: [
      { name: 'Ahmed Mohammed', role: 'Founding Partner - Lawyer', image: '' },
      { name: 'Sarah Khalid', role: 'Founding Partner - Legal Consultant', image: '' },
      { name: 'Fahad Abdullah', role: 'Partner - Cassation Lawyer', image: '' },
      { name: 'Noura Al-Saad', role: 'Partner - Arbitration Specialist', image: '' }
    ]
  },
  {
    title: 'Legal Team',
    members: [
      { name: 'Khalid Al-Otaibi', role: 'Senior Lawyer', image: '' },
      { name: 'Reem Al-Qahtani', role: 'Lawyer - Commercial Cases', image: '' },
      { name: 'Mohammed Al-Shammari', role: 'Lawyer - Criminal Cases', image: '' },
      { name: 'Layla Al-Harbi', role: 'Lawyer - Labor Cases', image: '' }
    ]
  }
]

onMounted(() => {
  if (window.lucide) {
    window.lucide.createIcons()
  }
})
</script>

<style scoped>
.team-grid-section {
  background-color: #ffffff;
}

.mb-100 {
  margin-bottom: 100px;
}

.team-section:last-child {
  margin-bottom: 0;
}

.section-v3-title {
  color: #1a2b4b;
  font-weight: 800;
  font-size: 1.75rem;
}

.view-all-link {
  color: #1a2b4b;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.view-all-link:hover {
  color: #c3a46e;
}

.team-v2-card {
  background-color: #fcf8f3;
  border-radius: 35px;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.team-v2-card:hover {
  transform: translateY(-10px);
  border-color: #c3a46e;
  background-color: #ffffff;
}

.member-image-wrapper {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #ffffff;
  border: 2px solid #c3a46e;
  display: flex;
  align-items: center;
  justify-content: center;
}

.member-image-placeholder .icon-gold {
  color: #c3a46e;
  width: 50px;
  height: 50px;
}

.member-v2-title {
  color: #1a2b4b;
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 10px;
}

.member-v2-role {
  color: #c3a46e;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 20px;
}

.social-links-v2 {
  display: flex;
  gap: 15px;
}

.social-link-v2 {
  color: #1a2b4b;
  transition: color 0.3s ease;
}

.social-link-v2:hover {
  color: #c3a46e;
}

.social-link-v2 i {
  width: 20px;
  height: 20px;
}
</style>
