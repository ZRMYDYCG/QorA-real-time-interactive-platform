<script setup>
import { fetchPersonalHomepageApi } from '@/service/UserHome/index'
import { ref, watch } from 'vue'
const props = defineProps({
  itemData: {
    type: Object,
    default: () => {}
  }
})

console.log(props)
let user_name = ref('')
let user_pic = ref('')
watch(
  props.itemData,
  () => {
    fetchPersonalHomepageApi(props.itemData?.discord_reception).then((res) => {
      console.log('监视聊天列表的用户信息:', res)
      user_name.value = res.data.user_now.user_name
      user_pic.value = res.data.user_now.user_pic
    })
  },
  { deep: true, immediate: true }
)
</script>

<template>
  <div
    class="person-item"
    @click="$router.push(`/chatRoom/chatDetail/${itemData.discord_reception}`)"
  >
    <div class="item-left" v-if="itemData.user_pic !== ''">
      <img v-if="itemData.user_pic !== ''" :src="user_pic" alt="" />
    </div>
    <div class="item-right">
      <div class="nickName">{{ user_name }}</div>
      <div class="con">{{ itemData.discord_text }}</div>
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
