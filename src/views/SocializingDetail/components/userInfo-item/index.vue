<template>
  <div class="user-card">
    <div class="user-avatar">
      <el-image
        class="avatar-image"
        :src="user.user_pic"
        :fit="fit"
        :error-icon-class="defaultAvatar"
        @click="handleAvatar"
      ></el-image>
    </div>
    <div class="user-info">
      <div class="nickname">{{ user.user_name }}</div>
      <div class="bio">{{ bio }}</div>
    </div>
    <el-button class="action-button" round plain>
      <slot name="btnContent"></slot>
    </el-button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const emit = defineEmits(['click'])
const defaultAvatar = '....'

// user_id
const props = defineProps({
  user: {
    type: Object,
    default: () => ({
      user_name: '未命名用户',
      user_introduce: '',
      user_pic: ''
    })
  },
  buttonText: {
    type: String,
    default: '查看'
  },
  cardBgColor: {
    type: String,
    default: '#f5f7fa'
  },
  width: {
    type: String,
    default: 'auto'
  },
  height: {
    type: String,
    default: 'auto'
  },
  fit: {
    type: String,
    default: 'cover'
  }
})

const bio = computed(() => {
  if (props.user.bio.length > 20) {
    return props.user.user_introduce.slice(0, 20) + '...'
  }
  return props.user.user_introduce
})

const handleAvatar = () => {
  emit('click')
}
</script>

<style scoped>
.user-card {
  display: flex;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  padding: 10px;
  min-width: v-bind(width);
  min-height: v-bind(height);
}

.user-avatar {
  margin-right: 10px;
  flex-shrink: 0; /* 防止头像压缩 */
  width: 60px;
  height: 60px;
}

.avatar-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;
}

.user-info {
  flex: 1;
  margin-right: 20px;
}

.nickname {
  font-size: 16px;
  color: #303133;
  margin-bottom: 5px;
}

.bio {
  font-size: 14px;
  color: #606266;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.action-button {
  padding: 10px 15px;
  margin-left: auto; /* 按钮靠右 */
}
</style>
