import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import favorites from '../components/favorites.vue';
import about from '../components/about.vue';
import login from '../components/login.vue';
import signup from '../components/signup.vue';
import product from '../components/product.vue';
import account from '../components/account.vue';
import error from '../components/error.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: favorites,
  },
  {
    path: '/about',
    name: 'about',
    component: about,
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup,
  },
  {
    path: '/product/:productTitle',
    name: 'product',
    component: product,
  },
  {
    path: '/account',
    name: 'account',
    component: account,
  },
  {
    path: '/account',
    name: 'account',
    component: account,
  },
  {
    path: '/:catchAll(.*)',
    name: 'error',
    component: error,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
