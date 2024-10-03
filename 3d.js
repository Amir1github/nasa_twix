import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
import {
  starsTexture,
  sunTexture,
  mercuryTexture,
  venusTexture,
  earthTexture,
  marsTexture,
  jupiterTexture,
  saturnTexture,
  saturnRingTexture,
  uranusRingTexture,
  uranusTexture,
  neptuneTexture,
  
} from "./images.js";

/* =================== LIST OF CONTENTS ======================== */
// Set the time (in milliseconds) after which the page should reload due to inactivity
const mybutton = document.getElementById("view3d");
mybutton.addEventListener('click', check);
// const loader = new GLTFLoader();
function check(){
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  100000
);

const orbit = new OrbitControls(camera, renderer.domElement);
orbit.maxDistance = 1000;
camera.position.set(-90, 140, 400);
orbit.update();

const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

const textureLoader = new THREE.TextureLoader();
const sphereGeo = new THREE.SphereGeometry(1000, 100, 100); 
const starsTextureMaterial = new THREE.MeshBasicMaterial({
  map: textureLoader.load("./stars.jpg"), 
  side: THREE.BackSide, 
});
const starsSphere = new THREE.Mesh(sphereGeo, starsTextureMaterial);
scene.add(starsSphere); 
const sunGeo = new THREE.SphereGeometry(16, 30, 30);
const sunMat = new THREE.MeshBasicMaterial({
  map: textureLoader.load(sunTexture),
});
const sun = new THREE.Mesh(sunGeo, sunMat);
scene.add(sun);
function createPlanet(size, texture, position, ring) {
  const geo = new THREE.SphereGeometry(size, 30, 30);
  const mat = new THREE.MeshStandardMaterial({
    map: textureLoader.load(texture),
  });
  const mesh = new THREE.Mesh(geo, mat);
  const meshObj = new THREE.Object3D();
  meshObj.add(mesh);

  if (ring) {
    const ringGeo = new THREE.RingGeometry(
      ring.innerRadius,
      ring.outerRadius,
      32
    );
    const ringMat = new THREE.MeshBasicMaterial({
      map: textureLoader.load(ring.texture),
      side: THREE.DoubleSide,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    meshObj.add(ringMesh);
    ringMesh.position.x = position;
    ringMesh.rotation.x = Math.PI * -0.5;
  }

  scene.add(meshObj);
  mesh.position.x = position;

  return { mesh, meshObj };
}

let mercury = createPlanet(3.2, mercuryTexture, 28);
const venus = createPlanet(5.8, venusTexture, 44);
const earth = createPlanet(6, earthTexture, 62);
const mars = createPlanet(4, marsTexture, 78);
const jupiter = createPlanet(12, jupiterTexture, 100);
const saturn = createPlanet(10, saturnTexture, 138, {
  innerRadius: 10,
  outerRadius: 20,
  texture: saturnRingTexture,
});
const uranus = createPlanet(7, uranusTexture, 176, {
  innerRadius: 7,
  outerRadius: 12,
  texture: uranusRingTexture,
});
const neptune = createPlanet(7, neptuneTexture, 200);
const pointLight = new THREE.PointLight(0xffffff, 2.5, 300);
scene.add(pointLight);

function animate() {
  sun.rotateY(0.004);
  mercury.mesh.rotateY(0.004);
  venus.mesh.rotateY(0.002);
  earth.mesh.rotateY(0.02);
  mars.mesh.rotateY(0.018);
  jupiter.mesh.rotateY(0.04);
  saturn.mesh.rotateY(0.038);
  uranus.mesh.rotateY(0.03);
  neptune.mesh.rotateY(0.032);

  mercury.meshObj.rotateY(0.04);
  // const screenPos1 = toScreenPosition(mercury.mesh, camera);
  // MercuryHtml.style.left = `${screenPos1.x}px`;
  // MercuryHtml.style.top = `${screenPos1.y}px`;
  venus.meshObj.rotateY(0.015);
  // const screenPos2 = toScreenPosition(venus.mesh, camera);
  // VenusHtml.style.left = `${screenPos2.x}px`;
  // VenusHtml.style.top = `${screenPos2.y}px`;
  earth.meshObj.rotateY(0.01);
  // const screenPos3 = toScreenPosition(earth.mesh, camera);
  // EarthHtml.style.left = `${screenPos3.x}px`;
  // EarthHtml.style.top = `${screenPos3.y}px`;
  mars.meshObj.rotateY(0.008);
  // const screenPos4 = toScreenPosition(mars.mesh, camera);
  // MarsHtml.style.left = `${screenPos4.x}px`;
  // MarsHtml.style.top = `${screenPos4.y}px`;
  jupiter.meshObj.rotateY(0.002);
  // const screenPos5 = toScreenPosition(jupiter.mesh, camera);
  // JupiterHtml.style.left = `${screenPos5.x}px`;
  // JupiterHtml.style.top = `${screenPos5.y}px`;
  saturn.meshObj.rotateY(0.0009);
  // const screenPos6 = toScreenPosition(saturn.mesh, camera);
  // SaturnHtml.style.left = `${screenPos6.x}px`;
  // SaturnHtml.style.top = `${screenPos6.y}px`;
  uranus.meshObj.rotateY(0.0004);
  // const screenPos7 = toScreenPosition(uranus.mesh, camera);
  // UranusHtml.style.left = `${screenPos7.x}px`;
  // UranusHtml.style.top = `${screenPos7.y}px`;
  neptune.meshObj.rotateY(0.0001);
  // const screenPos8 = toScreenPosition(neptune.mesh, camera);
  // NeptuneHtml.style.left = `${screenPos8.x}px`;
  // NeptuneHtml.style.top = `${screenPos8.y}px`;
  
  // const screenPos9= toScreenPosition(sun, camera);
  // SunHtml.style.left = `${screenPos9.x}px`;
  // SunHtml.style.top = `${screenPos9.y}px`;
  renderer.render(scene, camera);  
  requestAnimationFrame(animate);
  }
  
animate();
}
getElementById("maincontent").style.visibility = "hidden";
