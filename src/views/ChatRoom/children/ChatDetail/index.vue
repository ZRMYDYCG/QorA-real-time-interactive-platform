<script setup>
import { ref } from 'vue'
import Vue3EmojiPicker from 'vue3-emoji-picker'
import 'vue3-emoji-picker/css'

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
</script>

<template>
  <div class="chat-detail">
    <div class="header">
      <div class="header--left">
        <div class="name">一小池勺</div>
      </div>
    </div>
    <div class="message-list"></div>
    <div class="more">
      <el-popover :teleported="false" placement="top-start" trigger="click" width="auto">
        <template #reference>
          <div>
            <img src="../../../../../public/emjoy.png" alt="" />
            <img src="../../../../../public/phone.png" alt="" />
          </div>
        </template>
        <template #default>
          <Vue3EmojiPicker v-model="selectedEmoji" @select="onEmojiSelect" />
        </template>
      </el-popover>
    </div>
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
