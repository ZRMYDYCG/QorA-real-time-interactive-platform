<template>
  <div>
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="_data.toolbarConfig"
      :mode="_data.mode"
    />

    <Editor
      v-model="_data.html"
      class="content"
      :defaultConfig="_data.editorConfig"
      :mode="_data.mode"
      @onCreated="onCreated"
      @onChange="onChange"
    />
  </div>
</template>

<script setup>
import { reactive, shallowRef, onMounted, onBeforeUnmount } from 'vue'

// 富文本相关
import '@wangeditor/editor/dist/css/style.css' //编辑器样式
import { Editor, Toolbar } from '@wangeditor/editor-for-vue' //组件
const editorRef = shallowRef() //编辑器实例(必须用shallowRef)

// emits
const emits = defineEmits(['update'])

// data数据
const _data = reactive({
  html: '', // 当前富文本内容(双向绑定)
  toolbarConfig: {}, // 工具栏配置,详见文档
  editorConfig: { placeholder: '写点东西吧...' }, // 编辑器配置,详见文档
  mode: 'simple' // or 'simple'
})

// onMounted
onMounted(() => {
  // 模拟 ajax 请求，异步渲染编辑器(通常是编辑富文本时传入过来的默认内容)
  // setTimeout(() => {
  //   _data.html = '<p>模拟 Ajax 异步设置内容 HTML</p>'
  // }, 1500)
})

// TODO:富文本内图片上传
_data.editorConfig.MENU_CONF = {}
_data.editorConfig.MENU_CONF['uploadImage'] = {
  server: 'http://127.0.0.1:5000/api/upload/pics', // => 完整服务端地址
  base64LimitSize: 10 * 1024, // 10kb
  fieldName: 'image0'
}

// => 插入图片之前会执行的函数
_data.editorConfig.MENU_CONF['insertImage'] = {
  parseImageSrc: (src) => {
    console.log(src)
    if (src.indexOf('http') !== 0) {
      return `http://localhost:5173${src}`
    }
    return src
  }
}
/**
 * [回调函数] 富文本加载完毕
 * @description 创建实例
 * @param {Object} editor - 实例
 * @return void
 */
const onCreated = (editor) => {
  // console.log(editor)
  editorRef.value = editor //记录editor实例
}

/**
 * [回调函数] 监听富文本发生变化(编辑器内容、选区变化时)
 * @description 通知父组件更新内容
 * @param {Object} editor - 实例
 */
const onChange = (editor) => {
  // console.log(editor.getHtml())
  emits('update', editor.getHtml())
  // 父组件接收: <Editor @update="XXX" />
}

/**
 * [API] 插入自定义内容
 * @description 调用API示例(后续也是这样使用)
 * @return void
 */
const setHtml = () => {
  // 获取实例
  const editor = editorRef.value
  if (editor == null) return
  // 调用API
  editor.dangerouslyInsertHtml(`<h1>标题</h1><p>文本 <b>加粗</b></p>`)
}

/**
 * [API] 清空富文本内容
 * @description 调用API示例(后续也是这样使用)
 * @return void
 */
const clear = () => {
  // 获取实例
  const editor = editorRef.value
  if (editor == null) return
  // 调用API
  editor.clear()
}

// 页面离开时销毁实例
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy() // 组件销毁时，及时销毁编辑器
})
</script>

<style scoped>
.content {
  height: 500px;
  overflow-y: hidden;
}
</style>
