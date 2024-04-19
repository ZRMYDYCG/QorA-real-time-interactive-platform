<script setup>
import { ref } from 'vue'

const activeNames = ref(['1'])
const handleChange = (val) => {
  console.log(val)
}
</script>

<template>
  <div class="user-home-collection">
    <el-button size="small">管理收藏夹</el-button>
    <el-collapse v-model="activeNames" @change="handleChange">
      <!--   收藏夹标题   -->
      <el-collapse-item title="旅行" name="1">
        <!--    收藏夹内容    -->
        <template v-for="item in 10">
          <div class="collection-item">
            <el-tag>体验分享</el-tag>
            <div class="title">为什么超威电池会更加好用呢？</div>
          </div>
        </template>
      </el-collapse-item>
      <el-collapse-item title="模型" name="2"></el-collapse-item>
      <el-collapse-item title="电器" name="3"></el-collapse-item>
      <el-collapse-item title="美食" name="4"></el-collapse-item>
    </el-collapse>
  </div>
</template>

<style scoped lang="scss">
.user-home-collection {
  .el-button {
    margin-bottom: 20px;
  }

  .collection-item {
    display: flex;
    align-items: center;
    padding: 10px 10px;

    .el-tag {
      margin-right: 15px;
    }
  }
}
</style>

<style>
.el-collapse-item__header {
  padding: 10px;
}
</style>
