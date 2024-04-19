<script setup>
import commentContent from './components/comment-content.vue'
import Vue3EmojiPicker from 'vue3-emoji-picker'
import 'vue3-emoji-picker/css'
import { ref } from 'vue'

const defaultSort = ref('hot')
const toggleSort = (val) => {
  if (val == 'hot') {
    defaultSort.value = 'hot'
  } else if (val == 'new') {
    defaultSort.value = 'new'
  }
}

// const isLike = ref(false)
// const onHandLike = () => {
//   isLike.value = !isLike.value
// }

const drawer = ref(false)
//是否打开弹窗组件
const openDraw = () => {
  drawer.value = !drawer.value
  console.log(drawer)
}

// TODO: 评论输入框
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

let isChangeHeight = ref(false)
//输入框点击事件
const onTextClick = () => {
  //让文本域高度添加到 120px
  isChangeHeight.value = true
}

//弹窗组件关闭触发函数
const handClose = () => {
  console.log('弹窗组件关闭了')
  //弹窗组件关闭了之后，就让原始输入框（textarea）高度下降
  isChangeHeight.value = false
}

//点击文本输入框以外的元素的时候，textarea元素的高度下降
const onCloseText = (e) => {
  console.log(e.target)
  const textArea = document.querySelector('.inpt')
  //如果点击的不是textarea框，那么就高度下降
  if (!e.target.contains(textArea)) {
    console.log(true)
    isChangeHeight.value = false
  }
}

//鼠标离开输入框之后，text高度下降
// const onLeaveMouse = () => {
//   isChangeHeight.value = false
//   console.log(111)
// }
</script>
<template>
  <link rel="stylesheet" href="//at.alicdn.com/t/c/font_4498745_5f449up5pic.css" />
  <div class="comment-box">
    <div class="left-comment">
      <el-card style="width: 100%; margin-top: 15px" shadow="hover">
        <div class="comment-container">
          <div class="comment-title">
            <!-- 标题 -->
            <span class="total-num">全部评论（12312）</span>
            <!-- 排序 -->
            <div class="sort-type">
              <i class="iconfont icon-paixu" @click="toggleSort('way')"></i>
              <span
                class="hot"
                @click="toggleSort('hot')"
                :class="{ activeColor: defaultSort === 'hot' }"
                >最热</span
              >
              <span
                class="new"
                @click="toggleSort('new')"
                :class="{ activeColor: defaultSort === 'new' }"
                >最新</span
              >
            </div>
          </div>
          <commentContent
            v-for="(item, index) in 6"
            :isOpenDraw="drawer"
            :key="index"
            @open-draw="openDraw"
          ></commentContent>
        </div>
      </el-card>
    </div>
    <div class="right-recommend">
      <el-affix target=".right-recommend" :offset="70">
        <el-card style="width: 100%; margin-top: 15px" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>文章推荐</span>
            </div>
          </template>
          <!-- 推荐文章 -->
          <div class="recommend-article">
            <div class="article-items" v-for="(item, index) in 3" :key="index">
              <div class="user-info">
                <div class="user-header">
                  <div class="avatar">
                    <img
                      src="https://tse2-mm.cn.bing.net/th/id/OIP-C.us9TIUdsBDxeGOKzFiXatQHaI8?w=203&h=245&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                      alt=""
                    />
                  </div>
                  <div class="user-private">
                    <span class="username"
                      >猪是的念来过倒 <el-tag type="warning">Tag 4</el-tag></span
                    >
                    <div class="user-address">江西 九江</div>
                  </div>
                </div>
              </div>
              <div class="article">
                <div class="article-title">我是标题</div>
                <div class="article-content">
                  我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
                </div>
                <div class="article-tag">
                  <el-tag type="info">Tag 3</el-tag>
                  <el-tag type="warning">Tag 4</el-tag>
                  <el-tag type="danger">Tag 5</el-tag>
                </div>
              </div>
            </div>
          </div>
        </el-card>
      </el-affix>
    </div>
  </div>

  <!-- 弹窗组件 -->
  <el-drawer
    v-model="drawer"
    :with-header="false"
    size="760"
    :show-close="false"
    @close="handClose"
  >
    <!-- 回复的对象 -->
    <div class="replyer" @click="onCloseText">
      <div class="reply-title">评论回复</div>

      <commentContent></commentContent>
      <div class="reply-num">总共8条回复</div>
      <div class="reply-sum">
        <commentContent v-for="item in 10" style="margin-bottom: 30px"></commentContent>
      </div>
    </div>
    <div class="reply-box">
      <div class="avatar">
        <img
          src="https://p1.music.126.net/D-1BJmN0aqcwgh8F1AuyPA==/109951169341847902.jpg"
          alt=""
        />
      </div>
      <div class="textarea">
        <div class="Emo-Popup-box">
          <el-popover :teleported="false" placement="top-start" trigger="click" width="auto">
            <template #reference>
              <div>表情包</div>
              <el-button size="small" @click="send">发送</el-button>
            </template>
            <template #default>
              <Vue3EmojiPicker v-model="selectedEmoji" @select="onEmojiSelect" />
            </template>
          </el-popover>
          <div class="publish">
            <i class="iconfont icon-publish"></i>
          </div>
        </div>
        <textarea
          class="inpt"
          :class="{ textareaHeight: isChangeHeight }"
          ref="inputRef"
          @input="handleInput"
          placeholder="回复 猪是的念来过倒"
          @click="onTextClick"
        ></textarea>
      </div>
    </div>
  </el-drawer>
</template>
<style lang="scss" scoped>
//推荐文章
.right-recommend {
  .card-header {
    font-size: 20px;
    font-weight: 550;
  }
  .recommend-article {
    .article-items {
      margin-bottom: 20px;
      // background-color: pink;
      padding: 10px;
      transition: all 0.5s linear;
      border-radius: 5px;
      cursor: pointer;
      .user-info {
        .user-header {
          display: flex;
          .avatar {
            height: 55px;
            width: 55px;
            border-radius: 50%;
            overflow: hidden;
            border: 1px solid #ccc;
            img {
              height: 100%;
              width: 100%;
              object-fit: cover;
            }
          }
          .user-private {
            margin-left: 10px;
            .username {
              display: flex;
              align-items: center;
              font-size: 15px;
              margin-top: 5px;
              .el-tag {
                margin-left: 8px;
              }
            }
            .user-address {
              font-size: 12px;
              color: #999;
              margin-top: 3px;
            }
          }
        }
      }
      .article {
        margin-top: 15px;
        .article-title {
          font-size: 15px;
          font-weight: 550;
        }
        .article-content {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          display: -webkit-box;
          color: #999;
          -webkit-box-orient: vertical;
        }
        .article-tag {
          margin-top: 10px;
          .el-tag {
            margin-right: 10px;
          }
        }
      }
      &:hover {
        background-color: #925ff81b;
      }
    }
  }
}
.comment-box {
  display: flex;
  .left-comment {
    width: 60%;
  }
  .right-recommend {
    flex: 1;
    margin-left: 15px;
    position: static;
    top: 15px;
  }
}
.textareaHeight {
  height: 120px !important;
  border-color: #925ff8 !important;
}
.replyer {
  .reply-title {
    padding-bottom: 20px;
    font-size: 20px;
    font-weight: 550;
    border-bottom: 1px solid #ccc;
    margin-bottom: 25px;
  }
  .reply-num {
    font-size: 20px;
    font-weight: 550;
    margin-top: 25px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;
  }
}

textarea::-webkit-input-placeholder {
  color: #ddd;
  font-size: 18px;
  padding-top: 3px;
}

.reply-box {
  display: flex;
  padding: 15px 15px;
  // border-top: 1px solid #ccc;
  position: absolute;
  background-color: white;
  width: 100%;
  bottom: 0;
  left: 0;
  box-shadow: rgba(0, 0, 0, 0.843) 0px 3px 8px;

  .avatar {
    height: 60px;
    width: 60px;
    border: 1px solid #ccc;
    border-radius: 50%;
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .textarea {
    position: relative;
    margin-left: 15px;
    flex: 1;
    .Emo-Popup-box {
      display: flex;
      position: absolute;
      align-items: center;
      bottom: 10px;
      right: 10px;

      .publish {
        height: 40px;
        width: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #925ff885;
        font-weight: 550;
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.6s linear;
        margin-left: 10px;
        color: #999;
        .icon-publish {
          color: white;
          font-size: 20px;
        }
        &:hover {
          background-color: #925ff8;
        }
      }
    }
    .inpt {
      width: 100%;
      height: 50px;
      border-radius: 5px;
      border: 1px solid #ccc;
      resize: none;
      font-size: 18px;
      outline: none;
      color: #6e6d6d;
      transition: all 0.8s linear;
      text-indent: 1rem;
      margin-top: 5px;
    }
  }
}

//回复模块
.avtiveLikeCol {
  color: #925ff8;
}
.comment-content {
  width: 700px;
  display: flex;
  .left-user-avatar {
    height: 60px;
    width: 60px;
    border: 1px solid #ccc;
    border-radius: 50%;
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .right-username {
    margin-left: 10px;
    flex: 1;
    .nickname-box {
      display: flex;
      align-items: center;
      margin-top: 5px;
      margin-bottom: 5px;
      .nickname {
        font-size: 16px;
        margin-right: 10px;
      }
    }
    .come-from {
      color: #999;
    }
    .content {
      font-size: 17px;
      margin-top: 15px;
    }
    .relative-comment {
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
      .date-time {
        font-size: 16px;
        color: #999;
      }
      .comment-act {
        display: flex;
        font-size: 16px;
        color: #999;
        .reply {
          margin-right: 15px;
          display: flex;
          align-items: center;
          transition: all 0.3s linear;
          cursor: pointer;
          .iconfont {
            font-size: 22px;
            margin-right: 7px;
          }
          &:hover {
            color: #925ff8;
          }
        }
        .like {
          display: flex;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s linear;
          .iconfont {
            margin-right: 7px;
            font-size: 22px;
          }
          &:hover {
            color: #925ff8;
          }
        }
      }
    }
  }
}
.second-comment {
  display: flex;
  margin-top: 15px;
}

.action {
  display: inline-block;
  padding: 0 4px;
  color: var(--color-text-1);
  line-height: 24px;
  background: transparent;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.1s ease;
}
.action:hover {
  background: var(--color-fill-3);
}

.comment-container {
  padding: 20px;
  // width: 60%;
  background-color: white;
  .comment-title {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    .total-num {
      font-size: 18px;
    }
    .sort-type {
      font-size: 16px;
      color: #999;
      .hot {
        padding: 0 10px;
        transition: all 0.3s linear;

        &:hover {
          color: #925ff8;
        }
      }
      .new {
        transition: all 0.3s linear;

        &:hover {
          color: #925ff8;
        }
      }
      .iconfont {
        transition: all 0.3s linear;

        &:hover {
          color: #925ff8;
        }
      }
    }
    .activeColor {
      color: #925ff8;
    }
  }
  .comment-content {
    margin-top: 20px;
  }
}
</style>
