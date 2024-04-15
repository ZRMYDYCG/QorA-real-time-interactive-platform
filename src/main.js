import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'normalize.css' // 重置样式
import './assets/scss/index.scss' // 重要样式出口
import { registerElementPlusIcons } from '@/utils/index.js'
// import 'element-plus/theme-chalk/dark/css-vars.css' // 暗黑模式 WRONG: 原组件主题色还保存
import '@/styles/theme/dark.scss'
import 'virtual:uno.css' // uno-css
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'

const app = createApp(App)

// 使用Pinia状态管理库
app.use(createPinia())

// 使用路由
app.use(router)

// 注册Element Plus图标
registerElementPlusIcons(app)

// 全局配置 ArcoVue 组件库
app.use(ArcoVue)

// 挂载应用
app.mount('#app')
