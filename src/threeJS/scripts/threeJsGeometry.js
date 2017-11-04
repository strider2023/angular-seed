
//Custom Material
function Material(colorCode,opacity)
{
	var material = new THREE.MeshPhongMaterial( {color: colorCode,transparent:true,opacity:opacity} );
	return material;
}

//outline material
function outLineMaterial(colorCode)
{
	var outline_mat = new THREE.MeshBasicMaterial({color : colorCode, side: THREE.BackSide});
	return outline_mat;
}


//###Functions to create shapes from the three.js GL.###//

/* width � Width of the sides on the X axis.
height � Height of the sides on the Y axis.
depth � Depth of the sides on the Z axis.
widthSegments � Optional. Number of segmented faces along the width of the sides. Default is 1.
heightSegments � Optional. Number of segmented faces along the height of the sides. Default is 1.
depthSegments � Optional. Number of segmented faces along the depth of the sides. Default is 1.  */

function BoxGeometry(width, height, depth,colorCode,opacity)
{
var geometry = new THREE.BoxGeometry( width, height, depth );
var cube = new THREE.Mesh( geometry, Material(colorCode,opacity) );
return cube;
}


/* radius � Radius of the circle, default = 50.
segments � Number of segments (triangles), minimum = 3, default = 8.
thetaStart � Start angle for first segment, default = 0 (three o'clock position).
thetaLength � The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete circle.  */

function CircleGeometry(radius, segments,colorCode,opacity)
{
var geometry = new THREE.CircleGeometry(radius, segments);
var circle = new THREE.Mesh( geometry, Material(colorCode,opacity) );
return circle;
}


/* radius � Radius of the cone at the base. Default is 20.
height � Height of the cone. Default is 100.
radiusSegments � Number of segmented faces around the circumference of the cone. Default is 8
heightSegments � Number of rows of faces along the height of the cone. Default is 1.
openEnded � A Boolean indicating whether the base of the cone is open or capped. Default is false, meaning capped.
thetaStart � Start angle for first segment, default = 0 (three o'clock position).
thetaLength � The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete cone.  */

function ConeGeometry(radius, height,colorCode,opacity)
{
var geometry = new THREE.ConeGeometry(radius, height, 30, 2);
var cone = new THREE.Mesh( geometry, Material(colorCode,opacity) );
return cone;
}

/* radiusTop � Radius of the cylinder at the top. Default is 20.
radiusBottom � Radius of the cylinder at the bottom. Default is 20.
height � Height of the cylinder. Default is 100.
radiusSegments � Number of segmented faces around the circumference of the cylinder. Default is 8
heightSegments � Number of rows of faces along the height of the cylinder. Default is 1.
openEnded � A Boolean indicating whether the ends of the cylinder are open or capped. Default is false, meaning capped.
thetaStart � Start angle for first segment, default = 0 (three o'clock position).
thetaLength � The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete cylinder. */

function CylinderGeometry(radius, height,colorCode,opacity)
{
var geometry = new THREE.CylinderGeometry(radius, radius, height, 30,2);
var cylinder = new THREE.Mesh( geometry, Material(colorCode,opacity) );
return cylinder;
}

/* width � Width along the X axis.
height � Height along the Y axis.
widthSegments � Optional. Default is 1.
heightSegments � Optional. Default is 1.  */

function PlaneGeometry(width, height, widthSegments, heightSegments,colorCode,opacity)
{
var geometry = new THREE.PlaneGeometry(width, height, widthSegments, heightSegments,colorCode);
var material = new THREE.MeshPhongMaterial( {color: colorCode, side: THREE.DoubleSide,transparent:true,opacity:opacity});
var plane = new THREE.Mesh( geometry, material );
return plane;
}

/* innerRadius � Default is 20.
outerRadius � Default is 50.
thetaSegments � Number of segments. A higher number means the ring will be more round. Minimum is 3. Default is 8.
phiSegments � Minimum is 1. Default is 8.
thetaStart � Starting angle. Default is 0.
thetaLength � Central angle. Default is Math.PI * 2.  */

function RingGeometry(innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength,colorCode,opacity)
{
var geometry = new THREE.RingGeometry(innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength);
var material = new THREE.MeshPhongMaterial( { color: colorCode, side: THREE.DoubleSide,transparent:true,opacity:opacity } );
var ring = new THREE.Mesh( geometry, material );
return ring;
}

/* radius � sphere radius. Default is 50.
widthSegments � number of horizontal segments. Minimum value is 3, and the default is 8.
heightSegments � number of vertical segments. Minimum value is 2, and the default is 6.
phiStart � specify horizontal starting angle. Default is 0.
phiLength � specify horizontal sweep angle size. Default is Math.PI * 2.
thetaStart � specify vertical starting angle. Default is 0.
thetaLength � specify vertical sweep angle size. Default is Math.PI.
 */

function SphereGeometry(radius, widthSegments, heightSegments,colorCode,opacity)
{
var geometry = new THREE.SphereGeometry( radius, widthSegments, heightSegments);
var sphere = new THREE.Mesh( geometry, Material(colorCode,opacity) );
return sphere;
}

/* radius � Default is 100.
tube � Diameter of the tube. Default is 40.
radialSegments � Default is 8
tubularSegments � Default is 6.
arc � Central angle. Default is Math.PI * 2.
 */

function TorusGeometry(radius, tube, radialSegments, tubularSegments, arc,colorCode,opacity)
{
var geometry = new THREE.TorusGeometry( radius, tube, radialSegments, tubularSegments );
var torus = new THREE.Mesh( geometry, Material(colorCode,opacity) );
return torus;
}

//###Functions to create shapes from the three.js GL.###//
