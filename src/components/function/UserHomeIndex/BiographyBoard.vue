<script setup></script>

<template>
  <el-card>
    <div class="header">
      <el-icon>
        <Edit />
      </el-icon>
    </div>
    <img src="https://pic.imgdb.cn/item/6610c9ba68eb935713575a4b.png" alt="" />
    <p>还没有填写个人简介</p>
  </el-card>
</template>

<style scoped lang="scss">
.el-card {
  height: 300px;

  :deep(.el-card__body) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .header {
      display: flex;
      width: 100%;
      justify-content: flex-end;

      .el-icon {
        cursor: pointer;
      }
    }
  }

  img {
    width: 80%;
    height: 80%;
    text-align: center;
    margin-bottom: 10px;
  }

  p {
    font-size: 12px;
  }
}
</style>
