<template>
  <div
    class="textarea-wrapper"
    :style="{ borderRadius: borderRadius + 'px', width: width + 'px', height: height + 'px' }"
  >
    <textarea
      v-model="innerValue"
      :placeholder="placeholder"
      :maxlength="maxWords"
      @input="handleInput"
      @blur="handleBlur"
      :style="{ color: textColor }"
    />
    <div v-if="showWordCount" class="word-count">{{ wordCount }} / {{ maxWords }}</div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  placeholder: {
    type: String,
    default: '请输入内容' // 默认提示文本
  },
  borderRadius: {
    type: [String, Number],
    default: '4' // 默认圆角大小
  },
  maxWords: {
    type: Number,
    default: 140 // 默认最大字数
  },
  textColor: {
    type: String,
    default: 'gray' // 默认文字颜色
  },
  width: {
    type: [String, Number],
    default: '100%' // 默认宽度
  },
  height: {
    type: [String, Number],
    default: '100px' // 默认高度
  }
})

const innerValue = ref('')
const wordCount = ref(0)
const showWordCount = ref(false)

watch(innerValue, (newValue) => {
  if (newValue.length > props.maxWords) {
    wordCount.value = props.maxWords
  } else {
    wordCount.value = newValue.length
  }
  showWordCount.value = newValue.length > 0
})

const handleInput = () => {
  const count = innerValue.value.length
  wordCount.value = count > props.maxWords ? props.maxWords : count
}

const handleBlur = () => {
  if (innerValue.value.length > props.maxWords) {
    innerValue.value = innerValue.value.slice(0, props.maxWords)
    wordCount.value = props.maxWords
  }
}

// 暴露值
defineExpose(['innerValue'])
</script>

<style scoped>
.textarea-wrapper {
  position: relative;
  border: 1px solid #ddd;
  padding: 8px;
}

textarea {
  resize: none; /* 禁止调整大小 */
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: #eef0f2;
}

.word-count {
  position: absolute;
  bottom: 5px;
  left: 10px;
  font-size: 12px;
  color: black;
}
</style>
