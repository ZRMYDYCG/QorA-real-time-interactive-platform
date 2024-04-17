<template>
  <h2 class="mb-3">{{ title }}</h2>
  <div class="dp-text-ellipsis-wrapper">
    <div class="text" :class="textClass" :style="textStyleObject">
      <label class="btn" @click="toggleShowAll">
        <div v-if="!showall">
          <span>
            展开
            {{ hiddenBtn ? '' : '...' }}</span
          >
        </div>
        <span v-else>
          收起
          <el-icon><ArrowUpBold /></el-icon
        ></span>
      </label>
      <div v-html="displayInfo"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  info: {
    type: String,
    default: ''
  },
  lineClamp: {
    type: Number,
    default: 3
  },
  hiddenBtn: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  }
})

const showall = ref(false)

const displayInfo = computed(() => {
  if (showall.value || props.lineClamp < 1) {
    return props.info
  } else {
    const lines = props.info
      .split(' ')
      .slice(0, props.lineClamp * 2)
      .join(' ')
    return lines.trim() + (lines.length < props.info.length ? '...' : '')
  }
})

const textClass = computed(() => {
  let cls = 'text'
  cls += showall.value ? ' showall' : ''
  cls += props.hiddenBtn ? ' hidden-btn' : ''
  return cls
})

const textStyleObject = computed(() => {
  return showall.value ? { 'max-height': 'none' } : { 'max-height': `${1.5 * props.lineClamp}em` }
})

const toggleShowAll = () => {
  showall.value = !showall.value
}

watch(
  () => props.info,
  () => {
    showall.value = false
  }
)
</script>

<style scoped>
.dp-text-ellipsis-wrapper {
  display: flex;
  margin: 6px 0 20px 0;
  overflow: hidden;
  font-size: 14px;
  line-height: 20px;

  .text {
    position: relative;
    overflow: hidden;
    line-height: 1.5;
    text-align: justify;
    text-overflow: ellipsis;
    word-break: break-all;
    transition: all 0.3s;
  }

  .text::before {
    float: right;
    height: calc(100% - 20px);
    content: '';
  }

  .text::after {
    position: absolute;
    width: 999vw;
    height: 999vw;
    margin-left: -100px;
    box-shadow: inset calc(100px - 999vw) calc(30px - 999vw) 0 0 #fff;
    content: '';
  }

  .btn {
    position: relative;
    float: right;
    clear: both;
    margin-left: 10px;
    font-size: 14px;
    padding: 0 8px;
    color: #f396e1;
    line-height: 20px;
    border-radius: 4px;
    cursor: pointer;
    z-index: 10;
  }

  .text.showall {
    max-height: none;
    transition: all 0.3s;
  }

  .text.showall .btn::before {
    visibility: hidden;
  }

  .text.showall .btn::after {
    visibility: hidden;
  }
}
</style>
