<template>
  <div class="w12001">
    <div>

      <!--    form表单用来显示所有题目-->
      <el-form :model="ruleForm" :ref="ruleForm" label-width="100px">

        <!-- 循环后端给你的所有题 -->
        <div

            v-for="(item, index) in ruleForm.collection"
            :key="item.id"
        >
          <!-- 题目的信息 -->
          <p style="font-weight: 700">
            第{{ index + 1 }}题：{{ item.question }}
          </p>
          <br>
          <div>答案为{{item.answer}}</div>
        </div>
      </el-form>


    </div>
  </div>
  <!--  <el-menu-->
  <!--      :default-active="activeIndex"-->
  <!--      class="el-menu-1"-->
  <!--      mode="horizontal"-->
  <!--      @select="handleSelect"-->
  <!--  >-->
  <!--    <el-menu-item index="1" class="el-menu-item-1">Processing Center</el-menu-item>-->
  <!--    <el-menu-item index="1" class="el-menu-item-1">Processing Center</el-menu-item>-->
  <!--    <el-menu-item index="1" class="el-menu-item-1">Processing Center</el-menu-item>-->
  <!--  </el-menu>-->
</template>

<script>
import main from "@/main";

export default {
  name: "CollectionPage",
  data: function () {
    return {
      ruleForm: {
        collection: []
      }
    }
  },
  created() {
    this.init();

  },


  methods: {
    init() {
      var uid = localStorage.getItem('id')
      console.log(uid)
      this.$http({
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        url: main.url + "/favorite/list",
        method: 'post',
        data: this.$qs.stringify({uid: uid})

      }).then(success => {
        this.ruleForm.collection = success.data;
        this.dialogVisible = true;
      })
    },

  }
}
</script>

<style scoped>
.el-menu-1 {
  padding: 20px;
}

.el-menu-item-1 {
  text-align: center;
  margin-left: 400px;
}

</style>

