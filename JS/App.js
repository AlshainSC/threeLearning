// import * as THREE from '../three'
// import { GUI } from 'dat.gui';
// const OrbitControls = require('three')


//Materials

const textureLoader = new THREE.TextureLoader();
const normalTexture = textureLoader.load('/textures/normal_4.png')
const material = new THREE.MeshStandardMaterial();
material.metalness = 0.3;
material.roughness = 0;
material.normalMap = normalTexture;
material.color = new THREE.Color(0x292929);
material.envMaps = Reflect;


//Geometries
// const geometry = new THREE.PlaneGeometry( 100, 100);
const geometry = new THREE.SphereGeometry(1, 100, 100);
const plane = new THREE.Mesh( geometry, material );
// const offset = new THREE.Quaternion();

//Scene
const scene = new THREE.Scene();

//Camera
const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, .01, 2000 );
scene.add( camera );

//Canvas
const canvas = document.querySelector( 'canvas.webgl' );

//Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true
});


//Lights
const light = new THREE.PointLight(0x414c57, 8.65);
const light2 = new THREE.PointLight(0x414c57, 10);
const pointLightHelper = new THREE.PointLightHelper(light, 2)
const pointLightHelper2 = new THREE.PointLightHelper(light2, 2);
scene.add( pointLightHelper );
scene.add( pointLightHelper2 );


//GUI
const gui = new dat.GUI()

const planeFolder = gui.addFolder('Plane')
planeFolder.add(plane.rotation, 'x', 0, Math.PI * 2)
planeFolder.add(plane.rotation, 'y', 0, Math.PI * 2)
planeFolder.add(plane.rotation, 'z', 0, Math.PI * 2)
const planeSize = gui.addFolder('Plane Sizing');
planeSize.add(plane.scale, 'x', 0, 10, .01)
planeSize.add(plane.scale, 'y', 0, 10, .01)


const cameraFolder = gui.addFolder('Camera');
cameraFolder.add(camera.position, 'x', -10, 10, .01);
cameraFolder.add(camera.position, 'y', -10, 10, .01);
cameraFolder.add(camera.position, 'z', 0, 10, .01);
cameraFolder.open()

const lightFolder = gui.addFolder('Light');
const lightFolder2 = gui.addFolder("Light2");
const lightColor = {
  color: 0xff0000
}
lightFolder.add(light.position, 'x').min(-5).max(5).step(0.01)
lightFolder.add(light.position, 'y').min(-5).max(5).step(0.01)
lightFolder.add(light.position, 'z').min(-5).max(5).step(0.01)
lightFolder.add(light, 'intensity').min(0).max(10).step(0.01)
lightFolder2.add(light2.position, 'x').min(-5).max(5).step(0.01)
lightFolder2.add(light2.position, 'y').min(-5).max(5).step(0.01)
lightFolder2.add(light2.position, 'z').min(-5).max(5).step(0.01)
lightFolder2.add(light2, 'intensity').min(0).max(10).step(0.01)

lightFolder.addColor(lightColor, 'color').onChange(() => {
  light.color.set(lightColor.color)
});
lightFolder2.addColor(lightColor, 'color').onChange(() => {
  light2.color.set(lightColor.color)
});
// lightFolder.add(light.colo

scene.add( camera );
scene.add( plane );
scene.add( light );
scene.add( light2 );
// offset.setFromAxisAngle(-Math.PI/2);
// camera.position.z = 1000;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
document.body.appendChild( renderer.domElement );
// light.position.set(.78,5,-3.63);
// plane.position.set(5,0,1);
// camera.position.set(-.21,-1.53,5.12);


// planeFolder.open()

// //Orbit
// const controlLight = new OrbitControls( light, renderer.domElement );
// const controlLight2 = new OrbitControls( light2, renderer.domElement );
// controlLight.autoRotate = true;
// controlLight2.autoRotate = true;

function animate () {
  
  requestAnimationFrame( animate );

  plane.rotation.x += .01
  plane.rotation.y += .01
  // light.rotation.z += .001
  // light.rotation.x += .003
  // light2.rotation.z += .001
  // light2.rotation.x += .003
  // controlLight.update();
  // constrolLight2.update();
  renderer.render(scene, camera);
}

animate();