<template>
  <div class="top">
    <div class="w1200 cont">
      <ul>
        <li>
          <router-link to="/index">网站首页</router-link>
        </li>
        <li>
          <router-link to="/books">藏书阁</router-link>
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
        <li>
          <router-link to="/culture">中医文化</router-link>

        </li>
        <li>
          <router-link to="/qiwu">中医器物</router-link>

        </li>
        <li class="on">
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
    <div class="tit">
      <h3>知识库</h3>
      <p>用于检测自己的学习成果</p>
    </div>
    <div class="w1200">
      <div class="hd">
        <ul>
          <li>
            <router-link to="/test/test_ys">中医养生</router-link>
          </li>
          <li>
            <router-link to="/test/test_culture">中医文化</router-link>
          </li>
          <li>
            <router-link to="/test/test_qw">中医器物</router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="testcontent">
      <router-view/>

    </div>
  </div>


</template>

<script>
export default {
  name: "TestPage"
}
</script>

<style scoped>

.content {
  background: url(../../images2/ziybj.jpg) no-repeat top center;
}


.w1200 {
  width: 1200px;
  margin: 0 auto;
}

.hd ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.hd li {
  display: block;
  width: 280px;
  height: 60px;
  background: url(../../images/line-bg.png) no-repeat;
  background-position: 0 -61px;
  margin-bottom: 20px;
}

.hd li a {
  text-align: center;
  display: block;
  font-size: 24px;
  font-family: "新宋体";
  line-height: 63px;
}

.hd li.on, .hd li:hover {
  background-position: 0 0;
}

.hd li.on a, .hd li:hover a {
  color: #cf4a53;
}


</style>