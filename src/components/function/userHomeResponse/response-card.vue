<script setup>
import { ref } from 'vue'
import YsCard from '@/components/base/ys-card/src/ys-card.vue'

const items = ref([
  { id: 1, title: '最近一次认真奔跑是为了什么?', isExpanded: false },
  { id: 2, title: '你最喜欢的电影是什么?', isExpanded: false }
])

// 更新某个卡片的展开状态的方法
const handleUpdateIsExpanded = (itemId, value) => {
  items.value = items.value.map((item) => {
    if (item.id === itemId) {
      return { ...item, isExpanded: value }
    }
    return item
  })
}
</script>

<template>
  <div class="help-card">
    <ys-card
      v-for="item in items"
      :title="item.title"
      :key="item.id"
      :is-expanded.sync="item.isExpanded"
      @update:isExpanded="(value) => handleUpdateIsExpanded(item.id, value)"
      :is-delete="false"
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
        </div>
      </template>
    </ys-card>
  </div>
</template>

<style scoped lang="scss">
.help-card {
  margin: 5px 0;

  .subtitle {
    padding: 10px;
  }

  .time {
    color: #ccc;
    margin-right: 20px;
  }
}
</style>
