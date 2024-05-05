import request from '../config/index.js'

// 获取最新提问 ✅
export const fetchLatestQuestionsApi = (user_id) => {
  return request({
    url: '/api/index/questions',
    method: 'POST',
    data: {
      user_id: user_id
    }
  })
}

// 发布提问 ✅
export const createQuestionApi = (questionDetail) => {
  return request({
    url: '/api/question',
    method: 'POST',
    data: {
      title: questionDetail.title,
      TagList: questionDetail.TagList,
      content: questionDetail.content,
      type: 'question',
      id: questionDetail.user_id,
      Integral: questionDetail.integral,
      imgList: questionDetail.imgList
    }
  })
}

// 查询某一个问题的详情 ✅
export const questionDetailApi = (object_id) => {
  return request({
    url: '/api/show/question',
    method: 'POST',
    data: {
      object_id: object_id
    }
  })
}

// 采纳问题的回答
// review_user_id 发布评论者id
export const adoptionIssuesApi = (question_id, review_id, review_user_id) => {
  return request({
    url: '/api/question/adopt',
    data: {
      question_id: question_id,
      review_id: review_id,
      review_user_id: review_user_id
    }
  })
}
