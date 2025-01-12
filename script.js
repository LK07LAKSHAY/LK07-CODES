// THREE.js 3D Visualization Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 2 / 400, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth * 0.8, 400);
document.getElementById("3d-viewer").appendChild(renderer.domElement);

// Create a black hole sphere
const geometry = new THREE.SphereGeometry(5, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
const blackHole = new THREE.Mesh(geometry, material);
scene.add(blackHole);

// Adding stars for effect
const starsGeometry = new THREE.BufferGeometry();
const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });
const starCount = 5000;
const starVertices = [];

for (let i = 0; i < starCount; i++) {
    const x = (Math.random() - 0.5) * 2000;
    const y = (Math.random() - 0.5) * 2000;
    const z = (Math.random() - 0.5) * 2000;
    starVertices.push(x, y, z);
}
starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
const stars = new THREE.Points(starsGeometry, starMaterial);
scene.add(stars);

camera.position.z = 20;

function animate() {
    requestAnimationFrame(animate);
    blackHole.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
