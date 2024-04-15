<template>
  <div ref="textOverflow" class="text-overflow" :style="boxStyle">
    <span ref="overEllipsis">{{ realText }}</span>
    <span class="slot-box" v-if="showSlotNode">
      <slot :click-toggle="toggle" :expanded="expanded"></slot>
    </span>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  maxLines: {
    type: Number,
    default: 3
  },
  width: {
    type: Number,
    default: 0
  }
})

const offset = ref(props.text.length)
const expanded = ref(false)
const slotBoxWidth = ref(0)
const textBoxWidth = ref(props.width)
const showSlotNode = ref(false)

const boxStyle = computed(() => {
  if (props.width) {
    return { width: props.width + 'px' }
  }
})

const realText = computed(() => {
  const isCutOut = offset.value !== props.text.length
  let realText = props.text
  if (isCutOut && !expanded.value) {
    realText = props.text.slice(0, offset.value) + '...'
  }
  return realText
})

const calculateOffset = (from, to) => {
  nextTick(() => {
    if (Math.abs(from - to) <= 1) return
    if (isOverflow.value) {
      offset.value = to
    } else {
      offset.value = from
    }
    calculateOffset(from, to)
  })
}

const isOverflow = computed(() => {
  const { len, lastWidth } = getLines.value

  if (len < props.maxLines) {
    return false
  }
  if (props.maxLines) {
    const lastLineOver =
      len === props.maxLines && lastWidth + slotBoxWidth.value > textBoxWidth.value
    if (len > props.maxLines || lastLineOver) {
      return true
    }
  }
  return false
})

const getLines = () => {
  const clientRects = ref('overEllipsis').value.getClientRects()
  return { len: clientRects.length, lastWidth: clientRects[clientRects.length - 1].width }
}

const toggle = () => {
  expanded.value = !expanded.value
}

onMounted(() => {
  const { len } = getLines.value
  if (len > props.maxLines) {
    showSlotNode.value = true
    nextTick(() => {
      slotBoxWidth.value = ref('slotRef').value.clientWidth
      textBoxWidth.value = ref('textOverflow').value.clientWidth
      calculateOffset(0, props.text.length)
    })
  }
})
</script>

<style scoped>
.slot-box {
  display: inline-block;
}
</style>
