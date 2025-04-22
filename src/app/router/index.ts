import { createRouter, createWebHistory } from 'vue-router';
import { Schedule } from '@/pages/schedule';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DefaultLayout,
      children: [{ path: '/', name: 'Schedule', component: Schedule }],
    },
  ],
});

export default router;
