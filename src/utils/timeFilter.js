export const removeGMT = (dateString) => {
  if (typeof dateString !== 'string') {
    throw new Error('Input must be a string.')
  }
  return dateString.replace(/ GMT$/, '')
}
