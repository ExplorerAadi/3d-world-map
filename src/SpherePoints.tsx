import { useLoader } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { BufferAttribute, Points, TextureLoader } from "three";

interface SpherePointsProps {
  radius: number;
  pointCount: number;
  lat: number;
  long: number;
}

const SpherePoints: React.FC<SpherePointsProps> = ({
  radius,
  pointCount,
  lat,
  long,
}) => {
  const pointsRef = useRef<Points>(null);
  const pointImg = useLoader(TextureLoader, "./textures/circle.png");

  useEffect(() => {
    const positions = new Float32Array(pointCount * 3);

    for (let i = 0; i < pointCount; i++) {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = long * (Math.PI / 180);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    if (pointsRef?.current) {
      pointsRef.current.geometry.setAttribute(
        "position",
        new BufferAttribute(positions, 3)
      );
      console.log(positions);
    }
  }, [lat, long, pointCount, radius]);

  return (
    <points ref={pointsRef}>
      <pointsMaterial
        map={pointImg}
        attach="material"
        size={0.1}
        sizeAttenuation
        alphaTest={0.5}
      />
    </points>
  );
};

export default SpherePoints;
