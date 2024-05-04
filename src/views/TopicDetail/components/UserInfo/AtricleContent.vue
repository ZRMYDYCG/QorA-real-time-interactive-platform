<template>
  <div class="right-text">
    <span class="title">{{ itemDetail.dynamic_title }}</span>
    <span class="content" v-html="itemDetail.dynamic_text"> </span>
  </div>
</template>

<script setup>
defineProps({
  itemDetail: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="scss" scoped>
.right-text {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 85px;
  cursor: pointer;
  flex: 1;
  margin-left: 10px;
  .title {
    font-size: 15px;
    font-weight: 550;
  }

  .content {
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    transition: all 0.3s linear;
    &:hover {
      color: #925ff8;
    }
  }
}
</style>
