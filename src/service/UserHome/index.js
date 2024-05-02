import request from '../config/index.js'

// 用户修改个人简介 ✅
export const modifyUserInformationApi = (user_id, user_introduce) => {
  return request({
    url: '/api/change_introduce',
    method: 'POST',
    data: {
      user_id: user_id,
      user_introduce: user_introduce
    }
  })
}

// 用户增删黑名单 ✅
export const blackListApi = (user_id, type, blacklist_id) => {
  return request({
    url: '/api/add/blacklist',
    method: 'POST',
    data: {
      user_id: user_id,
      type: type,
      blacklist_id: blacklist_id
    }
  })
}

// 用户增删关注和粉丝 ✅
export const attentionApi = (user_id, user_for, type) => {
  return request({
    url: '/api/add/attention',
    method: 'POST',
    data: {
      user_id: user_id,
      user_for: user_for,
      type: type
    }
  })
}

// 专栏 - 用户增删收藏
// type add less
// object_type user dynamic bookshelf
export const collectApi = (user_id, object_id, type, object_type) => {
  return request({
    url: '/api/add/collect',
    method: 'POST',
    data: {
      user_id: user_id,
      object_id: object_id,
      type: type,
      object_type: object_type
    }
  })
}

// 创建专栏 ✅
export const createSpecialApi = (data) => {
  return request({
    url: '/api/special',
    method: 'POST',
    data: {
      title: data.title,
      TagList: data.TagList,
      ImgList: data.ImgList,
      type: 'special',
      id: data.id
    }
  })
}

// 创建专栏下的文章
/**
 * title：标题
 * TagList：标签列表
 * ImgList：图片列表
 * content：内容
 * type：SpDy
 * id：创建该专栏的用户id
 * special_id：在哪个专栏下，就返回该专栏的id
 * */
export const createSpecialEssayApi = (data) => {
  return request({
    url: '/api/SpDy',
    method: 'POST',
    data: {
      title: data.title,
      TagList: data.TagList,
      ImgList: data.ImgList,
      content: data.content,
      type: 'SpDy',
      special_id: data.special_id
    }
  })
}

// 创建用户文章
/**
 * title：标题
 * TagList：标签列表
 * ImgList：图片列表
 * content：内容
 * type：dynamic
 * id：创建该文章的用户id
 * */
export const createDynamicApi = (data) => {
  return request({
    url: 'api/dynamic',
    method: 'POST',
    data: {
      title: data.title,
      TagList: data.TagList,
      ImgList: data.ImgList,
      content: data.content,
      type: 'dynamic',
      id: data.id
    }
  })
}

// 查询某个书架的文章列表
export const columnListApi = (object_id) => {
  return request({
    url: '/api/show/bookshelf',
    method: 'POST',
    data: {
      object_id: object_id
    }
  })
}

// 渲染用户个人主页 ✅
export const fetchPersonalHomepageApi = (user_id) => {
  return request({
    url: '/api/show/user',
    method: 'POST',
    data: {
      user_id: user_id
    }
  })
}

// 渲染粉丝 关注列表详细信息 ✅
// type = "fan" type="attention"
export const fetchPersonDetail = (user_id, type) => {
  return request({
    url: '/api/attention',
    method: 'POST',
    data: {
      user_id: user_id,
      type: type
    }
  })
}

// 将书籍移除书架
// dylist 移除的书架列表
// user_id
export const removeBookShelfApi = (user_id, bookshelf_id, dylist) => {
  return request({
    url: '/api/move/bookshelf',
    method: 'POST',
    data: {
      user_id: user_id,
      bookshelf_id: bookshelf_id,
      dylist: dylist
    }
  })
}

// 将收藏项移入或移出收藏夹 ✅
// type add less
export const moveFavoriteApi = (user_id, bag_name, favorite_id_list, type) => {
  return request({
    url: '/api/move/favorite_bag',
    method: 'POST',
    data: {
      user_id: user_id,
      bag_name: bag_name,
      favorite_id_list: favorite_id_list,
      type: type
    }
  })
}

// 创建或删除收藏夹 ✅
// bag_name 收藏夹名
export const changeColumnApi = (user_id, bag_name, type) => {
  return request({
    url: '/api/create/favorite/bag',
    method: 'POST',
    data: {
      user_id: user_id,
      bag_name: bag_name,
      type: type
    }
  })
}

// 渲染收藏夹 ✅ 问题 渲染收藏夹的时候 一直渲染为空 但是数据库中已经是有创建了的收藏夹 可就是没有渲染出来
export const fetchColumnDetail = (user_id) => {
  return request({
    url: '/api/render/favorite/bag',
    method: 'POST',
    data: {
      user_id: user_id
    }
  })
}
