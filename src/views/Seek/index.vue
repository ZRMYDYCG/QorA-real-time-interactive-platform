<script setup>
// import WaterFall from './components/Water-Fall.vue'
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const value = ref('城市')

const options = [
  {
    value: 'Option1',
    label: 'Option1'
  },
  {
    value: 'Option2',
    label: 'Option2'
  },
  {
    value: 'Option3',
    label: 'Option3'
  },
  {
    value: 'Option4',
    label: 'Option4'
  },
  {
    value: 'Option5',
    label: 'Option5'
  }
]

const imgArr = ref([
  'https://p1.music.126.net/D-1BJmN0aqcwgh8F1AuyPA==/109951169341847902.jpg',
  'https://p1.music.126.net/fAzUfd4CUeEsyHvui0Unhg==/109951169440246524.jpg',
  'https://p1.music.126.net/lpgtc9vtrfrJwwm819XVgQ==/109951169478526448.jpg',
  'https://b.zol-img.com.cn/sjbizhi/images/11/1080x1920/1592967802496.jpg',
  'https://p1.music.126.net/CmDnOvSU7aIArdeL4CROMA==/109951169329849875.jpg',
  'https://p1.music.126.net/ktmVwkScqx_tIWlPW6RGLQ==/109951169381065644.jpg',
  'https://p1.music.126.net/WtbcqsNftMrjiR023IMmsQ==/109951169421204776.jpg',
  'https://p1.music.126.net/awtNhyRGP_8nhDBSrUV2nQ==/109951169404208710.jpg',
  'https://p1.music.126.net/xAnvQjUF_sjg6jYAXytw1g==/109951169392387106.jpg',
  'https://p1.music.126.net/LiW3eIqDCPUCBh6AcrmE7A==/109951169452286493.jpg',
  'https://img.keaitupian.cn/newupload/11/1667560871448849.jpg',
  'https://ts1.cn.mm.bing.net/th/id/R-C.25a19c64d70fdb91fff0fe06bb739658?rik=RtD2kYNDk8It5Q&riu=http%3a%2f%2fimg.keaitupian.cn%2fuploads%2f2021%2f03%2f15%2f126f3667ebbe4a6daa1444df5e96a462.jpg&ehk=HczmnINUo9Tj1GlIp7UQfyerOiEuBenOiV5cjavdhjc%3d&risl=&pid=ImgRaw&r=0',
  'https://tse4-mm.cn.bing.net/th/id/OIP-C.qkn-u2DXXEJ6L2KxAWHZ9wAAAA?rs=1&pid=ImgDetMain',
  'https://c-ssl.duitang.com/uploads/item/201909/22/20190922104452_vtysx.jpg',
  'https://c-ssl.duitang.com/uploads/blog/202108/20/20210820001030_4d060.jpg',
  'https://tupian.qqw21.com/article/UploadPic/2021-4/202141120475135553.jpg',
  'https://c-ssl.duitang.com/uploads/item/202007/27/20200727221046_srogr.jpg',
  'https://c-ssl.duitang.com/uploads/item/202004/06/20200406193820_voidm.jpg'
])
</script>
<template>
  <div>
    <div class="search-container">
      <el-input
        v-model="input3"
        style="max-width: 600px"
        placeholder="Please input"
        class="input-with-select"
        :prefix-icon="Search"
        size="large"
      >
        <template #append>
          <el-select v-model="select" placeholder="Select" style="width: 115px">
            <el-option label="Restaurant" value="1" />
            <el-option label="Order No." value="2" />
            <el-option label="Tel" value="3" />
          </el-select>
        </template>
      </el-input>
      <div class="select-region">
        <el-select v-model="value" placeholder="Select" size="large" style="width: 240px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="search">
        <el-input
          v-model="input3"
          style="width: 450px"
          size="large"
          placeholder="请输入搜索关键词"
          :prefix-icon="Search"
        />
      </div>
    </div>
    <div class="tabbar">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">Processing Center</el-menu-item>
          <el-menu-item index="3">Info</el-menu-item>
          <el-menu-item index="4">Orders</el-menu-item>
        </el-menu>
      </el-tabs>
    </div>
    <div class="seek-content">
      <!-- <WaterFall></WaterFall> -->
      <div class="seek-item" v-for="item in imgArr">
        <div class="img-box">
          <img :src="item" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.search-container {
}
.tabbar {
}
.seek-content {
  width: 100%;
  columns: 5;
  gap: 15px;
  .seek-item {
    width: 300px;
    height: auto;
    border: 1px solid #ccc;
    padding-bottom: 15px;
    margin-bottom: 15px;
    .img-box {
      overflow: hidden;
      height: auto;
      width: 100%;
      border-radius: 5px;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
        transition: all 0.5s linear;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>
