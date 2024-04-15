<template>
  <div ref="textOverflow" class="text-overflow" :style="boxStyle">
    <span ref="overEllipsis">{{ realText }}</span>
    <span class="slot-box" ref="slotRef" v-if="showSlotNode">
      <slot :click-toggle="toggle" :expanded="expanded"></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    text: { type: String, default: '' },
    maxLines: { type: Number, default: 3 },
    width: { type: Number, default: 0 }
  },
  data() {
    return {
      offset: this.text.length,
      expanded: false,
      slotBoxWidth: 0,
      textBoxWidth: this.width,
      showSlotNode: false
    }
  },
  computed: {
    boxStyle() {
      return this.width + 'px'
    },
    realText() {
      const isCutOut = this.offset !== this.text.length
      let realText = this.text
      if (isCutOut && !this.expanded) {
        realText = this.text.slice(0, this.offset) + '...'
      }
      return realText
    }
  },
  methods: {
    calculateOffset(from, to) {
      this.$nextTick(() => {
        if (Math.abs(from - to) <= 1) return
        if (this.isOverflow()) {
          to = this.offset
        } else {
          from = this.offset
        }
        this.offset = Math.floor((from + to) / 2)
        this.calculateOffset(from, to)
      })
    },
    isOverflow() {
      const { len, lastWidth } = this.getLines()
      if (len < this.maxLines) {
        return false
      }
      if (this.maxLines) {
        const lastLineOver = !!(
          len === this.maxLines && lastWidth + this.slotBoxWidth > this.textBoxWidth
        )
        if (len > this.maxLines || lastLineOver) {
          return true
        }
      }
      return false
    },
    getLines() {
      const clientRects = this.$refs.overEllipsis.getClientRects()
      return {
        len: clientRects.length,
        lastWidth: clientRects[clientRects.length - 1].width
      }
    },
    toggle() {
      this.expanded = !this.expanded
    }
  },
  mounted() {
    const { len } = this.getLines()
    if (len > this.maxLines) {
      this.showSlotNode = true
      this.$nextTick(() => {
        this.slotBoxWidth = this.$refs.slotRef.clientWidth
        this.textBoxWidth = this.$refs.textOverflow.clientWidth
        this.calculateOffset(0, this.text.length)
      })
    }
  }
}
</script>

<style scoped>
.slot-box {
  display: inline-block;
}
</style>
