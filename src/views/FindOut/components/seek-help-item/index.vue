<script setup>
import { ref } from 'vue'

const isAdopted = ref(true) // 假设问题是否被采纳的状态，根据实际情况进行调整
</script>

<template>
  <el-card>
    <div class="left">
      <el-tag size="large"> 21 回答</el-tag>
    </div>
    <div class="right">
      <div class="right--top">
        <h5 class="title">svg多个单词调整完 scale 属性后，位置变化了，怎么让其竖者紧凑排列？</h5>
      </div>
      <div class="right--bottom">
        <el-tag size="small">薯片</el-tag>
        <el-tag size="small">乐事</el-tag>
        <el-tag size="small">JavaScript</el-tag>
        <el-tag size="small">Vue.js</el-tag>
      </div>
    </div>
  </el-card>
</template>

<style scoped lang="scss">
.el-card {
  width: 40vw;
  min-width: 300px;
  margin-bottom: 10px;

  :deep(.el-card__body) {
    padding: 20px 10px 10px 10px;
    display: flex;
    align-items: center;

    .left {
      .el-tag {
        margin-right: 20px;
        margin-top: -20px;
      }
    }

    .right {
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 60px;
        height: 20px;
        background-color: pink;
      }

      .right--top {
        .title {
          font-weight: 100;
        }
      }

      .right--bottom {
        margin-top: 20px;

        .el-tag {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
