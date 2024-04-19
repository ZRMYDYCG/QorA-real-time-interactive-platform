<script setup>
import { ref, reactive } from 'vue'
import CollapseExpands from '@/components/base/collapse-expands/index.vue'
import YsImagePreview from '@/components/base/ys-imge-preview/src/ys-image-preview.vue'
import responseItem from './components/response-item/index.vue'
import RichText from '@/components/base/rich-text/index.vue'

const responseDetailList = reactive([
  {
    userId: 1,
    nickName: '一小池勺',
    signature: '我的世界已经是这样了',
    userAvatarPic: 'https://pic.imgdb.cn/item/661fcb210ea9cb1403b668f8.jpg',
    isAgree: false,
    isFold: true,
    content:
      '1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2+ 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2'
  },
  {
    userId: 2,
    nickName: '一小池勺',
    signature: '我的世界已经是这样了',
    userAvatarPic: 'https://pic.imgdb.cn/item/661fcb210ea9cb1403b668f8.jpg',
    isAgree: false,
    isFold: true,
    content:
      '1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2+ 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2'
  },
  {
    userId: 3,
    nickName: '一小池勺',
    signature: '我的世界已经是这样了',
    userAvatarPic: 'https://pic.imgdb.cn/item/661fcb210ea9cb1403b668f8.jpg',
    isAgree: true,
    isFold: true,
    content:
      '1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2+ 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2'
  },
  {
    userId: 4,
    nickName: '一小池勺',
    signature: '我的世界已经是这样了',
    userAvatarPic: 'https://pic.imgdb.cn/item/661fcb210ea9cb1403b668f8.jpg',
    isAgree: false,
    isFold: true,
    content:
      '1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2+ 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 21 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2 ?1 + 1 = 2'
  }
])

const hasImages = [
  'https://pic3.zhimg.com/v2-241f40c96463c998f5e3bae85024a93a_r.jpg',
  'https://pic2.zhimg.com/v2-24e2b41ffa2236dd97eac7325b40090d_b.jpg',
  'https://pic2.zhimg.com/v2-631d91ec4e084ccaf3806258ae2deb55_b.jpg',
  'https://pic1.zhimg.com/v2-bdbde5ab11bf5e9aab1ecb86bfaee730_b.jpg',
  'https://pic1.zhimg.com/v2-0c8ebcfd29f2a7aba74414227d36b570_b.jpg',
  'https://pic4.zhimg.com/v2-23ff06c4e69dace67b5097acdd2b5bcb_b.jpg'
]

const YsImagePreviewRef = ref()
const openPreview = (image) => {
  YsImagePreviewRef.value.openModal(image)
}

// TODO: 区分不同的回答
const setRefs = ref({}) // refs 收集器

// 向 ref 收集器中写入
const setItemRef = (el, key) => {
  if (el) {
    setRefs.value[key] = el
  }
}

const unfoldBox = (userId, isFold) => {
  responseDetailList.forEach((item) => {
    if (item.userId === userId) {
      item.isFold = !isFold
    }
  })
}

// 富文本

const RichTextVisible = ref(false)
const handleRichText = () => {
  RichTextVisible.value = !RichTextVisible.value
}

const content = ref('') // 富文本内容

// 获取富文本内容
const getContent = (data) => {
  content.value = data
}
</script>

<template>
  <div class="help-detail">
    <el-card class="detail-content">
      <div class="user-info" style="white-space: nowrap">
        <div class="left flex align-mid mb-4">
          <img
            class="w-14 h-14 rounded-2 mr-3"
            src="https://pic.imgdb.cn/item/660e1fa89f345e8d03525df8.png"
            alt="#"
          />
          <div>
            <p class="text-5 mt-2">一小池勺</p>
            <p class="mt-2 text-#aaa">
              <span class="mr-1">粉丝 {{ 3 }}</span>
              <span>关注 {{ 4 }}</span>
            </p>
          </div>
          <div class="time ml-4" style="padding-right: 20px">
            <p>提问于</p>
            <p>2024-4-17 15:27</p>
          </div>
          <div class="integral br-4">
            <span>悬赏积分</span>
            <div class="coin">
              <el-icon>
                <Coin />
              </el-icon>
              {{ 10 }}
            </div>
          </div>
        </div>
        <div class="right" style="white-space: nowrap">
          <div class="time text-center mr-4">
            <p>浏览数</p>
            <p>207</p>
          </div>
          <div class="time text-center mr-4">
            <p>回答数</p>
            <p>7</p>
          </div>
          <div
            class="time text-center mr-4"
            style="border-right: 1px solid #eee; padding-right: 20px"
          >
            <p>评论数</p>
            <p>27</p>
          </div>
        </div>
      </div>
      <CollapseExpands
        title="你好呀？"
        info="这是一段很长的文本，需要被截断显示，以便在有限的空间内展示。这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示。这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示。这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示。这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示。这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示。这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示。这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示。这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示。这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示。这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示。这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示。这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示这是一段很长的文本，需要被截断显示，以便在有限的空间内展示"
        :max-lines="2"
        :width="200"
      >
      </CollapseExpands>
      <!-- 九宫格图片展示 -->
      <div class="images-grid" v-if="hasImages.length">
        <div class="image-item" v-for="(image, index) in hasImages" :key="index">
          <img @click="openPreview(image)" :src="image" alt="" />
        </div>
      </div>
      <!--   预览图  -->
      <YsImagePreview ref="YsImagePreviewRef"></YsImagePreview>
    </el-card>
  </div>
  <div class="help-operation">
    <el-button type="text" @click="handleRichText">
      <el-icon class="mr1">
        <EditPen />
      </el-icon>
      发表回答
    </el-button>
    <el-button type="text">
      <el-icon class="mr1">
        <ChatDotRound />
      </el-icon>
      发布评论
    </el-button>
    <el-button type="text">
      <el-icon class="mr1">
        <Star />
      </el-icon>
      收藏提问
    </el-button>
  </div>
  <div class="help-response">
    <el-card class="response--detail">
      <template #default>
        <div class="card--header">
          <div class="header--left">
            <el-tag>{{ 1 }} 个回答</el-tag>
            •
            <el-tag @click="featured">{{ 0 }} 个采纳</el-tag>
          </div>
          <div class="header--right">
            <el-button size="small">最新</el-button>
            <el-button size="small">最热</el-button>
          </div>
        </div>
        <div class="card--main">
          <template v-for="item in responseDetailList" :key="item.uerId">
            <responseItem
              :ref="(el) => setItemRef(el, `user-${item.userId}`)"
              :response-detail="item"
            >
              <template #optionsBtn="slotScopes">
                <div class="slotBtn">
                  <div class="share item">
                    <el-icon>
                      <Share />
                    </el-icon>
                    <span>转发</span>
                  </div>
                  <div
                    class="comments item"
                    @click="
                      unfoldBox(
                        slotScopes.responseDetail?.userId,
                        slotScopes.responseDetail?.isFold
                      )
                    "
                  >
                    <el-icon>
                      <ChatDotRound />
                    </el-icon>
                    <span v-if="slotScopes.responseDetail?.isFold">{{ 3 }} 条评论</span>
                    <span v-else>收起评论</span>
                  </div>
                  <div class="collection item">
                    <el-icon>
                      <StarFilled />
                    </el-icon>
                    <span>收藏</span>
                  </div>
                  <div class="more item">
                    <el-icon>
                      <MoreFilled />
                    </el-icon>
                    <span>更多</span>
                  </div>
                </div>
              </template>
            </responseItem>
          </template>
        </div>
      </template>
    </el-card>
    <el-card class="response--recommend">
      <template #header>
        <div class="card-header">
          <span class="text-2xl text-#F396E1">相似推荐</span>
        </div>
      </template>
      <template #default>
        <div class="recommend--items">
          <div class="item" @click="$router.push('/findOut/detail/1')"></div>
        </div>
      </template>
    </el-card>
  </div>

  <!-- 发布回答模态框 -->
  <el-dialog v-model="RichTextVisible">
    <template #title>
      <h3>回答</h3>
    </template>
    <RichText></RichText>
    <template #footer>
      <el-button>发布回答</el-button>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss">
.help-detail {
  display: flex;
  justify-content: center;

  .el-card {
    box-shadow: none;
    border-top: none;
    padding: 20px 80px;
  }

  .user-info {
    display: flex;
    width: 100%;
    justify-content: space-between;

    .right {
      display: flex;
    }
  }

  .detail-content {
    width: 100vw;

    .time {
      border-left: 1px solid #eee;
      padding-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      p {
        color: #ccc;
        padding: 5px;
      }
    }

    .integral {
      border-left: 1px solid #eee;
      padding-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      span {
        padding: 5px 0;
        color: #edb873;
      }
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
  }
}

.help-operation {
  width: 100%;
  height: 20px;
  padding: 20px 80px;
  border-bottom: 1px dotted #9ca9c3;
}

.help-response {
  display: flex;
  width: 90vw;
  margin: 0 auto;

  .response--detail {
    flex: 1;
    margin-top: 5px;
    box-shadow: none;
    padding: 20px 60px;

    .card--header {
      border-bottom: 1px solid #eee;
      padding-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    // 自定义操作按钮
    .card--main {
      .slotBtn {
        display: flex;

        .el-icon {
          font-size: 25px;
        }

        .item {
          display: flex;
          align-items: center;
          margin-right: 15px;
          cursor: pointer;

          span {
            margin-left: 10px;
            color: #ccc;
          }
        }
      }
    }
  }

  .response--recommend {
    width: 300px;
    height: 350px;
    margin-top: 5px;
    margin-left: 30px;
    box-shadow: none;
    padding: 20px 20px;
  }
}
</style>
