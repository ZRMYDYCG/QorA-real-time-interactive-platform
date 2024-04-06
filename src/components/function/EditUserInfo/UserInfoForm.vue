<script setup></script>

<template>
  <el-form>
    <el-form-item label="昵称:">
      <el-input></el-input>
    </el-form-item>
    <el-form-item label="简介:">
      <el-input
        v-model="textarea"
        maxlength="30"
        style="width: 240px"
        placeholder="Please input"
        show-word-limit
        type="textarea"
      />
    </el-form-item>
    <el-form-item label="性别:">
      <el-radio-group v-model="radio">
        <el-radio :value="3">🚹</el-radio>
        <el-radio :value="6">🚺</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="生日:">
      <el-select v-model="value" placeholder="Select" style="width: 240px">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-select v-model="value" placeholder="Select" style="width: 240px">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-select v-model="value" placeholder="Select" style="width: 240px">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="所在地:">
      <el-select v-model="value" placeholder="Select" style="width: 240px">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-select v-model="value" placeholder="Select" style="width: 240px">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    <div class="address">管理邮寄地址</div>
    <el-form-item>
      <el-button plain>保存</el-button>
      <el-button plain>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped lang="scss">
.address {
  font-size: 12px;
  color: #b39eff;
  cursor: pointer;
}
</style>
