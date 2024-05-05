<script setup>
import { ref, onMounted } from 'vue'
import {
  searchUserApi,
  searchBookShelfApi,
  searchQuestionApi,
  searchDynamicApi
} from '@/service/searchDetail/index.js'
import SearchUser from './components/SearchUser/index.vue'
import SearchColumn from './components/SearchColumn/index.vue'
import SearchDiscuss from './components/SearchDiscuss/index.vue'
import SearchSeek from './components/SearchSeek/index.vue'
import SearchAll from './components/SearchAll/index.vue'
import SliderRecommendCard from './base/slider-recommend-card/index.vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const handleTabChange = (name) => {
  console.log(name)
}

const userList = ref([])
const bookShelfList = ref([])
const questionList = ref([])
const dynamicList = ref([])

onMounted(async () => {
  let searchContent = route.query.keyword
  console.log('搜索记录', searchContent)

  const res1 = await searchUserApi(searchContent)
  const res2 = await searchBookShelfApi(searchContent)
  const res3 = await searchQuestionApi(searchContent)
  const res4 = await searchDynamicApi(searchContent)

  console.log('用户:', res1)
  userList.value = res1.data.user_data

  console.log('书架:', res2)
  bookShelfList.value = res2.data.bookshelf_data

  console.log('问题', res3)
  questionList.value = res3.data.question_data

  console.log('文章:', res4)
  dynamicList.value = res4.data.dynamics_data
})
</script>

<template>
  <div class="search-detail">
    <div class="detail--left">
      <el-tabs tab-position="top" @tab-change="handleTabChange">
        <el-tab-pane label="文章">
          <SearchAll :itemList="dynamicList"></SearchAll>
        </el-tab-pane>
        <el-tab-pane label="用户">
          <template v-for="(item, index) in userList" :key="index">
            <search-user :itemData="item"></search-user>
          </template>
        </el-tab-pane>
        <el-tab-pane label="讨论">
          <SearchDiscuss></SearchDiscuss>
        </el-tab-pane>
        <el-tab-pane label="专栏">
          <SearchColumn :itemDataList="bookShelfList"></SearchColumn>
        </el-tab-pane>
        <el-tab-pane label="求助">
          <SearchSeek></SearchSeek>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="detail--right">
      <div class="user">
        <SliderRecommendCard :data="userList" title="体验官推荐">
          <template #headerRight>
            <span>换一批推荐官</span>
            <el-icon>
              <Refresh />
            </el-icon>
          </template>
          <template #default="slotProps">
            <SearchUser v-for="item in slotProps"></SearchUser>
          </template>
        </SliderRecommendCard>
      </div>

      <div class="topic">
        <SliderRecommendCard :data="userList" title="猜你感兴趣">
          <template #default="slotProps">
            <SearchColumn v-for="item in slotProps"></SearchColumn>
          </template>
        </SliderRecommendCard>
      </div>

      <div class="seek">
        <SliderRecommendCard title="发现好问题"></SliderRecommendCard>
      </div>

      <div class="column">
        <SliderRecommendCard title="专栏推荐"></SliderRecommendCard>
      </div>
    </div>
    <el-backtop :right="100" :bottom="100" />
  </div>
</template>

<style scoped lang="scss">
.search-detail {
  width: 80vw;
  margin: 20px auto;
  display: flex;

  .detail--left {
    flex: 8;
  }

  .detail--right {
    flex: 2;
    height: 100px;
    margin-top: 40px;
    margin-left: 30px;
    white-space: nowrap;

    .user {
      margin-bottom: 30px;

      span {
        padding-right: 10px;
        font-weight: 100;
        font-size: 12px;
      }
    }

    .topic {
      margin-bottom: 30px;
    }

    .seek {
      margin-bottom: 30px;
    }
  }

  .infinite-list {
    height: 100vh;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .infinite-list .infinite-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: var(--el-color-primary-light-9);
    margin: 10px;
    color: var(--el-color-primary);
  }

  .infinite-list .infinite-list-item + .list-item {
    margin-top: 10px;
  }
}

@media (max-width: 768px) {
  .detail--right {
    display: none;
  }
  .detail--left {
    flex: 8;
  }
}
</style>
