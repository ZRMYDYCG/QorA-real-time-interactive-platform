<script setup>
import SeekHelpItem from '../../components/seek-help-item/index.vue'
import { useLoginStore } from '@/stores/modules/Login/index.js'
import { onMounted, ref, inject, watch } from 'vue'
import { fetchLatestQuestionsApi } from '@/service/FindOut/index.js'

const loginStore = useLoginStore()

let itemDataList = ref([])

let synchronous = ref(inject('synchronous'))

watch(
  () => synchronous.value,
  (newValue) => {
    console.log(newValue)
    fetchLatestQuestions()
  }
)

const fetchLatestQuestions = async () => {
  const res = await fetchLatestQuestionsApi(loginStore.userInfo.value.user_id)
  itemDataList.value = res.data.data.reverse()
}

onMounted(async () => {
  await fetchLatestQuestions()
})

defineExpose({
  fetchLatestQuestions
})
</script>

<template>
  <div style="display: flex; flex-direction: column">
    <template v-for="(item, index) in itemDataList" :key="index">
      <seek-help-item :item-detail="item"></seek-help-item>
    </template>
  </div>
</template>

<style scoped lang="scss"></style>
