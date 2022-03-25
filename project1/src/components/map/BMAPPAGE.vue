<template>

  <div class="map">
    <div style="width: 100%; height: 100%" id="map" class="allmap"></div>
  </div>
</template>

<script>
import BMap from 'BMap';

export default {
  name: "BMAPPAGE",

  data() {
    return {};
  },
  //加载地图
  mounted() {
    // 创建Map实例
    var map = new BMap.Map("map");
    // 初始化地图,设置中心点坐标和地图级别
    map.centerAndZoom(new BMap.Point(104.07258, 30.550701), 20);
    // map.centerAndZoom：第一个参数可以是根据之前创建好的一个点为中心，创建出地图，也可以根据城市地区的中文名称创建地图。第二个参数是地图缩放级别，最大为19，最小为0
    map.addControl(//添加地图类型控件
        new BMap.MapTypeControl({
          // mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP],
        })
    );
    map.setCurrentCity("成都"); // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);
  }
}

</script>

<style scoped>
.map {
  width: 2000px;
  height: 1000px;
  margin-left: 0px;
}

#allmap {

  width: 100%;
  height: 100%;
}
</style>