//进行宽线绘制

let lineBuffer = class {
    constructor(options){
        this.coords = options.coords;
        this.radius = options.radius;
        this.init();
    }

    /**
     * 初始化
     * */
    init(){
       this.leftBufferCoords = this.getLeftBufferEdgeCoords(this.coords, this.radius);
       this.coords = [...this.coords].reverse();
       this.rightBufferCoords = this.getLeftBufferEdgeCoords(this.coords, this.radius);
    }

    /**
     * 获取合并后的坐标
     * */
    getBufferCoords(){
        return this.leftBufferCoords.concat(this.rightBufferCoords);
    }

    /**
     * 获取一侧缓冲坐标
     * */
    getLeftBufferEdgeCoords(coords, radius) {
        // 参数处理
        if (coords.length < 1){
            return;
        }
        // 计算时所需变量
        let alpha = 0.0;// 向量绕起始点沿顺时针方向旋转到X轴正半轴所扫过的角度
        let delta = 0.0;// 前后线段所形成的向量之间的夹角
        let l = 0.0;// 前后线段所形成的向量的叉积

        let startRadian = 0.0, endRadian = 0.0;
        let beta = 0.0, x = 0.0, y = 0.0;

        const detailCoords = [];
        // 第一节点的缓冲区,在此程序中只生成2点
        {
            alpha = this.getQuadrantAngle(coords[0], coords[1]);
            if(Math.abs(alpha) == 0){
                startRadian = alpha;
                endRadian = alpha + Math.PI / 2;
            }else{
                startRadian = alpha + Math.PI;
                endRadian = alpha + (3 * Math.PI) / 2;
            }
            detailCoords.push(...this.getBufferCoordsByRadian(coords[0], startRadian, endRadian, radius));
        }

        // 中间节点
        for (let i = 1; i < coords.length - 1; i++) {
            alpha = this.getQuadrantAngle(coords[i], coords[i + 1]);        //当前后一个向量角度
            delta = this.getIncludedAngel(coords[i - 1], coords[i], coords[i + 1]);     //前后两个向量夹角
            l = this.getVectorProduct(coords[i - 1], coords[i], coords[i + 1]);     //判断前后两个向量是否共线
            if(Math.abs(l)<0.0000000000001 || l<0){
                if(Math.abs(l)<0.0000000000001){        //三点共线
                        if(Math.abs(alpha) == 0){
                            let val;
                            if(coords[i+1][0] > coords[i][0]){
                                val = - radius;
                            }else{
                                val = radius;
                            }
                            x = coords[i][0];
                            y = coords[i][1] + val;
                            detailCoords.push([x,y]);
                        }else{
                            beta = alpha - Math.PI / 2;
                            x = coords[i][0] + radius * Math.cos(beta);
                            y = coords[i][1] + radius * Math.sin(beta);
                            detailCoords.push([x,y]);
                        }
                }else{
                    beta = alpha - (Math.PI - delta) / 2;           //法向量角度
                    x = coords[i][0] + radius * Math.cos(beta);
                    y = coords[i][1] + radius * Math.sin(beta);
                    detailCoords.push([x,y]);
                }
            }else{
                startRadian = alpha + (3 * Math.PI) / 2 - delta;
                endRadian = alpha + (3 * Math.PI) / 2;
                detailCoords.push(...this.getBufferCoordsByRadian(coords[i], startRadian, endRadian, radius))
            }
        }
        // 最后一个点，在此程序中只生成2点
        {
            alpha = this.getQuadrantAngle(coords[coords.length - 2], coords[coords.length - 1]);
            if(alpha == 0){
                startRadian = -Math.PI / 2;
                endRadian =  0;
            }else{
                startRadian = alpha + (3 * Math.PI) / 2;
                endRadian = alpha + 2 * Math.PI;
            }
            detailCoords.push(...this.getBufferCoordsByRadian(coords[coords.length - 1], startRadian, endRadian, radius));
        }
        return detailCoords;
    }

    /**
     * 获取指定弧度范围之间的缓冲区圆弧拟合边界点
     * @param center 指定拟合圆弧的原点
     * @param startRadian 开始弧度
     * @param endRadian 结束弧度
     * @param radius 缓冲区半径
     * @return {Array} 缓冲区的边界坐标
     */
    getBufferCoordsByRadian(center, startRadian, endRadian, radius) {
        let gamma = Math.PI / 6;
        let x = 0.0, y = 0.0;
        const coords = [];
        for (let phi = startRadian; phi <= endRadian + 0.000000000000001; phi += gamma) {
            x = center[0] + radius * Math.cos(phi);
            y = center[1] + radius * Math.sin(phi);
            coords.push([x,y])
        }
        return coords;
    }

    /**
     * 获取象限角
     **/
    getQuadrantAngle(preCoord, nextCoord) {
        return this.getQuadrantAngleAdd(nextCoord[0] - preCoord[0],nextCoord[1] - preCoord[1]);
    }

    /**
     * 由增量X和增量Y所形成的向量的象限角度
     * @param x 增量X
     * @param y 增量Y
     * @returns {number} theta 象限角
     */
    getQuadrantAngleAdd(x, y) {
        let theta = Math.atan(y/x)
        if (x > 0 && y > 0){
            return theta;
        }else if (x > 0 && y < 0){
            return Math.PI * 2 + theta;
        }else if (x < 0 && y > 0){
            return theta + Math.PI;
        }else if (x < 0 && y < 0){
            return theta + Math.PI;
        }else{
            return theta;
        }
    }

    /**
     * 获取由相邻的三个点所形成的两个向量之间的夹角
     */
    getIncludedAngel(preCoord, midCoord, nextCoord) {
        let innerProduct = (midCoord[0] - preCoord[0])
            * (nextCoord[0]- midCoord[0])
            + (midCoord[1]- preCoord[1])
            * (nextCoord[1] - midCoord[1]);
        let mode1 = Math.sqrt(Math.pow((midCoord[0] - preCoord[0]), 2.0)
            + Math.pow((midCoord[1] - preCoord[1]), 2.0));
        let mode2 = Math.sqrt(Math.pow((nextCoord[0] - midCoord[0]), 2.0)
            + Math.pow((nextCoord[1] - midCoord[1]), 2.0));
        return Math.acos(innerProduct / (mode1 * mode2));
    }

    /**
     * 获取相邻三个点所形
     * @param preCoord  第一个节点坐标成的两个向量的交叉乘积
     * @param midCoord 第二个节点坐标
     * @param nextCoord 第三个节点坐标
     * @return {number} 相邻三个点所形成的两个向量的交叉乘积
     */
   getVectorProduct(preCoord, midCoord, nextCoord) {
        return (midCoord[0] - preCoord[0]) * (nextCoord[1] - midCoord[1]) - (nextCoord[0] - midCoord[0]) * (midCoord[1] - preCoord[1]);
    }
}