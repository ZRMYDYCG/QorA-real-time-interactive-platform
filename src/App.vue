<script setup>
// import { onMounted } from 'vue'
// import { useRealTimeCommunicationStore } from '@/stores/modules/RealTimeCommunication/index.js'
// import io from 'socket.io-client'

// const realTimeCommunicationStore = useRealTimeCommunicationStore()

// onMounted(() => {
//   const token = 'your_signed_key'
//
//   // 建立WebSocket连接，提供签名的密钥
//   realTimeCommunicationStore.socket = io('http://10.22.207.112:5000', {
//     auth: {
//       token: token
//     },
//     transports: ['websocket'] // WebSocket作为传输方式
//   })
//
//   // 监听WebSocket连接成功事件
//   realTimeCommunicationStore.socket.on('connect', () => {
//     console.log('连接成功')
//   })
//
//   // 监听连接成功和，后端给的数据
//   realTimeCommunicationStore.socket.on('connected', (data) => {
//     console.log('收到后端发送的数据:', data)
//   })
//
//   // 监听WebSocket连接错误事件
//   realTimeCommunicationStore.socket.on('connect_error', (error) => {
//     console.error('WebSocket连接失败:', error)
//   })
//
//   // 监听WebSocket连接断开事件
//   realTimeCommunicationStore.socket.on('disconnect', () => {
//     console.log('WebSocket连接已断开')
//   })
// })
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
