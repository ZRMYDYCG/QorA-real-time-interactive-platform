<template>
  <div class="phone">
    <el-form label-width="60px">
      <el-form-item label="邮箱">
        <el-input />
      </el-form-item>
      <el-form-item label="验证码">
        <div class="verify-code">
          <el-input />
          <el-button class="get-btn" type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.verify-code {
  display: flex;

  .get-btn {
    margin-left: 8px;
  }
}
</style>
