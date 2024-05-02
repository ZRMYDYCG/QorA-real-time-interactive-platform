<script setup>
import { ref, onMounted } from 'vue'
// import CollapseExpands from '@/components/base/collapse-expands/index.vue'
// import YsImagePreview from '@/components/base/ys-imge-preview/src/ys-image-preview.vue'
// import Vue3EmojiPicker from 'vue3-emoji-picker'
// import 'vue3-emoji-picker/css'
import { reorganizeData } from '@/utils/index.js'
import responseItem from './components/response-item/index.vue'
import RichText from '@/components/base/rich-text/index.vue'
import { questionDetailApi } from '@/service/FindOut/index.js'
import { fetchPersonalHomepageApi } from '@/service/UserHome/index.js'
import { publicCommentsApi, publicShowReviewApi } from '@/service/public/index.js'
import { useRoute } from 'vue-router'
import { getLocalStorage } from '@/utils/index.js'
const route = useRoute()

// const hasImages = [
//   'https://pic3.zhimg.com/v2-241f40c96463c998f5e3bae85024a93a_r.jpg',
//   'https://pic2.zhimg.com/v2-24e2b41ffa2236dd97eac7325b40090d_b.jpg',
//   'https://pic2.zhimg.com/v2-631d91ec4e084ccaf3806258ae2deb55_b.jpg',
//   'https://pic1.zhimg.com/v2-bdbde5ab11bf5e9aab1ecb86bfaee730_b.jpg',
//   'https://pic1.zhimg.com/v2-0c8ebcfd29f2a7aba74414227d36b570_b.jpg',
//   'https://pic4.zhimg.com/v2-23ff06c4e69dace67b5097acdd2b5bcb_b.jpg'
// ]

// const YsImagePreviewRef = ref()
// const openPreview = (image) => {
//   YsImagePreviewRef.value.openModal(image)
// }

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

// TODO:获取问题详情
let helpDetail = ref({})
let userInfo = ref({})
let length = ref(0)
const fetchHelpDetail = (id) => {
  questionDetailApi(id).then((res) => {
    console.log('问题详情:', res)
    helpDetail.value = res.data
    length.value = helpDetail.value.question_answer_list.length
    fetchPersonalHomepageApi(helpDetail.value.question_now.question_user).then((res) => {
      console.log('用户信息:', res)
      userInfo.value = res.data.user_now
    })
  })
}
onMounted(() => {
  fetchHelpDetail(route.params.id)
})

// TODO:发布评论
let review_object_type = 'question'
let review_user = getLocalStorage('userInfo').value.user_id
const handlePublicCommentsApi = async (
  review_object_type,
  review_user,
  review_object_id,
  content,
  backer,
  review_grade_top,
  review_top_id
) => {
  await publicCommentsApi(
    review_object_type,
    review_user,
    review_object_id,
    content,
    backer,
    review_grade_top,
    review_top_id
  )
  fetchCommontData()
  RichTextVisible.value = false
}

// 一级
let review_object_id = route.params.id
const handleOneComment = () => {
  let text = content.value
  let backer = getLocalStorage('userInfo').value.user_id
  handlePublicCommentsApi('question', review_user, review_object_id, text, backer)
}
// 二级
let reviewBackUserInfo = ref({})
let openReviewBackVisible = ref(false)
let back_review_user = ref('')
let top_id = ref('')
const openReviewBack = (review_user, review_id) => {
  console.log(review_user)
  back_review_user.value = review_user
  top_id.value = review_id
  fetchPersonalHomepageApi(review_user).then((res) => {
    console.log('用户信息:', res)
    reviewBackUserInfo.value = res.data.user_now
  })
  openReviewBackVisible.value = true
}

let backContent = ref('')
let sendReviewBack = () => {
  handlePublicCommentsApi(
    'question',
    review_user, //  发表该评论的用户 id
    review_object_id,
    backContent.value,
    back_review_user.value,
    back_review_user.value,
    top_id.value
  )
}

// TODO: 区分不同的回答
let responseDetailList = ref([])

const setRefs = ref({}) // refs 收集器

// 向 ref 收集器中写入
const setItemRef = (el, key) => {
  if (el) {
    setRefs.value[key] = el
  }
}

// TODO:渲染讨论区
const fetchCommontData = async () => {
  const res = await publicShowReviewApi(route.params.id, review_object_type)
  // responseDetailList.value = res.data.data
  responseDetailList.value = reorganizeData(res.data.data)
  console.log('111:', responseDetailList.value)
}

onMounted(() => {
  fetchCommontData()
})

// TODO:二级评论详情渲染
let backReviewVisible = ref(false)
let rebackDetail = ref({})
let bodyDetail = ref([])
const openBackReviewVisible = (slotScops) => {
  console.log(slotScops)
  backReviewVisible.value = true
  rebackDetail.value = slotScops.rebackDetail
  bodyDetail.value = slotScops.secondaryReviews
}
</script>

<template>
  <div class="help-detail">
    <el-card class="detail-content">
      <div class="user-info" style="white-space: nowrap">
        <div class="left flex align-mid mb-4">
          <img class="w-14 h-14 rounded-2 mr-3" :src="helpDetail.user_pics" alt="#" />
          <div>
            <p class="text-5 mt-2">{{ userInfo.user_name }}</p>
            <p class="mt-2 text-#aaa">
              <span class="mr-1">粉丝 {{ userInfo.user_fan }}</span>
              <span>关注 {{ userInfo.user_attention }}</span>
            </p>
          </div>
          <div class="time ml-4" style="padding-right: 20px">
            <p>提问于</p>
            <p>{{ helpDetail.question_now?.question_time.replace(/\s*GMT/, '') }}</p>
          </div>
          <div class="integral br-4">
            <span>悬赏积分</span>
            <div class="coin">
              <el-icon>
                <Coin />
              </el-icon>
              {{ helpDetail.question_now?.question_integral }}
            </div>
          </div>
        </div>
        <div class="right" style="white-space: nowrap">
          <div class="time text-center mr-4">
            <p>浏览数</p>
            <p>{{ helpDetail.question_now?.question_see }}</p>
          </div>
          <div class="time text-center mr-4">
            <p>回答数</p>
            <p>{{ length }}</p>
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

      <div class="content">
        <h2>{{ helpDetail.question_now?.question_title }}</h2>
        <div class="detail">
          {{ helpDetail.question_now?.question_text }}
        </div>
      </div>
      <!-- 该功能保留 -->
      <!-- 九宫格图片展示 -->
      <!-- <div class="images-grid" v-if="hasImages.length">
        <div class="image-item" v-for="(image, index) in hasImages" :key="index">
          <img @click="openPreview(image)" :src="image" alt="" />
        </div>
      </div> -->
      <!--   预览图  -->
      <!-- <YsImagePreview ref="YsImagePreviewRef"></YsImagePreview> -->
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
    <template> </template>
    <el-card class="response--detail">
      <template #default>
        <div class="card--header">
          <div class="header--left">
            <el-tag>{{ responseDetailList.length }} 个回答</el-tag>
            •
            <el-tag @click="featured">{{ 0 }} 个采纳</el-tag>
          </div>
          <div class="header--right">
            {{ responseDetailList }}
            <el-button size="small">最新</el-button>
            <el-button size="small">最热</el-button>
          </div>
        </div>
        <!-- 回答项 -->
        <div class="card--main">
          <template v-for="item in responseDetailList" :key="item">
            <responseItem
              :ref="(el) => setItemRef(el, `user-${item.userId}`)"
              :response-detail="item"
            >
              <template #optionsBtn="slotScops">
                <div class="slotBtn">
                  <div
                    class="comments item"
                    @click="
                      openReviewBack(
                        slotScops.responseDetail.review_user,
                        slotScops.responseDetail.review_id
                      )
                    "
                  >
                    <el-icon>
                      <ChatDotRound />
                    </el-icon>
                    <span>{{ 0 }} 条回复</span>
                  </div>
                  <div @click="openBackReviewVisible(slotScops)">
                    <el-button type="text">查看回复详情</el-button>
                  </div>
                </div>
              </template>
            </responseItem>
          </template>
        </div>
      </template>
    </el-card>
  </div>

  <!-- 发布回答模态框 -->
  <el-dialog v-model="RichTextVisible">
    <template #title>
      <h3>回答</h3>
    </template>
    <RichText @update="getContent"></RichText>
    <template #footer>
      <el-button @click="handleOneComment">发布回答</el-button>
    </template>
  </el-dialog>

  <!-- 二级评论回复模态框 -->
  <el-dialog align-center width="30%" v-model="openReviewBackVisible">
    <template #title>
      <div class="header">
        <h2 style="white-space: nowrap; margin-top: -8px">回复</h2>
        <div class="backInfo">
          <img :src="reviewBackUserInfo.user_pic" alt="#" />
          <div>
            <span>{{ reviewBackUserInfo.user_name }}</span>
            <div class="desc">{{ reviewBackUserInfo.user_introduce }}</div>
          </div>
        </div>
      </div>
    </template>
    <el-input v-model="backContent" type="textarea" />
    <div class="rebtn">
      <el-button style="margin-top: 10px" v-model="backContent" @click="sendReviewBack"
        >回复</el-button
      >
    </div>
  </el-dialog>

  <!-- 二级评论详情展示框 -->
  <el-dialog title="回复详情" width="50%" style="height: 700px" v-model="backReviewVisible">
    <template #default>
      <div class="oneReview"></div>
      <div class="twoReview"></div>
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

    .content {
      padding: 20px 0;
      .detail {
        padding: 0 10px;
        margin-top: 30px;
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
}

.help-response {
  display: flex;
  width: 100vw;
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

.header {
  display: flex;
  align-items: center;
  .backInfo {
    display: flex;
    align-items: center;
    margin-left: 10px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 10px;
    }

    span {
      font-size: 15px;
    }

    .desc {
      font-size: 13px;
      color: #ccc;
      margin-top: 5px;
    }
  }
}

.reply {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 170px;
  border-top: 1px solid #eee;
  background-color: #fff;

  textarea {
    width: 100%;
    height: 100%;
    padding: 8px;
    border-radius: 5px;
    font-size: 13px;
    box-sizing: border-box;
    outline: none;
    resize: none;
    border: none;
  }

  .send {
    position: absolute;
    bottom: 20px;
    right: -10px;
    width: 100px;
  }
}

.rebtn {
  display: flex;
  justify-content: flex-end;
}
</style>
