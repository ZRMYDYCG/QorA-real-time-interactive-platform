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
    if (newRoute.path.includes('/exchangeCommunity')) {
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
      <router-view v-slot="{ Component }">
        <transition name="scale-slide">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout-main {
  padding: v-bind(paddingTop) v-bind(paddingLeft) 0 v-bind(paddingRight);
}

.scale-slide-enter-active,
.scale-slide-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}

.scale-slide-enter-from {
  left: -100%;
}

.scale-slide-enter-to {
  left: 0;
}

.scale-slide-leave-from {
  transform: scale(1);
}

.scale-slide-leave-to {
  transform: scale(0.8);
}
</style>
