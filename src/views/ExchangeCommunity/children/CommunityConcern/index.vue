<script setup>
import ExchangeItem from '@/views/ExchangeCommunity/components/exchange-item/index.vue'
import { useExchangeCommunityStore } from '@/stores/modules/ExchangeCommunity/index.js'

const exchangeCommunityStore = useExchangeCommunityStore()
</script>

<template>
  <template v-for="item in exchangeCommunityStore.dynamicConcern" :key="item">
    <exchange-item :dynamic-detail="item"></exchange-item>
  </template>
</template>

<style scoped lang="scss"></style>
