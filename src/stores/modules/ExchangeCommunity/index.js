import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useExchangeCommunityStore = defineStore('ExchangeCommunityStore', () => {
  // 控制用户私信弹窗是否弹出
  let DrawerState = ref(false)
  const openDrawer = () => {
    DrawerState.value = !DrawerState.value
  }
  return {
    DrawerState,
    openDrawer
  }
})
