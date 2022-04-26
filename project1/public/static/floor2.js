function addLabel() {
    var labelArray =
        [{text: "入口", position: [-41.5, 3.1, -3], type: 1},{text: "出口", position: [61, 3.1, -60], type: 1},{text: "知识点4", position: [-11.8, 3.1, -57], type: 4},{text: "知识点1", position: [-28, 3.1, -17], type: 4},{text:"知识点2",position:[31.5,3.1,-21.1],type:3},
            {text:"知识点3",position:[-45,3.1,-40],type:3},{text:"知识点5",position:[-5,3.1,-10],type:3},{text:"知识点6",position:[2.9,3.1,-41],type:3},{text:"知识点7",position:[35,3.1,-57],type:3},{text:"知识点8",position:[55,3.1,-30],type:3}]

    for (var i = 0; i < labelArray.length; i++) {
        addLabelSprite(labelArray[i].text, 13, labelArray[i].position);
    }
}

function addFloor() {
    var floor = new loadFloor(floorInfo);
    floor.load();
    addLabel();
}

//楼层子项的分类类型
var ObjType = {
    CUBE: "cube",
    FLOOR: "floor",        //地板
    CELL: "cell",          //常用的小隔间
    WALL: "wall",          //墙体
    GLASS: "glass"         //玻璃
}

//颜色常量 包括填充颜色和边框颜色
var colorConst = [
    {fill: "#F8D3A5", stroke: "#F7A540"},          //橙色
    {fill: "#f7dee4", stroke: "#EEAEEE"},          //粉红色，
    {fill: "#bfdaf7", stroke: "#99ccff"},          //蓝色
    {fill: "#ece4d8", stroke: "#D2B48C"}           //土色
]


//(侧,俯(高度),正)

var floorInfo =
    {
        buildingId: "01", buildingName: "测试楼层", center: [120, 30, 6], buildingItem: [
            {type: "floor", name: "地板", points: [[-60, 0, 0], [-60, 0, -64], [70, 0, -64], [70, 0, 0], [-60, 0, 0]]},
            {type: "cell", name: "入口1", routePoint: 18, color: 2, points: [[-40, 0, 0], [-40, 0, -7], [-40, 0, 0]]},
            {type: "cell", name: "入口2", routePoint: 18, color: 2, points: [[-43, 0, 0], [-43, 0, -7], [-43, 0, 0]]},
            {type: "cell", name: "知识点1", routePoint: 18, color: 2, points: [[-35, 0, -10], [-35, 0, -25], [-20, 0, -25],[-20,0,-10],[-35,0,-10]]},
            {type: "cell", name: "知识点2", routePoint: 18, color: 1, points: [[33.5904,0,-4.55977],[33.5703,0,-9.66049],[21.0401,0,-10.0424],[20.397,0,-10.1908],[17.7126,0,-12.4053],[17.7126,0,-12.9753],[18.1169,0,-15.8062],
                    [19.8753,0,-16.4714],[21.5457,0,-17.4181],[23.0284,0,-18.6536],[24.1813,0,-19.8339],[25.5124,0,-22.0674],[26.2625,0,-24.1249],[26.5402,0,-26.5792],
                    [26.1559,0,-29.6453],[25.3476,0,-31.7985],[24.2564,0,-33.5222],[22.9781,0,-34.8456],[24.5934,0,-36.9841],[24.7737,0,-37.0918],[24.9337,0,-37.0918],
                    [25.3144,0,-36.8335],[29.4252,0,-33.2706],[29.5452,0,-33.2706],[29.709,0,-33.402],[31.7336,0,-37.5436],[31.8918,0,-37.6489],[32.0618,0,-37.6489],
                    [32.9187,0,-37.008],[37.6299,0,-32.3716],[38.217,0,-31.5132],[38.5582,0,-30.3314],[39.1816,0,-26.4512],[39.4705,0,-23.2944],[39.129,0,-16.1525],
                    [38.3104,0,-11.921],[37.1577,0,-8.12198],[36.1827,0,-5.61492],[35.5904,0,-4.55977],[34.7904,0,-4.55977],[33.5904,0,-4.55977]]},
            {type: "cell", name: "知识点3", routePoint: 18, color: 3, points: [[-55,0,-40],[-53,0,-46],[-51,0,-48],[-48,0,-49.53939201],[-45,0,-50],[-43,0,-49.79795897],[-40,0,-48.66025404],[-38,0,-47.14142843],[-35,0,-40],
                    [-38,0,-32.85857157],[-40,0,-31.33974596],[-43,0,-30.20204103],[-45,0,-30],[-48,0,-30.46060799],[-51,0,-32],[-53,0,-34],[-55,0,-40]]},
            {type: "cell",name: "知识点4", routePoint: 19, color: 2, points: [[-17, 0, -50], [-17, 0, -63.8047], [-5, 0, -63.8047], [-5, 0, -50], [-17, 0, -50]]
            },
            {type: "cell", name: "知识点5", routePoint: 18, color: 0, points: [[-15,0,-10],[-13,0,-16],[-11,0,-18],[-8,0,-19.53939201],[-5,0,-20],[-3,0,-19.79795897],[0,0,-18.66025404],[2,0,-17.14142843],[5,0,-10],
                    [2,0,-2.85857157],[0,0,-1.33974596],[-3,0,-0.20204103],[-5,0,0],[-8,0,-0.4606079858],[-11,0,-2],[-13,0,-4],[-15,0,-10]]},

            {type:"cell",name:"知识点6",color:1,routePoint:16,points:[[-1.89217,0,-36.9247],[-1.89217,0,-46.1447],[8.59783,0,-46.1447],[8.59783,0,-36.9247],[-1.89217,0,-36.9247]]},
            {type:"cell",name:"知识点7",color:3    ,routePoint:16,points:[[20,0,-64],[50,0,-64],[50,0,-50],[20,0,-50],[20,0,-64]]},
            {type:"cell",name:"知识点8",color:0,routePoint:16,points:[[45,0,-30],[47,0,-36],[49,0,-38],[51,0,-39.16515139],[53,0,-39.79795897],[55,0,-40],[57,0,-39.79795897],[59,0,-39.16515139],[61,0,-38],[63,0,-36],[65,0,-30],[63,0,-24],[61,0,-22],[59,0,-20.83484861],[57,0,-20.20204103],[55,0,-20],[53,0,-20.20204103],[51,0,-20.83484861],[49,0,-22],[47,0,-24],[45,0,-30]]},
            {type: "cell", name: "出口1", routePoint: 18, color: 2, points: [[60, 0, -57], [60, 0, -64], [60, 0, -57]]},
            {type: "cell", name: "出口2", routePoint: 18, color: 2, points: [[63, 0, -57], [63, 0, -64], [63, 0, -57]]},
        ]
    }

//初始化楼层数据
var loadFloor = function (floor) {
    if (!floorGroup) {
        floorGroup = new THREE.Object3D();
        scene.add(floorGroup);
    }
    this.container = floorGroup;            //存放楼层元素的容器
    this.data = floor;
}

//加载楼层
loadFloor.prototype.load = function () {
    var floor = this.data;
    var buildingId = floor.buildingId, buildingName = floor.buildingName;
    var buidlingItem = floor.buildingItem;
    for (var i = 0; i < buidlingItem.length; i++) {
        var item = buidlingItem[i];
        var type = item.type;
        var points = item.points;
        var name = item.name;
        var pntNum = item.routePoint;
        var colorIndex = item.color;
        switch (type) {
            case ObjType.CELL:
                this.addCell(points, 3, colorIndex, name, pntNum);
                break;
            case ObjType.FLOOR:
                this.addFloor(points, 0.5);
                break;
        }
    }
}

/*
*   创建地板
* */
loadFloor.prototype.addFloor = function (points, height) {
    var geometry = this.getGeometry(points, height);
    geometry.computeFaceNormals();          //计算法向量
    var material = new THREE.MeshLambertMaterial({color: "#EEE", side: THREE.DoubleSide});         //MeshLambertMaterial
    var mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    this.container.add(mesh);				//添加填充
}

/*
*   创建不规则的小室
* */
loadFloor.prototype.addCell = function (points, height, colorIndex, name, pntNum) {
    var geometry = this.getGeometry(points, height);
    geometry.computeFaceNormals();          //计算法向量
    var material = new THREE.MeshLambertMaterial({color: colorConst[colorIndex].fill, side: THREE.DoubleSide});         //受光照影响
    var mesh = new THREE.Mesh(geometry, material);
    mesh.cellName = name;
    if (pntNum != undefined) {
        mesh.pointNum = pntNum;
    }
    this.container.add(mesh);				//添加填充

    var lineMaterial = new THREE.LineBasicMaterial({color: colorConst[colorIndex].stroke});
    var lineGeometry = this.getBorderGeometry(points, height);
    var line = new THREE.Line(lineGeometry, lineMaterial);
    this.container.add(line);
}

//生成顶部的线
loadFloor.prototype.getBorderGeometry = function (points, height, color) {
    var geometry = new THREE.Geometry();
    var topPoints = [];
    for (var i = 0; i < points.length; i++) {
        var vertice = points[i];
        topPoints.push([vertice[0], vertice[1] + height, vertice[2]]);
    }
    for (var i = 0; i < topPoints.length; i++) {
        var topPoint = topPoints[i];
        geometry.vertices.push(new THREE.Vector3(topPoint[0], topPoint[1], topPoint[2]));
        if (i == topPoints.length - 1) {
            geometry.vertices.push(new THREE.Vector3(topPoints[0][0], topPoints[0][1], topPoints[0][2]));
        }
    }
    return geometry;
}

//根据传入的坐标点获取几何
loadFloor.prototype.getGeometry = function (points, height) {
    if (points.length < 3) {
        console.log("至少需要三个点来创建盒子");
        return;
    }
    var topPoints = [];
    for (var i = 0; i < points.length; i++) {
        var vertice = points[i];
        topPoints.push([vertice[0], vertice[1] + height, vertice[2]]);
    }
    var totalPoints = points.concat(topPoints);
    var vertices = [];
    for (var i = 0; i < totalPoints.length; i++) {
        vertices.push(new THREE.Vector3(totalPoints[i][0], totalPoints[i][1], totalPoints[i][2]))
    }
    var length = points.length;
    var faces = [];
    for (var j = 0; j < length; j++) {                      //侧面生成三角形
        if (j != length - 1) {
            faces.push(new THREE.Face3(j, j + 1, length + j + 1));
            faces.push(new THREE.Face3(length + j + 1, length + j, j));
        } else {
            faces.push(new THREE.Face3(j, 0, length));
            faces.push(new THREE.Face3(length, length + j, j));
        }
    }
    var data = [];
    for (var i = 0; i < length; i++) {
        data.push(points[i][0], points[i][2]);
    }
    var triangles = Earcut.triangulate(data);
    if (triangles && triangles.length != 0) {
        for (var i = 0; i < triangles.length; i++) {
            var tlength = triangles.length;
            if (i % 3 == 0 && i < tlength - 2) {
                faces.push(new THREE.Face3(triangles[i], triangles[i + 1], triangles[i + 2]));                            //底部的三角面
                faces.push(new THREE.Face3(triangles[i] + length, triangles[i + 1] + length, triangles[i + 2] + length));        //顶部的三角面
            }
        }
    }
    var geometry = new THREE.Geometry();
    geometry.vertices = vertices;
    geometry.faces = faces;
    return geometry;
}

//清除楼层
loadFloor.prototype.clear = function () {
    scene.remove(this.container);
    this.container = null;
    floorGroup = null;
}

//使用sprite制作标注
function addLabelSprite(message, fontsize, position) {
    var canvas = generateCanvas(message);
    makeCanvasSprite(canvas, position);
}

//根据文字生产canvas
function generateCanvas(text) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    context.font = '50px Microsoft YaHei';
    canvas.width = context.measureText(text).width;      //根据文字内容获取宽度
    canvas.height = 58; // fontsize * 1.5
    context.beginPath();
    context.font = '50px Microsoft YaHei';
    context.fillStyle = "#222";
    context.fillText(text, 0, 50);
    context.fill();
    context.stroke();
    return canvas;
}

//根据canvas图形制作sprite
function makeCanvasSprite(canvas, position) {
    var texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    var spriteMaterial = new THREE.SpriteMaterial({map: texture, depthWrite: false});
    var sprite = new THREE.Sprite(spriteMaterial);
    sprite.renderOrder = 0;
    sprite.center = new THREE.Vector2(0.5, 0);
    sprite.position.x = position[0];
    sprite.position.y = position[1];
    sprite.position.z = position[2];
    //sprite.visible = false;
    labelGroup.add(sprite);
}

function updateLabel() {
    var labelSprites = labelGroup ? labelGroup.children : [];
    for (var i = 0; i < labelSprites.length; i++) {
        var sprite = labelSprites[i];
        var v = new THREE.Vector3();
        var scale_factor = 3;
        sprite.scale.x = sprite.scale.y = v.subVectors(sprite.position, camera.position).length() / scale_factor;
    }
}

//更新文字sprite标注
function updateLabelSprite() {
    var sprites = labelGroup ? labelGroup.children : [];
    if (sprites.length == 0) return;
    for (var i = 0; i < sprites.length; i++) {
        var sprite = sprites[i];
        sprite.visible = true;
    }

    for (var i = 0; i < sprites.length; i++) {
        var compareSprite = sprites[i];
        var canvas = compareSprite.material.map.image;
        if (canvas) {
            var position = compareSprite.position;
            var scale = getPoiScale(position, {w: canvas.width, h: canvas.height});
            compareSprite.scale.set(scale[0] / 4, scale[1] / 4, 1.0);
            if (compareSprite.visible) {		//true
                for (var j = i + 1; j < sprites.length; j++) {
                    var sprite = sprites[j];
                    if (isPOILabelRect(compareSprite, sprite)) {
                        sprite.visible = false;
                    }
                }
            }
        }
    }
}

function getPoiScale(position, poiRect) {
    if (!position) return;
    var distance = camera.position.distanceTo(position);        //相机和标注点的距离
    var top = Math.tan(camera.fov / 2 * Math.PI / 180) * distance;    //camera.fov 相机的拍摄距离
    var meterPerPixel = 2 * top / window.innerHeight;
    var scaleX = poiRect.w * meterPerPixel;
    var scaleY = poiRect.h * meterPerPixel;
    return [scaleX, scaleY, 1.0];
}

//检测两个标注sprite是否碰撞
function isPOILabelRect(compareSprite, sprite) {
    var comparePosition = toScreenPos([compareSprite.position.x, compareSprite.position.y, compareSprite.position.z], camera);
    var spritePosition = toScreenPos([sprite.position.x, sprite.position.y, sprite.position.z], camera);

    var image1 = compareSprite.material.map.image;
    var image2 = sprite.material.map.image;
    var w1 = image1.width / 2;
    var h1 = image1.height / 2;
    var x1 = comparePosition.x - w1 / 2;
    var y1 = comparePosition.y - h1 / 2;

    var w2 = image2 ? image2.width / 2 : 0;
    var h2 = image2 ? image2.height / 2 : 0;

    var x2 = spritePosition.x - w2 / 2;         //点2左下角的xy点
    var y2 = spritePosition.y - h2 / 2;
    if (x1 >= x2 && x1 >= x2 + w2) {
        return false;
    } else if (x1 <= x2 && x1 + w1 <= x2) {
        return false;
    } else if (y1 >= y2 && y1 >= y2 + h2) {
        return false;
    } else if (y1 <= y2 && y1 + h1 <= y2) {
        return false;
    } else {
        return true;
    }
}

//three世界坐标转为屏幕坐标
function toScreenPos(position, camera) {
    var worldVector = new THREE.Vector3(
        position[0],
        position[1],
        position[2]
    );
    var standardVector = worldVector.project(camera);//世界坐标转标准设备坐标
    var a = window.innerWidth / 2;
    var b = window.innerHeight / 2;
    var x = Math.round(standardVector.x * a + a);//标准设备坐标转屏幕坐标
    var y = Math.round(-standardVector.y * b + b);//标准设备坐标转屏幕坐标
    return {
        x: x,
        y: y
    };
}