<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { fetchPersonDetail } from '@/service/UserHome/index.js'
const route = useRoute()

// 渲染用户、粉丝列表
const userList = ref([])

onMounted(async () => {
  console.log(route.query)
  const res = await fetchPersonDetail(route.query.user_id, route.query.type)
  userList.value = res.data.data
  console.log('获取列表:', res)
})
</script>

<template>
  <h3 class="title">{{ route.query.type === 'fan' ? '粉丝列表' : '关注列表' }}</h3>
  <div class="user-container">
    <template v-for="(item, index) in userList" :key="index">
      <div class="user-card">
        <div class="user-avatar">
          <el-image class="avatar-image" :src="item.user_pic" :fit="fit"></el-image>
        </div>
        <div class="user-info">
          <div class="nickname">{{ item.user_name }}</div>
          <div class="bio">{{ item.user_introduce }}</div>
        </div>
        <el-button class="action-button" round plain>进入主页</el-button>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.title {
  margin-bottom: 30px;
}

.btnContent {
  margin-left: 10px;
}

.user-card {
  display: flex;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 10px;
}

.user-avatar {
  margin-right: 10px;
  flex-shrink: 0; /* 防止头像压缩 */
  width: 60px;
  height: 60px;
}

.avatar-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;
}

.user-info {
  flex: 1;
  margin-right: 20px;
}

.nickname {
  font-size: 16px;
  color: #303133;
  margin-bottom: 5px;
}

.bio {
  font-size: 14px;
  color: #606266;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.action-button {
  padding: 10px 15px;
  margin-left: auto; /* 按钮靠右 */
}
</style>
