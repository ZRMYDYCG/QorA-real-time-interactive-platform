<script setup>
import { ref, nextTick } from 'vue'
import { submitArtAPI } from '@/service/PublishArticle/index.js'
import { useLoginStore } from '@/stores/modules/Login/index.js'
import RichText from '@/components/base/rich-text/index.vue'
import { column } from 'element-plus/es/components/table-v2/src/common'

// 富文本内容
const content = ref('')

// 获取富文本内容
const getContent = (data) => {
  content.value = data
}

//获取标题
const title = ref('')
//专栏名称
const columnValue = ref('')

const fileList = ref([
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
  },
  {
    name: 'plant-1.png',
    url: '/images/plant-1.png'
  },
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
  },
  {
    name: 'plant-2.png',
    url: '/images/plant-2.png'
  },
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
  },
  {
    name: 'figure-1.png',
    url: '/images/figure-1.png'
  },
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
  },
  {
    name: 'figure-2.png',
    url: '/images/figure-2.png'
  }
])

const dialogImageUrl = ref('')
const dialogVisible = ref(false)

//处理图片移除
const handleRemove = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
  console.log('图片移除')
}

//处理图片预览
const handlePictureCardPreview = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url
  dialogVisible.value = true
}

//处理文件成功上传
const handleFileUp = () => {
  console.log('success')
}

//tag标签
const tagInpValue = ref('') //输入框输入值
const tags = ref([]) //添加的标签列表
const inputVisible = ref(false)
const TagInputRef = ref(null)

//关闭标签触发函数
const handleClose = (tag) => {
  const index = tags.value.indexOf(tag)
  if (index !== -1) {
    tags.value.splice(index, 1)
  }
}

const showInput = () => {
  inputVisible.value = true
  nextTick(() => {
    if (TagInputRef.value && TagInputRef.value.input) {
      TagInputRef.value.input.focus()
    }
  })
}

//标签输入回车触发
const handleInputConfirm = () => {
  if (tagInpValue.value) {
    tags.value.push(tagInpValue.value)
    tagInpValue.value = ''
  }
  inputVisible.value = false
}

const userStore = useLoginStore()
//发布文章触发函数
const onSubmit = async () => {
  console.log('send')
  const res = await submitArtAPI({
    title: title.value,
    TagList: tags.value,
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
</script>

<template>
  <div class="publish-container">
    <div class="intro-container">文章发布</div>
    <div class="publish-content">
      <div class="publish-title">
        <el-form label-width="180">
          <!-- 标题 -->
          <el-form-item label="请输入标题 (必填) :">
            <el-input
              v-model="title"
              style="width: 300px; height: 40px"
              maxlength="20"
              placeholder="标题"
              show-word-limit
              type="text"
            />
          </el-form-item>
          <!-- 专栏 -->
          <el-form-item label="选择专栏 (可选) :">
            <el-select
              v-model="columnValue"
              multiple
              filterable
              remote
              reserve-keyword
              placeholder="请输入专栏关键字"
              :remote-method="remoteMethod"
              :loading="loading"
              style="width: 300px"
              :size="'large'"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
              <template #loading>
                <svg class="circular" viewBox="0 0 50 50">
                  <circle class="path" cx="25" cy="25" r="20" fill="none" />
                </svg>
              </template>
            </el-select>
          </el-form-item>
          <!-- 标签 -->
          <el-form-item label="选择标签 (可选) :">
            <el-tag
              v-for="tag in tags"
              :key="tag"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)"
            >
              {{ tag }}
            </el-tag>
            <el-input
              v-if="inputVisible"
              ref="TagInputRef"
              v-model="tagInpValue"
              class="w-20"
              size="small"
              @keyup.enter="handleInputConfirm"
              @blur="handleInputConfirm"
            />
            <el-button v-else class="button-new-tag" size="large" @click="showInput">
              + New Tag
            </el-button>
          </el-form-item>
          <!-- 图片 -->
          <el-form-item label="选择图片 (可选) :">
            <el-upload
              v-model:file-list="fileList"
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              :drag="true"
              :on-success="handleFileUp"
            >
              <el-icon><Plus /></el-icon>
            </el-upload>
            <el-dialog v-model="dialogVisible">
              <img w-full :src="dialogImageUrl" alt="Preview Image" />
            </el-dialog>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- 富文本 -->
    <RichText @update="getContent" />
    <div class="submit">
      <el-button @click="onSubmit">发布</el-button>
    </div>
  </div>
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
</style>
