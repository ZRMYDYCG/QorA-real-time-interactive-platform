import request from '../config/index.js'

// 用户信息的模糊搜索
export const searchUserApi = () => {
  return request({
    url: '/api/search/user',
    method: 'POST',
    data: {}
  })
}
