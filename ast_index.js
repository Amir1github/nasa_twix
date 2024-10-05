import from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
let scene, camera, renderer, asteroid, asteroids, currentAsteroid = 0;

function init() {
    // Создание сцены
    scene = new THREE.Scene();
    
    // Создание камеры
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Создание рендерера
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Массив астероидов (простые модели)
    asteroids = [
        createAsteroid(),
        createAsteroid(),
        createAsteroid()
    ];

    // Добавляем первый астероид на сцену
    asteroid = asteroids[currentAsteroid];
    scene.add(asteroid);

    // Настройка кнопок
    document.getElementById("prev").addEventListener("click", showPreviousAsteroid);
    document.getElementById("next").addEventListener("click", showNextAsteroid);

    animate();
}

function createAsteroid() {
    const geometry = new THREE.IcosahedronGeometry(1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x808080 });
    const asteroid = new THREE.Mesh(geometry, material);

    // Добавляем освещение
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(5, 5, 5);
    asteroid.add(light);

    return asteroid;
}

function showPreviousAsteroid() {
    scene.remove(asteroid);
    currentAsteroid = (currentAsteroid - 1 + asteroids.length) % asteroids.length;
    asteroid = asteroids[currentAsteroid];
    scene.add(asteroid);
}

function showNextAsteroid() {
    scene.remove(asteroid);
    currentAsteroid = (currentAsteroid + 1) % asteroids.length;
    asteroid = asteroids[currentAsteroid];
    scene.add(asteroid);
}

function animate() {
    requestAnimationFrame(animate);
    asteroid.rotation.x += 0.01;
    asteroid.rotation.y += 0.01;
    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

init();
