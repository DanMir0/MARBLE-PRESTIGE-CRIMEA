<script setup>
import NavigationMenu from "@/components/NavigationMenu.vue";
</script>

<template>
  <div class="hero-section">
    <NavigationMenu></NavigationMenu>
    <v-container>
      <div class="header">
        <div class="header-content-text">
          <img src="/ic-brain.svg" class="icon"/>
          <h1 class="text-white font-weight-bold">ПРЕСТИЖ КРЫМ</h1>
        </div>
        <div class="header-description ml-16">
          <p class="text-white ml-5">
            Компания «Мрамор Престиж Крым» — ваш надежный партнёр в мире изысканных мраморных изделий.
            <br>Доверьте нам воплощение ваших идей, и мы превратим их в мраморные шедевры,
            которые будут радовать вас долгие годы.
          </p>
        </div>
        <div class="header-actions">
          <v-btn variant="outlined" size="x-large" color="white" class="white-btn" outlined>
            <a href="#about" class="text-white">УЗНАЙТЕ БОЛЬШЕ О НАС</a>
          </v-btn>
          <v-btn color="#FF5A30" size="x-large" class="orange-btn">
            <a href="mailto:info@yourcompany.com" class="text-white">ЖДЁМ ВАШИ ВОПРОСЫ</a>
          </v-btn>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style scoped>
.hero-section {
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
  url('/header.png') center center / cover no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 120px; /* Отступ, чтобы заголовок не залезал под меню */
}

.header {
  text-align: left;
  max-width: 900px;
  width: 100%;
}

.header-content-text {
  display: flex;
  align-items: center;
  gap: 10px;
}

h1 {
  font-size: 72px;
  font-weight: bold;
}

.header-description {
  font-size: 20px;
  max-width: 640px;
  margin-top: 20px;
}

.header-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 30px;
}

.white-btn, .orange-btn {
  transition: all 0.3s ease-in-out;
  min-width: 200px;
}

.white-btn:hover {
  background: rgba(255, 255, 255, 0.2) !important;
  transform: scale(1.05);
}

.orange-btn:hover {
  background: #e04d28 !important;
  transform: scale(1.05);
}

/* === АДАПТИВНОСТЬ === */
@media (max-width: 1024px) {
  .hero-section {
    height: auto;
    padding: 40px 20px;
    text-align: center;
  }

  .header {
    padding-top: 60px;
  }

  .header-content-text {
    justify-content: center;
  }

  h1 {
    font-size: 48px;
  }

  .header-description {
    font-size: 18px;
    margin-top: 15px;
    text-align: center;
  }

  .header-actions {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 36px;
  }

  .header-actions {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 28px;
  }

  .header-description {
    font-size: 14px;
  }

  .header-actions {
    gap: 12px;
  }

  .white-btn, .orange-btn {
    font-size: 14px;
    min-width: 100%;
  }
}
</style>
