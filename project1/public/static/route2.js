/**
 * 保存所有节点以及名称，也可包含其他信息
 * */
var points = {
    0: {name: "节点0", position: [-41.5, 0.6, -3]},//入口1
    1: {name: "节点1", position: [-41.4, 0.6, -3]},//入口2
    2: {name: "节点2", position: [-41.3, 0.6, -3]},//入口3
    3: {name: "节点3", position: [61, 0.6, -60]},//出口
    4: {name: "节点4", position: [-17, 0.6, -4]},//15mid
    5: {name: "节点5", position: [-17, 0.6, -28]},//46mid
    6: {name: "节点6", position: [-37, 0.6, -27.9]},//知识点13中间
    7: {name: "节点7", position: [13.9, 0.6, -43]},//67mid
    8: {name: "节点8", position: [15, 0.6, -28.3]},//6右下
    9: {name: "节点9", position: [61, 0.6, -60]},//出口1
    10: {name: "节点10", position: [-18, 0.6, -7]},//知识点5左下
    11: {name: "节点11", position: [-37, 0.6, -28]},//知识点13中间
    12: {name: "节点12", position: [-11, 0.6, -33]},//知识点6左下
    13: {name: "节点13", position: [-2, 0.6, -50]},//知识点46中
    14: {name: "节点14", position: [14, 0.6, -48]},//67mid
    15: {name: "节点15", position: [53, 0.6, -45]},//78mid
    16:{name:"节点16",position:[15,0.6,-28]},//6右下
    17:{name:"节点17",position:[-15,0.6,-46]},
    18:{name:"节点18",position:[-29.23,0.6,-40.49]},
    19:{name:"节点19",position:[-11.59,0.6,-56.85]},
    20:{name:"节点20",position:[-13.18,0.6,-34.80]}
}


function getLength(src, des) {
    var srcPosition = points[src].position;
    var desPosition = points[des].position;
    return Math.sqrt((srcPosition[0] - desPosition[0]) * (srcPosition[0] - desPosition[0]) + (srcPosition[1] - desPosition[1]) * (srcPosition[1] - desPosition[1]) + (srcPosition[2] - desPosition[2]) * (srcPosition[2] - desPosition[2]))
}

var
    /**
     * 节点的数量
     * */
    pointnum = 21
/**
 *  此项为所有节点的连通性，这里测试数据中区分了道路的双向
 *  如果线路不区分双向，则同一条道路的两个方向数据可以合并为一条，比如{src:0,des:1}与{src:1,des:0}可合并为{src:0,des:1}
 * */





var routes = [
    //route1
    {src: 0, des: 11, cost: 12.345, extra: "0-11"},
    {src: 11, des: 12, cost: 9, extra: "11-12"},
    {src: 12, des: 13, cost: 12.345, extra: "12-13"},
    {src: 13, des: 14, cost: 11, extra: "13-14"},
    {src: 14, des: 15, cost: 11, extra: "14-15"},
    {src: 15, des: 3, cost: 6, extra: "16-9"},
    //route2
    {src: 1, des: 6, cost: 6, extra: "1-11"},
    {src: 6, des: 16, cost: 6, extra: "16-9"},
    {src: 16, des: 7, cost: 6, extra: "16-9"},
    {src: 7, des: 15, cost: 6, extra: "16-9"},
    //route3
    {src: 2, des: 4, cost: 6, extra: "16-9"},
    {src: 4, des: 5, cost: 6, extra: "16-9"},
    {src: 5, des: 8, cost: 6, extra: "16-9"},
    {src: 8, des: 7, cost: 6, extra: "16-9"},
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
function initSingleDirectionRouteMatrix() {
    for (var i = 0; i < pointnum; i++) {
        let row = new Array(pointnum).fill(MAX_INTEGER);
        row[i] = MIN_INTEGER;
        matrix.push(row);
    }
    for (var i = 0; i < routes.length; i++) {
        var route = routes[i];
        var src = route.src, des = route.des;
        matrix[src][des] = route.cost;
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
    while (prev && prev != v) {
        queue.push(prev);
        prev = path[prev];
    }
    queue.push(v);

    for (var j = queue.length - 1; j >= 0; j--) {
        str += queue.pop() + '->';
    }
    console.log('path', str);
    var arr = str.split('->');
    if (str.endsWith('->')) {
        arr.pop();
    }
    var rarr = [];//字符串数组转int数组
    for (var i = 0; i < arr.length; i++) {
        rarr.push(parseInt(arr[i]));
    }
    return {distance: dist[d], path: rarr}
}

/**
 * @param {Array} adjMatrix 邻接矩阵
 * @param {number} sourceV 源点的索引
 */

function Dijkstra(adjMatrix, sourceV) {
    var set = [],
        path = [],

        dist = [];
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

        for (var i = 0; i < vertexNum; i++) {
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
function addRouteLine() {
    var lineMaterial = new THREE.LineBasicMaterial({color: 0xffff00});
    for (var key in routes) {
        var route = routes[key];
        var src = points[route.src], des = points[route.des];
        var srcPosition = new THREE.Vector3(src.position[0], src.position[1], src.position[2]);
        var desPosition = new THREE.Vector3(des.position[0], des.position[1], des.position[2]);
        let lineGeom = new THREE.Geometry();
        lineGeom.vertices = [srcPosition, desPosition];
        let line = new THREE.Line(lineGeom, lineMaterial)
        scene.add(line);
    }
}