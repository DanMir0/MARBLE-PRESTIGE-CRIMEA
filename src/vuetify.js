import {createVuetify} from 'vuetify';
import * as components from 'vuetify/components'; // Импорт всех компонентов
import * as directives from 'vuetify/directives'; // Импорт всех директив
import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
  },
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        colors: {
          primary: '#FFFFFF', // основной цвет
          secondary: '#787A80', // второстепенный цвет
          accent: '#FF5A30',
          // success: '#56CA00',
          // info: '#16B1FF',
          // warning: '#FFB400',
          // error: '#FF4C51',
        },
        typography: {
          fontFamily: 'Ubuntu, sans-serif',
        }
      },
    },
  },
  components,
  directives,
})

export default vuetify;
