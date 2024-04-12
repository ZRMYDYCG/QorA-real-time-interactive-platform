<script setup>
import YsScroll from '@/components/base/ys-scroll/src/ys-scroll.vue'
import { More } from '@element-plus/icons-vue'
import { useExchangeCommunityStore } from '@/stores/modules/ExchangeCommunity/index.js'

const exchangeCommunityStore = useExchangeCommunityStore()
const openDrawer = () => {
  exchangeCommunityStore.openDrawer()
}

import { ref, onMounted } from 'vue'

defineProps({
  dataArray: {
    type: Array,
    default: () => []
  }
})

const loading = ref(true)

onMounted(() => {
  setInterval(() => {
    loading.value = false
  }, 1000)
})
</script>

<template>
  <el-skeleton
    style="width: 100%"
    direction="vertical"
    alignment="flex-start"
    animated
    :loading="loading"
    class="content-skeleton"
  >
    <template #template>
      <div class="avatar" style="display: flex; align-items: center">
        <el-skeleton-item
          variant="circle"
          style="margin-bottom: 12px; width: 48px; height: 48px; background-color: #aaa"
        />
        <div
          style="
            display: flex;
            flex-direction: column;
            position: relative;
            bottom: 6px;
            margin-left: 8px;
          "
        >
          <el-skeleton-item variant="text" style="width: 80px; margin-bottom: 8px" />
          <el-skeleton-item variant="text" style="width: 50px" />
        </div>
      </div>
      <el-skeleton-item variant="rect" style="width: 100%; height: 240px; background-color: #aaa" />
      <div style="padding: 12px 14px 0 0">
        <el-skeleton-item variant="h1" style="width: 50%" />
        <el-skeleton-item variant="text" style="margin-top: 8px; margin-right: 16px" />
      </div>
    </template>
    <template #default>
      <div class="exchange-item">
        <div class="item-header">
          <div class="header-userInfo">
            <el-popover width="300" placement="bottom" trigger="hover">
              <template #default>
                <div class="info-popup">
                  <img
                    class="popup--img"
                    src="https://pic3.zhimg.com/v2-220c2500a5c33e693f946c4e40dac00a_r.jpg"
                    alt=""
                  />
                  <p class="popup--name">可目十</p>
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
                  class="userInfo--avatar"
                  src="https://pic3.zhimg.com/v2-220c2500a5c33e693f946c4e40dac00a_r.jpg"
                  alt=""
                />
              </template>
            </el-popover>
            <div class="userInfo--detail">
              <div class="detail--a">
                <span class="name">可目十</span>
                <span class="grade">LV.8</span>
              </div>
              <div class="detail--b">
                <span class="address">江西 共青城</span>
                <span class="time">2024-4-7</span>
              </div>
            </div>
          </div>
          <div class="header-btn">
            <el-button @click="openDrawer">私信</el-button>
          </div>
        </div>
        <div class="item-content">
          “阳春布德泽，万物生光辉”，希望之光照亮了生命。胸怀希望，才能走出“飘如陌上尘”“天地一沙鸥”的慨叹，“今朝试卷孤篷看，依旧青山绿树多”。拥有希望，你就能打开更多的窗户，“雁引愁心去，山衔好月来。”无论面对怎样的艰难，我们“依然一笑作春温”
        </div>
        <div class="image-carousel">
          <ys-scroll :datas="dataArray" direction="left" circle>
            <template #default="slotProps">
              <img v-for="item in slotProps.datas" :src="item.url" alt="" :key="item" />
            </template>
          </ys-scroll>
        </div>
        <div class="item-footer">
          <el-button>Click To Look It</el-button>
        </div>
      </div>
    </template>
  </el-skeleton>
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

.exchange-item {
  width: 100%;

  .item-header {
    display: flex;
    justify-content: space-between;
    padding: 20px;

    .header-userInfo {
      display: flex;

      .userInfo--avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-right: 20px;
        transition: all 0.3s;
        cursor: pointer;

        &:hover {
          scale: (1.1);
        }
      }

      .userInfo--detail {
        margin-top: 10px;

        .detail--a {
          display: flex;
          align-items: center;

          .name {
            font-size: 20px;
            font-weight: 600;
            margin-right: 10px;
          }

          .grade {
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

        .detail--b {
          margin-top: 15px;
          font-weight: 600;
          font-size: 13px;
          color: #ccc;

          .address {
            margin-right: 20px;
          }

          .time {
          }
        }
      }
    }

    .header-btn {
    }
  }

  .image-carousel {
    overflow: hidden;
    height: 180px;

    img {
      width: 280px;
      height: 180px;
      margin-right: 10px;
      cursor: pointer;
      border-radius: 10px;
      border: 1px solid var(--ys-bar-border-color);
    }
  }

  .item-content {
    padding: 30px;
  }

  .item-footer {
    margin-top: 20px;

    .el-button {
      border: none;
      color: #e0bbf4;
      --el-button-hover-bg-color: transparent;

      &:hover {
        color: #ab4ddf;
      }
    }
  }
}
</style>
