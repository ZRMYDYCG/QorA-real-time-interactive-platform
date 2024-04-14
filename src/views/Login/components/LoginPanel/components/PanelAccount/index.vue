<template>
  <div class="account">
    <el-form label-width="60px">
      <el-form-item label="账号">
        <el-input v-model="account"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 用户登录
const account = ref('')
const password = ref('')
</script>

<style scoped lang="scss">
.verify-code {
  display: flex;

  .get-btn {
    margin-left: 8px;
  }
}
</style>
