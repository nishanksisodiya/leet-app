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
    path: '/base',
    component: () => import('../views/basePage.vue'),
    children: [
      {
        path: '',
        name: 'home',
        redirect: 'index',
        component: () => import('../views/home.vue'),
        children: [
          {
            path: 'index',
            name: 'Dashboard',
            component: () => import('../views/home-index.vue')
          },
          {
            path: 'dept/:deptName',
            name: 'Department Dashboard',
            component: () => import('../views/home-dept.vue')
          }
        ]
      },
      {
        path: 'settings',
        redirect: 'settings/index',
        component: () => import('../views/settings.vue'),
        children: [
          {
            path: 'index',
            name: 'Account Settings',
            component: () => import('../views/settings-index.vue')
          },
          {
            path: 'add-staff',
            name: 'Add Staff',
            component: () => import('../views/settings-addStaff.vue')
          },
          {
            path: 'add-class',
            name: 'Add Class',
            component: () => import('../views/settings-addClass.vue')
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
