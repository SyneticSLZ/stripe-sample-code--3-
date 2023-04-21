import * as THREE from 'https://cdn.skypack.dev/three@0.136.0';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls.js'

// const loader = new GLTFLoader();
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setClearColor(0x000000, 0);
const container = document.getElementById('about-title');
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// loader.load('./12345.glb', function (gltf) {
//   console.log('Model loaded successfully');
//   scene.add(gltf.scene);
  
// }, undefined, function (error) {
//   console.log(error);
// });

const boxGeometry = new THREE.BoxGeometry(3,3,3);
const torusGeometry = new THREE.TorusGeometry(10, 3, 16, 100);

const material = new THREE.MeshBasicMaterial({ color: 0xaaccff });
const material2 = new THREE.MeshBasicMaterial({ color: 0x33aa99 });

const cube = new THREE.Mesh(boxGeometry, material);
const torus = new THREE.Mesh(torusGeometry, material2);


const scene = new THREE.Scene({ alpha: true });
// scene.background = (0x000000, 0);

const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);

// camera.position.z = 5;
camera.position.set(0, 0, 5);
camera.lookAt(0, 0, 0);
const light = new THREE.AmbientLight(0xffffff, 1);
const controls = new OrbitControls(camera, renderer.domElement);
controls.screenSpacePanning = true;
controls.enablePan = false;
controls.zoomSpeed = 0.2;
controls.rotateSpeed = 0.5;
controls.minDistance = 5;
controls.maxDistance = 40;

scene.add(light);
scene.add(cube);

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();