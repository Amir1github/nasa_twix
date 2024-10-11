document.getElementById('asteroids').addEventListener('click', function() {
        window.open('ast.html', '_blank');
});

window.addEventListener('load', function() {
  // Предзагрузка всех изображений
  document.querySelectorAll('img').forEach(function(img) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = img.src;
    document.head.appendChild(link);
  });

  // Предзагрузка всех CSS
  document.querySelectorAll('link[rel="stylesheet"]').forEach(function(css) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = css.href;
    document.head.appendChild(link);
  });

  // Предзагрузка всех JavaScript файлов
  document.querySelectorAll('script[src]').forEach(function(script) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'script';
    link.href = script.src;
    document.head.appendChild(link);
  });
});


import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';



let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Instantiate a loader
let loader = new GLTFLoader();



let mercuryMenuBtn = document.getElementById("mercury-menu")
let venusMenuBtn = document.getElementById("venus-menu")
let earthMenuBtn = document.getElementById("earth-menu")
let marsMenuBtn = document.getElementById("mars-menu")
let jupiterMenuBtn = document.getElementById("jupiter-menu")
let saturnMenuBtn = document.getElementById("saturn-menu")
let uranusMenuBtn = document.getElementById("uranus-menu")
let neptuneMenuBtn = document.getElementById("neptune-menu")
let sunMenuBtn = document.getElementById("sun-menu")
let moonMenuBtn = document.getElementById("moon-menu")
let cometMenuBtn = document.getElementById("comet-menu")
let meteorMenuBtn = document.getElementById("meteor-menu")
let satelliteMenuBtn = document.getElementById("satellite-menu")
let alienMenuBtn = document.getElementById("alien-menu")

let mercuryMobileMenuBtn = document.getElementById("mobile-mercury-menu")
let venusMobileMenuBtn = document.getElementById("mobile-venus-menu")
let earthMobileMenuBtn = document.getElementById("mobile-earth-menu")
let marsMobileMenuBtn = document.getElementById("mobile-mars-menu")
let jupiterMobileMenuBtn = document.getElementById("mobile-jupiter-menu")
let saturnMobileMenuBtn = document.getElementById("mobile-saturn-menu")
let uranusMobileMenuBtn = document.getElementById("mobile-uranus-menu")
let neptuneMobileMenuBtn = document.getElementById("mobile-neptune-menu")
let sunMobileMenuBtn = document.getElementById("mobile-sun-menu")
let moonMobileMenuBtn = document.getElementById("mobile-moon-menu")


/* =========================== Individual Planets ===================== */
let mercury = document.getElementById('mercury');
let venus = document.getElementById('venus');
let earth = document.getElementById('earth');
let mars = document.getElementById('mars');
let jupiter = document.getElementById('jupiter');
let saturn = document.getElementById('saturn');
let neptune = document.getElementById('neptune');
let uranus = document.getElementById('uranus');
let sun = document.getElementById('sun')

let moonImage = './assets/moon-real-8k.glb';
let earthImage = './assets/earth-moon-real-8k.glb';
let sunImage = './assets/sun-real-8k.glb';
let mercuryImage = './assets/mercury-real-8k.glb';
let venusImage = './assets/venus-real-8k.glb';
let marsImage = './assets/mars-real-8k.glb';
let jupiterImage = './assets/jupiter-real-8k.glb';
let saturnImage = './assets/saturn-real-8k.glb';
let neptuneImage = './assets/neptune-real-8k.glb';
let uranusImage = './assets/uranus-real-8k.glb';
let asteroidImage = './assets/asteroids.glb';
let makemakeImage = "./assets/makemake.glb"
let planetImage;

let counter = 0;

earth.addEventListener("click", earthInteraction);
mercury.addEventListener('click', mercuryInteraction);
venus.addEventListener('click', venusInteraction);
mars.addEventListener('click', marsInteraction);
jupiter.addEventListener('click', jupiterInteraction);
saturn.addEventListener('click', saturnInteraction);
uranus.addEventListener('click', uranusInteraction);
neptune.addEventListener('click', neptuneInteraction);
sun.addEventListener('click', sunInteraction);

earth.addEventListener("touchstart", earthInteraction);

earthMenuBtn.addEventListener("click", earthInteraction);
mercuryMenuBtn.addEventListener('click', mercuryInteraction);
venusMenuBtn.addEventListener('click', venusInteraction);
marsMenuBtn.addEventListener('click', marsInteraction);
jupiterMenuBtn.addEventListener('click', jupiterInteraction);
saturnMenuBtn.addEventListener('click', saturnInteraction);
uranusMenuBtn.addEventListener('click', uranusInteraction);
neptuneMenuBtn.addEventListener('click', neptuneInteraction);
sunMenuBtn.addEventListener('click', sunInteraction);
moonMenuBtn.addEventListener('click', moonInteraction);
meteorMenuBtn.addEventListener('click', meteorInteraction);
cometMenuBtn.addEventListener('click', cometInteraction);

satelliteMenuBtn.addEventListener('click', satelliteInteraction);
alienMenuBtn.addEventListener('click', alienInteraction);

earthMobileMenuBtn.addEventListener("click", earthInteraction);
mercuryMobileMenuBtn.addEventListener('click', mercuryInteraction);
venusMobileMenuBtn.addEventListener('click', venusInteraction);
marsMobileMenuBtn.addEventListener('click', marsInteraction);
jupiterMobileMenuBtn.addEventListener('click', jupiterInteraction);
saturnMobileMenuBtn.addEventListener('click', saturnInteraction);
uranusMobileMenuBtn.addEventListener('click', uranusInteraction);
neptuneMobileMenuBtn.addEventListener('click', neptuneInteraction);
sunMobileMenuBtn.addEventListener('click', sunInteraction);
moonMobileMenuBtn.addEventListener('click', moonInteraction);


let planetImageFile;
let planetDisplay;



function mercuryInteraction() {
    planetImageFile = mercuryImage;
    counter = 0;
    isAnimationRunning = true;
    populatePlanet()
}
function venusInteraction() {
    planetImageFile = venusImage;
    counter = 0;
    isAnimationRunning = true;
    populatePlanet()
}
function earthInteraction() {
    planetImageFile = earthImage;
    counter = 0;
    isAnimationRunning = true;
    populatePlanet()
}
function marsInteraction() {
    planetImageFile = marsImage;
    counter = 0;
    isAnimationRunning = true;
    populatePlanet()
}

function jupiterInteraction() {
    planetImageFile = jupiterImage;
    counter = 0;
    isAnimationRunning = true;
    populatePlanet()
}
function saturnInteraction() {
    planetImageFile = saturnImage;
    counter = 0;
    isAnimationRunning = true;
    populatePlanet()
}

function uranusInteraction() {
    planetImageFile = uranusImage;
    counter = 0;
    isAnimationRunning = true;
    populatePlanet()
}
function neptuneInteraction() {
    planetImageFile = neptuneImage;
    counter = 0;
    isAnimationRunning = true;
    populatePlanet()
}
function sunInteraction() {
    planetImageFile = sunImage;
    counter = 0;
    isAnimationRunning = true;
    populatePlanet()
}
function moonInteraction() {
    planetImageFile = moonImage;
    counter = 0;
    isAnimationRunning = true;
    populatePlanet()
}

function meteorInteraction() {
    planetImageFile = asteroidImage;
    counter = 0;
    isAnimationRunning = true;
    populatePlanet()
}

let makemakeBtn = document.querySelector('.makemake-btn')
makemakeBtn.addEventListener("click", makemakeInteraction);

function makemakeInteraction() {
    planetImageFile = makemakeImage;
    counter = 0;
    isAnimationRunning = true;
    populatePlanet()
}



let isAnimationRunning = true;



let ambientLight = new THREE.AmbientLight(0xffffff, 0.02); // Color, Intensity
scene.add(ambientLight);



let directionalLight = new THREE.DirectionalLight(0xffffff, 5); // Color, Intensity
directionalLight.position.set(1, 0.7, 1); // Set the direction
scene.add(directionalLight);

directionalLight.castShadow = true;



function populatePlanet() {

    if (planetDisplay) {
        scene.remove(planetDisplay);
    }

    // Load a glTF resource
    loader.load(
        // resource URL
        planetImageFile,
        // called when the resource is loaded
        function (gltf) {
            planetDisplay = gltf.scene
            // planetDisplay.position.set(1, 1, 1);
            scene.add(planetDisplay);

        },

        function (xhr) {

            console.log((xhr.loaded / xhr.total * 100) + '% loaded');

        },

        function (error) {

            console.log('An error happened');

        }
    );

    let planetImageContainerReal = document.getElementById('planet-image-container')
    let renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = 'absolute'; 
    // renderer.domElement.style.top = '0'; 
    // renderer.domElement.style.left = '0'; 
    for (let i = 0; i < 100; i++) {
        let star = document.createElement('span');
        let randomSize = Math.ceil((Math.random() * 3));
    if (window.innerWidth < 600) {
        randomSize = Math.ceil((Math.random() * 1));
    }
        let width = window.innerWidth;
        let starPos = (Math.random() * width);
        star.classList.add('star');
        star.style.opacity = (Math.random());
        star.style.top = (Math.random() * 100) + '%';
        star.style.left = starPos + 'px';
        star.style.width = randomSize + 'px';
        star.style.height = randomSize + 'px';
        star.style.animation = `twinkle 7s linear infinite`;
        star.style.animationDelay = (Math.random() * 20) + 's';
        planetImageContainerReal.appendChild(star);
    }
    planetImageContainerReal.appendChild(renderer.domElement);



    if (window.innerWidth < 650) {
        if (n == 5) {
            camera.position.z = 2.5;
            camera.position.set(0, 0, camera.position.z);
        } else {
            camera.position.z = 1.75;
            camera.position.set(0, 0, camera.position.z);
        }
    } else {
        if (n == 5) {
            camera.position.z = 1.5;
            camera.position.set(0, 0, camera.position.z);
        } else {
            camera.position.z = 0.85;
            camera.position.set(0, 0, camera.position.z);
        }
    }


    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.antialias = true;

    const minDistance = 0.5;
    const maxDistance = 3;

    let controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = minDistance;
    controls.maxDistance = maxDistance;






    let modalCloseBtn = document.getElementById('close-btn')

    modalCloseBtn.addEventListener('click', closeModal);


    function closeModal() {

        isAnimationRunning = false;
    }



    function animate() {
        if (isAnimationRunning) {
            requestAnimationFrame(animate);
            planetDisplay.rotation.y += 0.0005;
            renderer.render(scene, camera);
        }
    }



    animate();
}
