<template>
  <div class="top">
    <div class="w1200 cont">
      <ul>
        <li  >
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
        <li class="on">
          <router-link to="qiwu">中医器物</router-link>

        </li>
        <li>
          <router-link to="test">知识检测</router-link>

        </li>
        <li>
          <router-link to="users">个人中心</router-link>

        </li>
      </ul>
    </div>
    <div class="swiper-pagination swiper-pagination-white"></div>
  </div>
</template>

<script>
export default {
  name: "QWPage"
}
</script>

<style scoped>

</style>