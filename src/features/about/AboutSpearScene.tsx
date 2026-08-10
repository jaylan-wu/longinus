import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { MathUtils, type Group } from 'three'
import { SpearModel } from '../../components/spear/SpearModel'
import { canCreateWebGLContext } from '../../components/three/canCreateWebGLContext'
import { SceneCanvas } from '../../components/three/SceneCanvas'
import { SceneErrorBoundary } from '../../components/three/SceneErrorBoundary'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { longinusColors } from '../../styles/colors'
import {
  ABOUT_CHAPTER_IDS,
  type AboutChapterId,
  type AboutSceneState,
} from './types/about'

const STAGED_REDUCED_MOTION_AXIAL_ROTATIONS: Record<AboutChapterId, number> = {
  [ABOUT_CHAPTER_IDS.identity]: Math.PI * 0.5,
  [ABOUT_CHAPTER_IDS.trajectory]: Math.PI * 0.8,
  [ABOUT_CHAPTER_IDS.outsideSystem]: Math.PI * 1.1,
  [ABOUT_CHAPTER_IDS.creativeInfluences]: Math.PI * 1.4,
  [ABOUT_CHAPTER_IDS.currentDirection]: Math.PI * 1.7,
}

const SPEAR_BASE_ROTATION_SPEED = 0.2
const SPEAR_SCROLL_SPEED_FACTOR = 0.0015
const SPEAR_MAX_SCROLL_BOOST = 2.8
const SPEAR_SCROLL_DAMPING = 6.5
const SPEAR_PANEL_HORIZONTAL_POSITION = 0.577
const COMPACT_SCENE_MAX_WIDTH = 320

function AboutSpear({ activeChapter }: AboutSceneState) {
  const targetAxialRotation = STAGED_REDUCED_MOTION_AXIAL_ROTATIONS[activeChapter]
  const [initialAxialRotation] = useState(targetAxialRotation)
  const spear = useRef<Group>(null)
  const axialRotation = useRef(initialAxialRotation)
  const angularVelocity = useRef(-SPEAR_BASE_ROTATION_SPEED)
  const rotationDirection = useRef<-1 | 1>(-1)
  const previousScrollY = useRef(window.scrollY)
  const reducedMotion = useReducedMotion()
  const sceneWidth = useThree((state) => state.size.width)
  const viewportWidth = useThree((state) => state.viewport.width)
  const horizontalPosition = sceneWidth > COMPACT_SCENE_MAX_WIDTH
    ? (SPEAR_PANEL_HORIZONTAL_POSITION - 0.5) * viewportWidth
    : 0.12
  const position: [number, number, number] = [horizontalPosition, 0.79, 0]
  const scale = 0.52

  useFrame((_, delta) => {
    if (!spear.current) return

    if (reducedMotion) {
      spear.current.rotation.y = MathUtils.damp(
        spear.current.rotation.y,
        targetAxialRotation,
        18,
        delta,
      )
      axialRotation.current = spear.current.rotation.y
      angularVelocity.current = 0
      previousScrollY.current = window.scrollY
      return
    }

    const scrollDistance = window.scrollY - previousScrollY.current
    if (scrollDistance !== 0) {
      rotationDirection.current = scrollDistance < 0 ? 1 : -1
    }

    const scrollVelocity = Math.abs(scrollDistance) / Math.max(delta, 0.001)
    const scrollBoost = Math.min(
      scrollVelocity * SPEAR_SCROLL_SPEED_FACTOR,
      SPEAR_MAX_SCROLL_BOOST,
    )
    const targetAngularVelocity = rotationDirection.current
      * (SPEAR_BASE_ROTATION_SPEED + scrollBoost)

    angularVelocity.current = MathUtils.damp(
      angularVelocity.current,
      targetAngularVelocity,
      SPEAR_SCROLL_DAMPING,
      delta,
    )
    axialRotation.current += angularVelocity.current * delta
    previousScrollY.current = window.scrollY

    // Positive axial rotation is the established clockwise direction. The
    // spear starts counterclockwise, reverses clockwise while scrolling up,
    // and returns counterclockwise while scrolling down.
    spear.current.rotation.y = axialRotation.current
  })

  return (
    <group
      ref={spear}
      position={position}
      rotation={[0, initialAxialRotation, 0]}
      scale={scale}
    >
      <SpearModel />
    </group>
  )
}

export function AboutSpearScene({ activeChapter }: AboutSceneState) {
  const [webGLAvailable] = useState(canCreateWebGLContext)

  if (!webGLAvailable) return null

  return (
    <SceneErrorBoundary>
      <SceneCanvas
        className="scene-canvas about__spear-canvas"
        camera={{ position: [0, 0, 12], fov: 34 }}
        dpr={[1, 1.5]}
        frameloop="always"
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.42} color={longinusColors.foreground} />
        <directionalLight
          position={[-4, 6, 7]}
          intensity={2.8}
          color={longinusColors.primary}
        />
        <pointLight
          position={[3, -2, 5]}
          intensity={7}
          color={longinusColors.primaryDeep}
          distance={12}
        />
        <AboutSpear activeChapter={activeChapter} />
      </SceneCanvas>
    </SceneErrorBoundary>
  )
}
