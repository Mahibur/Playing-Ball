import * as THREE from 'three';
import { OrbitControls } from "jsm/controls/OrbitControls.js";
// renderer making
let w = window.innerWidth;
let h = window.innerHeight;
let renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(w,h);
document.body.appendChild(renderer.domElement);

// camera setup
let fov = 75;
let aspect = w/h;
let near = 0.1;
let far = 10;
let camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

// scene making

let scene = new THREE.Scene();

// basic squre
let control = new OrbitControls(camera, renderer.domElement);
control.enableDamping = true;
control.dampingFactor = 0.03;

let body = new THREE.IcosahedronGeometry(1.0, 2)
let texture1 = new THREE.MeshStandardMaterial({
    color: 0x8b51ff,
    flatShading: true,
})
let mesh = new THREE.Mesh(body, texture1);
scene.add(mesh);
let texture2 = new THREE.MeshBasicMaterial({
    color: 0xc,
    wireframe: true,
})
let mesh1 = new THREE.Mesh(body, texture2);
mesh.add(mesh1);
let light = new THREE.HemisphereLight(0xffffff, 0x000000);
scene.add(light)

function animation(t=0){
    requestAnimationFrame(animation);
    mesh.rotation.y=t*0.0001;
    renderer.render(scene, camera);
    control.update();
}
animation()
