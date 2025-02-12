<script setup>
import {computed, ref} from "vue";

const slides = ref([
  {src: "/example1.jpg"},
  {src: "/example2.jpg"},
  {src: "/example3.jpg"},
  {src: "/example4.jpg"},
])

// Адаптивная высота карусели
const carouselHeight = computed(() => {
  if (window.innerWidth < 480) return 300; // Мобильные
  if (window.innerWidth < 768) return 400; // Планшеты
  return 630; // ПК
});
</script>

<template>
  <v-carousel
    :height="carouselHeight"
    show-arrows="hover"
    cycle
    hide-delimiter-background>
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :src="slide.src"
      cover
      :width="1200">
    </v-carousel-item>
  </v-carousel>
</template>

<style scoped>

</style>
