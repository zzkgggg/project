

/**
 * 初始化场景
 * */
function initScene(){
    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xF1F2F7 );
}

/**
 * 初始化相机
 * */
function initCamera(){
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.lookAt(new THREE.Vector3(-2.81, 0, -33.26));
    camera.position.set(-2.81, 87.44, -33.26);
}

/**
 * 初始化控制器
 * */
function initControl(){
    controls = new THREE.OrbitControls( camera,renderer.domElement );//用户交互
    //设置相机的角度范围
    controls.maxPolarAngle = Math.PI * 0.5;
    //设置相机距离原点的最远距离
    controls.minDistance = 0;
    //设置相机距离原点的最远距离
    controls.maxDistance = 2000;
    controls.maxDistance = 2000;
    controls.target.set(-2.81,0,-33.268);
}
/**
 * 初始化渲染
 * */
function initRender(){
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
}


/**
 * 初始化光照
 * */
function initLight(){
    // 光线的照射
    var ambiColor = "#f2f2f2";
    var spotLight = new THREE.SpotLight(ambiColor);
    spotLight.position.set( -100, 100, -100);
    scene.add(spotLight);
    var spotLight2 = new THREE.SpotLight(ambiColor);
    spotLight2.position.set( 100, 100, 150);
    scene.add(spotLight2);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}