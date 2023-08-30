import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import ProductsView from '../views/ProductsView.vue';
import CreateUserView from '../views/CreateUserView.vue';
import ProductDetailsView from '../views/ProductDetailsView.vue';
import ShoppingCartView from '../views/ShoppingCartView.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/user',
    name: 'user',
    component: CreateUserView,
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView,
    meta: { requiresAuth: true },
  },
  {
    path: '/products/:id',
    name: 'ProductDetails',
    component: ProductDetailsView,
    meta: { requiresAuth: true },
  },
  {
    path: '/cart',
    name: 'cart',
    component: ShoppingCartView,
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory("/"),
  routes
});

router.beforeEach((to, _from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = localStorage.getItem('userData');
    if (!token) {
      next('/');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;