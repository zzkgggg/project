<template>
  <div class="top">
    <div class="w1200 cont">
      <ul>
        <li>
          <router-link to="index">网站首页</router-link>
        </li>
        <li>
          <router-link to="books">藏书阁</router-link>
        </li>
        <li>
          <router-link to="map">中医地图</router-link>
        </li>
        <li class="on">
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
          <router-link to="/users/:id">个人中心</router-link>

        </li>
      </ul>
    </div>
    <div class="swiper-pagination swiper-pagination-white"></div>
  </div>

  <div class="kuang_ping_nwes">

    <div class="news_list_ziye">
      <ul>
        <li>
          <a href="news_xq.html"><img src="../../images2/news_img1.jpg" alt=""></a>
          <div class="text">
            <a href="news_xq.html"><h2>精神养生</h2></a>
            <p>精神养生简介：</p>
            <el-button class="xaingq">查看详情</el-button>
          </div>
        </li>
        <li>
          <a href="news_xq.html"><img src="../../images2/news_img2.jpg" alt=""></a>
          <div class="text">
            <a href="news_xq.html"><h2>饮食养生</h2></a>
            <p>饮食养生简介：</p>
            <el-button class="xaingq">查看详情</el-button>
          </div>
        </li>
        <li>
          <a href="news_xq.html"><img src="../../images2/news_img1.jpg" alt=""></a>
          <div class="text">
            <a href="news_xq.html"><h2>起居养生</h2></a>
            <p>起居养生简介：</p>
            <el-button class="xaingq">查看详情</el-button>
          </div>
        </li>
        <li>
          <a href="news_xq.html"><img src="../../images2/news_img2.jpg" alt=""></a>
          <div class="text">
            <a href="news_xq.html"><h2>运动养生</h2></a>
            <p>运动养生简介：</p>
            <el-button class="xaingq">查看详情</el-button>

          </div>
        </li>
        <li>
          <a href="news_xq.html"><img src="../../images2/news_img2.jpg" alt=""></a>
          <div class="text">
            <a href="news_xq.html"><h2>睡眠养生</h2></a>
            <p>睡眠养生简介：</p>
            <el-button class="xaingq">查看详情</el-button>

          </div>
        </li>
      </ul>
    </div>
  </div>


</template>

<script>
export default {
  name: "YSPage"
}
</script>

<style scoped>


.kuang_ping_nwes {
  position: relative;
  background: url(../../images2/ziybj.jpg) no-repeat top center scroll;
  /* padding-bottom: 50px; */
}


.news_list_ziye {
  padding: 20px 0;
}

.news_list_ziye ul {
  padding: 10px;
}

.news_list_ziye li {
  position: relative;
  padding: 20px 0;
  margin: 20px;
  border-bottom: dashed 1px #999;
  overflow: hidden;
}

.news_list_ziye li img {
  width: 445px;
  height: 280px;
  object-fit: cover;
  float: left;
  -webkit-transition: all 0.3s ease-in-out 0s;
  -o-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  filter: brightness(1);
}

.news_list_ziye li img:hover {
  filter: brightness(1.2);
}

.news_list_ziye li .text {
  height: 280px;
  width: 690px;
  position: relative;
  float: right;
  margin-right: 15%;
}

.news_list_ziye li .text .xaingq {
  padding: 6px;
  position: absolute;
  border: solid 1px #e60202;
  color: #e60202;
  border-radius: 3px;
  top: 250px;
  font-size: 20px;
}

.news_list_ziye li .text h2 {
  padding: 0;
  font-size: 30px;
  margin: 0;
  color: #000;
  padding-bottom: 20px;
}

.news_list_ziye li .text p {

  line-height: 30px;
  font-size: 20px;
  text-align: justify;
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}


.news_list_ziye li img {
  /*width: 96%;*/
  margin: 0 10% 0 15%;
  /*height: 3rem;*/
}

.news_list_ziye li {
  padding-top: 0;
  margin-top: 0;
}


</style>