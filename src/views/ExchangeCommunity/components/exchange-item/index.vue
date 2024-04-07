<script setup>
import { ref } from 'vue'
import YsScroll from '@/components/base/ys-scroll/src/ys-scroll.vue'

const scroll = ref(true)
const data = ref([
  {
    title: 'Vue3.0 无缝滚动组件展示数据第1条',
    date: Date.now()
  },
  {
    title: 'Vue3.0 无缝滚动组件展示数据第2条',
    date: Date.now()
  },
  {
    title: 'Vue3.0 无缝滚动组件展示数据第3条',
    date: Date.now()
  },
  {
    title: 'Vue3.0 无缝滚动组件展示数据第4条',
    date: Date.now()
  },
  {
    title: 'Vue3.0 无缝滚动组件展示数据第5条',
    date: Date.now()
  },
  {
    title: 'Vue3.0 无缝滚动组件展示数据第6条',
    date: Date.now()
  },
  {
    title: 'Vue3.0 无缝滚动组件展示数据第7条',
    date: Date.now()
  },
  {
    title: 'Vue3.0 无缝滚动组件展示数据第8条',
    date: Date.now()
  },
  {
    title: 'Vue3.0 无缝滚动组件展示数据第9条',
    date: Date.now()
  }
])
</script>

<template>
  <div class="exchange-item">
    <div class="item-header">
      <div class="header-userInfo">
        <img
          class="userInfo--avatar"
          src="https://pic3.zhimg.com/v2-220c2500a5c33e693f946c4e40dac00a_r.jpg"
          alt=""
        />
        <div class="userInfo--detail">
          <div class="detail--a">
            <span class="name">可目十</span>
            <span class="grade">LV.8</span>
          </div>
          <div class="detail--b">
            <span class="address">江西 共青城</span>
            <span class="time">2024-4-7</span>
          </div>
        </div>
      </div>
      <div class="header-btn">
        <el-button>私信</el-button>
      </div>
    </div>
    <div class="item-main">
      <ys-scroll :datas="data" v-model="scroll" class="scroll">
        <div class="item" v-for="(item, index) in data" :key="index">
          <span>{{ item.title }}</span>
          <span>{{ item.date }}</span>
        </div>
      </ys-scroll>
    </div>
    <div class="item-footer">
      <el-button>Click To Look It</el-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.exchange-item {
  .item-header {
    display: flex;
    justify-content: space-between;
    padding: 20px;

    .header-userInfo {
      display: flex;

      .userInfo--avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-right: 20px;
      }

      .userInfo--detail {
        margin-top: 10px;

        .detail--a {
          display: flex;
          align-items: center;

          .name {
            font-size: 20px;
            font-weight: 600;
            margin-right: 10px;
          }

          .grade {
            display: block;
            font-size: 12px;
            width: 30px;
            height: 14px;
            text-align: center;
            background-color: #cccccc;
            border-radius: 7px;
            color: #fff;
          }
        }

        .detail--b {
          margin-top: 15px;
          font-weight: 600;
          font-size: 13px;
          color: #ccc;

          .address {
            margin-right: 20px;
          }

          .time {
          }
        }
      }
    }

    .header-btn {
    }
  }

  .item-main {
    .scroll {
      height: 270px;
      width: 500px;
      margin: 100px auto;
      overflow: hidden;
    }

    .scroll .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 3px 0;
    }
  }

  .item-footer {
    .el-button {
      border: none;
      color: #e0bbf4;
      --el-button-hover-bg-color: transparent;

      &:hover {
        color: #ab4ddf;
      }
    }
  }
}
</style>
