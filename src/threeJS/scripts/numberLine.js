  var numbers=[];
  var numberLineLength=15;
  var textFormat = "",
        height = .01,
        size = .3,
        curveSegments = 5,
        bevelEnabled = false,
        font = undefined
		
	function numberMaterial(colorCode)
    {
	 var material = new THREE.MeshPhongMaterial( {color: colorCode} );
	 return material;
    }	
 
  function loadFont() 
  {
    var loader = new THREE.FontLoader();
    loader.load('fonts/Primer Print_Bold.json', function (res) {
      font = res;
	  
	  for(var i=1;i<=numberLineLength;i++)
	  {
      createText(i);
	  }	   	  
    });
  }
  
  function createText(num)
  {
    textGeo = new THREE.TextGeometry( num.toString(), 
	{
      font: font,
      size: size,
      height: height,
      curveSegments:curveSegments,
      weight: "regular",
      bevelEnabled:bevelEnabled
    });
	
    textGeo.computeBoundingBox();
    textGeo.computeVertexNormals();
    
	var numberX = new THREE.Mesh(textGeo, numberMaterial(0xffffff,1))
    numberX.position.set(num-.05,0+.1875,0);
	var numPointX=SphereGeometry(.08,30,30,0xffffff,1);
    numPointX.position.set(num,0,0);
	
	var numberY = new THREE.Mesh(textGeo, numberMaterial(0xffffff,1))
    numberY.position.set(0+.1875,num-.15,0);
	var numPointY=SphereGeometry(.08,30,30,0xffffff,1);
    numPointY.position.set(0,num,0);
    
	
    var numberZ = new THREE.Mesh(textGeo, numberMaterial(0xffffff,1))
    numberZ.position.set(0,0+.1875,num+.05); 
	var numPointZ=SphereGeometry(.08,30,30,0xffffff,1);
    numPointZ.position.set(0,0,num);

    
	scene.add(numPointX);		
    scene.add(numberX);
	numbers.push(numberX);
	
	scene.add(numPointY);	
	scene.add(numberY);
	numbers.push(numberY);
	
	scene.add(numPointZ);
	scene.add(numberZ);
	numbers.push(numberZ);
  }
  
  function numbersLookAtCamera()
  {
	  for(var i=0;i<numbers.length;i++)
	  {
		  numbers[i].lookAt(camera.position);		  
	  }
  }