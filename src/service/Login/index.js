import request from '../config/index.js'

// 用户登录
export const adminLogin = (accountInfo) => {
  return request.post('/api/login', {
    user_number: accountInfo.user_number,
    user_password: accountInfo.user_password
  })
}

// 用户注册
export const enrollAccount = (accountInfo) => {
  return request.post('/api/enroll', {
    user_number: accountInfo.user_number,
    user_password: accountInfo.user_password
  })
}

// 用户下线
export const loginOutApi = (user_id) => {
  return request({
    url: '/logout',
    data: {
      user_id: user_id
    }
  })
}
