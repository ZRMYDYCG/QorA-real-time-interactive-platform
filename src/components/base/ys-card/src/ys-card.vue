<template>
  <div :style="cardStyle" class="card">
    <div class="card-header">
      <h3>{{ title }}</h3>
      <div v-if="isDelete" style="cursor: pointer">
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
    <div class="card-extra-content" :class="{ expanded: isExpanded }">
      <slot name="extraContent"></slot>
    </div>
    <div class="card-footer" @click="toggleExpand" v-if="showDropdown">
      <el-icon>
        <component :is="iconType" />
      </el-icon>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
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
    default: ''
  },
  isDelete: {
    type: Boolean,
    default: true
  },
  isExpanded: {
    type: Boolean,
    default: false
  },
  showDropdown: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['update:isExpanded'])

const cardStyle = computed(() => ({
  with: props.width,
  backgroundColor: props.backgroundColor
}))

const localIsExpanded = ref(props.isExpanded)

const iconType = computed(() => {
  return localIsExpanded.value ? 'ArrowUp' : 'ArrowDown'
})

const toggleExpand = () => {
  localIsExpanded.value = !localIsExpanded.value
  if (props.isExpanded !== undefined) {
    emit('update:isExpanded', localIsExpanded.value)
  }
}
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

.card-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
}

.card-footer el-icon {
  transition: transform 0.3s ease;
}

.card-extra-content {
  height: 0;
  transition: height 0.3s ease;
  overflow: hidden;
}

.card-extra-content.expanded {
  height: 250px;
  overflow: auto;
}
</style>
