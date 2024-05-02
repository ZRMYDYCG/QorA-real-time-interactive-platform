export const sortReviewsBySecondaryReviewsLength = (reviews) => {
  // 使用数组的 sort 方法进行排序
  // 这里使用了一个自定义的比较函数，它比较了两个评论对象的 secondaryReviews 数组长度
  return reviews.sort((a, b) => {
    // 如果 a 的 secondaryReviews 数组长度大于 b 的，那么 a 应该排在 b 后面
    if (a.secondaryReviews.length > b.secondaryReviews.length) {
      return -1
    }
    // 如果 a 的 secondaryReviews 数组长度小于 b 的，那么 a 应该排在 b 前面
    if (a.secondaryReviews.length < b.secondaryReviews.length) {
      return 1
    }
    // 如果两者相等，则保持原顺序
    return 0
  })
}
