export const renameAttentionIdToFansId = (array) => {
  return array.map((item) => {
    return {
      ...item,
      fans_id: item.attention_id
    }
  })
}
