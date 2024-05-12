<script setup>
// 点赞失活 https://pic.imgdb.cn/item/662272270ea9cb1403be0c8f.png
// 点赞激活 https://pic.imgdb.cn/item/662272a80ea9cb1403bf08b0.png

// 收藏失活 https://pic.imgdb.cn/item/662272f10ea9cb1403bfb26a.png
// 收藏激活 https://pic.imgdb.cn/item/662273060ea9cb1403bfd8c8.png

// 评论 https://pic.imgdb.cn/item/662273300ea9cb1403c02a59.png
import { ref, onMounted } from 'vue'
defineProps({
  commentItemDetail: {
    type: Object,
    default: () => {}
  },
  isFold: {
    type: Boolean,
    default: false
  },
  isShowTopComment: {
    type: Boolean,
    default: true
  },
  isShowFoldText: {
    type: Boolean,
    default: true
  },
  floorCommentNum: {
    type: Number
  }
})

const isLike = ref(false)
const onHandLike = () => {
  isLike.value = !isLike.value
}

//打开弹窗
const emit = defineEmits(['open-draw'])
const onOpenDraw = (commentItemDetail) => {
  emit('open-draw', commentItemDetail)
}

onMounted(() => {
  console.log("aeifhaesifhawiesfhawiehfwaeiuhfwaiefweuifh",commentItemDetail)
})
</script>
<template>
  <div class="comment-content">
    <div class="left-user-avatar" v-if="isShowTopComment">
      <img :src="commentItemDetail?.user_pic" alt="" />
    </div>
    <div class="right-username">
      <div class="nickname-box" v-if="isShowTopComment">
        <span class="nickname">{{ commentItemDetail?.user_name }}</span>
        <el-tag type="warning">Lv.1</el-tag>
      </div>
      <div class="come-from" v-if="isShowTopComment">
        中国 • {{ commentItemDetail.user_introduce }}
      </div>
      <div class="content" v-if="isShowTopComment">
        {{ commentItemDetail?.review_text }}
      </div>
      <div class="relative-comment" v-if="isShowTopComment">
        <div class="date-time" style="font-size: 12px">
          <!-- {{ commentItemDetail?.review_time.replace(/\s*GMT/, '').slice(11) }} -->
        </div>
        <div class="comment-act">
          <div class="reply" @click="onOpenDraw(commentItemDetail)">
            <el-button type="text">回复</el-button>
          </div>
          <div class="like" @click="onHandLike">
            <img
              class="w-5 mr-2"
              src="https://pic.imgdb.cn/item/662272270ea9cb1403be0c8f.png"
              alt=""
            />
            <span>{{ commentItemDetail.like_count }}</span>
          </div>
        </div>
      </div>
      <!-- 第二段评论 -->
      <template
        v-for="(item, index) in commentItemDetail.secondaryReviews.slice(0, floorCommentNum)"
        :key="index"
      >
        <div v-if="isFold" class="second-comment">
          <div class="left-user-avatar">
            <img :src="item.user_pic" alt="#" />
          </div>
          <div class="right-username">
            <div class="nickname-box">
              <span class="nickname">{{ item.user_name }}</span>
              <el-tag type="warning">Lv.1</el-tag>
            </div>
            <div class="come-from" v-if="isShowTopComment">中国 • {{ item.user_introduce }}</div>
            <div class="content">
              {{ item.review_text }}
            </div>
            <div class="relative-comment">
              <!-- <div class="date-time">2024-4-11</div> -->
              <div class="comment-act"></div>
            </div>
          </div>
        </div>
      </template>
      <el-button
        class="ml-50"
        v-if="commentItemDetail.secondaryReviews.length > 3 && isShowFoldText"
        @click="onOpenDraw(commentItemDetail)"
        type="text"
        >查看全部回复 ({{ commentItemDetail.secondaryReviews.length }})</el-button
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
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
</style>
