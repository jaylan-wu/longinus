import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
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

const SPEAR_IDLE_ROTATION_SPEED = 0.15
const SPEAR_SCROLL_SPEED_FACTOR = 0.0012
const SPEAR_MAX_SCROLL_BOOST = 2.4
const SPEAR_SCROLL_DAMPING = 4.5

function AboutSpear({ activeChapter }: { activeChapter: AboutChapterId }) {
  const spear = useRef<Group>(null)
  const axialRotation = useRef(0)
  const scrollSpeed = useRef(0)
  const previousScrollY = useRef(window.scrollY)
  const reducedMotion = useReducedMotion()
  const sceneWidth = useThree((state) => state.size.width)
  const target = spearPoses[activeChapter]
  const usesWideScene = sceneWidth >= 576
  const position: [number, number, number] = usesWideScene ? [0, 0.73, 0] : [0.12, 0.79, 0]
  const scale = usesWideScene ? 0.48 : 0.52

  useFrame((_, delta) => {
    if (!spear.current) return

    if (reducedMotion) {
      spear.current.rotation.y = MathUtils.damp(spear.current.rotation.y, target.axialRotation, 18, delta)
      previousScrollY.current = window.scrollY
      return
    }

    const scrollDistance = Math.abs(window.scrollY - previousScrollY.current)
    const scrollVelocity = scrollDistance / Math.max(delta, 0.001)
    const targetScrollSpeed = Math.min(
      scrollVelocity * SPEAR_SCROLL_SPEED_FACTOR,
      SPEAR_MAX_SCROLL_BOOST,
    )

    scrollSpeed.current = MathUtils.damp(
      scrollSpeed.current,
      targetScrollSpeed,
      SPEAR_SCROLL_DAMPING,
      delta,
    )
    axialRotation.current += (SPEAR_IDLE_ROTATION_SPEED + scrollSpeed.current) * delta
    previousScrollY.current = window.scrollY

    // SpearModel is authored along the Y axis, so Y rotation spins the spear
    // around its shaft while preserving the vertical silhouette.
    spear.current.rotation.y = axialRotation.current
  })

  return (
    <group ref={spear} position={position} rotation={[0, 0, 0]} scale={scale}>
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
