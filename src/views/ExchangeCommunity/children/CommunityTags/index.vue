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
    <div class="main">
      <div class="main--tags">
        <tag-item
          :tagInfo="{
            tagName: '茶具',
            total: 234,
            content:
              '今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗'
          }"
        ></tag-item>
        <tag-item
          :tagInfo="{
            tagName: '茶具',
            total: 234,
            content:
              '今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗'
          }"
        ></tag-item>
        <tag-item
          :tagInfo="{
            tagName: '茶具',
            total: 234,
            content:
              '今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗'
          }"
        ></tag-item>
        <tag-item
          :tagInfo="{
            tagName: '茶具',
            total: 234,
            content:
              '今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗'
          }"
        ></tag-item>
        <tag-item
          :tagInfo="{
            tagName: '茶具',
            total: 234,
            content:
              '今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗'
          }"
        ></tag-item>
        <tag-item
          :tagInfo="{
            tagName: '茶具',
            total: 234,
            content:
              '今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗'
          }"
        ></tag-item>
        <tag-item
          :tagInfo="{
            tagName: '茶具',
            total: 234,
            content:
              '今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗'
          }"
        ></tag-item>
        <tag-item
          :tagInfo="{
            tagName: '茶具',
            total: 234,
            content:
              '今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗'
          }"
        ></tag-item>
        <tag-item
          :tagInfo="{
            tagName: '茶具',
            total: 234,
            content:
              '今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗'
          }"
        ></tag-item>
        <tag-item
          :tagInfo="{
            tagName: '茶具',
            total: 234,
            content:
              '今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗'
          }"
        ></tag-item>
        <tag-item
          :tagInfo="{
            tagName: '茶具',
            total: 234,
            content:
              '今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗,今天你喝茶了吗'
          }"
        ></tag-item>
        <div style="width: 280px; margin: 20px"></div>
      </div>
      <div class="main-page">
        <el-pagination background layout="prev, pager, next" :total="1000" />
      </div>
    </div>
  </div>
</template>

<script setup>
import filterButton from './components/filter-button/index.vue'
import tagItem from './components/tag-item/index.vue'
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

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;

    .main--tags {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto; // 盒子内容水平居中
      align-content: flex-start; // 解决换行后盒子垂直间距问题
      justify-content: center;
    }
  }
}
</style>
