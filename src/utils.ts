import { Vector3 } from "three";

export const latLongToVector3 = (lat: number, long: number, radius: number) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (long + 90) * (Math.PI / 180);
  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  return new Vector3(x, y, z);
};
