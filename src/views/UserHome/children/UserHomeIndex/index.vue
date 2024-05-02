<script setup>
import AppreciationLevel from '@/components/function/UserHomeIndex/AppreciationLevel.vue'
import BiographyBoard from '@/components/function/UserHomeIndex/BiographyBoard.vue'
// import ContributionList from '@/components/function/UserHomeIndex/ContributionList/index.vue'
// import BehaviorBoard from '@/components/function/UserHomeIndex/BehaviorBoard.vue'
import { useUserHomeStore } from '@/stores/modules/UserHome/index.js'
const userHomeStore = useUserHomeStore()

// 父组件维护的贡献数据
// const contributions = ref({
//   '2024-4-40': true
// })

// 处理子组件发来的贡献变更事件
// function handleContributionChange(newContributions) {
//   // 更新父组件的贡献数据
//   contributions.value = newContributions
// }
</script>

<template>
  <el-row :gutter="30" style="flex-wrap: wrap">
    <!-- 在小屏幕下，每个卡片占据全部宽度，在大屏幕上各占据8个单位宽度 -->
    <el-col :span="24" :md="8">
      <BiographyBoard></BiographyBoard>
    </el-col>
    <el-col :span="24" :md="8">
      <AppreciationLevel></AppreciationLevel>
    </el-col>
    <el-col :span="24" :md="8">
      <BehaviorBoard></BehaviorBoard>
    </el-col>
  </el-row>

  <el-row>
    <h3 style="margin-bottom: 20px; color: darkkhaki">
      2024年为体验者社区共贡献 {{ userHomeStore.userHomeHistoryList.length }} 次体验感受
    </h3>
    <!-- 贡献列表始终全宽展示 -->
    <el-col :span="24">
      <!-- <ContributionList
        :contributions="contributions"
        @contribution-change="handleContributionChange"
      ></ContributionList> -->
    </el-col>
  </el-row>
</template>

<style scoped lang="scss">
.el-row {
  margin-bottom: 20px;

  .el-col {
    margin-bottom: 20px;
  }
}
</style>
