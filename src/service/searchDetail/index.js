import request from '../config/index.js'

export const searchBookShelf = (search) => {
  return request({
    url: '/api/search/bookshelf',
    data: {
      search: search
    }
  })
}
