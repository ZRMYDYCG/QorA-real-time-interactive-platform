import { ref } from 'vue'
import { defineStore } from 'pinia'
import { adminLogin, enrollAccount } from '@/service/Login/index.js'
import router from '@/router/index.js'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { setLocalStorage, getLocalStorage } from '@/utils/index.js'

export const useLoginStore = defineStore('loginStore', () => {
  const token = getLocalStorage('token') ? getLocalStorage('token') : ''
  const userInfo = token ? getLocalStorage('userInfo') : {}
  const loginAccountInfo = ref({})
  let user_id = ref(null)
  const accountLoginAction = async (userInfo) => {
    console.log(userInfo)
    const res = await adminLogin(userInfo)
    console.log(res)
    user_id.value = res.data.user_id
    if (res.data.message === '登录成功') {
      setLocalStorage(
        'token',
        'skhfiasgf324324aw324324324henceforward72384723847283748324732847328'
      )
      console.log('用户 id', user_id)
      await router.push('/').then(() => {
        ElMessage({
          message: '登录成功',
          type: 'success'
        })
        userInfo.value = res.data
        setLocalStorage('userInfo', userInfo)
      })
    }
  }
  const enrollLoginAccount = async (accountInfo) => {
    await enrollAccount(accountInfo).then(() => {
      ElMessage({
        message: '注册成功',
        type: 'success'
      })
    })
  }

  return {
    token,
    userInfo,
    user_id,
    loginAccountInfo,
    accountLoginAction,
    enrollLoginAccount
  }
})
