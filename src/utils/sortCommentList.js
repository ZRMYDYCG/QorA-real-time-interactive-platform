export const sortReviewsBySecondaryReviewsLength = (reviews) => {
  return reviews.sort((a, b) => {
    if (a.secondaryReviews.length > b.secondaryReviews.length) {
      return -1
    }
    if (a.secondaryReviews.length < b.secondaryReviews.length) {
      return 1
    }
    // 如果两者相等，则保持原顺序
    return 0
  })
}
