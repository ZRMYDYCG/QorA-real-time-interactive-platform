<script setup>
import { ref } from 'vue'
import { useLoginStore } from '@/stores/modules/Login/index.js'
import { useUserHomeStore } from '@/stores/modules/UserHome/index.js'
import { modifyUserInformationApi } from '@/service/UserHome/index.js'
import { ElMessage, ElMessageBox } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-message-box.css'
import { useRoute } from 'vue-router'
const loginStore = useLoginStore()
const userHomeStore = useUserHomeStore()
const route = useRoute()

// 修改用户个人简介
const text = ref('')
const visibleDialog = ref(false)
const modifyUserInformation = async () => {
  // 清空个人简介
  if (text.value === '') {
    if (!userHomeStore.userHomeInfoDetail.user_introduce) {
      ElMessage.warning('个人简介已为空')
      return
    }
    ElMessageBox.confirm('确定清空个人简介吗？', 'Warning', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(async () => {
        await modifyUserInformationApi(loginStore.userInfo.value.user_id, text.value)
        userHomeStore.handleFetchPersonalHomepageApi(route.query.user_id)
        ElMessage({
          type: 'success',
          message: '个人简介已清空'
        })
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: '操作取消'
        })
      })
  } else {
    const res = await modifyUserInformationApi(loginStore.userInfo.value.user_id, text.value)
    res.data.message === '修改简介成功'
      ? ElMessage.success(res.data.message)
      : ElMessage.warning('修改简介失败')
    userHomeStore.handleFetchPersonalHomepageApi(route.query.user_id)
  }
  visibleDialog.value = false
}

const closeDialog = () => {
  text.value = ''
}
</script>

<template>
  <el-card>
    <div class="header">
      <el-icon @click="visibleDialog = true">
        <Edit />
      </el-icon>
    </div>
    <div class="user_introduce" v-if="userHomeStore.userHomeInfoDetail.user_introduce">
      {{ userHomeStore.userHomeInfoDetail.user_introduce }}
    </div>
    <div class="content" v-else>
      <img src="https://pic.imgdb.cn/item/6610c9ba68eb935713575a4b.png" alt="" />
      <p class="text-20px">还没有填写个人简介</p>
    </div>
  </el-card>
  <el-dialog destroy-on-close @close="closeDialog" v-model="visibleDialog" title="修改个人简介">
    <el-input
      show-word-limit
      maxlength="40"
      v-model="text"
      type="textarea"
      placeholder="修改个人简介"
    ></el-input>
    <el-button class="mt-30px" @click="modifyUserInformation">确定修改</el-button>
  </el-dialog>
</template>

<style scoped lang="scss">
.el-card {
  height: 300px;

  :deep(.el-card__body) {
    .header {
      display: flex;
      width: 100%;
      justify-content: flex-end;

      .el-icon {
        cursor: pointer;
      }
    }

    .content {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      height: 100%;
    }

    .user_introduce {
      font-size: 20px;
      font-family: '楷体';
      padding-top: 40px;
    }
  }

  img {
    width: 80%;
    height: 80%;
    text-align: center;
    margin-bottom: 10px;
  }

  p {
    font-size: 12px;
  }
}
</style>
