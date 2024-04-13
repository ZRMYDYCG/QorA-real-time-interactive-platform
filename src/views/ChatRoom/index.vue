<script setup>
import ContactItem from './components/contact-item/index.vue'
</script>

<template>
  <div class="chat-room">
    <div class="room-left">
      <div class="header">
        <el-input placeholder="搜索好友列表"></el-input>
      </div>
      <div class="menu">
        <el-menu>
          <el-sub-menu index="1">
            <template #title>
              <span>特别关心</span>
            </template>
            <contact-item></contact-item>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <span>默认列表</span>
            </template>
            <contact-item></contact-item>
            <contact-item></contact-item>
            <contact-item></contact-item>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <span>电子设备</span>
            </template>
            <contact-item></contact-item>
            <contact-item></contact-item>
            <contact-item></contact-item>
          </el-sub-menu>
          <el-sub-menu index="4">
            <template #title>
              <span>旅游</span>
            </template>
            <contact-item></contact-item>
            <contact-item></contact-item>
            <contact-item></contact-item>
          </el-sub-menu>
        </el-menu>
      </div>
    </div>
    <div class="room-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.chat-room {
  display: flex;
  width: 50vw;
  height: 70vh;
  margin: 0 auto;
  min-width: 1000px;
  border: 1px solid #eee;

  .room-left {
    width: 400px;
    overflow-y: auto;
    border-right: 1px solid #eee;

    .header {
      padding: 10px;
    }

    .menu {
      .el-menu {
        --el-menu-hover-bg-color: transparent;
        --el-menu-bg-color: transparent;
        background-color: transparent;
        border-right: none;

        .el-sub-menu {
          background-color: transparent;

          &:hover {
            background-color: transparent;
          }
        }

        .el-menu-item {
          &:hover {
            background-color: #eaeaea;
          }
        }
      }
    }
  }

  .room-view {
    padding: 20px;
    width: 100%;
    overflow-y: auto;
  }
}
</style>
