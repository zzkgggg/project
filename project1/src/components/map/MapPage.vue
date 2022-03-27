<template>
  <div class="top">
    <div class="w1200 cont">
      <ul>
        <li>
          <router-link to="/index">网站首页</router-link>
          <p></p>
        </li>
        <li>
          <router-link to="/books">藏书阁</router-link>
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
        <el-menu :default-openeds="['1', '3']">
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <message/>
              </el-icon>
              地区导航
            </template>
            <el-menu-item-group title="中医药文化基地">
              <el-menu-item index="1-1" @click="toZZL()">周祖陵森林公园</el-menu-item>
              <el-menu-item index="1-2" @click="toTRT()">同仁堂</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="中医药文化旅游景点">
              <el-menu-item index="1-3">Option 3</el-menu-item>
              <el-menu-item index="1-3">Option 4</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="中草药养植基地">
              <el-menu-item index="1-3">Option 3</el-menu-item>
              <el-menu-item index="1-3">Option 4</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="中医药非物质文化遗产">
              <el-menu-item index="1-3">Option 3</el-menu-item>
              <el-menu-item index="1-3">Option 4</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="中医老字号">
              <el-menu-item index="1-3">Option 3</el-menu-item>
              <el-menu-item index="1-3">Option 4</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="中医药博物馆">
              <el-menu-item index="1-3">Option 3</el-menu-item>
              <el-menu-item index="1-3">Option 4</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>Option4</template>
              <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px"
            >
              <setting
              />
            </el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>Tom</span>
        </div>
      </el-header>

      <el-main>

        <BMAPPAGE ref="mychild"/>

      </el-main>
    </el-container>
  </el-container>


</template>


<script>
import "../../main";
import BMAPPAGE from "@/components/map/BMAPPAGE";
// import BMap from 'BMap';
// import router from "@/router";
// import BMapSymbolSHAPEPOINT from 'BMap_Symbol_SHAPE_POINT';

export default {
  name: "MapPage",
  data() {
    return {};
  },
  components: {
    BMAPPAGE
  },
  mounted() {
    this.$router.push({path: '/map/Bmap'});
  },
  methods: {

    toZZL() {
      this.$refs.mychild.toZZL();
    },

    toTRT(){
      this.$refs.mychild.toTRT();
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

<style scoped>

.layout-container-demo .el-header {
  position: relative;
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
  width: 240px;
  color: var(--el-text-color-primary);
  background: #fff !important;
  border-right: solid 1px #e6e6e6;
  box-sizing: border-box;
}

.layout-container-demo .el-menu {
  border-right: none;
}

.layout-container-demo .el-main {
  padding: 0;
}

.layout-container-demo .toolbar {
  position: absolute;
  display: inline-flex;
  align-items: center;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}
</style>