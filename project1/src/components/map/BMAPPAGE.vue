<template>

  <div class="map">
    <div style="width: 100%; height: 100%" id="map" class="allmap"></div>
  </div>
</template>

<script>
import BMap from 'BMap';
// import BMAP_ANIMATION_BOUNCE from 'BMAP_ANIMATION_BOUNCE';

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
    map.centerAndZoom(new BMap.Point(116.403414, 39.924091), 17);
    map.enableScrollWheelZoom(true);


    // var markerArr =
    //     [
    //       {title: "名称：广州塔（赤岗塔）", point: "113.330934,23.113401", address: "广东省广州市广州塔（赤岗塔） ", tel: "18500000000"},
    //       {title: "名称：广州动物园", point: "113.312213,23.147267", address: "广东省广州市广州动物园", tel: "18500000000"},
    //       {title: "名称：天河公园", point: "113.372867,23.134274", address: "广东省广州市天河公园", tel: "18500000000"}
    //     ];
    // var point = new Array(); //存放标注点经纬信息的数组
    // var marker = new Array(); //存放标注点对象的数组
    // var info = new Array(); //存放提示信息窗口对象的数组
    // for (var i = 0; i < markerArr.length; i++) {
    //   var p0 = markerArr[i].point.split(",")[0]; //
    //   var p1 = markerArr[i].point.split(",")[1]; //按照原数组的point格式将地图点坐标的经纬度分别提出来
    //   point[i] = new window.BMap.Point(p0, p1); //循环生成新的地图点
    //   marker[i] = new window.BMap.Marker(point[i]); //按照地图点坐标生成标记
    //   map.addOverlay(marker[i]);
    //   // marker[i].setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    //   // var label = new window.BMap.Label(markerArr[i].title, {offset: new window.BMap.Size(20, -10)});
    //   // marker[i].setLabel(label);
    //   info[i] = new window.BMap.InfoWindow("<p style=’font-size:12px;lineheight:1.8em;’>" + markerArr[i].title + "</br>地址：" + markerArr[i].address + "</br> 电话：" + markerArr[i].tel + "</br></p>"); // 创建信息窗口对象
    // }
    // marker[0].addEventListener("mouseover", function () {
    //   this.openInfoWindow(info[0]);
    // });
    // marker[1].addEventListener("mouseover", function () {
    //   this.openInfoWindow(info[1]);
    // });
    // marker[2].addEventListener("mouseover", function () {
    //   this.openInfoWindow(info[2]);
    // });

  },
  methods: {
    toZZL(){
      var map = new BMap.Map("map");
      var point = new BMap.Point(107.906462, 36.012243);
      // 初始化地图,设置中心点坐标和地图级别
      // map.setMapStyleV2( {styleId: '799c798611701f0a59af1ecf46e46425'});
      map.centerAndZoom(new BMap.Point(107.906462, 36.012243), 17);
      map.enableScrollWheelZoom(true);
      var marker = new window.BMap.Marker(point);
      map.addOverlay(marker);
      // 设置框样式
      var opts = {
        width: 2500,     // 信息窗口宽度
        height: 200,    // 信息窗口高度
        title: "周祖陵森林公园"  // 信息窗口标题
      }
      // 框内容

      var info=new window.BMap.InfoWindow(
          "<p style='font-size:12px;lineheight:1.8em;'>位于周祖陵山下有一尊岐伯像，岐伯是中国上古时代最著名的医生，同时也是中医的开山鼻祖。其与黄帝合著的医术《皇帝内经》，开辟了中医著述的先河。<br>岐伯创立了中医学基本理论，《黄帝内经》以《易学》哲学思想统领全书，阐明了阴阳五运六气说和脏腑经络说，包括了人的呼吸、循环、消化、神经系统及其相互关系。它是研究人的生理学、病理学、诊断学、药物学以及治疗原则最经典的医学典籍，其内容涉及天文、历法、气象、地理、生物、农艺、哲学等方面的知识，是中国首部内容丰富，影响深远的中医典籍。其讲究调和脏腑气血、渗于药理、调和五味，传承了儒家的藏香学说的君臣佐使、四气五味、升降浮沉价值观。</p>"

          ,opts
      );
      marker.addEventListener("mouseover", function () {
        this.openInfoWindow(info);
      })

    },

    toTRT(){
      var map = new BMap.Map("map");
      var point = new BMap.Point(116.422965, 39.902536);
      // 初始化地图,设置中心点坐标和地图级别
      // map.setMapStyleV2( {styleId: '799c798611701f0a59af1ecf46e46425'});
      map.centerAndZoom(new BMap.Point(116.422965, 39.902536), 17);
      map.enableScrollWheelZoom(true);
      var marker = new window.BMap.Marker(point);
      map.addOverlay(marker);
      // 设置框样式
      var opts = {
        width: 2500,     // 信息窗口宽度
        height: 200,    // 信息窗口高度
        title: "同仁堂"  // 信息窗口标题
      }
      // 框内容

      var info=new window.BMap.InfoWindow(
          "<p style='font-size:12px;lineheight:1.8em;'>北京同仁堂，是全国中药行业著名的老字号。创建于1669年（清康熙八年），自1723年开始供奉御药，历经八代皇帝188年，其产品以配方独特、选料上乘、工艺精湛、疗效显著而享誉海内外。<br>同仁堂品牌创始人乐显扬认为 “可以养生、可以济人者, 惟医药为最”，并把“同仁”二字命名为堂名，认为“公而雅”。<br>《周易》“同人卦”天火同仁，象征同类会聚、齐心无私、协力经营共同事业，因此卦辞曰“亨”，即通达顺利；汉黄石公《素书 • 安礼》“同仁”一词，指同行仁德者；韩愈《清边郡王杨燕奇碑文》用“同仁”一词，取一视同仁之意。乐显扬融合上述三意，命为堂名，既包含了儒家推崇的“天下为公”的思想，又蕴含了《尔雅》关于“义”、“正”的道德要求。<br></p>"

          ,opts
      );
      marker.addEventListener("mouseover", function () {
        this.openInfoWindow(info);
      })

    },


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
      var point1 = new BMap.Point(113.330934, 23.113401);
      var marker1 = new window.BMap.Marker(point1);
      map.addOverlay(marker1);
      // 设置框样式
      var opts = {
        width: 2500,     // 信息窗口宽度
        height: 100,    // 信息窗口高度
        title: "Hello"  // 信息窗口标题
      }
      // 框内容
      var info=new window.BMap.InfoWindow("<p style='font-size:12px;lineheight:1.8em;'>123123</p>",opts);
      marker1.addEventListener("mouseover", function () {
        this.openInfoWindow(info);
      })
    }
  }

}

</script>

<style scoped rc="../../css/MapPage.css">


</style>