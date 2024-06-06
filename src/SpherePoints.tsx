import React, { useEffect, useRef } from "react";
import { BufferAttribute, Points } from "three";

interface SpherePointsProps {
  radius: number;
  pointCount: number;
}

const SpherePoints: React.FC<SpherePointsProps> = ({ radius, pointCount }) => {
  //   const pointsGeometry = useMemo(() => {
  //     const geometry = new BufferGeometry();

  //     const positions = [];
  //     const colors = [];

  //     for (let i = 0; i < numPoints; i++) {
  //       // Generate random spherical coordinates
  //       const phi = Math.acos(2 * Math.random() - 1); // theta
  //       const theta = Math.random() * 2 * Math.PI; // phi

  //       // Convert spherical coordinates to Cartesian coordinates
  //       const x = radius * Math.sin(phi) * Math.cos(theta);
  //       const y = radius * Math.sin(phi) * Math.sin(theta);
  //       const z = radius * Math.cos(phi);

  //       positions.push(x, y, z);

  //       // Assign color to each point
  //       const color = new Color();
  //       color.setHSL(Math.random(), 1, 0.5); // Random color
  //       colors.push(color.r, color.g, color.b);
  //     }

  //     geometry.setAttribute(
  //       "position",
  //       new BufferAttribute(new Float32Array(positions), 3)
  //     );
  //     geometry.setAttribute(
  //       "color",
  //       new BufferAttribute(new Float32Array(colors), 3)
  //     );

  //     return geometry;
  //   }, [radius, numPoints]);

  const pointsRef = useRef<Points>(null);

  useEffect(() => {
    const positions = new Float32Array(pointCount * 3);

    for (let i = 0; i < pointCount; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    pointsRef.current?.geometry.setAttribute(
      "position",
      new BufferAttribute(positions, 3)
    );
  }, [pointCount, radius]);

  return (
    <points ref={pointsRef}>
      {/* <circleGeometry attach="geometry" args={[0.1, 32]} /> */}
      <bufferGeometry />
      <pointsMaterial attach="material" color="red" size={0.1} />
    </points>
  );
};

export default SpherePoints;
