<script setup>
import { onMounted, nextTick } from 'vue'
import * as echarts from 'echarts'
import { useUserHomeStore } from '@/stores/modules/UserHome/index.js'
const userHomeStore = useUserHomeStore()

const init = () => {
  const option = {
    legend: {
      orient: 'vertical',
      x: 'left',
      data: ['点赞', '评论', '收藏', '标签', '分享']
    },
    series: [
      {
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        labelLine: {
          show: false
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '30',
            fontWeight: 'bold'
          }
        },
        data: [
          { value: 335, name: '点赞' },
          { value: 310, name: '评论' },
          { value: 234, name: '收藏' },
          { value: 135, name: '标签' },
          { value: 1548, name: '分享' }
        ]
      }
    ]
  }
  nextTick(() => {
    let myChart = echarts.init(document.getElementById('main'))
    // 绘制图表
    myChart.setOption(option)
  })
}

onMounted(() => {
  init()
})
</script>

<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span class="title">体验官等级</span>
        <span class="line"> | </span>
        <span class="level">Lv.{{ userHomeStore.userHomeInfoDetail.user_grade }}</span>
      </div>
    </template>
    <p style="text-align: center; font-weight: 100">成长方式</p>
    <div id="main" class="card-content"></div>
  </el-card>
</template>

<style scoped lang="scss">
.el-card {
  height: 300px;

  .card-header {
    display: flex;
    align-items: center;

    .title {
      font-weight: 600;
      font-size: 20px;
      color: darkkhaki;
    }

    .line {
      padding: 0 15px;
    }

    .level {
      font-size: 12px;
      color: #ccc;
      margin-top: 3px;
    }
  }

  .card-content {
    width: 100%;
    height: 200px;
  }
}
</style>
