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
    // map.setMapStyleV2( {styleId: '799c798611701f0a59af1ecf46e46425'});
    map.centerAndZoom(new BMap.Point(113.330934, 23.113401), 20);
    map.enableScrollWheelZoom(true);


    var markerArr =
        [
          {title: "名称：广州火车站", point: "116.3964,39.9093"},
          {title: "名称：广州塔（赤岗塔）", point: "113.330934,23.113401", address: "广东省广州市广州塔（赤岗塔） ", tel: "18500000000"},
          {title: "名称：广州动物园", point: "113.312213,23.147267", address: "广东省广州市广州动物园", tel: "18500000000"},
          {title: "名称：天河公园", point: "113.372867,23.134274", address: "广东省广州市天河公园", tel: "18500000000"}
        ];
    alert(typeof (markerArr));
    var point = new Array(); //存放标注点经纬信息的数组
    var marker = new Array(); //存放标注点对象的数组
    var info = new Array(); //存放提示信息窗口对象的数组
    for (var i = 0; i < markerArr.length; i++) {
      var p0 = markerArr[i].point.split(",")[0]; //
      var p1 = markerArr[i].point.split(",")[1]; //按照原数组的point格式将地图点坐标的经纬度分别提出来
      point[i] = new window.BMap.Point(p0, p1); //循环生成新的地图点
      marker[i] = new window.BMap.Marker(point[i]); //按照地图点坐标生成标记
      map.addOverlay(marker[i]);
      // marker[i].setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
      // var label = new window.BMap.Label(markerArr[i].title, {offset: new window.BMap.Size(20, -10)});
      // marker[i].setLabel(label);
      info[i] = new window.BMap.InfoWindow("<p style=’font-size:12px;lineheight:1.8em;’>" + markerArr[i].title + "</br>地址：" + markerArr[i].address + "</br> 电话：" + markerArr[i].tel + "</br></p>"); // 创建信息窗口对象
    }
    marker[0].addEventListener("mouseover", function () {
      this.openInfoWindow(info[0]);
    });
    marker[1].addEventListener("mouseover", function () {
      this.openInfoWindow(info[1]);
    });
    marker[2].addEventListener("mouseover", function () {
      this.openInfoWindow(info[2]);
    });

    // var point1 = new BMap.Point(116.404, 39.915);
    // // map.centerAndZoom(point, 12)
    // var marker1 = new BMap.Marker(point1)  // 创建标注
    // map.addOverlay(marker1)              // 将标注添加到地图中
    // var opts = {
    //   width: 250,     // 信息窗口宽度
    //   height: 100,    // 信息窗口高度
    //   title: "Hello"  // 信息窗口标题
    // }
    // var infoWindow = new BMap.InfoWindow("World", opts);  // 创建信息窗口对象
    // map.openInfoWindow(infoWindow, map.getCenter());        // 打开信息窗口
    // map.setCurrentCity("成都"); // 设置地图显示的城市 此项是必须设置的

  },
  methods:{
    toGZT() {
      var map = new BMap.Map("map");
      // 初始化地图,设置中心点坐标和地图级别
      // map.setMapStyleV2( {styleId: '799c798611701f0a59af1ecf46e46425'});
      map.centerAndZoom(new BMap.Point(113.330934, 23.113401), 20);
      map.enableScrollWheelZoom(true);
      // var marker =
      //     [
      //       {title: "名称：广州塔（赤岗塔）", point: "113.330934,23.113401", address: "广东省广州市广州塔（赤岗塔） ", tel: "18500000000"},
      //     ];
      var point1=new BMap.Point(113.330934,23.113401);
      var marker1=new window.BMap.Marker(point1);
      map.addOverlay(marker1);
      var opts = {
        width: 250,     // 信息窗口宽度
        height: 100,    // 信息窗口高度
        title: "Hello"  // 信息窗口标题
      }
      marker1.addEventListener("mouseover", function () {
        this.openInfoWindow(opts);
      })
    }
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