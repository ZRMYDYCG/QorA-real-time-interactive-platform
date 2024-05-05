import request from '../config/index.js'

// 查询推荐的文章列表 ✅
export const fetchAllRecommendApi = (id) => {
  return request({
    url: '/api/index/dynamic',
    method: 'POST',
    data: {
      id: id
    }
  })
}

// 查询某篇文章的详情 ✅
export const fetchEssayDetail = (object_id) => {
  return request({
    url: '/api/show/dynamic',
    method: 'POST',
    data: {
      object_id: object_id
    }
  })
}

// 将文章收藏进入书架 ✅
// dylist 文章id列表
export const addEassayToColumn = (id, bookshelf_id, dylist) => {
  return request({
    url: '/api/move/dynamic',
    data: {
      id: id,
      bookshelf_id: bookshelf_id,
      dylist: dylist
    }
  })
}

// 查看标签 ✅
// page_num 每一页的偏移量
// page 第几页
export const viewAllTagsApi = (page_num, page) => {
  return request({
    url: '/api/index/tags',
    method: 'POST',
    data: {
      page_num: page_num,
      page: page
    }
  })
}

// 根据标签查询所有的文章列表
export const fetchTagDetail = (tag_name, id) => {
  return request({
    url: '/api/tag/content',
    method: 'POST',
    data: {
      tag_name: tag_name,
      id: id
    }
  })
}

// tag 标签名的模糊搜索 支持分页 page page_name ✅
export const searchTagsApi = (search, page_num, page = 1) => {
  return request({
    url: '/api/search/tag',
    method: 'POST',
    data: {
      search: search,
      page_num: page_num,
      page: page - 1
    }
  })
}

// 查询链接了该标签的项目
