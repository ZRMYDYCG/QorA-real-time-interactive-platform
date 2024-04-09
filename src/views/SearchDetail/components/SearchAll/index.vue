<script setup>
import { More } from '@element-plus/icons-vue'

defineProps({
  itemList: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div class="concern">
    <div class="content">
      <div class="content-item" v-for="item in itemList" :key="item.id">
        <div class="item_hd">
          <div class="hd_user">
            <el-popover placement="bottom" width="300" trigger="hover">
              <template #default>
                <div class="info-popup">
                  <img
                    class="popup--img"
                    src="https://pic.imgdb.cn/item/65d03adf9f345e8d03e6f352.jpg"
                    alt=""
                  />
                  <p class="popup--name">一小池勺</p>
                  <div class="popup--grade">
                    <span class="title">体验官等级</span><span class="num">LV.8</span>
                  </div>
                  <div class="info-social">
                    <div class="follow">
                      <span>关注</span>
                      <span>{{ 933 }}</span>
                    </div>
                    <div class="fans">
                      <span>粉丝</span>
                      <span>{{ 559.7 }}万</span>
                    </div>
                  </div>
                  <div class="btn">
                    <el-button round>关注</el-button>
                    <el-button round>留言</el-button>
                    <el-dropdown>
                      <el-button round>
                        <el-icon>
                          <More />
                        </el-icon>
                      </el-button>
                      <template #dropdown>
                        <el-dropdown-menu>
                          <el-dropdown-item>拉黑该用户</el-dropdown-item>
                          <el-dropdown-item>举报</el-dropdown-item>
                        </el-dropdown-menu>
                      </template>
                    </el-dropdown>
                  </div>
                </div>
              </template>
              <template #reference>
                <img
                  class="user_pic"
                  src="https://pic.imgdb.cn/item/65d03adf9f345e8d03e6f352.jpg"
                  alt=""
                />
              </template>
            </el-popover>
            <div class="info">
              <div class="a">
                <span class="user_name">{{ item.userName }}</span>
                <span class="user_level">LV.8</span>
              </div>
              <p>学会生活，享受当下。</p>
            </div>
          </div>
          <h2 class="title">{{ item.title }}</h2>
          <div class="desc">
            {{ item.desc }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.el-popover {
  .info-popup {
    display: flex;
    flex-direction: column;
    align-items: center;

    .popup--img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    .popup--name {
      font-weight: 600;
      padding: 10px 0;
    }

    .popup--grade {
      display: flex;
      align-items: center;

      .title {
        margin-right: 15px;
      }

      .num {
        display: block;
        font-size: 12px;
        width: 30px;
        height: 14px;
        text-align: center;
        background-color: #cccccc;
        border-radius: 7px;
        color: #fff;
      }
    }

    .info-social {
      display: flex;
      padding: 10px 0;

      .follow {
        margin-right: 15px;

        span {
          padding: 0 5px;
        }
      }

      .fans {
        span {
          padding: 0 5px;
        }
      }
    }

    .btn {
      .el-button {
        margin: 0 10px;
      }
    }
  }
}

.concern {
  display: flex;
  flex-wrap: wrap;

  .content {
    padding: 20px;
    width: 100%;

    .content-item {
      border-bottom: 1px solid #eee;
      padding: 10px 0;

      .item_hd {
        .hd_user {
          display: flex;

          .user_pic {
            width: 60px;
            height: 60px;
            border-radius: 5px;
            margin-right: 10px;
          }

          .info {
            display: flex;
            flex-direction: column;

            .a {
              display: flex;
            }

            p {
              font-size: 12px;
              font-weight: 100;
              margin-top: 10px;
            }
          }

          .user_name {
            font-size: 16px;
            font-weight: 600;
            margin-top: 10px;
          }

          .user_level {
            margin-left: 10px;
            margin-top: 10px;
            display: block;
            font-size: 12px;
            font-weight: 100;
            color: #dcc19c;
            width: 30px;
            height: 18px;
            background-color: #f5f8f9;
            text-align: center;
            line-height: 18px;
            border-radius: 9px;
          }

          .user_desc {
            font-weight: 100;
            font-size: 13px;
          }
        }

        .title {
          font-size: 16px;
          font-weight: 600;
          line-height: 40px;
          cursor: pointer;
        }

        .desc {
          display: block;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 3; /* 显示行数 */
          line-height: 26px;
          font-size: 15px;
        }
      }
    }
  }
}
</style>
