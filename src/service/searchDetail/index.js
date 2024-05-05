import request from '../config/index.js'

// 用户信息的模糊搜索
export const searchUserApi = (search) => {
  return request({
    url: '/api/search/user',
    method: 'POST',
    data: {
      search: search
    }
  })
}

// 书架的模糊搜索
export const searchBookShelfApi = (search) => {
  return request({
    url: '/api/search/bookshelf',
    method: 'POST',
    data: {
      search: search
    }
  })
}

// 问题的模糊搜索
export const searchQuestionApi = (search) => {
  return request({
    url: '/api/search/question',
    method: 'POST',
    data: {
      search: search
    }
  })
}

// 文章的模糊搜索
export const searchDynamicApi = (search) => {
  return request({
    url: '/api/search/dynamic',
    method: 'POST',
    data: {
      search: search
    }
  })
}
