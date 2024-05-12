<script setup>
import SeekHelpItem from '../../components/seek-help-item/index.vue'
import { useFindOutStore } from '@/stores/modules/findOut/index.js'
const findOutStore = useFindOutStore()
</script>

<template>
  <div style="display: flex; flex-direction: column">
    <template v-for="(item, index) in findOutStore.bList" :key="index">
      <seek-help-item :item-detail="item"></seek-help-item>
    </template>
  </div>
</template>

<style scoped lang="scss"></style>
