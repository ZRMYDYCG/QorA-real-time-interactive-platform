<script setup>
defineProps({
  tagInfo: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <el-card>
    <!--  这里就是传入一个标签  -->
    <div class="header">
      <el-tag>{{ tagInfo.tagName }}</el-tag>
    </div>
    <!--    <div class="main">-->
    <!--      {{ tagInfo.content }}-->
    <!--    </div>-->
    <div class="footer">
      <span>{{ tagInfo.total }} 份体验分享</span>
      <el-text>关注标签</el-text>
    </div>
  </el-card>
</template>

<style scoped lang="scss">
.el-card {
  width: 280px;
  //height: 280px;
  margin: 20px;

  :deep(.el-card__body) {
    display: flex;
    //height: 80%;
    flex-direction: column;
    align-content: flex-start;
    justify-content: space-between;
  }

  .main {
    margin-top: -28px;
  }

  .footer {
    margin-top: 5px;

    span {
      color: #606266;
      font-size: 12px;
    }

    .el-text {
      margin-left: 18px;
    }
  }
}
</style>
