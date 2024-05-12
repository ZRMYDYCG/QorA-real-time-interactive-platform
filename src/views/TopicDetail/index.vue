<script setup>
// 点赞失活 https://pic.imgdb.cn/item/662272270ea9cb1403be0c8f.png
// 点赞激活 https://pic.imgdb.cn/item/662272a80ea9cb1403bf08b0.png

// 收藏失活 https://pic.imgdb.cn/item/662272f10ea9cb1403bfb26a.png
// 收藏激活 https://pic.imgdb.cn/item/662273060ea9cb1403bfd8c8.png

// 评论 https://pic.imgdb.cn/item/662273300ea9cb1403c02a59.png
import { computed, onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { addToBookShelf } from '@/service/UserHome/index.js'
import { fetchEssayDetail } from '@/service/ExchangeCommunity/index.js'
import { fetchPersonalHomepageApi } from '@/service/UserHome/index.js'
import ArticleMsg from './components/UserInfo/ArticleMsg.vue'
import AtricleContent from './components/UserInfo/AtricleContent.vue'
import Comment from './components/Comment/index.vue'
import { getLocalStorage } from '@/utils/index.js'
import { usePublishArticleStore } from '@/stores/modules/PublishArticle/index.js'
import { publicFetch, publicGenerateHistory, addSeeNumber } from '@/service/public/index.js'
import { ElMessage, ElMessageBox } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-message-box.css'
const route = useRoute()
const publishArticleStore = usePublishArticleStore()

let srcList = ref([])

// TODO:渲染文章详情
let articalDetail = ref({})
let userNowInfo = ref({})
let userOtherArticle = ref([])
let preList = ref([])

onMounted(() => {
  fetchEssayDetail(route.params.id).then((res) => {
    console.log('动态详情信息:', res)
    articalDetail.value = res.data

    srcList.value = res.data.pics_list

    preList.value = srcList.value.map((item) => item.picture_address)

    console.log(srcList.value)
    fetchPersonalHomepageApi(res.data.dynamic_now.dynamic_user).then((res) => {
      console.log('用户详情信息:', res)
      userNowInfo.value = res.data.user_now
      publicFetch(res.data.user_now.user_id, 'dynamic').then((res) => {
        console.log('用户其它文章：', res)
        userOtherArticle.value = res.data.dynamics_data
      })
    })
  })
})

// TODO:渲染文章的评论区
let commentList = ref([])
let articleMessage = reactive({})
// 点赞 收藏  评论 浏览量
articleMessage.like = 1
articleMessage.collect = 0
articleMessage.comementNum = commentList.value.length
articleMessage.seeNum = articalDetail.value?.dynamic_now?.dynamic_see
onMounted(async () => {
  publishArticleStore.handlePublicShowReviewApi(route.params.id)
  commentList.value = publishArticleStore.commentList
})
// 按钮权限
let user_id = getLocalStorage('userInfo').value.user_id
let relateVisible = computed(() => {
  return !articalDetail.value?.dynamic_now?.dynamic_user === user_id
})

// TODO:将文章添加进专栏
let selectDialogVisible = ref(false)
let selectItemData = ref([])
let itemValue = ref(null)
const openDialogToSelect = async (articalDetail) => {
  console.log(articalDetail)
  selectDialogVisible.value = true
  let user_id = await getLocalStorage('userInfo')?.value?.user_id
  publicFetch(user_id, 'bookshelf').then(async (res) => {
    console.log('书架详情:', res)
    selectItemData.value = res.data.bookshelf_data
  })
}

const confirmAdd = () => {
  console.log(itemValue.value)
  let dynamicSelectIdList = []
  dynamicSelectIdList.push(route.params.id)
  ElMessageBox.confirm('确定添加该文章到收藏夹吗？', 'Warning', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(async () => {
      let user_id = await getLocalStorage('userInfo')?.value?.user_id

      addToBookShelf(user_id, itemValue.value, dynamicSelectIdList).then(async (res) => {
        console.log(res)
        if (res.status === 200) {
          if (res.data.message === '添加成功') {
            ElMessage.success(res.data.message)

            let user_id = await getLocalStorage('userInfo')?.value?.user_id
            publicGenerateHistory(
              user_id,
              `将《${articalDetail.value.dynamic_now.dynamic_title}》添加进书架`
            )
          } else {
            ElMessage.success('该篇文章已添加在该专栏中了')
          }
        }
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '操作取消'
      })
    })
}

// 增加浏览量
onMounted(() => {
  addSeeNumber('dynamic', route.params.id).then((res) => {
    console.log('增加浏览量:', res)
  })
})
</script>

<template>
  <link rel="stylesheet" href="//at.alicdn.com/t/c/font_4498745_nn0qtah5kp.css" />
  <div class="user-aticle-container">
    <el-card style="min-width: 480px" shadow="hover">
      <div class="userInfo">
        <div class="img-box">
          <img :src="articalDetail.user_pics" alt="" />
        </div>
        <div class="about-user">
          <div class="username">{{ userNowInfo.user_name }}</div>
          <div class="experiencer-level">
            <span>体验官等级</span>
            <el-tag type="warning">LV.{{ userNowInfo.user_grade }}</el-tag>
          </div>
        </div>
      </div>
      <!-- 文章相关 -->
      <div class="user-achievement">
        <div class="publish">
          <span class="publish-num">99</span>
          <span class="publish-title">文章发布</span>
        </div>

        <div class="fans">
          <span class="fans-num">{{ userNowInfo.user_fan }}</span>
          <span class="fans-title">粉丝</span>
        </div>
        <div class="rank">
          <span class="rank-num">1212</span>
          <span class="rank-title">排名</span>
        </div>
        <div class="score">
          <span class="score-num">{{ userNowInfo.user_attention }}</span>
          <span class="score-title">关注</span>
        </div>
      </div>

      <div class="about-article-title">本篇文章</div>
      <div class="about-article">
        <div class="get-like">
          <span class="like-num">99</span>
          <span class="like-title">获赞</span>
        </div>
        <div class="collect">
          <span class="collect-num">120</span>
          <span class="collect-title">收藏</span>
        </div>
        <div class="comment">
          <span class="comment-num">120</span>
          <span class="comment-title">评论</span>
        </div>
        <div class="views">
          <span class="views-num">{{ articalDetail?.dynamic_now?.dynamic_see }}</span>
          <span class="views-title">浏览</span>
        </div>
      </div>

      <!-- 用户相关文章 -->
      <div class="user-relative-title">其他文章</div>
      <div class="user-relative-article" v-if="userOtherArticle.length > 0">
        <div class="animate-box">
          <!-- 1.展示有图片的文章 -->
          <!-- <div class="container-img" v-if="userOtherArticle.imgList.length > 0">
            <template v-for="(item, index) in userOtherArticle" :key="index">
              <div class="article">
                <div class="left-box">
                  <img :src="item.imgList[0]" alt="" />
                </div>
                <AtricleContent :itemDetail="item"></AtricleContent>
              </div>
            </template>
          </div> -->

          <!-- 2.展示无图片照片 -->
          <div class="container-text">
            <template v-for="(item, index) in userOtherArticle" :key="index">
              <AtricleContent :itemDetail="item"></AtricleContent>
            </template>
          </div>
        </div>
      </div>
      <!-- 3.最后一种情况：什么文章都没有 -->
      <div class="container-none" v-else>
        <el-empty description="该用户还未发布其它文章" :image-size="100" />
      </div>

      <!-- 区分是否是自己还是其它用户 -->
      <div class="relate-user" v-if="relateVisible">
        <div class="send-msg">私信</div>
        <div class="care-user">关注</div>
        <div class="enter-home">进入主页</div>
      </div>
    </el-card>

    <el-card class="right-aritcle" shadow="hover">
      <template #header>
        <div class="card-header">
          <span>文章详情</span>
          <div class="addToBookShelf">
            <el-button @click="openDialogToSelect(articalDetail)" size="large" type="text"
              >添加到专栏 <el-icon style="margin-left: 5px" size="20"><FolderAdd /></el-icon
            ></el-button>

            <el-dialog align-center title="选择专栏" width="25%" v-model="selectDialogVisible">
              <!-- {{ articalDetail }} -->
              <el-form-item label="选择已有专栏">
                <el-select
                  style="margin-top: 15px"
                  v-model="itemValue"
                  placeholder="请选择专栏"
                  size="large"
                >
                  <el-option
                    v-for="item in selectItemData"
                    :key="item.bookshelf_id"
                    :label="item.bookshelf_title"
                    :value="item.bookshelf_id"
                  />
                </el-select>
              </el-form-item>
              <template #footer>
                <el-button @click="confirmAdd">添加</el-button>
              </template>
            </el-dialog>
          </div>
        </div>
      </template>
      <div class="aritcle-detail-container">
        <div class="article-title">{{ articalDetail?.dynamic_now?.dynamic_title }}</div>
        <div class="article-content">
          <!-- 左侧预览图是否显示 -->
          <div :class="srcList.length > 0 ? 'left-img-container' : ''" v-if="srcList.length > 0">
            <div class="img-items" v-for="(item, index) in srcList" :key="index">
              <el-image
                :src="item.picture_address"
                :zoom-rate="1.2"
                :max-scale="7"
                :min-scale="0.2"
                :preview-src-list="preList"
                :initial-index="index"
                fit="cover"
              />
            </div>
          </div>
          <div class="right-text-container">
            <div class="text-content" v-html="articalDetail?.dynamic_now?.dynamic_text"></div>
          </div>
        </div>
        <div class="article-bottom">
          <ArticleMsg @update-article="u" v-bind="articleMessage"></ArticleMsg>
        </div>
      </div>
    </el-card>
  </div>
  <Comment :articleId="articalDetail?.dynamic_now?.dynamic_id"></Comment>
</template>

<style lang="scss" scoped>
.card-header {
  font-size: 20px;
  font-weight: 550;
  display: flex;
  justify-content: space-between;
}
.aritcle-detail-container {
  position: relative;
  height: 595px;
  width: 100%;
  .article-title {
    font-size: 18px;
  }
  // background-color: pink;
  .article-bottom {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
  }
  .article-content {
    display: flex;
    align-items: center;
    margin-top: 20px;
    .left-img-container {
      flex: 4;
      height: 450px;
      justify-content: space-around;
      display: grid;
      grid-template-columns: repeat(3, 150px); /* 固定三列网格布局，每列宽度为120px */
      .img-items {
        height: 135px;
        width: 135px;
        border: 1px solid #ccc;
        margin-bottom: 10px;
        border-radius: 10px;
        overflow: hidden;
        .el-image {
          height: 100%;
          width: 100%;
        }
      }
    }
    .right-text-container {
      flex: 5;
      // background-color: pink;
      overflow-y: scroll; /*只是y方向*/
      // height: 500px;
      height: 500px;
      .text-content {
        text-indent: 2em;
        font-size: 17px;
        // padding: 0 0 0 20px;
        padding: 10px;
        :deep(img) {
          width: 100%;
        }
      }
    }
  }
}

.user-aticle-container {
  display: flex;
  .right-aritcle {
    flex: 6;
    margin-left: 15px;
  }
}
.userInfo {
  display: flex;
  .img-box {
    height: 80px;
    border-radius: 50%;
    width: 80px;
    border: 1px solid #ccc;
    overflow: hidden;
    img {
      height: 100%;
      widows: 100%;
      object-fit: cover;
    }
  }

  .about-user {
    display: flex;
    flex-direction: column;
    // justify-content: space-around;
    margin-left: 10px;
    .username {
      font-size: 20px;
      font-weight: 550;
      margin-top: 10px;
    }
    .experiencer-level {
      margin-top: 10px;
      span {
        margin-right: 10px;
      }
    }
  }
}

.user-achievement {
  display: flex;
  margin-top: 20px;
  justify-content: space-around;
  padding: 20px 0;
  background-color: #cccccc3e;
  .publish,
  .fans,
  .rank,
  .score {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .publish-title,
    .fans-title,
    .rank-title,
    .score-title {
      margin-top: 10px;
      font-size: 16px;
      color: #999;
    }
    .publish-num,
    .fans-num,
    .rank-num,
    .score-num {
      font-size: 18px;
      color: #838181;
    }
  }
}

.about-article {
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
  .views,
  .get-like,
  .collect,
  .comment {
    display: flex;
    flex-direction: column;
    font-size: 16px;

    .views-num,
    .like-num,
    .collect-num,
    .comment-num {
    }
    .views-title,
    .like-title,
    .collect-title,
    .comment-title {
      margin-top: 10px;
    }
  }
}

.about-article-title,
.user-relative-title {
  font-size: 20px;
  font-weight: 550;
  padding: 25px 0;
  border-bottom: 1px solid #ccc;
}

//用户相关文章
.user-relative-article {
  position: relative;
  height: 150px;
  background-color: #cccccc24;
  display: flex;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 20px;
  .animate-box {
    position: absolute;
    transform: translateY(-150px);
    animation: scroll 10s linear infinite;
    &:hover {
      animation-play-state: paused;
    }
    //有图文章
    .container-img {
      display: flex;
      flex-direction: column;

      .article {
        display: flex;
        margin-top: 20px;
        cursor: pointer;
        .left-box {
          height: 80px;
          width: 120px;
          border: 1px solid #ccc;
          border-radius: 5px;
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }
      }
    }
    //只展示文本
    .container-text {
      margin-top: 20px;
    }
    //无文章展示
    .container-none {
      // height: 150px;
    }
  }
}

.container-none {
  height: 150px;
  margin-top: 10px;
  .el-empty {
    padding: 0;
  }
}
@keyframes scroll {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-150px);
  }
  90% {
    transform: translateY(-300px);
  }
  100% {
    transform: translateY(0);
  }
}

//用户相关
.relate-user {
  display: flex;
  justify-content: space-around;
  margin: 35px 0 10px;
  .send-msg,
  .care-user,
  .enter-home {
    text-align: center;
    line-height: 35px;
    height: 35px;
    width: 120px;
    border: 1px solid #ccc;
    transition: all 0.3s linear;
    border-radius: 30px;
    cursor: pointer;
    &:hover {
      background-color: #925ff841;
      color: #925ff8;
    }
  }
  .care-user,
  .enter-home {
    margin-left: 30px;
  }
  .enter-home {
  }
}
</style>
