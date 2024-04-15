import http from '../../config/index.js'

export const userLogin = (LoginInfo) => {
  return http.post({
    url: '/login',
    data: LoginInfo
  })
}
