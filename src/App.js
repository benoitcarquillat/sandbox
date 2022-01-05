import React, { useRef } from 'react';
import { useEffect } from 'react/cjs/react.development';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const App = () => {
  const sceneRef = useRef();
  const renderer = new THREE.WebGLRenderer();
  const scene = new THREE.Scene();

  // on initialise la camera que l’on place ensuite sur la scène
  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    1,
    10000,
  );

  // on créé un  cube au quel on définie un matériau puis on l’ajoute à la scène
  const geometry = new THREE.BoxGeometry(200, 200, 200);
  const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
  });
  const mesh = new THREE.Mesh(geometry, material);
  const controls = new OrbitControls(camera, renderer.domElement);

  const animate = () => {
    controls.update();
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.001;
    mesh.rotation.y += 0.002;
    renderer.render(scene, camera);
  };

  useEffect(() => {
    // Set scene on init
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef?.current.appendChild(renderer.domElement);

    // add camera
    camera.position.set(0, 0, 1000);
    scene.add(camera);

    // add geometry
    scene.add(mesh);

    // on effectue le rendu de la scène
    renderer.render(scene, camera);

    // Run animation
    animate();
  });

  return <div ref={sceneRef} id="container"></div>;
};

export default App;
