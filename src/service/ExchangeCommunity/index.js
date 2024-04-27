import request from '../config/index.js'
import { useLoginStore } from '@/stores/modules/Login/index.js'

const loginStore = useLoginStore()

// 查询推荐的文章列表
export const fetchAllRecommendApi = () => {
  return request({
    url: '/api/index/dynamic',
    method: 'POST',
    data: {
      id: loginStore?.userInfo?.value?.user_id
    }
  })
}

// 查询某篇文章的详情
export const fetchEssayDetail = (object_id) => {
  return request({
    url: '/api/show/dynamic',
    method: 'POST',
    data: {
      object_id: object_id
    }
  })
}

// 将文章收藏进入书架

// dylist 文章id列表
export const addEassayToColumn = (id, bookshelf_id, dylist) => {
  return request({
    url: '/api/move/dynamic',
    data: {
      id: id,
      bookshelf_id: bookshelf_id,
      dylist: dylist
    }
  })
}
