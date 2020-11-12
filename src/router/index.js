import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import AddPage from '@/views/AddPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/add',
    name: 'AddForm',
    component: AddPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
