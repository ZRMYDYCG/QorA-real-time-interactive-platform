<script setup>
import { ref } from 'vue'
import { useLoginStore } from '@/stores/modules/Login/index.js'
import { modifyUserInformationApi } from '@/service/UserHome/index.js'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

const loginStore = useLoginStore()

// 修改用户个人简介
const text = ref('')
const visibleDialog = ref(false)
const modifyUserInformation = async () => {
  const res = await modifyUserInformationApi(loginStore.userInfo.value.user_id, text.value)
  res.data.message === '修改简介成功'
    ? ElMessage.success(res.data.message)
    : ElMessage.warning('修改简介失败')
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
    <div v-if="loginStore.userInfo.value?.user_introduce" class="content">
      {{ loginStore.userInfo.value?.user_introduce }}
    </div>
    <div class="content" v-else>
      <img src="https://pic.imgdb.cn/item/6610c9ba68eb935713575a4b.png" alt="" />
      <p>还没有填写个人简介</p>
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
    <el-button @click="modifyUserInformation">确定修改</el-button>
  </el-dialog>
</template>

<style scoped lang="scss">
.el-card {
  height: 300px;

  :deep(.el-card__body) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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
