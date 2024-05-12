<script setup>
import { onMounted, ref } from 'vue'
import { getLocalStorage } from '@/utils/index.js'
import { addToDefaultCollect } from '@/service/public/index.js'
import { useRoute } from 'vue-router'
const route = useRoute()
// 收藏失活 https://pic.imgdb.cn/item/662272f10ea9cb1403bfb26a.png
// 收藏激活 https://pic.imgdb.cn/item/662273060ea9cb1403bfd8c8.png

defineProps({
  size: {
    type: Number,
    default: 15
  },
  like: {
    type: Number,
    default: 0
  },
  comementNum: {
    type: Number,
    default: 0
  },
  collect: {
    type: Number,
    default: 0
  },
  seeNum: {
    type: Number,
    default: 0
  }
})

defineEmits(['updateArticle'])

// 查询用户是否收藏该文章
let isCollect = ref(false)
onMounted(async () => {
  let user_id = await getLocalStorage('userInfo')?.value?.user_id

  // isCollectItem(route.params.id, 'dynamic', user_id).then((res) => {
  //   console.log('用户是否收藏', res)
  // })

  fetch('http://127.0.0.1:5000/api/search/favorite', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ object_id: route.params.id, object_type: 'dynamic', user_id: user_id })
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('是否收藏:', data)
      if (data.message === '未收藏') {
        isCollect.value = true
      } else {
        isCollect.value = false
      }
    })
    .catch((error) => console.error('Error:', error))
})

// 添加收藏夹
const handleAddToDefaultCollect = async () => {
  let id = await getLocalStorage('userInfo')?.value?.user_id
  let type = isCollect.value ? 'less' : 'add'

  await addToDefaultCollect(id, route.params.id, 'dynamic', type).then((res) => {
    console.log(res)
  })
}
</script>
<template>
  <link rel="stylesheet" href="//at.alicdn.com/t/c/font_4498745_c7sso7xf1q.css" />
  <div class="relate-article" :style="{ fontSize: size + 'px' }">
    <div class="likes">
      <!-- <i class="iconfont icon-like_fill" :style="{ fontSize: size + 1 + 'px' }"></i> -->
      <img class="w-6" src="https://pic.imgdb.cn/item/662272270ea9cb1403be0c8f.png" alt="#" />
      <span>{{ like }}</span>
    </div>
    <div class="comment">
      <!-- <i class="iconfont icon-comments" :style="{ fontSize: size + 1 + 'px' }"></i> -->
      <img class="w-6" src="https://pic.imgdb.cn/item/662273300ea9cb1403c02a59.png" alt="#" />
      <span>{{ comementNum }}</span>
    </div>
    <div class="collect">
      <!-- <i class="iconfont icon-collection_fill" :style="{ fontSize: size + 3 + 'px' }"></i> -->
      <img
        class="w-6"
        @click="handleAddToDefaultCollect"
        :src="
          isCollect
            ? 'https://pic.imgdb.cn/item/662272f10ea9cb1403bfb26a.png'
            : 'https://pic.imgdb.cn/item/662273060ea9cb1403bfd8c8.png'
        "
        alt="#"
      />
      <span>{{ collect }}</span>
    </div>
    <div class="views">
      <i class="iconfont icon-view-show" :style="{ fontSize: size + 3 + 'px' }"></i>
      <span>{{ seeNum }}</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.relate-article {
  display: flex;
  justify-content: space-around;
  height: 35px;
  .likes,
  .comment,
  .collect,
  .views {
    display: flex;
    align-items: center;
    margin-top: 15px;
    .iconfont {
      color: #999;
    }
    span {
      margin-left: 10px;
      margin-right: 12px;
    }

    img {
      cursor: pointer;
    }
  }
}
</style>
