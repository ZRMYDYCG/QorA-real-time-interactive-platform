<script setup>
import { onMounted, ref } from 'vue'
import YsCard from '@/components/base/ys-card/src/ys-card.vue'
import { publicDelete, publicFetch } from '@/service/public/index.js'
import { useRoute } from 'vue-router'
const route = useRoute()

// 模拟
const items = ref([
  { id: 1, title: '最近一次认真奔跑是为了什么?', isExpanded: false },
  { id: 2, title: '你最喜欢的电影是什么?', isExpanded: false }
])

// TODO:删除某一个问题
const handleDeletClick = (id) => {
  publicDelete(id, 'questions')
}

// TODO:渲染全部问题
const handlePublicFetchApi = () => {
  let user_id = route.query.user_id
  const res = publicFetch(user_id, 'questions')
  console.log(res)
}

onMounted(() => {
  handlePublicFetchApi()
})
</script>

<template>
  <div class="user-home-help">
    <h3 class="title">我的求助</h3>
    <ys-card v-for="item in items" :title="item.title" :key="item.id">
      <template #subTitle>
        <div class="subtitle">
          <span class="time">提问时间: 2024-05-05</span>
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
  }
}
</style>
