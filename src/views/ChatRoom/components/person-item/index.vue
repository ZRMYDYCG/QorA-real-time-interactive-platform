<script setup></script>

<template>
  <div class="person-item">
    <div class="item-left">
      <img src="https://pic1.zhimg.com/v2-da5ff9fb7766a97d036c155b07b60ef8_b.jpg" alt="" />
    </div>
    <div class="item-right">
      <div class="nickName">一小池勺</div>
      <div class="con">你在吗？你在吗？你在吗？</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.person-item {
  //background-color: deeppink;
  padding: 10px 0;
  display: flex;
  margin: 0 auto;

  &:hover {
    background-color: #eeeeee;
  }

  .item-left {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 13px;
    margin-left: 10px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .item-right {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .nickName {
      margin-top: -3px;
    }

    .con {
      margin-top: 10px;
      font-weight: 100;
      font-size: 12px;
    }
  }
}
</style>
