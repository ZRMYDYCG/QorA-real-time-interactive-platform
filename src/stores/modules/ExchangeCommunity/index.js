import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchAllRecommendApi } from '@/service/ExchangeCommunity/index.js'
import { attentionApi } from '@/service/UserHome/index.js'
import { ElMessage } from 'element-plus'
import { toggleAttentionStatus } from '@/utils/filterdynamic.js'

export const useExchangeCommunityStore = defineStore('exchangeCommunityStore', () => {
  // 控制用户私信弹窗是否弹出
  let DrawerState = ref(false)
  const openDrawer = () => {
    DrawerState.value = !DrawerState.value
  }

  // 首页推荐的所有数据
  let dynamicDetail = ref([])
  const fetchAllRecommend = async () => {
    const res = await fetchAllRecommendApi()
    console.log(res.data.data)
    dynamicDetail.value = res.data.data
  }

  // 用户关注与取消关注
  const handleAttentionApi = (user_id, user_for, type, dynamic_id) => {
    attentionApi(user_id, user_for, type).then(async (res) => {
      console.log(res)
      dynamicDetail.value = toggleAttentionStatus(dynamicDetail.value, dynamic_id, user_for)
      if (res.data.message === '取关成功') {
        ElMessage.success('取消关注')
      } else {
        ElMessage.success('关注成功')
      }
    })
  }
  return {
    DrawerState,
    openDrawer,
    dynamicDetail,
    fetchAllRecommend,
    handleAttentionApi
  }
})
