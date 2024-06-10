import { useRef } from "react";
import { Group, Object3DEventMap, Vector3 } from "three";
import { OrbitControls, useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { SpherePoints } from "./SpherePoints";

export const Globe = () => {
  const { camera, gl } = useThree();
  const groupRef = useRef<Group<Object3DEventMap> | null>(null);
  const worldMap = useTexture("./textures/earth_10k.jpg");

  useFrame((state) => {
    const elapsedTime = state.clock.elapsedTime;
    const axis = new Vector3(0, 1, 0);

    const sphere = groupRef.current as Group<Object3DEventMap>;
    sphere.setRotationFromAxisAngle(axis, elapsedTime * 0.2);
  });

  return (
    <>
      <OrbitControls args={[camera, gl.domElement]} />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={4} />
      <group ref={groupRef}>
        <mesh scale={1.5} rotation={[0, -Math.PI / 2, 0]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial map={worldMap} attach="material" />
        </mesh>
        <SpherePoints radius={1.5} />
      </group>
    </>
  );
};
