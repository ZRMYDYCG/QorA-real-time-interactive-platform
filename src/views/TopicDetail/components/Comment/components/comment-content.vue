<script setup>
import { ref } from 'vue'
const isLike = ref(false)
const onHandLike = () => {
  isLike.value = !isLike.value
}

//打开弹窗
const emit = defineEmits(['open-draw'])
const onOpenDraw = () => {
  emit('open-draw')
}
</script>
<template>
  <div class="comment-content">
    <div class="left-user-avatar">
      <img src="https://p1.music.126.net/1tGaw9UYAkXsqw_GwBIrtw==/109951169445643234.jpg" alt="" />
    </div>
    <div class="right-username">
      <div class="nickname-box">
        <span class="nickname">猪是的念来过倒</span>
        <el-tag type="warning">Tag 4</el-tag>
      </div>
      <div class="come-from">海南•海口</div>
      <div class="content">
        手机的CPU（中央处理器）是一种微处理器，是手机中最重要的芯片之一，主要负责处理手机的各种计算任务和指令。手机的CPU通常由多个核心组成，每个核心可以独立执行任务。CPU的性能直接影响手机的运行速度和响应能力。
      </div>
      <div class="relative-comment">
        <div class="date-time">2024-4-11</div>
        <div class="comment-act">
          <div class="reply" @click="onOpenDraw">
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
      <div class="second-comment" v-if="false">
        <div class="left-user-avatar"></div>

        <div class="right-username">
          <div class="nickname-box">
            <span class="nickname">猪是的念来过倒</span>
            <el-tag type="warning">Tag 4</el-tag>
          </div>
          <div class="come-from">海南•海口</div>
          <div class="content">
            手机的CPU（中央处理器）是一种微处理器，是手机中最重要的芯片之一，主要负责处理手机的各种计算任务和指令。手机的CPU通常由多个核心组成，每个核心可以独立执行任务。CPU的性能直接影响手机的运行速度和响应能力。
          </div>
          <div class="relative-comment">
            <div class="date-time">2024-4-11</div>
            <div class="comment-act">
              <div class="reply" @click="onOpenDraw">
                <i class="iconfont icon-comments"></i>
                <span>回复</span>
              </div>
              <div class="like">
                <i class="iconfont icon-like_fill"></i>
                <span class="like-num">99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
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
