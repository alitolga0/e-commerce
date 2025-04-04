import { createRouter, createWebHistory } from 'vue-router'; 
import HomePage from '../views/HomePage.vue';
import ProductsPage from '../views/ProductsPage.vue';
import CartPage from '../views/CartPage.vue';
import AccountPage from '../views/AccountPage.vue';
import LoginPage from '../views/LoginPage.vue';  

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/products',
    name: 'ProductsPage',
    component: ProductsPage
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: CartPage
  },
  {
    path: '/account',
    name: 'AccountPage',
    component: AccountPage
  },
  
  {
    path: '/login',
    name: 'LoginPage',  
    component: LoginPage
  }
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
