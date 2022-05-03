<template>
  <div class="w12001">
    <div>

      <!--    form表单用来显示所有题目-->
      <el-form :model="ruleForm" :ref="ruleForm" label-width="100px">

        <!-- 循环后端给你的所有题 -->
        <div

            v-for="(item, index) in ruleForm.data"
            :key="item.id"
        >
          <!-- 题目的信息 -->
          <p style="font-weight: 700">
            第{{ index + 1 }}题：{{ item.question }}
          </p>
          <el-button @click="addfavourite(index)">添加收藏</el-button>
          <br>
          <!--        题目显示-->
          <!-- 题目绑定的值是 每一项的 item.choices  -->
          <el-form-item label="选项" prop="choices">
            <el-radio-group v-model="ruleForm.answer[index]">
              <el-radio label="A">{{ item.choice1 }}</el-radio>
              <el-radio label="B">{{ item.choice2 }}</el-radio>
              <el-radio label="C">{{ item.choice3 }}</el-radio>
              <el-radio label="D">{{ item.choice4}}</el-radio>
            </el-radio-group>
          </el-form-item>

          <div v-if="ruleForm.result[index]===true">回答正确</div>
          <div v-if="ruleForm.result[index]===false">回答错误,正确答案是{{item.answer}}</div>
        </div>
        <el-button @click="submit(ruleForm.answer)">提交</el-button>
      </el-form>


    </div>
  </div>
</template>

<script>
import main from "@/main";

export default {
  name: 'Test_qw',
  data: function () {
    return {
      ruleForm: {
        data: [],
        answer: [],
        result: []
      },

    }
  },
  mounted() {
    this.init()
  },

  methods: {
    init(){
      var type=2
      this.$http({
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        url: main.url+"/test/culture",
        method: 'post',
        data: this.$qs.stringify({type:type})
      }).then(success => {
        if(success.data!= null){
          this.ruleForm.data=success.data
        }

      })
    },



    submit(ans) {
      console.log(ans)
      for (let i = 0; i < this.ruleForm.data.length; i++) {
        if (ans[i] === this.ruleForm.data[i].ans) {
          this.ruleForm.result[i]=true
        } else {
          this.ruleForm.result[i]=false
        }
      }
    },

    addfavourite(num){
      var uid=localStorage.getItem('id');
      var qid=num;
      var type=1;
      this.$http({
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        url: main.url+"/favorite/add",
        method: 'post',
        data: this.$qs.stringify({uid:uid,qid:qid,type:type})
      }).then(success => {
        if(success.data== 1){
          this.$message({type: 'success', message: '收藏成功'});
        }

        this.dialogVisible=true;
      })

    },
  }

}
</script>

<style scoped>

</style>