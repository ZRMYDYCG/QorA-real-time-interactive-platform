<script setup>
import { watch, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSocketStore } from '@/stores/modules/ChartRoom/index.js'
import { fetchPersonalHomepageApi } from '@/service/UserHome/index.js'
const props = defineProps({
  itemData: {
    type: Object,
    default: () => {}
  }
})
const router = useRouter()
const socketStore = useSocketStore()
const toChatWindow = async () => {
  socketStore.chatUserMessageList(props.itemData?.fans_id)
  await router.push(`/chatRoom/chatDetail/${props.itemData?.fans_id}`)
}

let user_name = ref('')
watch(
  props.itemData,
  () => {
    fetchPersonalHomepageApi(props.itemData?.fans_id).then((res) => {
      console.log('监视聊天列表的用户信息:', res)
      user_name.value = res.data.user_now.user_name
    })
  },
  { deep: true, immediate: true }
)
</script>

<template>
  <div class="contact-item">
    <el-menu-item @click="toChatWindow">
      <div class="contact-item">
        <img class="user-pic" :src="itemData?.picture" alt="" />
        <div class="item-right">
          <span class="nickName">{{ user_name }}</span>
        </div>
        <div class="icon">
          <el-icon>
            <Promotion />
          </el-icon>
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
  position: relative;
  align-items: center;
  width: 100%;
  background-color: transparent;
  border-bottom: 1px solid #eeeeee;
  border-top: 1px solid #eeeeee;

  &:hover {
    background-color: #eeeeee;
  }

  .user-pic {
    position: relative;
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

  .icon {
    position: absolute;
    right: -160px;

    &:hover {
      scale: (1.1);
    }
  }
}
</style>
