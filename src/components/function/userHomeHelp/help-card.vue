<script setup>
import YsCard from '@/components/base/ys-card/src/ys-card.vue'
</script>

<template>
  <div class="help-card">
    <ys-card title="最近一次认真奔跑是为了什么?">
      <template #subTitle>
        <div class="subtitle">
          <span class="time">提问时间: 2024-05-05</span>
          <span class="answer">{{ 1 }} 回答</span>
        </div>
      </template>
      <template #content> </template>
    </ys-card>
  </div>

  <div class="help-card">
    <ys-card title="最近一次认真奔跑是为了什么?">
      <template #subTitle>
        <div class="subtitle">
          <span class="time">提问时间: 2024-05-05</span>
          <span class="answer">{{ 0 }} 回答</span>
        </div>
      </template>
    </ys-card>
  </div>

  <div class="help-card">
    <ys-card title="最近一次认真奔跑是为了什么?">
      <template #subTitle>
        <div class="subtitle">
          <span class="time">提问时间: 2024-05-05</span>
          <span class="answer">{{ 0 }} 回答</span>
        </div>
      </template>
    </ys-card>
  </div>

  <div class="help-card">
    <ys-card title="最近一次认真奔跑是为了什么?">
      <template #subTitle>
        <div class="subtitle">
          <span class="time">提问时间: 2024-05-05</span>
          <span class="answer">{{ 0 }} 回答</span>
        </div>
      </template>
    </ys-card>
  </div>
</template>

<style scoped lang="scss">
.help-card {
  margin: 5px 0;

  .subtitle {
    padding: 10px;
  }

  .time {
    color: #ccc;
    margin-right: 20px;
  }

  .answer {
    color: #ccc;
  }
}
</style>
