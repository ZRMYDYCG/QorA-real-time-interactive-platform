import request from '../config/index.js'

export const textBtn = (stuId = '220206636', password = '123456') => {
  return request({
    url: '/student/login',
    method: 'POST',
    data: {
      stuId: stuId,
      password: password
    }
  })
}
