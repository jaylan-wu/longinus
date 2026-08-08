import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { MathUtils, type Group } from 'three'
import { RamielModel } from '../../components/ramiel/RamielModel'
import { canCreateWebGLContext } from '../../components/three/canCreateWebGLContext'
import { SceneCanvas } from '../../components/three/SceneCanvas'
import { SceneErrorBoundary } from '../../components/three/SceneErrorBoundary'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { reiColors } from '../../styles/colors'
import {
  ABOUT_CHAPTER_IDS,
  type AboutChapterId,
  type AboutSceneState,
} from './types/about'

type RamielChapterPose = {
  rotation: [number, number, number]
  energy: number
}

const RAMIEL_CHAPTER_POSES: Record<AboutChapterId, RamielChapterPose> = {
  [ABOUT_CHAPTER_IDS.identity]: {
    rotation: [0.04, Math.PI * 0.22, -0.06],
    energy: 0.06,
  },
  [ABOUT_CHAPTER_IDS.trajectory]: {
    rotation: [-0.18, Math.PI * 0.34, 0.12],
    energy: 0.12,
  },
  [ABOUT_CHAPTER_IDS.outsideSystem]: {
    rotation: [0.14, Math.PI * 0.46, -0.14],
    energy: 0.08,
  },
  [ABOUT_CHAPTER_IDS.creativeInfluences]: {
    rotation: [-0.1, Math.PI * 0.6, 0.08],
    energy: 0.18,
  },
  [ABOUT_CHAPTER_IDS.currentDirection]: {
    rotation: [0.02, Math.PI * 0.74, -0.04],
    energy: 0.22,
  },
}

const RAMIEL_PANEL_HORIZONTAL_POSITION = 0.72
const RAMIEL_VERTICAL_POSITION = 0.48
const RAMIEL_DESKTOP_SCALE = 1.48
const RAMIEL_COMPACT_SCALE = 1.08
const RAMIEL_ORIENTATION_DAMPING = 4.2
const RAMIEL_DRIFT_CYCLE_SECONDS = 18
const RAMIEL_HOLD_SECONDS = 12
const RAMIEL_DRIFT_SECONDS = RAMIEL_DRIFT_CYCLE_SECONDS - RAMIEL_HOLD_SECONDS
const COMPACT_SCENE_MAX_WIDTH = 320

function getRamielDrift(elapsedTime: number) {
  const cycleTime = elapsedTime % RAMIEL_DRIFT_CYCLE_SECONDS
  if (cycleTime < RAMIEL_HOLD_SECONDS) return 0

  const progress = (cycleTime - RAMIEL_HOLD_SECONDS) / RAMIEL_DRIFT_SECONDS
  const envelope = Math.sin(progress * Math.PI) ** 2
  return Math.sin(progress * Math.PI * 2) * envelope
}

function AboutRamiel({ activeChapter }: AboutSceneState) {
  const ramiel = useRef<Group>(null)
  const reducedMotion = useReducedMotion()
  const sceneWidth = useThree((state) => state.size.width)
  const viewportWidth = useThree((state) => state.viewport.width)
  const pose = RAMIEL_CHAPTER_POSES[activeChapter]
  const horizontalPosition = sceneWidth > COMPACT_SCENE_MAX_WIDTH
    ? (RAMIEL_PANEL_HORIZONTAL_POSITION - 0.5) * viewportWidth
    : 0.12
  const scale = sceneWidth > COMPACT_SCENE_MAX_WIDTH
    ? RAMIEL_DESKTOP_SCALE
    : RAMIEL_COMPACT_SCALE

  useFrame((state, delta) => {
    if (!ramiel.current) return

    if (reducedMotion) {
      ramiel.current.position.y = RAMIEL_VERTICAL_POSITION
      ramiel.current.rotation.set(...pose.rotation)
      return
    }

    const drift = getRamielDrift(state.clock.getElapsedTime())
    ramiel.current.position.y = RAMIEL_VERTICAL_POSITION + drift * 0.025
    ramiel.current.rotation.x = MathUtils.damp(
      ramiel.current.rotation.x,
      pose.rotation[0] + drift * 0.014,
      RAMIEL_ORIENTATION_DAMPING,
      delta,
    )
    ramiel.current.rotation.y = MathUtils.damp(
      ramiel.current.rotation.y,
      pose.rotation[1] + drift * 0.022,
      RAMIEL_ORIENTATION_DAMPING,
      delta,
    )
    ramiel.current.rotation.z = MathUtils.damp(
      ramiel.current.rotation.z,
      pose.rotation[2] - drift * 0.012,
      RAMIEL_ORIENTATION_DAMPING,
      delta,
    )
  })

  return (
    <group
      ref={ramiel}
      position={[horizontalPosition, RAMIEL_VERTICAL_POSITION, 0]}
      rotation={pose.rotation}
      scale={scale}
    >
      <RamielModel energy={reducedMotion ? 0 : pose.energy} />
    </group>
  )
}

export function AboutRamielScene({ activeChapter }: AboutSceneState) {
  const [webGLAvailable] = useState(canCreateWebGLContext)

  if (!webGLAvailable) return null

  return (
    <SceneErrorBoundary>
      <SceneCanvas
        className="scene-canvas about__ramiel-canvas"
        camera={{ position: [0, 0, 12], fov: 34 }}
        dpr={[1, 1.5]}
        frameloop="always"
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={1.15} color={reiColors.light} />
        <directionalLight
          position={[-4, 6, 7]}
          intensity={2.4}
          color={reiColors.light}
        />
        <pointLight
          position={[3, -2, 5]}
          intensity={4.2}
          color={reiColors.blue}
          distance={12}
        />
        <AboutRamiel activeChapter={activeChapter} />
      </SceneCanvas>
    </SceneErrorBoundary>
  )
}
