import { defineStore } from 'pinia'
import { publicShowReviewApi, publicCommentsApi } from '@/service/public/index.js'
import { reorganizeData } from '@/utils/index.js'
import { ref } from 'vue'

export const usePublishArticleStore = defineStore('publishArticleStore', () => {
  // 渲染评论区
  let commentList = ref([])
  const handlePublicShowReviewApi = (id) => {
    publicShowReviewApi(id, 'dynamic').then((res) => {
      console.log('评论区:', res)
      commentList.value = reorganizeData(res.data.data.reverse())
      console.log('最终渲染的一级评论:', commentList.value)
    })
  }
  // 发布评论
  const handlePublicCommentsApi = async (
    review_object_type,
    review_user,
    review_object_id,
    content,
    backer,
    review_grade_top,
    review_top_id
  ) => {
    const res = await publicCommentsApi(
      review_object_type,
      review_user,
      review_object_id,
      content,
      backer,
      review_grade_top,
      review_top_id
    )
    console.log(res)
    handlePublicShowReviewApi(review_object_id)
  }
  return {
    commentList,
    handlePublicShowReviewApi,
    handlePublicCommentsApi
  }
})
