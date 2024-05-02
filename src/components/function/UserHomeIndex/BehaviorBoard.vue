<script setup>
import { useUserHomeStore } from '@/stores/modules/UserHome/index.js'
const userHomeStore = useUserHomeStore()
</script>

<template>
  <el-card>
    <!--
        :icon="activity.icon"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
        :hollow="activity.hollow"
     -->
    <el-timeline style="max-width: 600px">
      <el-timeline-item
        v-for="(activity, index) in userHomeStore.userHomeHistoryList"
        :key="index"
        :timestamp="activity.history_time"
      >
        {{ activity.history_text }}
      </el-timeline-item>
    </el-timeline>
  </el-card>
</template>

<style scoped lang="scss">
.el-card {
  height: 300px;
  overflow-y: auto;
}
</style>
