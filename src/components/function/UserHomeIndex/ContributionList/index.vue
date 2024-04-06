<template>
  <el-card class="container-card">
    <ul v-for="(month, index) in monthBar" :key="index" class="month-container">
      <span class="month">{{ month }}</span>
      <ul class="graph">
        <el-tooltip
          v-for="(item, itemIndex) in infos.filter((info) => info.month === index + 1)"
          :key="itemIndex"
          class="item"
          effect="dark"
          :content="item.year + '-' + item.month + '-' + item.date"
          placement="top-start"
          :open-delay="500"
        >
          <li
            :data-level="item.level"
            class="li-day"
            :isToday="item.isToday"
            @click="handleClick(item)"
          ></li>
        </el-tooltip>
      </ul>
    </ul>
  </el-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const infos = ref([])
const current = ref({
  year: '',
  month: '',
  date: ''
})
const monthBar = ref(Array.from({ length: 12 }, (_, i) => i + 1).map((month) => `${month}月`))

onMounted(() => {
  const d = new Date()

  current.value = {
    year: d.getFullYear(),
    month: d.getMonth() + 1,
    date: d.getDate()
  }

  for (let i = 0; i < 12; i++) {
    const daysInMonth = new Date(current.value.year, i + 1, 0).getDate()

    for (let j = 1; j <= daysInMonth; j++) {
      let level = Math.floor(Math.random() * 2)

      const item = {
        year: current.value.year,
        month: i + 1,
        date: j,
        number: 10,
        level: level,
        isToday: i + 1 === current.value.month && j === current.value.date
      }

      infos.value.push(item)
    }
  }
})

function handleClick(item) {
  console.log(item.year + '-' + item.month + '-' + item.date)
}
</script>

<style scoped lang="scss">
.container-card {
  border: 1px solid #ebeef5;
  border-radius: 10px;
  width: 100%;
  overflow: auto;

  :deep(.el-card__body) {
    display: flex;
  }
}

.month-container {
  margin-bottom: 20px;
  flex: 1;
}

.month {
  font-size: 16px;
  font-weight: bold;
}

.graph {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(6, 35px);
  grid-template-rows: repeat(7, 21px);
  grid-auto-flow: column;
  margin-top: 20px;
}

.li-day {
  background-color: #eaeaea;
  list-style: none;
  border-radius: 3px;
  height: 12px;
  width: 12px;
}

.li-day:hover {
  box-shadow: 0px 0px 5px 5px #a5a5ff;
}

.li-day[isToday='true'] {
  background-color: #f5f5ff;
  box-shadow: 0px 0px 5px 5px #a5a5ff;
}

.graph li[data-level='1'] {
  background-color: #e6d8ff;
}

.graph li[data-level='2'] {
  background-color: #b39eff;
}

.graph li[data-level='3'] {
  background-color: #7e57c2;
}
</style>
