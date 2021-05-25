import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Welcome from '../views/Welcome.vue'
import List from '../views/List.vue'
import Stock from '../views/Stock.vue'
import Logout from '../views/Logout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/stock',
    name: 'Stock',
    component: Stock
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
