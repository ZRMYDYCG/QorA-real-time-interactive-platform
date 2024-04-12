<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: Number,
  default: () => 0
})

const justifyContentType = computed(() => {
  return props.type ? 'flex-start' : 'flex-end'
})
</script>

<template>
  <!-- 用于承载用户与其它用户发布的消息 -->
  <div class="message-item">
    <template v-if="type">
      <div class="avatar--pic--counterpart">
        <img
          src="https://th.bing.com/th/id/R.c24f10a1bd6c8526b38d87710b76f0da?rik=mmS1xiaO2yGV7w&riu=http%3a%2f%2fimg.keaiming.com%2fuploads%2fallimg%2f2020052714%2fnr1qlenihch.jpeg&ehk=fWVqWHc%2fQP8afyWZpsD%2fCe7mIpiz1axlnbtlIY9KuRo%3d&risl=&pid=ImgRaw&r=0"
        />
      </div>
      <div class="avatar--text--counterpart">
        小强感谢优秀的你关注了平凡的我，让我们一起努力吃胖。
      </div>
    </template>
    <template v-else>
      <div class="avatar--text--you">小强感谢优秀的你关注了平凡的我，让我们一起努力吃胖。</div>
      <div class="avatar--pic--you">
        <img
          src="https://th.bing.com/th/id/R.c24f10a1bd6c8526b38d87710b76f0da?rik=mmS1xiaO2yGV7w&riu=http%3a%2f%2fimg.keaiming.com%2fuploads%2fallimg%2f2020052714%2fnr1qlenihch.jpeg&ehk=fWVqWHc%2fQP8afyWZpsD%2fCe7mIpiz1axlnbtlIY9KuRo%3d&risl=&pid=ImgRaw&r=0"
        />
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.message-item {
  display: flex;
  align-content: flex-start;
  justify-content: v-bind(justifyContentType);
  margin: 20px 0;

  .avatar--pic--counterpart {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 15px;

    img {
      height: 100%;
      width: 100%;
    }
  }

  .avatar--text--counterpart {
    width: 320px;
    padding: 10px;
    border-radius: 10px;
    background-color: #fff;
  }

  .avatar--text--you {
    width: 320px;
    padding: 10px;
    border-radius: 10px;
    background-color: #fff;
  }

  .avatar--pic--you {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-left: 15px;

    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
