<script setup>
import {ref} from "vue";
import {useDisplay} from 'vuetify';

const menuItems = ref(["О нас", "Мрамор", "Работы", "Контакты"]);
const drawer = ref(false);
const {mdAndUp} = useDisplay();
</script>
<template>
  <v-app-bar app color="#424551" dark height="115">
    <v-container class="d-flex align-center justify-between">
      <div class="d-flex align-center">
        <a href="#top">
          <img src="/logo1.svg" alt="Logo" class="mr-4 logo clickable"/>
        </a>
        <h2 class="text-grey">PRESTIGE CRIMEA</h2>
      </div>
      <v-spacer></v-spacer>
      <div v-if="mdAndUp" class="d-flex justify-between align-center  d-none d-md-flex">
        <v-btn color="#787A80" v-for="(item, index) in menuItems" :key="index" text>
          {{ item }}
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <div v-if="mdAndUp" class="contact-info d-flex align-center  d-none d-md-flex">
        <v-row class="d-flex align-center">
          <v-col cols="auto" class="d-flex align-center">
            <img src="/phone.svg" class="mr-2"/>
            <div>
              <p class="text-caption text-grey-lighten-1">Позвоните нам:</p>
              <a href="tel:+79780000082" class="contact-link">+7(978) 000-00-82</a>
            </div>
          </v-col>
          <v-col cols="auto" class="d-flex align-center">
            <img src="/Chat.svg" class="mr-2"/>
            <div>
              <p class="text-caption text-grey-lighten-1">Напишите нам:</p>
              <a href="mailto:OsmanAga.com" target="_blank" class="contact-link">OsmanAga.com</a>
            </div>
          </v-col>
        </v-row>
      </div>

      <v-app-bar-nav-icon icon="mdi mdi-menu" class="d-flex d-md-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-container>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary app>
    <v-list>
      <v-list-item v-for="(item, index) in menuItems" :key="index">
        <v-list-item-title>{{ item }}</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list>
      <v-list-item>
        <v-icon color="accent" size="24" class="mr-2">mdi-phone</v-icon>
        <a href="tel:+79780000082" class="contact-link">+7(978) 000-00-82</a>
      </v-list-item>
      <v-list-item>
        <v-icon color="accent" size="24" class="mr-2">mdi-message-text</v-icon>
        <a href="https://OsmanAga.com" target="_blank" class="contact-link">OsmanAga.com</a>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<style scoped>
.text-grey {
  color: #787A80;
}

.logo {
  border-radius: 50%;
}

.clickable {
  cursor: pointer;
}

.contact-info {
  padding: 20px 0;
}

.contact-link {
  text-decoration: none;
  color: #181818;
  font-weight: bold;
}

.contact-link:hover {
  text-decoration: underline;
}
</style>
