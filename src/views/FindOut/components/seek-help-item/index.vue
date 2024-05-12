<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

defineProps({
  itemDetail: {
    type: Object,
    default: () => {}
  }
})

const router = useRouter()

const toItemDetail = (id) => {
  router.push(`/findOut/detail/${id}`)
}

onMounted(() => {})
</script>

<template>
  <el-card>
    <div class="content">
      <div class="left">
        <el-tag size="large" type="success">{{ itemDetail?.review_count }} 回答</el-tag>
      </div>
      <div class="right">
        <div class="right--top" @click="toItemDetail(itemDetail?.question_id)">
          <h5 class="text-2xl">{{ itemDetail?.question_title }}</h5>
        </div>
        <div class="right--bottom">
          {{ itemDetail?.question_text }}
          <div style="margin-top: 20px">
            <el-tag type="info" size="small">薯片</el-tag>
            <el-tag type="info" size="small">乐事</el-tag>
            <el-tag type="info" size="small">JavaScript</el-tag>
            <el-tag type="info" size="small">Vue.js</el-tag>
          </div>
        </div>
      </div>
    </div>
    <!--  未解决  -->
    <div class="isAdopted" v-if="itemDetail?.question_answer > 0">
      已采纳 {{ itemDetail?.question_answer }} 条
    </div>
  </el-card>
</template>

<style scoped lang="scss">
.el-card {
  width: 60vw;
  min-width: 700px;
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

    .content {
      display: flex;
      align-items: center;

      .left {
        margin-right: 30px;

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
    }

    .isAdopted {
      min-width: 60px;
      height: 25px;
      border-radius: 4px;
      background-color: #6ff298;
      text-align: center;
      line-height: 25px;
      color: #ffff;
      padding: 0 4px;
    }
  }
}
</style>
