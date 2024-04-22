<script setup>
defineProps({
  imgArr: {
    type: Array
  }
})
</script>

<template>
  <div class="seek-content">
    <!-- <WaterFall></WaterFall> -->
    <div class="seek-item" v-for="item in imgArr">
      <div class="img-box">
        <img :src="item.url" alt="" />
      </div>
      <div class="article-content">
        <span class="title">今天真的很美妙</span>
        <span class="detail"
          >在每一个充满希望的清晨，告诉自己：努力就能遇见更好的自己，比别人多一点努力，你就会多一份成绩；比别人多一点志气，你就会多一份出息；比别人多一点坚持，你就会夺取胜利；比别人多一点执着，你就会创造奇迹！</span
        >
      </div>
      <div class="user-msg">
        <div class="user-info">
          <div class="avatar">
            <img :src="item.url" alt="" />
          </div>
          <div class="username">猪是的念来过倒</div>
        </div>
        <div class="like-num"><i class="iconfont icon-like"></i> <span>999</span></div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.seek-content {
  width: 100%;
  columns: 5;
  gap: 15px;
  height: auto;
  .seek-item {
    width: 300px;
    height: auto;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    page-break-inside: avoid;
    transition: all 0.5s linear;
    border: 1px solid transparent;

    cursor: pointer;
    .img-box {
      overflow: hidden;
      height: auto;
      width: 100%;
      border-radius: 5px;
      overflow: hidden;
      img {
        width: 100%;
        transition: all 0.5s linear;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
    .article-content {
      display: flex;
      flex-direction: column;
      padding: 15px;
      .title {
        font-weight: 550;
        font-size: 16px;
      }
      .detail {
        margin-top: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
    }
    .user-msg {
      display: flex;
      align-items: center;
      margin-left: 15px;
      justify-content: space-between;

      .user-info {
        display: flex;
        align-items: center;
        .avatar {
          height: 40px;
          width: 40px;
          img {
            border-radius: 5px;
            height: 100%;
            width: 100%;
          }
        }
        .username {
          margin-left: 10px;
          font-size: 15px;
        }
      }
      .like-num {
        display: flex;
        align-items: center;
        margin-right: 15px;
        .iconfont {
          font-size: 30px;
        }
        span {
          font-size: 15px;
        }
      }
    }
    &:hover {
      transform: translateY(-3px);
      border-color: #915ff8;
    }
  }
}
</style>
