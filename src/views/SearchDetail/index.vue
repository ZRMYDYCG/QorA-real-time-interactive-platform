<script setup>
import { ref, computed } from 'vue'
import AllFilter from './components/all-filter/all-filter.vue'

const handleTabChange = (name) => {
  console.log(name)
}

const isFilter = ref(true)
const handleFilter = () => {
  isFilter.value = !isFilter.value
  console.log(isFilter.value)
}

const componentString = computed(() => {})
</script>

<template>
  <div class="search-detail">
    <el-tabs tab-position="top" @tab-change="handleTabChange">
      <!--   此处不将tab切换的内容放到默认插槽里面   -->
      <!--   请求 query 参数合并的时候 默认要考虑第一项   -->
      <el-tab-pane label="全站">
        <el-icon @click.native="handleFilter">
          <Compass />
        </el-icon>
        <component :is="componentString"></component>
      </el-tab-pane>
      <el-tab-pane label="用户">
        <el-card>
          <template #default>
            <div class="left">
              <img class="img" src="" alt="" />
            </div>
            <div class="right"></div>
          </template>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="讨论"> </el-tab-pane>
      <el-tab-pane label="专栏">专栏</el-tab-pane>
      <el-tab-pane label="求助">求助</el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped lang="scss">
.search-detail {
  width: 80vw;
  margin: 20px auto;

  .el-icon {
    cursor: pointer;
  }
}
</style>
