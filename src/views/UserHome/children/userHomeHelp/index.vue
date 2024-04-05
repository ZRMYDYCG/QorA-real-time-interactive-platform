<script setup>
import HelpCard from '@/components/function/userHomeHelp/help-card.vue'
import DynamicCard from '@/components/function/userHomeDynamic/dynamic-card.vue'
</script>

<template>
  <div class="user-home-help">
    <h3 class="title">我的求助</h3>
    <hr />
    <el-timeline style="max-width: 100%">
      <el-timeline-item timestamp="2018/4/12" placement="top">
        <help-card></help-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/3" placement="top">
        <help-card></help-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top">
        <help-card></help-card>
      </el-timeline-item>
    </el-timeline>
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
