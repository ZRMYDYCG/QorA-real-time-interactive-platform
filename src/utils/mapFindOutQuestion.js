export const mapUnHandleDataList = (dataList) => {
  return dataList.filter((item) => {
    return item.question_answer === 0
  })
}

export const mapUrgentDataList = (dataList) => {
  return dataList.filter((item) => {
    return item.question_integral > 3
  })
}
