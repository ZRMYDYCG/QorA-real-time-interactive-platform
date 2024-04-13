<template>
  <div class="userHome">
    <div class="header--userInfo">
      <div class="userInfo--pic">
        <img src="https://pic.imgdb.cn/item/660e1fa89f345e8d03525df8.png" alt="" />
      </div>
      <div class="userInfo--other">
        <div class="name">
          <span>一小池勺</span>
          <el-icon @click="$router.push('/editUserInfo')" style="cursor: pointer">
            <Edit />
          </el-icon>
        </div>
        <div class="grade">
          <span>鉴赏等级</span>
          <span class="num">Lv.8</span>
        </div>
        <div class="following">
          <div class="concern" @click="$router.push('/socializingDetail')">
            <span>关注</span>
            <span> 9</span>
          </div>
          <div class="fan" @click="$router.push('/socializingDetail')">
            <span>粉丝</span>
            <span> 10</span>
          </div>
        </div>
      </div>
    </div>
    <div class="nav--options">
      <YsTabs
        class="ys-tabs"
        :tabs="tabConfig"
        :activeIndex="activeTabIndex"
        :isVertical="isVertical"
      >
        <div class="tab-content">
          <router-view></router-view>
        </div>
      </YsTabs>
    </div>
  </div>
</template>

<script setup>
import YsTabs from '@/components/base/ys-tabs/src/ys-tabs.vue'

const tabConfig = [
  { name: '主页', path: '/userHome/index' },
  { name: '动态', path: '/userHome/dynamic' },
  { name: '回答', path: '/userHome/response' },
  { name: '求助', path: '/userHome/help' },
  { name: '收藏', path: '/userHome/collection' },
  { name: '专栏', path: '/userHome/column' }
]

const activeTabIndex = 0
const isVertical = false
</script>

<style lang="scss">
.userHome {
  width: 60vw;
  margin: 0 auto;
  background: url('../../../public/user-bg.svg');

  .header--userInfo {
    display: flex;

    .userInfo--pic {
      width: 150px;
      height: 150px;
      overflow: hidden;
      border-radius: 50%;
      margin-right: 15px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .userInfo--other {
      margin-top: 20px;

      .name {
        span {
          font-size: 25px;
          font-weight: 700;
          margin-right: 15px;
        }
      }

      .grade {
        display: flex;
        align-items: center;
        margin: 18px 0;

        span {
          margin-right: 10px;
          font-weight: 100;
          font-size: 12px;
        }

        .num {
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
      }

      .following {
        display: flex;
        font-weight: 700;

        .concern {
          cursor: pointer;
          margin-right: 20px;
        }

        .fan {
          cursor: pointer;
        }
      }
    }
  }

  .nav--options {
    margin-top: 30px;
  }
}
</style>
