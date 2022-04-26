<template>
  <div class="top">
    <div class="w1200 cont">
      <ul>
        <li>
          <router-link to="/index">网站首页</router-link>
          <p></p>
        </li>
        <li>
          <router-link to="/books">中医资源库</router-link>
        </li>
        <li class="on">
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


  <el-container
      class="layout-container-demo"
      style="height: 1000px; border: 1px solid #eee"
  >
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-scrollbar>
        <el-menu :default-openeds="['1','2', '3']">
          <el-sub-menu index="1">
            <template #title>
              广州中医名点
            </template>
            <el-menu-item index="1-1" @click="toyiyuan()">广州中医药大学附属第一医院</el-menu-item>
            <el-menu-item index="1-2" @click="tolingnan()">岭南名医壁</el-menu-item>
            <el-menu-item index="1-3" @click="toqingping()">清平中药材专业市场</el-menu-item>
            <el-menu-item index="1-4" @click="togyjt()">广州医药集团</el-menu-item>
          </el-sub-menu>



          <el-sub-menu index="2">
            <template #title>
              地区导航
            </template>
            <el-menu-item index="2-1" @click="sendzuobiao1(18)">中医博物馆</el-menu-item>
            <el-menu-item index="2-2" @click="sendzuobiao1(11)">百草基地</el-menu-item>
            <el-menu-item index="2-3">养生健康馆</el-menu-item>
            <el-menu-item index="2-4">诊疗馆</el-menu-item>
            <el-menu-item index="2-5" @click="sendIframeWinpMessage1()">导航</el-menu-item>
            <!--            <el-menu-item-group title="中草药养植基地">-->
            <!--              <el-menu-item index="1-3">Option 3</el-menu-item>-->
            <!--              <el-menu-item index="1-3">Option 4</el-menu-item>-->
            <!--            </el-menu-item-group>-->
            <!--            <el-menu-item-group title="中医药非物质文化遗产">-->
            <!--              <el-menu-item index="1-3">Option 3</el-menu-item>-->
            <!--              <el-menu-item index="1-3">Option 4</el-menu-item>-->
            <!--            </el-menu-item-group>-->
            <!--            <el-menu-item-group title="中医老字号">-->
            <!--              <el-menu-item index="1-3">Option 3</el-menu-item>-->
            <!--              <el-menu-item index="1-3">Option 4</el-menu-item>-->
            <!--            </el-menu-item-group>-->
            <!--            <el-menu-item-group title="中医药博物馆">-->
            <!--              <el-menu-item index="1-3">Option 3</el-menu-item>-->
            <!--              <el-menu-item index="1-3">Option 4</el-menu-item>-->
            <!--            </el-menu-item-group>-->
            <!--            <el-sub-menu index="1-4">-->
            <!--              <template #title>Option4</template>-->
            <!--              <el-menu-item index="1-4-1">Option 4-1</el-menu-item>-->
            <!--            </el-sub-menu>-->


          </el-sub-menu>

          <el-sub-menu index="3">
            <template #title>
              中草药园导学图
            </template>
            <el-menu-item index="3-1" @click="sendzuobiao2(0,3)">初级导学图</el-menu-item>
            <el-menu-item index="3-2" @click="sendzuobiao2(1,3)">中级导学图</el-menu-item>
            <el-menu-item index="3-3" @click="sendzuobiao2(2,3)">高级导学图</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>


    </el-aside>

    <el-container>
      <el-header style="text-align: center; font-size: 12px; height: 80px">
        <el-button-group>
          <el-button class="mapbutton1" size="large" @click="toBmap()">广州地区中医馆</el-button>
          <el-button class="mapbutton1" size="large" @click="changemap(1)">地图导航</el-button>
          <el-button class="mapbutton2" size="large" @click="changemap(2)">中草药园导学图</el-button>
        </el-button-group>


      </el-header>

      <el-main>

                <BMAPPAGE v-if="bmap==1" ref="mychild"/>
        <!--        <MapPageFrame/>-->
        <iframe src="static/index.html" style="width: 100%;height: 100%" frameborder="0" ref="iframe1"
                v-if="index==1"></iframe>
        <iframe src="static/index2.html" style="width: 100%;height: 100%" frameborder="0" ref="iframe2"
                v-if="index==2"></iframe>

      </el-main>
    </el-container>
  </el-container>


</template>


<script>
import "../../main";
import BMAPPAGE from "@/components/map/BMAPPAGE";
// import MapPageFrame from "@/components/map/MapPageFrame"
// import BMap from 'BMap';
// import router from "@/router";
// import BMapSymbolSHAPEPOINT from 'BMap_Symbol_SHAPE_POINT';

export default {
  name: "MapPage",
  data() {
    return {
      iframeWin: {},
      data_receive: {},
      zuobiao: new Array(),
      index: 2,
      bmap:1
    };
  },
  components: {
    BMAPPAGE,
    // MapPageFrame
  },
  mounted() {
    // this.$router.push({path: '/map/mapcustom'});
    //发送数据
    if(this.index==1){
      this.iframeWin = this.$refs.iframe1.contentWindow;
    }
    else {
      this.iframeWin = this.$refs.iframe2.contentWindow;
    }


    //接收数据
    window.addEventListener("message", this.handleMessage);


  },
  methods: {

    toyiyuan() {
      this.$refs.mychild.toyiyuan();
    },

    toTRT(){
      this.$refs.mychild.toTRT();
    },

    tolingnan() {
      this.$refs.mychild.tolingnan();
    },

    toqingping() {
      this.$refs.mychild.toqingping();
    },

    togyjt() {
      this.$refs.mychild.togyjt();
    },

    toBmap(){
       this.bmap=1;
    },


    sendzuobiao1(goal) {
      if(this.index==1){
        this.iframeWin = this.$refs.iframe1.contentWindow;
      }
      else{
        this.iframeWin = this.$refs.iframe2.contentWindow;
      }
      this.zuobiao[0] = goal;
      this.sendIframeWinpMessage();
    },



    sendzuobiao2(s,e) {
      if(this.index==1){
        this.iframeWin = this.$refs.iframe1.contentWindow;
      }
      else{
        this.iframeWin = this.$refs.iframe2.contentWindow;
      }
      this.zuobiao[0] = s;
      this.zuobiao[1] = e;
      this.sendIframeWinpMessage();
    },


    sendIframeWinpMessage() {
      this.iframeWin.postMessage({
        params: {s:this.zuobiao[0],e:this.zuobiao[1]}/*在iframe页面中接收通过key也就是param接收，因此传输的数据可以是对象，包含多个key以及对应的数据*/

      }, "*");
    },

    handleMessage(event) {
      // 获取从iframe页面中传过来的值
      // var cmd = event.data.cmd;
      var params = event.data.params;
      this.data_receive = params;
    },

    changemap(num) {
      this.bmap=0;
      return this.index = num;

    }


  }
}


//
// methods: {
//   mapBD() {
//     var map = new BMap.Map('allmap'); // 创建Map实例
//     map.centerAndZoom(new BMap.Point(114.29142226193235, 34.57780583143303), 17); // 初始化地图,设置中心点坐标和地图级别
//     map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
//     map.setMinZoom(14); //设置最小缩放
//     map.setMaxZoom(17); //设置最大放大
//     // map.setMapType(BMAP_HYBRID_MAP); //设置为混合地图
//   }
// }

</script>

<style scoped src="../../css/MapPage.css">
.span1 {
  margin-right: 980px;
  font-size: 40px;
}


.toolbar {
  position: absolute;
  display: inline-flex;
  align-items: center;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}


</style>