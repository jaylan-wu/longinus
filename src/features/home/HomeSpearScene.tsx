import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { type Group } from 'three'
import { SceneErrorBoundary } from '../../components/three/SceneErrorBoundary'
import { SpearModel } from '../../components/spear/SpearModel'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { longinusColors } from '../../styles/colors'

function HomeSpear() {
  const spear = useRef<Group>(null)
  const reducedMotion = useReducedMotion()

  useFrame(({ clock }) => {
    if (!spear.current || reducedMotion) return
    const time = clock.getElapsedTime()
    spear.current.rotation.z = -0.38 + Math.sin(time * 0.32) * 0.025
    spear.current.rotation.y = -0.18 + Math.sin(time * 0.24) * 0.045
    spear.current.position.y = Math.sin(time * 0.28) * 0.08
    spear.current.scale.setScalar(0.84 + Math.sin(time * 0.24) * 0.006)
  })

  return (
    <group ref={spear} rotation={[-0.08, -0.18, -0.38]} scale={0.84}>
      <SpearModel />
    </group>
  )
}

export function HomeSpearScene() {
  return (
    <SceneErrorBoundary>
      <Canvas
        className="spear-canvas"
        camera={{ position: [0, 0, 11], fov: 33 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.85} color={longinusColors.foreground} />
        <directionalLight position={[-5, 6, 7]} intensity={4.5} color={longinusColors.primary} />
        <pointLight position={[5, 1, 5]} intensity={30} color={longinusColors.secondary} distance={12} />
        <pointLight position={[-4, -5, 3]} intensity={18} color={longinusColors.highlight} distance={10} />
        <HomeSpear />
      </Canvas>
    </SceneErrorBoundary>
  )
}
