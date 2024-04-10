<script setup></script>

<template>
  <el-card>
    <template #default>
      <div class="column--left">
        <img
          src="https://picx.zhimg.com/80/v2-eb6ceccc822ef36ef5c7fc4bf9099c0f_720w.webp?source=1def8aca"
          alt="#"
        />
      </div>
      <div class="column--right">
        <div class="l">
          <div class="l__name">
            <h3 class="nickname">分享耳机体验</h3>
          </div>
          <div class="l__desc">耳机戴久了，耳朵会疼，我就是来解决这个问题的。</div>
        </div>
      </div>
      <div class="btn">
        <el-button>订阅 • SSR</el-button>
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

    .column--left {
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

    .column--right {
      display: flex;
      flex: 1;

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
      }
    }

    .btn {
      margin-right: 20px;
    }
  }
}
</style>
