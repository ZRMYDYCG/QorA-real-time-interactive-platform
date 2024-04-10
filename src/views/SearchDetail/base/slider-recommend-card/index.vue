<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  data: {
    type: Array,
    default: []
  }
})
</script>

<template>
  <el-card>
    <template #header>
      <div class="header--left">
        <h3>{{ title }}</h3>
      </div>
      <div class="header--right">
        <slot name="headerRight"></slot>
      </div>
    </template>
    <slot v-bind="data"></slot>
  </el-card>
</template>

<style scoped lang="scss">
.el-card {
  box-shadow: none;

  :deep(.el-card__header) {
    display: flex;
    justify-content: space-between;
  }
}
</style>
