<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { fetchColumnDetail, changeColumnApi, moveFavoriteApi } from '@/service/UserHome/index.js'

const route = useRoute()
let user_id = route.query.user_id

// TODO:收藏夹的激活状态
const activeNames = ref(['1'])
const handleChange = (val) => {
  console.log(val)
}

// TODO:创建新的收藏夹
let collectionDialogVisible = ref(false)
const handleNewCollection = async (bag_name, type = 'add') => {
  innerCollectionDialogVisible.value = true
  const res = await changeColumnApi(user_id, bag_name, type)
  console.log(res)
  await fetchColumnDetail(user_id)
}

// TODO:删除收藏夹
let innerCollectionDialogVisible = ref(false)
const handleDeleteCollection = async (bag_name, type = 'less') => {
  const res = await changeColumnApi(user_id, bag_name, type)
  console.log(res)
  await fetchColumnDetail(user_id)
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
onMounted(async () => {
  const { user_id } = route.query
  const res = await fetchColumnDetail(user_id)
  console.log(res)
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
      <!--   收藏夹标题   -->
      <el-collapse-item title="旅行" name="1">
        <!--    收藏夹内容    -->
        <template v-for="(item, index) in 10" :key="index">
          <div class="collection-item">
            <div class="item-left">
              <el-tag>体验分享</el-tag>
              <div class="title">为什么超威电池会更加好用呢？</div>
            </div>
            <div class="item-right">
              <el-button circle @click="handlemMoveFavoriteApi">
                <el-icon>
                  <Delete />
                </el-icon>
              </el-button>
            </div>
          </div>
        </template>
      </el-collapse-item>
      <el-collapse-item title="模型" name="2"></el-collapse-item>
      <el-collapse-item title="电器" name="3"></el-collapse-item>
      <el-collapse-item title="美食" name="4"></el-collapse-item>
    </el-collapse>
  </div>

  <el-dialog width="550" title="管理收藏夹" v-model="collectionDialogVisible">
    <template #default>
      <el-button style="margin-bottom: 10px" size="small" @click="handleNewCollection"
        >新建收藏夹
      </el-button>

      <div class="collectionList">
        <div class="list-item">
          <el-card
            body-style="display: flex;justify-content: space-between;width: 100%; align-item: center"
          >
            <template #default>
              <div class="left">
                <div class="left-header">骑行</div>
                <div class="left-footer">
                  <el-tag>47个收藏</el-tag>
                  <el-tag>私密</el-tag>
                </div>
              </div>
              <div class="right">
                <el-button circle>
                  <el-icon>
                    <EditPen />
                  </el-icon>
                </el-button>
                <el-button circle @click="handleDeleteCollection">
                  <el-icon>
                    <Delete />
                  </el-icon>
                </el-button>
              </div>
            </template>
          </el-card>
        </div>
      </div>
    </template>
  </el-dialog>

  <el-dialog v-model="innerCollectionDialogVisible" title="新建收藏夹" width="300">
    <el-form label-position="right">
      <el-form-item label="收藏夹名">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="是否私密">
        <el-radio-group v-model="radio">
          <el-radio value="1" size="small">公开</el-radio>
          <el-radio value="2" size="small">私密</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </el-dialog>

  <el-dialog v-model="deleteDialogVisible" title="确定删除该收藏项？">
    <el-button @click="confirm">确定</el-button>
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
  .list-item {
    .el-card {
      display: flex;

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
}
</style>

<style>
.el-collapse-item__header {
  padding: 10px;
}
</style>
