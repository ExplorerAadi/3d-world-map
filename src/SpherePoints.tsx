import { useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef } from "react";
import {
  BackSide,
  BufferGeometry,
  Points,
  PointsMaterial,
  TextureLoader,
} from "three";
import { latLongToVector3 } from "./utils";
import mapData from "./map.json";

interface SpherePointsProps {
  radius: number;
}

export const SpherePoints: React.FC<SpherePointsProps> = ({ radius }) => {
  const pointsRef = useRef<Points>(null);
  const pointImg = useLoader(TextureLoader, "./textures/circle.png");

  const positions = useMemo(() => {
    return mapData["Coordinates"].map((point) =>
      latLongToVector3(point.lat, point.lng, radius)
    );
  }, [radius]);

  useFrame((state) => {
    const elapsedTime = state.clock.elapsedTime;

    const material = pointsRef.current?.material as PointsMaterial;
    material.size = Math.abs(Math.sin(elapsedTime * 0.8)) * 0.1 + 0.05;
  });

  useEffect(() => {
    if (pointsRef.current) {
      const geometry = new BufferGeometry().setFromPoints(positions);
      pointsRef.current.geometry = geometry;
    }
  }, [positions]);

  return (
    <>
      <points ref={pointsRef} position={[0, 0, 0]}>
        <pointsMaterial
          map={pointImg}
          color="#fffa79"
          attach="material"
          size={0.1}
          sizeAttenuation
          alphaTest={0.5}
          shadowSide={BackSide}
        />
      </points>
    </>
  );
};
