<script setup>
import Carousel from "@/components/Carousel.vue";
</script>

<template>
  <div class="example">
    <div class="example-content">
      <div class="example-content-title ga-2 d-flex flex-column">
        <h2>Мрамор Престиж Крым</h2>
        <p>Мастерская изделий из натурального камня с многолетним опытом и любой сложности
          работы</p>
      </div>
      <Carousel class="carousel-margin-y"></Carousel>
    </div>
  </div>
</template>

<style scoped>
.example {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  color: #222;
  padding: 35px 20px;

  /* Основной фон */
  background-color: #f5e6d7;

  /* Фоновые изображения */
  background-image: url('/bg-example-top.png'),
  url('/bg-example-bottom.png');

  background-repeat: no-repeat, no-repeat;
  background-position: left top, right bottom;
  background-size: 30%, 30%;
}

/* Контейнер контента */
.example-content {
  width: 100%;
  max-width: 1300px;
}

.example-content-title {
  margin-top: 32px;
}

/* Заголовок */
.example-content-title h2 {
  font-size: 36px;
  font-weight: bold;
}

/* Подзаголовок */
.example-content-title p {
  font-size: 18px;
  color: #555;
}

.carousel-margin-y {
  margin: 64px 0;
}

/* Адаптив для планшетов и телефонов */
@media (max-width: 1024px) {
  .example {
    background-size: 40%, 40%;
    padding: 25px 20px;
  }

  .example-content-title {
    margin-top: 20px;
  }

  .example-content-title h2 {
    font-size: 28px;
  }

  .example-content-title p {
    font-size: 16px;
  }

  .carousel-margin-y {
    margin: 32px 0;
  }
}

@media (max-width: 768px) {
  .example {
    background-size: 50%, 50%;
    padding: 20px 10px;
  }

  .example-content {
    max-width: 90%;
  }

  .example-content-title {
    margin-top: 15px;
  }

  .example-content-title h2 {
    font-size: 24px;
  }

  .example-content-title p {
    font-size: 14px;
  }

  .carousel-margin-y {
    margin: 25px 0;
  }
}

@media (max-width: 480px) {
  .example {
    background-image: none; /* Убираем фоновый чертеж на маленьких экранах */
    padding: 15px 5px;
  }

  .example-content-title {
    margin-top: 15px;
  }

  .example-content-title h2 {
    font-size: 20px;
  }

  .example-content-title p {
    font-size: 12px;
  }

  .carousel-margin-y {
    margin: 15px 0;
  }
}
</style>
