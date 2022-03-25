<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-1"
      mode="horizontal"
      @select="handleSelect"
  >
    <el-menu-item index="1" class="el-menu-item-1">Processing Center</el-menu-item>
    <el-menu-item index="1" class="el-menu-item-1">Processing Center</el-menu-item>
    <el-menu-item index="1" class="el-menu-item-1">Processing Center</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "CollectionPage"
}
</script>

<style scoped>
.el-menu-1{
padding:20px;
}

.el-menu-item-1{
  text-align: center;
margin-left: 400px;
}

</style>

