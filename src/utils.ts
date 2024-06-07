import { Vector3 } from "three";

export const latLongToVector3 = (lat: number, long: number, radius: number) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (long + 90) * (Math.PI / 180);
  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  return new Vector3(x, y, z);
};

// const handlePointerDown = (event) => {
//   if (groupRef.current) {
//     const pointer = new Vector2(
//       (event.clientX / window.innerWidth) * 2 - 1,
//       -(event.clientY / window.innerHeight) * 2 + 1
//     );
//     console.log("Pointer:", pointer);
//     const raycaster = new Raycaster();
//     raycaster.setFromCamera(pointer, camera);

//     const intersects = raycaster.intersectObject(
//       groupRef.current.children[0],
//       true
//     );

//     if (intersects.length > 0) {
//       const intersection = intersects[0];
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//       const mesh = intersection.object as any;
//       console.log("Mesh:", mesh);
//       const geometry = mesh.geometry;

//       const index = intersection.faceIndex;
//       const uvAttribute = geometry.attributes.uv;
//       const uv1 = new Vector2();
//       const uv2 = new Vector2();
//       const uv3 = new Vector2();

//       const indices = geometry.index ? geometry.index.array : null;
//       if (index) {
//         if (indices) {
//           const a = indices[index * 3];
//           const b = indices[index * 3 + 1];
//           const c = indices[index * 3 + 2];
//           uv1.fromBufferAttribute(uvAttribute, a);
//           uv2.fromBufferAttribute(uvAttribute, b);
//           uv3.fromBufferAttribute(uvAttribute, c);
//         } else {
//           const a = index * 3;
//           const b = index * 3 + 1;
//           const c = index * 3 + 2;
//           uv1.fromBufferAttribute(uvAttribute, a);
//           uv2.fromBufferAttribute(uvAttribute, b);
//           uv3.fromBufferAttribute(uvAttribute, c);
//         }
//       }

//       console.log("UV Coordinates:", uv1, uv2, uv3);
//     }
//   }
// };
