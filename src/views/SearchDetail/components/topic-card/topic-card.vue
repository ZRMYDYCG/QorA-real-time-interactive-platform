<script setup>
import { ref } from 'vue'

defineProps({
  isRound: {
    type: Boolean,
    default: false
  },
  ImgUrl: {
    type: String,
    default: '#'
  },
  cardDetail: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div class="topic-card">
    <div class="card-left">
      <img :src="ImgUrl" alt="" />
    </div>
    <div class="desc">
      <slot name="content"></slot>
    </div>
    <div class="btn">
      <slot name="btn"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.topic-card {
  .card-left {
    border-radius: 5px;
  }
}

.isRound {
  border-radius: 50%;
}
</style>
