import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import AdminView from "@/views/AdminView.vue";
import AddItemView from "@/views/AddItemView.vue";
import StoreView from "@/views/StoreView.vue";
import CartView from "@/views/CartView.vue";
import FavoriteView from "@/views/FavoriteView.vue";
import AccountView from "@/views/AccountView.vue";
import RegisterView from "@/views/RegisterView.vue";


const routes = [
  {
    path: '/',
    name: 'homeRoute',
    component: HomeView
  },
  {
    path: '/login',
    name: 'loginRoute',
    component: LoginView
  },
  {
    path: '/edit',
    name: 'registerRoute',
    component: AdminView
  },
  {
    path: '/add-item',
    name: 'addItemRoute',
    component: AddItemView
  },
  {
    path: '/store',
    name: 'storeRoute',
    component: StoreView
  },
  {
    path: '/cart',
    name: 'cartRoute',
    component: CartView
  },
  {
    path: '/favorite',
    name: 'favoriteRoute',
    component: FavoriteView
  },
  {
    path: '/account',
    name: 'accountRoute',
    component: AccountView
  },
  {
    path: '/register',
    name: 'registerRoute',
    component: RegisterView
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
