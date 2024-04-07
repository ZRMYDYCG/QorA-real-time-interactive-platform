<script setup>
import { ref, computed } from 'vue'

const dark = ref(false)
const themeChange = () => {
  const html = document.documentElement
  console.log(document.getElementById('theme-style'))
  dark.value = !dark.value
  if (dark.value) {
    html.className = 'dark'
    // document.getElementById('theme-style').href = './src/styles/element/dark-theme.scss'
  } else {
    html.className = 'light'
    // document.getElementById('theme-style').href = './src/styles/element/light-theme.scss'
  }
}

const IconType = computed(() => {
  return dark.value ? 'Sunny' : 'MoonNight'
})
</script>

<template>
  <div class="theme-switch" @click="themeChange">
    <el-button plain size="small" :icon="IconType" circle />
  </div>
</template>

<style scoped lang="scss">
.theme-switch {
  margin-right: 20px;

  .el-button {
    text-align: center;
  }
}
</style>
