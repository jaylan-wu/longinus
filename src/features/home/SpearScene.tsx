import { Component, type ErrorInfo, type ReactNode, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import type { Group } from 'three'

type SceneErrorBoundaryProps = { children: ReactNode }
type SceneErrorBoundaryState = { failed: boolean }

class SceneErrorBoundary extends Component<SceneErrorBoundaryProps, SceneErrorBoundaryState> {
  state: SceneErrorBoundaryState = { failed: false }

  static getDerivedStateFromError(): SceneErrorBoundaryState {
    return { failed: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.warn('WebGL scene unavailable; displaying the CSS spear fallback.', error, info)
  }

  render() {
    return this.state.failed ? null : this.props.children
  }
}

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReducedMotion(query.matches)
    updatePreference()
    query.addEventListener('change', updatePreference)
    return () => query.removeEventListener('change', updatePreference)
  }, [])

  return reducedMotion
}

function SpearGeometry() {
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
      <mesh position={[0, -2.9, 0]}>
        <cylinderGeometry args={[0.105, 0.145, 8.8, 10]} />
        <meshStandardMaterial color="#b93f61" roughness={0.32} metalness={0.62} />
      </mesh>
      <mesh position={[0, 1.63, 0]}>
        <cylinderGeometry args={[0.25, 0.11, 0.6, 10]} />
        <meshStandardMaterial color="#e56b8a" roughness={0.28} metalness={0.66} />
      </mesh>
      <mesh position={[0, 2.7, 0]} scale={[0.58, 2.05, 0.34]}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#e56b8a" roughness={0.24} metalness={0.7} />
      </mesh>
      <group position={[0, 2.1, 0]}>
        <mesh position={[-0.57, 0.42, 0]} rotation={[0, 0, 0.58]} scale={[0.2, 1.25, 0.22]}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#d85c7d" roughness={0.28} metalness={0.68} />
        </mesh>
        <mesh position={[0.57, 0.42, 0]} rotation={[0, 0, -0.58]} scale={[0.2, 1.25, 0.22]}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#d85c7d" roughness={0.28} metalness={0.68} />
        </mesh>
      </group>
      <mesh position={[0, -7.46, 0]} rotation={[0, 0, Math.PI]}>
        <coneGeometry args={[0.22, 0.65, 8]} />
        <meshStandardMaterial color="#80314d" roughness={0.38} metalness={0.55} />
      </mesh>
    </group>
  )
}

export function SpearScene() {
  return (
    <SceneErrorBoundary>
      <Canvas
        className="spear-canvas"
        camera={{ position: [0, 0, 11], fov: 33 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.85} color="#ECEFF4" />
        <directionalLight position={[-5, 6, 7]} intensity={4.5} color="#E56B8A" />
        <pointLight position={[5, 1, 5]} intensity={30} color="#C5A3FF" distance={12} />
        <pointLight position={[-4, -5, 3]} intensity={18} color="#89DCEB" distance={10} />
        <SpearGeometry />
      </Canvas>
    </SceneErrorBoundary>
  )
}
