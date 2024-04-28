<template>
  <!-- 注意：标签与专栏不是一回事，当用户发布产品体会的时候，都会让其添加对应的标签 -->
  <!-- 而专栏：是用户自己创建的一个分享产品文章的地方，属于一个富文本区 -->
  <div id="anchors" class="community-tags">
    <div class="header">
      <h3 class="title">标签</h3>
      <p class="desc">快来寻找你喜欢的生活标签和生活专栏吧</p>
    </div>
    <div class="search">
      <el-input v-model="searchText" placeholder="搜索标签">
        <template #append>
          <el-button @click="handleSearchTags">
            <el-icon><Search /></el-icon>
          </el-button>
        </template>
      </el-input>
      <div class="btn">
        <filter-button></filter-button>
      </div>
    </div>
    <div class="main">
      <div class="main--tags">
        <template v-for="item in exchangeCommunityStore.currentTags" :key="item">
          <tag-item :tag-info="item"></tag-item>
        </template>
        <div style="width: 280px; margin: 20px"></div>
      </div>
      <div class="main-page">
        <el-pagination
          @current-change="changeCount"
          :page-count="pageSize"
          background
          layout="prev, pager, next"
          :total="total"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import filterButton from './components/filter-button/index.vue'
import tagItem from './components/tag-item/index.vue'
import { useExchangeCommunityStore } from '@/stores/modules/ExchangeCommunity/index.js'
import { getLocalStorage } from '@/utils/index.js'

const exchangeCommunityStore = useExchangeCommunityStore()

let flag = ref(1) // 标识
// 标签分页
let total = ref(0)
let pageSize = ref(12)
const changeCount = (currentPage) => {
  console.log(currentPage)
  if (flag.value === 1) {
    exchangeCommunityStore.handleViewAllTagsApi(12, currentPage)
  } else {
    console.log(flag)
    exchangeCommunityStore.handleSearchTagsApi(searchText.value, 12, currentPage)
  }
}

onMounted(() => {
  exchangeCommunityStore.handleViewAllTagsApi()
  pageSize.value = getLocalStorage('pageTotal') // 通过 pinia 拿到之后 这个值为 null 暂时这样处理
})

// 模糊搜索分页
const searchText = ref('')
const handleSearchTags = () => {
  flag.value = 2
  exchangeCommunityStore.handleSearchTagsApi(searchText.value, 12, 1).then(() => {
    pageSize.value = getLocalStorage('pageTotal') // 通过 pinia 拿到之后 这个值为 null 暂时这样处理
  })
}

watch(searchText, (newValue) => {
  if (newValue === '') {
    exchangeCommunityStore.handleViewAllTagsApi().then(() => {
      pageSize.value = getLocalStorage('pageTotal') // 通过 pinia 拿到之后 这个值为 null 暂时这样处理
    })
    flag.value = 1
  }
})
</script>

<style lang="scss" scoped>
.community-tags {
  .header {
    .title {
      margin-bottom: 10px;
    }

    .desc {
      color: #aaaaaa;
      font-size: 12px;
    }
  }

  .search {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;

    .el-input {
      width: 220px;
    }
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;

    .main--tags {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto; // 盒子内容水平居中
      align-content: flex-start; // 解决换行后盒子垂直间距问题
      //justify-content: center;
    }

    .main-page {
      margin-top: 50px;
    }
  }
}
</style>
