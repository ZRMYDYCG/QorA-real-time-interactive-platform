<script setup>
import { useExchangeCommunityStore } from '@/stores/modules/ExchangeCommunity/index.js'

const exchangeCommunityStore = useExchangeCommunityStore()

const handleShowDialog = () => {
  exchangeCommunityStore.openDrawer()
}
</script>

<template>
  <div class="message-item" @click="handleShowDialog">
    <div class="left">
      <img
        class="user-pic"
        src="https://pic3.zhimg.com/v2-ca5361dcbf2bdbc37fdbbfe16b5fe96e_b.jpg"
        alt=""
      />
    </div>
    <div class="right">
      <div class="right--top">可目十</div>
      <div class="right--content">你最近有空吗，我想和你约会，如果没空的话就算了。</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.message-item {
  display: flex;
  padding: 10px 15px;

  &:hover {
    background-color: #eeeeee;
  }

  .left {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    overflow: hidden;
    margin-right: 15px;

    .user-pic {
      width: 100%;
      height: 100%;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .right--top {
      font-weight: 500;
      font-size: 17px;
    }

    .right--content {
      font-size: 13px;
    }
  }
}
</style>
