import { Canvas } from "@react-three/fiber";
import { ACESFilmicToneMapping, SRGBColorSpace } from "three";
import { Globe } from "./Globe";

export const App = () => {
  return (
    <main className="flex h-screen flex-col items-center p-8">
      <Canvas
        gl={{
          antialias: true,
          toneMapping: ACESFilmicToneMapping,
          outputColorSpace: SRGBColorSpace,
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [3, 2, 6],
        }}
      >
        <Globe />
      </Canvas>
    </main>
  );
};
