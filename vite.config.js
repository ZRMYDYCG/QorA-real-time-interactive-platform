import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import UnoCSS from 'unocss/vite'

// 引入插件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// OSS 官方配置
// https://help.aliyun.com/document_detail/64097.html

// 查看文档 https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
    UnoCSS(),
    // 配置插件
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [
        // 配置elementPlus，采用sass样式配色系统
        ElementPlusResolver({ importStyle: 'sass' })
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // accessKeyId
  accessKeyId: '',
  // accessKeySecret
  accessKeySecret: '',
  // 填写Bucket所在地域(以华东1(杭州)为例，region填写为oss-cn-hangzhou)
  region: '',
  // 要连接的bucket名称
  bucket: '',
  // 是否支持自定义域名
  // cname: true,
  // 自定义域名
  // endpoint: 'http://xxx.com/'
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 引入 variable.scss 这样就可以在全局中使用 variable.scss 中预定义的变量了
        // 注意：给导入的路径最后加上 `;`
        additionalData: `
          @use '@/assets/scss/variable.scss' as *;
          @use '@/styles/element/index.scss' as *;
        `
      }
    }
  }
})
