<script setup></script>

<template>
  <el-card>
    <template #header>
      <div class="header--title">运动耳机的存在，确实可以缓解在运动时的疲劳，亲测有效！！！</div>
    </template>
    <el-tag>讨论人数 15</el-tag>
    <el-tag>参与讨论</el-tag>
  </el-card>
</template>

<style scoped lang="scss">
.el-card {
  cursor: pointer;

  :deep(.el-card__header) {
    font-weight: 600 !important;
  }

  .el-tag {
    margin-right: 15px;
  }
}
</style>
