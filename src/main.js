import './assets/main.css'
import {createApp} from "vue";
import App from './App.vue'
import 'vuetify/_styles.scss';
import vuetify from "@/vuetify.js";

const app = createApp(App)

app
  .use(vuetify)
  .mount('#app')
