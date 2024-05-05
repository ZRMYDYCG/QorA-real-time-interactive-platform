<script setup>
import { ref } from 'vue'
import { fetchBookShelfDetail } from '@/service/UserHome/index.js'

defineProps({
  itemDataList: {
    type: Array,
    default: () => []
  }
})

// TODO:渲染某个书架的详情
let drawerVisible = ref(false)
let drawerName = ref('')
let drawBookShelfDetail = ref({})
const handleFetchBookShelfDetailApi = (value) => {
  console.log(value.bookshelf_id)
  drawerName.value = value
  drawerVisible.value = true
  fetchBookShelfDetail(value.bookshelf_id).then((res) => {
    console.log('书架详情:', res)
    drawBookShelfDetail.value = res.data.dynamic_list
  })
}
</script>

<template>
  <template v-for="(item, index) in itemDataList" :key="index">
    <el-card>
      <template #default>
        <div class="column--left">
          <img src="https://pic.imgdb.cn/item/6637045b0ea9cb1403254595.png" alt="#" />
        </div>
        <div class="column--right">
          <div class="l">
            <div class="l__name">
              <h3 class="nickname" @click="handleFetchBookShelfDetailApi(item)">
                {{ item?.bookshelf_title }}
              </h3>
            </div>
            <div class="l__desc">{{ item?.bookshelf_time }}</div>
            <el-tag style="margin-right: 5px">浏览 {{ item.review_count }}</el-tag>
            <el-tag>喜欢 {{ item.like_count }}</el-tag>
          </div>
        </div>
        <div class="btn">
          <el-button>订阅 • SSR</el-button>
        </div>
      </template>
    </el-card>
  </template>

  <!-- 书架抽屉 -->
  <el-drawer v-model="drawerVisible" :direction="direction">
    <template #header>
      <h4 style="font-size: 28px">{{ drawerName.bookshelf_title }}</h4>
    </template>
    <template #default>
      <div class="empty" v-if="drawBookShelfDetail.length === 0">
        <img src="https://pic.imgdb.cn/item/663709000ea9cb14032f7190.png" alt="" />
        <div>书架空空如也</div>
      </div>
      <div v-else>
        <template v-for="(item, index) in drawBookShelfDetail" :key="index">
          <div class="main" style="margin-bottom: 10px">
            <div class="main-left">
              <img :src="item.auth_pic" alt="" />
            </div>
            <div
              class="main-right"
              style="margin-left: 20px"
              @click="$router.push(`/topicDetail/${item.dynamic_id}`)"
            >
              <div>
                <h3>{{ item.dynamic_title }}</h3>
                <div style="color: #ccc; font-size: 13px; padding: 5px 0" class="time">
                  {{ item.dynamic_time }}
                </div>
                <div v-text="item.dynamic_text.slice(0, 40) + '...'"></div>
              </div>
              <div>
                <div class="tag-list" style="margin-top: 5px">
                  <el-tag
                    style="margin-right: 4px"
                    v-for="(item, index) in item.tag_list"
                    :key="index"
                    >生活</el-tag
                  >
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button type="wrang" @click="drawerVisible = false">关闭</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<style scoped lang="scss">
.el-card {
  :deep(.el-card__body) {
    display: flex;
    width: 100%;
    padding: 20px 0;
    align-items: center;

    .column--left {
      width: 70px;
      height: 70px;
      border-radius: 8px;
      overflow: hidden;
      margin-left: 20px;
      margin-right: 20px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .column--right {
      display: flex;
      flex: 1;

      .l {
        .l__desc {
          padding: 10px 2px;
          color: #aaaaaa;
        }

        .l__name {
          display: flex;
          align-items: center;
          cursor: pointer;

          .nickname {
            color: var(--ys-userHome-font-color);
          }

          .level {
            margin-left: 10px;
            display: block;
            font-size: 12px;
            font-weight: 100;
            color: #dcc19c;
            width: 30px;
            height: 18px;
            background-color: #f5f8f9;
            text-align: center;
            line-height: 18px;
            border-radius: 9px;
          }
        }
      }
    }

    .btn {
      margin-right: 20px;
    }
  }
}
</style>

<style lang="scss">
.el-drawer__header {
  border-bottom: 1px solid;
  padding-bottom: 30px;
}

.empty {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  img {
    margin: 100px auto;
    width: 300px;
  }
}
</style>
