export const rewritePaths = (tabConfig, userId) => {
  const newPaths = tabConfig.map((item) => {
    const newItem = { ...item }
    newItem.path = `${newItem.path}?user_id=${userId}`
    return newItem
  })
  return newPaths
}
