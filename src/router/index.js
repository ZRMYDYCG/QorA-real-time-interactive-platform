import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/userHome',
    children: [
      {
        path: '/userHome',
        name: 'UserHome',
        component: () => import('@/views/UserHome/index.vue'),
        redirect: '/userHome/index',
        children: [
          {
            path: '/userHome/index',
            name: 'userHomeIndex',
            component: () => import('@/views/UserHome/children/UserHomeIndex/index.vue')
          },
          {
            path: '/userHome/dynamic',
            name: 'userHomeDynamic',
            component: () => import('@/views/UserHome/children/userHomeDynamic/index.vue')
          },
          {
            path: '/userHome/response',
            name: 'userHomeResponse',
            component: () => import('@/views/UserHome/children/userHomeResponse/index.vue')
          },
          {
            path: '/userHome/help',
            name: 'userHomeHelp',
            component: () => import('@/views/UserHome/children/userHomeHelp/index.vue')
          },
          {
            path: '/userHome/collection',
            name: 'userHomeCollection',
            component: () => import('@/views/UserHome/children/userHomeCollection/index.vue')
          },
          {
            path: '/userHome/column',
            name: 'userHomeColumn',
            component: () => import('@/views/UserHome/children/userHomeColumn/index.vue')
          }
        ]
      },
      {
        path: '/editUserInfo',
        component: () => import('@/views/EditUserInfo/index.vue')
      },
      {
        path: '/socializingDetail',
        component: () => import('@/views/SocializingDetail/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router
