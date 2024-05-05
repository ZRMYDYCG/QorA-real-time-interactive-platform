<script setup>
import { onMounted, ref } from 'vue'
import YsCard from '@/components/base/ys-card/src/ys-card.vue'
import { publicDelete, publicFetch } from '@/service/public/index.js'
import { useRoute } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-message-box.css'
const route = useRoute()

// TODO:删除某一个问题
const handleDeletClick = async (id) => {
  console.log(id)
  ElMessageBox.confirm('确定删除该求助吗？', 'Warning', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      publicDelete('question', id).then(() => {
        ElMessage({
          type: 'success',
          message: '删除成功'
        })
        handlePublicFetchApi()
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '操作取消'
      })
    })
}

// TODO:渲染全部问题
let items = ref([])
const handlePublicFetchApi = async () => {
  let user_id = route.query.user_id
  const res = await publicFetch(user_id, 'questions')
  console.log(res)
  items.value = res.data.questions_data
}

onMounted(() => {
  handlePublicFetchApi()
})
</script>

<template>
  <div class="user-home-help">
    <ys-card v-for="item in items" :title="item.question_title" :key="item.question_id">
      <template #isDelete>
        <el-icon @click="handleDeletClick(item.question_id)">
          <DeleteFilled />
        </el-icon>
      </template>
      <template #subTitle>
        <div class="subtitle">
          <span class="time">提问时间: {{ item.question_time }}</span>
          <span class="answer">{{ 1 }} 回答</span>
        </div>
      </template>
    </ys-card>
  </div>
</template>

<style scoped lang="scss">
.user-home-help {
  h3 {
    padding: 15px 0;
  }

  .el-timeline {
    margin-top: 20px;
  }

  .card {
    padding: 10px;
    margin-bottom: 20px;
    &:hover {
      cursor: pointer;
    }
  }

  .subtitle {
    font-weight: 100;
    font-family: '楷体';
    .time {
      color: #ccc;
    }
    .answer {
      color: #ccc;
    }
  }
}
</style>
