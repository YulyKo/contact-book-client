import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import AddContactPage from '@/views/AddContactPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/add',
    name: 'AddContactPage',
    component: AddContactPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
