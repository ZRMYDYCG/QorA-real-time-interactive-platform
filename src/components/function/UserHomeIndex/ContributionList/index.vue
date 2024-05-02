<template>
  <el-card class="container-card">
    <ul v-for="(month, index) in monthBar" :key="index" class="month-container">
      <span class="month">{{ month }}</span>
      <ul class="graph">
        <!-- 遍历每个月的每一天 -->
        <el-tooltip
          v-for="(day, dayIndex) in infos[index]"
          :key="dayIndex"
          class="item"
          effect="dark"
          :content="day.year + '-' + day.month + '-' + day.date"
          placement="top-start"
          :open-delay="500"
        >
          <li
            :data-level="day.level"
            class="li-day"
            :class="{ active: day.isActive }"
            @click="handleClick(day)"
          ></li>
        </el-tooltip>
      </ul>
    </ul>
  </el-card>
</template>

<script setup>
import { ref, onMounted, defineProps, watchEffect } from 'vue'

const props = defineProps({
  contributions: {
    type: Object,
    default: () => ({})
  },
  onContributionChange: {
    type: Function,
    default: () => {}
  }
})

const infos = ref([])
const current = ref({
  year: '',
  month: '',
  date: ''
})
const monthBar = ref(Array.from({ length: 12 }, (_, i) => i + 1).map((month) => `${month}月`))

// 初始化 infos 数组并监听当前年份的变化
watchEffect(
  onMounted(() => {
    const d = new Date()

    current.value = {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      date: d.getDate()
    }

    infos.value = []
    initInfos()
  })
)

function initInfos() {
  for (let i = 0; i < 12; i++) {
    const daysInMonth = new Date(current.value.year, i + 1, 0).getDate()
    const monthInfos = []

    for (let j = 1; j <= daysInMonth; j++) {
      const dateStr = `${current.value.year}-${String(i + 1).padStart(2, '0')}-${String(j).padStart(2, '0')}` // 构造日期字符串
      const isActive = !!props.contributions[dateStr] // 检查该日期是否有贡献

      monthInfos.push({
        year: current.value.year,
        month: i + 1,
        date: j,
        level: 1, // 假设所有日期的 level 都是 1
        isActive: isActive
      })
    }

    infos.value[i] = monthInfos
  }
}

function handleClick(day) {
  // 切换激活状态并通知父组件
  const newContributions = {
    ...props.contributions,
    [`${day.year}-${day.month}-${day.date}`]: !day.isActive
  }
  props.onContributionChange(newContributions)
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

.li-day.active {
  background-color: #7e57c2 !important; /* 激活状态下的背景色 */
}
</style>
