<script setup>
import { ref } from 'vue'

const activeNames = ref(['1'])
const handleChange = (val) => {
  console.log(val)
}

const collectionDialogVisible = ref(false)

const innerCollectionDialogVisible = ref(false)

const handleNewCollection = () => {
  innerCollectionDialogVisible.value = true
}

let radio = ref('1')
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
            <el-tag>体验分享</el-tag>
            <div class="title">为什么超威电池会更加好用呢？</div>
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
                <el-button circle>
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
</template>

<style scoped lang="scss">
.user-home-collection {
  .el-button {
    margin-bottom: 20px;
  }

  .collection-item {
    display: flex;
    align-items: center;
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
