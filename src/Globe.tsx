import { useRef } from "react";
import { Group, Object3DEventMap } from "three";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { getFresnelMat } from "./getFresnelMat";
import { getStarfield } from "./getStarfield";

export const Globe = () => {
  const { camera, gl } = useThree();
  const groupRef = useRef<Group<Object3DEventMap> | null>(null);

  // const w = window.innerWidth;
  // const h = window.innerHeight;
  // //   const scene = new THREE.Scene();
  // //   const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
  // camera.position.z = 5;
  // // THREE.ColorManagement.enabled = true;

  // earthGroup.rotation.z = (-23.4 * Math.PI) / 180;
  // const detail = 12;
  // const loader = new THREE.TextureLoader();
  // const geometry = new THREE.IcosahedronGeometry(1, detail);
  // const material = new THREE.MeshPhongMaterial({
  //   map: loader.load("./textures/00_earthmap1k.jpg"),
  //   specularMap: loader.load("./textures/02_earthspec1k.jpg"),
  //   bumpMap: loader.load("./textures/01_earthbump1k.jpg"),
  //   bumpScale: 0.04,
  // });
  // // material.map.colorSpace = THREE.SRGBColorSpace;
  // const earthMesh = new THREE.Mesh(geometry, material);
  // earthGroup.add(earthMesh);

  // const lightsMat = new THREE.MeshBasicMaterial({
  //   map: loader.load("./textures/03_earthlights1k.jpg"),
  //   blending: THREE.AdditiveBlending,
  // });
  // const lightsMesh = new THREE.Mesh(geometry, lightsMat);
  // earthGroup.add(lightsMesh);

  // const cloudsMat = new THREE.MeshStandardMaterial({
  //   map: loader.load("./textures/04_earthcloudmap.jpg"),
  //   transparent: true,
  //   opacity: 0.8,
  //   blending: THREE.AdditiveBlending,
  //   alphaMap: loader.load("./textures/05_earthcloudmaptrans.jpg"),
  //   // alphaTest: 0.3,
  // });
  // const cloudsMesh = new THREE.Mesh(geometry, cloudsMat);
  // cloudsMesh.scale.setScalar(1.003);
  // earthGroup.add(cloudsMesh);

  // const fresnelMat = getFresnelMat();
  // const glowMesh = new THREE.Mesh(geometry, fresnelMat);
  // glowMesh.scale.setScalar(1.01);
  // earthGroup.add(glowMesh);

  // const stars = getStarfield({ numStars: 2000 });
  // scene.add(stars);

  // const sunLight = new THREE.DirectionalLight(0xffffff, 2.0);
  // sunLight.position.set(-2, 0.5, 1.5);
  // scene.add(sunLight);

  // function animate() {
  //   requestAnimationFrame(animate);

  //   earthMesh.rotation.y += 0.002;
  //   lightsMesh.rotation.y += 0.002;
  //   cloudsMesh.rotation.y += 0.0023;
  //   glowMesh.rotation.y += 0.002;
  //   stars.rotation.y -= 0.0002;
  //   renderer.render(scene, camera);
  // }

  // animate();

  // function handleWindowResize() {
  //   camera.aspect = window.innerWidth / window.innerHeight;
  //   camera.updateProjectionMatrix();
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  // }
  // window.addEventListener("resize", handleWindowResize, false);
  return (
    <>
      <OrbitControls args={[camera, gl.domElement]} />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />
      <group ref={groupRef}>
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial color="blue" />
        </mesh>
      </group>
    </>
  );
};
