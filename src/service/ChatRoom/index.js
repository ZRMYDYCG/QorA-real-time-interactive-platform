import request from '../config/index.js'
import { useLoginStore } from '@/stores/modules/Login/index.js'

const loginStore = useLoginStore()

// 进入聊天框 渲染消息列表和好友列表
export const chatInApi = (user_id) => {
  return request({
    url: '/api/chat',
    method: 'POST',
    data: {
      user_id: user_id
    }
  })
}

export const chatUserMessageListApi = (for_id) => {
  return request({
    url: '/api/chat/user',
    method: 'POST',
    data: {
      user_id: loginStore.userInfo?.value?.user_id,
      for_id: for_id
    }
  })
}
