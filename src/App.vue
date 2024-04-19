<script setup>
// import { onMounted } from 'vue'
// import { useRealTimeCommunicationStore } from '@/stores/modules/RealTimeCommunication/index.js'
// import io from 'socket.io-client'
//
// const realTimeCommunicationStore = useRealTimeCommunicationStore()
//
// onMounted(() => {
//   const token = 'your_signed_key'
//
//   // 签名的密钥
//   realTimeCommunicationStore.socket = io('http://10.22.207.112:5000', {
//     auth: {
//       token: token
//     },
//     transports: ['websocket']
//   })
//
//   realTimeCommunicationStore.socket.on('connect', () => {
//     console.log('连接成功')
//   })
//
//   realTimeCommunicationStore.socket.on('connected', (data) => {
//     console.log('收到后端发送的数据:', data)
//   })
//
//   realTimeCommunicationStore.socket.on('connect_error', (error) => {
//     console.error('WebSocket连接失败:', error)
//   })
//
//   realTimeCommunicationStore.socket.on('disconnect', () => {
//     console.log('WebSocket连接已断开')
//   })
// })
</script>

<template>
  <router-view></router-view>
</template>

<style>
*::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: 4px;
}

*:hover::-webkit-scrollbar-thumb {
  background: hsla(0, 0%, 53%, 0.4);
}

*:hover::-webkit-scrollbar-track {
  background: transparent;
}
</style>
