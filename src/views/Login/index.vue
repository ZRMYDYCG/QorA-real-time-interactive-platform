<template>
  <div class="Login">
    <login-panel></login-panel>
  </div>
</template>

<script setup>
import LoginPanel from './components/LoginPanel/index.vue'
</script>

<style scoped lang="scss">
.Login {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  background: url('../../../public/user-bg.svg');
}
</style>
