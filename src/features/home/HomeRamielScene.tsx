import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { MathUtils, type Group } from 'three'
import { RamielModel } from '../../components/ramiel/RamielModel'
import { canCreateWebGLContext } from '../../components/three/canCreateWebGLContext'
import { SceneErrorBoundary } from '../../components/three/SceneErrorBoundary'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { reiColors } from '../../styles/colors'
import type { NavigationItem } from '../../types/navigation'

type HomeRamielSceneProps = {
  focusedTarget: NavigationItem['id'] | null
}

type RamielPose = {
  rotation: readonly [number, number, number]
  position: readonly [number, number, number]
  scale: number
}

const HOME_IDLE_POSE: RamielPose = {
  rotation: [0.18, -0.48, -0.08],
  position: [0, 0, 0],
  scale: 2.05,
}

const HOME_FOCUS_POSES: Record<NavigationItem['id'], RamielPose> = {
  projects: {
    rotation: [0.08, -0.78, 0.12],
    position: [0, 0, 0],
    scale: 2.12,
  },
  music: {
    rotation: [0.34, -0.2, -0.05],
    position: [0, 0, 0],
    scale: 2.09,
  },
  playground: {
    rotation: [-0.08, 0.16, -0.14],
    position: [0, 0, 0],
    scale: 2.09,
  },
  about: {
    rotation: [-0.18, 0.54, -0.2],
    position: [0, 0, 0],
    scale: 2.14,
  },
}

const HOME_COMPACT_SCENE_WIDTH = 520
const HOME_RAMIEL_DAMPING = 4.8
const HOME_RAMIEL_FOCUS_DAMPING = 7.2
const HOME_IDLE_CYCLE_SECONDS = 20
const HOME_IDLE_DRIFT_SECONDS = 3.5

function getHeldIdleDrift(elapsedTime: number) {
  const cycleTime = elapsedTime % HOME_IDLE_CYCLE_SECONDS
  if (cycleTime >= HOME_IDLE_DRIFT_SECONDS) return 0

  return Math.sin((cycleTime / HOME_IDLE_DRIFT_SECONDS) * Math.PI) * 0.035
}

function HomeRamiel({ focusedTarget }: HomeRamielSceneProps) {
  const ramiel = useRef<Group>(null)
  const reducedMotion = useReducedMotion()
  const sceneWidth = useThree((state) => state.size.width)
  const compactScale = sceneWidth <= HOME_COMPACT_SCENE_WIDTH ? 0.72 : 1
  const pose = focusedTarget ? HOME_FOCUS_POSES[focusedTarget] : HOME_IDLE_POSE

  useFrame(({ clock }, delta) => {
    if (!ramiel.current) return

    const idleDrift = focusedTarget || reducedMotion
      ? 0
      : getHeldIdleDrift(clock.getElapsedTime())
    const targetScale = pose.scale * compactScale

    if (reducedMotion) {
      ramiel.current.rotation.set(...pose.rotation)
      ramiel.current.position.set(...pose.position)
      ramiel.current.scale.setScalar(targetScale)
      return
    }

    const damping = focusedTarget ? HOME_RAMIEL_FOCUS_DAMPING : HOME_RAMIEL_DAMPING
    ramiel.current.rotation.x = MathUtils.damp(
      ramiel.current.rotation.x,
      pose.rotation[0] + idleDrift * 0.35,
      damping,
      delta,
    )
    ramiel.current.rotation.y = MathUtils.damp(
      ramiel.current.rotation.y,
      pose.rotation[1] + idleDrift,
      damping,
      delta,
    )
    ramiel.current.rotation.z = MathUtils.damp(
      ramiel.current.rotation.z,
      pose.rotation[2] - idleDrift * 0.4,
      damping,
      delta,
    )
    ramiel.current.position.x = MathUtils.damp(
      ramiel.current.position.x,
      pose.position[0],
      damping,
      delta,
    )
    ramiel.current.position.y = MathUtils.damp(
      ramiel.current.position.y,
      pose.position[1],
      damping,
      delta,
    )
    ramiel.current.scale.setScalar(MathUtils.damp(
      ramiel.current.scale.x,
      targetScale,
      damping,
      delta,
    ))
  })

  return (
    <group
      ref={ramiel}
      position={HOME_IDLE_POSE.position}
      rotation={HOME_IDLE_POSE.rotation}
      scale={HOME_IDLE_POSE.scale * compactScale}
    >
      <RamielModel energy={focusedTarget ? 1 : 0.18} />
    </group>
  )
}

export function HomeRamielScene({ focusedTarget }: HomeRamielSceneProps) {
  const [webGLAvailable] = useState(canCreateWebGLContext)

  if (!webGLAvailable) return null

  return (
    <SceneErrorBoundary>
      <Canvas
        className="ramiel-canvas home__ramiel-canvas"
        camera={{ position: [0, 0, 10.8], fov: 32 }}
        dpr={[1, 1.5]}
        frameloop="always"
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={1.35} color={reiColors.light} />
        <directionalLight position={[-5, 6, 8]} intensity={3.2} color={reiColors.light} />
        <pointLight position={[4, 2, 6]} intensity={10} color={reiColors.blueSoft} distance={14} />
        <pointLight position={[-5, -4, 4]} intensity={4.5} color={reiColors.blueInk} distance={12} />
        <pointLight position={[3, -3, 2]} intensity={1.6} color={reiColors.red} distance={8} />
        <HomeRamiel focusedTarget={focusedTarget} />
      </Canvas>
    </SceneErrorBoundary>
  )
}
