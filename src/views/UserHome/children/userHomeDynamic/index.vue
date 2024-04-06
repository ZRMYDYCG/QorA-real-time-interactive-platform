<script setup>
import DynamicCard from '@/components/function/userHomeDynamic/dynamic-card.vue'
</script>

<template>
  <div class="user-home-dynamic">
    <el-timeline style="max-width: 600px">
      <el-timeline-item timestamp="2018/4/12" placement="top">
        <dynamic-card></dynamic-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/3" placement="top">
        <dynamic-card></dynamic-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top">
        <dynamic-card></dynamic-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<style scoped lang="scss"></style>
