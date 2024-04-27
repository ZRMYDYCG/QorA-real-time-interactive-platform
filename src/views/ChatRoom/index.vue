<script setup>
import { onMounted, ref } from 'vue'
import ContactItem from './components/contact-item/index.vue'
import PersonItem from './components/person-item/index.vue'
import screenfull from 'screenfull'
import { useSocketStore } from '@/stores/modules/ChartRoom/index.js'

const socketStore = useSocketStore()

const fullscreenElement = () => {
  return document.fullscreenElement
}

const activeTab = ref(1)

onMounted(() => {
  const element = document.getElementById('container_main') //指定全屏区域元素
  document.getElementById('fullscreen_button').addEventListener('click', () => {
    if (screenfull.isEnabled) {
      element.style.background = '#ffffff'
      screenfull.request(element)
    }
  })
})

onMounted(() => {
  socketStore.chatInitView()
})
</script>

<template>
  <div class="chat-room" id="container_main">
    <div class="room-nav">
      <div class="user-img">
        <img src="https://pic.imgdb.cn/item/660e1fa89f345e8d03525df8.png" alt="" />
        <div class="toggle">
          <el-icon @click="activeTab = 1" :class="{ active: activeTab === 1 }" :size="20">
            <User />
          </el-icon>
          <el-icon @click="activeTab = 0" :class="{ active: activeTab === 0 }" :size="20">
            <ChatDotRound />
          </el-icon>
        </div>
      </div>
      <div class="settings">
        <div class="screen" id="fullscreen_button">
          <el-icon :size="20">
            <FullScreen />
          </el-icon>
        </div>
        <div class="black">
          <el-icon :size="20">
            <Failed />
          </el-icon>
        </div>
        <div class="set" @click="$router.push('/chatRoom/CharSetting')">
          <el-icon :size="20">
            <Setting />
          </el-icon>
        </div>
      </div>
    </div>
    <div class="room-left" v-if="activeTab === 1">
      <div class="header">
        <el-input suffix-icon="Search" placeholder="搜索"></el-input>
      </div>
      <div class="menu">
        <el-menu>
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <Ship color="#AEEE44" />
              </el-icon>
              <span>互相关注</span>
            </template>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon>
                <Star color="#DCEE44" />
              </el-icon>
              <span>粉丝列表</span>
            </template>
            <contact-item></contact-item>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon>
                <Operation color="#ccc" />
              </el-icon>
              <span>我的关注</span>
            </template>
            <contact-item></contact-item>
            <contact-item></contact-item>
            <contact-item></contact-item>
          </el-sub-menu>
          <el-menu-item-group title="自定义列表">
            <el-sub-menu index="4">
              <template #title>
                <span>背包客</span>
              </template>
              <contact-item></contact-item>
              <contact-item></contact-item>
              <contact-item></contact-item>
            </el-sub-menu>
          </el-menu-item-group>
        </el-menu>
      </div>
    </div>
    <div class="room-left" v-if="activeTab === 0">
      <div class="header">
        <el-input suffix-icon="Search" placeholder="搜索"></el-input>
      </div>
      <div class="list">
        <person-item></person-item>
        <person-item></person-item>
        <person-item></person-item>
        <person-item></person-item>
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
  transition: all 0.3s;

  .room-nav {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 100px;
    border-right: 1px solid #eeeeee;
    padding: 15px 0;

    .user-img {
      position: relative;
      width: 50px;
      height: 50px;

      // 用户上线标志
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 12px;
        height: 12px;
        background-color: #44ee7a;
        right: -5px;
        border-radius: 50%;
        border: 2px solid #fff;
      }

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }

      .toggle {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
        transition: all 0.3s;

        .el-icon {
          padding: 10px;
          transition: all 0.3s;
          cursor: pointer;

          &.active {
            background-color: #eaeaea;
            border-radius: 5px;
          }
        }
      }
    }

    .settings {
      .black {
        margin-bottom: 20px;
        margin-top: 20px;
      }
    }
  }

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
    width: 100%;
    height: 100%;
  }
}
</style>
