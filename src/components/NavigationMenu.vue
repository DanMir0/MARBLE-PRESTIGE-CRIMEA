<script setup>
import { ref } from "vue";
import { useDisplay } from 'vuetify';

const menuItems = ref([
  { name: "О нас", link: "#about" },
  { name: "Мрамор", link: "#marble" },
  { name: "Работы", link: "#works" },
  { name: "Контакты", link: "#contacts" }
]);

const drawer = ref(false);
const { mdAndUp } = useDisplay();
</script>

<template>
  <v-app-bar class="v-app-bar" color="#424551" dark height="90">
    <v-container class="d-flex align-center justify-between">
      <div class="d-flex align-center">
        <a href="#top">
          <img src="/logo1.svg" alt="Logo" class="mr-4 logo clickable"/>
        </a>
        <h2>PRESTIGE CRIMEA</h2>
      </div>

      <v-spacer></v-spacer>

      <!-- Десктопное меню -->
      <div v-if="mdAndUp" class="d-flex justify-between align-center menu-desktop">
        <v-btn v-for="(item, index) in menuItems" :key="index" text class="menu-btn" :href="item.link">
          {{ item.name }}
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <!-- Контактная информация -->
      <div v-if="mdAndUp && $vuetify.display.width >= 1300" class="contact-info d-flex align-center">
        <v-row class="d-flex align-center flex-nowrap">
          <v-col cols="auto" class="d-flex align-center">
            <img src="/phone.svg" class="mr-2"/>
            <div>
              <p>Позвоните нам:</p>
              <a href="tel:+79780000082" class="contact-link text-white">+7(978) 000-00-82</a>
            </div>
          </v-col>
          <v-col cols="auto" class="d-flex align-center">
            <img src="/Chat.svg" class="mr-2"/>
            <div>
              <p>Напишите нам:</p>
              <a href="mailto:OsmanAga.com" class="contact-link text-white">OsmanAga.com</a>
            </div>
          </v-col>
        </v-row>
      </div>

      <!-- Бургер-меню -->
      <v-app-bar-nav-icon icon="mdi mdi-menu" class="d-flex d-md-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-container>
  </v-app-bar>

  <!-- Мобильное боковое меню -->
  <v-navigation-drawer v-model="drawer" temporary app>
    <v-list>
      <v-list-item v-for="(item, index) in menuItems" :key="index">
        <v-list-item-title>
          <a :href="item.link" class="menu-link">{{ item.name }}</a>
        </v-list-item-title>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list>
      <v-list-item>
        <v-list-item-title class="d-flex align-center">
          <img src="/phone.svg" class="mr-2"/>
          <a href="tel:+79780000082" class="contact-link">+7(978) 000-00-82</a>
        </v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title class="d-flex align-center">
          <img src="/Chat.svg" class="mr-2"/>
          <a href="mailto:OsmanAga.com" class="contact-link">OsmanAga.com</a>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
/* Шапка */
.v-app-bar {
  background-color: rgba(0, 0, 0, 0.2) !important;
  transition: background 0.3s ease-in-out;
}

/* Логотип */
.logo {
  margin-top: 15px;
  border-radius: 50%;
  width: 115px;
  height: 115px;
}

.clickable {
  cursor: pointer;
}

/* Контактная информация */
.contact-info {
  padding: 10px 0;
}

.contact-link {
  text-decoration: none;
  color: #181818;
  font-weight: bold;
}

.contact-link:hover {
  text-decoration: underline;
  color: #FF5A30;
}

/* Меню */
.menu-desktop {
  gap: 16px;
}

.menu-btn {
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  transition: all 0.3s ease-in-out;
}

.menu-btn:hover {
  color: #FF5A30;
  transform: scale(1.05);
}

/* Боковое меню */
.menu-link {
  text-decoration: none;
  color: #222;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
}

.menu-link:hover {
  color: #FF5A30;
}
@media (max-width: 1200px) {
  .contact-info {
    gap: 10px;
  }

  .contact-info p,
  .contact-link {
    font-size: 14px;
  }
}
/* АДАПТИВНОСТЬ */
@media (max-width: 1024px) {
  .contact-info {
    display: none;
  }
}

@media (max-width: 768px) {
  .menu-desktop {
    display: none;
  }

  .menu-btn {
    font-size: 14px;
  }
}
</style>
