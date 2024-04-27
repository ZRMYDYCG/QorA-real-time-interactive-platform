import request from '../config/index.js'

export const submitArtAPI = (data) => {
  return request({
    method: 'POST',
    url: '/api/dynamic',
    data: data
  })
}
