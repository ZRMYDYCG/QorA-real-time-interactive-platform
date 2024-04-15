<template>
  <div class="panel">
    <h1
      class="title text-#B294F3 fw100 animate-bounce-alt animate-count-infinite animate-duration-1s"
    >
      Welcome To 体验官世界
    </h1>
    <el-tabs v-model="activeName" type="border-card" stretch>
      <el-tab-pane name="account">
        <template #label>
          <span class="icon">
            <el-icon><UserFilled /></el-icon>
            <span class="text">账号登录</span>
          </span>
        </template>
        <PanelAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="Email">
        <template #label>
          <span class="icon">
            <el-icon><Message /></el-icon>
            <span class="text">邮箱登录</span>
          </span>
        </template>
        <PanelEmail />
      </el-tab-pane>
    </el-tabs>
    <div class="control-account">
      <el-checkbox label="记住密码" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="loginAction">立即登录</el-button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import PanelAccount from './components/PanelAccount/index.vue'
import PanelEmail from './components/PanelEmail/index.vue'

// 默认激活 Tab
const activeName = ref('account')

const accountRef = ref()
const loginAction = () => {
  accountRef.value.loginAction()
}
</script>

<style scoped lang="scss">
.panel {
  width: 330px;
  margin-bottom: 150px;

  .title {
    text-align: center;
    margin-bottom: 15px;
    font-size: 15px;
    white-space: nowrap;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;

    .text {
      margin-left: 5px;
    }
  }

  .control-account {
    margin-top: 12px;
    display: flex;

    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
