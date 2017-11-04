var a, b, c, d, e, f, g, h;
var boxCornerPoints=[a, b, c, d, e, f, g, h];

//Call these functions to create required shapes
function createCube()
 {
  cube=BoxGeometry(2,2,2,0x00d0ff,1);
  cube.position.set(0,0,0);
  cube.name="cube";
  scene.add(cube);
  objects.push(cube);
  currentObject=cube;
 }
 

function createSphere()
 {
  sphere=SphereGeometry(1,30,30,0x00d0ff,1);
  sphere.position.set(3,0,0);
  sphere.position.set(0,0,0);
  sphere.name="sphere";
  scene.add(sphere);
  objects.push(sphere);
  currentObject=sphere;
 }

function createCylinder()
 { 
  cylinder=CylinderGeometry(2,4,0x00d0ff,1);
  cylinder.position.set(-3,0,0);
  cylinder.position.set(0,0,0);
  cylinder.name="cylinder";
  scene.add(cylinder);
  objects.push(cylinder);
  currentObject=cylinder;
 }
 
function createCone()
 { 
  cone=ConeGeometry(2,4,0x00d0ff,1);
  cone.position.set(0,0,3);
  cone.position.set(0,0,0);
  cone.name="cone";
  scene.add(cone);
  objects.push(cone);
  currentObject=cone;
 } 
 //Call these functions to create required shapes
 
 
 //call this function to reset proparties of selected object
 function resetGeometry()
 {				 
	 if(currentObject.name=="cube")
	 {
		 removeObject();
		 createCube();
		 if(gui)		 
		 gui.destroy();		 
		 initGUI();		
	 }
	 
	 else if(currentObject.name=="cylinder")
	 {
		 removeObject();
		 createCylinder();
		 if(gui)		 
		 gui.destroy();		 
		 initGUI();		
	 }
	 
	 else if(currentObject.name=="cone")
	 {
		 removeObject();
		 createCone();
		 if(gui)		 
		 gui.destroy();		 
		 initGUI();		
	 }
	 
	else if(currentObject.name=="sphere")
	 {
		 removeObject();
		 createSphere();		 		 
		 if(gui)		 
		 gui.destroy();		 
		 initGUI();		 
	 }
 }
 
 //call this function to align object to origin
 function alignCentre()
 {
	currentObject.position.set(0,0,0);
    setMeshTransform();	
 }
 
 //call this function to remove selected object from scene
 function removeObject()
 {
	 removeOutLine();			
	 currentObject.material.dispose();
     currentObject.geometry.dispose();
	 scene.remove(currentObject);
	 objects.shift();
	 currentObject=null;
	 display();
 }
 
 
 //Make current object first element of objects array: then ,can use shift() to remove selected object from array.
 function arrangeObjects()
 {
	 var index=getIndex();
	 var temp=objects[0];
	 objects[0]=objects[index];
	 objects[index]=temp;	 
 }
 
 
 //Get Index of current object ie. selected object
 function getIndex()
 {
	 for(i=0;i<objects.length;i++)
	 {
		 if(currentObject==objects[i])
		 {
			 return i;
		 }
	 }
 }
 
 
 
 //Print objects array:Debug Support
 function display()
 {
	 console.log("list  of objects ");
	 for(i=0;i<objects.length;i++)
	 {
		console.log(objects[i].name+"\n");
	 }
	 
 }
 
 
 function generateVertexControllers(cornerPoints,vertexArray)
 {	
     if(currentCorners.length!=0)
	 {
		 removeCurrentCorners();
	 }
	 
	 
	 for(i=0;i<vertexArray.length;i++)
	 {
		cornerPoints[i]=BoxGeometry(.1,.1,.1,0xFF0000,1);
		cornerPoints[i].position.set(vertexArray[i].x,vertexArray[i].y,vertexArray[i].z);
		scene.add(cornerPoints[i]);
		cornerPoints[i].parent=currentObject;		
	 }
	 currentCorners=cornerPoints;
 }
 
 
 function removeCurrentCorners()
 {
	 for(i=0;i<currentCorners.length;i++)
	 {
	 currentCorners[i].material.dispose();
     currentCorners[i].geometry.dispose();
	 scene.remove(currentCorners[i]);
	 currentCorners[i]=null;
	 cornerSelection=null;
	 }
	 currentCorners.length=0;
 }
 

 
 
   