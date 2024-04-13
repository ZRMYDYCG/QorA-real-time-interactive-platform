<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleTabClick = (tab, event) => {
  console.log(tab.props.name, event)
  router.push(`/findOut/${tab.props.name}`)
}

const defaultTabItem = ref('latest')
</script>

<template>
  <div class="find-out">
    <div class="find-out-banner">
      <div class="user-img">
        <img src="https://pic.imgdb.cn/item/660e1fa89f345e8d03525df8.png" alt="#" />
      </div>
      <div class="user-name">
        <h3>一小池勺</h3>
      </div>
      <div class="number">
        <span class="help">回答 {{ 2 }} 次</span>
        <span class="dot"> • </span>
        <span class="seek">提问 {{ 3 }} 次</span>
      </div>
      <hr class="line" />
      <div class="tab">
        <el-tabs v-model="defaultTabItem" @tab-click="handleTabClick">
          <el-tab-pane label="最新" name="latest"></el-tab-pane>
          <el-tab-pane label="推送" name="commend"></el-tab-pane>
          <el-tab-pane label="未解决" name="unresolved"></el-tab-pane>
          <el-tab-pane label="紧急问题" name="urgent"></el-tab-pane>
        </el-tabs>
        <div class="btn">
          <el-button>发起提问</el-button>
        </div>
      </div>
    </div>
    <div class="find-out-main">
      <router-view></router-view>
    </div>
    <el-backtop :right="50" :bottom="100" />
  </div>
</template>

<style scoped lang="scss">
.find-out {
  background: url(https://th.bing.com/th/id/R.7e57686b89419361ce0b5d6c5658c744?rik=Eh9qfhw%2bRUZEJA&riu=http%3a%2f%2fimg.yipic.cn%2fthumb%2f357c44cf%2f6ac27d55%2fb6f5075c%2f48241d3b%2fbig_357c44cf6ac27d55b6f5075c48241d3b.png%3fx-oss-process%3dimage%2fformat%2cwebp%2fsharpen%2c100&ehk=xXfDoME280n3hSeJBvDzHUQkWZ9efEYw0oSiTE90Ew0%3d&risl=&pid=ImgRaw&r=0);

  .find-out-banner {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .user-img {
      position: relative;
      width: 150px;
      height: 150px;

      // 用户上线标志
      &::after {
        content: '';
        position: absolute;
        bottom: 10px;
        width: 15px;
        height: 15px;
        background-color: #44ee7a;
        right: 18px;
        border-radius: 50%;
        border: 1px solid #fff;
      }

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    .user-name {
      margin-top: 30px;

      h3 {
        text-shadow: 1px 0 1px gray;
      }
    }

    .number {
      margin-top: 20px;
      font-size: 12px;

      .dot {
        margin: 0 10px;
      }
    }

    .line {
      width: 50vw;
      height: 1px;
      background: linear-gradient(
        to left,
        rgb(173, 169, 150),
        rgb(242, 242, 242),
        rgb(219, 219, 219),
        rgb(234, 234, 234)
      );
      margin-top: 20px;
    }

    .tab {
      display: flex;
      align-items: center;

      .el-tabs {
        margin: 0 auto;
        width: 600px;

        :deep(.el-tabs__nav-wrap::after) {
          display: none;
        }

        :deep(.el-tabs__nav-scroll) {
          display: flex;
          justify-content: center;
        }
      }

      .btn {
        margin-left: 30px;

        .el-button {
          color: #44ee7a;
        }
      }
    }
  }

  .find-out-main {
    display: flex;
    justify-content: center;
  }
}
</style>
