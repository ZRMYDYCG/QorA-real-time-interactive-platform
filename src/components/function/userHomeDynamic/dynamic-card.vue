<script setup>
const emit = defineEmits(['action-click'])
defineProps({
  title: {
    type: String,
    default: '一小池勺'
  },
  time: {
    type: String,
    default: '2024-4-5'
  },
  avatar: {
    type: String,
    default: 'https://pic.imgdb.cn/item/660e1fa89f345e8d03525df8.png'
  },
  action: {
    type: Array,
    default: () => ['编辑', '删除']
  },
  hasImages: {
    type: Array,
    default: () => [
      'https://pic3.zhimg.com/v2-241f40c96463c998f5e3bae85024a93a_r.jpg',
      'https://pic2.zhimg.com/v2-24e2b41ffa2236dd97eac7325b40090d_b.jpg',
      'https://pic2.zhimg.com/v2-631d91ec4e084ccaf3806258ae2deb55_b.jpg',
      'https://pic1.zhimg.com/v2-bdbde5ab11bf5e9aab1ecb86bfaee730_b.jpg',
      'https://pic1.zhimg.com/v2-0c8ebcfd29f2a7aba74414227d36b570_b.jpg',
      'https://pic4.zhimg.com/v2-23ff06c4e69dace67b5097acdd2b5bcb_b.jpg'
    ]
  },
  likesCount: {
    type: Number,
    default: 0
  },
  sharesCount: {
    type: Number,
    default: 0
  },
  commentsCount: {
    type: Number,
    default: 0
  },
  dynamicText: {
    type: String,
    default: () =>
      '当你走过漫长的岁月，回首往事，你会发现，正是这些瞬间，成就了今天的你。那些快乐的时刻、悲伤的时刻、困惑的时刻、觉悟的时刻，都是你人生中独一无二的瑰宝。在这一刻，用我们的产品，定格时间。让我们携手，重温那些触动心弦的瞬间。'
  }
})
// 处理操作菜单的点击事件
const handleActionClick = (actionType) => {
  // 调用emit发出事件
  emit('action-click', actionType)
}
</script>

<template>
  <el-card style="min-width: 780px">
    <!-- 插槽用于自定义头部内容 -->
    <slot name="header">
      <div class="header-content">
        <div class="header-content--left">
          <img :src="avatar" class="avatar" />
          <div class="info">
            <span class="title">{{ title }}</span>
            <span class="time">{{ time }}</span>
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
                  @click="handleActionClick(item)"
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
      <div class="text-content">
        <!-- 这里可以根据实际情况使用v-html或其他方法渲染文本内容 -->
        {{ dynamicText }}
      </div>

      <!-- 九宫格图片展示 -->
      <div class="images-grid" v-if="hasImages.length">
        <div class="image-item" v-for="(image, index) in hasImages" :key="index">
          <img :src="image" alt="" />
        </div>
      </div>
    </div>

    <!-- 底部信息区域 -->
    <div class="card-footer">
      <!-- 点赞、分享、评论计数 -->
      <div class="counts">
        <span class="count like-count">{{ likesCount }}</span>
        <span class="count share-count">{{ sharesCount }}</span>
        <span class="count comment-count">{{ commentsCount }}</span>
      </div>
    </div>
  </el-card>
</template>

<style scoped lang="scss">
.el-card {
  border-radius: 10px;
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
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
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
