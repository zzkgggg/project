<template>
  <div style="margin: 10%">
    <el-space>
      <p style="font-size: 30px" >问题反馈</p><br>

    </el-space>

    <br>
    <el-input
        v-model="question"
        :rows="4"
        type="textarea"
        placeholder="请输入"
        maxlength="100"
        show-word-limit="true"
        style="border-top: solid 2px #e60202"
    />
    <el-button class="button1" size="large"  >提交 </el-button>
  </div>

</template>

<script>
import { ref } from 'vue'
const question = ref('')

export default {
  name: "FeedbackPage",
  data: function () {
    return {
      question
    }
  },
  components:{
  }

}
</script>

<style scoped>
.button1{
  margin-top: 20px;
  font-size: 20px;
  padding: 25px;
  margin-left: 95%;

}

.feebbackp{
  border-bottom: solid 2px #e60202;
}
</style>