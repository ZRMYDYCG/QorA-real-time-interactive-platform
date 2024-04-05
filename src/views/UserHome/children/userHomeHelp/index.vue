<script setup>
import HelpCard from '@/components/function/userHomeHelp/help-card.vue'
</script>

<template>
  <div class="user-home-help">
    <h3 class="title">我的求助</h3>
    <hr />
    <help-card></help-card>
  </div>
</template>

<style scoped lang="scss">
.user-home-help {
  h3 {
    padding: 15px 0;
  }
}
</style>
