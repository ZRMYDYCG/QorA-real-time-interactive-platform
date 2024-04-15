<template>
  <div class="account">
    <el-form :model="accountInfo" ref="accountFormRef" :rules="accountRules" label-width="60px">
      <el-form-item label="账号" prop="user_number">
        <el-input v-model="accountInfo.user_number"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="user_password">
        <el-input type="password" v-model="accountInfo.user_password"></el-input>
      </el-form-item>
      <div class="text-3 flex justify-end text-#aaa">
        没有账号？<span class="text-#B292F6 hover-scale" @click="dialogVisible = true"
          >注册一个</span
        >
      </div>
    </el-form>
  </div>
  <!-- 模态框 -->
  <el-dialog
    v-model="dialogVisible"
    class="text-center"
    title="注册账号"
    width="400"
    @close="handleClose"
  >
    <el-form
      class="flex justify-center w-380x align-mid flex-col"
      label-position="right"
      label-width="90px"
      :rules="enrollRules"
      :model="enrollInfo"
      ref="enrollFormRef"
    >
      <el-form-item prop="enroll_number" label="账号">
        <el-input v-model="enrollInfo.enroll_number"></el-input>
      </el-form-item>
      <el-form-item prop="enroll_password" label="密码">
        <el-input type="password" v-model="enrollInfo.enroll_password"></el-input>
      </el-form-item>
      <el-form-item prop="enroll_rePassword" label="确认密码">
        <el-input type="password" v-model="enrollInfo.enroll_rePassword"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">注册</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useLoginStore } from '@/stores/modules/Login/index.js'

const loginStore = useLoginStore()

// 用户登录
const accountInfo = reactive({
  user_number: '',
  user_password: ''
})

const loginAction = () => {
  console.log('登录')
  // const account = accountInfo.user_number
  // const password = accountInfo.user_password
  loginStore.accountLoginAction()
}

// 用户注册模态框
const dialogVisible = ref(false)

// 用户登录校验
const accountFormRef = ref()
const accountRules = {
  user_number: [
    { required: true, message: '账号不能为空', trigger: 'blur' },
    { pattern: /^[a-z0-9]{6,20}$/, message: '必须是6~20个字母或数字', trigger: 'blur' }
  ],
  user_password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { pattern: /^[a-z0-9]{8,}$/, message: '密码必须在8位以上', trigger: 'blur' }
  ]
}

// 用户注册
const enrollInfo = reactive({
  enroll_number: '',
  enroll_password: '',
  enroll_rePassword: ''
})
// resetFields
// 关闭注册模态框
const enrollFormRef = ref()
const handleClose = () => {
  enrollFormRef.value.resetFields()
  dialogVisible.value = false
}

// 用户注册自定义校验
const validateEnrollRePassword = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入确认密码'))
  } else if (value !== enrollInfo.enroll_password) {
    callback(new Error('两次输入的密码不一致'))
  } else {
    callback()
  }
}

// 用户注册校验
const enrollRules = {
  enroll_number: [
    { required: true, message: '账号不能为空', trigger: 'blur' },
    { pattern: /^[a-z0-9]{6,20}$/, message: '必须是6~20个字母或数字', trigger: 'blur' }
  ],
  enroll_password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { pattern: /^[a-z0-9]{3,}$/, message: '密码必须在3位以上', trigger: 'blur' }
  ],
  enroll_rePassword: [
    {
      validator: validateEnrollRePassword,
      trigger: ['blur', 'change']
    }
  ]
}

// 注册校验
defineExpose({
  loginAction
})
</script>

<style scoped lang="scss">
.hover-scale {
  transition: transform 0.3s ease;
  display: inline-block;
  transform-origin: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
}
</style>
