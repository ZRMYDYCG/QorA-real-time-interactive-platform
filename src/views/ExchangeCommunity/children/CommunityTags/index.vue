<template>
  <!-- 注意：标签与专栏不是一回事，当用户发布产品体会的时候，都会让其添加对应的标签 -->
  <!-- 而专栏：是用户自己创建的一个分享产品文章的地方，属于一个富文本区 -->
  <div class="community-tags">
    <div class="header">
      <h3 class="title">标签</h3>
      <p class="desc">快来寻找你喜欢的生活标签和生活专栏吧</p>
    </div>
    <div class="search">
      <el-input placeholder="搜索标签"></el-input>
      <div class="btn">
        <filter-button></filter-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import filterButton from './components/filter-button/index.vue'
</script>

<style lang="scss" scoped>
.community-tags {
  .header {
    .title {
      margin-bottom: 10px;
    }

    .desc {
      color: #aaaaaa;
      font-size: 12px;
    }
  }

  .search {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;

    .el-input {
      width: 220px;
    }
  }
}
</style>
