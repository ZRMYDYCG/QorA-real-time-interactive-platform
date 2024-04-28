import request from '../config/index.js'

// 1. 查询某个用户所有发布过的问题 type="questions"
// 2. 查询某个用户创建的所有专栏 type="special"
// 3. 查询某个用户的所有文章 type="dynamic"
// 4. 查询某个用户的所有书架 type="bookshelf"
// 5. 查询某个用户的关注粉丝列表以及自己的信息 type="user"
export const publicFetch = (id, type) => {
  return request({
    url: '/api/user/type',
    method: 'post',
    data: {
      id: id,
      type: type
    }
  })
}

// 1. 删除某一个问题 type="question" 再传问题id
// 2. 删除某一个专栏 type="special" 专栏 id
// 3. 删除专栏下的某一个动态 type="spdy" 对应id
// 4. 删除某一个书架 type="bookshelf" 对应id
// 5. 删除某一篇文章 type="dynamic" 对应id
// 6. 删除某一条评论 type="review" 对应评论id
export const publicDelete = (type, object_id) => {
  return request({
    url: '/api/del',
    data: {
      type: type,
      object_id: object_id
    }
  })
}

// 1. 给  type = "question" id 渲染问题评论区
// 2. 给 type = "dynamic" id 渲染文章评论区
export const publicComments = (type, object_id) => {
  return request({
    url: '/api/review',
    method: 'POST',
    data: {
      type: type,
      object_id: object_id
    }
  })
}

// 产生历史记录
export const publicGenerateHistory = (user_id, content) => {
  return request({
    url: '/api/history/add',
    method: 'POST',
    data: {
      user_id: user_id,
      content: content
    }
  })
}

// 增加浏览量
export const publicAddViews = (object_type, object_id) => {
  return request({
    url: '/api/type/see',
    data: {
      object_type: object_type,
      object_id: object_id
    }
  })
}

// 查询用户是否收藏该文章和问题
export const publicCartItem = (user_id, object_id, object_type) => {
  return request({
    url: '/api/search/favorite',
    data: {
      user_id: user_id,
      object_id: object_id,
      object_type: object_type
    }
  })
}
