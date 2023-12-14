import { createRouter, createWebHistory } from 'vue-router'

const routes = [

  {
    path: '/',   name: 'LandingPage',
    component: () => import('../views/LandingPage.vue')
  },
  {
    path: '/auth',   name: 'Auth',
    component: () => import('../views/AuthView.vue')
  },


]
 

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
