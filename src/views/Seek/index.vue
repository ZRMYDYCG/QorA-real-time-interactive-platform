<script setup>
import SeekContent from './components/Seek-Content.vue'
import { onMounted, ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const value = ref('城市')

const options = [
  {
    value: '北京',
    label: '北京'
  },
  {
    value: '上海',
    label: '上海'
  },
  {
    value: '广州',
    label: '广州'
  },
  {
    value: '深圳',
    label: '深圳'
  },
  {
    value: '湖南',
    label: '湖南'
  }
]

const imgArr = ref([
  { url: 'https://p1.music.126.net/D-1BJmN0aqcwgh8F1AuyPA==/109951169341847902.jpg' },
  { url: 'https://p1.music.126.net/fAzUfd4CUeEsyHvui0Unhg==/109951169440246524.jpg' },
  { url: 'https://p1.music.126.net/lpgtc9vtrfrJwwm819XVgQ==/109951169478526448.jpg' },
  { url: 'https://b.zol-img.com.cn/sjbizhi/images/11/1080x1920/1592967802496.jpg' },
  { url: 'https://p1.music.126.net/CmDnOvSU7aIArdeL4CROMA==/109951169329849875.jpg' },
  { url: 'https://p1.music.126.net/ktmVwkScqx_tIWlPW6RGLQ==/109951169381065644.jpg' },
  { url: 'https://p1.music.126.net/WtbcqsNftMrjiR023IMmsQ==/109951169421204776.jpg' },
  { url: 'https://p1.music.126.net/awtNhyRGP_8nhDBSrUV2nQ==/109951169404208710.jpg' },
  { url: 'https://p1.music.126.net/xAnvQjUF_sjg6jYAXytw1g==/109951169392387106.jpg' },
  { url: 'https://p1.music.126.net/LiW3eIqDCPUCBh6AcrmE7A==/109951169452286493.jpg' },
  { url: 'https://img.keaitupian.cn/newupload/11/1667560871448849.jpg' },
  {
    url: 'https://ts1.cn.mm.bing.net/th/id/R-C.25a19c64d70fdb91fff0fe06bb739658?rik=RtD2kYNDk8It5Q&riu=http%3a%2f%2fimg.keaitupian.cn%2fuploads%2f2021%2f03%2f15%2f126f3667ebbe4a6daa1444df5e96a462.jpg&ehk=HczmnINUo9Tj1GlIp7UQfyerOiEuBenOiV5cjavdhjc%3d&risl=&pid=ImgRaw&r=0'
  },
  { url: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.qkn-u2DXXEJ6L2KxAWHZ9wAAAA?rs=1&pid=ImgDetMain' },
  { url: 'https://pic3.zhimg.com/v2-0a519e9b9adf2d8073e861be6a43286b_r.jpg?source=1940ef5c' },
  { url: 'https://www.keaitupian.cn/cjpic/frombd/1/253/3393399268/3196579081.jpg' },
  { url: 'https://tupian.qqw21.com/article/UploadPic/2021-4/202141120475135553.jpg' },
  { url: 'https://www.linfxk.com/zb_users/upload/2019/10/20191005185540157027294068197.jpg' },
  {
    url: 'https://ts1.cn.mm.bing.net/th/id/R-C.d761768122c59c824548af9a319b2a9b?rik=aT6CTHLSGXlbHw&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50017%2f0763.jpg_wh1200.jpg&ehk=a9yqHVMDyyNnX7eIrDspUnGgDaUdUPRIRB1hXCbaiJU%3d&risl=&pid=ImgRaw&r=0'
  }
])

//随机打乱 imgArr 内的索引
const randomImgArr = () => {
  for (let i = 0; i < imgArr.value.length; i++) {
    let randIndex = Math.floor(Math.random() * imgArr.value.length)
    let temp
    temp = imgArr.value[randIndex]
    imgArr.value[randIndex] = imgArr.value[i]
    imgArr.value[i] = temp
  }
}

onMounted(() => {
  randomImgArr()
})
</script>
<template>
  <link rel="stylesheet" href="//at.alicdn.com/t/c/font_4498745_xovv0klg49.css" />
  <div>
    <div class="search-container">
      <div class="select-region">
        <span
          >当前搜索城市: <span class="city">{{ value == '城市' ? '上海' : value }}</span></span
        >

        <el-select v-model="value" placeholder="Select" size="large" style="width: 150px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          />
        </el-select>
      </div>
      <div class="search">
        <el-input
          v-model="input3"
          style="width: 450px; height: 45px"
          size="large"
          placeholder="请输入搜索关键词"
          :prefix-icon="Search"
        />
      </div>
    </div>

    <SeekContent :imgArr="imgArr" class="seekItem"></SeekContent>
  </div>
</template>
<style lang="scss" scoped>
.search-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  transition: all 0.4s linear;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  &:hover {
    background-color: #925ff81a;
  }
  .select-region {
    display: flex;
    align-items: center;
    padding: 30px 10px;
    margin-left: 20px;
    span:nth-child(1) {
      font-size: 18px;
      margin-right: 15px;
      color: #6e6b6b;
      .city {
        font-weight: 550;
        font-size: 20px;
        color: #925ff8;
      }
    }
  }
  .search {
    margin-right: 550px;
  }
}
.tabbar {
}

.seekItem {
  margin-top: 30px;
}
</style>
