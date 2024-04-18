<script setup>
// TODO: 属性接收
defineProps({
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
          <p class="nickName">{{ responseDetail.nickName }}</p>
          <p class="signature">{{ responseDetail.signature }}</p>
        </div>
        <img
          class="isAgreeImg"
          v-if="responseDetail.isAgree"
          src="https://pic.imgdb.cn/item/6620aef30ea9cb1403d34cfe.png"
          alt="#"
        />
      </div>
      <div v-if="responseDetail.userId === 1" class="item-header--dynamicBtn">
        <el-button @click="handleConcern">关注</el-button>
      </div>
    </div>
    <div class="item-main">
      {{ responseDetail.content }}
    </div>
    <div class="item-footer">
      <div class="item-footer--time"></div>
      <div class="item-footer--options">
        <div class="left">
          <!--     便于识别该回答属于哪一个用户     -->
          <slot name="optionsBtn" :responseDetail="responseDetail"></slot>
        </div>
        <div class="right">
          <el-button v-if="!responseDetail.isAgree" type="text" @click="handleAdopt"
            >是否采纳该回答？
          </el-button>
        </div>
      </div>
    </div>
    <div v-if="responseDetail.isFold">
      {{ 2 }}
    </div>
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
        width: 65px;
        height: 65px;
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
  }

  .item-footer {
    .right {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
