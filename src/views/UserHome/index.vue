<template>
  <div class="userHome">
    <div class="header--userInfo">
      <div class="userInfo--pic">
        <img src="https://pic.imgdb.cn/item/660e1fa89f345e8d03525df8.png" alt="" />
      </div>
      <div class="userInfo--other">
        <div class="name">
          <span>一小池勺</span>
          <el-icon @click="openEdit" style="cursor: pointer; font-size: 20px">
            <Edit />
          </el-icon>
        </div>
        <div class="grade">
          <span style="font-size: 14px">鉴赏等级</span>
          <span class="num">Lv.8</span>
        </div>
        <div class="following">
          <div class="concern" @click="$router.push('/socializingDetail')">
            <span style="font-size: 17px">关注</span>
            <span style="font-size: 17px"> 9</span>
          </div>
          <div class="fan" @click="$router.push('/socializingDetail')">
            <span style="font-size: 17px">粉丝</span>
            <span style="font-size: 17px"> 10</span>
          </div>
        </div>
      </div>
    </div>
    <div class="nav--options">
      <YsTabs
        class="ys-tabs"
        :tabs="tabConfig"
        :activeIndex="activeTabIndex"
        :isVertical="isVertical"
      >
        <div class="tab-content">
          <router-view></router-view>
        </div>
      </YsTabs>
    </div>
    <!-- 弹窗编辑用户信息组件 -->
    <el-dialog
      v-model="dialogTableVisible"
      :show-close="false"
      :align-center="true"
      width="1050"
      style="height: 900px; margin-top: 60px; padding-left: 100px; padding-right: 70px"
    >
      <div class="edit-title">个人信息编辑</div>
      <el-form>
        <el-form-item label="昵称：">
          <el-input style="width: 280px"></el-input>
        </el-form-item>
        <el-form-item label="头像：">
          <el-upload
            class="avatar-uploader"
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon">
              <Plus />
            </el-icon>
          </el-upload>
        </el-form-item>
        <el-form-item label="简介：">
          <el-input
            v-model="textarea2"
            style="width: 240px"
            :autosize="{ minRows: 2, maxRows: 4 }"
            type="textarea"
            placeholder="用简短得话描述一下自己吧..."
          />
        </el-form-item>
        <el-form-item label="性别：">
          <el-radio-group v-model="radio">
            <el-radio :value="3">🚹</el-radio>
            <el-radio :value="6">🚺</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="生日：">
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="Pick a Date"
            format="YYYY/MM/DD"
          />
        </el-form-item>
        <el-form-item label="所在地区：" style="margin-bottom: 30px; margin-top: 20px">
          <el-cascader :options="mapOptions" clearable />
        </el-form-item>
      </el-form>
      <div class="cur-address">
        <div class="title">当前收货地址信息：</div>
        <div class="user-info">收货人：猪是的念来过倒</div>
        <div class="contact">联系方式：14838388444</div>
        <div class="address-detail">收货地址：江西省九江市南航科院</div>
      </div>
      <div class="edit-address-box">
        <span class="address-edit" @click="showAddressDialog = true">管理收货地址</span>
        <span class="add-address" @click="addAddressDialog = true">新增收获地址</span>
      </div>
      <div class="submit-edit">
        <span>提交修改</span>
      </div>
    </el-dialog>

    <!-- 编辑地址的弹窗 -->
    <el-dialog v-model="showAddressDialog" title="切换收货地址" width="30%" center>
      <div class="addressWrapper">
        <div
          class="text item"
          :class="{ active: activeAddIndex === index }"
          v-for="(item, index) in userAddresses"
          :key="item.id"
          @click="activeAddIndex = index"
        >
          <ul>
            <li>
              <span>收<i />货<i />人：</span>{{ item.receiver }}
            </li>
            <li><span>联系方式：</span>{{ item.contact }}</li>
            <li><span>收货地址：</span>{{ item.fullLocation + item.address }}</li>
          </ul>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button>取消</el-button>
          <el-button type="primary" @click="showAddressDialog = false">确定</el-button>
        </span>
      </template>
    </el-dialog>

    <!-- 新增收获地址 -->
    <el-dialog v-model="addAddressDialog" title="新增收获地址" width="500" destroy-on-close center>
      <el-form class="addAddress-form">
        <el-form-item label="收货人：">
          <el-input placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="联系方式：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="选择地区：">
          <el-cascader :options="mapOptions" clearable />
        </el-form-item>
        <el-form-item label="详细地址：">
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button style="margin-left: 280px" @click="addAddressDialog = false">取消</el-button>
          <el-button type="primary" @click="addAddressDialog = false"> 确认</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import YsTabs from '@/components/base/ys-tabs/src/ys-tabs.vue'

const tabConfig = [
  { name: '主页面板', path: '/userHome/index' },
  { name: '体验分享', path: '/userHome/dynamic' },
  { name: '我的回答', path: '/userHome/response' },
  { name: '我的求助', path: '/userHome/help' },
  { name: '我的收藏', path: '/userHome/collection' },
  { name: '我的专栏', path: '/userHome/column' }
]

const activeTabIndex = 0
const isVertical = false

import { onMounted, ref } from 'vue'

const dialogTableVisible = ref(false)
const openEdit = () => {
  dialogTableVisible.value = !dialogTableVisible.value
}

const activeAddIndex = ref(0)
const showAddressDialog = ref(false)
const userAddresses = ref([
  {
    receiver: 'xiaoxixi',
    contact: '13834334343',
    fullLocation: '江西省九江市',
    address: '共青城市'
  },
  {
    receiver: 'hh',
    contact: '12234334343',
    fullLocation: '江西省九江市',
    address: '南航科院'
  },
  {
    receiver: 'hehexi',
    contact: '13832222343',
    fullLocation: '江西省九江市',
    address: '财大'
  }
])

const mapOptions = ref([])
import axios from 'axios'

const province = ref([])
const getMapData = async () => {
  const res = await axios.get(
    'https://restapi.amap.com/v3/config/district?keywords&subdistrict=2&key=8d616798ad29e0ab34f2a16b5050ded8'
  )
  // console.log(res)
  province.value = res.data.districts[0].districts
  getProvinceData()
  // console.log(mapOptions.value)
}

const getProvinceData = () => {
  mapOptions.value = province.value.map((item) => {
    return {
      value: item.name,
      label: item.name,
      children: item.districts.map((item2) => {
        return {
          value: item2.name,
          label: item2.name
        }
      })
    }
  })
}

//新增收货地址对话框
const addAddressDialog = ref(false)

onMounted(() => {
  getMapData()
})
</script>

<style lang="scss">
.submit-edit {
  display: flex;
  justify-content: center;
  margin-top: 50px;

  span {
    cursor: pointer;
    padding: 15px 100px;
    border: 1px solid #8d65c5;
    transition: all 0.4s linear;
    font-size: 16px;

    &:hover {
      color: #8d65c5;
      background-color: #f4effe;
    }
  }
}

.cur-address {
  width: auto;
  width: 300px;
  // background-color: pink;
  padding: 10px 10px;
  border: 1px solid #ccc;

  .title {
    font-size: 16px;
    margin-bottom: 20px;
  }

  .user-info,
  .contact,
  .address-detail {
    font-size: 15px;
    margin-bottom: 10px;
  }
}

.edit-title {
  text-align: center;
  font-size: 22px;
  padding-bottom: 30px;
  color: #8d65c5;
}

.edit-address-box {
  margin-top: 30px;

  .address-edit,
  .add-address {
    padding: 10px 20px;
    border: 1px solid #8d65c5;
    cursor: pointer;
    transition: all 0.3s linear;

    &:hover {
      color: #8d65c5;
      background-color: #f4effe;
    }
  }

  .add-address {
    margin-left: 30px;
  }
}

//管理地址弹窗
.addressWrapper {
  max-height: 500px;
  overflow-y: auto;
}

.text {
  flex: 1;
  min-height: 90px;
  display: flex;
  align-items: center;

  &.item {
    border: 1px solid #f5f5f5;
    margin-bottom: 10px;
    cursor: pointer;

    &.active,
    &:hover {
      border-color: #8d65c5;
      background: #8d65c525;
    }

    > ul {
      padding: 10px;
      font-size: 14px;
      line-height: 30px;
    }
  }
}

//上传
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}

.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.userHome {
  width: 80vw;
  margin: 0 auto;
  background: url('../../../public/user-bg.svg');

  .header--userInfo {
    display: flex;

    .userInfo--pic {
      width: 150px;
      height: 150px;
      overflow: hidden;
      border-radius: 50%;
      margin-right: 15px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .userInfo--other {
      margin-top: 20px;

      .name {
        span {
          font-size: 25px;
          font-weight: 700;
          margin-right: 15px;
        }
      }

      .grade {
        display: flex;
        align-items: center;
        margin: 18px 0;

        span {
          margin-right: 10px;
          font-weight: 100;
          font-size: 12px;
        }

        .num {
          display: block;
          font-size: 13px;
          font-weight: 100;
          color: #dcc19c;
          width: 30px;
          height: 18px;
          background-color: #f5f8f9;
          text-align: center;
          line-height: 18px;
          border-radius: 9px;
        }
      }

      .following {
        display: flex;
        font-weight: 700;

        .concern {
          cursor: pointer;
          margin-right: 20px;
        }

        .fan {
          cursor: pointer;
        }
      }
    }
  }

  .nav--options {
    margin-top: 30px;
  }
}
</style>
