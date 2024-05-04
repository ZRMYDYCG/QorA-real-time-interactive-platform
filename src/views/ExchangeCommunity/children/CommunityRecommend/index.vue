<script setup>
import { onMounted } from 'vue'
import ExchangeItem from '@/views/ExchangeCommunity/components/exchange-item/index.vue'
import { useExchangeCommunityStore } from '@/stores/modules/ExchangeCommunity/index.js'
import { useLoginStore } from '@/stores/modules/Login/index.js'

const loginStore = useLoginStore()

const exchangeCommunityStore = useExchangeCommunityStore()

onMounted(() => {
  console.log(loginStore.user_id)
  exchangeCommunityStore.fetchAllRecommend(loginStore.user_id)
})
</script>

<template>
  <template v-for="item in exchangeCommunityStore.dynamicDetail" :key="item">
    <exchange-item :dynamic-detail="item"></exchange-item>
  </template>
</template>

<style scoped lang="scss"></style>
