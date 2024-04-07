<script setup></script>

<template>
  <div class="container">
    <div class="left-bar"></div>
    <div class="main-content"></div>
    <div class="right-bar"></div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: row;
  height: calc(100vh - 60px);
  transition: all 0.3s ease; /* 添加过渡效果 */
  overflow: hidden;
  border: 1px solid var(--ys-container-border-color);
}

.left-bar,
.right-bar {
  transition: all 0.3s ease; /* 添加过渡效果 */
  opacity: 1;
  transform: scale(1);
}

.left-bar {
  flex: 0 0 200px; /* 固定左栏的宽度 */
  background-color: var(--ys-bar-bg-color);
  border-right: 1px solid var(--ys-bar-border-color);
  padding: 20px;
  overflow-y: auto;
}

.main-content {
  flex: 1; /* 占据剩余空间 */
  background-color: var(--ys-bar-bg-color);
  padding: 20px;
  overflow-x: hidden; /* 隐藏水平滚动条 */
  -ms-overflow-style: none; /* IE和Edge隐藏滚动条 */
  scrollbar-width: none; /* Firefox隐藏滚动条 */
}

.right-bar {
  flex: 0 0 200px; /* 固定右栏的宽度 */
  background-color: var(--ys-bar-bg-color);
  border-left: 1px solid var(--ys-bar-border-color);
  color: #333;
  padding: 20px;
  overflow-y: auto;
}

@media (max-width: 1024px) {
  .left-bar {
    flex: 0 0 0; /* 左栏宽度设置为0 */
    opacity: 0; /* 设置透明度为0，实现淡出效果 */
    transform: scale(0); /* 缩小至屏幕外 */
    display: block; /* 保持元素在DOM中，但不可见 */
    padding: 0;
  }

  .right-bar {
    flex: 0 0 150px; /* 适当减少右栏的宽度 */
  }
}

@media (max-width: 760px) {
  .right-bar {
    flex: 0 0 0; /* 右栏宽度设置为0 */
    opacity: 0; /* 设置透明度为0，实现淡出效果 */
    transform: scale(0); /* 缩小至屏幕外 */
    display: block;
    padding: 0;
  }
}
</style>
