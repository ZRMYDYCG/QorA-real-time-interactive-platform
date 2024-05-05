<script setup>
import { onMounted } from 'vue'
import ExchangeItem from '@/views/ExchangeCommunity/components/exchange-item/index.vue'
import { useExchangeCommunityStore } from '@/stores/modules/ExchangeCommunity/index.js'
// import { useLoginStore } from '@/stores/modules/Login/index.js'
import { getLocalStorage } from '@/utils/index.js'

// const loginStore = useLoginStore()

const exchangeCommunityStore = useExchangeCommunityStore()

onMounted(async () => {
  let user_id = await getLocalStorage('userInfo')?.value?.user_id
  // console.log(loginStore.user_id)
  exchangeCommunityStore.fetchAllRecommend(user_id)
})
</script>

<template>
  <template v-for="item in exchangeCommunityStore.dynamicDetail" :key="item">
    <exchange-item :dynamic-detail="item"></exchange-item>
  </template>
</template>

<style scoped lang="scss"></style>
