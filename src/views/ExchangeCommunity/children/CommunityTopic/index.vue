<script setup>
import { ref } from 'vue'

const replyData = ref([
  { content: '手机到底如何进行选择，才能够利益最大化？', replyNum: 20 },
  { content: '手机的芯片，对手机运行的流畅程度是否有影响？', replyNum: 99 },
  { content: '用户更在意手机的使用感还是手机的硬件设施？', replyNum: 12 }
])

const discussImgData = ref([
  { url: 'https://p1.music.126.net/WtbcqsNftMrjiR023IMmsQ==/109951169421204776.jpg' },
  { url: 'https://p1.music.126.net/Kcpwubt7PVd9kgp6bmarBg==/109951169321700663.jpg' },
  { url: 'https://p1.music.126.net/ktmVwkScqx_tIWlPW6RGLQ==/109951169381065644.jpg' }
])

//数据共有三种状态：1.fly 飙升 2.up 上升 3.new 最新
const hotRankData = ref([
  {
    content:
      '在屏幕上的像素点个数，单位是 px。在相同的屏幕尺寸下，分辨率越高，显示越清晰。目前以 1080P 的较多，当然还有 720P、2K、4K 的其他分辨率手机',
    evaluate: 10,
    visit: 45,
    concern: 22,
    reply: 22,
    state: 'fly',
    totalNumArr: {
      visitNum: 103,
      concernNum: 123,
      replyNum: 55
    }
  },
  {
    content:
      '刷新率是指 1s 内画面刷新的次数。刷新率越高，所显示的画面稳定性就越好。比较常见的就是 60Hz、90Hz、120Hz、144Hz，一般为了更高的游戏体验，会选择高刷新率的手机',
    evaluate: 8,
    visit: 10,
    concern: 1123,
    reply: 23,
    state: 'fly',
    totalNumArr: {
      visitNum: 13,
      concernNum: 2002,
      replyNum: 98
    }
  },
  {
    content:
      '色域就是屏幕所能表现的色彩范围。色阶是图像亮度强弱的表现，主要表现在图像色彩的丰满程度、精细度和层次感。',
    evaluate: 8,
    visit: 36,
    concern: 23,
    reply: 99,
    state: 'new',
    totalNumArr: {
      visitNum: 175,
      concernNum: 45,
      replyNum: 178
    }
  },
  {
    content:
      '拍照，是我们记录生活的一种方式，摄像头的分辨率成为了一个重要的对比参数，当然不是越高越好，因为还要考虑屏幕、处理器等其他因素。不考虑其他硬件的影响，就摄像头本身而言，主要有以下几个方面',
    evaluate: 6,
    visit: 123,
    concern: 22,
    reply: 46,
    state: 'up',
    totalNumArr: {
      visitNum: 978,
      concernNum: 112,
      replyNum: 55
    }
  }
])
</script>

<template>
  <link rel="stylesheet" href="//at.alicdn.com/t/c/font_4486833_qxn7d8m5f.css" />

  <!-- 热点讨论 -->
  <div class="hot-discuss-box">
    <el-card style="max-width: 100%; margin-top: 20px" shadow="hover">
      <template #header>
        <div class="hot-discuss-header">
          <span>热点讨论</span>
        </div>
      </template>
      <div class="hot-discuss-container">
        <div class="hot-discuss-item">
          <div class="left-box">
            <!-- 左侧图片 -->
            <div class="img-box">
              <img
                src="https://ts1.cn.mm.bing.net/th/id/R-C.5295b7495567ef9a7246969674ba3e44?rik=16a3eH56M1gVdw&riu=http%3a%2f%2fwww.lucaijing.com.cn%2fuploads%2fallimg%2f201122%2f134K23255-0.jpg&ehk=VgP%2flKBmf2%2bVrKbURqywrplOn1fGaxDhTdGUlnLSKPA%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
              />
            </div>
            <!-- 讨论主题 -->
            <div class="discuss-theme">
              <div class="title">GT Neo6 SE手机性能</div>
              <div class="main-content">骁龙7+ Gen3处理器,有着相同的Cortex-X4超大核</div>
            </div>
            <!-- 加入讨论的用户 -->
            <div class="attain-user">
              <div class="user-avatar">
                <img :src="item.url" alt="" v-for="(item, index) in discussImgData" :key="index" />
                <div class="attain-info">
                  <span>等10位嘉宾参加回答 | 123回答</span>
                </div>
              </div>
            </div>
          </div>
          <div class="right-box">
            <div class="right-item" v-for="(item, index) in replyData" :key="index">
              <div class="relative-reply">
                <span class="reply-content">{{ item.content }}</span>
                <span class="reply-num">{{ item.replyNum }} 个回答</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 排行榜头 -->
      <div class="hot-rank">
        <div class="rank-header">
          <div class="title">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-paixingbang"></use>
            </svg>
            <span>热力排行榜</span>
          </div>
          <div class="rank-type">
            <div class="theme">主题</div>
            <div class="hot-value">热力值</div>
            <div class="visit">访问量</div>
            <div class="concern">关注量</div>
            <div class="reply">回答量</div>
          </div>
        </div>
        <div class="rank-item"></div>
      </div>
      <!-- 排行榜体 -->
      <div class="hot-rank-item" v-for="(item, index) in hotRankData" :key="index">
        <div class="item-theme">
          <div
            class="state"
            :class="{
              'hot-discuss-fly': item.state === 'fly',
              'hot-discuss-up': item.state === 'up',
              'hot-discuss-new': item.state === 'new'
            }"
          >
            {{ item.state === 'fly' ? '飙升' : item.state === 'up' ? '上升' : '最新' }}
          </div>
          <div class="content">
            {{ item.content }}
          </div>
        </div>
        <div class="item-hot-value">
          <span class="rate">评分 {{ item.evaluate }}分</span>
          <div class="evaluate">
            <svg
              class="icon"
              aria-hidden="true"
              v-for="(item1, index) in item.evaluate / 2"
              :key="index"
            >
              <use xlink:href="#icon-zuire"></use>
            </svg>
          </div>
        </div>
        <div class="item-hot-visit">
          <div class="up-num">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-up"></use>
            </svg>
            <span>{{ item.totalNumArr.visitNum }}</span>
          </div>
          <div class="total-num">总数 {{ item.visit }}</div>
        </div>
        <div class="item-hot-concern">
          <div class="concern">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-up"></use>
            </svg>
            <span>{{ item.concern }}</span>
          </div>
          <div class="total-num">总数 {{ item.totalNumArr.concernNum }}</div>
        </div>
        <div class="item-hot-reply">
          <div class="reply">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-up"></use>
            </svg>
            <span>{{ item.reply }}</span>
          </div>
          <div class="total-num">总数 {{ item.totalNumArr.replyNum }}</div>
        </div>
      </div>
    </el-card>
  </div>

  <!-- 好问题专区 -->
  <div class="good-problem-box">
    <el-card style="width: 100%" shadow="hover">
      <template #header>
        <div class="good-problem-header">
          <span>好问题专区</span>
        </div>
      </template>
      <div class="good-problem" v-for="(item, index) in 5">
        <div class="good-problem-content">
          <div class="good-problem-item">
            <div class="content-text">
              <div
                class="rank"
                :class="{
                  'rank-first-color': index === 0,
                  'rank-second-color': index === 1,
                  'rank-third-color': index === 2,
                  'rank-other-color': index >= 3
                }"
              >
                <i class="iconfont icon-zuire"></i>
              </div>
              <span class="text"
                >在真我GT Neo6
                SE的发布会邀请函上，realme真我极具自信的打出了“永远的旗舰射门员”的口号，可见其对这款产品表现的自信。而在实际拿到产品时，这种“对标旗舰”的自信，也体现在了手机的外观设计、屏幕素质等方方面面。
              </span>
            </div>
            <div class="about-content">
              <div class="views">6.7 万浏览</div>
              <div class="focus">108 关注</div>
              <div class="reply">34 回答</div>
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>

  <!-- 领域体验官 -->
  <div class="experiencer-box">
    <el-card style="width: 100%; margin-top: 20px" shadow="hover">
      <template #header>
        <div class="experiencer-header">
          <span>领域体验官</span>
        </div>
      </template>
      <div class="reflesh">
        <i class="iconfont icon-shuaxin"></i>
        <span>点击刷新</span>
      </div>
      <div class="experiencer-container">
        <div class="experiencer-item" v-for="item in 3">
          <div class="user-info">
            <div class="avatar-box">
              <img
                src="https://pic3.zhimg.com/v2-220c2500a5c33e693f946c4e40dac00a_r.jpg"
                class="avatar"
              />
            </div>
            <span class="username">猪是的念来过倒</span>
            <div class="about-user">
              <div class="fans">999 关注</div>
              <div class="public-article">12 文章</div>
            </div>
          </div>
          <div class="private-filed">手机硬件研究</div>
          <div class="attend-user">进入主页</div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style scoped lang="scss">
.rank-first-color {
  background-color: #f65853;
}
.rank-second-color {
  background-color: #ff8e05;
}
.rank-third-color {
  background-color: #edb873;
}
.rank-other-color {
  background-color: #c4c4c4;
}

.good-problem-header,
.experiencer-header,
.hot-discuss-header {
  font-size: 30px;
  font-weight: 600;
}
// 好问题专区
.good-problem-box {
  margin-bottom: 25px;
  .good-problem {
    .good-problem-content {
      .good-problem-item {
        padding: 10px 10px;
        cursor: pointer;
        transition: all 0.5s linear;
        margin-bottom: 30px;
        &:hover {
          border-radius: 5px;
          transform: translateY(-3px);
        }
        .content-text {
          display: flex;
          align-items: center;
          height: 40px;
          .rank {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 25px;
            width: 25px;
            border-radius: 5px;
            font-weight: 550;
            color: white;
          }
          .text {
            flex: 1;
            font-size: 17px;
            margin-left: 10px;
            // font-weight: 550;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            transition: all 0.3s linear;
            &:hover {
              color: #9a6df9;
            }
          }
        }
        .about-content {
          display: flex;
          color: #9ca9c3;
          margin-left: 35px;
          margin-top: 10px;
          cursor: pointer;
          font-size: 14px;
          .focus {
            padding: 0 15px;
          }
          div:hover {
            color: #9a6df9;
          }
        }
      }
    }
  }
}

.reflesh {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  height: 35px;
  width: 110px;
  border-radius: 20px;
  border: 1px solid #ccc;
  transition: all 0.2s linear;
  cursor: pointer;
  span {
    margin-left: 5px;
  }
  &:hover {
    color: #9a6df9;
    background-color: #d5c0ff;
  }
}

//领域模块
.experiencer-box {
  .experiencer-container {
    display: flex;
    justify-content: space-between;
    .experiencer-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 350px;
      width: 260px;
      border: 1px solid #ccc;
      border-radius: 5px;
      transition: all 0.5s linear;
      cursor: pointer;
      &:hover {
        transform: translateY(-3px);
        border-color: #9a6df9;
      }
      .user-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
        z-index: 1;
        .avatar-box {
          height: 85px;
          width: 85px;
          border-radius: 15px;
          overflow: hidden;
          border: 1px solid #ccc;
          transition: all 0.3s linear;

          .avatar {
            height: 100%;
            width: 100%;
            transition: all 0.3s linear;
            &:hover {
              scale: 1.1;
            }
          }
          &:hover {
            border-color: #9a6df9;
          }
        }

        .username {
          margin-top: 20px;
        }
        .about-user {
          display: flex;
          margin-top: 10px;
          font-size: 13px;
          color: #999;
          .fans {
            margin-right: 16px;
            &:hover {
              color: #9a6df9;
            }
          }
          .public-article {
            &:hover {
              color: #9a6df9;
            }
          }
        }
      }
      .private-filed {
        margin-top: 30px;
      }
      .attend-user {
        margin-top: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 550;
        height: 50px;
        width: 120px;
        color: #9a6df9;
        border-radius: 5px;
        border: 1px solid #d5c0ff;
        transition: all 0.5s linear;
        &:hover {
          background-color: #d5c0ff;
        }
      }
    }
  }
}

//热点讨论
// 1.飙升
.hot-discuss-fly {
  color: rgb(197, 0, 0);
  background-color: rgba(255, 0, 0, 0.265);
}
//2.提升
.hot-discuss-up {
  color: rgb(150, 240, 14);
  background-color: rgba(149, 244, 8, 0.202);
}
// 3.最新
.hot-discuss-new {
  color: rgb(102, 102, 236);
  background-color: rgba(10, 78, 250, 0.302);
}

.hot-discuss-box {
  margin-bottom: 25px;
  .hot-discuss-container {
    height: 250px;
    .hot-discuss-item {
      display: flex;
      height: 100%;
      .left-box {
        position: relative;
        flex: 5;
        background-color: pink;
        border-radius: 5px;
        overflow: hidden;
        .img-box {
          height: 100%;
          width: 100%;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .discuss-theme {
          position: absolute;
          top: 25%;
          left: 20px;
          color: white;
          .title {
            font-weight: 550;
            font-size: 20px;
          }
          .main-content {
            margin-top: 10px;
          }
        }
        .attain-user {
          position: absolute;
          bottom: 20px;
          left: 20px;
          .user-avatar {
            display: flex;
            align-items: center;
            height: 50px;

            img:nth-child(n + 1) {
              height: 45px;
              width: 45px;
              border-radius: 5px;
              margin-left: 10px;
              transition: all 0.5s linear;
              cursor: pointer;
              border: 1px solid #ccc;
              &:hover {
                border-color: #d8f68c;
              }
            }
            .attain-info {
              margin-left: 10px;
              font-size: 14px;
              color: white;
            }
          }
        }
      }
      .right-box {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 20px;
        flex: 6;
        .right-item {
          .relative-reply {
            display: flex;
            flex-direction: column;
            .reply-content {
              font-size: 18px;
              width: 100%;
              cursor: pointer;
              overflow: hidden; /*超出部分隐藏*/
              white-space: nowrap; /*禁止换行*/
              text-overflow: ellipsis; /*省略号*/
              transition: all 0.2s linear;
              &:hover {
                color: #9a6df9;
              }
            }
            .reply-num {
              cursor: pointer;
              color: #999;
              margin-top: 5px;
              font-size: 12px;
              &:hover {
                color: #9a6df9;
              }
            }
          }
        }
      }
    }
  }
  .hot-rank {
    margin-top: 30px;
    .rank-header {
      .title {
        display: flex;
        align-items: center;
        .icon {
          height: 35px;
          width: 35px;
        }
        span {
          margin-left: 10px;
          font-size: 18px;
          font-weight: 550;
        }
      }
    }
    .rank-type {
      display: flex;
      margin-top: 20px;
      border-bottom: 1px solid #ccc;
      padding-bottom: 20px;
      .theme {
        flex: 2;
      }
      .hot-value,
      .visit,
      .concern,
      .reply {
        flex: 1;
      }
    }
  }

  .hot-rank-item {
    display: flex;
    padding: 30px 0;
    border-bottom: 1px solid #ccc;
    .item-theme {
      display: flex;
      align-items: center;
      flex: 2;
      .state {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        border-radius: 5px;
        height: 25px;
        width: 35px;
        font-size: 12px;
        font-weight: 550;
      }
      .content {
        flex: 1;
        margin-left: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin-right: 25px;
        cursor: pointer;
        transition: all 0.2s linear;
        &:hover {
          color: #9a6df9;
        }
      }
    }

    .item-hot-value,
    .item-hot-visit,
    .item-hot-concern,
    .item-hot-reply {
      flex: 1;
    }

    .item-hot-value {
      .rate {
        font-size: 14px;
      }
      .evaluate {
        margin-top: 10px;
        .icon {
          height: 15px;
          width: 15px;
        }
      }
    }

    .item-hot-visit,
    .item-hot-concern,
    .item-hot-reply {
      .up-num,
      .concern,
      .reply {
        display: flex;
        align-items: center;
        .icon {
          height: 25px;
          width: 25px;
        }
        span {
          margin-left: 5px;
        }
      }
      .total-num {
        margin-top: 5px;
        font-size: 14px;
        color: #999;
      }
    }
  }
}
</style>
