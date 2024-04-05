<template>
  <Teleport to="body">
    <div v-if="showModal" class="image-preview-modal">
      <div class="image-preview">
        <img :src="currentImage" @click="closeModal" />
      </div>
      <div class="overlay" @click="closeModal"></div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'

const showModal = ref(false)
const currentImage = ref('')

const openModal = (image) => {
  currentImage.value = image
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  currentImage.value = ''
}

defineExpose({
  openModal,
  closeModal
})
</script>

<style scoped>
.image-preview-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
}

.image-preview {
  width: 80%;
  max-width: 800px;
  position: relative;
}

.image-preview img {
  max-width: 100%;
  max-height: 80vh;
  display: block;
  margin: 0 auto;
  cursor: zoom-out;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
}
</style>
