import { useRef } from "react";
import { Group, Object3DEventMap, TextureLoader } from "three";
import { OrbitControls, Stars } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export const Globe = () => {
  const { camera, gl } = useThree();
  const groupRef = useRef<Group<Object3DEventMap> | null>(null);

  return (
    <>
      <OrbitControls args={[camera, gl.domElement]} />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1} />
      <Stars
        radius={1}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <group ref={groupRef}>
        <mesh scale={1.5}>
          <sphereGeometry args={[1.5, 100, 100]} />
          <meshBasicMaterial
            map={new TextureLoader().load("./textures/earth_4k.jpg")}
            blending={1}
          />
        </mesh>
      </group>
    </>
  );
};
