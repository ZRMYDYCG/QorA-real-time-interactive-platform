import request from '../config/index.js'

// 获取最新提问
export const fetchLatestQuestionsApi = (user_id) => {
  return request({
    url: '/api/index/questions',
    method: 'POST',
    data: {
      user_id: user_id
    }
  })
}

// 发布提问
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
