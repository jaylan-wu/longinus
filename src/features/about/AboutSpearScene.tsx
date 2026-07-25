import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { MathUtils, type Group } from 'three'
import { SpearModel } from '../../components/spear/SpearModel'
import { SceneErrorBoundary } from '../../components/three/SceneErrorBoundary'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { longinusColors } from '../../styles/colors'
import {
  ABOUT_CHAPTER_IDS,
  type AboutChapterId,
  type AboutSceneState,
} from './types/about'

const STAGED_REDUCED_MOTION_AXIAL_ROTATIONS: Record<AboutChapterId, number> = {
  [ABOUT_CHAPTER_IDS.identity]: 0,
  [ABOUT_CHAPTER_IDS.trajectory]: Math.PI * 0.3,
  [ABOUT_CHAPTER_IDS.outsideSystem]: Math.PI * 0.6,
  [ABOUT_CHAPTER_IDS.interactiveInfluences]: Math.PI * 0.9,
  [ABOUT_CHAPTER_IDS.currentDirection]: Math.PI * 1.2,
}

const SPEAR_IDLE_ROTATION_SPEED = 0.2
const SPEAR_SCROLL_SPEED_FACTOR = 0.0015
const SPEAR_MAX_SCROLL_BOOST = 2.8
const SPEAR_SCROLL_DAMPING = 6.5
const SPEAR_PANEL_HORIZONTAL_POSITION = 0.55
const COMPACT_SCENE_MAX_WIDTH = 320

function AboutSpear({ activeChapter }: AboutSceneState) {
  const spear = useRef<Group>(null)
  const axialRotation = useRef(0)
  const angularVelocity = useRef(SPEAR_IDLE_ROTATION_SPEED)
  const scrollDirection = useRef<1 | -1>(1)
  const previousScrollY = useRef(window.scrollY)
  const reducedMotion = useReducedMotion()
  const sceneWidth = useThree((state) => state.size.width)
  const viewportWidth = useThree((state) => state.viewport.width)
  const targetAxialRotation = STAGED_REDUCED_MOTION_AXIAL_ROTATIONS[activeChapter]
  const usesWideScene = sceneWidth >= 576
  const horizontalPosition = sceneWidth > COMPACT_SCENE_MAX_WIDTH
    ? (SPEAR_PANEL_HORIZONTAL_POSITION - 0.5) * viewportWidth
    : 0.12
  const position: [number, number, number] = [horizontalPosition, usesWideScene ? 0.73 : 0.79, 0]
  const scale = usesWideScene ? 0.48 : 0.52

  useFrame((_, delta) => {
    if (!spear.current) return

    if (reducedMotion || activeChapter === ABOUT_CHAPTER_IDS.identity) {
      const postureDamping = reducedMotion ? 18 : 5
      spear.current.rotation.y = MathUtils.damp(
        spear.current.rotation.y,
        targetAxialRotation,
        postureDamping,
        delta,
      )
      axialRotation.current = spear.current.rotation.y
      angularVelocity.current = 0
      previousScrollY.current = window.scrollY
      return
    }

    const scrollDistance = window.scrollY - previousScrollY.current
    if (scrollDistance !== 0) scrollDirection.current = scrollDistance > 0 ? 1 : -1

    const scrollVelocity = Math.abs(scrollDistance) / Math.max(delta, 0.001)
    const scrollBoost = Math.min(
      scrollVelocity * SPEAR_SCROLL_SPEED_FACTOR,
      SPEAR_MAX_SCROLL_BOOST,
    )
    const targetAngularVelocity = scrollDirection.current * (SPEAR_IDLE_ROTATION_SPEED + scrollBoost)

    angularVelocity.current = MathUtils.damp(
      angularVelocity.current,
      targetAngularVelocity,
      SPEAR_SCROLL_DAMPING,
      delta,
    )
    axialRotation.current += angularVelocity.current * delta
    previousScrollY.current = window.scrollY

    // Positive axial rotation is the established clockwise direction. Signed
    // scroll velocity reverses it smoothly when the user scrolls upward.
    spear.current.rotation.y = axialRotation.current
  })

  return (
    <group ref={spear} position={position} rotation={[0, 0, 0]} scale={scale}>
      <SpearModel />
    </group>
  )
}

export function AboutSpearScene({ activeChapter }: AboutSceneState) {
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
