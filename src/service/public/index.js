import request from '../config/index.js'

// 1. 查询某个用户所有发布过的问题 type="questions" ✅
// 2. 查询某个用户创建的所有专栏 type="special" ⚠️
// 3. 查询某个用户的所有文章 type="dynamic" ✅
// 4. 查询某个用户的所有书架 type="bookshelf" ✅
// 5. 查询某个用户的关注粉丝列表以及自己的信息 type="user" ⚠️
export const publicFetch = (id, type) => {
  return request({
    url: '/api/user/type',
    method: 'POST',
    data: {
      id: id,
      type: type
    }
  })
}

// 1. 删除某一个问题 type="question" 再传问题id ✅
// 2. 删除某一个专栏 type="special" 专栏 id ⚠️
// 3. 删除专栏下的某一个动态 type="spdy" 对应id ⚠️
// 4. 删除某一个书架 type="bookshelf" 对应id ✅
// 5. 删除某一篇文章 type="dynamic" 对应id ✅
// 6. 删除某一条评论 type="review" 对应评论id
export const publicDelete = (type, object_id) => {
  return request({
    url: '/api/del',
    method: 'POST',
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

// 产生历史记录 ✅
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

// 发布评论以及发布回答
/**
 * object_type该项目的类型
 * object_id该项目的id
 * 服务端会返回所有该项目下的id存入data中
 * review_id为该评论的id
 * review_object_type为该评论所属的项目的类型
 * review_object_id为该评论所属的项目的id
 * review_grade_top：为项目所属的一级评论的用户的id，如果为空，则该评论为一级评论
 * 'review_top_id'为该评论所属的一级评论的id，如果为空，则该评论为一级评论
 * review_user：发表该评论的用户的id
 * review_text：该评论的内容
 * review_backer：该评论的回复对象的用户id
 * */
export const publicCommentsApi = (
  review_object_type,
  review_user,
  review_object_id,
  content,
  backer,
  review_grade_top,
  review_top_id
) => {
  return request({
    url: '/api/review',
    method: 'POST',
    data: {
      review_object_type: review_object_type,
      review_user: review_user,
      review_object_id: review_object_id,
      content: content,
      backer: backer,
      review_grade_top: review_grade_top,
      review_top_id: review_top_id
    }
  })
}

// 渲染评论区
/**
 * object_type 该项目的类型
 * object_id 该项目的id
 * 服务端会返回所有该项目下的id存入data中
 * review_id为该评论的id
 * review_object_type为该评论所属的项目的类型
 * review_object_id为该评论所属的项目的id
 * review_grade_top：为项目所属的一级评论的用户的id，如果为空，则该评论为一级评论
 * review_top_id: 为该评论所属的一级评论的id，如果为空，则该评论为一级评论
 * review_user：发表该评论的用户的id
 * review_text：该评论的内容
 * review_backer：该评论的回复对象的用户id
 * */
export const publicShowReviewApi = (object_id, object_type) => {
  return request({
    url: '/api/show/review',
    method: 'POST',
    data: {
      object_id: object_id,
      object_type: object_type
    }
  })
}

export const upLoadFileApi = (data) => {
  request({
    url: '/api/upload/pics',
    method: 'POST',
    data: data
  })
}

// 增加目标项的浏览量
export const addSeeNumber = (object_type, object_id) => {
  return request({
    url: '/api/type/see',
    method: 'POST',
    data: {
      object_type: object_type,
      object_id: object_id
    }
  })
}

// 查询当前用户是否收藏该项目
export const isCollectItem = (object_id, object_type, user_id) => {
  return request({
    url: '/api/search/favorite',
    method: 'POST',
    dada: {
      object_id: object_id,
      object_type: object_type,
      user_id: user_id
    }
  })
}

// 增删收藏，放入默认收藏夹中
export const addToDefaultCollect = (id, object_id, object_type, type) => {
  return request({
    url: '/api/add/collect',
    method: 'POST',
    data: {
      id: id,
      object_id: object_id,
      object_type: object_type,
      type: type
    }
  })
}
