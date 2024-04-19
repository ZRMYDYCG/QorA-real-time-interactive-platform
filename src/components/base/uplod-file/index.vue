<template>
  <div>
    <el-upload :multiple="true" :on-change="uploadOss" :auto-upload="false">
      <button>上传视频、音频、图片、文档等</button>
    </el-upload>
  </div>
</template>

<script setup>
// vue
import { reactive, onMounted } from 'vue'

// 初始化OSS
import config from './config.js' //配置文件
const sdk = require('ali-oss') //引入sdk
const $oss = new sdk(config) //实例化

console.log($oss)

// data
const _data = reactive({
  // 当前文件列表(要做手动上传的话使用)
  fileList: []
})

// onMounted
onMounted(() => {
  // 检查oss是否实例化成功
  console.log($oss)
})

// 上传文件改变(在这里自动上传到OSS)
// file: 文件对象
const uploadOss = (file) => {
  // 文件信息
  var file = file.raw
  // console.log(file)
  // 上传时阿里云oss时的header头部携带的信息
  const headers = { token: '123456' }
  // 上传到OSS(put请求)
  // 参数1: 文件名,例如"文档.pdf",同时又是oss存储路径,例如"/document/文档.pdf"
  // 参数2: 文件,file对象
  // 参数3: 更多,例如设置header头携带其他数据
  $oss
    .put(file.name, file, { headers })
    .then((res) => {
      // 上传成功
      console.log('上传成功', res)
    })
    .catch((err) => {
      // 上传失败
      console.log('上传失败', err)
    })
}
</script>

<style scoped></style>
