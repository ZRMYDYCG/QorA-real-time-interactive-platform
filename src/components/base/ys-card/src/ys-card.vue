<template>
  <div :style="cardStyle" class="card">
    <div class="card-header">
      <h3>{{ title }}</h3>
      <div style="cursor: pointer">
        <el-icon>
          <DeleteFilled />
        </el-icon>
      </div>
    </div>
    <div class="subTitle">
      <slot name="subTitle"></slot>
    </div>
    <div class="card-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '标题'
  },
  width: {
    type: String,
    default: '100%'
  },
  backgroundColor: {
    type: String,
    default: '#ffffff'
  }
})

const cardStyle = computed(() => ({
  with: props.width,
  backgroundColor: props.backgroundColor
}))
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-header {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f7f7f7;
}

.card-header h3 {
  margin: 0;
  font-size: 18px;
}

.card-content {
  padding: 15px;
}
</style>
