<template>
  <div class="layout-header">
    <div class="layout-header--logo">
      <img src="https://pic.imgdb.cn/item/660e1cb59f345e8d03405bbd.png" alt="" />
    </div>
    <div class="layout-header--menu">
      <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">社区</el-menu-item>
        <el-menu-item index="2">问答</el-menu-item>
        <el-menu-item index="3">发现</el-menu-item>
        <el-menu-item index="4">更多</el-menu-item>
      </el-menu>
    </div>
    <div class="layout-header--search">
      <el-input></el-input>
    </div>
    <div class="layout-header--userinfo">
      <div class="userinfo__message">
        <div class="message--icon">
          <el-icon>
            <Notification />
          </el-icon>
          <span> 消息 </span>
        </div>
        <div class="message--icon">
          <el-icon>
            <Notification />
          </el-icon>
          <span> 消息 </span>
        </div>
        <div class="message--icon">
          <el-icon>
            <Notification />
          </el-icon>
          <span> 消息 </span>
        </div>
      </div>
      <div class="userinfo__avatarPic">
        <img src="https://pic.imgdb.cn/item/660e1fa89f345e8d03525df8.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.layout-header {
  display: flex;
  width: calc(100vw - 160px);
  padding: 0 80px;
  align-items: center;
  justify-content: space-between;

  .layout-header--logo {
    width: 40px;
    height: 40px;
    margin-right: 20px;
    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .layout-header--menu {
    flex: 2;

    .el-menu {
      border-bottom: none;
    }
  }

  .layout-header--search {
    flex: 3;
    margin-right: 120px;
  }

  .layout-header--userinfo {
    display: flex;
    align-items: center;

    .userinfo__message {
      display: flex;
      margin-right: 20px;

      .message--icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 10px;

        span {
          font-size: 12px;
          font-weight: 100;
        }
      }
    }

    .userinfo__avatarPic {
      width: 35px;
      height: 35px;
      border-radius: 4px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
