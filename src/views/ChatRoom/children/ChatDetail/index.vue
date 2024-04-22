<script setup>
import { ref } from 'vue'
import Vue3EmojiPicker from 'vue3-emoji-picker'
import 'vue3-emoji-picker/css'
import { useLoginStore } from '@/stores/modules/Login/index.js'

const loginStore = useLoginStore()

const inputRef = ref(null)
let selectedEmoji = ref('')

function handleInput(event) {
  // 文本区域内容发生更新
  console.log(event.target.value)
}

function onEmojiSelect(emoji) {
  if (inputRef.value) {
    inputRef.value.value += emoji.i
  }
  selectedEmoji.value = ''
}

const send = () => {
  console.log(inputRef.value.value)
}

const conversationList = [
  {
    avatar: 'https://pic1.zhimg.com/80/v2-6dd7cbd20c9dbf65251a9ee0a08256ce_720w.webp', // 用户头像
    sendId: 1, // 发送者 Id
    type: '0', // 消息文件类型
    content: '今天天气好好呀'
  },
  {
    avatar: 'https://pic1.zhimg.com/80/v2-6dd7cbd20c9dbf65251a9ee0a08256ce_720w.webp', // 用户头像
    sendId: 1, // 发送者 Id
    type: '0', // 消息文件类型
    content: '今天天气好好呀' // 消息内容
  },
  {
    avatar: 'https://pic1.zhimg.com/80/v2-6dd7cbd20c9dbf65251a9ee0a08256ce_720w.webp', // 用户头像
    sendId: 1, // 发送者 Id
    type: '0', // 消息文件类型
    content: '今天天气好好呀'
  },
  {
    avatar: 'https://pic1.zhimg.com/80/v2-6dd7cbd20c9dbf65251a9ee0a08256ce_720w.webp', // 用户头像
    sendId: 2, // 发送者 Id
    type: '0', // 消息文件类型
    content: '今天天气好好呀'
  },
  {
    avatar: 'https://pic1.zhimg.com/80/v2-6dd7cbd20c9dbf65251a9ee0a08256ce_720w.webp', // 用户头像
    sendId: 2, // 发送者 Id
    type: '0', // 消息文件类型
    content: '今天天气好好呀'
  },
  {
    avatar: 'https://pic1.zhimg.com/80/v2-6dd7cbd20c9dbf65251a9ee0a08256ce_720w.webp', // 用户头像
    sendId: 2, // 发送者 Id
    type: '0', // 消息文件类型
    content: '今天天气好好呀'
  },
  {
    avatar: 'https://pic1.zhimg.com/80/v2-6dd7cbd20c9dbf65251a9ee0a08256ce_720w.webp', // 用户头像
    sendId: 1, // 发送者 Id
    type: '0', // 消息文件类型
    content: '今天天气好好呀'
  }
]
</script>

<template>
  <div class="chat-detail">
    <!--  聊天区域头部  -->
    <div class="header">
      <div class="header--left">
        <div class="name">一小池勺</div>
      </div>
    </div>
    <!--  聊天内容  -->
    <div class="message-list">
      <!--   聊天时间： 前端处理   -->
      <!--   聊天列表   -->
      <template v-for="(item, index) in conversationList" :key="index">
        <el-row
          el-row
          type="flex"
          class="mb-20px"
          :class="item.sendId === loginStore.userInfo.value?.user_id && 'flex-row-reverse'"
        >
          <el-avatar :size="42" :src="item.avatar" />
          <div
            v-if="item.type === '0'"
            :class="item.sendId === loginStore.userInfo.value?.user_id ? 'mr-10px' : 'ml-10px'"
            style="color: #000"
            class="text break-words px-15px rounded-6px text-left py-12px"
            v-html="item.content"
          ></div>
        </el-row>
      </template>
    </div>
    <!--  文件上传区域  -->
    <div class="more">
      <el-popover :teleported="false" placement="top-start" trigger="click" width="auto">
        <template #reference>
          <div>
            <img src="../../../../../public/emjoy.png" alt="" />
          </div>
        </template>
        <template #default>
          <Vue3EmojiPicker v-model="selectedEmoji" @select="onEmojiSelect" />
        </template>
      </el-popover>
      <img src="../../../../../public/phone.png" alt="" />
    </div>
    <!--  回复框  -->
    <div class="reply">
      <textarea ref="inputRef" @input="handleInput"></textarea>
      <div class="send">
        <el-button type="primary" @click="send" plain>发送</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.chat-detail {
  position: relative;
  width: 100%;
  height: 100%;

  .header {
    display: flex;
    height: 60px;
    border-bottom: 1px solid #eeeeee;
    align-items: center;

    .header--left {
      margin-left: 20px;

      .name {
        font-weight: 600;
        margin-bottom: -5px;
      }
    }
  }

  .message-list {
    height: calc(100% - 260px);
    background-color: #eeeeee;
    overflow: auto;
    padding: 0 20px;
  }

  .more {
    height: 30px;
    display: flex;
    align-items: center;

    img {
      width: 20px;
      height: 20px;
      margin-left: 10px;
    }
  }

  .reply {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 170px;
    border-top: 1px solid #eee;
    background-color: #fff;

    textarea {
      width: 100%;
      height: 100%;
      padding: 8px;
      border-radius: 5px;
      font-size: 13px;
      box-sizing: border-box;
      outline: none;
      resize: none;
      border: none;
    }

    .send {
      position: absolute;
      bottom: 20px;
      right: -10px;
      width: 100px;
    }
  }
}
</style>

<style lang="scss">
.el-popover.el-popper {
  padding: 0;

  .el-popper__arrow {
    display: none;
  }

  .v3-emoji-picker {
    border-radius: 0;
  }
}
</style>
