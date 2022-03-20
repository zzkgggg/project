<template>
  <div class="top">
    <div class="w1200 cont">
      <ul>
        <li class="on" >
          <router-link to="index">网站首页</router-link>
        </li>
        <li>
          <router-link to="books">藏书阁</router-link>
        </li>
        <li>
          <router-link to="map">中医地图</router-link>
        </li>
        <li>
          <router-link to="yangsheng">中医养生</router-link>

        </li>
      </ul>
      <!--      <a href="" class="logo"><img src="images/logo.png" /></a>-->
      <ul>
        <li>
          <router-link to="culture">中医文化</router-link>

        </li>
        <li>
          <router-link to="qiwu">中医器物</router-link>

        </li>
        <li>
          <router-link to="test">知识检测</router-link>

        </li>
        <li>
          <router-link to="login">个人中心</router-link>

        </li>
      </ul>
    </div>
    <div class="swiper-pagination swiper-pagination-white"></div>
  </div>

  <div class="qianjing">
    <div class="tit">
      <h3>中医四大经典著作</h3>
      <p></p>
    </div>
    <div class="cont">
      <ul class="ul1">
        <li>
          <a href="">
            <figure><img src="../../images/尚灸_24.png" /></figure>
            <h4>难经</h4>
            <p>《难经》原名《黄帝八十一难经》，又称《八十一难》，是中医现存较早的经典著作</p>
          </a>
        </li>
        <li>
          <a href="">
            <figure><img src="../../images/尚灸_26.png" /></figure>
            <h4>皇帝内经</h4>
            <p>《黄帝内经》分《灵枢》、《素问》两部分，是中国最早的医学典籍</p>
          </a>
        </li>
        <li>
          <a href="">
            <figure><img src="../../images/尚灸_28.png" /></figure>
            <h4>伤寒杂病论</h4>
            <p>《伤寒杂病论》是中国传统医学著作之一，是一部论述外感病与内科杂病为主要内容的医学典籍</p>
          </a>
        </li>
        <li>
          <a href="">
            <figure><img src="../../images/尚灸_30.png" /></figure>
            <h4>神农本草经</h4>
            <p>《神农本草经》又称《本草经》或《本经》，托名“神农”所作，实成书于汉代，是中医四大经典著作之一，是已知最早的中药学著作</p>
          </a>
        </li>
      </ul>
    </div>
  </div>

  <div class="footer">
    <div class="cont w1200">
      <div class="div1 div">
        <h3>联系我们</h3>
        <h2>110</h2>

        <div class="code">
          <div>
            <img src="../../images/尚灸_99.png" />
              <p>问题反馈</p>
          </div>

        </div>
      </div>
      <div class="div2 div">
        <h3>关于中医文化馆</h3><br>
        <h3>zzk       版权所有</h3>
        <p>

          <a href="">网站首页    </a>       	<a href="">关于我们   </a>           	<a href="">服务项目   </a>
          <a href="">康复案例    </a>       	<a href="">招商加盟   </a>           	<a href="">加盟商风采  </a>
          <a href="">新闻资讯    </a>       	<a href="">联系我们   </a>

        </p>
      </div>


    </div>
  </div>


</template>

<script>
export default {
  data:function (){
    return{

    }
  },
  methods:{
    login(){
      this.$router.push({path:'login'});
    }
  }

}

</script>

<style scoped>
@import "../../css/style.css";
@import "../../css/swiper-5.2.0.min.css";


</style>