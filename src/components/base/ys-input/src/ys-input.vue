<template>
  <input
    type="text"
    :value="modelValue"
    @input="onInput"
    :placeholder="placeholder"
    :style="{ color: textColor, width: width }"
  />
</template>

<script setup>
const emit = defineEmits(['update:modelValue'])
defineProps({
  modelValue: String,
  backgroundColor: {
    type: String,
    default: 'lightgray'
  },
  borderRadius: {
    type: [String, Number],
    default: '8px'
  },
  textColor: {
    type: String,
    default: 'gray'
  },
  placeholder: {
    type: String,
    default: '请输入昵称'
  },
  width: {
    type: String,
    default: '100%'
  }
})

// 输入框事件处理
const onInput = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<style scoped>
input {
  border: none;
  outline: none; /* 无聚焦效果 */
  font-size: 14px;
  border-radius: v-bind(borderRadius);
  padding: 7px 0;
  text-indent: 10px;
}
</style>
