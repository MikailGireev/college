import './app/assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import PrimeVue from 'primevue/config';
import { Calendar } from 'primevue';
import Aura from '@primevue/themes/aura';

import App from './app/App.vue';
import router from './app/router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: 'none',
    },
  },
});

app.mount('#app');

app.component('UiCalendar', Calendar);
