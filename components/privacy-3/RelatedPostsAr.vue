<template>
  <section class="team-grid-section">
    <div class="container">

      <!-- Section Title -->
      <div class="section-header text-end mb-5">
        <h2 class="section-title">مقالات ذات صلة</h2>
      </div>

      <!-- Row 1 -->
      <div class="row g-4 mb-4">
        <div v-for="(post, index) in blogPosts.slice(0, 4)" :key="'r1-' + index" class="col-6 col-md-3">
          <div class="team-card h-100">
            <div class="team-photo-wrap">
              <img src="/assets/lawyer-details-1.png" :alt="post.title" class="team-photo" />
            </div>
            <div class="team-body">
              <h3 class="team-name">{{ post.title }}</h3>
              <p class="team-desc">{{ post.description }}</p>
              <a href="#" class="team-link">
                اقرأ المزيد
                <i data-lucide="chevron-left" class="link-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

const blogPosts = [
  {
    title: 'أحكام العقود التجارية في النظام السعودي',
    description: 'دليل شامل حول أهم أحكام العقود التجارية وفق الأنظمة المعتمدة في المملكة العربية السعودية.'
  },
  {
    title: 'التحكيم التجاري وتسوية النزاعات',
    description: 'كيفية اللجوء إلى التحكيم كوسيلة بديلة لفض النزاعات التجارية بعيدًا عن المحاكم.'
  },
  {
    title: 'أنظمة الشركات في المملكة العربية السعودية',
    description: 'استعراض لأبرز التعديلات على نظام الشركات وأثرها على بيئة الأعمال.'
  },
  {
    title: 'الامتثال القانوني للشركات',
    description: 'متطلبات الامتثال التي يجب على الشركات العاملة في المملكة الالتزام بها.'
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
  padding: 70px 0 90px;
}

.section-title {
  font-family: 'Cairo', sans-serif;
  font-size: 2.2rem;
  font-weight: 800;
  color: #1a2b4b;
}

/* ── Card ── */
.team-card {
  background-color: transparent;
  border: 1px solid #eeebe6;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.team-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
}


/* ── Photo ── */
.team-photo-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 28px;
}

.team-photo {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top center;
  background-color: #dde4ef;
}

/* ── Body ── */
.team-body {
  padding: 18px 20px 22px;
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;
}

.team-name {
  font-family: 'Cairo', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: #1a2b4b;
  margin-bottom: 8px;
  line-height: 1.5;
}

.team-desc {
  font-family: 'Cairo', sans-serif;
  font-size: 0.82rem;
  color: #5a5a5a;
  line-height: 1.75;
  margin-bottom: 14px;
  flex: 1;
}

.team-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  color: #c3a46e;
  text-decoration: none;
  font-family: 'Cairo', sans-serif;
  font-weight: 600;
  font-size: 0.82rem;
  transition: gap 0.2s ease;
}

.team-link:hover {
  gap: 7px;
}

.link-icon {
  width: 14px;
  height: 14px;
}

@media (max-width: 575px) {
  .section-title { font-size: 1.6rem; }
  .team-photo { width: 70px; height: 70px; }
}
</style>
