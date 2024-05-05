export const filterIsAttention = (array) => {
  return array.filter((item) => {
    return item.is_attention && item.is_attention === true
  })
}
