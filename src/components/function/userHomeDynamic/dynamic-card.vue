<script setup>
// 点赞失活 https://pic.imgdb.cn/item/662272270ea9cb1403be0c8f.png
// 点赞激活 https://pic.imgdb.cn/item/662272a80ea9cb1403bf08b0.png

// 收藏失活 https://pic.imgdb.cn/item/662272f10ea9cb1403bfb26a.png
// 收藏激活 https://pic.imgdb.cn/item/662273060ea9cb1403bfd8c8.png

// 评论 https://pic.imgdb.cn/item/662273300ea9cb1403c02a59.png
import { ref } from 'vue'
import { useUserHomeStore } from '@/stores/modules/UserHome/index.js'
import YsImagePreview from '@/components/base/ys-imge-preview/src/ys-image-preview.vue'
const userHomeStore = useUserHomeStore()

const YsImagePreviewRef = ref()
const openPreview = (image) => {
  YsImagePreviewRef.value.openModal(image)
}

const emit = defineEmits(['action-click'])
defineProps({
  dynamic_title: {
    type: String,
    default: ''
  },
  dynamic_time: {
    type: String,
    default: ''
  },
  avatar: {
    type: String,
    default: ''
  },
  action: {
    type: Array,
    default: () => ['编辑', '删除']
  },
  hasImages: {
    type: Array,
    default: () => [

    ]
  },
  like_count: {
    type: Number,
    default: 0
  },
  collect_count: {
    type: Number,
    default: 0
  },
  review_count: {
    type: Number,
    default: 0
  },
  dynamic_text: {
    type: String,
    default: () => ''
  }
})
// 处理操作菜单的点击事件
const handleActionClick = (actionType, id) => {
  // 调用emit发出事件
  emit('action-click', actionType, id)
}
</script>

<template>
  <el-card style="min-width: 780px">
    <!-- 插槽用于自定义头部内容 -->
    <slot name="header">
      <div class="header-content">
        <div class="header-content--left">
          <img :src="userHomeStore.userHomeInfoDetail.user_pic" class="avatar" />
          <div class="info">
            <span class="title">{{ dynamic_title }}</span>
            <span class="time">{{ dynamic_time.replace(/\s*GMT/, '') }}</span>
          </div>
        </div>
        <div class="header-content--right">
          <!-- 操作菜单 -->
          <el-dropdown trigger="click" class="options-dropdown">
            <el-icon>
              <More />
            </el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  v-for="(item, index) in action"
                  :key="index"
                  @click="handleActionClick(item, 1)"
                >
                  {{ item }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </slot>

    <!-- 主要内容区域 -->
    <div class="card-content">
      <!-- 动态文本 -->
      <div class="text-content" v-html="dynamic_text">
      </div>

      <!-- 九宫格图片展示 -->
      <div class="images-grid" v-if="hasImages.length">
        <div class="image-item" v-for="(image, index) in hasImages" :key="index">
          <img @click="openPreview(image)" :src="image" alt="" />
        </div>
      </div>
      <!--   预览图  -->
      <YsImagePreview ref="YsImagePreviewRef"></YsImagePreview>
    </div>
    <!--  标签  -->
    <div class="tag">
      <el-tag>生活</el-tag>
      <el-tag>景点</el-tag>
      <el-tag>旅行</el-tag>
    </div>
    <!-- 底部信息区域 -->
    <div class="card-footer">
      <!-- 点赞、分享、评论计数 -->
      <div class="counts">
        <span class="count like-count">
          <img src="https://pic.imgdb.cn/item/662272270ea9cb1403be0c8f.png" alt="" />
          {{ like_count }}
        </span>
        <span class="count share-count">
          <img src="https://pic.imgdb.cn/item/662272f10ea9cb1403bfb26a.png" alt="" />
          {{ collect_count }}
        </span>
        <span class="count comment-count">
          <img src="https://pic.imgdb.cn/item/662273300ea9cb1403c02a59.png" alt="" />
          {{ review_count }}
        </span>
      </div>
    </div>
  </el-card>
</template>

<style scoped lang="scss">
.el-card {
  border-radius: 10px;
  margin-bottom: 20px;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header-content--left {
    display: flex;
    align-items: center;

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }

    .info {
      display: flex;
      flex-direction: column;

      .title {
        font-weight: bold;
        margin-bottom: 8px;
      }

      .time {
        font-size: 0.8rem;
        color: gray;
      }
    }
  }
}

.card-content {
  padding: 30px;
}

.text-content {
  font-weight: 200;
  margin-bottom: 30px;
}

.images-grid {
  display: grid;
  grid-template-columns: repeat(3, 150px); /* 固定三列网格布局，每列宽度为120px */
  gap: 10px; /* 网格项之间的空间为10 */
}

.image-item {
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 10px;
}

.image-item img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 图片覆盖整个容器，不失真 */
  border-radius: 10px;
  cursor: pointer;
}

.tag {
  display: flex;
  justify-content: flex-end;

  .el-tag {
    margin-right: 10px;
  }
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  .count {
    display: flex;
    align-items: center;
  }
}

.counts {
  display: flex;
}

.count {
  margin-right: 10px;
  color: gray;
}

.el-dropdown {
  cursor: pointer;
}

.options-dropdown {
  display: flex;
  align-items: center;
}

.el-dropdown-link {
  cursor: pointer;
}
</style>
