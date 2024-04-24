import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import UnoCSS from 'unocss/vite'
import requireTransform from 'vite-plugin-require-transform'

// 引入插件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 【第一步】引入插件
// import vitePluginRequire from 'vite-plugin-require'

// 查看文档 https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    requireTransform({ fileRegex: /.js$|.vue$/ }),
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
    // vitePluginRequire({
    //   fileRegex: /.js$|.jsx$|.vue$/
    // })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
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
