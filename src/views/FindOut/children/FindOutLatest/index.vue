<script setup>
import SeekHelpItem from '../../components/seek-help-item/index.vue'
// import { useLoginStore } from '@/stores/modules/Login/index.js'
import { onMounted, ref, inject, watch } from 'vue'
import { fetchLatestQuestionsApi } from '@/service/FindOut/index.js'
import { getLocalStorage } from '@/utils/index.js'

// const loginStore = useLoginStore()

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
  let user_id = await getLocalStorage('userInfo')?.value?.user_id
  const res = await fetchLatestQuestionsApi(user_id)
  itemDataList.value = res.data.data.reverse()
  console.log('处理竞态问题:', itemDataList.value)
}

onMounted(() => {
  fetchLatestQuestions()
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
