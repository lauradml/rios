import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/rios',
    name: 'rios',
    component: () => import('../views/Rios.vue')
  },
  {
    path: '/addRiver/',
    name: 'addRiver',
    component: () => import('../views/AddRiver.vue')
  },
  {
  path: '/comfirmCard',
  name: 'comfirmCard',
  component: () => import('../views/ComfirmCard.vue')
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
