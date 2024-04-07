<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import LayoutHeader from './components/LayoutHeader/index.vue'

const paddingLeft = ref('180px')
const paddingRight = ref('180px')
const route = useRoute()

watch(route, (newRoute) => {
  if (newRoute.path === '/exchangeCommunity') {
    paddingLeft.value = '20px'
    paddingRight.value = '20px'
  } else {
    paddingLeft.value = '180px'
    paddingRight.value = '180px'
  }
})
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
  padding: 30px v-bind(paddingLeft) 0 v-bind(paddingRight);
}
</style>
