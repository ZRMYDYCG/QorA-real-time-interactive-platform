<script setup>
import { onMounted, ref } from 'vue'
import YsCard from '@/components/base/ys-card/src/ys-card.vue'
import { publicFetch, publicDelete } from '@/service/public/index.js'
import { useRoute } from 'vue-router'
const route = useRoute()

// 模拟
const items = ref([
  { id: 1, title: '最近一次认真奔跑是为了什么?', isExpanded: false },
  { id: 2, title: '你最喜欢的电影是什么?', isExpanded: false }
])

// TODO:更新某个卡片的展开状态的方法
const handleUpdateIsExpanded = (itemId, value) => {
  items.value = items.value.map((item) => {
    if (item.id === itemId) {
      return { ...item, isExpanded: value }
    }
    return item
  })
}

// 获取某用户的所有求助
let id = route.query.user_id
const handlePublicFetchResponse = async () => {
  const res = await publicFetch(id, 'questions')
  console.log(res)
}
onMounted(() => {
  handlePublicFetchResponse()
})
// 删除某条提问
</script>

<template>
  <div class="user-home-response">
    <ys-card
      v-for="item in items"
      :title="item.title"
      :key="item.id"
      v-model:is-expanded="item.isExpanded"
      @update:isExpanded="(value) => handleUpdateIsExpanded(item.id, value)"
      :is-delete="true"
      showDropdown
    >
      <template #subTitle>
        <div class="subtitle">
          <span class="time">回答时间: 2024-05-05</span>
        </div>
      </template>
      <template #extraContent>
        <div v-if="item.isExpanded">
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
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
