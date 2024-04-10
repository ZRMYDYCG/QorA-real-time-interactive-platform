<script setup>
import { ref, watch } from 'vue'
import { pcaTextArr } from 'element-china-area-data'

const searchValue = ref('')

const specialties = ref([])

const specialtiesOptions = [
  {
    value: 'HTML',
    label: '耳机'
  },
  {
    value: 'CSS',
    label: '耳塞'
  },
  {
    value: 'JavaScript',
    label: '音响'
  }
]

const value = ref([])

const colors = [
  {
    value: '#E63415',
    label: 'red'
  },
  {
    value: '#FF6600',
    label: 'orange'
  },
  {
    value: '#FFDE0A',
    label: 'yellow'
  },
  {
    value: '#1EC79D',
    label: 'green'
  },
  {
    value: '#14CCCC',
    label: 'cyan'
  },
  {
    value: '#4167F0',
    label: 'blue'
  },
  {
    value: '#6222C9',
    label: 'purple'
  }
]

colors.forEach((color) => {
  value.value.push(color.value)
})

const checkListLevel = ref([])

const selectedOptions = ref([])

const timeRange = ref('')

const PriceValue = ref('')

const PriceOptions = [
  {
    value: '50',
    label: '50-100'
  },
  {
    value: '100',
    label: '100-200'
  },
  {
    value: '200',
    label: '200-300'
  },
  {
    value: '300',
    label: '300-400'
  },
  {
    value: '400',
    label: '400-500'
  },
  {
    value: '500',
    label: '500-600'
  }
]

const text = '体验官社区'

const typedText = ref('')

watch(
  () => typedText.value,
  (newValue) => {
    if (newValue.length === text.length) {
      setTimeout(() => {
        typedText.value = ''
      }, 1000) // 关键：要等待1秒后重置typedText，就实现永久循环啦
    } else {
      setTimeout(() => {
        typedText.value = text.slice(0, newValue.length + 1)
      }, 200)
    }
  },
  { immediate: true }
)
</script>

<template>
  <div class="container">
    <div class="left-bar">
      <el-menu default-active="/exchangeCommunity/communityRecommend" router>
        <el-menu-item index="/exchangeCommunity/communityRecommend"> 推荐</el-menu-item>
        <el-menu-item index="/exchangeCommunity/communityConcern"> 关注</el-menu-item>
        <el-menu-item index="/exchangeCommunity/communityTags"> 标签 / 专栏</el-menu-item>
        <el-menu-item index="/exchangeCommunity/communityTopic"> 近期热议</el-menu-item>
      </el-menu>
    </div>
    <div class="main-content">
      <div class="top-bar">
        <el-menu default-active="1" mode="horizontal">
          <el-menu-item index="1">推荐</el-menu-item>
          <el-menu-item index="2">关注</el-menu-item>
          <el-menu-item index="3">标签</el-menu-item>
          <el-menu-item index="4">近期热议</el-menu-item>
        </el-menu>
      </div>
      <div class="desc">
        <h3 class="title">
          <span class="l">Welcome To</span> <span class="">{{ typedText }}</span>
        </h3>
        <p style="margin: 20px 0">我们都是生活里的品质体验官，欢迎来到体验官社区。</p>
        <el-button round>
          <el-icon>
            <Refresh />
          </el-icon>
          换一批推荐
        </el-button>
      </div>
      <router-view></router-view>
    </div>
    <div class="right-bar">
      <el-form label-position="top">
        <div class="keyword-search">
          <el-form-item label="关键词">
            <el-input placeholder="请输入关键词" v-model="searchValue"></el-input>
          </el-form-item>
        </div>
        <div class="specialties">
          <el-form-item label="标签">
            <el-select
              v-model="specialties"
              multiple
              filterable
              allow-create
              default-first-option
              :reserve-keyword="false"
              placeholder="选择或输入你喜欢的标签"
            >
              <el-option
                v-for="item in specialtiesOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </div>
        <div class="location">
          <el-form-item label="地区">
            <el-cascader
              size="large"
              :options="pcaTextArr"
              v-model="selectedOptions"
              placeholder="选择地区"
            >
            </el-cascader>
          </el-form-item>
        </div>
        <div class="time">
          <el-form-item label="发布时间">
            <el-date-picker
              v-model="timeRange"
              type="daterange"
              range-separator="To"
              start-placeholder="Start"
              end-placeholder="End"
              size="small"
            />
          </el-form-item>
        </div>
        <div class="level">
          <el-form-item label="体验官等级">
            <el-checkbox-group v-model="checkListLevel">
              <el-checkbox label="1-3" value="level_a" />
              <el-checkbox label="3-6" value="level_b" />
              <el-checkbox label="6-9" value="level_c" />
              <el-checkbox label="9-12" value="level_d" />
            </el-checkbox-group>
          </el-form-item>
        </div>
        <div class="price">
          <el-form-item label="价格区间">
            <el-select
              v-model="PriceValue"
              placeholder="选择价格区间"
              size="large"
              style="width: 240px"
            >
              <el-option
                v-for="item in PriceOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </div>
        <div class="colors">
          <el-form-item label="选择你喜欢的配色">
            <el-select v-model="value" multiple placeholder="Select">
              <el-option
                v-for="item in colors"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
                <div class="flex items-center">
                  <el-tag :color="item.value" style="margin-right: 8px" size="small" />
                  <span :style="{ color: item.value }">{{ item.label }}</span>
                </div>
              </el-option>
              <template #tag>
                <el-tag v-for="color in value" :key="color.value" :color="color" />
              </template>
            </el-select>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: row;
  height: calc(100vh - 60px);
  transition: all 0.3s ease;
  overflow: hidden;
  width: 90vw;
  margin: 0 auto;
}

.top-bar {
  display: none;
}

.left-bar,
.right-bar {
  transition: all 0.3s ease; /* 添加过渡效果 */
  opacity: 1;
  transform: scale(1);
}

.left-bar {
  flex: 0 0 200px; /* 固定左栏的宽度 */
  background-color: var(--ys-bar-bg-color);
  border-right: 1px solid var(--ys-bar-border-color);
  padding: 20px;
  overflow-y: auto;

  .el-menu {
    border-right: none;
    width: 100%;
    height: 100%;
    transition: all 0.3s;
  }
}

.main-content {
  flex: 1; /* 占据剩余空间 */
  background-color: var(--ys-bar-bg-color);
  padding: 20px 40px;
  overflow-x: hidden; /* 隐藏水平滚动条 */
  -ms-overflow-style: none; /* IE和Edge隐藏滚动条 */
  scrollbar-width: none; /* Firefox隐藏滚动条 */
  .desc {
    padding: 20px 0;

    .title {
      .l {
        font-family: 'Roboto Slab', serif;
        color: var(--ys-font-title-color);
        font-size: 35px;
      }
    }
  }
}

.right-bar {
  flex: 0 0 200px; /* 固定右栏的宽度 */
  background-color: var(--ys-bar-bg-color);
  border-left: 1px solid var(--ys-bar-border-color);
  color: #333;
  padding: 20px;
  overflow-x: hidden; /* 隐藏水平滚动条 */
  -ms-overflow-style: none; /* IE和Edge隐藏滚动条 */
  scrollbar-width: none; /* Firefox隐藏滚动条 */
}

@media (max-width: 1024px) {
  .left-bar {
    flex: 0 0 0; /* 左栏宽度设置为0 */
    opacity: 0; /* 设置透明度为0，实现淡出效果 */
    transform: scale(0); /* 缩小至屏幕外 */
    display: block; /* 保持元素在DOM中，但不可见 */
    padding: 0;
  }

  .right-bar {
    flex: 0 0 150px; /* 适当减少右栏的宽度 */
  }
}

@media (max-width: 760px) {
  .right-bar {
    flex: 0 0 0; /* 右栏宽度设置为0 */
    opacity: 0; /* 设置透明度为0，实现淡出效果 */
    transform: scale(0); /* 缩小至屏幕外 */
    display: block;
    padding: 0;
  }
}

@media screen and (max-width: 720px) {
  .top-bar {
    display: block;
  }
}
</style>
