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
          第{{ index + 1 }}题：{{ item.ques }}
        </p>
        <br>
        <!--        题目显示-->
        <!-- 题目绑定的值是 每一项的 item.choices  -->
        <el-form-item label="选项" prop="choices">
          <el-radio-group v-model="ruleForm.answer[index]">
            <el-radio label="A">{{ item.choice[0] }}</el-radio>
            <el-radio label="B">{{ item.choice[1] }}</el-radio>
            <el-radio label="C">{{ item.choice[2] }}</el-radio>
            <el-radio label="D">{{ item.choice[3] }}</el-radio>
          </el-radio-group>
        </el-form-item>

        <div v-if="ruleForm.result[index]===true">回答正确</div>
        <div v-if="ruleForm.result[index]===false">回答错误,正确答案是{{item.ans}}</div>
      </div>
      <el-button @click="submit(ruleForm.answer)">提交</el-button>
    </el-form>


  </div>
</div>
</template>

<script>
export default {
  name: 'app',
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
    var a = [{"id": "0", "ques": "中医认为正确得四季养生就是", "choice": ["春秋养阳", "夏季养阴", "春夏养阳", "秋冬养阳"], "ans": "C"}, {"id": "1", "ques": "根据中医理论五味适量有益五脏，适量得苦味食品有益于", "choice": ["肝", "心", "脾", "肺"], "ans": "B"},
      {"id": "2", "ques": "阴阳学说认为，机体健康时，阴阳之间得关系为", "choice": ["阴阳对立", "阴平阳秘", "阴阳消长", "阴阳转化"], "ans": "B"},{"id": "3", "ques": "下列不宜用阴阳得基本概念来概括得就是", "choice": ["寒与热", "上与下", "动与静", "邪与正"], "ans": "D"},
      {"id": "4", "ques": "关于劳伤下列叙述不正确得就是", "choice": ["久立伤骨", "久视伤精", "久卧伤气", "久行伤筋"], "ans": "B"},{"id": "5", "ques": "下列中何项不属于房事养生得运用原则", "choice": ["禁欲或纵欲", "注意房事卫生", "遵守房事禁忌", "杜绝性生活混乱"], "ans": "A"},
      {"id": "6", "ques": "以下食物属于热性的是", "choice": ["银耳", "韭菜", "猪肉", "带鱼"], "ans": "B"},{"id": "7", "ques": "三伏天暑湿较重，宜食什么化湿之物", "choice": ["香菜", "冬瓜", "百合", "绿豆"], "ans": "B"}];
    this.ruleForm.data = a
    console.log(a);
  },

  methods: {
    submit(ans) {
      console.log(ans)
      for (let i = 0; i < this.ruleForm.data.length; i++) {
        if (ans[i] === this.ruleForm.data[i].ans) {
          this.ruleForm.result[i]=true
        } else {
          this.ruleForm.result[i]=false
        }
      }
    }
  }

}

</script>

<style scoped src="../../css/TestPage.css">



</style>