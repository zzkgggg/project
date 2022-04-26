<template>
  <div style="position:absolute;z-index:100;top:20px;right:20px;width:120px;border:1px solid #666;padding: 5px;background-color: #ccc;">
    开始节点：<input type="text" v-model="start" style="width:30px" value=""/>
    结束节点：<input type="text" v-model="end" style="width:30px" value=""/>
    <input type="button" value="开始导航" onclick="getRoute()"/>
    <div>{{routeresult}}</div>
  </div>

  <iframe src="url"></iframe>
</template>

<script>
import * as THREE from 'three'
import basic from '../../three/basic'
import {addFloor} from '../../three/floor'
import {searchPath,matrix,points} from "@/three/route";
import TWEEN from '../../three/tween.min'
import {Earcut} from '../../three/Earcut'

let base = null;
var controls;
var camera, scene, renderer;

var meshline;
var routeArrow;

var floorGroup;     //楼层元素组
var labelGroup;     //楼层标注组
var arrowGroup;     //箭头组


base = new basic();

export default {
  name: "MapcustomPage",
data(){
    return{
      url:''
    }
},

  mounted() {
    this.init();
  },

  methods: {
    init() {
      base.initScene();
      base.initRender();
      base.initCamera();
      base.initControl();
      base.initLight();
      base.initGroup();
      addFloor();
    },

    initGroup() {
      floorGroup = new THREE.Object3D();
      scene.add(floorGroup);

      labelGroup = new THREE.Object3D();
      scene.add(labelGroup);

      arrowGroup = new THREE.Object3D();
      scene.add(arrowGroup);
    },



    getRoute() {
      var start = Number(this.start);
      let end = Number(this.end);
      var result = searchPath(start, end, matrix);
      if (result) {
        var distance = result.distance;
        var path = result.path;
        if (path.length > 0) {
          var coords = [];
          for (var i = 0; i < path.length; i++) {
            var position = points[path[i]].position;
            coords.push([position[0], position[2]]);
          }
          this.addMeshLine(coords);
          this.addRouteArrow(coords);
        }
        this.routeresult = "从节点" + start + "到节点" + end + ",最短距离为" + distance + ",经过的节点为:" + path.join(",");
      }
    },

    addMeshLine(lineCoords) {
      if (meshline) {
        scene.remove(meshline);
      }
      let detailCoords = new this.lineBuffer({coords: lineCoords, radius: 0.5}).getBufferCoords();
      var vertices = [], faces = [], data = [];
      for (var i = 0; i < detailCoords.length; i++) {
        vertices.push(new THREE.Vector3(detailCoords[i][0], 1, detailCoords[i][1]));
        data.push(detailCoords[i][0], detailCoords[i][1]);
      }
      var triangles = Earcut.triangulate(data);
      if (triangles && triangles.length != 0) {
        for (i = 0; i < triangles.length; i++) {
          var tlength = triangles.length;
          if (i % 3 == 0 && i < tlength - 2) {
            faces.push(new THREE.Face3(triangles[i], triangles[i + 1], triangles[i + 2]));                            //底部的三角面
          }
        }
      }
      var geometry = new THREE.Geometry();
      geometry.vertices = vertices;
      geometry.faces = faces;
      let material = new THREE.MeshBasicMaterial({color: 0x008800, side: THREE.DoubleSide});
      meshline = new THREE.Mesh(geometry, material);
      scene.add(meshline);
    },


    addRouteArrow(coords) {
      if (routeArrow) {
        scene.remove(routeArrow);
      }
      var texture = new THREE.TextureLoader().load("images/pointer.png");
      var geometry = new THREE.PlaneGeometry(4, 4);
      var material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide,
        transparent: true, depthTest: false
      });
      routeArrow = new THREE.Mesh(geometry, material);
      routeArrow.position.x = coords[0][0];
      routeArrow.position.y = 3.2;
      routeArrow.position.z = coords[0][1];
      routeArrow.rotation.x = Math.PI / 2;
      scene.add(routeArrow);

      this.startAnimation(coords, 0);
    },

    /**
     * 开始动画
     * @param {String} type 动画类型，分为人物旋转动画rotate和人物移动动画run
     * @param {String} index 到达的索引号
     * */
    startAnimation(pointArray, index) {
      if (!pointArray[index + 1]) {
        return;
      }
      var curPoint = pointArray[index];
      var nextPoint = pointArray[index + 1];
      new TWEEN.Tween(routeArrow.position).to({			//动画过渡 y 1.8
        x: nextPoint[0],
        y: 1.1,
        z: nextPoint[1]
      }, 3000).onUpdate(function () {
        var rotation = -Math.atan2(nextPoint[0] - curPoint[0], nextPoint[1] - curPoint[1]);
        routeArrow.rotation.z = rotation;         //因为模型本身角度原因，需要调整+Math.PI/2
      }).onComplete(function () {
        index++;
        this.startAnimation(pointArray, index);
      }).start();
    },

    onDocumentMouseClick(event) {
      event.preventDefault();
      var vector = new THREE.Vector3();//三维坐标对象
      vector.set(
          (event.clientX / window.innerWidth) * 2 - 1,
          -(event.clientY / window.innerHeight) * 2 + 1,
          0.5);
      vector.unproject(camera);
      var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
      var intersects = raycaster.intersectObjects((floorGroup instanceof THREE.Object3D) ? floorGroup.children : []);
      if (intersects.length > 0 && intersects[0].object instanceof THREE.Mesh) {      //有时先选到线,选不中
        var mesh = intersects[0].object;
        var pointNum = mesh.pointNum;
        if (pointNum != undefined) {
          var start = document.getElementById("startIndex").value;
          let end = document.getElementById("endIndex").value;
          if (start != "" && end != "") {
            document.getElementById("startIndex").value = pointNum;
            document.getElementById("endIndex").value = "";
          } else {
            if (start == "") {
              document.getElementById("startIndex").value = pointNum;
            } else {
              document.getElementById("endIndex").value = pointNum;
            }
          }
        }
      }
    },

    animate() {
      requestAnimationFrame(this.animate);
      controls.update();
      renderer.render(scene, camera);
      this.updateLabelSprite();
      TWEEN.update();
    }
  }
}
</script>

<style scoped>

</style>