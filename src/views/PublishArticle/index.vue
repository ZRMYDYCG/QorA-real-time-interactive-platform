<script setup>
import { ref, nextTick, watch, computed } from 'vue'
import { submitArtAPI } from '@/service/PublishArticle/index.js'
import { useLoginStore } from '@/stores/modules/Login/index.js'
import RichText from '@/components/base/rich-text/index.vue'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
// TODO: 文章发布
const content = ref('')
const title = ref('')
const getContent = (data) => {
  content.value = data
}
const userStore = useLoginStore()

const submitVisible = ref(false)
const openSubmitVisible = () => {
  submitVisible.value = true
}

// 添加标签
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

const onSubmit = async () => {
  console.log('send')
  const res = await submitArtAPI({
    title: title.value,
    imgList: [
      'https://p1.music.126.net/D-1BJmN0aqcwgh8F1AuyPA==/109951169341847902.jpg',
      'https://p1.music.126.net/fAzUfd4CUeEsyHvui0Unhg==/109951169440246524.jpg',
      'https://p1.music.126.net/lpgtc9vtrfrJwwm819XVgQ==/109951169478526448.jpg',
      'https://b.zol-img.com.cn/sjbizhi/images/11/1080x1920/1592967802496.jpg',
      'https://p1.music.126.net/CmDnOvSU7aIArdeL4CROMA==/109951169329849875.jpg'
    ],
    content: content.value,
    type: 'dynamic',
    id: userStore.userInfo.value.user_id
  })
  console.log(res)
}
// TODO:文章封面图片上传
</script>

<template>
  <div class="publish-container">
    <div class="left">
      <div class="intro-container">文章发布</div>
      <RichText @update="getContent" />
      <div class="submit">
        <el-button @click="openSubmitVisible">发布</el-button>
      </div>
    </div>
  </div>

  <el-dialog width="40%" style="height: 400px" v-model="submitVisible">
    <el-form>
      <el-form-item style="margin-top: 20px" label="文章标题">
        <el-input v-model="title" placeholder="请输入文章标题"></el-input>
      </el-form-item>
      <el-form-item label="选择专栏">
        <el-select></el-select>
        <el-button type="text">新建一个？</el-button>
      </el-form-item>
      <el-form-item label="添加标签">
        <div class="tags" style="margin-top: 10px">
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
      </el-form-item>
      <el-form-item label="添加封面">
        <!-- 多图上传 -->
        <el-upload
          action="#"
          :http-request="handleUploadFilesApi"
          list-type="picture-card"
          multiple
        >
          <el-icon><Plus /></el-icon>
          <template #file="{ file }">
            <div>
              <img class="el-upload-list__item-thumbnail" :src="backImgUrl" alt="" />
              <span class="el-upload-list__item-actions">
                <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                  <el-icon><zoom-in /></el-icon>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleDownload(file)"
                >
                  <el-icon><Download /></el-icon>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <el-icon><Delete /></el-icon>
                </span>
              </span>
            </div>
          </template>
        </el-upload>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<style scoped lang="scss">
.submit {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  .el-button {
    height: 50px;
    width: 500px;
    font-size: 20px;
    background-color: #af7bef32;
    color: #5b5b5b8e;
    transition: all 0.4s linear;
    &:hover {
      color: white;
      background-color: #c197f49d;
    }
  }
}
::v-deep .el-form-item__label {
  font-size: 18px;
  color: #af7befce;
}

.el-tag {
  height: 100%;
  margin-right: 10px;
}

.publish-container {
  background-color: white;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  width: 80%;
  margin: 0 auto;
  border-radius: 5px;
  .intro-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    font-size: 32px;
    font-weight: 550;
    /* color: #6f32ec; */
    background: linear-gradient(to right, rgb(149, 105, 238), rgb(210, 146, 240));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .publish-content {
    padding: 0 200px 0 100px;
    margin-top: 40px;
    .publish-title {
      .el-form {
        .el-form-item {
          margin-bottom: 30px;
          padding: 20px 20px;
          transition: all 0.4s linear;
          border-radius: 7px;
          &:hover {
            background-color: #f3a5b521;
          }
        }
      }
    }
  }
}

// 图片上传可拖拽设置
.el-upload :deep(.el-form-item__label) {
  padding-top: 4px;
}

/* 对文本框进行设置 */
::v-deep .content {
  height: 500px !important;
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

.upload-wrap {
  width: 122px;
  height: 122px;
  position: relative;
  border: 1px dotted #dfe5ec;
  border-radius: 5px;
}
.upload-wrap input {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0;
  filter: alpha(opacity=0); /* 兼容IE */
  z-index: 9;
}
.upload-wrap .avatar-uploader-icon {
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
  z-index: 1;
}
.upload-wrap .avatar {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 120px;
  height: 120px;
  display: block;
  z-index: 1;
  border-radius: 5px;
}
.upload-wrap .el-upload__tip {
  position: absolute;
  width: 100%;
  height: 40px;
  left: 0;
  bottom: 0;
  padding: 4px 15px 0;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  z-index: 1;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
