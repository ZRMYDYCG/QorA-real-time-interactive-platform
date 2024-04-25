import request from '../config/index.js'

// 查询所有标签
export const showAllTags = () => {
  return request({
    url: '/api/index/tags',
    data: {}
  })
}

// 查询某标签下的内容
