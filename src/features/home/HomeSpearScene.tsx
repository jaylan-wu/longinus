import { Canvas } from '@react-three/fiber'
import { SceneErrorBoundary } from '../../components/three/SceneErrorBoundary'
import { SpearModel } from '../../components/spear/SpearModel'
import { longinusColors } from '../../styles/colors'

function HomeSpear() {
  return (
    <group position={[0, 0.08, 0]} rotation={[-0.06, -0.26, -0.58]} scale={0.68}>
      <group position={[0, 1.52, 0]}>
        <SpearModel />
      </group>
    </group>
  )
}

export function HomeSpearScene() {
  return (
    <SceneErrorBoundary>
      <Canvas
        className="spear-canvas"
        camera={{ position: [0, 0, 14], fov: 35 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.42} color={longinusColors.foreground} />
        <directionalLight position={[-5, 6, 7]} intensity={2.8} color={longinusColors.primary} />
        <pointLight position={[5, 1, 5]} intensity={9} color={longinusColors.secondary} distance={12} />
        <pointLight position={[-4, -5, 3]} intensity={6} color={longinusColors.highlight} distance={10} />
        <HomeSpear />
      </Canvas>
    </SceneErrorBoundary>
  )
}
