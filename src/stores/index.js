import { ref } from 'vue'
import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { setLocalStorage, getLocalStorage } from '@/utils/index.js'
import {} from '@/service/UserHome/index.js'

export const useLoginStore = defineStore('loginStore', () => {
  let userInfo = ref({})
  return {}
})
