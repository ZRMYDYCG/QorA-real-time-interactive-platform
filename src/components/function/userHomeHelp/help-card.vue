<script setup>
import { ref } from 'vue'
import YsCard from '@/components/base/ys-card/src/ys-card.vue'

const items = ref([
  { id: 1, title: '最近一次认真奔跑是为了什么?', isExpanded: false },
  { id: 2, title: '你最喜欢的电影是什么?', isExpanded: false }
])
</script>

<template>
  <div class="help-card">
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
.help-card {
  margin: 5px 0;

  .subtitle {
    padding: 10px;
  }

  .time {
    color: #ccc;
    margin-right: 20px;
  }

  .answer {
    color: #ccc;
  }
}
</style>
