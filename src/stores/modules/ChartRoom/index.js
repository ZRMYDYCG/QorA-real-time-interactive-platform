import { defineStore } from 'pinia'
import io from 'socket.io-client'
// import { getLocalStorage } from '@/utils/index.js'

export const useSocketStore = defineStore('socket', {
  state: () => ({
    connected: false,
    socket: null,
    userId: 1 // 存储当前用户的 ID
  }),
  actions: {
    // 初始化 socket 连接
    initSocket() {
      let _this = this
      // 连接到的 Flask-SocketIO 服务器端点
      this.socket = io('http://127.0.0.1:5000', {
        transports: ['websocket'],
        query: `user_id=${_this.userId}`
      })

      // 监听连接成功事件
      this.socket.on('connect', () => {
        this.connected = true
        console.log('Connected to the server!')
        // 通知服务器客户端已连接
        this.socket.emit('one', { user_id: 1 })
      })

      // 监听服务器发送的 connected 事件
      this.socket.on('connected', (data) => {
        console.log('Confirmed connection with user ID:', data.message)
      })

      // 监听服务器发送的消息事件
      this.socket.on('room_message', (messageData) => {
        console.log('Received message from room:', messageData.message)
        // 这里可以处理消息，比如更新 UI 显示新消息
      })

      // 断开连接事件
      this.socket.on('disconnect', () => {
        this.connected = false
        console.log('Disconnected from the server.')
      })
    },

    // 发送消息到服务器
    sendMessage(user_id, for_id, content, picture) {
      if (this.connected) {
        this.socket.emit('send_message', {
          user_id: user_id,
          for_id: for_id,
          content: content,
          picture: picture
        })
      } else {
        console.error('Cannot send message: Not connected to the server.')
      }
    },

    // 断开 socket 连接
    disconnect() {
      const _this = this
      if (this.socket) {
        this.socket.emit('leave_room', { user_id: _this.userId })
        this.socket.disconnect()
      }
    }
  }
})
