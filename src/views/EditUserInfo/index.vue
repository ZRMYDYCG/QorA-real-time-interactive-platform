<script setup>
import UserInfoForm from '@/components/function/EditUserInfo/UserInfoForm.vue'
</script>

<template>
  <div class="edit-user-info">
    <h3 class="title">编辑信息</h3>
    <div class="content">
      <div class="userInfo-form">
        <user-info-form></user-info-form>
      </div>
      <div class="userInfo-avatarPic"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.edit-user-info {
  .title {
    margin-bottom: 20px;
  }
}
</style>
