<template>
  <div class="tab-container" :class="{ 'vertical-tabs': isVertical }">
    <div class="tab-header">
      <div
        v-for="(item, index) in tabs"
        :key="index"
        class="tab-item"
        :class="{ active: index === activeIndex }"
        :style="{ backgroundColor: isVertical && activeBackground, borderColor: activeColor }"
        @click="handleTabClick(index)"
      >
        <i v-if="item.icon" :class="item.icon"></i>
        <span v-else>{{ item.name }}</span>
      </div>
    </div>
    <!--  tab栏内容区  -->
    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  tabs: {
    type: Array,
    default: () => []
  },
  activeIndex: {
    type: Number,
    default: 0
  },
  isVertical: {
    type: Boolean,
    default: false
  },
  activeColor: {
    type: String,
    default: 'blue'
  },
  activeBackground: {
    type: Boolean,
    default: false
  }
})

const activeIndex = ref(props.activeIndex)

const emit = defineEmits(['update:activeIndex'])

const handleTabClick = (index) => {
  activeIndex.value = index
  emit('update:activeIndex', index)
}
</script>

<style scoped>
.tab-container {
  display: flex;
  flex-direction: column;
}

.vertical-tabs {
  flex-direction: column;
}

.tab-header {
  display: flex;
  overflow: auto;
}

.tab-item {
  padding: 10px 15px;
  cursor: pointer;
  position: relative;
  transition: color 0.3s;
}

.tab-item.active {
  font-weight: bold;
}

.tab-item i {
  font-size: 1.2em;
  line-height: 1;
}

.tab-content {
  flex-grow: 1;
  padding: 15px;
}
</style>

<style></style>
