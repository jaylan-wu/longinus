import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MathUtils, type Group } from 'three'
import { SpearModel } from '../../components/spear/SpearModel'
import { SceneErrorBoundary } from '../../components/three/SceneErrorBoundary'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { longinusColors } from '../../styles/colors'
import type { AboutChapterId } from './aboutData'

type SpearPose = {
  axialRotation: number
}

const spearPoses: Record<AboutChapterId, SpearPose> = {
  identity: { axialRotation: 0 },
  trajectory: { axialRotation: Math.PI * 0.3 },
  'outside-system': { axialRotation: Math.PI * 0.6 },
  'interactive-influences': { axialRotation: Math.PI * 0.9 },
  'current-direction': { axialRotation: Math.PI * 1.2 },
}

function AboutSpear({ activeChapter }: { activeChapter: AboutChapterId }) {
  const spear = useRef<Group>(null)
  const reducedMotion = useReducedMotion()
  const target = spearPoses[activeChapter]

  useFrame((_, delta) => {
    if (!spear.current) return
    const damping = reducedMotion ? 18 : 2.1
    const scrollRange = document.documentElement.scrollHeight - window.innerHeight
    const scrollProgress = scrollRange > 0 ? window.scrollY / scrollRange : 0
    const axialRotation = reducedMotion ? target.axialRotation : scrollProgress * Math.PI * 2.4

    // SpearModel is authored along the Y axis, so Y rotation spins the spear
    // around its shaft while preserving the vertical silhouette.
    spear.current.rotation.y = MathUtils.damp(spear.current.rotation.y, axialRotation, damping, delta)
  })

  return (
    <group ref={spear} position={[0.12, 0.79, 0]} rotation={[0, 0, 0]} scale={0.52}>
      <SpearModel />
    </group>
  )
}

export function AboutSpearScene({ activeChapter }: { activeChapter: AboutChapterId }) {
  return (
    <SceneErrorBoundary>
      <Canvas
        className="about__spear-canvas"
        camera={{ position: [0, 0, 12], fov: 34 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.68} color={longinusColors.foreground} />
        <directionalLight position={[-4, 6, 7]} intensity={3.7} color={longinusColors.primary} />
        <pointLight position={[4, 2, 4]} intensity={18} color={longinusColors.secondary} distance={12} />
        <pointLight position={[-3, -4, 4]} intensity={8} color={longinusColors.highlight} distance={10} />
        <AboutSpear activeChapter={activeChapter} />
      </Canvas>
    </SceneErrorBoundary>
  )
}
