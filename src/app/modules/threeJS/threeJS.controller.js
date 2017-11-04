(function() {
  'use strict';
  var app = angular.module('threrJSModule');
  app.controller('ThreeJSController', ThreeJSController);

  /** @ngInject */
  function ThreeJSController($scope, $location, $rootScope, $log, $sce, DataLoaderService, CommonUIServices, UserService) {


    $scope.trustSrc = function() {
      return $sce.trustAsResourceUrl("threeJS/index.html");
    }
    // var scene = null;
    // var camera = null;
    // var renderer = null
    // var container = null;
    // var controls = null;
    // var clock = null;
    // var stats = null;
    // var plane = null;
    // var selection = null,
    //   cornerSelection = null;
    // var offset = new THREE.Vector3();
    // var objects = [];
    // var currentCorners = [];
    // var mouse = new THREE.Vector2();
    // var raycaster = new THREE.Raycaster();
    // var currentObject = null;
    // var clickedPosition = null;
    //
    // var alt = false
    //
    // //GEOMETRY SHAPES
    // var cube, sphere, cylinder, cone;
    //
    // $scope.threeJSDom;
    //
    // //Describing  the 3D scene from threejs.
    // function init() {
    //   // Create main scene
    //   scene = new THREE.Scene();
    //   scene.fog = new THREE.FogExp2(0x797c7c, 0.0003);
    //   var SCREEN_WIDTH = window.innerWidth,
    //     SCREEN_HEIGHT = window.innerHeight;
    //
    //   // Prepare perspective camera
    //   camera = new THREE.PerspectiveCamera(75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000);
    //   scene.add(camera);
    //
    //   //Grid Helper
    //   var gridHelper = new THREE.GridHelper(30, 30, 0x303030, 0xC3C3C3);
    //   gridHelper.position.set(0, 0, 0);
    //   scene.add(gridHelper);
    //
    //   //Axis Helper
    //   var axisHelper = new THREE.AxisHelper(10000);
    //   scene.add(axisHelper);
    //
    //   //load fonts
    //   loadFont();
    //
    //   // Prepare webgl renderer
    //   renderer = new THREE.WebGLRenderer({
    //     antialias: true,
    //     alpha: true
    //   });
    //   renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    //   renderer.setClearColor(0x000000, 0);
    //
    //   // Prepare container
    //   $scope.containerHTML = $sce.trustAsHtml(renderer.domElement.outerHTML);
    //
    //   //Prepare Menu:menu.js
    //   initMenu();
    //
    //   //Drag Controls
    //   var dragControls = new THREE.DragControls(objects, camera, renderer.domElement);
    //
    //   /*  // Events
    //    THREE.WindowResize(this.renderer, this.camera); */
    //
    //   // Prepare Orbit controls
    //   controls = new THREE.OrbitControls(camera, renderer.domElement);
    //   controls.target.set(0, 0, 0);
    //   camera.position.set(-10, 15, 25);
    //   camera.rotation.set(0, 0, 0);
    //   controls.update();
    //
    //   // Prepare clock
    //   clock = new THREE.Clock();
    //
    //   // Prepare stats
    //   stats = new Stats();
    //   stats.domElement.style.position = 'absolute';
    //   stats.domElement.style.left = '50px';
    //   stats.domElement.style.bottom = '50px';
    //   stats.domElement.style.zIndex = 1;
    //   //container.append(stats.domElement);
    //   $scope.statsHTML = $sce.trustAsHtml(stats.domElement.outerHTML);
    //
    //   // Add lights
    //   scene.add(new THREE.AmbientLight(0x444444));
    //   var dirLight = new THREE.DirectionalLight(0xffffff);
    //   dirLight.position.set(200, 200, 1000).normalize();
    //   camera.add(dirLight);
    //   camera.add(dirLight.target);
    // }
    //
    // // Animate the scene
    // function animate() {
    //   requestAnimationFrame(animate);
    //   render();
    //   update();
    // }
    //
    // // Update controls and stats
    // function update() {
    //   var delta = clock.getDelta();
    //   controls.update(delta);
    //   stats.update();
    //   numbersLookAtCamera();
    // }
    //
    // // Render the scene
    // function render() {
    //   if (renderer) {
    //     renderer.render(scene, camera);
    //   }
    // }
    //
    // // Initialize scene view on page load
    // function initializeSceneView() {
    //   init();
    //   animate();
    // }
    //
    // //ROTATION SUPPORT
    // function toRadians(angle) {
    //   return angle * (Math.PI / 180);
    // }
    //
    // function toDegrees(angle) {
    //   return angle * (180 / Math.PI);
    // }
    // //ROTATION SUPPORT
    //
    // initializeSceneView();
    //
    // var menu = null;
    //
    // //call this to initialise shape creation tool menu
    // function initMenu() {
    //   menu = new dat.GUI();
    //   var geometryList = menu.addFolder('  Geometry Shapes  ');
    //
    //   var obj = {
    //     Cube: function() {
    //       createCube();
    //     }
    //   };
    //   geometryList.add(obj, 'Cube');
    //
    //
    //   var obj = {
    //     Sphere: function() {
    //       createSphere();
    //     }
    //   };
    //   geometryList.add(obj, 'Sphere');
    //
    //
    //   var obj = {
    //     Cylinder: function() {
    //       createCylinder();
    //     }
    //   };
    //   geometryList.add(obj, 'Cylinder');
    //
    //
    //   var obj = {
    //     Cone: function() {
    //       createCone();
    //     }
    //   };
    //   geometryList.add(obj, 'Cone');
    // }
    //
    // /////////////////////////////////////////// Fonts and Grid ///////////////////////////////////////////////////
    //
    // var numbers = [];
    // var numberLineLength = 15;
    // var textFormat = "",
    //   height = .01,
    //   size = .3,
    //   curveSegments = 5,
    //   bevelEnabled = false,
    //   font = undefined
    //
    // function numberMaterial(colorCode) {
    //   var material = new THREE.MeshPhongMaterial({
    //     color: colorCode
    //   });
    //   return material;
    // }
    //
    // function loadFont() {
    //   var loader = new THREE.FontLoader();
    //   loader.load('fonts/Primer Print_Bold.json', function(res) {
    //     font = res;
    //
    //     for (var i = 1; i <= numberLineLength; i++) {
    //       createText(i);
    //     }
    //   });
    // }
    //
    // function createText(num) {
    //   var textGeo = new THREE.TextGeometry(num.toString(), {
    //     font: font,
    //     size: size,
    //     height: height,
    //     curveSegments: curveSegments,
    //     weight: "regular",
    //     bevelEnabled: bevelEnabled
    //   });
    //
    //   textGeo.computeBoundingBox();
    //   textGeo.computeVertexNormals();
    //
    //   var numberX = new THREE.Mesh(textGeo, numberMaterial(0xffffff, 1))
    //   numberX.position.set(num - .05, 0 + .1875, 0);
    //   var numPointX = SphereGeometry(.08, 30, 30, 0xffffff, 1);
    //   numPointX.position.set(num, 0, 0);
    //
    //   var numberY = new THREE.Mesh(textGeo, numberMaterial(0xffffff, 1))
    //   numberY.position.set(0 + .1875, num - .15, 0);
    //   var numPointY = SphereGeometry(.08, 30, 30, 0xffffff, 1);
    //   numPointY.position.set(0, num, 0);
    //
    //
    //   var numberZ = new THREE.Mesh(textGeo, numberMaterial(0xffffff, 1))
    //   numberZ.position.set(0, 0 + .1875, num + .05);
    //   var numPointZ = SphereGeometry(.08, 30, 30, 0xffffff, 1);
    //   numPointZ.position.set(0, 0, num);
    //
    //
    //   scene.add(numPointX);
    //   scene.add(numberX);
    //   numbers.push(numberX);
    //
    //   scene.add(numPointY);
    //   scene.add(numberY);
    //   numbers.push(numberY);
    //
    //   scene.add(numPointZ);
    //   scene.add(numberZ);
    //   numbers.push(numberZ);
    // }
    //
    // function numbersLookAtCamera() {
    //   if (numbers) {
    //     for (var i = 0; i < numbers.length; i++) {
    //       numbers[i].lookAt(camera.position);
    //     }
    //   }
    // }
  }
})();
