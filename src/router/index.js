import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/exchangeCommunity',
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
      },
      {
        path: '/exchangeCommunity',
        component: () => import('@/views/ExchangeCommunity/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

router.beforeEach((to, from, next) => {
  nprogress.start() // 开始路由前显示进度条
  next()
})

router.afterEach((to, from) => {
  nprogress.done() // 完成路由后隐藏进度条
})

export default router
