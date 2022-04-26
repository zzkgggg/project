<template>
  <div class="top">
    <div class="w1200 cont">
      <ul>
        <li>
          <router-link to="/index">网站首页</router-link>
        </li>
        <li class="on">
          <router-link to="/bookindex">中医资源库</router-link>
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

  <div class="group">
    <!--    <el-button-group size="large">-->
    <!--      <el-button type="text" class="el-button" @click="toBook()">藏书库</el-button>-->
    <!--      <el-button type="text" class="el-button" style="margin-left: 10px" @click="toMedia()">多媒体</el-button>-->
    <!--      <el-button type="text" class="el-button" style="margin-left: 10px" @click="toCartoon()">漫画</el-button>-->
    <!--    </el-button-group>-->

    <router-link to="books" class="el-button">藏书库</router-link>
    <router-link to="media" class="el-button">多媒体</router-link>
<!--    <router-link to="cartoon" class="el-button">漫画</router-link>-->

  </div>

  <div>
    <router-view/>
  </div>


</template>

<script>
export default {
  name: "IndexPage",
  methods: {
  }
}
</script>

<style scoped>
.group {
  margin-top: 60px;
  text-align: center;
  margin: auto;
  position: relative;
  border: none;
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


</style>