<template>
  <section class="cta-section">
    <div class="container">
      <div class="cta-container">
        <div class="cta-content text-start d-flex flex-column align-items-start">
          <h2 class="cta-title">Do you need legal support?</h2>
          <p class="cta-subtitle">Get a legal consultation from our specialized team, and let us help you make the right legal decision.</p>
          <a href="#" class="cta-btn mt-3 p-3 px-5">Request Consultation</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.cta-section {
    padding: 40px 0 10px;
    background-color: #ffffff;
}

.cta-container {
    background-color: #f9f6f0; /* Requested background color */
    border-radius: 30px;
    padding: 60px 100px;
    position: relative;
    overflow: hidden;
    margin: 0 -100px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.cta-content {
    position: relative;
    z-index: 2;
    text-align: left;
    max-width: 600px;
    color: #1a2b4b; /* Navy text for contrast */
}

.cta-title {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 20px;
    color: #1a2b4b;
}

.cta-subtitle {
    font-size: 1.2rem;
    color: #616161;
    margin-bottom: 40px;
    line-height: 1.7;
}

.cta-btn {
    background-color: #1a2b4b;
    color: #ffffff !important;
    padding: 15px 45px;
    border-radius: 50px;
    font-weight: 700;
    text-decoration: none;
    display: inline-block;
    transition: all 0.3s ease;
    font-size: 1.1rem;
}

.cta-btn:hover {
    background-color: #c3a46e;
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

@media (max-width: 991px) {
    .cta-container {
        margin: 0;
        padding: 60px 40px;
        flex-direction: column-reverse;
        justify-content: center;
        text-align: center;
        border-radius: 25px;
    }

    .cta-content {
        text-align: center;
        max-width: 100%;
    }

    .cta-title {
        font-size: 2rem;
    }
}
</style>
