<template>
  <el-row class="demo-avatar demo-basic">
    <el-col :span="12">
      <div class="sub-title">头像</div>
      <div class="demo-basic--circle">
        <div class="block">
          <el-avatar :size="200" :src="circleUrl"/>
        </div>
        <div v-for="size in sizeList" :key="size" class="block">
          <el-avatar :size="size" :src="circleUrl"/>
        </div>
      </div>
    </el-col>
  </el-row>

</template>

<script>
export default {
  name: "RegularPage",
  methods:{

  }
}
</script>

<style scoped>
.demo-basic {
  text-align: center;
  margin-top: 80px;
  margin-left: 550px;
}

.demo-basic .sub-title {
  margin-bottom: 20px;
  font-size: 20px;
  color: var(--el-text-color-secondary);
}

.demo-basic .demo-basic--circle,
.demo-basic .demo-basic--square {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.demo-basic .block:not(:last-child) {
  border-right: 1px solid var(--el-border-color);
}

.demo-basic .block {
  flex: 1;
}

.demo-basic .el-col:not(:last-child) {
  border-right: 1px solid var(--el-border-color);
}
</style>