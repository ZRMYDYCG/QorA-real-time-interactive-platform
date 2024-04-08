<script setup>
import ExchangeItem from './components/exchange-item/index.vue'
import { ref, watch } from 'vue'
import { pcaTextArr } from 'element-china-area-data'

const searchValue = ref('')

const dataArray = [
  [
    {
      url: 'https://pic3.zhimg.com/v2-9e716daacd3f1ed9987c6d2ae0e47e4a_r.jpg'
    },
    {
      url: 'https://pic4.zhimg.com/v2-2ee2b5efbffc1162c208c2685aabb4fb_r.jpg'
    },
    {
      url: 'https://pic4.zhimg.com/v2-2501a93fe6acebfc81f8c1c825df2367_r.jpg'
    },
    {
      url: 'https://pic2.zhimg.com/v2-821d8853a0b00224c9aef10d89d09161_r.jpg'
    },
    {
      url: 'https://pic2.zhimg.com/v2-c47fa810d925afe151b63a9b600f4b19_r.jpg'
    },
    {
      url: 'https://pic4.zhimg.com/v2-e94ce098d23ae132bc8634799195803b_r.jpg'
    },
    {
      url: 'https://pic4.zhimg.com/v2-d715892a3290264ef283c577cd41df8b_r.jpg'
    }
  ],
  [
    {
      url: 'https://pic1.zhimg.com/v2-cb995ada45bdd8e20e1370e5f483f9e4_b.jpg'
    },
    {
      url: 'https://pic4.zhimg.com/v2-a2c1c7d2bda14c9a4bbe62e6dc30412b_b.jpg'
    },
    {
      url: 'https://pic4.zhimg.com/v2-7482509af48ee761e8397b68a25b6c27_r.jpg'
    },
    {
      url: 'https://pic4.zhimg.com/v2-a116c8dd884cfb1034d4161d0ca7c283_b.jpg'
    },
    {
      url: 'https://pic2.zhimg.com/v2-9f17dfdc72e3d9833c2983cfccd2670d_b.jpg'
    },
    {
      url: 'https://pic4.zhimg.com/v2-90207354155d153803e72da9c063a767_b.jpg'
    },
    {
      url: 'https://pic3.zhimg.com/v2-40cad685d7971f19796b13e298f0ad52_b.jpg'
    }
  ],
  [
    {
      url: 'https://pic3.zhimg.com/v2-5a0c5a8120a998d207e9dd08e1cdddc2_b.jpg'
    },
    {
      url: 'https://pic3.zhimg.com/v2-3ea6812422e3f842d0b59351c6936cca_b.jpg'
    },
    {
      url: 'https://pic1.zhimg.com/80/v2-d235b3fa02e8644a98d978484d0cb0ac_720w.webp'
    },
    {
      url: 'https://picx.zhimg.com/80/v2-3fce673963251246b7afe1a92ae9ffb9_720w.webp'
    },
    {
      url: 'https://pic4.zhimg.com/80/v2-18b3eb558ffcd83373c588d22f81e945_720w.webp'
    },
    {
      url: 'https://pic4.zhimg.com/80/v2-9ce532f0d356d7ea90afba5e635bac8d_720w.webp'
    },
    {
      url: 'https://pica.zhimg.com/80/v2-7407d2e8662cbd04f552927094536c58_720w.webp'
    }
  ],
  [
    {
      url: 'https://pic2.zhimg.com/80/v2-5ca32c0b388bbba5c760275d6dfd7a9d_720w.webp'
    },
    {
      url: 'https://pic4.zhimg.com/80/v2-9e0d6c34d9119f27655e4ffc5a017cd9_720w.webp'
    },
    {
      url: 'https://picx.zhimg.com/80/v2-ecb9631cc6a4cf05bd6d619e31af4f85_720w.webp'
    },
    {
      url: 'https://pica.zhimg.com/80/v2-5fb44fc2c8dffa127e38c3e58e07adee_720w.webp'
    },
    {
      url: 'https://pic3.zhimg.com/80/v2-6dc35e04f6dd6138fefad1725e56ab32_720w.webp'
    },
    {
      url: 'https://picx.zhimg.com/80/v2-d2f8cec117ee955165337401c3597c91_720w.webp'
    },
    {
      url: 'https://picx.zhimg.com/80/v2-9344eab6b6589e1812ae68a8cb545755_720w.webp'
    }
  ],
  [
    {
      url: 'https://pic4.zhimg.com/v2-8763637c37a572afd711ecbe6d760b83_b.jpg'
    },
    {
      url: 'https://pic2.zhimg.com/v2-0b08e7bda1a94a90b8053d07f4199021_b.jpg'
    },
    {
      url: 'https://pic1.zhimg.com/v2-22b2f0d7cc3609f34a53e046eb19c3a4_b.jpg'
    },
    {
      url: 'https://pic4.zhimg.com/v2-ba3d931ec362c3ef4bcb7ce13578989f_b.jpg'
    },
    {
      url: 'https://pic1.zhimg.com/v2-004e2e92ee0d046c5e382e92d5c84df4_b.jpg'
    },
    {
      url: 'https://pic4.zhimg.com/v2-c8272b78cf5a5296d6d281975489a6ab_b.jpg'
    },
    {
      url: 'https://pic4.zhimg.com/v2-099e3fe5fd257887dc1cb622b31539af_b.jpg'
    }
  ]
]

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
  (newValue, oldValue) => {
    if (newValue.length === text.length) {
      setTimeout(() => {
        typedText.value = ''
      }, 1000) // 关键：要等待1秒后重置typedText，就实现永久循环
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
      <el-menu default-active="1">
        <el-menu-item index="1">推荐</el-menu-item>
        <el-menu-item index="2">关注</el-menu-item>
        <el-menu-item index="3">标签</el-menu-item>
        <el-menu-item index="4">近期热议</el-menu-item>
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
      <template v-for="item in dataArray" :key="item">
        <exchange-item :data-array="item"></exchange-item>
      </template>
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
