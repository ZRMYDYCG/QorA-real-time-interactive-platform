<script setup>
import HelpCard from '@/components/function/userHomeHelp/help-card.vue'
import DynamicCard from '@/components/function/userHomeDynamic/dynamic-card.vue'
</script>

<template>
  <div class="user-home-help">
    <h3 class="title">我的求助</h3>
    <help-card></help-card>
    <help-card></help-card>
    <help-card></help-card>
    <help-card></help-card>
    <help-card></help-card>
    <help-card></help-card>
    <help-card></help-card>
    <help-card></help-card>
  </div>
</template>

<style scoped lang="scss">
.user-home-help {
  h3 {
    padding: 15px 0;
  }

  .el-timeline {
    margin-top: 20px;
  }
}
</style>
