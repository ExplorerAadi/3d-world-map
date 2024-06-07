import { useEffect } from "react";
import { Vector3 } from "three";

export interface LatLongOn3DProps {
  radius: number;
  pointCount: number;
  lat: number;
  long: number;
}

export const useLatLongOn3D = ({
  radius,
  pointCount,
  lat,
  long,
}: LatLongOn3DProps) => {
  useEffect(() => {
    const positions = new Float32Array(pointCount * 3);
    const points = [];

    for (let i = 0; i < pointCount; i++) {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = long * (Math.PI / 180);

      const x = -(radius * Math.sin(phi) * Math.cos(theta));
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      console.log(x, y, z);

      points.push(new Vector3(x, y, z));
      points.push(new Vector3(x + 1, y + 1, z + 5));
    }
  }, [lat, long, pointCount, radius]);
};
