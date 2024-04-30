<script setup>
import { ref } from 'vue'
import DynamicCard from '@/components/function/userHomeDynamic/dynamic-card.vue'
import { onMounted } from 'vue'
import { publicFetch, publicDelete } from '@/service/public/index.js'
import { useRoute } from 'vue-router'
const route = useRoute()

// TODO:渲染该用户的所有的文章
const fetchAllData = async () => {
  let user_id = route.query.user_id
  const res = await publicFetch(user_id, 'dynamic')
  console.log(res)
}

// 删除某一篇文章
// id 为传过来的文章 id
const actionClick = (value, id) => {
  console.log(value, id) // 删除 编辑
  if (value === '删除') {
    publicDelete('dynamic', id)
    fetchAllData()
  } else if (value === '编辑') {
    console.log('还在开发中')
  }
}
onMounted(() => {
  fetchAllData()
})
</script>

<template>
  <div class="user-home-dynamic">
    <dynamic-card @action-click="actionClick"></dynamic-card>
  </div>
</template>

<style scoped lang="scss"></style>
