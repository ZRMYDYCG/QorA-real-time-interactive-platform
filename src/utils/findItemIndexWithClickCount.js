// utils.js
export const findItemIndexWithZeroLikeCount = (array, commentItemDetail) => {
  return array.findIndex((item) => item.review_id === commentItemDetail.review_id)
}
