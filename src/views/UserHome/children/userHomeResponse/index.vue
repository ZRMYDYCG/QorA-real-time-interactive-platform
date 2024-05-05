<script setup>
import { onMounted, ref } from 'vue'
import YsCard from '@/components/base/ys-card/src/ys-card.vue'
import { useRoute } from 'vue-router'
import { fetchUserAnswer, deleteUserAnswer } from '@/service/UserHome/index.js'
import { ElMessage, ElMessageBox } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-message-box.css'
const route = useRoute()

// TODO:渲染列表
let review_list = ref([])
const handleFetchUserAnswer = () => {
  console.log('控制台打印', route.query)
  fetchUserAnswer(route.query.user_id).then((res) => {
    console.log('最新的列表:', res)
    review_list.value = res.data.review_list
  })
}

// TODO:更新某个卡片的展开状态的方法
const handleUpdateIsExpanded = (itemId, value) => {
  review_list.value = review_list.value.map((item) => {
    if (item.question_id === itemId) {
      return { ...item, isExpanded: value }
    }
    return item
  })
}

onMounted(() => {
  handleFetchUserAnswer()
})
// TODO:删除某条回答
const deleteItem = (id) => {
  ElMessageBox.confirm('确定删除该条回答吗？', 'danger', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      deleteUserAnswer(id).then((res) => {
        console.log(res)
        ElMessage({
          type: 'success',
          message: '删除成功'
        })
        handleFetchUserAnswer()
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '操作取消'
      })
    })
}
</script>

<template>
  <div class="user-home-response">
    <ys-card
      v-for="item in review_list"
      :title="item.question_title"
      :key="item.id"
      v-model:is-expanded="item.isExpanded"
      @update:isExpanded="(value) => handleUpdateIsExpanded(item.question_id, value)"
      :is-delete="true"
      showDropdown
    >
      <template #isDelete>
        <el-icon @click="deleteItem(item.review_id)"><CircleClose /></el-icon>
      </template>
      <template #subTitle>
        <div class="subtitle">
          <span style="font-size: 13px; margin-left: 10px" class="time"
            >回答时间: {{ item.review_time }}</span
          >
        </div>
      </template>
      <template #extraContent>
        <div
          v-if="item.isExpanded"
          style="padding: 20px 10px; text-indent: 10px"
          v-html="item.review_text"
        ></div>
      </template>
    </ys-card>
  </div>
</template>

<style scoped lang="scss">
.card {
  padding: 10px;
  margin-bottom: 20px;
}
</style>
