import { useRef } from "react";
import { Group, Object3DEventMap } from "three";
import { OrbitControls, useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { SpherePoints } from "./SpherePoints";

export const Globe = () => {
  const { camera, gl } = useThree();
  const groupRef = useRef<Group<Object3DEventMap> | null>(null);
  const worldMap = useTexture("./textures/earth_10k.jpg");

  return (
    <>
      <OrbitControls args={[camera, gl.domElement]} />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={4} />
      {/* <gridHelper args={[15, 30, "#cc0", "#999"]} rotation={[0, -Math.PI, 0]} /> */}
      <group ref={groupRef}>
        <mesh scale={1.5} rotation={[0, -Math.PI / 2, 0]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial map={worldMap} attach="material" />
        </mesh>
      </group>
      {/* {mapData["Co-ordinates"].map((point) => ( */}
      <SpherePoints radius={1.5} />
      {/* ))} */}
    </>
  );
};
