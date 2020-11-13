import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import AddContactPage from '@/views/AddContactPage.vue';
import EditContactPage from '@/views/EditContactPage.vue';

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
  {
    path: '/edit/:id',
    name: 'EditContactPage',
    component: EditContactPage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
