<script setup>
defineProps({
  itemData: {
    type: Object,
    default: () => {}
  }
})
</script>

<template>
  <el-card>
    <template #default>
      <div class="user--left">
        <!-- https://pic.imgdb.cn/item/66148db368eb935713528128.png -->
        <img :src="itemData?.user_picture" alt="#" />
      </div>
      <div class="user--right">
        <div class="l">
          <div class="l__name">
            <h3 class="nickname">{{ itemData?.user_name }}</h3>
            <span class="level">LV.{{ itemData?.user_upgrade }}</span>
          </div>
          <div class="l__desc">{{ itemData?.user_introduce }}</div>
          <div class="l-tags">
            <el-tag round size="small">{{ itemData?.user_attention }} 关注</el-tag>
            <el-tag round size="small">{{ itemData?.user_fan }} 粉丝</el-tag>
          </div>
        </div>
        <div class="r">
          <el-button @click="$router.push(`/userHome/index?user_id=${itemData?.user_id}`)" round>
            <template #icon>
              <el-icon>
                <Plus />
              </el-icon>
            </template>
            进入主页
          </el-button>
        </div>
      </div>
    </template>
  </el-card>
</template>

<style scoped lang="scss">
.el-card {
  :deep(.el-card__body) {
    display: flex;
    width: 100%;
    padding: 20px 0;
    align-items: center;

    .user--left {
      width: 70px;
      height: 70px;
      border-radius: 8px;
      overflow: hidden;
      margin-left: 20px;
      margin-right: 20px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .user--right {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: space-between;
      margin-right: 20px;

      .l {
        .l__desc {
          padding: 10px 2px;
          color: #aaaaaa;
        }

        .l__name {
          display: flex;
          align-items: center;

          .nickname {
            color: var(--ys-userHome-font-color);
          }

          .level {
            margin-left: 10px;
            display: block;
            font-size: 12px;
            font-weight: 100;
            color: #dcc19c;
            width: 30px;
            height: 18px;
            background-color: #f5f8f9;
            text-align: center;
            line-height: 18px;
            border-radius: 9px;
          }
        }

        .l-tags {
          display: flex;

          .el-tag {
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
