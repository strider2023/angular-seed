 var menu=null;
 
 //call this to initialise shape creation tool menu
 function initMenu()
 {
	 menu = new dat.GUI();
	 var geometryList=menu.addFolder('  Geometry Shapes  ');
	 
	 var obj = { Cube:function()
	 { 
	 createCube(); 
	 }};	 
	 geometryList.add(obj,'Cube');
	 
	 
	 	 var obj = { Sphere:function()
	 { 
	 createSphere(); 
	 }};	 
	 geometryList.add(obj,'Sphere');
	 
	 
	 	 var obj = { Cylinder:function()
	 { 
	 createCylinder(); 
	 }};	 
	 geometryList.add(obj,'Cylinder');
	 
	 
	 	 var obj = { Cone:function()
	 { 
	 createCone(); 
	 }};	 
	 geometryList.add(obj,'Cone');
	 	 
 }
   
  
  
  