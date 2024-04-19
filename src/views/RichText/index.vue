<template>
  <div>
    <RichText @update="getContent" />
    <p>{{ content }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import RichText from '@/components/base/rich-text/index.vue'

// 富文本内容
const content = ref('')

// 获取富文本内容
const getContent = (data) => {
  content.value = data
}
</script>

<style scoped></style>
