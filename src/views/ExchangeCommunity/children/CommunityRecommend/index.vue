<script setup>
import { onMounted } from 'vue'
import ExchangeItem from '@/views/ExchangeCommunity/components/exchange-item/index.vue'
import { useExchangeCommunityStore } from '@/stores/modules/ExchangeCommunity/index.js'

const exchangeCommunityStore = useExchangeCommunityStore()

onMounted(() => {
  exchangeCommunityStore.fetchAllRecommend()
})
</script>

<template>
  <template v-for="item in exchangeCommunityStore.dynamicDetail" :key="item">
    <exchange-item :dynamic-detail="item"></exchange-item>
  </template>
</template>

<style scoped lang="scss"></style>
