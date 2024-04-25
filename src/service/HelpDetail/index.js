import request from '../config/index.js'

// 发布回答
export const publishReviewApi = (data) => {
  return request({
    url: '/api/review',
    method: 'POST',
    data: {}
  })
}

// 渲染评论区
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
export const showReviewApi = (data) => {
  return request({
    url: '/api/review',
    data: {}
  })
}
