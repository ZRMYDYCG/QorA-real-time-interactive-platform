import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { getLocalStorage } from '@/utils/index.js'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

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
        component: () => import('@/views/ExchangeCommunity/index.vue'),
        redirect: '/exchangeCommunity/communityRecommend',
        children: [
          {
            path: '/exchangeCommunity/communityRecommend',
            component: () =>
              import('@/views/ExchangeCommunity/children/CommunityRecommend/index.vue')
          },
          {
            path: '/exchangeCommunity/communityConcern',
            component: () => import('@/views/ExchangeCommunity/children/CommunityConcern/index.vue')
          },
          {
            path: '/exchangeCommunity/communityTags',
            component: () => import('@/views/ExchangeCommunity/children/CommunityTags/index.vue')
          },
          {
            path: '/exchangeCommunity/communityColumn',
            component: () => import('@/views/ExchangeCommunity/children/CommunityColumn/index.vue')
          },
          {
            path: '/exchangeCommunity/communityTopic',
            component: () => import('@/views/ExchangeCommunity/children/CommunityTopic/index.vue')
          }
        ]
      },
      {
        path: '/findOut',
        component: () => import('@/views/FindOut/index.vue'),
        redirect: '/findOut/latest',
        children: [
          {
            path: '/findOut/latest',
            component: () => import('@/views/FindOut/children/FindOutLatest/index.vue')
          },
          {
            path: '/findOut/urgent',
            component: () => import('@/views/FindOut/children/FindOutUnresolved/index.vue')
          },
          {
            path: '/findOut/commend',
            component: () => import('@/views/FindOut/children/FindOutreCommend/index.vue')
          },
          {
            path: '/findOut/unresolved',
            component: () => import('@/views/FindOut/children/FindOutUnresolved/index.vue')
          }
        ]
      },
      {
        path: '/findOut/detail/:id',
        component: () => import('@/views/HelpDetail/index.vue')
      },
      {
        path: '/searchDetail',
        component: () => import('@/views/SearchDetail/index.vue')
      },
      {
        path: '/chatRoom',
        component: () => import('@/views/ChatRoom/index.vue'),
        children: [
          {
            path: '',
            component: () => import('@/views/ChatRoom/children/Default/index.vue')
          },
          {
            path: '/chatRoom/blackUser',
            component: () => import('@/views/ChatRoom/children/BlacklistUser/index.vue')
          },
          {
            path: '/chatRoom/chatDetail/:id',
            component: () => import('@/views/ChatRoom/children/ChatDetail/index.vue')
          },
          {
            path: '/chatRoom/SearchUser',
            component: () => import('@/views/ChatRoom/children/SearchUser/index.vue')
          },
          {
            path: '/chatRoom/CharSetting',
            component: () => import('@/views/ChatRoom/children/ChatSetting/index.vue')
          }
        ]
      },
      {
        path: '/topicDetail/:id',
        component: () => import('@/views/TopicDetail/index.vue')
      },
      {
        path: '/publishArticle',
        component: () => import('@/views/PublishArticle/index.vue')
      },
      {
        path: '/seek',
        component: () => import('@/views/Seek/index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

router.beforeEach((to, from, next) => {
  const token = getLocalStorage('token')

  if (to.path === '/login' && token) {
    // 如果已经登录，尝试访问登录页面，则重定向到主页
    next('/')
  } else {
    nprogress.start() // 开始进度条
    if (to.path !== '/login' && !token) {
      // 如果未登录且尝试访问非登录页面
      next('/login') // 重定向到登录页面
      ElMessage({
        message: '请进行登录',
        type: 'error' // 使用错误类型提示需要登录
      })
    } else {
      next() // 正常进入目标路由
    }
  }
})

router.afterEach((to, from) => {
  nprogress.done() // 完成路由后隐藏进度条
})

export default router
