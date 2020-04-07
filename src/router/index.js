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
    path: '/login/:data?',
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
      },
      {
        path: 'settings',
        redirect: 'settings/index',
        component: () => import('../views/settings.vue'),
        children: [
          {
            path: 'index',
            name: 'settings-index',
            component: () => import('../views/settings-index.vue')
          },
          {
            path: 'add-staff',
            name: 'settings-add-staff',
            component: () => import('../views/settings-addStaff.vue')
          },
          {
            path: 'add-class',
            name: 'setting-add-class',
            component: () => import('../views/settings-addClass.vue')
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: process.env.IS_ELECTRON ? 'hash' : 'history',
  routes
})

export default router
