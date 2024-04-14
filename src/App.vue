<script setup>
import { onMounted } from 'vue'
import { useRealTimeCommunicationStore } from '@/stores/modules/RealTimeCommunication/index.js'

const realTimeCommunicationStore = useRealTimeCommunicationStore()
import io from 'socket.io-client'

onMounted(() => {
  const token = 'your_signed_key'

  // 建立WebSocket连接，提供签名的密钥
  realTimeCommunicationStore.socket = io('http://10.22.207.112:5000', {
    auth: {
      token: token
    }
  })

  realTimeCommunicationStore.socket.on('connect', (data) => {
    console.log(data)
    console.log('连接成功')
    realTimeCommunicationStore.socket.emit('joinChat')
  })
})
</script>
<template>
  <router-view></router-view>
</template>

<style scoped></style>
