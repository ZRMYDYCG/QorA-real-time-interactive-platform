<script setup>
import { ref } from 'vue'

const phoneImgDate = ref([
  {
    url: 'https://ts1.cn.mm.bing.net/th/id/R-C.603d67ddb3a001fd901e8601596e5b1a?rik=VzQ9nU0DqF9hWQ&riu=http%3a%2f%2fimg1.mydrivers.com%2fimg%2f20200324%2ffaa4430588f9440893058f8afddc9bb7.jpg&ehk=6tjp1wUgdDA84Ed6TjaLETH%2bCVgJbmFytHaq0rjSMWY%3d&risl=1&pid=ImgRaw&r=0'
  },
  {
    url: 'https://dsfs.oppo.com/archives/201806/201806050706115b1679a702ee6.jpg'
  },
  {
    url: 'https://img.zcool.cn/community/0198d85c1366bfa80121ab5d098ae2.jpg@3000w_1l_0o_100sh.jpg'
  },
  {
    url: 'https://gw.alicdn.com/imgextra/i2/3018717955/TB2ctGuvbZnBKNjSZFGXXbt3FXa_!!3018717955-0-daren.jpg'
  },
  {
    url: 'https://ts1.cn.mm.bing.net/th/id/R-C.4bd943e096f11b067421991d500289ed?rik=pRI%2fAl5kzSAYpA&riu=http%3a%2f%2fsinastorage.com%2fstorage.miaosha.sina.com.cn%2fproducts%2f201710%2fb54290d58c21d5c89e75460dfbcfcbfa.jpeg&ehk=IjkmUKRmubFc2SwVK3cUT%2f%2f%2fo5Bu1pnT6cn16PXyiyw%3d&risl=&pid=ImgRaw&r=0'
  },
  {
    url: 'https://designjiaoshi.com/wp-content/uploads/2021/04/08111435452.jpg'
  }
])
</script>

<template>
  <link rel="stylesheet" href="//at.alicdn.com/t/c/font_4486833_qxn7d8m5f.css" />
  <div class="common-box">
    <el-card class="card-container" header="我是头部" shadow="hover" style="width: 100%">
      <template #header>
        <div class="card-header">
          <span>专栏精选</span>
        </div>
      </template>
      <div class="item-container">
        <div class="common-items" v-for="(item, index) in phoneImgDate" :key="index">
          <div class="img-box">
            <img :src="item.url" />
            <div class="mask"></div>
          </div>
          <div class="title">I live to be the ruler of life, not a slave.</div>
          <!-- <div class="detail">
            <p>
              为重归5G后最为轰动的产品，加入了卫星通信，超强的信号和鸿蒙生态，以及极为硬核玻璃，手机信号基本是顶部，产品的情绪价值拉满
            </p>
          </div> -->
          <div class="user-info">
            <div class="about-user">
              <div class="user-avatar">
                <img
                  src="https://p1.music.126.net/VmHHJYe39AfRyTm0PkaZ9Q==/109951168444523856.jpg"
                  alt=""
                />
              </div>
              <div class="username">猪是的念来过倒</div>
            </div>
            <div class="enter-immediate">立即进入</div>
          </div>
          <div class="about-common">
            <div class="action">
              <div class="views">
                <i class="iconfont icon-xiaoyanjing"></i>
                <span class="views-num">120</span>
              </div>
              <div class="reply">
                <i class="iconfont icon-shoucang"></i>
                <span class="reply-num">22</span>
              </div>
            </div>
            <div class="public-date">2024年12月11日</div>
          </div>
        </div>
      </div>
    </el-card>
  </div>

  <div class="cate-box">
    <el-card style="width: 100%" shadow="hover">
      <template #header>
        <div class="card-header">
          <span>热门专栏</span>
        </div>
      </template>
      <div class="same-theme-container">
        <div class="same-theme-item" v-for="item in 5">
          <div class="left-img">
            <img
              src="https://img.zcool.cn/community/01068e5bbb346da8012099c8546eb7.jpg@3000w_1l_0o_100sh.jpg"
              alt=""
            />
          </div>
          <div class="right-content">
            <div class="content">
              <span class="title">I live to be the ruler of life, not a slave.</span>
              <!-- <span class="intro"
                >一加12手机是目前跑分最强的安卓手机，没有之一，而且机身手感优秀，屏幕也是目前夜间使用最为舒适的，支持杜比视界，以及雨水触控，除了这两点外，一加使用OPPO专用的ColorOS定制版，几乎实现了无广告的存在（通知全部关闭），操作上也很舒适，同时也是少数持续保留三段式开关的手机，影像也有哈苏色彩支持，算法介入表现比上代曾强很多，虽然不算拔尖，但是贵在自然。</span
              > -->
            </div>
            <div class="creator">
              <el-popover
                :width="300"
                popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
              >
                <template #reference>
                  <div class="username">创建者：猪是的念来过倒</div>
                </template>

                <template #default>
                  <div class="user-detail-info">
                    <el-avatar
                      :size="60"
                      src="https://p1.music.126.net/pIfI-2aIwit-IGWErO7_AA==/109951169445144032.jpg"
                      style="margin-bottom: 8px"
                    />
                    <div class="user-info">
                      <div class="user-private">
                        <span class="username">猪是的念来过倒</span>
                        <div class="level">
                          <div class="name">体验官等级</div>
                          <el-tag type="warning" round>LV 8</el-tag>
                        </div>
                      </div>
                      <div class="about-user">
                        <span class="focus">关注 1.2w</span>
                        <span class="fans">粉丝 2222</span>
                      </div>
                      <div class="action">
                        <div class="to-focus">关注</div>
                        <div class="leave-word">留言</div>
                        <div class="enter-user-home">进入首页</div>
                      </div>
                    </div>
                  </div>
                </template>
              </el-popover>
              <div class="views">
                <i class="iconfont icon-xiaoyanjing"></i>
                <span class="views-num">120</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style scoped lang="scss">
.user-detail-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .user-private {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      .username {
        font-weight: 550;
        font-size: 18px;
      }

      .level {
        display: flex;
        margin-top: 10px;

        .name {
          font-size: 16px;
          margin-right: 10px;
        }
      }
    }

    .about-user {
      font-size: 15px;
      margin-top: 10px;
      color: #999;

      .focus {
      }

      .fans {
        margin-left: 20px;
      }
    }

    .action {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-top: 10px;

      .to-focus,
      .leave-word,
      .enter-user-home {
        padding: 5px 15px;
        border-radius: 30px;
        border: 1px solid #ccc;
      }
    }
  }
}

.card-header {
  font-size: 20px;
  font-weight: 550;
}

.common-box {
  .item-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .common-items {
      width: 31.5%;
      // width: 300px;
      border-radius: 5px;
      overflow: hidden;
      height: 430px;
      border: 1px solid #ccc;
      transition: all 0.3s linear;
      cursor: pointer;
      margin-bottom: 20px;

      &:hover {
        border-color: #9a6df9;
        transform: translateY(-3px);
      }

      .img-box {
        position: relative;
        overflow: hidden;
        border-radius: 5px;
        height: 57%;
        width: 100%;

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          border-radius: 5px;
          transition: all 0.3s ease;

          &:hover {
            transform: scale(1.1);
          }
        }

        .mask {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          // background-color: pink;
          transition: all 0.5s linear;
          background-color: rgba(0, 0, 0, 0.4);

          &:hover {
            background-color: rgba(0, 0, 0, 0);
          }
        }
      }

      .title {
        margin: 10px 15px;
        font-weight: 550;
        font-size: 20px;
      }

      .detail {
        margin: 0 15px;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 4;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        transition: all 0.3s linear;

        &:hover {
          color: #9a6df9;
        }
      }

      .user-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 20px 20px 0;

        .about-user {
          display: flex;
          align-items: center;

          .user-avatar {
            height: 35px;
            width: 35px;
            min-width: 15px;
            min-height: 15px;
            border-radius: 50%;
            overflow: hidden;

            img {
              width: 100%;
              height: 100%;
            }
          }

          .username {
            margin-left: 5px;
            font-size: 14px;
            transition: all 0.3s linear;

            &:hover {
              color: #9a6df9;
            }
          }
        }

        .enter-immediate {
          font-size: 14px;
          padding: 10px 15px;
          border-radius: 5px;
          border: 1px solid #ccc;
          color: #9a6df9;
          transition: all 0.3s linear;

          &:hover {
            background-color: #996df969;
            color: white;
          }
        }
      }

      .about-common {
        display: flex;
        margin: 23px 20px 10px 20px;
        align-items: center;
        justify-content: space-between;

        .action {
          display: flex;
          align-items: center;

          .views {
            transition: all 0.3s linear;
            font-size: 14px;

            .iconfont {
              margin-right: 7px;
              font-size: 14px;
              color: #999;
            }

            &:hover {
              color: #9a6df9;
            }
          }

          .reply {
            margin-left: 15px;
            font-size: 15px;
            transition: all 0.3s linear;

            .iconfont {
              margin-right: 7px;
              font-size: 16px;
              color: #999;
            }

            &:hover {
              color: #9a6df9;
            }
          }
        }

        .public-date {
          font-size: 14px;
        }
      }
    }
  }
}

.cate-box {
  margin-top: 30px;

  .same-theme-container {
    .same-theme-item {
      margin-left: 20px;
      display: flex;
      margin-bottom: 40px;
      padding-bottom: 30px;
      border-bottom: 1px solid #ccc;

      .left-img {
        height: 100px;
        width: 100px;
        border-radius: 5px;
        overflow: hidden;

        img {
          height: 100%;
          width: 100%;
        }
      }

      .right-content {
        margin-left: 20px;
        margin-top: 15px;
        width: 80%;
        cursor: pointer;

        .content {
          margin-bottom: 20px;

          .title {
            font-size: 18px;
            font-weight: 550;
            transition: all 0.3s linear;
            margin-bottom: 15px;
          }

          &:hover {
            color: #9a6df9;
          }
        }

        .creator {
          display: flex;

          .username {
            cursor: pointer;
            font-size: 15px;
            color: #999;
            transition: all 0.3s linear;

            &:hover {
              color: #9a6df9;
            }
          }

          .views {
            margin-left: 30px;
            cursor: pointer;
            color: #999;
            transition: all 0.3s linear;

            .iconfont {
              padding-right: 10px;
            }

            &:hover {
              color: #9a6df9;
            }
          }
        }
      }
    }
  }
}
</style>
