import { Canvas } from "@react-three/fiber";

export default function App() {
  return (
    <Canvas camera={{ position: [0, 15, 0], fov: 75 }}>
      <ambientLight intensity={2} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
    </Canvas>
  );
}