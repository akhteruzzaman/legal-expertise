<template>
  <section class="profile-section">
    <div class="container-fluid px-lg-5">
      <div class="profile-card">
        <!-- Photo -->
        <div class="profile-photo-wrap">
          <img src="/assets/lawyer-details-1.png" alt="Attorney Abdullah bin Mohammed Al-Qahtani" class="profile-photo" />
        </div>
        <!-- Info -->
        <h1 class="profile-name">Attorney Abdullah bin Mohammed Al-Qahtani</h1>
        <p class="profile-desc">
          A lawyer and legal consultant specializing in commercial cases and contract drafting, with hands-on experience representing companies and individuals.
        </p>
        <a href="#" class="profile-role-link">Legal Consultant</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.profile-section {
  background-color: #ffffff;
  padding: 30px 0 50px;
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

.profile-name {
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  color: #1a222e;
  margin-bottom: 12px;
}

.profile-desc {
  font-family: 'Inter', sans-serif;
  font-size: 0.88rem;
  color: #5a6070;
  line-height: 1.8;
  max-width: 520px;
  margin-bottom: 18px;
}

.profile-role-link {
  font-family: 'Inter', sans-serif;
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
