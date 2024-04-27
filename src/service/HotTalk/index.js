import request from '../config/index.js'

export const getHotTalkAPI = (data) => {
  return request({
    url: 'api/search/user',
    method: 'POST',
    data: {
      search: data
    }
  })
}
