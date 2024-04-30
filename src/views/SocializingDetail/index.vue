<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import UserInfoItem from './components/userInfo-item/index.vue'
import { fetchPersonDetail } from '@/service/UserHome/index.js'

const route = useRoute()

// 渲染用户、粉丝列表
const userList = ref([
  {
    nickname: '可目十',
    bio: '好事大都多磨，好磨的大都多事。',
    avatar: 'https://pic2.zhimg.com/v2-c61ffaef9c8fffd0d87e1399236422e9_r.jpg'
  },
  {
    nickname: '可目',
    bio: '好事大都多磨，好磨的大都多事。',
    avatar: 'https://pic2.zhimg.com/v2-c61ffaef9c8fffd0d87e1399236422e9_r.jpg'
  },
  {
    nickname: '可',
    bio: '好事大都多磨，好磨的大都多事。',
    avatar: 'https://pic2.zhimg.com/v2-c61ffaef9c8fffd0d87e1399236422e9_r.jpg'
  },
  {
    nickname: '目十',
    bio: '好事大都多磨，好磨的大都多事。',
    avatar: 'https://pic2.zhimg.com/v2-c61ffaef9c8fffd0d87e1399236422e9_r.jpg'
  }
])

onMounted(async () => {
  console.log(route.query)
  const res = await fetchPersonDetail(route.query.user_id, route.query.type)
  userList.value = res.data
  console.log(res)
})
</script>

<template>
  <h3 class="title">一小池勺的关注</h3>
  <div class="user-container">
    <template v-for="item in userList" :key="item">
      <user-info-item :user="item" width="30%">
        <template #btnContent>
          <el-icon>
            <ChatLineRound />
          </el-icon>
          <span class="btnContent">进入主页</span>
        </template>
      </user-info-item>
    </template>
  </div>
</template>

<style scoped lang="scss">
.user-container {
  display: flex;
  flex-wrap: wrap;
}

.title {
  margin-bottom: 30px;
}

.btnContent {
  margin-left: 10px;
}
</style>
