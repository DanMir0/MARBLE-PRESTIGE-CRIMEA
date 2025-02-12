<script setup>
import Header from "@/components/Header.vue";
import MenuLayout from "@/components/MenuLayout.vue";
</script>

<template>
  <v-app>
      <Header></Header>
    <v-main class="v-main">
      <MenuLayout></MenuLayout>
    </v-main>
  </v-app>
</template>

<style scoped>
.v-main {
  padding-top: 0 !important;
  margin-top: 0 !important;
}
</style>
