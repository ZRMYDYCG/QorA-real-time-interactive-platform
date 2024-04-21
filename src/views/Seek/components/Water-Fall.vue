<template>
  <div class="waterfull">
    <h2>瀑布流布局</h2>
    <div class="v-waterfall-content" id="v-waterfall">
      <div
        v-for="(img, index) in waterfallList"
        :key="index"
        class="v-waterfall-item"
        :style="{
          top: img.top + 'px',
          left: img.left + 'px',
          width: waterfallImgWidth + 'px',
          height: img.height
        }"
      >
        <img :src="img.src" alt="" />
        <p style="font-size: small; color: #666; margin: 4px">{{ img.title }}</p>
        <p style="font-size: x-small; color: #9e9e9e; margin: 4px; padding-bottom: 6px">
          {{ img.info }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-waterfall',
  data() {
    return {
      waterfallList: [],
      imgArr: [
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
        'https://img.keaitupian.cn/newupload/11/1667560871448849.jpg      ',
        'https://ts1.cn.mm.bing.net/th/id/R-C.25a19c64d70fdb91fff0fe06bb739658?rik=RtD2kYNDk8It5Q&riu=http%3a%2f%2fimg.keaitupian.cn%2fuploads%2f2021%2f03%2f15%2f126f3667ebbe4a6daa1444df5e96a462.jpg&ehk=HczmnINUo9Tj1GlIp7UQfyerOiEuBenOiV5cjavdhjc%3d&risl=&pid=ImgRaw&r=0',
        'https://tse4-mm.cn.bing.net/th/id/OIP-C.qkn-u2DXXEJ6L2KxAWHZ9wAAAA?rs=1&pid=ImgDetMain',
        'https://c-ssl.duitang.com/uploads/item/201909/22/20190922104452_vtysx.jpg',
        'https://c-ssl.duitang.com/uploads/blog/202108/20/20210820001030_4d060.jpg',
        'https://tupian.qqw21.com/article/UploadPic/2021-4/202141120475135553.jpg',
        'https://c-ssl.duitang.com/uploads/item/202007/27/20200727221046_srogr.jpg',
        'https://c-ssl.duitang.com/uploads/item/202004/06/20200406193820_voidm.jpg'
      ],
      // waterfallImgWidth: 100,
      waterfallImgWidth: 300, // 每个盒子的宽度
      // waterfallImgCol: 5,// 瀑布流的列数
      waterfallImgCol: 5, // 瀑布流的列数
      waterfallImgRight: 10, // 每个盒子的右padding
      waterfallImgBottom: 10, // 每个盒子的下padding
      waterfallDeviationHeight: [],
      imgList: []
    }
  },
  created() {
    // 触发入口
    for (let i = 0; i < this.imgArr.length; i++) {
      // this.imgList.push(this.imgArr[Math.round(Math.random() * this.imgArr.length)]) // 图片随机显示
      this.imgList.push(this.imgArr[i])
    }
  },
  mounted() {
    this.calculationWidth()
  },
  methods: {
    //计算每个图片的宽度或者是列数
    calculationWidth() {
      let domWidth = document.getElementById('v-waterfall').offsetWidth
      if (!this.waterfallImgWidth && this.waterfallImgCol) {
        this.waterfallImgWidth =
          (domWidth - this.waterfallImgRight * this.waterfallImgCol) / this.waterfallImgCol
      } else if (this.waterfallImgWidth && !this.waterfallImgCol) {
        this.waterfallImgCol = Math.floor(
          domWidth / (this.waterfallImgWidth + this.waterfallImgRight)
        )
      }
      //初始化偏移高度数组
      this.waterfallDeviationHeight = new Array(this.waterfallImgCol)
      for (let i = 0; i < this.waterfallDeviationHeight.length; i++) {
        this.waterfallDeviationHeight[i] = 0
      }
      this.imgPreloading()
    },
    //图片预加载
    imgPreloading() {
      for (let i = 0; i < this.imgList.length; i++) {
        let aImg = new Image()
        aImg.src = this.imgList[i]
        aImg.onload = aImg.onerror = (e) => {
          let imgData = {}
          imgData.height = (this.waterfallImgWidth / aImg.width) * aImg.height
          imgData.src = this.imgList[i]
          imgData.title = '标题' // 说明文字（也可以自己写数组，或者封装json数据，都可以，但是前提是你会相关操作，这里不赘述）
          imgData.info = '详情说明：啦啦啦啦啦' // 说明文字
          this.waterfallList.push(imgData)
          this.rankImg(imgData)
        }
      }
    },
    //瀑布流布局
    rankImg(imgData) {
      let {
        waterfallImgWidth,
        waterfallImgRight,
        waterfallImgBottom,
        waterfallDeviationHeight,
        waterfallImgCol
      } = this
      let minIndex = this.filterMin()
      imgData.top = waterfallDeviationHeight[minIndex]
      imgData.left = minIndex * (waterfallImgRight + waterfallImgWidth)
      // waterfallDeviationHeight[minIndex] += imgData.height + waterfallImgBottom;// 不加文字的盒子高度
      waterfallDeviationHeight[minIndex] += imgData.height + waterfallImgBottom + 56 // 加了文字的盒子高度，留出文字的地方（这里设置56px）
      console.log(imgData)
    },
    /**
     * 找到最短的列并返回下标
     * @returns {number} 下标
     */
    filterMin() {
      const min = Math.min.apply(null, this.waterfallDeviationHeight)
      return this.waterfallDeviationHeight.indexOf(min)
    }
  }
}
</script>

<style scoped lang="scss">
.waterfull {
  width: 100%;
}
.v-waterfall-content {
  /* 主要 */
  width: 100%;
  height: 900px;
  position: relative;
}

.v-waterfall-item {
  /* 主要 */
  float: left;
  position: absolute;
  overflow: hidden;
  border-radius: 6px;
}

img {
  /* 主要 */
  /* width: auto;height: auto; */
  border-radius: 6px;
  width: 100%;
  height: auto;
  /* 次要 */
  cursor: pointer;
  transition: all 0.5s linear;
  &:hover {
    transform: scale(1.1);
  }
}
</style>
