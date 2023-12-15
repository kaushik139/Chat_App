import { createRouter, createWebHistory } from 'vue-router'

const routes = [

  {
    path: '/',
    name: 'LandingPage',
    component: () => import('../views/LandingPage.vue')
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/AuthView.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/room',
    name: 'Room',
    component: () => import('../views/RoomView.vue')
  },
]
 

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
