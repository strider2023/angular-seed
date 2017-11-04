
 
  var isDragging = false;
  var previousMousePosition = {x: 0,y: 0};
  var _plane = new THREE.Plane();
  
  

function onDocumentMouseDown (event)
 {
  
     // Get mouse position
     var mouseX = (event.clientX / window.innerWidth) * 2 - 1;
     var mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  
  
     // Get 3D vector from 3D mouse position using 'unproject' function
     clickedPosition = new THREE.Vector3(mouseX, mouseY, 1);
     clickedPosition.unproject(camera);
	
	 //cube.position.set(clickedPosition.x,clickedPosition.y,clickedPosition.z);
	   
    // Set the raycaster position
     raycaster.set( camera.position, clickedPosition.sub( camera.position ).normalize() );
  
  
    // Find all intersected objects
	 var cornerIntersects=raycaster.intersectObjects(currentCorners);//CORNER VERTEX
     var intersects = raycaster.intersectObjects(objects);	     	 
  
      if (intersects.length > 0) 
       {	  
        //Disable the controls
         controls.enabled = false;
	     isDragging = true;
	
        //Set the selection - first intersected object
         selection = intersects[0].object;
		 currentObject=selection;
		 
		 if(currentCorners.length==0)
		 generateVertexControllers(boxCornerPoints,currentObject.geometry.vertices);
	  
	    //create outline for the selected shape object
		 outLine();

		//destroying the current proparty menu and creating the required one for the selected shape
		if(gui)		 
		 gui.destroy();		 
		 initGUI();		
       
	     //Make current object first element of objects array: geometryMenu.js
	     arrangeObjects();
		 
	     //Calculate the offset
         var intersects = raycaster.intersectObject(selection);
          offset.copy(intersects[0].point).sub(selection.position);
		  setMeshTransform();
       }
	   
	   //CORNER VERTEX
	   if(cornerIntersects.length>0)
	   {
		 controls.enabled = false;
		 cornerSelection = cornerIntersects[0].object;
		 var cornerIntersects = raycaster.intersectObject(cornerSelection);
          offset.copy(cornerIntersects[0].point).sub(cornerSelection.position);
	   }
	   
	   onDocumentMouseMove();
		   
  }
  
  function onDocumentMouseDblClick(event)
  {
	  var mouseX = (event.clientX / window.innerWidth) * 2 - 1;
     var mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  
  
     //Get 3D vector from 3D mouse position using 'unproject' function
     clickedPosition = new THREE.Vector3(mouseX, mouseY, 1);
     clickedPosition.unproject(camera);
	
	 //cube.position.set(clickedPosition.x,clickedPosition.y,clickedPosition.z);
	   
     //Set the raycaster position
     raycaster.set( camera.position, clickedPosition.sub( camera.position ).normalize() );
  
  
     //Find all intersected objects
     var intersects = raycaster.intersectObjects(objects);
	 
	 if(intersects.length==0)
	 {
	   //removing selections when double clicked in empty space
	   if(gui)
       gui.closed=true;		
   
	   currentObject=null;
	   removeOutLine();
	   
	    if(currentCorners.length!=0)//removing scaling vertices
	      {
		   removeCurrentCorners();
	      }
	   //removing selections when double clicked in empty space
	 }
  }
  
 
  
  
  
  
  
 function onDocumentMouseMove (event) 
  {	 
  
 
	 event.preventDefault();
	
     // Get mouse position
     var mouseX = (event.clientX / window.innerWidth) * 2 - 1;
     var mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  
  
     // Get 3D vector from 3D mouse position using 'unproject' function
     var clickedPosition = new THREE.Vector3(mouseX, mouseY, 1);
     clickedPosition.unproject(camera);
  
  
     // Set the raycaster position
     raycaster.set( camera.position, clickedPosition.sub( camera.position ).normalize() );
  
  
     if (selection) 
      {
       // Check the position where  is intersected
       var intersects = raycaster.intersectObject(selection);
	
	
       // Reposition the object based on the intersection point with the plane
	   if(intersects[0]!=null)
	   {
       selection.position.copy(intersects[0].point.sub(offset));
	   setMeshTransform();
	   }
	
      }
	  
	  
 
      else 
      {
        var intersects = raycaster.intersectObjects(objects);
	
     if (intersects.length > 0&&selection) 
	  {
      selection.position.copy(intersects[0].object.position);
      selection.lookAt(camera.position);
      }
  
     }
	 //CORNER VERTEX
	 if(cornerSelection)
	  {
		  
       var cornerIntersects = raycaster.intersectObject(cornerSelection);
	   
	   if(cornerIntersects[0]!=null)
	   {
       cornerSelection.position.copy(cornerIntersects[0].point.sub(offset));
	   }
	  }


  
   }
  
  

  
  function onDocumentMouseUp (event)
  { 
     isDragging = false;
     controls.enabled = true;
	 selection=null;
	 cornerSelection=null; //CORNER VERTEX	 
  }
  
  
  //RESET 'R' KEY//
  function onKeyDown(event)
  {
	  if(event.keyCode==82)
	  {
		 //reset rotation controller and camera 
		 controls.reset();
		 camera.position.set(-10,15,25);
         camera.rotation.set(0,0,0);
	     controls.update();
	    //reset rotation controller and camera
		  
		      //reset rotation of objects in scene
		   for(var i =0;i<objects.length;i++)
	          {
		        objects[i].rotation.set(0,0,0);
	          }
			  //reset rotation of objects in scene
	  }
	//RESET 'R' KEY//
	  
	  
	  
	  
	  //DELETE KEY//
	  if(event.keyCode==46)
	  {
	   if(currentObject)
	     {
		   var answer = confirm("Delete "+currentObject.name+" ?");
          
		   if (answer)
		    {
			  //deleting the selected object and hiding the UI window:geometryMenu.js 
              removeObject();
              gui.closed=true;				  
            }      
		 }		   
      }
	  //DELETE KEY//
  }
  
  
  function onKeyUp(event)
  {

  }
  
   
   
