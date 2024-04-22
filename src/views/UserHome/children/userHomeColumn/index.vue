<script setup>
import { ref, reactive } from 'vue'
import draggable from 'vuedraggable'
import { Plus, Delete, Edit } from '@element-plus/icons-vue'
/*
  draggable 对CSS样式没有什么要求万物皆可拖拽
  :list="state.list"         //需要绑定的数组
  ghost-class="ghost"        //被替换元素的样式
  chosen-class="chosenClass" //选中元素的样式
  animation="300"            //动画效果
  @start="onStart"           //拖拽开始的事件
  @end="onEnd"               //拖拽结束的事件
  */
const state = reactive({
  //需要拖拽的数据，拖拽后数据的顺序也会变化
  list: [
    { name: 'www.itxst.com', id: 0 },
    { name: 'www.baidu.com', id: 1 },
    { name: 'www.google.com', id: 2 }
  ]
})

//拖拽开始的事件
const onStart = () => {
  console.log('开始拖拽')
}

//拖拽结束的事件
const onEnd = () => {
  console.log('结束拖拽')
}

const centerDialogVisible = ref(false)
</script>

<template>
  <div class="user-home-column">
    <div class="add-columns">
      <el-button :icon="Plus" @click="centerDialogVisible = true">点击创建专栏</el-button>
    </div>
    <div class="itxst">
      <div>
        <draggable
          :list="state.list"
          ghost-class="ghost"
          chosen-class="chosenClass"
          animation="300"
          @start="onStart"
          @end="onEnd"
        >
          <template #item="{ element }">
            <div class="column-items">
              <div class="about-column">
                <span class="column-title">专栏名称：地球为什么是圆的</span>
                <span class="create-time">创建时间 2004-12-12</span>
              </div>
              <div class="edit-del-column">
                <el-button type="primary" size="default" :icon="Edit" circle />
                <el-button type="danger" :icon="Delete" circle />
              </div>
            </div>
          </template>
        </draggable>
      </div>
      <div>{{ state.list }}</div>
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
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false"> 确认创建 </el-button>
        </div>
      </template>
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
