export const getMaxDiscordIdItems = (array) => {
  const groupedByUser = array.reduce((acc, item) => {
    const { discord_user } = item
    if (!acc[discord_user]) {
      acc[discord_user] = []
    }
    acc[discord_user].push(item)
    return acc
  }, {})

  const maxItems = Object.keys(groupedByUser).map((user) => {
    return groupedByUser[user].reduce((maxItem, currentItem) =>
      currentItem.discord_id > maxItem.discord_id ? currentItem : maxItem
    )
  })

  return maxItems
}
