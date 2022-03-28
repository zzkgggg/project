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

        <div v-if="catalog_js===1.2">

        </div>

        <div v-if="catalog_js===1.3">

        </div>
        <!--        精神养生-->
        <li>
          <img src="../../images2/news_img1.jpg" alt="">
          <div class="text">
            <h2>精神养生</h2>
            <div class="buttongroupys" v-if="catalog_js===4">
              <el-button type="text" class="buttonys" @click="changecatalog_js(1)">第一章：情志变化</el-button>
              <br>
              <el-button type="text" class="buttonys" @click="changecatalog_js(2)">第二章：调神养生法</el-button>
              <br>
              <el-button type="text" class="buttonys" @click="changecatalog_js(3)">第三章：调摄情绪法</el-button>
              <br>
              <el-alert class="alert1" show-icon title="点击相应目录可进入正文查看" type="info" close-text="关闭"/>
            </div>
            <div v-if="catalog_js===1">
              <router-link to="/jsys/11.1" class="routstyle">一、情志变化的保健</router-link>
              <br>
              <router-link to="/jsys/11.2" class="routstyle">二、影响情志变化的因素</router-link>
              <br>
              <router-link to="/jsys/11.3" class="routstyle">三、情志对健康的影响</router-link>
              <br>
              <el-button class="xaingq" @click="changecatalog_js(4)">返回</el-button>
            </div>

            <div v-if="catalog_js===2">

              <router-link to="/jsys/12.1" class="routstyle">一、清静养神</router-link>
              <br>
              <router-link to="/jsys/12.2" class="routstyle">二、立志养德</router-link>
              <br>
              <router-link to="/jsys/12.3" class="routstyle">三、开朗乐观</router-link>
              <br>
              <router-link to="/jsys/12.4" class="routstyle">四、保持心理平衡</router-link>
              <br>
              <el-button class="xaingq" @click="changecatalog_js(4)">返回</el-button>
            </div>
            <div v-if="catalog_js===3">
              <router-link to="/jsys/13.1" class="routstyle">一、节制法</router-link>
              <br>
              <router-link to="/jsys/13.2" class="routstyle">二、疏泄法</router-link>
              <br>
              <router-link to="/jsys/13.3" class="routstyle">三、转移法</router-link>
              <br>
              <router-link to="/jsys/13.4" class="routstyle">四、情志制约法</router-link>
              <br>
              <el-button class="xaingq" @click="changecatalog_js(4)">返回</el-button>
            </div>

          </div>
        </li>
        <!--        饮食养生-->
        <li>
          <img src="../../images2/news_img1.jpg" alt="">
          <div class="text">
            <a href="news_xq.html"><h2>饮食养生</h2></a>
            <div class="buttongroupys" v-if="catalog_ys===4">
              <el-button type="text" class="buttonys" @click="changecatalog_ys(1)">第一节：情志变化</el-button>
              <br>
              <el-button type="text" class="buttonys" @click="changecatalog_ys(2)">第二节：调神养生法</el-button>
              <br>
              <el-button type="text" class="buttonys" @click="changecatalog_ys(3)">第三节：调摄情绪法</el-button>
              <br>
              <el-alert class="alert1" show-icon title="点击相应目录可进入正文查看" type="info" close-text="关闭"/>
            </div>
            <div v-if="catalog_ys===1">
              <p>123</p>
              <el-button class="xaingq" @click="changecatalog_ys(4)">返回</el-button>
            </div>
            <div v-if="catalog_ys===2">
              <p>234</p>
              <el-button class="xaingq" @click="changecatalog_ys(4)">返回</el-button>
            </div>
            <div v-if="catalog_ys===3">
              <p>456</p>
              <el-button class="xaingq" @click="changecatalog_ys(4)">返回</el-button>
            </div>

          </div>
        </li>
        <!--        起居养生-->
        <li>
          <img src="../../images2/news_img1.jpg" alt="">
          <div class="text">
            <a href="news_xq.html"><h2>起居养生</h2></a>
            <div class="buttongroupys" v-if="catalog_qj===4">
              <el-button type="text" class="buttonys" @click="changecatalog_qj(1)">第一节：情志变化</el-button>
              <br>
              <el-button type="text" class="buttonys" @click="changecatalog_qj(2)">第二节：调神养生法</el-button>
              <br>
              <el-button type="text" class="buttonys" @click="changecatalog_qj(3)">第三节：调摄情绪法</el-button>
              <br>
              <el-alert class="alert1" show-icon title="点击相应目录可进入正文查看" type="info" close-text="关闭"/>
            </div>
            <div v-if="catalog_qj===1">
              <p>123</p>
              <el-button class="xaingq" @click="changecatalog_qj(4)">返回</el-button>
            </div>
            <div v-if="catalog_qj===2">
              <p>234</p>
              <el-button class="xaingq" @click="changecatalog_qj(4)">返回</el-button>
            </div>
            <div v-if="catalog_qj===3">
              <p>456</p>
              <el-button class="xaingq" @click="changecatalog_qj(4)">返回</el-button>
            </div>

          </div>
        </li>
        <li>
          <img src="../../images2/news_img1.jpg" alt="">
          <div class="text">
            <a href="news_xq.html"><h2>运动养生</h2></a>
            <div class="buttongroupys" v-if="catalog_yd===4">
              <el-button type="text" class="buttonys" @click="changecatalog_yd(1)">第一节：情志变化</el-button>
              <br>
              <el-button type="text" class="buttonys" @click="changecatalog_yd(2)">第二节：调神养生法</el-button>
              <br>
              <el-button type="text" class="buttonys" @click="changecatalog_yd(3)">第三节：调摄情绪法</el-button>
              <br>
              <el-alert class="alert1" show-icon title="点击相应目录可进入正文查看" type="info" close-text="关闭"/>
            </div>
            <div v-if="catalog_yd===1">
              <p>123</p>
              <el-button class="xaingq" @click="changecatalog_yd(4)">返回</el-button>
            </div>
            <div v-if="catalog_yd===2">
              <p>234</p>
              <el-button class="xaingq" @click="changecatalog_yd(4)">返回</el-button>
            </div>
            <div v-if="catalog_yd===3">
              <p>456</p>
              <el-button class="xaingq" @click="changecatalog_yd(4)">返回</el-button>
            </div>

          </div>
        </li>
        <li>
          <img src="../../images2/news_img1.jpg" alt="">
          <div class="text">
            <a href="news_xq.html"><h2>睡眠养生</h2></a>
            <div class="buttongroupys" v-if="catalog_sm===4">
              <el-button type="text" class="buttonys" @click="changecatalog_sm(1)">第一节：情志变化</el-button>
              <br>
              <el-button type="text" class="buttonys" @click="changecatalog_sm(2)">第二节：调神养生法</el-button>
              <br>
              <el-button type="text" class="buttonys" @click="changecatalog_sm(3)">第三节：调摄情绪法</el-button>
              <br>
              <el-alert class="alert1" show-icon title="点击相应目录可进入正文查看" type="info" close-text="关闭"/>
            </div>
            <div v-if="catalog_sm===1">
              <p>sm1</p>
              <el-button class="xaingq" @click="changecatalog_sm(4)">返回</el-button>
            </div>
            <div v-if="catalog_sm===2">
              <p>sm2</p>
              <el-button class="xaingq" @click="changecatalog_sm(4)">返回</el-button>
            </div>
            <div v-if="catalog_sm===3">
              <p>sm3</p>
              <el-button class="xaingq" @click="changecatalog_sm(4)">返回</el-button>
            </div>

          </div>
        </li>

      </ul>
    </div>
  </div>


</template>

<script>
export default {
  name: "YSPage",
  data() {
    return {
      catalog_js: 4,
      catalog_ys: 4,
      catalog_qj: 4,
      catalog_yd: 4,
      catalog_sm: 4
    }

  },
  methods: {
    changecatalog_js(num) {
      return this.catalog_js = num;
    },
    changecatalog_ys(num) {
      return this.catalog_ys = num;
    },
    changecatalog_qj(num) {
      return this.catalog_qj = num;
    },
    changecatalog_yd(num) {
      return this.catalog_yd = num;
    },
    changecatalog_sm(num) {
      return this.catalog_sm = num;
    },
  }
}
</script>

<style scoped src="../../css/YSPage.css">



</style>