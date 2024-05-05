<script setup>
import commentContent from './components/comment-content.vue'
import { getLocalStorage } from '@/utils/index.js'
import Vue3EmojiPicker from 'vue3-emoji-picker'
import 'vue3-emoji-picker/css'
import { useRoute } from 'vue-router'
import { ref, watch, nextTick } from 'vue'
import { usePublishArticleStore } from '@/stores/modules/PublishArticle/index.js'
import { fetchPersonalHomepageApi } from '@/service/UserHome/index.js'
import { findItemIndexWithZeroLikeCount } from '@/utils/index.js'
let user_pic = getLocalStorage('userInfo').value.picture_address
const route = useRoute()
const publishArticleStore = usePublishArticleStore()
const props = defineProps({
  articleId: {
    type: Number
  }
})
const defaultSort = ref('hot')
const toggleSort = (val) => {
  if (val == 'hot') {
    defaultSort.value = 'hot'
  } else if (val == 'new') {
    defaultSort.value = 'new'
  }
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

// TODO:发布评论
const commentVisible = ref(false)
const commentInput = ref(null)
let textareaContent = ref('')
const user_id = getLocalStorage('userInfo')?.value?.user_id // 本人 id
const review_object_id = route.params.id // 该评论的文章 id

const handleCommentVisible = () => {
  commentVisible.value = true
}

// 发布一级、二级评论
const handlePublicCommentsApi = (review_id, review_grade_top, review_top_id) => {
  // console.log(inputRef.value.value)
  if (drawer.value) {
    publishArticleStore.handlePublicCommentsApi(
      'dynamic',
      user_id,
      review_object_id,
      inputRef.value.value,
      review_id, // 该条评论的 id
      review_grade_top, // 该一级评论用户的 id
      review_top_id // 该一级评论的 id
    )

    commentVisible.value = false
    textareaContent.value = ''
    inputRef.value.value = ''
  } else {
    publishArticleStore.handlePublicCommentsApi(
      'dynamic',
      user_id,
      review_object_id,
      textareaContent.value,
      props.articleId
    )

    commentVisible.value = false
    textareaContent.value = ''

    inputRef.value.value = ''
  }
}

// TODO:二级评论的回显问题
const drawer = ref(false)
let floorCommentDetail = ref({})
let index = ref(null)
let backUserName = ref('')
// 是否打开弹窗组件
const openDraw = async (commentItemDetail) => {
  console.log(commentItemDetail)

  const res = await fetchPersonalHomepageApi(commentItemDetail.review_user)
  console.log(res)
  backUserName.value = '回复给:  ' + res.data?.user_now?.user_name

  floorCommentDetail.value = commentItemDetail

  index.value = findItemIndexWithZeroLikeCount(publishArticleStore.commentList, commentItemDetail)

  // 打开聊天抽屉
  setTimeout(() => {
    drawer.value = !drawer.value
  }, 500)
}

// TODO:主评论框回显自己的评论

// TODO:聚焦
watch(commentVisible, (newValue) => {
  if (newValue) {
    nextTick(() => {
      if (commentInput.value) {
        commentInput.value.focus()
      }
    })
  }
})
</script>
<template>
  <el-button @click="handleCommentVisible" type="text" class="mt-10" size="small">
    <el-icon class="mr-2"><EditPen /></el-icon>发布评论</el-button
  >
  <link rel="stylesheet" href="//at.alicdn.com/t/c/font_4498745_5f449up5pic.css" />
  <div class="comment-box">
    <div class="left-comment">
      <el-card style="width: 100%; margin-top: 15px" shadow="hover">
        <div class="comment-container">
          <div class="comment-title">
            <!-- 标题 -->
            <span class="total-num">全部评论({{ publishArticleStore.commentList.length }})</span>
            <!-- 排序 -->
            <div class="sort-type">
              <i class="iconfont icon-paixu" @click="toggleSort('way')"></i>
              <span
                class="hot"
                @click="toggleSort('hot')"
                :class="{ activeColor: defaultSort === 'hot' }"
                >最新</span
              >
              <span
                class="new"
                @click="toggleSort('new')"
                :class="{ activeColor: defaultSort === 'new' }"
                >最热</span
              >
            </div>
          </div>
          <template v-for="(item, index) in publishArticleStore.commentList" :key="index">
            <commentContent
              :floorCommentNum="3"
              isFold
              :commentItemDetail="item"
              :isOpenDraw="drawer"
              @open-draw="openDraw"
            ></commentContent>
          </template>
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
      <commentContent
        :isShowFoldText="false"
        :commentItemDetail="floorCommentDetail"
      ></commentContent>
      <!-- {{ floorCommentDetail }} -->
      <div class="reply-num">总共{{ floorCommentDetail.secondaryReviews.length }}条回复</div>
      <div class="reply-sum">
        <commentContent
          :floorCommentNum="floorCommentDetail.secondaryReviews.length"
          :isShowTopComment="false"
          :isFold="true"
          :isShowFoldText="false"
          :commentItemDetail="publishArticleStore.commentList[index]"
        ></commentContent>
      </div>
    </div>
    <div class="reply-box">
      <div class="avatar">
        <img :src="user_pic" alt="" />
      </div>
      <div class="textarea">
        <div class="Emo-Popup-box">
          <el-popover :teleported="false" placement="top-start" trigger="click" width="auto">
            <template #reference>
              <div>表情包</div>
              <el-button size="small">发送</el-button>
            </template>
            <template #default>
              <Vue3EmojiPicker v-model="selectedEmoji" @select="onEmojiSelect" />
            </template>
          </el-popover>
          <div
            class="publish"
            @click="
              handlePublicCommentsApi(
                floorCommentDetail.review_id,
                floorCommentDetail.review_user,
                floorCommentDetail.review_id
              )
            "
          >
            <i class="iconfont icon-publish"></i>
          </div>
        </div>
        <textarea
          class="inpt"
          :class="{ textareaHeight: isChangeHeight }"
          ref="inputRef"
          @input="handleInput"
          :placeholder="backUserName"
          @click="onTextClick"
        ></textarea>
      </div>
    </div>
  </el-drawer>

  <!-- 发布评论模态框 -->
  <el-dialog v-model="commentVisible" width="30%">
    <template #title>
      <h4>发布看法</h4>
    </template>
    <template #default>
      <el-input
        v-model="textareaContent"
        ref="commentInput"
        placeholder="良言一句三冬暖，恶语伤人三春寒"
        type="textarea"
        autosize
      ></el-input>
    </template>
    <template #footer>
      <el-button size="small" @click="handlePublicCommentsApi">发布</el-button>
    </template>
  </el-dialog>
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

<style lang="scss">
.el-dialog {
  .el-textarea {
    .el-textarea__inner {
      height: 120px !important;
    }
  }
}
</style>
