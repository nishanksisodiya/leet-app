import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing',
    component: () => import('../views/landing.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/home',
    component: () => import('../views/home.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/home-index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
