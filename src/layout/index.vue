<script setup>
import LayoutHeader from './components/LayoutHeader/index.vue'
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
  padding: 80px 180px 0 180px;
}
</style>
