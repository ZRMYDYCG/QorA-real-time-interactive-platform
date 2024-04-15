import { ref } from 'vue'
import { defineStore } from 'pinia'
import { adminLogin } from '@/service/Login/index.js'

export const useLoginStore = defineStore('loginStore', () => {
  const token = ref('')
  const userInfo = ref({})
  const loginAccountInfo = ref({})
  const accountLoginAction = async () => {
    const res = await adminLogin()
    console.log(res)
  }

  return {
    token,
    userInfo,
    loginAccountInfo,
    accountLoginAction
  }
})
