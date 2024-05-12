<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { fetchColumnDetail, changeColumnApi, moveFavoriteApi } from '@/service/UserHome/index.js'
import { ElMessage, ElMessageBox } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-message-box.css'

const route = useRoute()
let user_id = route.query.user_id

// TODO:收藏夹的激活状态
const activeNames = ref(['1'])
const handleChange = (val) => {
  console.log(val)
}

// TODO:创建新的收藏夹
let collectionDialogVisible = ref(false)
let innerCollectionDialogVisible = ref(false)
let bag_name = ref('')
let bag_desc = ref('')
const handleNewCollection = async () => {
  const res = await changeColumnApi(parseInt(user_id), bag_name.value, 'add')
  if (res.data.message) {
    ElMessage.success(res.data.message)
    if (res.data.message === '已存在该收藏夹') {
      innerCollectionDialogVisible.value = true
    } else if (res.data.message === '创建收藏夹成功') {
      innerCollectionDialogVisible.value = false
    }
  }
  const res2 = await fetchColumnDetail(user_id)
  favoriteList.value = res2.data.favorite_name_list_now
  console.log(res2)
}

// TODO:删除收藏夹
const handleDeleteCollection = async (bag_name, type = 'less') => {
  ElMessageBox.confirm('确定删除该求助吗？', 'Warning', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      changeColumnApi(user_id, bag_name, type).then(async (res) => {
        console.log(res)
        ElMessage({
          type: 'success',
          message: '删除成功'
        })
        const res3 = await fetchColumnDetail(user_id)
        favoriteList.value = res3.data.favorite_name_list_now
        console.log('删除后:', res3)
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '操作取消'
      })
    })
}

// TODO:将收藏项移入或移出收藏夹
let deleteDialogVisible = ref(false)
const handlemMoveFavoriteApi = (bag_name, favorite_id_list, type = 'less') => {
  deleteDialogVisible.value = true
  confirm(user_id, bag_name, favorite_id_list, type)
}

const confirm = (user_id, bag_name, favorite_id_list, type) => {
  moveFavoriteApi(user_id, bag_name, favorite_id_list, type)
}

// TODO:是否私密或公开
let radio = ref('1')

// TODO:渲染收藏夹
let favoriteList = ref([])
onMounted(async () => {
  const { user_id } = route.query
  const res = await fetchColumnDetail(user_id)
  console.log(res)
  favoriteList.value = res.data.favorite_name_list_now
})
</script>

<template>
  <div class="user-home-collection">
    <el-button size="small" @click="collectionDialogVisible = true">
      管理收藏夹
      <el-icon>
        <Setting />
      </el-icon>
    </el-button>
    <el-collapse v-model="activeNames" @change="handleChange">
      <template v-for="(item, index) in favoriteList" :key="index">
        <!--   收藏夹标题   -->
        <el-collapse-item :title="item.bag_name" :name="idnex">
          <!--    收藏夹内容    -->
          <template v-for="(item, index) in favoriteList.favorite_id_list" :key="index">
            <div class="collection-item">
              <div class="item-left">
                <el-tag>{{}}</el-tag>
                <div class="title">{{}}</div>
              </div>
              <div class="item-right">
                <el-button circle @click="handlemMoveFavoriteApi()">
                  <el-icon>
                    <Delete />
                  </el-icon>
                </el-button>
              </div>
            </div>
          </template>
        </el-collapse-item>
      </template>
    </el-collapse>
  </div>

  <el-dialog width="70%" title="管理收藏夹" v-model="collectionDialogVisible">
    <template #default>
      <el-button
        style="margin-bottom: 10px"
        size="small"
        @click="innerCollectionDialogVisible = true"
        >新建收藏夹
      </el-button>

      <div class="collectionList">
        <template v-for="(item, index) in favoriteList" :key="index">
          <el-card
            body-style="display: flex;justify-content: space-between;width: 100%; align-item: center"
          >
            <template #default>
              <div class="left">
                <div class="left-header">{{ item.bag_name }}</div>
                <div class="left-footer">
                  <el-tag>{{ item.favorite_id_list.length }}个收藏</el-tag>
                  <el-tag>公开</el-tag>
                </div>
              </div>
              <div class="right">
                <el-button circle>
                  <el-icon>
                    <EditPen />
                  </el-icon>
                </el-button>
                <el-button circle @click="handleDeleteCollection(item.bag_name)">
                  <el-icon>
                    <Delete />
                  </el-icon>
                </el-button>
              </div>
            </template>
          </el-card>
        </template>
      </div>
    </template>
  </el-dialog>

  <el-dialog v-model="innerCollectionDialogVisible" title="新建收藏夹" width="300">
    <el-form label-position="right">
      <el-form-item label="收藏夹名">
        <el-input v-model="bag_name"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="bag_desc" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="是否私密">
        <el-radio-group v-model="radio">
          <el-radio value="1" size="small">公开</el-radio>
          <el-radio value="2" size="small">私密</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <el-form-item>
      <el-button @click="innerCollectionDialogVisible = false">取消</el-button>
      <el-button @click="handleNewCollection">创建</el-button>
    </el-form-item>
  </el-dialog>

  <el-dialog v-model="deleteDialogVisible" title="确定删除该收藏项？">
    <el-button @click="handleNewCollection">确定</el-button>
    <el-button @click="deleteDialogVisible = false">取消</el-button>
  </el-dialog>
</template>

<style scoped lang="scss">
.user-home-collection {
  .el-button {
    margin-bottom: 20px;
  }

  .collection-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px;
    transition: all 0.3s;

    .el-tag {
      margin-right: 15px;
    }

    &:hover {
      transform: translateY(-3px);
      cursor: pointer;
    }
  }
}

.collectionList {
  .el-card {
    display: flex;
    margin-bottom: 10px;
    .left {
      .left-header {
        padding-bottom: 15px;
      }

      .left-footer {
        .el-tag {
          margin-right: 10px;
        }
      }
    }

    .right {
    }
  }
}
</style>

<style>
.el-collapse-item__header {
  padding: 10px;
}
</style>
