<template>
  <section class="services-grid-section py-5">
    <div class="container">
      <!-- Service Sections -->
      <!-- Service Sections -->
      <div v-for="(section, sIndex) in serviceSections" :key="sIndex" class="service-section mb-100">
        <!-- Section Header -->
        <div class="row mb-4 align-items-center">
          <div class="col-6 text-start">
            <h2 class="section-v3-title mb-0">{{ section.title }}</h2>
          </div>
          <div class="col-6 text-end">
            <a href="#" class="view-all-link">شاهد الكل</a>
          </div>
        </div>

        <!-- Services Grid -->
        <div class="row g-4 justify-content-center">
          <div v-for="(service, index) in section.services" :key="index" class="col-md-6 col-lg-4">
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
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

const serviceSections = [
  {
    title: 'الاستشارات القانونية',
    services: [
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
      }
    ]
  },
  {
    title: 'قضايا الشركات والقانون التجاري',
    services: [
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
  },
  {
    title: 'صياغة ومراجعة العقود',
    services: [
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
  },
  {
    title: 'القضايا المدنية',
    services: [
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
  },
  {
    title: 'القضايا الجزائية (الجنائية)',
    services: [
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
  },
  {
    title: 'قضايا الأحوال الشخصية',
    services: [
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
  },
  {
    title: 'القانون العمالي',
    services: [
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

.mb-100 {
  margin-bottom: 100px;
}

.service-section:last-child {
  margin-bottom: 0;
}


/* Section Header Styles */
.section-v3-title {
  font-family: 'Cairo', sans-serif;
  color: #1a2b4b;
  font-weight: 800;
  font-size: 1.75rem;
}

.view-all-link {
  font-family: 'Cairo', sans-serif;
  color: #1a2b4b;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.view-all-link:hover {
  color: #c3a46e;
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
  width: 100%;
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

</style>
