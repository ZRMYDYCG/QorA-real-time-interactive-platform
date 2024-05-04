import { defineStore } from 'pinia'
import io from 'socket.io-client'
import { sortChanContent } from '@/utils/index.js'
import { chatInApi, chatUserMessageListApi } from '@/service/ChatRoom/index.js'
// import { useLoginStore } from '@/stores/modules/Login/index.js'
// import { getLocalStorage } from '@/utils/index.js'
// const loginStore = useLoginStore()
import { renameAttentionIdToFansId, getMaxDiscordIdItems } from '@/utils/index.js'
export const useSocketStore = defineStore('socket', {
  state: () => ({
    connected: false,
    socket: null,
    chatScrollbar: null,
    user_id: null, // 存储当前用户的 ID
    messageList: [], // 聊天列表 discord_user => 消息发布人 id
    fans_data: [],
    my_like: [],
    mutual_data: [],
    discord_data: []
  }),
  actions: {
    // 初始化 socket 连接
    async initSocket(user_id) {
      this.user_id = user_id
      // 连接到的 Flask-SocketIO 服务器端点
      this.socket = io('http://127.0.0.1:5000', {
        transports: ['websocket'],
        query: `user_id=${user_id}`
      })
      // 监听连接成功事件
      this.socket.on('connect', () => {
        this.connected = true
        console.log('Connected to the server!')
        // 通知服务器客户端已连接
        this.socket.emit('one', { user_id: this.user_id })
      })

      // 监听服务器发送的 connected 事件
      this.socket.on('connected', (data) => {
        console.log('Confirmed connection with user ID:', data.message)
      })
    },
    // 离开聊天框 但用户还是在线状态
    leave_chat() {
      this.socket.emit('leave_chat', { user_id: this.user_id })
    },
    // 发送消息到服务器
    sendMessage(for_id, content, picture) {
      if (this.connected) {
        console.log('准备发起聊天数据存储')
        console.log('拿到当前的user_id:', this.user_id)
        this.socket.emit('send_message', {
          user_id: this.user_id,
          for_id: for_id,
          content: content,
          picture: picture
        })
      } else {
        console.error('Cannot send message')
      }
    },
    chatUserMessageList(for_id) {
      chatUserMessageListApi(this.user_id, for_id).then((res) => {
        console.log('刷新当前聊天记录', res)
        this.messageList = sortChanContent(res.data.data)
      })
    },
    toBottom() {
      const timer = setTimeout(() => {
        this.chatScrollbar?.setScrollTop(9999)
        clearTimeout(timer)
      }, 300)
    },
    chatInitView(for_id) {
      console.log('我可以获取到 for_id:', for_id)
      let _this = this
      chatInApi(_this.user_id, for_id).then((res) => {
        console.log(res)
        console.log('粉丝列表:', res.data.fans_data)
        console.log('消息:', res.data.discord_data)
        this.fans_data = res.data.fans_data
        this.my_like = renameAttentionIdToFansId(res.data.attention_data)
        this.mutual_data = res.data.mutual_ids_data
        this.discord_data = getMaxDiscordIdItems(res.data.discord_data)
      })
    },
    // 断开 socket 连接
    disconnect() {
      const _this = this
      if (this.socket) {
        this.socket.emit('leave_room', { user_id: _this.user_id })
        this.socket.disconnect()
      }
    }
  }
})
