import { defineStore } from 'pinia'
import io from 'socket.io-client'
import { chatInApi, chatUserMessageListApi } from '@/service/ChatRoom/index.js'
import { useLoginStore } from '@/stores/modules/Login/index.js'
import { getLocalStorage } from '@/utils/index.js'
// import { getLocalStorage } from '@/utils/index.js'

const loginStore = useLoginStore()
export const useSocketStore = defineStore('socket', {
  state: () => ({
    connected: false,
    socket: null,
    chatScrollbar: null,
    userId: 1, // 存储当前用户的 ID
    messageList: [] // 聊天列表 discord_user => 消息发布人 id
  }),
  actions: {
    // 初始化 socket 连接
    async initSocket() {
      let _this = this
      // 连接到的 Flask-SocketIO 服务器端点
      this.socket = io('http://192.168.31.86:5000', {
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
    },
    // 离开聊天框 但用户还是在线状态
    leave_chat() {
      this.socket.emit('leave_chat', { user_id: loginStore.userInfo?.value?.user_id })
    },
    // 发送消息到服务器
    sendMessage(for_id, content, picture) {
      if (this.connected) {
        this.socket.emit('send_message', {
          user_id: loginStore.userInfo?.value?.user_id,
          for_id: for_id,
          content: content,
          picture: picture
        })
      } else {
        console.error('Cannot send message')
      }
    },
    chatUserMessageList() {
      chatUserMessageListApi().then((res) => {
        this.messageList = res.data.data
      })
    },
    toBottom() {
      const timer = setTimeout(() => {
        this.chatScrollbar?.setScrollTop(9999)
        clearTimeout(timer)
      }, 300)
    },
    chatInitView() {
      let _this = this
      chatInApi(_this.userId).then((res) => {
        console.log(res)
      })
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
