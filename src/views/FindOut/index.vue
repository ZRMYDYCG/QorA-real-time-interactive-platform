<script setup>
import { ref, nextTick, watch, computed } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
// import UploadFile from '@/components/base/uplod-file/index.vue'

const router = useRouter()

// 切换子路由逻辑
const handleTabClick = (tab, event) => {
  console.log(tab.props.name, event)
  router.push(`/findOut/${tab.props.name}`)
}

const defaultTabItem = ref('latest')

// 发布提问逻辑
let title = ref('')
let content = ref('')
const dialogVisible = ref(false)
const StartQuestion = () => {
  dialogVisible.value = true
}
const tagInputValue = ref('')
const dynamicTags = ref([])
const inputVisible = ref(false)
const InputRef = ref()

const handleClose = (tag) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
}

const showInput = (value) => {
  if (value === 5) {
    inputVisible.value = false
    ElMessage.error('最多添加 5 个标签')
    return
  }
  inputVisible.value = true
  // 等 DOM 加载完毕后再自动获取焦点
  nextTick(() => {
    InputRef.value.input.focus()
  })
}

const handleInputConfirm = () => {
  if (tagInputValue.value) {
    dynamicTags.value.push(tagInputValue.value)
  }
  inputVisible.value = false
  tagInputValue.value = ''
}

// 加急处理逻辑
let checkValue = ref(false)
let innerDialogVisible = ref(false)
let isShowIntegral = ref(false)

// 当 checkValue 变化时，更新 innerDialogVisible 的值
watch(checkValue, (newValue) => {
  innerDialogVisible.value = newValue
  if (!newValue) {
    integral.value = 1
    isShowIntegral.value = false
  }
})

// 处理文字变红
let isTextRed = ref(false)
watch(
  dynamicTags,
  (newValue) => {
    console.log(newValue)
    isTextRed.value = newValue.length >= 5
  },
  {
    deep: true
  }
)

const dynamicTextColor = computed(() => {
  if (isTextRed.value) {
    return 'text-red-500 ml-1'
  } else {
    return 'ml-1'
  }
})

const integral = ref(1)
const handleChange = (value) => {
  console.log(value)
}
const handleCancel = () => {
  checkValue.value = false
  innerDialogVisible.value = false
  integral.value = 1
}

// 确认加急时保持 checkValue 的当前状态，并关闭内层模态框
const handleSure = () => {
  innerDialogVisible.value = false
  isShowIntegral.value = true
}

// 修改积分
const changeIntegral = () => {
  innerDialogVisible.value = true
}

// 关闭外层模态框
const handleCloseModel = () => {
  checkValue.value = false
  title.value = ''
  content.value = ''
  dynamicTags.value = []
}
</script>

<template>
  <div class="find-out">
    <div class="find-out-banner">
      <div class="user-img">
        <img src="https://pic.imgdb.cn/item/660e1fa89f345e8d03525df8.png" alt="#" />
      </div>
      <div class="user-name">
        <h3>一小池勺</h3>
      </div>
      <div class="number">
        <span class="help">回答 {{ 2 }} 次</span>
        <span class="dot"> • </span>
        <span class="seek">提问 {{ 3 }} 次</span>
      </div>
      <hr class="line" />
      <div class="tab">
        <el-tabs v-model="defaultTabItem" @tab-click="handleTabClick">
          <el-tab-pane label="最新" name="latest"></el-tab-pane>
          <el-tab-pane label="推送" name="commend"></el-tab-pane>
          <el-tab-pane label="未解决" name="unresolved"></el-tab-pane>
          <el-tab-pane label="紧急问题" name="urgent"></el-tab-pane>
        </el-tabs>
        <div class="btn">
          <el-button @click="StartQuestion">发起提问</el-button>
        </div>
      </div>
    </div>
    <!--  发布问题的路由出口  -->
    <div class="find-out-main">
      <router-view></router-view>
    </div>
    <el-backtop :right="50" :bottom="100" />
  </div>
  <!-- 发布问题模态框 -->
  <el-dialog
    append-to-body
    v-model="dialogVisible"
    align-center
    width="750"
    @close="handleCloseModel"
  >
    <template #header>
      <img src="https://pic.imgdb.cn/item/660e1fa89f345e8d03525df8.png" alt="#" />
      <el-input v-model="title" placeholder="请输入你的问题"></el-input>
    </template>
    <template #default>
      <h4 class="desc-title">输入你的问题描述:</h4>
      <el-input v-model="content" type="textarea"></el-input>
    </template>
    <template #footer>
      <div class="footer-top flex align-mid justify-between mb-4">
        <div class="tags">
          <div class="flex gap-2">
            <el-tag
              v-for="tag in dynamicTags"
              :key="tag"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)"
            >
              {{ tag }}
            </el-tag>
            <el-input
              v-if="inputVisible"
              ref="InputRef"
              v-model="tagInputValue"
              class="w-20"
              size="small"
              @keyup.enter="handleInputConfirm"
            />
            <el-button
              v-else-if="dynamicTags.length <= 5"
              class="button-new-tag"
              size="small"
              @click="showInput(dynamicTags.length)"
            >
              + 自定义标签
              <div :class="dynamicTextColor">{{ dynamicTags.length }}<span>&nbsp</span></div>
              / 5
            </el-button>
          </div>
        </div>
        <div class="urgent flex align-mid">
          <div @click="changeIntegral" v-if="isShowIntegral">
            <el-icon class="mr-1 mt-2">
              <Coin />
            </el-icon>
            <span class="mr-2">{{ integral }}</span>
          </div>
          <el-checkbox v-model="checkValue" label="是否加急"></el-checkbox>
        </div>
      </div>

      <!--<UploadFile></UploadFile>-->

      <div class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">发布问题</el-button>
      </div>
    </template>
  </el-dialog>
  <el-dialog class="innerDialog" v-model="innerDialogVisible" align-center width="750">
    <template #header>
      <h2 class="text-#aaa mr-0.5">
        积分打赏
        <el-icon>
          <Coin />
        </el-icon>
      </h2>
      <p class="text-#CEA3F8 text-sm">选择你要打赏的积分</p>
    </template>
    <template #default>
      <el-input-number v-model="integral" :min="1" :max="100" @change="handleChange" />
    </template>
    <template #footer>
      <el-button @click="handleCancel">取消</el-button>
      <el-button @click="handleSure">确定</el-button>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss">
.find-out {
  background: url(https://th.bing.com/th/id/R.7e57686b89419361ce0b5d6c5658c744?rik=Eh9qfhw%2bRUZEJA&riu=http%3a%2f%2fimg.yipic.cn%2fthumb%2f357c44cf%2f6ac27d55%2fb6f5075c%2f48241d3b%2fbig_357c44cf6ac27d55b6f5075c48241d3b.png%3fx-oss-process%3dimage%2fformat%2cwebp%2fsharpen%2c100&ehk=xXfDoME280n3hSeJBvDzHUQkWZ9efEYw0oSiTE90Ew0%3d&risl=&pid=ImgRaw&r=0);

  .find-out-banner {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .user-img {
      position: relative;
      width: 150px;
      height: 150px;

      // 用户上线标志
      &::after {
        content: '';
        position: absolute;
        bottom: 10px;
        width: 15px;
        height: 15px;
        background-color: #44ee7a;
        right: 18px;
        border-radius: 50%;
        border: 1px solid #fff;
      }

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    .user-name {
      margin-top: 30px;

      h3 {
        text-shadow: 1px 0 1px gray;
      }
    }

    .number {
      margin-top: 20px;
      font-size: 12px;

      .dot {
        margin: 0 10px;
      }
    }

    .line {
      width: 50vw;
      height: 1px;
      background: linear-gradient(
        to left,
        rgb(173, 169, 150),
        rgb(242, 242, 242),
        rgb(219, 219, 219),
        rgb(234, 234, 234)
      );
      margin-top: 20px;
    }

    .tab {
      display: flex;
      align-items: center;

      .el-tabs {
        margin: 0 auto;
        width: 600px;

        :deep(.el-tabs__nav-wrap::after) {
          display: none;
        }

        :deep(.el-tabs__nav-scroll) {
          display: flex;
          justify-content: center;
        }
      }

      .btn {
        margin-left: 30px;

        .el-button {
          color: #44ee7a;
        }
      }
    }
  }

  .find-out-main {
    display: flex;
    justify-content: center;
  }
}
</style>

<style lang="scss">
.el-dialog {
  .el-dialog__header {
    display: flex;
    align-items: center;

    img {
      width: 60px;
      height: 60px;
      border-radius: 8px;
      margin-right: 20px;
    }

    .el-input {
      width: 300px;
    }
  }

  .desc-title {
    margin-bottom: 30px;
  }
}

.innerDialog {
  .el-dialog__headerbtn {
    display: none;
  }
}
</style>
