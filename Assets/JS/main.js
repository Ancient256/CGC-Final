import * as THREE from './three.module.js'
import {OrbitControls} from './OrbitControls.js'
import {GLTFLoader} from './GLTFLoader.js'

//Setting up Scene
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize( 1920, 1080 );
document.body.appendChild( renderer.domElement );

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, 1920 / 1080, 1, 10000 );
const controls = new OrbitControls( camera, renderer.domElement );
scene.background = new THREE.Color(0x000000);

camera.position.set( 8.5, 8.5, 8.5 );
controls.update();


//Setting Textures

;
const groundTexture = new THREE.TextureLoader().load( './Assets/Textures/Ground.png');


//Setting Particles
let smoke1, smokeGeo;

function particles() {
	const points = [];

	//setting coordinates
	for (let i = 0; i < 5; i++) {
		let smoke = new THREE.Vector3(
			1,
			(Math.random() * 1) + 0.1,
			1
		  );
		  points.push(smoke);
	}

	smokeGeo = new THREE.BufferGeometry().setFromPoints(points);
	let sprite = new THREE.TextureLoader().load("./Assets/Textures/smoke.png");
	let smokeMaterial = new THREE.PointsMaterial({color: 0xC1BFBF, size: 0.2, map: sprite,});

	smoke1 = new THREE.Points(smokeGeo, smokeMaterial);
	

	smoke1.position.set( 0.45,10.04,0.3 );


	scene.add(smoke1);

}  

function animateParticles() {

	smokeGeo.verticesNeedUpdate = true;

	smoke1.position.y += 0.005;
	

	if(smoke1.position.y >= 2.5) {
		smoke1.position.y = 0.2;
	
	}

	smoke1.position.y += 0.005;
	


}

 
//Setting Lighting

function lighting() {

const firelight1 = new THREE.PointLight( 0xFFE4C4, 1, 15 );
firelight1.position.set( 0.55,1.85,0.4 );
const firelight2 = new THREE.PointLight( 0xFFE4C4, 1, 15 );
firelight2.position.set( 0.55,0.85,0.4 );



scene.add( firelight1,firelight2); 

}


//Base
function base() {



const ground_geometry = new THREE.BoxGeometry( 7, 0.7, 7 );
const ground_material = new THREE.MeshLambertMaterial( {color: 0x3984a, map: groundTexture} );
const ground = new THREE.Mesh( ground_geometry, ground_material );
ground.position.y = 0.4; 


scene.add( base,ground, );

}







// 3d Objects Import


//Trees
function trees() {

const tree1 = new GLTFLoader();
tree1.load('./Assets/Imports/tree/tree.gltf', function(tree) {
	tree.scene.scale.set(0.6, 0.6, 0.6);
	tree.scene.position.set(-1.1,0.7,0.7);
	scene.add(tree.scene);
});
const tree2 = new GLTFLoader();
tree2.load('./Assets/Imports/tree/tree.gltf', function(tree) {
	tree.scene.scale.set(0.6, 0.6, 0.6);
	tree.scene.position.set(-1.4,0.7,1.5);
	scene.add(tree.scene);
});
const tree3 = new GLTFLoader();
tree3.load('./Assets/Imports/tree/tree.gltf', function(tree) {
	tree.scene.scale.set(0.6, 0.6, 0.6);
	tree.scene.position.set(-0.5,0.7,1.6);
	scene.add(tree.scene);
});
const tree4 = new GLTFLoader();
tree4.load('./Assets/Imports/tree/tree.gltf', function(tree) {
	tree.scene.scale.set(0.6, 0.6, 0.6);
	tree.scene.position.set(-1,0.7,2.3);
	scene.add(tree.scene);
});
const tree5 = new GLTFLoader();
tree5.load('./Assets/Imports/tree/tree.gltf', function(tree) {
	tree.scene.scale.set(0.6, 0.6, 0.6);
	tree.scene.position.set(0.1,0.7,2.3);
	scene.add(tree.scene);
});
const tree6 = new GLTFLoader();
tree6.load('./Assets/Imports/tree/tree.gltf', function(tree) {
	tree.scene.scale.set(0.9,0.9,0.9);
	tree.scene.position.set(-1.4,0.7,3);
	scene.add(tree.scene);
});
const tree7 = new GLTFLoader();
tree7.load('./Assets/Imports/tree/tree.gltf', function(tree) {
	tree.scene.scale.set(0.6, 0.6, 0.6);
	tree.scene.position.set(-0.4,0.7,3.1);
	scene.add(tree.scene);
});
const tree8 = new GLTFLoader();
tree8.load('./Assets/Imports/tree/tree.gltf', function(tree) {
	tree.scene.scale.set(0.6, 0.6, 0.6);
	tree.scene.position.set(0.9,0.7,3);
	scene.add(tree.scene);
});


const tree9 = new GLTFLoader();
tree9.load('./assets/imports/tree/tree.gltf', function(tree) {
	tree.scene.scale.set(0.6, 0.6, 0.6);
	tree.scene.position.set(0.7,0.7,-1.3);
	scene.add(tree.scene);
});
const tree10 = new GLTFLoader();
tree10.load('./assets/imports/tree/tree.gltf', function(tree) {
	tree.scene.scale.set(0.6, 0.6, 0.6);
	tree.scene.position.set(1.9,0.7,-1.2);
	scene.add(tree.scene);
});
const tree11 = new GLTFLoader();
tree11.load('./assets/imports/tree/tree.gltf', function(tree) {
	tree.scene.scale.set(0.6, 0.6, 0.6);
	tree.scene.position.set(3,0.7,0.7);
	scene.add(tree.scene);
});
const tree12 = new GLTFLoader();
tree12.load('./assets/imports/tree/tree.gltf', function(tree) {
	tree.scene.scale.set(0.6, 0.6, 0.6);
	tree.scene.position.set(2.2,0.7,-0.1);
	scene.add(tree.scene);
});
const tree13 = new GLTFLoader();
tree13.load('./assets/imports/tree/tree.gltf', function(tree) {
	tree.scene.scale.set(0.5,0.5,0.5);
	tree.scene.position.set(2.9,0.7,-0.8);
	scene.add(tree.scene);
});
const tree14 = new GLTFLoader();
tree14.load('./assets/imports/tree/tree.gltf', function(tree) {
	tree.scene.scale.set(1,1,1);
	tree.scene.position.set(1.3,0.7,-0.6);
	scene.add(tree.scene);
});

}


//Fire
function fire() {

const fire = new GLTFLoader();
fire.load('./Assets/Imports/campfire/scene.gltf', function(fire) {
	fire.scene.scale.set(0.06,0.05,0.1)
	fire.scene.position.set(1.45,0.75,1.2);
	scene.add(fire.scene);
});

}



particles();
lighting();
base();


trees();
fire();


function animate() {

	requestAnimationFrame( animate );

	animateParticles();

	controls.update();

	renderer.render( scene, camera );

}
animate();
