<script setup>
import ArticleMsg from './components/UserInfo/ArticleMsg.vue'
import AtricleContent from './components/UserInfo/AtricleContent.vue'
import Comment from './components/Comment/index.vue'

const url = 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
const srcList = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
]
</script>

<template>
  <link rel="stylesheet" href="//at.alicdn.com/t/c/font_4498745_nn0qtah5kp.css" />
  <div class="user-aticle-container">
    <el-card style="max-width: 480px" shadow="hover">
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
        <div class="score">
          <span class="score-num">120</span>
          <span class="score-title">积分</span>
        </div>
      </div>

      <div class="about-article-title">本篇文章</div>
      <div class="about-article">
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
        <div class="views">
          <span class="views-num">120</span>
          <span class="views-title">浏览</span>
        </div>
      </div>

      <!-- 用户相关文章 -->
      <div class="user-relative-title">其他文章</div>
      <div class="user-relative-article" v-if="true">
        <div class="animate-box">
          <!-- 1.展示有图片的文章 -->
          <div class="container-img" v-for="(item, index) in 3" :key="index" v-if="true">
            <div class="article">
              <div class="left-box">
                <img
                  src="https://tse3-mm.cn.bing.net/th/id/OIP-C.-tzTaX_rJ3XOQd1RMrezTAHaE8?w=224&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                  alt=""
                />
              </div>
              <AtricleContent></AtricleContent>
            </div>
            <!-- 文章点赞等详情 -->
            <ArticleMsg></ArticleMsg>
          </div>

          <!-- 2.展示无图片照片 -->
          <div class="container-text" v-if="false" v-for="item in 3">
            <AtricleContent></AtricleContent>
            <ArticleMsg></ArticleMsg>
          </div>
        </div>
      </div>
      <!-- 3.最后一种情况：什么文章都没有 -->
      <div class="container-none" v-else>
        <el-empty description="该用户还未发布文章" :image-size="100" />
      </div>
      <div class="relate-user">
        <div class="send-msg">私信</div>
        <div class="care-user">关注</div>
        <div class="enter-home">进入主页</div>
      </div>
    </el-card>

    <el-card class="right-aritcle" shadow="hover">
      <template #header>
        <div class="card-header">
          <span>文章详情</span>
        </div>
      </template>
      <div class="aritcle-detail-container">
        <div class="article-title">我是标题</div>
        <div class="article-content">
          <div class="left-img-container">
            <div class="img-items" v-for="(item, index) in srcList" :key="index">
              <el-image
                :src="item"
                :zoom-rate="1.2"
                :max-scale="7"
                :min-scale="0.2"
                :preview-src-list="srcList"
                :initial-index="index"
                fit="cover"
              />
            </div>
          </div>
          <div class="right-text-container">
            <div class="text-content">
              手机的CPU（中央处理器）是一种微处理器，是手机中最重要的芯片之一，主要负责处理手机的各种计算任务和指令。手机的CPU通常由多个核心组成，每个核心可以独立执行任务。CPU的性能直接影响手机的运行速度和响应能力。
              手机CPU的架构通常采用ARM架构，常见的手机CPU厂商包括高通（Qualcomm）、联发科（MediaTek）、苹果（Apple）和三星（Samsung）等。这些厂商生产的手机CPU在设计上有一定差异，包括核心数量、核心频率、制程工艺、功耗控制等方面。
            </div>
          </div>
        </div>
        <div class="article-bottom">
          <ArticleMsg :size="19"></ArticleMsg>
        </div>
      </div>
    </el-card>
  </div>
  <Comment></Comment>
</template>

<style lang="scss" scoped>
.card-header {
  font-size: 20px;
  font-weight: 550;
}
.aritcle-detail-container {
  position: relative;
  height: 595px;
  width: 100%;
  .article-title {
    font-size: 18px;
  }
  // background-color: pink;
  .article-bottom {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
  }
  .article-content {
    display: flex;
    align-items: center;
    margin-top: 20px;
    .left-img-container {
      flex: 6;
      height: 450px;
      justify-content: space-around;
      display: grid;
      grid-template-columns: repeat(3, 150px); /* 固定三列网格布局，每列宽度为120px */
      gap: 10px; /* 网格项之间的空间为10 */
      .img-items {
        height: 135px;
        width: 135px;
        border: 1px solid #ccc;
        margin-bottom: 10px;
        border-radius: 10px;
        overflow: hidden;
        .el-image {
          height: 100%;
          width: 100%;
        }
      }
    }
    .right-text-container {
      flex: 5;
      // background-color: pink;
      overflow-y: scroll; /*只是y方向*/
      // height: 500px;
      height: 500px;
      .text-content {
        text-indent: 2em;
        font-size: 17px;
        // padding: 0 0 0 20px;
        padding: 10px;
      }
    }
  }
}

.user-aticle-container {
  display: flex;
  .right-aritcle {
    flex: 6;
    margin-left: 15px;
  }
}
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
  margin-top: 20px;
  justify-content: space-around;
  padding: 20px 0;
  background-color: #cccccc3e;
  .publish,
  .fans,
  .rank,
  .score {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .publish-title,
    .fans-title,
    .rank-title,
    .score-title {
      margin-top: 10px;
      font-size: 16px;
      color: #999;
    }
    .publish-num,
    .fans-num,
    .rank-num,
    .score-num {
      font-size: 18px;
      color: #838181;
    }
  }
}

.about-article {
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
  .views,
  .get-like,
  .collect,
  .comment {
    display: flex;
    flex-direction: column;
    font-size: 16px;

    .views-num,
    .like-num,
    .collect-num,
    .comment-num {
    }
    .views-title,
    .like-title,
    .collect-title,
    .comment-title {
      margin-top: 10px;
    }
  }
}

.about-article-title,
.user-relative-title {
  font-size: 20px;
  font-weight: 550;
  padding: 25px 0;
  border-bottom: 1px solid #ccc;
}

//用户相关文章
.user-relative-article {
  position: relative;
  height: 150px;
  background-color: #cccccc24;
  display: flex;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 20px;
  .animate-box {
    position: absolute;
    transform: translateY(-150px);
    animation: scroll 10s linear infinite;
    &:hover {
      animation-play-state: paused;
    }
    //有图文章
    .container-img {
      display: flex;
      flex-direction: column;

      .article {
        display: flex;
        margin-top: 20px;
        cursor: pointer;
        .left-box {
          height: 80px;
          width: 120px;
          border: 1px solid #ccc;
          border-radius: 5px;
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }
      }
    }
    //只展示文本
    .container-text {
      margin-top: 20px;
    }
    //无文章展示
    .container-none {
      // height: 150px;
    }
  }
}

.container-none {
  height: 150px;
  margin-top: 10px;
  .el-empty {
    padding: 0;
  }
}
@keyframes scroll {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-150px);
  }
  90% {
    transform: translateY(-300px);
  }
  100% {
    transform: translateY(0);
  }
}

//用户相关
.relate-user {
  display: flex;
  justify-content: space-around;
  margin: 35px 0 10px;
  .send-msg,
  .care-user,
  .enter-home {
    text-align: center;
    line-height: 35px;
    height: 35px;
    width: 120px;
    border: 1px solid #ccc;
    transition: all 0.3s linear;
    border-radius: 30px;
    cursor: pointer;
    &:hover {
      background-color: #925ff841;
      color: #925ff8;
    }
  }
  .care-user,
  .enter-home {
    margin-left: 30px;
  }
  .enter-home {
  }
}
</style>
