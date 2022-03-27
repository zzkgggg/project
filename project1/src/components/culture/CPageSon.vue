<template>
  <div class="ziye_gbeij">
    <div class="ngage_ges"></div>
    <div class="buttonsonpage">
      <el-button size="large">返回</el-button>
    </div>
    <div class="px1200 jinajie_kuang" v-if="detail==1.1">
      <h2>诊疗方式</h2>
      <p>
        中医在诊断上讲求“四诊合参，辨证求本”，注重整体审查、取象比类、内外合一、
        审证求因、天人相参 治疗上讲求针、石、灸炳、毒药、导引、按跷等不同治疗方法有针
        对性单独或综合运用 可以说在中医的诊疗行为中充分体现着中医文化的核心价值。
      </p>
      <img src="../../images2/tupian_03.jpg" alt="">
    </div>

    <div class="px1200 jinajie_kuang" v-if="detail==1.2">
      <h2>四诊合参</h2>
      <p>
        清代名医林之翰在《四诊抉微·凡例》中说：“四诊为岐黄之首务 ”中医在诊断方
        法上以望、闻、问、切四诊合参，从宏观、整体 功能角度辨识人体状况，以望而初知，闻
        而浅知，问而得知，切而多知相结合，遍查周知地做出诊断
      </p>
      <img src="../../images2/tupian_03.jpg" alt="">
    </div>

    <div class="px1200 jinajie_kuang" v-if="detail==1.3">
      <h2>望而知之</h2>
      <p>
        在望闻问切中，望诊居首，有四诊中“望尤为切紧”（《四诊抉微凡例》）之说法，《难经》中也说“望而知之谓之神”（《难经·六十难》）《望诊遵经》里说 “治病必先知诊，诊病必先知望 ”可见对望诊的重视 望诊即观察病人的气
        色、神态、形体乃至分泌物、排泄物的色质异常变化等，以协助了解病情，辨识疾病之状
        态的一种诊断方法。
      </p>
      <img src="../../images2/tupian_03.jpg" alt="">
    </div>

    <div class="px1200 jinajie_kuang" v-if="detail==1.4">
      <h2>闻声嗅气</h2>
      <p>
        四诊中的闻诊就是通过昕声音和闻气味来诊断疾病的一种方法。《难经》中说“闻而知之谓之圣”（《难经·六十一难》），并说“闻其五音，以别其病”。
        以听声音来诊病的方法早在《周礼·天官》中就有记载，有“五气、五声、五色视其死
        生”之说法 在《黄帝内经》中则提出了语言、呼吸、咳嗽等声音的异常变化与疾病之
        间的关系，比如《素问·阳明脉解》里说：“阳盛则使人妄言骂雷不避亲疏 ”还明确阐
        述了五声是呼、笑、歌、哭、呻，五音是角、徽、宫、商、羽，以及五脏、五声、五音之间的相
        互关系，如肝“在音为角，在声为呼”、肾“在音为羽，在声为呻”与脏象理论相联系，奠
        定了闻诊的理论基础。
      </p>
      <img src="../../images2/tupian_03.jpg" alt="">
    </div>

    <div class="px1200 jinajie_kuang" v-if="detail==1.5">
      <h2>切脉诊病</h2>
      <p>
        《难经》说 “切而知之谓之巧”，“巧”，为“技术”“技巧”之意。脉又称把脉或者说摸脉，是医生运用手指切按患者体表动脉，探查脉象，根据脉系的变
        化得知病情、辨识病证的一种诊病方法。脉诊是中医所独具的诊断方法，具有完整系
        统的理论体系，在中医临床中发挥着重要作用
      </p>
      <img src="../../images2/tupian_03.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "CPageSon",
  data(){
    return{
      detail:0
    }
  },
  mounted() {
    this.detail=this.$route.params.id;
  },
  methods:{
    opendetail(){
      this.detail=this.$route.params.id;
    }
  }
}
</script>

<style scoped>


.buttonsonpage{
  padding: 6px;
  position: absolute;
  border: solid 1px #e60202;
  color: #e60202;
  border-radius: 3px;
  top: 250px;
  font-size: 20px;
}


.ziye_gbeij{
  position: relative;
  padding-bottom: 50px;
}

.ziye_gbeij .jinajie_kuang{
  text-align: justify;
  line-height: 35px;
  color: #454545;
  padding-bottom: 50px;
}
.ziye_gbeij .jinajie_kuang h2{
  text-align: center;
  font-size: 30px;
  margin-top: 20px;
}

.ziye_gbeij .jinajie_kuang p{
  text-align: left;
  font-size: 20px;
  margin-top: 20px;
  padding: 3px;
}

.ziye_gbeij .jinajie_kuang img{
  max-width:1200px;
  text-align: center;
  margin: auto;
  display: block;
  padding:10px 0;
  margin-top: 10px;
}

.px1200{
  margin: auto;
  width: 1200px;
  position: relative;
}
</style>