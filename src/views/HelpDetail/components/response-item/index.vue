<script setup>
import { getLocalStorage } from '@/utils/index.js'
import { onMounted, ref } from 'vue'

let userId = ref(getLocalStorage('userInfo')?.value.user_id)
// TODO: 属性接收
const props = defineProps({
  responseDetail: {
    type: Object,
    required: true,
    default: () => {}
  }
})

// TODO: 用户关注
const handleConcern = () => {}

// TODO: 用户采纳问题
const handleAdopt = () => {}

onMounted(() => {
  console.log(props.responseDetail)
  console.log('打印：', userId.value)
})
</script>

<template>
  <div class="response-item">
    <div class="item-header">
      <div class="item-header--userInfo">
        <img
          class="userAvatarPic"
          src="https://pic.imgdb.cn/item/661fcb210ea9cb1403b668f8.jpg"
          alt="#"
        />
        <div class="desc">
          <p class="nickName">一小池勺</p>
          <p class="signature">我可以看见更远的地方</p>
        </div>
        <img
          class="isAgreeImg"
          v-if="true"
          src="https://pic.imgdb.cn/item/6620aef30ea9cb1403d34cfe.png"
          alt="#"
        />
      </div>
      <div v-if="!responseDetail.review_user === userId" class="item-header--dynamicBtn">
        <el-button @click="handleConcern">关注</el-button>
      </div>
    </div>
    <div class="item-main" v-html="responseDetail.review_text"></div>
    <div class="item-footer">
      <div class="item-footer--time"></div>
      <div class="item-footer--options">
        <div class="left">
          <!-- 便于识别该回答属于哪一个用户  -->
          <slot name="optionsBtn" :responseDetail="responseDetail"></slot>
        </div>
        <div class="right">
          <el-button v-if="!responseDetail.review_user === userId" type="text" @click="handleAdopt"
            >是否采纳？
          </el-button>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<style scoped lang="scss">
.response-item {
  padding: 20px 15px;

  .item-header {
    display: flex;
    justify-content: space-between;

    .item-header--userInfo {
      display: flex;
      align-items: center;

      .userAvatarPic {
        width: 50px;
        height: 50px;
        border-radius: 4px;
      }

      .isAgreeImg {
        width: 35px;
        height: 35px;
        margin-left: 15px;
      }

      .desc {
        margin-left: 15px;

        .nickName {
          font-size: 17px;
        }

        .signature {
          font-size: 13px;
          color: #ccc;
          margin-top: 5px;
        }
      }
    }
  }

  .item-main {
    padding: 30px 0;
    font-size: 20px;
  }

  .item-footer {
    .right {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
