<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import LayoutHeader from './components/LayoutHeader/index.vue'

const paddingLeft = ref('180px')
const paddingRight = ref('180px')
const paddingTop = ref('30px')
const route = useRoute()

watch(
  route,
  (newRoute) => {
    if (newRoute.path === '/exchangeCommunity') {
      paddingLeft.value = '0px'
      paddingRight.value = '0px'
      paddingTop.value = '5px'
    } else if (newRoute.path.includes('/searchDetail')) {
      paddingLeft.value = '0px'
      paddingRight.value = '0px'
      paddingTop.value = '5px'
    } else {
      paddingLeft.value = '180px'
      paddingRight.value = '180px'
      paddingTop.value = '30px'
    }
  },
  { immediate: true }
)
</script>

<template>
  <div class="layout">
    <LayoutHeader></LayoutHeader>
    <div class="layout-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout-main {
  padding: v-bind(paddingTop) v-bind(paddingLeft) 0 v-bind(paddingRight);
}
</style>
