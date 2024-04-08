<script setup>
import { ref } from 'vue'

defineProps({
  cardTitle: {
    type: String,
    default: '默认标题'
  }
})
</script>

<template>
  <el-card class="search-find-card">
    <template #header>
      {{ cardTitle }}
    </template>
  </el-card>
</template>

<style scoped lang="scss"></style>
