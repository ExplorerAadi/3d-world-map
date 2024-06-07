import { useRef } from "react";
import { Group, Object3DEventMap, TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import SpherePoints from "./SpherePoints";
import mapData from "./map.json";

export const Globe = () => {
  const { camera, gl } = useThree();
  const groupRef = useRef<Group<Object3DEventMap> | null>(null);

  return (
    <>
      <OrbitControls args={[camera, gl.domElement]} />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1} />
      <group ref={groupRef}>
        <mesh scale={1.5}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial
            map={new TextureLoader().load("./textures/earth_4k.jpg")}
            blending={1}
          />
        </mesh>
      </group>
      {mapData["Co-ordinates"].map((point) => (
        <SpherePoints
          key={`${point.lat}-${point.long}`}
          radius={1.5}
          lat={point.lat}
          long={point.long}
          pointCount={1}
        />
      ))}
    </>
  );
};
