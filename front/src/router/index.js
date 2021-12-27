import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '@/views/MainView.vue'
import MenuView from '@/views/MenuView.vue'
import ClosetView from '@/views/ClosetView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: MainView
  },
  {
    path: '/menu',
    name: 'MenuView',
    component: MenuView
  },
  {
    path: '/closet',
    name: 'ClosetView',
    component: ClosetView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
