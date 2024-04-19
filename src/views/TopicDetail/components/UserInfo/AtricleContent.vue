<template>
  <div class="right-text">
    <span class="title">我是标题哦标题</span>
    <span class="content">
      我是占位文本我是占位文本我是占位文本我是占位文本我是占位文本我是占位文本我是占位文本
      我是占位文本我是占位文本我是占位文本我是占位文本我是占位文本我是占位文本我是占位文本
    </span>
  </div>
</template>
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
