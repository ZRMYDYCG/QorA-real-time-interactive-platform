<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isAdopted = ref(true) // 假设问题是否被采纳的状态，根据实际情况进行调整

const toItemDetail = () => {
  router.push('/findOut/detail/1')
}

onMounted(() => {})
</script>

<template>
  <el-card>
    <div class="left">
      <el-tag size="large" type="success"> 21 回答</el-tag>
    </div>
    <div class="right">
      <div class="right--top" @click="toItemDetail">
        <h5 class="text-2xl">svg多个单词调整完 scale 属性后，位置变化了，怎么让其竖者紧凑排列？</h5>
      </div>
      <div class="right--bottom">
        <el-tag type="info" size="small">薯片</el-tag>
        <el-tag type="info" size="small">乐事</el-tag>
        <el-tag type="info" size="small">JavaScript</el-tag>
        <el-tag type="info" size="small">Vue.js</el-tag>
      </div>
    </div>
    <div class="isAdopted">已采纳</div>
  </el-card>
</template>

<style scoped lang="scss">
.el-card {
  width: 40vw;
  min-width: 300px;
  margin-bottom: 10px;
  padding: 30px 0;

  &:hover {
    scale: (1.05);
    cursor: pointer;
  }

  :deep(.el-card__body) {
    padding: 20px 30px 10px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
      .el-tag {
        margin-right: 20px;
        margin-top: -20px;
      }
    }

    .right {
      position: relative;

      .right--top {
        .title {
          font-weight: 100;
        }
      }

      .right--bottom {
        margin-top: 20px;

        .el-tag {
          margin-right: 10px;
          margin-bottom: 5px;
        }
      }
    }

    .isAdopted {
      min-width: 60px;
      height: 25px;
      border-radius: 4px;
      background-color: #6ff298;
      text-align: center;
      line-height: 25px;
      color: #ffff;
    }
  }
}
</style>
