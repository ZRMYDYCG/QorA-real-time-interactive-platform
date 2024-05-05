import { ref } from 'vue'
import { defineStore } from 'pinia'
import {
  fetchAllRecommendApi,
  viewAllTagsApi,
  searchTagsApi
} from '@/service/ExchangeCommunity/index.js'
import { attentionApi } from '@/service/UserHome/index.js'
import { ElMessage } from 'element-plus'
import { toggleAttentionStatus } from '@/utils/filterdynamic.js'
import { setLocalStorage, filterIsAttention } from '@/utils/index.js'

export const useExchangeCommunityStore = defineStore('exchangeCommunityStore', () => {
  // 控制用户私信弹窗是否弹出
  let DrawerState = ref(false)
  const openDrawer = () => {
    DrawerState.value = !DrawerState.value
  }

  // 首页的关注页的数据推荐
  let dynamicConcern = ref([])

  // 首页推荐的所有数据
  let dynamicDetail = ref([])

  const fetchAllRecommend = async (id) => {
    const res = await fetchAllRecommendApi(id)
    console.log(res.data.data)
    dynamicDetail.value = res.data.data
    dynamicConcern.value = filterIsAttention(res.data.data)

    console.log('qwe', dynamicConcern)
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

  // 标签页面的分页查询
  let pageTotal = ref(0)
  let currentTags = ref([])
  let total = ref(0)
  const handleViewAllTagsApi = async (page_num = 12, page = 1) => {
    const res = await viewAllTagsApi(page_num, page)
    console.log(res)
    currentTags.value = res.data.tags_data
    total.value = res.data.num
    pageTotal.value = res.data.total_page
    setLocalStorage('pageTotal', pageTotal.value)
  }

  // 标签模糊搜索后的的分页查询
  const handleSearchTagsApi = async (search, page_num, page = 1) => {
    const res = await searchTagsApi(search, page_num, page)
    console.log(res)
    currentTags.value = res.data.tag_search_data
    total.value = res.data.total_num
    pageTotal.value = res.data.total_page
    setLocalStorage('pageTotal', pageTotal.value)
  }

  return {
    DrawerState,
    openDrawer,
    dynamicDetail,
    fetchAllRecommend,
    handleAttentionApi,
    handleViewAllTagsApi,
    currentTags,
    total,
    pageTotal,
    handleSearchTagsApi,
    dynamicConcern
  }
})
