import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useRealTimeCommunicationStore = defineStore('RealTimeCommunicationStore', () => {
  const socket = ref(null)
  return {
    socket
  }
})
