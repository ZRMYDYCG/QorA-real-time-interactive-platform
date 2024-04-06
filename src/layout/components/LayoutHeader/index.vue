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
      <themeSwitch></themeSwitch>
      <div class="userinfo__message">
        <div class="message--icon">
          <el-icon>
            <Notification />
          </el-icon>
          <span> 消息 </span>
        </div>
        <div class="message--icon">
          <el-icon>
            <Connection />
          </el-icon>
          <span> 私信 </span>
        </div>
      </div>
      <div class="userinfo__avatarPic">
        <el-dropdown>
          <img src="https://pic.imgdb.cn/item/660e1fa89f345e8d03525df8.png" alt="" />
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <router-link to="/userHome">个人主页</router-link>
              </el-dropdown-item>
              <el-dropdown-item>我的提问</el-dropdown-item>
              <el-dropdown-item>我的回答</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import themeSwitch from './theme-switch.vue'

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.layout-header {
  display: flex;
  height: 50px;
  width: calc(100vw - 160px);
  padding: 0 80px;
  align-items: center;
  justify-content: space-between;
  position: fixed;

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
      height: 50px;
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
