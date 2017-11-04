var shape,shape_mat,outLineMesh,outLineWidth=.1;

//call this to create outline mesh for the selected object
function outLine()
{
	removeOutLine();
	
	if(currentObject.name=="cube")
	{
      shape = new THREE.BoxGeometry(2,2,2);
      shape_mat = outLineMaterial(0xffffff,1);
      outLineMesh = new THREE.Mesh(shape, shape_mat); 
      setMeshTransform(outLineMesh,currentObject);	  
      scene.add(outLineMesh);
	}
	
	
	if(currentObject.name=="cone")
	{
      shape = new THREE.ConeGeometry(2,4,30,2);
      shape_mat = outLineMaterial(0xffffff,1);
      outLineMesh = new THREE.Mesh(shape, shape_mat); 
      setMeshTransform(outLineMesh,currentObject);	  
      scene.add(outLineMesh);
	}
	
	
	if(currentObject.name=="sphere")
	{
      shape = new THREE.SphereGeometry(1,30,30);
      shape_mat = outLineMaterial(0xffffff,1);
      outLineMesh = new THREE.Mesh(shape, shape_mat); 
      setMeshTransform(outLineMesh,currentObject);	  
      scene.add(outLineMesh);
	}
	
	if(currentObject.name=="cylinder")
	{
      shape = new THREE.CylinderGeometry(2,2,4,30,2);
      shape_mat = outLineMaterial(0xffffff,1);
      outLineMesh = new THREE.Mesh(shape, shape_mat); 
      setMeshTransform(outLineMesh,currentObject);	  
      scene.add(outLineMesh);
	}
	
}


//call this function to remove outline of selected object
function removeOutLine()
{
	if(outLineMesh)
	{
	outLineMesh.material.dispose();
    outLineMesh.geometry.dispose();
	scene.remove(outLineMesh);
	}
}


//Setting the transform of created outline mesh
function setMeshTransform()
{
	outLineMesh.position.set(currentObject.position.x,currentObject.position.y,currentObject.position.z);
	
	outLineMesh.scale.x=currentObject.scale.x+outLineWidth;
	outLineMesh.scale.y=currentObject.scale.y+outLineWidth;
	outLineMesh.scale.z=currentObject.scale.z+outLineWidth;
	
	outLineMesh.rotation.x=currentObject.rotation.x;
	outLineMesh.rotation.y=currentObject.rotation.y;
	outLineMesh.rotation.z=currentObject.rotation.z;
}




