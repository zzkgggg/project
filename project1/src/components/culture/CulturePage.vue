<template>
  <div class="top">
    <div class="w1200 cont">
      <ul>
        <li>
          <router-link to="/index">网站首页</router-link>
        </li>
        <li>
          <router-link to="/books">中医资源库</router-link>
        </li>
        <li>
          <router-link to="/map">中医地图</router-link>
        </li>
        <li>
          <router-link to="/yangsheng">中医养生</router-link>

        </li>
      </ul>
      <!--      <a href="" class="logo"><img src="images/logo.png" /></a>-->
      <ul>
        <li class="on">
          <router-link to="/culture">中医文化</router-link>

        </li>
        <li>
          <router-link to="/qiwu">中医器物</router-link>

        </li>
        <li>
          <router-link to="/test">知识检测</router-link>

        </li>
        <li>
          <router-link to="/users/:id">个人中心</router-link>

        </li>
      </ul>
    </div>
    <div class="swiper-pagination swiper-pagination-white"></div>
  </div>

  <div class="content">
    <div class="px1200">
      <div class="title"><br><br>
        <h2>中医文化展示</h2><br>
      </div>

      <div class="buttongroup">
        <el-button-group size="large">
          <el-button type="text" class="el-button">诊疗文化</el-button>
          <el-button type="text" class="el-button" style="margin-left: 10px">本草文化</el-button>
          <el-button type="text" class="el-button" style="margin-left: 10px">医政制度文化</el-button>
          <el-button type="text" class="el-button" style="margin-left: 10px">传承教育文化</el-button>

        </el-button-group>

      </div>
      <div>
        <router-view/>
      </div>



    </div>
  </div>


</template>

<script>
export default {
  name: "CulturePage",
  mounted() {
    this.$router.push({path:'/culture/CPage'});
  }
}
</script>

<style scoped>
.buttongroup {
  text-align: center;
  margin: auto;
  position: relative;

}

.el-button {
  margin: 10px;
  padding: 20px;
  font-size: 20px;
  color: #000000;
}

.el-button:hover {
  color: #fff;
  font-size: 18px;
  background: url(../../images2/active.png) no-repeat center;
}


.content .ship {
  position: absolute;
  width: 800px;
  height: 450px;
  top: -300px;
  left: 0;
  right: 0;
  margin: auto;
  background: #000;
}

.content .ship {
  width: 96%;
  height: inherit;
  margin: 2%;
  top: -2rem;
}

.content .ship video {
  width: 100%;
  height: 100%;
}


.content {
  position: relative;
  background: url(../../images2/ziybj.jpg) no-repeat top center;
  padding-bottom: 50px;
}

.content .jinajie_kuang {
  text-align: justify;
  line-height: 35px;
  color: #454545;
  padding-bottom: 50px;
}

.content .jinajie_kuang h2 {
  text-align: center;
}

.content .jinajie_kuang img {
  max-width: 1200px;
  text-align: center;
  margin: auto;
  display: block;
  padding: 10px 0;
}


.dangq_luj {
  color: #505050;
  padding: 10px 0;
  padding: 10px;
}

.dangq_luj a {
  color: #505050;
}

.title {

  text-align: center;
}

.title h2 {
  color: #000;
  font-weight: normal;
  font-size: 24px;
}

.title p {
  color: #454545;
}

.px1200 {
  margin: auto;
  width: 1200px;
  position: relative;
}

.yao_meng {
  height: initial;

}

.yao_meng > div {
  right: 0;
  left: 0;
  margin: auto;
  width: 95%;
  text-align: center;
  position: relative;
  top: 0;
  padding: 10px 0;
}

.yao_meng > div a {
  margin-bottom: .1rem;
}

.yao_meng > div a.no {
  border: solid 1px #e60202;
  background: #e60202;
  color: #ffff;
}

.yao_meng_ziye {
  margin-top: 1px;
  height: initial;
  margin-bottom: 2px;
}

.yao_meng_ziye > div {
  position: relative;
  top: 0;
}

.yao_meng_ziye {
  margin-top: 1px;
  height: initial;
  margin-bottom: 2px;
}

.yao_meng_ziye > div {
  position: relative;
  top: 0;
}

.nimen_nimen_Ge {
  padding-top: 30px;
}

.nimen_nimen_Ge ul {
  padding: 0;
  overflow: hidden;
  margin: 0;
}

.nimen_nimen_Ge ul li {
  width: 385px;
  float: left;
  border-bottom: solid 1px #e3e3e3;
  margin-bottom: 20px;
  margin-right: 22px;
}

.nimen_nimen_Ge ul li img {
  width: 385px;
  height: 285px;
  object-fit: cover;
  -webkit-transition: all 0.3s ease-in-out 0s;
  -o-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  filter: brightness(1);
}

.nimen_nimen_Ge ul li img:hover {
  filter: brightness(1.2);

}

.nimen_nimen_Ge ul li:nth-child(3n) {
  margin-right: 0;
}

.nimen_nimen_Ge ul li p {
  line-height: 30px;
  font-size: 18px;
  color: #404040;
  padding-top: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}


</style>