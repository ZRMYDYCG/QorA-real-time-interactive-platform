<script setup>
import UserInfoItem from './components/userInfo-item/index.vue'

const user = {
  nickname: '可目十',
  bio: '好事大都多磨，好磨的大都多事。',
  avatar: 'https://pic2.zhimg.com/v2-c61ffaef9c8fffd0d87e1399236422e9_r.jpg'
}
</script>

<template>
  <h3 class="title">一小池勺的关注</h3>
  <div class="user-container">
    <user-info-item :user="user" width="30%">
      <template #btnContent>
        <el-icon>
          <ChatLineRound />
        </el-icon>
        <span class="btnContent">私信</span>
      </template>
    </user-info-item>
    <user-info-item :user="user" width="30%">
      <template #btnContent>
        <el-icon>
          <ChatLineRound />
        </el-icon>
        <span class="btnContent">私信</span>
      </template>
    </user-info-item>
    <user-info-item :user="user" width="30%">
      <template #btnContent>
        <el-icon>
          <ChatLineRound />
        </el-icon>
        <span class="btnContent">私信</span>
      </template>
    </user-info-item>
    <user-info-item :user="user" width="30%">
      <template #btnContent>
        <el-icon>
          <ChatLineRound />
        </el-icon>
        <span class="btnContent">私信</span>
      </template>
    </user-info-item>
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
