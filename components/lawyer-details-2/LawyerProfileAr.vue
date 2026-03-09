<template>
  <section class="profile-section">
    <div class="container-fluid px-lg-5">
      <div class="profile-card">
        <!-- Photo -->
        <div class="profile-photo-wrap">
          <img src="/assets/lawyer-details-2.png" alt="المحامي عبدالله بن محمد القحطاني" class="profile-photo" />
        </div>
        <!-- Info -->
        <h1 class="profile-name">المحامي عبدالله بن محمد القحطاني</h1>
        <p class="profile-desc">
          محام ومستشار قانوني متخصص في القضايا التجارية وصياغة العقود، يتمتع بخبرة عملية في تمثيل الشركات والأفراد.
        </p>
        <a href="#" class="profile-role-link">مستشار قانوني</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.profile-section {
  background-color: #ffffff;
  padding: 30px 0 50px;
  direction: rtl;
}

.profile-card {
  background-color: #e8edf5;
  border-radius: 24px;
  padding: 50px 30px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* Photo */
.profile-photo-wrap {
  width: 95px;
  height: 95px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
  background-color: #d0d8e8;
}

.profile-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}

/* Name */
.profile-name {
  font-family: 'Cairo', sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  color: #1a222e;
  margin-bottom: 12px;
}

/* Description */
.profile-desc {
  font-family: 'Cairo', sans-serif;
  font-size: 0.88rem;
  color: #5a6070;
  line-height: 1.8;
  max-width: 520px;
  margin-bottom: 18px;
}

/* Gold role link */
.profile-role-link {
  font-family: 'Cairo', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  color: #c3a46e;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s;
}

.profile-role-link:hover {
  color: #a8854e;
}

@media (max-width: 575px) {
  .profile-card { padding: 36px 20px 30px; }
  .profile-name { font-size: 1.1rem; }
}
</style>
