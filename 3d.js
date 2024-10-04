let animID;

function check() {
  document.getElementById("maincontent").style.visibility = "hidden";
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

  // Other planets initialization
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
    venus.meshObj.rotateY(0.015);
    earth.meshObj.rotateY(0.01);
    mars.meshObj.rotateY(0.008);
    jupiter.meshObj.rotateY(0.002);
    saturn.meshObj.rotateY(0.0009);
    uranus.meshObj.rotateY(0.0004);
    neptune.meshObj.rotateY(0.0001);

    renderer.render(scene, camera);
    animID = requestAnimationFrame(animate);
  }

  animate();
}

mybutton.addEventListener('click', check);

// Stop animation and show the main content again
function second_check() {
  cancelAnimationFrame(animID);
  document.getElementById("maincontent").style.visibility = "visible";
}

mybutton.addEventListener('click', second_check);

