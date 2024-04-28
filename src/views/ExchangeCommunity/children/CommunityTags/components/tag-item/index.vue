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
    <div class="header mb-5">
      <el-tag>{{ tagInfo.tag_name }}</el-tag>
    </div>
    <div class="footer">
      <span class="mr-5px">{{ tagInfo.dym_num }} 份体验分享</span>
      <span>{{ tagInfo.pro_num }} 个问答求助</span>
      <el-text style="cursor: pointer" size="small">关注标签</el-text>
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
