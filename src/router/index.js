import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/home.vue'),
    redirect: '/battle',
    children: [
      {
        path: '/battle',
        component: () => import('../views/battle/main')
      },
      {
        path: '/bag',
        component: () => import('../views/bag/main')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
