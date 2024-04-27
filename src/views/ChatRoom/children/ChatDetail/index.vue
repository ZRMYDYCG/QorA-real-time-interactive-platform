<script setup>
import { ref, nextTick, onMounted } from 'vue'
import Vue3EmojiPicker from 'vue3-emoji-picker'
import 'vue3-emoji-picker/css'
import { useLoginStore } from '@/stores/modules/Login/index.js'
import { useSocketStore } from '@/stores/modules/ChartRoom/index.js'
import { storeToRefs } from 'pinia'

const loginStore = useLoginStore()
const socketStore = useSocketStore()
const { messageList } = storeToRefs(socketStore)

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

const messageListRef = ref(null) // 添加对聊天内容容器的引用

const send = async () => {
  let content = inputRef.value.value
  await socketStore.sendMessage(2, content, [])
  await socketStore.chatUserMessageList()

  socketStore.toBottom()

  setTimeout(() => {
    inputRef.value.value = ''
  }, 200)
}

const chatScrollbar = ref(null)

onMounted(() => {
  nextTick(() => {
    socketStore.chatScrollbar = chatScrollbar.value
  })
})
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
    <el-scrollbar ref="chatScrollbar">
      <div class="message-list" ref="messageListRef">
        <!--   聊天时间： 前端处理   -->
        <!--   聊天列表   -->
        <template v-for="(item, index) in messageList" :key="index">
          <el-row
            el-row
            type="flex"
            class="mb-20px"
            :class="item.discord_user !== loginStore.userInfo.value?.user_id && 'flex-row-reverse'"
          >
            <el-avatar :size="42" :src="item.avatar" />
            <div
              :class="
                item.discord_user !== loginStore.userInfo.value?.user_id ? 'mr-10px' : 'ml-10px'
              "
              style="color: #000"
              class="text break-words px-15px rounded-6px text-left py-12px"
              v-html="item.discord_text"
            ></div>
          </el-row>
        </template>
      </div>
    </el-scrollbar>
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

  .el-scrollbar {
    height: calc(100% - 260px);
  }

  .message-list {
    height: 100%;
    background-color: #eeeeee;
    overflow: auto;
    padding: 0 20px;
  }

  .text {
    background-color: #fff;
  }

  .more {
    height: 30px;
    display: flex;
    align-items: center;
    transition: all 0.3s;

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
