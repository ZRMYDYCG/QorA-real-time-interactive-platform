<script setup></script>

<template>
  <el-card style="max-width: 480px">
    <div class="userInfo">
      <div class="img-box">
        <img
          src="https://p1.music.126.net/iN1QCBDd9wxCy2CB0RLW3g==/109951169424112014.jpg"
          alt=""
        />
      </div>
      <div class="about-user">
        <div class="username">猪是的念来过倒</div>
        <div class="experiencer-level">
          <span>体验官等级</span>
          <el-tag type="warning">LV 8</el-tag>
        </div>
      </div>
    </div>
    <!-- 文章相关 -->
    <div class="user-achievement">
      <div class="publish">
        <span class="publish-num">99</span>
        <span class="publish-title">文章发布</span>
      </div>

      <div class="fans">
        <span class="fans-num">2222</span>
        <span class="fans-title">粉丝</span>
      </div>
      <div class="rank">
        <span class="rank-num">1212</span>
        <span class="rank-title">排名</span>
      </div>
    </div>

    <div class="about-article">
      <div class="views">
        <span class="views-num">120</span>
        <span class="pubviewslish-title">浏览</span>
      </div>
      <div class="get-like">
        <span class="like-num">99</span>
        <span class="like-title">获赞</span>
      </div>
      <div class="collect">
        <span class="collect-num">120</span>
        <span class="collect-title">收藏</span>
      </div>
      <div class="comment">
        <span class="comment-num">120</span>
        <span class="comment-title">评论</span>
      </div>
    </div>

    <!-- 用户相关文章 -->
    <div class="user-relative-article">
      <div class="container-img" v-if="true">
        <div class="right-box"></div>
        <div class="left-text"></div>
      </div>
      <div class="container-text" v-else></div>
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
.userInfo {
  display: flex;
  .img-box {
    height: 80px;
    border-radius: 50%;
    width: 80px;
    border: 1px solid #ccc;
    overflow: hidden;
    img {
      height: 100%;
      widows: 100%;
      object-fit: cover;
    }
  }

  .about-user {
    display: flex;
    flex-direction: column;
    // justify-content: space-around;
    margin-left: 10px;
    .username {
      font-size: 20px;
      font-weight: 550;
      margin-top: 10px;
    }
    .experiencer-level {
      margin-top: 10px;
      span {
        margin-right: 10px;
      }
    }
  }
}

.user-achievement {
  display: flex;
  .publish,
  .fans,
  .rank {
    display: flex;
    flex-direction: column;
    align-items: center;
    .publish-title,
    .fans-title,
    .rank-title {
      font-size: 18px;
    }
    .publish-num,
    .fans-num,
    .rank-num {
    }
  }
}
</style>
