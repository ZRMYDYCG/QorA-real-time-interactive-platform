<script setup>
import ResponseCard from '@/components/function/userHomeResponse/response-card.vue'
</script>

<template>
  <div class="user-home-response">
    <el-timeline style="max-width: 600px">
      <el-timeline-item timestamp="2018/4/12" placement="top">
        <response-card></response-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/3" placement="top">
        <response-card></response-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top">
        <response-card></response-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<style scoped lang="scss"></style>
