/**
 * 保存所有节点以及名称，也可包含其他信息
 * */
var points = {
    0:{name:"节点0",position:[-10.89,0.6,-21.11]},
    1:{name:"节点1",position:[1.45,0.6,-21.47]},
    2:{name:"节点2",position:[1.39,0.6,-15.38]},
    3:{name:"节点3",position:[11.59,0.6,-15.25]},
    4:{name:"节点4",position:[0.92,0.6,-25.03]},
    5:{name:"节点5",position:[10.88,0.6,-24.98]},
    6:{name:"节点6",position:[17.68,0.6,-14.62]},
    7:{name:"节点7",position:[14.11,0.6,-9.71]},
    8:{name:"节点8",position:[24.87,0.6,-18.04]},
    9:{name:"节点9",position:[30.06,0.6,-25.16]},
    10:{name:"节点10",position:[25.47,0.6,-35.77]},
    11:{name:"节点11",position:[19.44,0.6,-37.08]},
    12:{name:"节点12",position:[37.24,0.6,-22.84]},
    13:{name:"节点13",position:[15.98,0.6,-48.0]},
    14:{name:"节点14",position:[11.80,0.6,-33.81]},
    15:{name:"节点15",position:[2.06,0.6,-33.94]},
    16:{name:"节点16",position:[2.63,0.6,-41.60]},
    17:{name:"节点17",position:[-13.52,0.6,-40.64]},
    18:{name:"节点18",position:[-29.23,0.6,-40.49]},
    19:{name:"节点19",position:[-11.59,0.6,-56.85]},
    20:{name:"节点20",position:[-13.18,0.6,-34.80]}
}

function getLength(src,des){
    var srcPosition = points[src].position;
    var desPosition = points[des].position;
    return Math.sqrt((srcPosition[0]-desPosition[0])*(srcPosition[0]-desPosition[0]) + (srcPosition[1]-desPosition[1])*(srcPosition[1]-desPosition[1]) + (srcPosition[2]-desPosition[2])*(srcPosition[2]-desPosition[2]))
}
/**
 * 节点的数量
 * */
var pointnum = 21;

/**
 *  此项为所有节点的连通性，这里测试数据中区分了道路的双向
 *  如果线路不区分双向，则同一条道路的两个方向数据可以合并为一条，比如{src:0,des:1}与{src:1,des:0}可合并为{src:0,des:1}
 * */
var routes = [
    {src:0,des:1,cost:12.345,extra:"0-1"},
    {src:1,des:0,cost:12.345,extra:"1-0"},
    {src:0,des:20,cost:13.880,extra:"0-20"},
    {src:20,des:0,cost:13.880,extra:"20-0"},
    {src:1,des:2,cost:6.090,extra:"1-2"},
    {src:2,des:1,cost:6.090,extra:"2-1"},
    {src:1,des:4,cost:3.599,extra:"1-4"},
    {src:4,des:1,cost:3.599,extra:"4-1"},
    {src:2,des:3,cost:10.201,extra:"2-3"},
    {src:3,des:2,cost:10.201,extra:"3-2"},
    {src:3,des:5,cost:9.756,extra:"3-5"},
    {src:5,des:3,cost:9.756,extra:"5-3"},
    {src:3,des:6,cost:6.122,extra:"3-6"},
    {src:6,des:3,cost:6.122,extra:"6-3"},
    {src:4,des:5,cost:9.960,extra:"4-5"},
    {src:5,des:4,cost:9.960,extra:"5-4"},
    {src:4,des:15,cost:8.983,extra:"4-15"},
    {src:15,des:4,cost:8.983,extra:"15-4"},
    {src:5,des:14,cost:8.878,extra:"5-14"},
    {src:14,des:5,cost:8.878,extra:"14-5"},
    {src:6,des:7,cost:6.071,extra:"6-7"},
    {src:7,des:6,cost:6.071,extra:"7-6"},
    {src:6,des:8,cost:7.962,extra:"6-8"},
    {src:8,des:6,cost:7.962,extra:"8-6"},
    {src:8,des:9,cost:8.811,extra:"8-9"},
    {src:9,des:8,cost:8.811,extra:"9-8"},
    {src:9,des:10,cost:11.560,extra:"9-10"},
    {src:10,des:9,cost:11.560,extra:"10-9"},
    {src:9,des:12,cost:7.546,extra:"9-12"},
    {src:12,des:9,cost:7.546,extra:"12-9"},
    {src:10,des:11,cost:6.171,extra:"10-11"},
    {src:11,des:10,cost:6.171,extra:"11-10"},
    {src:11,des:13,cost:11.455,extra:"11-13"},
    {src:13,des:11,cost:11.455,extra:"13-11"},
    {src:11,des:14,cost:8.310,extra:"11-14"},
    {src:14,des:11,cost:8.310,extra:"14-11"},
    {src:14,des:15,cost:9.741,extra:"14-15"},
    {src:15,des:14,cost:9.741,extra:"15-14"},
    {src:15,des:16,cost:7.681,extra:"15-16"},
    {src:16,des:15,cost:7.681,extra:"16-15"},
    {src:15,des:20,cost:15.264,extra:"15-20"},
    {src:20,des:15,cost:15.264,extra:"20-15"},
    {src:17,des:18,cost:15.711,extra:"17-18"},
    {src:18,des:17,cost:15.711,extra:"18-17"},
    {src:17,des:19,cost:16.324,extra:"17-19"},
    {src:19,des:17,cost:16.324,extra:"19-17"},
    {src:17,des:20,cost:5.850,extra:"17-20"},
    {src:20,des:17,cost:5.850,extra:"20-17"}
]

/**
 * 邻接矩阵 使用遍历方法生成
 * 值为顶点与顶点之间边的权值，0表示无自环，一个大数表示无边(比如10000)
 * */
var matrix = [];
const MAX_INTEGER = Infinity;//没有边或者有向图中无法到达
const MIN_INTEGER = 0;//没有自环

initSingleDirectionRouteMatrix();
//initDoubleDirectionRouteMatrix();
/**
 * 初始化单向路线的邻接矩阵（不区分正反）
 */
function initSingleDirectionRouteMatrix(){
    for(var i=0;i<pointnum;i++){
        let row = new Array(pointnum).fill(MAX_INTEGER);
        row[i] = MIN_INTEGER;
        matrix.push(row);
    }
    for(i=0;i<routes.length;i++){
        var route = routes[i];
        var src = route.src,des = route.des;
        matrix[src][des] = route.cost;
    }
}

/**
 * 初始化双向路线的邻接矩阵（区分正反）
 */
function initDoubleDirectionRouteMatrix(){
    for(var i=0;i<pointnum;i++){
        let row = new Array(pointnum).fill(MAX_INTEGER);
        row[i] = MIN_INTEGER;
        matrix.push(row);
    }
    for(var i=0;i<routes.length;i++){
        var route = routes[i];
        var src = route.src,des = route.des;
        matrix[src][des] = route.cost;
        matrix[des][src] = route.cost;
    }
}

/**
 * @param {number} v 起点索引
 * @param {number} d 终点索引
 * @param {Array} adjMatrix 邻接矩阵
 */
function searchPath(v, d, adjMatrix) {
    var graph = Dijkstra(adjMatrix, v),
        path = graph.path,
        dist = graph.dist;

    var prev = path[d],
        queue = [],
        str = '';

    queue.push(d);
    while(prev && prev != v) {
        queue.push(prev);
        prev = path[prev];
    }
    queue.push(v);

    for (var j = queue.length - 1; j >= 0; j--) {
        str +=queue.pop() + '->';
    }
    console.log('path',str);
    var arr=str.split('->');
    if(str.endsWith('->')){
        arr.pop();
    }
    var rarr=[];//字符串数组转int数组
    for(var i=0;i<arr.length;i++){
        rarr.push(parseInt(arr[i]));
    }
    return {distance:dist[d],path:rarr}
}

/**
 * @param {Array} adjMatrix 邻接矩阵
 * @param {number} sourceV 源点的索引
 */

function Dijkstra(adjMatrix,sourceV) {
    var set = [],
        path = [],

        dist = [],
    distCopy = [],
        vertexNum = adjMatrix.length;

    var temp, u,
        count = 0;

    for (var i = 0; i < vertexNum; i++) {
        distCopy[i] = dist[i] = Infinity;
        set[i] = false;
    }
    distCopy[sourceV] = dist[sourceV] = 0;

    while (count < vertexNum) {
        u = distCopy.indexOf(Math.min.apply(Math, distCopy));//取出数组中的最小值
        set[u] = true;
        distCopy[u] = Infinity;

        for ( i = 0; i < vertexNum; i++) {
            if (!set[i] && ((temp = dist[u] + adjMatrix[u][i]) < dist[i])) {
                distCopy[i] = dist[i] = temp;
                path[i] = u;
            }
        }
        count++;
    }

    return {
        path: path,
        dist: dist
    };
}

/**
 * 添加路径线
 * */
function addRouteLine(){
    var lineMaterial = new THREE.LineBasicMaterial({color:0xffff00});
    for(var key in routes){
        var route = routes[key];
        var src = points[route.src],des = points[route.des];
        var srcPosition = new THREE.Vector3(src.position[0],src.position[1],src.position[2]);
        var desPosition = new THREE.Vector3(des.position[0],des.position[1],des.position[2]);
        let lineGeom = new THREE.Geometry();
        lineGeom.vertices = [srcPosition,desPosition];
        let line = new THREE.Line(lineGeom,lineMaterial)
        scene.add(line);
    }
}