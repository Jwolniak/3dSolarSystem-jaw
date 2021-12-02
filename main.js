import 'style.css'

import * as THREE from 'three';

const scene = new THREE.Scene();

//sets the camera up so that the entire page and all objects can be seen by the user
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//takes the canvas with the id bg and renders it so the user can see what is on the canvas
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

//sets the renderer to have the pixel ratio of the device that the user is using to view the webpage
renderer.setPixelRatio(window.devicePixelRatio);
//sets the renderer to be the size of the window of the device used
renderer.setSize(window.innerWidth, window.innerHeight);
//moves the camera along the z axis to get a better view of the shapes
camera.position.setZ(30);
camera.position.setX(-3);
renderer.render(scene, camera);
//creates a white light that will allow the objects to be visible
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5,5,5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const controls = new OrbitControls(camera, renderer.domElement);

//creates objects that will act as stars and randomly places them
function addStars(){
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({color: 0xffffff});
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
  star.position.set(x, y, z);
  scene.add(star);
}


//randomly places stars throughout the webpage
Array(150).fill().forEach(addStars);

//creates the background and applies the texture
const spaceTexture = new THREE.TextureLoader().load('space.jpg');
scene.background = spaceTexture;

const sunTexture = new THREE.TextureLoader().load('sun.jpg');
const sun = new THREE.Mesh(
  new THREE.SphereGeometry(8, 32, 32),
  new THREE.MeshStandardMaterial({map: sunTexture})
);

const mercuryTexture = new THREE.TextureLoader().load('mercury.jpg');
const mercury = new THREE.Mesh(
  new THREE.SphereGeometry(2, 32, 32),
  new THREE.MeshStandardMaterial({map: mercuryTexture})
);

const venusTexture = new THREE.TextureLoader().load('venus.jpg');
const venus = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({map: venusTexture})
);

const earthTexture = new THREE.TextureLoader().load('earth.jpg');
const earth = new THREE.Mesh(
  new THREE.SphereGeometry(4, 32, 32),
  new THREE.MeshStandardMaterial({map: earthTexture})
);

const moonTexture = new THREE.TextureLoader().load('moon.jpg');
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({map: moonTexture})
);

const marsTexture = new THREE.TextureLoader().load('mars.jpg');
const mars = new THREE.Mesh(
  new THREE.SphereGeometry(4, 32, 32),
  new THREE.MeshStandardMaterial({map: marsTexture})
);

const jupiterTexture = new THREE.TextureLoader().load('jupiter.jpg');
const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(7, 32, 32),
  new THREE.MeshStandardMaterial({map: jupiterTexture})
);

const saturnTexture = new THREE.TextureLoader().load('saturn.jpg');
const saturn = new THREE.Mesh(
  new THREE.SphereGeometry(6, 32, 32),
  new THREE.MeshStandardMaterial({map: saturnTexture})
);

const uranusTexture = new THREE.TextureLoader().load('uranus.jpg');
const uranus = new THREE.Mesh(
  new THREE.SphereGeometry(5, 32, 32),
  new THREE.MeshStandardMaterial({map: uranusTexture})
);

const neptuneTexture = new THREE.TextureLoader().load('neptune.jpg');
const neptune = new THREE.Mesh(
  new THREE.SphereGeometry(5, 32, 32),
  new THREE.MeshStandardMaterial({map: neptuneTexture})
);

const plutoTexture = new THREE.TextureLoader().load('pluto.jpg');
const pluto = new THREE.Mesh(
  new THREE.SphereGeometry(4, 32, 32),
  new THREE.MeshStandardMaterial({map: plutoTexture})
);

//adding the different objects to the scene so the user can see them
scene.add(sun);
//scene.add(mercury);
//scene.add(venus);
//scene.add(earth);
//scene.add(moon);
//scene.add(mars);
//scene.add(jupiter);
//scene.add(saturn);
//scene.add(uranus);
//scene.add(neptune);
//scene.add(pluto);

//setting object positions to make it appear as the user scrolls
sun.position.z = 30;
sun.position.setX(-10);

//this function moves the camera so that the object looks as though it is moving while the user scrolls through the web page
function moveCamera(){
  const t = document.body.getBoundingClientRect().top;
  sun.rotation.x += 0.5;
  sun.rotation.y += 0.075;
  sun.rotation.z += 0.05;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.position.y = t * -0.0002;
}
document.body.onscroll = moveCamera;
moveCamera();


//function that will render the scene and animate the objects on the canvas
function animate(){
  requestAnimationFrame(animate);

  sun.rotation.x += 0.005;
  mercury.rotation.x += 0.005;
  venus.rotation.x += 0.005;
  earth.rotation.x += 0.005;
  moon.rotation.x += 0.005;
  mars.rotation.x += 0.005;
  jupiter.rotation.x += 0.005;
  saturn.rotation.x += 0.005;
  uranus.rotation.x += 0.005;
  neptune.rotation.x += 0.005;
  pluto.rotation.x += 0.005;
  renderer.render(scene, camera);
}
animate();