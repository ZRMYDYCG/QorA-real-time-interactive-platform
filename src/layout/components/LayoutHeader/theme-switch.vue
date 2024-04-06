<script setup>
import { ref } from 'vue'

const dark = ref(false)
const themeChange = () => {
  const html = document.documentElement
  console.log(document.getElementById('theme-style'))
  if (dark.value) {
    html.className = 'dark'
    // document.getElementById('theme-style').href = './src/styles/element/dark-theme.scss'
  } else {
    html.className = ''
    // document.getElementById('theme-style').href = './src/styles/element/light-theme.scss'
  }
}
</script>

<template>
  <el-popover placement="top" title="主题切换" :width="150" trigger="hover">
    <el-switch v-model="dark" size="small" @change="themeChange">
      <template #active-action>
        <span class="custom-active-action">
          <el-icon><Sunny /></el-icon>
        </span>
      </template>
      <template #inactive-action>
        <span class="custom-inactive-action">
          <el-icon><Moon /></el-icon>
        </span>
      </template>
    </el-switch>
    <template #reference>
      <div class="theme-switch">
        <el-button plain size="small" icon="Sunny" circle />
      </div>
    </template>
  </el-popover>
</template>

<style scoped lang="scss">
.theme-switch {
  margin-right: 20px;

  .el-switch {
    --el-switch-on-color: #ffffff;
    --el-switch-off-color: #000;
    --el-switch-border-color: #ccc;
  }
}
</style>
