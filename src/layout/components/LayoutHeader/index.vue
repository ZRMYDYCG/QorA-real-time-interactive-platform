<template>
  <el-affix>
    <div class="layout-header">
      <div class="layout-header--menu">
        <el-menu
          :ellipsis="false"
          :default-active="activeIndex"
          mode="horizontal"
          @select="handleSelect"
          router
        >
          <el-menu-item index="/exchangeCommunity">体验官社区</el-menu-item>
          <el-menu-item index="/findOut">体验问答</el-menu-item>
          <el-menu-item index="/seek">发现</el-menu-item>
          <el-menu-item index="/chatRoom">聊天室</el-menu-item>
        </el-menu>
      </div>
      <div class="layout-header--logo">
        <img src="https://pic.imgdb.cn/item/661144af68eb93571340264d.png" alt="" />
      </div>
      <div class="layout-header--userinfo">
        <div class="layout-header--search">
          <el-button class="mr-5" @click="$router.back()">
            <el-icon><ArrowLeftBold /></el-icon>
          </el-button>
          <el-popover placement="bottom" :width="370">
            <template #default>
              <el-button type="text" @click="clearSearchHistory"
                ><el-icon style="margin-right: 10px"><Delete /></el-icon> 清空历史</el-button
              >
              <div style="margin-top: 10px padding: 0 15px">
                <el-tag
                  v-for="(item, index) in searchHistory"
                  :key="index"
                  class="search-history-item mr-2 mb-1"
                  @click="$router.push(`/searchDetail?keyword?=${item}`)"
                >
                  {{ item }}
                </el-tag>
              </div>
            </template>
            <template #reference>
              <el-input
                prefix-icon="Search"
                @keydown.enter="searchAction(searchQuery)"
                placeholder="快来输入你要搜索的内容吧"
                v-model="searchQuery"
              ></el-input>
            </template>
          </el-popover>
        </div>
        <themeSwitch></themeSwitch>
        <div class="userinfo__message">
          <div class="message--icon">
            <el-icon>
              <Notification />
            </el-icon>
            <span> 消息 </span>
          </div>
          <el-popover placement="bottom" title="我的私信" :width="400" trigger="click">
            <template #reference>
              <div class="message--icon">
                <el-icon>
                  <Connection />
                </el-icon>
                <span style="cursor: pointer"> 私信 </span>
              </div>
            </template>
            <template #default>
              <div class="message-main">
                <template v-for="(item, index) in socketStore.discord_data" :key="index">
                  <PersonItem :itemData="item"></PersonItem>
                </template>
              </div>
              <div class="message-footer">
                <div class="footer-right" @click="$router.push('/chatRoom')">查看全部私信</div>
              </div>
            </template>
          </el-popover>
        </div>
        <div class="userinfo__avatarPic">
          <el-dropdown>
            <!-- <img :src="loginStore?.userInfo.value?.picture_address" alt="" /> -->
            <el-icon size="20" style="margin-top: 5px"><Avatar /></el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="navigateToUserHome">个人主页 </el-dropdown-item>
                <el-dropdown-item>我的提问</el-dropdown-item>
                <el-dropdown-item>我的回答</el-dropdown-item>
                <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </el-affix>
  <div
    v-if="!$route.path.includes('/findOut') && !$route.path.includes('/chatRoom')"
    class="layout-header--search-hid"
  >
    <el-input
      prefix-icon="Search"
      placeholder="全站搜索"
      style="padding: 30px 0 20px 30px"
      @input="handleInputHidden"
      @focus="handleInputFocus"
    ></el-input>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import themeSwitch from './theme-switch.vue'
// import messageItem from './message-item.vue'
import { useLoginStore } from '@/stores/modules/Login/index.js'
// import { loginOutApi } from '@/service/Login/index.js'
import { getLocalStorage, setLocalStorage, removeLocalStorage } from '@/utils/index.js'
import PersonItem from '@/views/ChatRoom/components/person-item/index.vue'

import { useSocketStore } from '@/stores/modules/ChartRoom/index.js'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

const socketStore = useSocketStore()

const loginStore = useLoginStore()

const router = useRouter()

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}

const inputWidth = ref('40vw')
const handleInputHidden = () => {
  console.log('0')
}

const handleInputFocus = () => {
  inputWidth.value = '58vw'
}

const searchQuery = ref('')
const searchAction = () => {
  if (searchQuery.value.length === 0) {
    ElMessage.warning('搜索内容不能为空')
    return
  }
  console.log(searchQuery.value.trim())
  router.push({
    path: '/searchDetail',
    query: { keyword: searchQuery.value }
  })
  addSearchToHistory(searchQuery.value)
}

// 下线
const loginOut = async () => {
  removeLocalStorage('token')
  await router.push('/login')
}

// 跳转到个人主页
const navigateToUserHome = async () => {
  try {
    const userInfo = await getLocalStorage('userInfo')
    const userId = userInfo.value.user_id
    router.push(`/userHome/index?user_id=${userId}`)
  } catch (error) {
    console.error(error)
  }
}

// 历史记录管理
const searchHistory = ref([])

// 定义一个方法来从localStorage获取历史记录
const loadSearchHistory = () => {
  searchHistory.value = getLocalStorage('searchHistory') || []
}

// 组件挂载时从localStorage加载历史记录
onMounted(loadSearchHistory)

// 添加搜索记录到历史
const addSearchToHistory = (searchTerm) => {
  if (!searchHistory.value.includes(searchTerm)) {
    searchHistory.value.unshift(searchTerm)
    setLocalStorage('searchHistory', searchHistory.value)
  }
}

// 清空搜索历史
const clearSearchHistory = () => {
  searchHistory.value = []
  removeLocalStorage('searchHistory')
}
</script>

<style lang="scss" scoped>
.layout-header {
  white-space: nowrap;
  display: flex;
  height: auto;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  background-color: var(--layout-header-bg-color);
  border-bottom: 1px solid var(--ys-bar-bg-color);

  .layout-header--logo {
    width: 100px;
    margin-right: 20px;
    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .layout-header--menu {
    .el-menu {
      border-bottom: none;
      height: 50px;

      .el-menu-item {
        background-color: transparent;
      }
    }
  }

  .layout-header--search {
    margin-right: 120px;

    .el-input {
      width: 350px;
    }
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

.layout-header--search-hid {
  display: none;

  .el-input {
    transition: all 0.3s;
    width: v-bind(inputWidth);
  }
}

@media screen and (max-width: 867px) {
  .layout-header--menu {
    display: none;
  }
}

@media screen and (max-width: 720px) {
  .layout-header {
    padding: 30px 0;
  }
  .layout-header--search {
    display: none;
  }
  .layout-header--search-hid {
    display: block;
  }
}
</style>

<style>
.el-popover__title {
  text-align: center;
  font-size: 20px;
  font-weight: 100;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
}

.message-main {
  height: 400px;
  overflow: auto;
}

.message-footer {
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #eee;
  padding-top: 12px;
  color: #ccc;
  cursor: pointer;
}
</style>
