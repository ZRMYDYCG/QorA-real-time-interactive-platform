<script setup>
import ExchangeItem from '@/views/ExchangeCommunity/components/exchange-item/index.vue'
</script>

<template>
  <template v-for="item in []" :key="item">
    <exchange-item :data-array="item"></exchange-item>
  </template>
</template>

<style scoped lang="scss"></style>
