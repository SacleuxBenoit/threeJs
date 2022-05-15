const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(100, 100, 100);
const wireframe = new THREE.EdgesGeometry(geometry);

const line = new THREE.LineSegments(wireframe);
line.material.depthTest = true;
line.material.opacity = 0.50;
line.material.transparent = false;

scene.add(line);

camera.position.z = 150;
camera.position.x = 10

function animateSphere(){
	requestAnimationFrame(animateSphere);
	renderer.render(scene, camera);
    line.rotation.x += 0.0012;
    line.rotation.y += 0.0005;
}
animateSphere();

// Change color for the cube
// const colorCube = new THREE.Color("red");

// const geometry = new THREE.TorusGeometry(6,3,50,100);
// const material = new THREE.MeshBasicMaterial( { color: colorCube } );
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);