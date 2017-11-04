 var gui;

 //Call this to initialise shape specific proparty menu
 function initGUI() {
   var color = 0xffffff;
   var controller = new function() {
     this.radius = getRadius();
     this.scaleX = currentObject.scale.x;
     this.scaleY = currentObject.scale.y;
     this.scaleZ = currentObject.scale.z;
     this.positionX = currentObject.position.x;
     this.positionY = currentObject.position.y;
     this.positionZ = currentObject.position.z;
     this.rotationX = currentObject.rotation.x;
     this.rotationY = currentObject.rotation.y;
     this.rotationZ = currentObject.rotation.x;
     this.color = color;
     this.opacity = 1;
   }();
   //SCALE//
   gui = new dat.GUI();


   if (currentObject != null && currentObject.name != "cube") {
     var p1 = gui.addFolder('Radius');
     p1.add(controller, 'radius', .1, 10).onChange(
       function() {
         updateGeometry((controller.radius))
       });
   }


   var f1 = gui.addFolder('Scale');
   if (currentObject != null && currentObject.name != "cone" && currentObject.name != "cylinder") {
     f1.add(controller, 'scaleX', 0.01, 10).onChange(
       function() {
         currentObject.scale.x = (controller.scaleX);
         setMeshTransform();
       });
   }


   f1.add(controller, 'scaleY', 0.01, 10).onChange(
     function() {
       if (currentObject) {
         currentObject.scale.y = (controller.scaleY);
         setMeshTransform();
       }
     });

   if (currentObject != null && currentObject.name != "cone" && currentObject.name != "cylinder") {
     f1.add(controller, 'scaleZ', 0.01, 10).onChange(
       function() {

         currentObject.scale.z = (controller.scaleZ);
         setMeshTransform();
       });
   }
   //SCALE//



   //POSITION//
   var f2 = gui.addFolder('Position');
   f2.add(controller, 'positionX', -100, 100).onChange(
     function() {
       if (currentObject) {
         currentObject.position.x = (controller.positionX);
         setMeshTransform();
       }
     });

   f2.add(controller, 'positionY', -100, 100).onChange(
     function() {
       if (currentObject) {
         currentObject.position.y = (controller.positionY);
         setMeshTransform();
       }
     });

   f2.add(controller, 'positionZ', -100, 100).onChange(
     function() {
       if (currentObject) {
         currentObject.position.z = (controller.positionZ);
         setMeshTransform();
       }
     });
   //POSITION//


   //ROTATION//
   var f3 = gui.addFolder('Rotation');
   f3.add(controller, 'rotationX', -180, 180).onChange(
     function() {
       if (currentObject) {
         currentObject.rotation.x = controller.rotationX;
         setMeshTransform();
       }
     });

   f3.add(controller, 'rotationY', -180, 180).onChange(
     function() {
       if (currentObject) {
         currentObject.rotation.y = controller.rotationY;
         setMeshTransform();
       }
     });

   f3.add(controller, 'rotationZ', -180, 180).onChange(
     function() {
       if (currentObject) {
         currentObject.rotation.z = controller.rotationZ;
         setMeshTransform();
       }
     });
   //ROTATION//


   //COLOR//
   gui.addColor(controller, 'color', color).onChange(
     function() {
       if (currentObject)
         currentObject.material.color.setHex(dec2hex(controller.color));
     });
   //COLOR//

   //CENTRE ALIGN
   var f4 = {
     Centre: function() {
       if (currentObject != null)
         alignCentre();
     }
   };
   gui.add(f4, 'Centre');
   //CENTRE ALIGN

   //RESET
   var f5 = {
     Reset: function() {
       if (currentObject != null)
         resetGeometry();
     }
   };
   gui.add(f5, 'Reset');
   //RESET




   //Support function for color palette
   function dec2hex(i) {
     var result = "0x000000";
     if (i >= 0 && i <= 15) {
       result = "0x00000" + i.toString(16);
     } else if (i >= 16 && i <= 255) {
       result = "0x0000" + i.toString(16);
     } else if (i >= 256 && i <= 4095) {
       result = "0x000" + i.toString(16);
     } else if (i >= 4096 && i <= 65535) {
       result = "0x00" + i.toString(16);
     } else if (i >= 65535 && i <= 1048575) {
       result = "0x0" + i.toString(16);
     } else if (i >= 1048575) {
       result = '0x' + i.toString(16);
     }
     if (result.length == 8) {
       return result;
     }
   }
 }

 //custom radius function to make up the required shape proparty: three.js takes in the radius at the time of creation only. after creation it is not possible to access that proparty. Hence the shape needs to be scaled impartually from each axis , as the radius requires.
 function getRadius() {
   if (currentObject.name != "cube")
     return currentObject.scale.x;
 }

 function updateGeometry(radius) {
   if (currentObject.name == "sphere") {
     var scale = radius;
     currentObject.scale.x = scale;
     currentObject.scale.y = scale;
     currentObject.scale.z = scale;
     updateOutLineMesh(radius + outLineWidth);
   }

   if (currentObject.name == "cone" || currentObject.name == "cylinder") {
     var scale = radius;
     currentObject.scale.x = scale;
     currentObject.scale.z = scale;
     updateOutLineMesh(radius + outLineWidth);
   }


 }

 //since outline mesh is not a specific shader, It needs to be scaled with  the shape object itself.
 function updateOutLineMesh(scaleValue) {
   if (currentObject.name != "cone" && currentObject.name != "cylinder") {
     var scaleValue = scaleValue;
     outLineMesh.scale.x = scaleValue;
     outLineMesh.scale.y = scaleValue;
     outLineMesh.scale.z = scaleValue;
   }

   if (currentObject.name == "cone" || currentObject.name == "cylinder") {
     var scaleValue = scaleValue;
     outLineMesh.scale.x = scaleValue;
     outLineMesh.scale.z = scaleValue;
   }
 }

 //Set the transform of selected shape to GUI
 function setGUIvalues() {
   //Position
   controller.positionX = currentObject.position.x;
   controller.positionY = currentObject.position.y;
   controller.positionZ = currentObject.position.z;
   //Position

   //Scale
   controller.scaleX = currentObject.scale.x;
   controller.scaleY = currentObject.scale.y;
   controller.scaleZ = currentObject.scale.z;
   //scale

   //Rotation
   controller.rotationX = currentObject.rotation.x;
   controller.rotationY = currentObject.rotation.y;
   controller.rotationZ = currentObject.rotation.z;
   //Rotation
 }

 //Set the transform of selected shape to GUI
