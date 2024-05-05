<script setup>
import { ref, reactive, onMounted } from 'vue'
import draggable from 'vuedraggable'
import { createBookshelf, fetchBookShelfDetail } from '@/service/UserHome/index.js'
import { publicFetch, publicDelete } from '@/service/public/index.js'
import { useRoute } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-message-box.css'
const route = useRoute()

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
const columnInfo = reactive({
  title: '',
  id: parseInt(route.query.user_id)
})

const handleCreateBookshelfApi = async () => {
  try {
    const res = await createBookshelf(columnInfo.id, columnInfo.title)
    centerDialogVisible.value = false
    console.log(res)
    ElMessage.success('创建成功')
    columnInfo.title = ''
    fetchDataAction()
  } catch {
    ElMessage.warning('该收藏夹已存在')
  }
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
const handleDeleteColumn = async (value) => {
  console.log(value.bookshelf_id)
  ElMessageBox.confirm('确定删除该求助吗？', 'Warning', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      publicDelete('bookshelf', value.bookshelf_id).then(() => {
        ElMessage({
          type: 'success',
          message: '删除成功'
        })
        fetchDataAction()
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '操作取消'
      })
    })
}

// TODO:渲染某个书架的详情
let drawerVisible = ref(false)
let drawerName = ref('')
let drawBookShelfDetail = ref({})
const handleFetchBookShelfDetailApi = (value) => {
  console.log(value.bookshelf_id)
  drawerName.value = value
  drawerVisible.value = true
  fetchBookShelfDetail(value.bookshelf_id).then((res) => {
    console.log('书架详情:', res)
    drawBookShelfDetail.value = res.data.dynamic_list
  })
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
              <div class="about-column" @click="handleFetchBookShelfDetailApi(element)">
                <span class="column-title">专栏名称：{{ element.bookshelf_title }}</span>
                <span class="create-time"
                  >创建时间：{{ element.bookshelf_time.replace(/\s*GMT/, '') }}</span
                >
              </div>
              <div class="edit-del-column">
                <el-button type="primary" size="default" circle>
                  <el-icon><Edit /></el-icon>
                </el-button>
                <el-button type="danger" @click="handleDeleteColumn(element)" :icon="Delete" circle>
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
          <el-button type="primary" @click="handleCreateBookshelfApi"> 确认创建 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>

  <!-- 书架抽屉 -->
  <el-drawer v-model="drawerVisible" :direction="direction">
    <template #header>
      <h4 style="font-size: 28px">{{ drawerName.bookshelf_title }}</h4>
    </template>
    <template #default>
      <div class="empty" v-if="drawBookShelfDetail.length === 0">
        <img src="https://pic.imgdb.cn/item/663709000ea9cb14032f7190.png" alt="" />
        <div>书架空空如也</div>
      </div>
      <div v-else>
        <template v-for="(item, index) in drawBookShelfDetail" :key="index">
          <div class="main" style="margin-bottom: 10px">
            <div class="main-left">
              <img :src="item.auth_pic" alt="" />
            </div>
            <div
              class="main-right"
              style="margin-left: 20px"
              @click="$router.push(`/topicDetail/${item.dynamic_id}`)"
            >
              <div>
                <h3>{{ item.dynamic_title }}</h3>
                <div style="color: #ccc; font-size: 13px; padding: 5px 0" class="time">
                  {{ item.dynamic_time }}
                </div>
                <div v-text="item.dynamic_text.slice(0, 40) + '...'"></div>
              </div>
              <div>
                <div class="tag-list" style="margin-top: 5px">
                  <el-tag
                    style="margin-right: 4px"
                    v-for="(item, index) in item.tag_list"
                    :key="index"
                    >生活</el-tag
                  >
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button type="wrang" @click="drawerVisible = false">关闭</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  padding: 10px 10px;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    background-color: #ccc;
  }
}
.main-left {
  width: 80px;
  height: 80px;
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}

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

<style lang="scss">
.el-drawer__header {
  border-bottom: 1px solid;
  padding-bottom: 30px;
}

.empty {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  img {
    margin: 100px auto;
    width: 300px;
  }
}
</style>
