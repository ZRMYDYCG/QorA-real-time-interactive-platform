<template>
  <div class="filter-button">
    <el-button
      :value="'hot'"
      :class="{ 'active-button': activeButton === 'hot' }"
      @click="activeButton = 'hot'"
      class="button-hot"
      style="border-top-left-radius: 5px; border-bottom-left-radius: 5px"
    >
      最热
    </el-button>
    <el-button
      :value="'new'"
      :class="{ 'active-button': activeButton === 'new' }"
      @click="activeButton = 'new'"
      class="button-new"
      style="border-top-right-radius: 5px; border-bottom-right-radius: 5px"
    >
      最新
    </el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeButton = ref('hot')

// 暴露左右按钮的切换逻辑
defineExpose({})
</script>

<style scoped lang="scss">
.filter-button {
  display: flex;

  .el-button {
    border-radius: 0;
    padding: 8px 16px;
    margin: 0;
    border: none; // 移除按钮间的间隔
  }

  .active-button {
    background-color: #decffd;
  }
}
</style>
