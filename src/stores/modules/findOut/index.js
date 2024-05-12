import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFindOutStore = defineStore('findOutStore', () => {
  let aList = ref([])
  let bList = ref([])

  return {
    aList,
    bList
  }
})
