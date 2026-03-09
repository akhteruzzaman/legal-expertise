<template>
  <section class="services-grid-section py-5">
    <div class="container">
      <!-- Search and Filter Bar -->
      <div class="row mb-5 justify-content-center">
        <div class="col-12">
          <div class="filter-wrapper d-flex gap-3 align-items-center">
            <!-- Category Dropdown -->
            <div class="dropdown-box">
              <div class="dropdown-pill d-flex align-items-center justify-content-between px-4">
                <span>All Topics</span>
                <i data-lucide="chevron-down" class="ms-2 icon-gray small-icon"></i>
              </div>
            </div>
            <!-- Search Input -->
            <div class="search-box flex-grow-1">
              <div class="search-pill">
                <i data-lucide="search" class="search-icon icon-gray"></i>
                <input 
                  type="text" 
                  class="search-input" 
                  placeholder="Search for a topic .."
                >
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
              <span>More Details</span>
              <i data-lucide="chevron-right" class="arrow-icon ms-2"></i>
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
    title: 'Legal Consultations',
    description: 'Providing accurate legal consultations that help you make informed decisions.',
    icon: 'gavel'
  },
  {
    title: 'Litigation & Court Representation',
    description: 'Professional legal representation before various judicial authorities.',
    icon: 'shield'
  },
  {
    title: 'Corporate & Commercial Law',
    description: 'Comprehensive legal support for companies in their various transactions and disputes.',
    icon: 'briefcase'
  },
  {
    title: 'Drafting & Reviewing Contracts',
    description: 'Preparing and reviewing contracts to preserve rights and reduce risks.',
    icon: 'file-text'
  },
  {
    title: 'Civil & Criminal Cases',
    description: 'Handling civil and criminal cases with complete professionalism and confidentiality.',
    icon: 'scale'
  },
  {
    title: 'Arbitration & Dispute Settlement',
    description: 'Resolving disputes through alternative legal methods that save time and costs.',
    icon: 'handshake'
  },
  {
    title: 'Legal Consultations',
    description: 'Providing accurate legal consultations that help you make informed decisions.',
    icon: 'gavel'
  },
  {
    title: 'Litigation & Court Representation',
    description: 'Professional legal representation before various judicial authorities.',
    icon: 'shield'
  },
  {
    title: 'Corporate & Commercial Law',
    description: 'Comprehensive legal support for companies in their various transactions and disputes.',
    icon: 'briefcase'
  },
  {
    title: 'Drafting & Reviewing Contracts',
    description: 'Preparing and reviewing contracts to preserve rights and reduce risks.',
    icon: 'file-text'
  },
  {
    title: 'Civil & Criminal Cases',
    description: 'Handling civil and criminal cases with complete professionalism and confidentiality.',
    icon: 'scale'
  },
  {
    title: 'Arbitration & Dispute Settlement',
    description: 'Resolving disputes through alternative legal methods that save time and costs.',
    icon: 'handshake'
  },
  {
    title: 'Legal Consultations',
    description: 'Providing accurate legal consultations that help you make informed decisions.',
    icon: 'gavel'
  },
  {
    title: 'Litigation & Court Representation',
    description: 'Professional legal representation before various judicial authorities.',
    icon: 'shield'
  },
  {
    title: 'Corporate & Commercial Law',
    description: 'Comprehensive legal support for companies in their various transactions and disputes.',
    icon: 'briefcase'
  },
  {
    title: 'Drafting & Reviewing Contracts',
    description: 'Preparing and reviewing contracts to preserve rights and reduce risks.',
    icon: 'file-text'
  },
  {
    title: 'Civil & Criminal Cases',
    description: 'Handling civil and criminal cases with complete professionalism and confidentiality.',
    icon: 'scale'
  },
  {
    title: 'Arbitration & Dispute Settlement',
    description: 'Resolving disputes through alternative legal methods that save time and costs.',
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
  text-align: left;
  font-family: 'Inter', sans-serif;
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
  font-family: 'Inter', sans-serif;
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
  font-family: 'Inter', sans-serif;
  color: #1a2b4b;
  font-weight: 700;
  font-size: 1.35rem;
  margin-bottom: 20px;
}

.service-v2-text {
  font-family: 'Inter', sans-serif;
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
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  transition: transform 0.3s ease;
}

.service-v2-link:hover {
  transform: translateX(5px);
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
