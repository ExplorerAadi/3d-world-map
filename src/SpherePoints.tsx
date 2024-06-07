import { useLoader } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef } from "react";
import { BufferGeometry, Points, TextureLoader } from "three";
import { latLongToVector3 } from "./utils";
import mapData from "./map.json";

interface SpherePointsProps {
  radius: number;
}

export const SpherePoints: React.FC<SpherePointsProps> = ({ radius }) => {
  const pointsRef = useRef<Points>(null);
  //   const lineRef = useRef<any>(null);
  const pointImg = useLoader(TextureLoader, "./textures/office-pin.png");

  const positions = useMemo(() => {
    return mapData["Co-ordinates"].map((point) =>
      latLongToVector3(point.lat, point.long, radius)
    );
  }, [radius]);

  useEffect(() => {
    if (pointsRef.current) {
      const geometry = new BufferGeometry().setFromPoints(positions);
      pointsRef.current.geometry = geometry;
    }
    // points.push(new Vector3(x, y, z));
    // points.push(new Vector3(x + 1, y + 1, z + 5));
    // if (lineRef?.current) {
    //   lineRef.current.geometry.setFromPoints(points);
    // }
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
        />
      </points>
      {/* <line ref={lineRef}>
        <lineBasicMaterial
          attach="material"
          color="#f9ffc4"
          linewidth={0.1}
          linecap={"round"}
          linejoin={"round"}
        />
      </line> */}
    </>
  );
};
