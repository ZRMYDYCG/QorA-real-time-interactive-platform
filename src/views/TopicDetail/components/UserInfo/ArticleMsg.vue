<script setup>
import { defineProps } from 'vue'
defineProps({
  size: {
    type: Number,
    default: 15
  }
})
</script>
<template>
  <link rel="stylesheet" href="//at.alicdn.com/t/c/font_4498745_c7sso7xf1q.css" />
  <div class="relate-article" :style="{ fontSize: size + 'px' }">
    <div class="likes">
      <i class="iconfont icon-like_fill" :style="{ fontSize: size + 1 + 'px' }"></i>
      <span>120</span>
    </div>
    <div class="comment">
      <i class="iconfont icon-comments" :style="{ fontSize: size + 1 + 'px' }"></i>
      <span>199</span>
    </div>
    <div class="collect">
      <i class="iconfont icon-collection_fill" :style="{ fontSize: size + 3 + 'px' }"></i>
      <span>20</span>
    </div>
    <div class="views">
      <i class="iconfont icon-view-show" :style="{ fontSize: size + 3 + 'px' }"></i>
      <span>1220</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.relate-article {
  display: flex;
  justify-content: space-around;
  height: 35px;
  .likes,
  .comment,
  .collect,
  .views {
    display: flex;
    align-items: center;
    margin-top: 15px;
    .iconfont {
      color: #999;
    }
    span {
      margin-left: 10px;
      margin-right: 12px;
    }
  }
}
</style>
