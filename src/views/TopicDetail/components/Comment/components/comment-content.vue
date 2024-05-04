<script setup>
import { ref } from 'vue'
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
</script>
<template>
  <div class="comment-content">
    <div class="left-user-avatar" v-if="isShowTopComment">
      <img src="https://p1.music.126.net/1tGaw9UYAkXsqw_GwBIrtw==/109951169445643234.jpg" alt="" />
    </div>
    <div class="right-username">
      <div class="nickname-box" v-if="isShowTopComment">
        <span class="nickname">猪是的念来过倒</span>
        <el-tag type="warning">Tag 4</el-tag>
      </div>
      <div class="come-from" v-if="isShowTopComment">海南 • 海口</div>
      <div class="content" v-if="isShowTopComment">
        {{ commentItemDetail?.review_text }}
      </div>
      <div class="relative-comment" v-if="isShowTopComment">
        <div class="date-time" style="font-size: 12px">
          {{ commentItemDetail?.review_time.replace(/\s*GMT/, '').slice(11) }}
        </div>
        <div class="comment-act">
          <div class="reply" @click="onOpenDraw(commentItemDetail)">
            <i class="iconfont icon-comments"></i>
            <span>回复</span>
          </div>
          <div class="like" @click="onHandLike">
            <i class="iconfont icon-like_fill" :class="{ avtiveLikeCol: isLike }"></i>
            <span class="like-num">99</span>
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
            <img src="https://pic1.zhimg.com/v2-30ad0a5f53f6e308620013b140c1aac4_r.jpg" alt="#" />
          </div>
          <div class="right-username">
            <div class="nickname-box">
              <span class="nickname">一小池勺</span>
              <el-tag type="warning">Tag 4</el-tag>
            </div>
            <div class="come-from">海南 • 海口</div>
            <div class="content">
              {{ item.review_text }}
            </div>
            <div class="relative-comment">
              <div class="date-time">2024-4-11</div>
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
