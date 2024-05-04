export const sortChanContent = (array) => {
  return array.sort((a, b) => a.discord_id - b.discord_id)
}
