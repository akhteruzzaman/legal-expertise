<template>
  <section class="services-grid-section py-5">
    <div class="container">
      <!-- Search and Filter Bar -->
      <div class="row mb-5 justify-content-center">
        <div class="col-12">
          <div class="filter-wrapper d-flex gap-3 align-items-center">
            <!-- Search Input -->
            <div class="search-box flex-grow-1">
              <div class="search-pill">
                <i data-lucide="search" class="search-icon icon-gray"></i>
                <input 
                  type="text" 
                  class="search-input" 
                  placeholder="ابحث عن الموضوع .."
                >
              </div>
            </div>
            <!-- Category Dropdown -->
            <div class="dropdown-box">
              <div class="dropdown-pill d-flex align-items-center justify-content-between px-4">
                <i data-lucide="chevron-down" class="me-2 icon-gray small-icon"></i>
                <span>كل المواضيع</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Services Grid -->
      <div class="row g-4 justify-content-center">
        <div v-for="(service, index) in services" :key="index" class="col-md-6 col-lg-4">
          <div class="service-v2-card h-100 shadow-sm">
            <div class="icon-box-v2 mb-4">
              <i :data-lucide="service.icon" class="icon-gold"></i>
            </div>
            <h3 class="service-v2-title">{{ service.title }}</h3>
            <p class="service-v2-text">{{ service.description }}</p>
            <a href="#" class="service-v2-link mt-auto">
              <span>تفاصيل أكثر</span>
              <i data-lucide="chevron-left" class="arrow-icon ms-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

const services = [
  {
    title: 'الاستشارات القانونية',
    description: 'تقديم استشارات قانونية دقيقة تساعدك على اتخاذ قرارات مدروسة.',
    icon: 'gavel'
  },
  {
    title: 'التقاضي والتمثيل أمام المحاكم',
    description: 'تمثيل قانوني احترافي أمام مختلف الجهات القضائية.',
    icon: 'shield'
  },
  {
    title: 'قضايا الشركات والقانون التجاري',
    description: 'دعم قانوني متكامل للشركات في مختلف معاملاتها ونزاعاتها.',
    icon: 'briefcase'
  },
  {
    title: 'صياغة ومراجعة العقود',
    description: 'إعداد ومراجعة العقود بما يحفظ الحقوق ويقلل المخاطر.',
    icon: 'file-text'
  },
  {
    title: 'القضايا المدنية والجنائية',
    description: 'التعامل مع القضايا المدنية والجنائية باحترافية وسرية تامة.',
    icon: 'scale'
  },
  {
    title: 'التحكيم وتسوية النزاعات',
    description: 'حل النزاعات بطرق قانونية بديلة تحفظ الوقت والتكاليف.',
    icon: 'handshake'
  },
  {
    title: 'الاستشارات القانونية',
    description: 'تقديم استشارات قانونية دقيقة تساعدك على اتخاذ قرارات مدروسة.',
    icon: 'gavel'
  },
  {
    title: 'التقاضي والتمثيل أمام المحاكم',
    description: 'تمثيل قانوني احترافي أمام مختلف الجهات القضائية.',
    icon: 'shield'
  },
  {
    title: 'قضايا الشركات والقانون التجاري',
    description: 'دعم قانوني متكامل للشركات في مختلف معاملاتها ونزاعاتها.',
    icon: 'briefcase'
  },
  {
    title: 'صياغة ومراجعة العقود',
    description: 'إعداد ومراجعة العقود بما يحفظ الحقوق ويقلل المخاطر.',
    icon: 'file-text'
  },
  {
    title: 'القضايا المدنية والجنائية',
    description: 'التعامل مع القضايا المدنية والجنائية باحترافية وسرية تامة.',
    icon: 'scale'
  },
  {
    title: 'التحكيم وتسوية النزاعات',
    description: 'حل النزاعات بطرق قانونية بديلة تحفظ الوقت والتكاليف.',
    icon: 'handshake'
  },
  {
    title: 'الاستشارات القانونية',
    description: 'تقديم استشارات قانونية دقيقة تساعدك على اتخاذ قرارات مدروسة.',
    icon: 'gavel'
  },
  {
    title: 'التقاضي والتمثيل أمام المحاكم',
    description: 'تمثيل قانوني احترافي أمام مختلف الجهات القضائية.',
    icon: 'shield'
  },
  {
    title: 'قضايا الشركات والقانون التجاري',
    description: 'دعم قانوني متكامل للشركات في مختلف معاملاتها ونزاعاتها.',
    icon: 'briefcase'
  },
  {
    title: 'صياغة ومراجعة العقود',
    description: 'إعداد ومراجعة العقود بما يحفظ الحقوق ويقلل المخاطر.',
    icon: 'file-text'
  },
  {
    title: 'القضايا المدنية والجنائية',
    description: 'التعامل مع القضايا المدنية والجنائية باحترافية وسرية تامة.',
    icon: 'scale'
  },
  {
    title: 'التحكيم وتسوية النزاعات',
    description: 'حل النزاعات بطرق قانونية بديلة تحفظ الوقت والتكاليف.',
    icon: 'handshake'
  }
]

onMounted(() => {
  if (window.lucide) {
    window.lucide.createIcons()
  }
})
</script>

<style scoped>
.services-grid-section {
  background-color: #ffffff;
}

/* Filter Styles */
.filter-wrapper {
  max-width: 100%;
}

.search-pill {
  position: relative;
  background: white;
  border: 1px solid #f1e8d9;
  border-radius: 50rem;
  height: 55px;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.search-icon {
  width: 20px;
  height: 20px;
  color: #333;
}

.search-input {
  flex-grow: 1;
  border: none;
  background: transparent;
  padding: 0 15px;
  text-align: right;
  font-family: 'Cairo', sans-serif;
  font-size: 0.95rem;
  color: #1a2b4b;
}

.search-input:focus {
  outline: none;
}

.search-input::placeholder {
  color: #1a2b4b;
  opacity: 0.8;
}

.dropdown-pill {
  background-color: white;
  border: 1px solid #f1e8d9;
  height: 55px;
  border-radius: 50rem;
  min-width: 220px;
  cursor: pointer;
  font-family: 'Cairo', sans-serif;
  font-size: 0.95rem;
  color: #1a2b4b;
}

.small-icon {
  width: 18px;
  height: 18px;
}

/* Grid Card Styles */
.service-v2-card {
  background-color: #fcf8f3;
  border-radius: 35px;
  padding: 50px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.service-v2-card:hover {
  transform: translateY(-10px);
  border-color: #c3a46e;
  background-color: #ffffff;
}

.icon-box-v2 {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-gold {
  color: #c3a46e;
  width: 48px;
  height: 48px;
}

.icon-gray {
  color: #9e9e9e;
}

.service-v2-title {
  font-family: 'Cairo', sans-serif;
  color: #1a2b4b;
  font-weight: 700;
  font-size: 1.35rem;
  margin-bottom: 20px;
}

.service-v2-text {
  font-family: 'Cairo', sans-serif;
  color: #616161;
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 30px;
}

.service-v2-link {
  display: inline-flex;
  align-items: center;
  color: #c3a46e;
  text-decoration: none;
  font-family: 'Cairo', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  transition: transform 0.3s ease;
}

.service-v2-link:hover {
  transform: translateX(-5px);
}

.arrow-icon {
  width: 18px;
  height: 18px;
}

@media (max-width: 991px) {
  .filter-wrapper {
    flex-direction: column;
  }
  .dropdown-box {
    width: 100%;
  }
}
</style>
