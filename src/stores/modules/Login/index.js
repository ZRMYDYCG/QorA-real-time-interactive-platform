import { ref } from 'vue'
import { defineStore } from 'pinia'
import { userLogin } from '@/service/modules/Login/index.js'

export const useLoginStore = defineStore('loginStore', () => {
  const token = ref('')
  const userInfo = ref({})
  const loginAccountInfo = ref({})
  const accountLoginAction = async (accountInfo) => {
    const res = await userLogin(accountInfo)
    console.log(res)
  }

  return {
    token,
    userInfo,
    loginAccountInfo,
    accountLoginAction
  }
})
