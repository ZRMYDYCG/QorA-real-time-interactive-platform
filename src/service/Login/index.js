import request from '../config/index.js'

export const adminLogin = (accountInfo) => {
  return request.post('/api/login', {
    user_number: accountInfo.user_number,
    user_password: accountInfo.user_password
  })
}

export const enrollAccount = (accountInfo) => {
  return request.post('/api/enroll', {
    user_number: accountInfo.user_number,
    user_password: accountInfo.user_password
  })
}
