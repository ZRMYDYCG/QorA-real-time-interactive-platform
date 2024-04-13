<script setup></script>

<template>
  <div class="contact-item">
    <el-menu-item>
      <div class="contact-item">
        <img
          class="user-pic"
          src="https://pic4.zhimg.com/v2-a5a7764bd68b23c65aecd923b275128f_r.jpg"
          alt=""
        />
        <div class="item-right">
          <span class="nickName">小明</span>
        </div>
      </div>
    </el-menu-item>
  </div>
</template>

<style scoped lang="scss">
.el-menu-item {
  --el-menu-level-padding: 5px;
  background-color: transparent;
}

.contact-item {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: transparent;
  border-bottom: 1px solid #eeeeee;
  border-top: 1px solid #eeeeee;

  &:hover {
    background-color: #eeeeee;
  }

  .user-pic {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 10px;
    margin-top: 3px;
  }

  .item-right {
    .nickName {
      font-weight: 100;
      margin-top: -15px;
    }
  }
}
</style>
