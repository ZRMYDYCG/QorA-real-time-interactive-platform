export const reorganizeData = (data) => {
  const primaryReviews = []
  const secondaryReviewsMap = {}
  for (let i = 0; i < data.length; i++) {
    const review = data[i]
    // 如果当前评论是一级评论（即没有上级评论）
    if (review.review_top_id === null) {
      // 初始化二级评论数组
      secondaryReviewsMap[review.review_id] = []
      data.splice(i, 1)
      // 将一级评论放入新数组
      primaryReviews.push({
        ...review, // 复制当前评论的所有属性
        secondaryReviews: secondaryReviewsMap[review.review_id] // 初始化二级评论数组
      })
      i-- // 因为splice改变了数组长度，需要减少i的值以重新检查当前位置
    }
  }

  // 再次遍历原始数据（现在只包含可能有上级的评论）
  for (let i = 0; i < data.length; i++) {
    const review = data[i]
    // 检查是否有匹配的上级评论
    if (
      review.review_grade_top !== null && // review_grade_top有值
      review.review_top_id !== null && // review_top_id不为null（但此处实际上不需要检查，因为上面已经排除了这种情况）
      review.review_user === review.review_grade_top // review_user与review_grade_top相同
    ) {
      // 将二级评论添加到对应上级评论的二级评论数组中
      secondaryReviewsMap[review.review_top_id].push(review)

      // 移除原数组中的此项（如果需要）
      data.splice(i, 1)

      i-- // 因为splice改变了数组长度
    }
  }

  return primaryReviews
}
