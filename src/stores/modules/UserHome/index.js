import { fetchPersonalHomepageApi } from '@/service/UserHome/index.js'
import { ref } from 'vue'
import { defineStore } from 'pinia'
// import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { setLocalStorage } from '@/utils/index.js'

export const useUserHomeStore = defineStore('userHomeStore', () => {
  // 展示用户的主页:用户的所有信息，头像，历史记录，粉丝数，关注数
  const userHomeInfoDetail = ref({})
  const userHomeHistoryList = ref([])
  const handleFetchPersonalHomepageApi = async (user_id) => {
    const res = await fetchPersonalHomepageApi(user_id)
    console.log(res)
    userHomeInfoDetail.value = res.data.user_now
    userHomeHistoryList.value = res.data.history_list
    setLocalStorage('user_introduce', userHomeInfoDetail.value.user_introduce)
  }

  return {
    userHomeHistoryList,
    userHomeInfoDetail,
    handleFetchPersonalHomepageApi
  }
})
