import request from '../config/index.js'

// 用户修改个人简介
export const modifyUserInformationApi = (user_id, user_introduce) => {
  return request({
    url: '/api/change_introduce',
    method: 'POST',
    data: {
      user_id: user_id,
      user_introduce: user_introduce
    }
  })
}
