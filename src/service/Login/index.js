import request from '../config/index.js'

export const adminLogin = () =>
  request.post('/api/login', { user_number: '12', user_password: '12' })
