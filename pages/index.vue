<template>
  <div class="selection-page">
    <div class="container text-center">
      <div class="logo-wrapper">
        <img src="/assets/logo-dark.png" alt="Logo" class="main-logo">
      </div>
      
      <Transition name="fade" mode="out-in">
        <!-- Step 1: Category Selection -->
        <div v-if="!selectedCategory" key="step0">
          <h1 class="main-title">Select Section</h1>
          <p class="subtitle">Choose which part of the site to visit</p>

          <div class="row g-4 mt-4 justify-content-center">
            <!-- Home -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedCategory = 'home'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="home"></i>
                </div>
                <div class="content">
                  <h3>Home</h3>
                  <span>Home Pages</span>
                </div>
              </div>
            </div>

            <!-- About -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedCategory = 'about'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="info"></i>
                </div>
                <div class="content">
                  <h3>About</h3>
                  <span>About Us Pages</span>
                </div>
              </div>
            </div>

            <!-- Services -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedCategory = 'services'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="briefcase"></i>
                </div>
                <div class="content">
                  <h3>Services</h3>
                  <span>Our Services Pages</span>
                </div>
              </div>
            </div>
            <!-- Team -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedCategory = 'team'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="users"></i>
                </div>
                <div class="content">
                  <h3>Team</h3>
                  <span>Our Team Pages</span>
                </div>
              </div>
            </div>

            <!-- Blog -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedCategory = 'blog'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="newspaper"></i>
                </div>
                <div class="content">
                  <h3>Blog</h3>
                  <span>Blog Pages</span>
                </div>
              </div>
            </div>

            <!-- Contact -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedCategory = 'contact'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="phone"></i>
                </div>
                <div class="content">
                  <h3>Contact</h3>
                  <span>Contact Pages</span>
                </div>
              </div>
            </div>

            <!-- Terms & Conditions -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedCategory = 'terms'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="file-text"></i>
                </div>
                <div class="content">
                  <h3>Terms</h3>
                  <span>Terms & Conditions</span>
                </div>
              </div>
            </div>

            <!-- Privacy Policy -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedCategory = 'privacy'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="shield"></i>
                </div>
                <div class="content">
                  <h3>Privacy</h3>
                  <span>Privacy Policy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 2a: About Page Selection -->
        <div v-else-if="selectedCategory === 'about' && !selectedTheme" key="step-about">
          <h1 class="main-title">About Pages</h1>
          <p class="subtitle">Choose an About page version</p>

          <div class="row g-4 mt-4 justify-content-center">
            <!-- About 1 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'about/about-1'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="file-text"></i>
                </div>
                <div class="content">
                  <h3>About 1</h3>
                  <span>About Us Page</span>
                </div>
              </div>
            </div>

            <!-- About 2 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'about/about-2'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="file-text"></i>
                </div>
                <div class="content">
                  <h3>About 2</h3>
                  <span>About Us Page</span>
                </div>
              </div>
            </div>

            <!-- About 3 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'about/about-3'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="file-text"></i>
                </div>
                <div class="content">
                  <h3>About 3</h3>
                  <span>About Us Page</span>
                </div>
              </div>
            </div>

            <!-- About 4 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'about/about-4'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="file-text"></i>
                </div>
                <div class="content">
                  <h3>About 4</h3>
                  <span>About Us Page</span>
                </div>
              </div>
            </div>

            <!-- About 5 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'about/about-5'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="file-text"></i>
                </div>
                <div class="content">
                  <h3>About 5</h3>
                  <span>About Us Page</span>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-5">
            <button @click="selectedCategory = null" class="btn-back">
              <i data-lucide="arrow-left"></i>
              Back to Sections
            </button>
          </div>
        </div>

        <!-- Step 2c: Services Page Selection -->
        <div v-else-if="selectedCategory === 'services' && !selectedTheme" key="step-services">
          <h1 class="main-title">Services Pages</h1>
          <p class="subtitle">Choose a Services page version</p>

          <div class="row g-4 mt-4 justify-content-center">
            <!-- Services 1 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'services/services-1'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="file-check"></i>
                </div>
                <div class="content">
                  <h3>Services 1</h3>
                  <span>Our Services Page</span>
                </div>
              </div>
            </div>

            <!-- Services 2 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'services/services-2'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="file-check"></i>
                </div>
                <div class="content">
                  <h3>Services 2</h3>
                  <span>Our Services Page</span>
                </div>
              </div>
            </div>

            <!-- Services 3 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'services/services-3'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="file-check"></i>
                </div>
                <div class="content">
                  <h3>Services 3</h3>
                  <span>Our Services Page</span>
                </div>
              </div>
            </div>

            <!-- Services 4 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'services/services-4'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="file-check"></i>
                </div>
                <div class="content">
                  <h3>Services 4</h3>
                  <span>Our Services Page</span>
                </div>
              </div>
            </div>

            <!-- Services 5 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'services/services-5'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="file-check"></i>
                </div>
                <div class="content">
                  <h3>Services 5</h3>
                  <span>Our Services Page</span>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-5">
            <button @click="selectedCategory = null" class="btn-back">
              <i data-lucide="arrow-left"></i>
              Back to Sections
            </button>
          </div>
        </div>

        <!-- Step 2d: Team Page Selection -->
        <div v-else-if="selectedCategory === 'team' && !selectedTheme" key="step-team">
          <h1 class="main-title">Team Pages</h1>
          <p class="subtitle">Choose a Team page version</p>

          <div class="row g-4 mt-4 justify-content-center">
            <!-- Team 1 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'team/team-1'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="users"></i>
                </div>
                <div class="content">
                  <h3>Team 1</h3>
                  <span>Our Team Page</span>
                </div>
              </div>
            </div>

            <!-- Team 2 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'team/team-2'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="users"></i>
                </div>
                <div class="content">
                  <h3>Team 2</h3>
                  <span>Our Team Page</span>
                </div>
              </div>
            </div>

            <!-- Team 3 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'team/team-3'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="users"></i>
                </div>
                <div class="content">
                  <h3>Team 3</h3>
                  <span>Our Team Page</span>
                </div>
              </div>
            </div>

            <!-- Lawyer Details 1 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'team/lawyer-details-1'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="user-check"></i>
                </div>
                <div class="content">
                  <h3>Lawyer Details 1</h3>
                  <span>Lawyer Profile Page</span>
                </div>
              </div>
            </div>

            <!-- Lawyer Details 2 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'team/lawyer-details-2'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="user-check"></i>
                </div>
                <div class="content">
                  <h3>Lawyer Details 2</h3>
                  <span>Lawyer Profile Page</span>
                </div>
              </div>
            </div>

            <!-- Lawyer Details 3 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'team/lawyer-details-3'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="user-check"></i>
                </div>
                <div class="content">
                  <h3>Lawyer Details 3</h3>
                  <span>Lawyer Profile Page</span>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-5">
            <button @click="selectedCategory = null" class="btn-back">
              <i data-lucide="arrow-left"></i>
              Back to Sections
            </button>
          </div>
        </div>

        <!-- Step 2e: Blog Page Selection -->
        <div v-else-if="selectedCategory === 'blog' && !selectedTheme" key="step-blog">
          <h1 class="main-title">Blog Pages</h1>
          <p class="subtitle">Choose a Blog page version</p>

          <div class="row g-4 mt-4 justify-content-center">
            <!-- Blog Details 1 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'blog/blog-details-1'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="newspaper"></i>
                </div>
                <div class="content">
                  <h3>Blog Details 1</h3>
                  <span>Blog Details Page</span>
                </div>
              </div>
            </div>

            <!-- Blog Details 2 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'blog/blog-details-2'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="newspaper"></i>
                </div>
                <div class="content">
                  <h3>Blog Details 2</h3>
                  <span>Blog Details Page</span>
                </div>
              </div>
            </div>

            <!-- Blog Details 3 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'blog/blog-details-3'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="newspaper"></i>
                </div>
                <div class="content">
                  <h3>Blog Details 3</h3>
                  <span>Blog Details Page</span>
                </div>
              </div>
            </div>

            <!-- Blog 1 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'blog/blog-1'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="newspaper"></i>
                </div>
                <div class="content">
                  <h3>Blog 1</h3>
                  <span>Blog Page</span>
                </div>
              </div>
            </div>

            <!-- Blog 2 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'blog/blog-2'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="newspaper"></i>
                </div>
                <div class="content">
                  <h3>Blog 2</h3>
                  <span>Blog Page</span>
                </div>
              </div>
            </div>

            <!-- Blog 3 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'blog/blog-3'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="newspaper"></i>
                </div>
                <div class="content">
                  <h3>Blog 3</h3>
                  <span>Blog Page</span>
                </div>
              </div>
            </div>

            <!-- Blog 4 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'blog/blog-4'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="newspaper"></i>
                </div>
                <div class="content">
                  <h3>Blog 4</h3>
                  <span>Blog Page</span>
                </div>
              </div>
            </div>

            <!-- Blog 5 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'blog/blog-5'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="newspaper"></i>
                </div>
                <div class="content">
                  <h3>Blog 5</h3>
                  <span>Blog Page</span>
                </div>
              </div>
            </div>

            <!-- Blog 6 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'blog/blog-6'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="newspaper"></i>
                </div>
                <div class="content">
                  <h3>Blog 6</h3>
                  <span>Blog Page</span>
                </div>
              </div>
            </div>

            <!-- Blog 7 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'blog/blog-7'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="newspaper"></i>
                </div>
                <div class="content">
                  <h3>Blog 7</h3>
                  <span>Blog Page</span>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-5">
            <button @click="selectedCategory = null" class="btn-back">
              <i data-lucide="arrow-left"></i>
              Back to Sections
            </button>
          </div>
        </div>

        <!-- Step 2f: Contact Page Selection -->
        <div v-else-if="selectedCategory === 'contact' && !selectedTheme" key="step-contact">
          <h1 class="main-title">Contact Pages</h1>
          <p class="subtitle">Choose a Contact page version</p>

          <div class="row g-4 mt-4 justify-content-center">
            <!-- Contact 1 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'contact/contact-1'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="phone"></i>
                </div>
                <div class="content">
                  <h3>Contact 1</h3>
                  <span>Contact Us Page</span>
                </div>
              </div>
            </div>

            <!-- Contact 2 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'contact/contact-2'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="phone"></i>
                </div>
                <div class="content">
                  <h3>Contact 2</h3>
                  <span>Contact Us Page</span>
                </div>
              </div>
            </div>

            <!-- Contact 3 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'contact/contact-3'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="phone"></i>
                </div>
                <div class="content">
                  <h3>Contact 3</h3>
                  <span>Contact Us Page</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Step 2g: Terms & Conditions Page Selection -->
        <div v-else-if="selectedCategory === 'terms' && !selectedTheme" key="step-terms">
          <h1 class="main-title">Terms & Conditions Pages</h1>
          <p class="subtitle">Choose a Terms & Conditions version</p>

          <div class="row g-4 mt-4 justify-content-center">
            <!-- Terms 1 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'terms/terms-1'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="file-text"></i>
                </div>
                <div class="content">
                  <h3>Terms 1</h3>
                  <span>Terms & Conditions Page</span>
                </div>
              </div>
            </div>

            <!-- Terms 2 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'terms/terms-2'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="file-text"></i>
                </div>
                <div class="content">
                  <h3>Terms 2</h3>
                  <span>Terms & Conditions Page</span>
                </div>
              </div>
            </div>

            <!-- Terms 3 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'terms/terms-3'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="file-text"></i>
                </div>
                <div class="content">
                  <h3>Terms 3</h3>
                  <span>Terms & Conditions Page</span>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-5">
            <button @click="selectedCategory = null" class="btn-back">
              <i data-lucide="arrow-left"></i>
              Back to Sections
            </button>
          </div>
        </div>

        <!-- Step 2h: Privacy Policy Page Selection -->
        <div v-else-if="selectedCategory === 'privacy' && !selectedTheme" key="step-privacy">
          <h1 class="main-title">Privacy Policy Pages</h1>
          <p class="subtitle">Choose a Privacy Policy version</p>

          <div class="row g-4 mt-4 justify-content-center">
            <!-- Privacy 1 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'privacy/privacy-1'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="shield"></i>
                </div>
                <div class="content">
                  <h3>Privacy 1</h3>
                  <span>Privacy Policy Page</span>
                </div>
              </div>
            </div>

            <!-- Privacy 2 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'privacy/privacy-2'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="shield"></i>
                </div>
                <div class="content">
                  <h3>Privacy 2</h3>
                  <span>Privacy Policy Page</span>
                </div>
              </div>
            </div>

            <!-- Privacy 3 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'privacy/privacy-3'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="shield"></i>
                </div>
                <div class="content">
                  <h3>Privacy 3</h3>
                  <span>Privacy Policy Page</span>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-5">
            <button @click="selectedCategory = null" class="btn-back">
              <i data-lucide="arrow-left"></i>
              Back to Sections
            </button>
          </div>
        </div>

        <!-- Step 2b: Theme Selection (Only for Home) -->
        <div v-else-if="selectedCategory === 'home' && !selectedTheme" key="step1">
          <h1 class="main-title">Choose Your Version</h1>
          <p class="subtitle">Select the theme for your Legal Law experience</p>

          <div class="row g-4 mt-4 justify-content-center">
            <!-- Landing Page 1 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'landing-page-1'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="sun"></i>
                </div>
                <div class="content">
                  <h3>Landing Page 1</h3>
                  <span>Light Version</span>
                </div>
              </div>
            </div>

            <!-- Landing Page 2 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'landing-page-2'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="sun"></i>
                </div>
                <div class="content">
                  <h3>Landing Page 2</h3>
                  <span>Light Version</span>
                </div>
              </div>
            </div>

            <!-- Landing Page 3 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'landing-page-3'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="sun"></i>
                </div>
                <div class="content">
                  <h3>Landing Page 3</h3>
                  <span>Light Version</span>
                </div>
              </div>
            </div>

            <!-- Landing Page 4 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'landing-page-4'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="sun"></i>
                </div>
                <div class="content">
                  <h3>Landing Page 4</h3>
                  <span>Light Version</span>
                </div>
              </div>
            </div>

            <!-- Landing Page 5 -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'landing-page-5'" class="choice-card clickable">
                <div class="icon-box light">
                  <i data-lucide="sun"></i>
                </div>
                <div class="content">
                  <h3>Landing Page 5</h3>
                  <span>Light Version</span>
                </div>
              </div>
            </div>

            <!-- Landing Page Dark -->
            <div class="col-md-5 col-lg-4">
              <div @click="selectedTheme = 'landing-page-dark'" class="choice-card dark clickable">
                <div class="icon-box dark">
                  <i data-lucide="moon"></i>
                </div>
                <div class="content">
                  <h3>Landing Page Dark</h3>
                  <span>Dark Version</span>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-5">
            <button @click="selectedCategory = null" class="btn-back">
              <i data-lucide="arrow-left"></i>
              Back to Sections
            </button>
          </div>
        </div>

        <!-- Step 3: Language Selection -->
        <div v-else key="step2">
          <h1 class="main-title" v-if="selectedCategory === 'home'">
            {{ ['landing-page-dark'].includes(selectedTheme) ? 'Dark Version' : 'Light Version' }}
          </h1>
          <h1 class="main-title" v-else>
            {{ selectedTheme.startsWith('about/about-') ? 'About ' + selectedTheme.split('-')[1] : 
               selectedTheme.startsWith('services/services-') ? 'Services ' + selectedTheme.split('-')[1] : 
               selectedTheme.startsWith('team/team-') ? 'Team ' + selectedTheme.split('-')[1] : 
               selectedTheme.startsWith('blog/blog-details-') ? 'Blog Details ' + selectedTheme.split('blog-details-')[1] : 
               selectedTheme.startsWith('blog/blog-') ? 'Blog ' + selectedTheme.split('blog-')[1] : 
               selectedTheme.startsWith('contact/contact-') ? 'Contact ' + selectedTheme.split('contact-')[1] : 
               selectedTheme.startsWith('privacy/privacy-') ? 'Privacy ' + selectedTheme.split('privacy-')[1] : 'Pages' }}
          </h1>
          <p class="subtitle">Select your preferred language</p>

          <div class="row g-4 mt-4 justify-content-center">
            <!-- Arabic -->
            <div class="col-md-5 col-lg-4">
              <NuxtLink :to="`/${selectedTheme}/ar`" class="choice-card">
                <div class="icon-box gold">
                  <i data-lucide="languages"></i>
                </div>
                <div class="content">
                  <h3>العربية</h3>
                  <span>Arabic</span>
                </div>
              </NuxtLink>
            </div>

            <!-- English -->
            <div class="col-md-5 col-lg-4">
              <NuxtLink :to="`/${selectedTheme}/en`" class="choice-card">
                <div class="icon-box gold">
                  <i data-lucide="languages"></i>
                </div>
                <div class="content">
                  <h3>English</h3>
                  <span>English</span>
                </div>
              </NuxtLink>
            </div>
          </div>

          <div class="mt-5">
            <button @click="goBackFromLanguage" class="btn-back">
              <i data-lucide="arrow-left"></i>
              {{ selectedCategory === 'home' ? 'Back to Versions' : 
                 selectedCategory === 'about' ? 'Back to About Pages' : 
                 selectedCategory === 'team' ? 'Back to Team Pages' : 
                  selectedCategory === 'blog' ? 'Back to Blog Pages' : 
                  selectedCategory === 'privacy' ? 'Back to Privacy Pages' : 
                  selectedCategory === 'terms' ? 'Back to Terms Pages' : 
                  selectedCategory === 'contact' ? 'Back to Contact Pages' : 'Back to Services Pages' }}
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const selectedCategory = ref(null)
const selectedTheme = ref(null)

const goBackFromLanguage = () => {
  selectedTheme.value = null
}

useHead({
  title: 'Al Riyadh Law Firm | Version Selection',
  link: [
    { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' }
  ],
  script: [
    { src: 'https://unpkg.com/lucide@latest' }
  ]
})

const initIcons = () => {
  if (window.lucide) {
    window.lucide.createIcons()
  }
}

onMounted(() => {
  initIcons()
})

// Re-initialize icons when switching steps
watch([selectedCategory, selectedTheme], () => {
  setTimeout(initIcons, 50)
})
</script>

<style scoped>
.selection-page {
  min-height: 100vh;
  background-color: #0c142b;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  color: white;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

.main-logo {
  height: 80px;
  margin-bottom: 30px;
}

.main-title {
  font-weight: 800;
  font-size: 2.5rem;
  color: #c3a46e;
  margin-bottom: 10px;
}

.subtitle {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
  margin-bottom: 40px;
}

.choice-card {
  display: block;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px 30px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  height: 100%;
  cursor: pointer;
}

.choice-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.1);
  border-color: #c3a46e;
}

.icon-box {
  width: 70px;
  height: 70px;
  margin: 0 auto 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
}

.icon-box.light {
  background: #f8f9fa;
  color: #c3a46e;
}

.icon-box.dark {
  background: #1a222e;
  color: #c3a46e;
}

.icon-box.gold {
  background: rgba(195, 164, 110, 0.1);
  color: #c3a46e;
  border: 1px solid rgba(195, 164, 110, 0.3);
}

.icon-box i {
  width: 35px;
  height: 35px;
}

.content h3 {
  font-weight: 700;
  font-size: 1.5rem;
  color: white;
  margin-bottom: 8px;
}

.content span {
  color: #c3a46e;
  font-weight: 600;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.btn-back {
  background: transparent;
  border: 1px solid rgba(195, 164, 110, 0.5);
  color: #c3a46e;
  padding: 12px 25px;
  border-radius: 12px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
}

.btn-back:hover {
  background: rgba(195, 164, 110, 0.1);
  border-color: #c3a46e;
  transform: translateX(-5px);
}

.btn-back i {
  width: 20px;
  height: 20px;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 768px) {
  .main-title { font-size: 2rem; }
  .choice-card { padding: 30px 20px; }
}
</style>
