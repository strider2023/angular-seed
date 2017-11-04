
  var scene = null;
var camera = null;
var renderer = null
var container = null;
var controls = null;
var clock = null;
var stats = null;
var plane = null;
var selection = null,
  cornerSelection = null;
var offset = new THREE.Vector3();
var objects = [];
var currentCorners = [];
var mouse = new THREE.Vector2();
var raycaster = new THREE.Raycaster();
var currentObject = null;
var clickedPosition = null;

var alt = false

//GEOMETRY SHAPES
var cube, sphere, cylinder, cone;






//Describing  the 3D scene from threejs.
function init() {
  // Create main scene
  this.scene = new THREE.Scene();
  this.scene.fog = new THREE.FogExp2(0x797c7c, 0.0003);
  var SCREEN_WIDTH = window.innerWidth,
    SCREEN_HEIGHT = window.innerHeight;



  // Prepare perspective camera
  this.camera = new THREE.PerspectiveCamera(75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000);
  this.scene.add(this.camera);

  //Grid Helper
  var gridHelper = new THREE.GridHelper(30, 30, 0x303030, 0xC3C3C3);
  gridHelper.position.set(0, 0, 0);
  scene.add(gridHelper);

  //Axis Helper
  var axisHelper = new THREE.AxisHelper(10000);
  scene.add(axisHelper);


  //load fonts
  loadFont();

  // Prepare webgl renderer
  this.renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });
  this.renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
  this.renderer.setClearColor(0x000000, 0);



  // Prepare container
  this.container = document.createElement('sceneDiv');
  document.body.appendChild(this.container);
  this.container.appendChild(this.renderer.domElement);


  /* 	 var axisNotation=document.createElement('DIV');
  	 axisNotation.classList.add('right');
  	 document.body.appendChild(this.axisNotation); */

  //Prepare Menu:menu.js
  initMenu();

  //Drag Controls
  var dragControls = new THREE.DragControls(objects, camera, renderer.domElement);


  /*  // Events
   THREE.WindowResize(this.renderer, this.camera); */


  // Prepare Orbit controls
  this.controls = new THREE.OrbitControls(this.camera, renderer.domElement);
  controls.target.set(0, 0, 0);
  camera.position.set(-10, 15, 25);
  camera.rotation.set(0, 0, 0);
  controls.update();



  // Prepare clock
  this.clock = new THREE.Clock();



  // Prepare stats
  this.stats = new Stats();
  this.stats.domElement.style.position = 'absolute';
  this.stats.domElement.style.left = '50px';
  this.stats.domElement.style.bottom = '50px';
  this.stats.domElement.style.zIndex = 1;
  this.container.appendChild(this.stats.domElement);



  // Add lights
  this.scene.add(new THREE.AmbientLight(0x444444));
  var dirLight = new THREE.DirectionalLight(0xffffff);
  dirLight.position.set(200, 200, 1000).normalize();
  this.camera.add(dirLight);
  this.camera.add(dirLight.target);


  /* var spriteMap = new THREE.TextureLoader().load( "sprites/axis2.png" );
    var spriteMaterial = new THREE.SpriteMaterial( { map: spriteMap, color: 0xffffff } );
    var sprite = new THREE.Sprite( spriteMaterial );
    scene.add( sprite );
	sprite.position.set(camera.position.x-20,camera.position.y,camera.position.z); */


}



// Animate the scene
function animate() {
  requestAnimationFrame(animate);
  render();
  update();
}


// Update controls and stats
function update() {
  var delta = clock.getDelta();
  controls.update(delta);
  stats.update();
  numbersLookAtCamera();
}


// Render the scene
function render() {
  if (renderer) {
    renderer.render(scene, camera);
  }
}


// Initialize scene view on page load
function initializeSceneView() {
  init();
  animate();
}


//ROTATION SUPPORT
function toRadians(angle) {
  return angle * (Math.PI / 180);
}


function toDegrees(angle) {
  return angle * (180 / Math.PI);
}
//ROTATION SUPPORT







if (window.attachEvent)
  window.attachEvent('onload', initializeSceneView);

else window.onload = initializeSceneView;
