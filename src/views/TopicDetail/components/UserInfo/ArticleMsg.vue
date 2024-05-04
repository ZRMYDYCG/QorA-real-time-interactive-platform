<script setup>
defineProps({
  size: {
    type: Number,
    default: 15
  },
  like: {
    type: Number,
    default: 0
  },
  comementNum: {
    type: Number,
    default: 0
  },
  collect: {
    type: Number,
    default: 0
  },
  seeNum: {
    type: Number,
    default: 0
  }
})

defineEmits(['updateArticle'])
</script>
<template>
  <link rel="stylesheet" href="//at.alicdn.com/t/c/font_4498745_c7sso7xf1q.css" />
  <div class="relate-article" :style="{ fontSize: size + 'px' }">
    <div class="likes">
      <!-- <i class="iconfont icon-like_fill" :style="{ fontSize: size + 1 + 'px' }"></i> -->
      <img class="w-6" src="https://pic.imgdb.cn/item/662272270ea9cb1403be0c8f.png" alt="#" />
      <span>{{ like }}</span>
    </div>
    <div class="comment">
      <!-- <i class="iconfont icon-comments" :style="{ fontSize: size + 1 + 'px' }"></i> -->
      <img class="w-6" src="https://pic.imgdb.cn/item/662273300ea9cb1403c02a59.png" alt="#" />
      <span>{{ comementNum }}</span>
    </div>
    <div class="collect">
      <!-- <i class="iconfont icon-collection_fill" :style="{ fontSize: size + 3 + 'px' }"></i> -->
      <img class="w-6" src="https://pic.imgdb.cn/item/662272f10ea9cb1403bfb26a.png" alt="#" />
      <span>{{ collect }}</span>
    </div>
    <div class="views">
      <i class="iconfont icon-view-show" :style="{ fontSize: size + 3 + 'px' }"></i>
      <span>{{ seeNum }}</span>
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
