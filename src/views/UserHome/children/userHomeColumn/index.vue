<script setup>
import { ref, reactive, onMounted } from 'vue'
import draggable from 'vuedraggable'
import { createSpecialApi } from '@/service/UserHome/index.js'
import { publicFetch, publicDelete } from '@/service/public/index.js'
import { useRoute } from 'vue-router'
const route = useRoute()
/*
  draggable 对CSS样式没有什么要求万物皆可拖拽
  :list="state.list"         //需要绑定的数组
  ghost-class="ghost"        //被替换元素的样式
  chosen-class="chosenClass" //选中元素的样式
  animation="300"            //动画效果
  @start="onStart"           //拖拽开始的事件
  @end="onEnd"               //拖拽结束的事件
  */
// const state = reactive({
//   //需要拖拽的数据，拖拽后数据的顺序也会变化
//   list: [
//     { name: 'www.itxst.com', id: 0 },
//     { name: 'www.baidu.com', id: 1 },
//     { name: 'www.google.com', id: 2 }
//   ]
// })

//拖拽开始的事件
const onStart = () => {
  console.log('开始拖拽')
}

//拖拽结束的事件
const onEnd = () => {
  console.log('结束拖拽')
}

const centerDialogVisible = ref(false)

// TODO:创建专栏
const columnInfo = ref({})
columnInfo.value.title = ''
columnInfo.value.TagList = []
columnInfo.value.ImgList = []
columnInfo.value.type = 'bookshelf'
columnInfo.value.id = parseInt(route.query.user_id)
const handleCreateSpecialApi = async () => {
  const res = await createSpecialApi(columnInfo.value)
  centerDialogVisible.value = false
  console.log(res)
  fetchDataAction()
}

// TODO:渲染专栏列表
const columnListData = ref([])
const fetchDataAction = async () => {
  const res = await publicFetch(route.query.user_id, 'bookshelf')
  columnListData.value = res.data.bookshelf_data
  console.log(res)
}
onMounted(async () => {
  fetchDataAction()
})

// TODO:删除某一个专栏
let deletDialogVisible = ref(false)
const handleDeleteColumn = async (type = 'bookshelf', object_id) => {
  await publicDelete(type, object_id)
  deletDialogVisible.value = false
}
</script>

<template>
  <div class="user-home-column">
    <div class="add-columns">
      <el-button @click="centerDialogVisible = true"
        ><el-icon><CirclePlus /></el-icon> 点击创建专栏</el-button
      >
    </div>
    <div class="itxst">
      <div>
        <draggable
          :list="columnListData"
          ghost-class="ghost"
          chosen-class="chosenClass"
          animation="300"
          @start="onStart"
          @end="onEnd"
        >
          <template #item="{ element }">
            <div class="column-items">
              <div class="about-column">
                <span class="column-title">专栏名称：{{ element.bookshelf_title }}</span>
                <span class="create-time"
                  >创建时间：{{ element.bookshelf_time.replace(/\s*GMT/, '') }}</span
                >
              </div>
              <div class="edit-del-column">
                <el-button type="primary" size="default" circle>
                  <el-icon><Edit /></el-icon>
                </el-button>
                <el-button type="danger" @click="deletDialogVisible = true" :icon="Delete" circle>
                  <el-icon><Delete /></el-icon>
                </el-button>
              </div>
            </div>
          </template>
        </draggable>
      </div>
    </div>
    <!-- 打开对话框 -->
    <el-dialog
      v-model="centerDialogVisible"
      title="创建专栏"
      width="500"
      align-center
      :center="true"
    >
      <el-form status-icon>
        <el-form-item label="请输入专栏名" required="true">
          <el-input v-model="columnInfo.title"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleCreateSpecialApi"> 确认创建 </el-button>
        </div>
      </template>
    </el-dialog>

    <el-dialog title="确定删除该专栏吗？" v-model="deletDialogVisible">
      <el-button @click="deletDialogVisible = false">取消</el-button>
      <el-button @click="handleDeleteColumn">删除</el-button>
    </el-dialog>
  </div>
</template>

<style scoped lang="scss">
.column-items {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid #ccc;
  cursor: grab;
  margin-bottom: 20px;
  border-radius: 5px;
  .about-column {
    display: flex;
    flex-direction: column;
    .column-title {
      font-size: 18px;
    }
    .create-time {
      font-size: 15px;
      margin-top: 15px;
      color: #999;
    }
  }
}
.itxst {
  width: 700px;
  margin-top: 20px;
  // display: flex;
}
.itxst > div:nth-of-type(1) {
  flex: 1;
}
.itxst > div:nth-of-type(2) {
  width: 270px;
  padding-left: 20px;
}
.item {
  border: solid 1px #eee;
  padding: 6px 10px;
  text-align: left;
}

.item:hover {
  cursor: grab;
}
.item + .item {
  margin-top: 10px;
}
.ghost {
  border: solid 1px rgb(19, 41, 239);
}
.chosenClass {
  background-color: #f1f1f1;
}
</style>
