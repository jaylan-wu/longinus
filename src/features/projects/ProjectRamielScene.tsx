import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MathUtils, type Group } from 'three'
import { RamielModel } from '../../components/ramiel/RamielModel'
import { canCreateWebGLContext } from '../../components/three/canCreateWebGLContext'
import { SceneErrorBoundary } from '../../components/three/SceneErrorBoundary'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { reiColors } from '../../styles/colors'
import type { ProjectTransitionPhase } from './projectTransition'

type ProjectRamielSceneProps = {
  phase: ProjectTransitionPhase
  focusIndex: number
}

type ProjectRamielPose = {
  rotation: readonly [number, number, number]
  position: readonly [number, number, number]
  scale: number
}

const PROJECT_IDLE_CYCLE_SECONDS = 18
const PROJECT_IDLE_DRIFT_SECONDS = 2.75

function getProjectPose(
  phase: ProjectTransitionPhase,
  focusIndex: number,
): ProjectRamielPose {
  const focusedY = 0.48 - focusIndex * 0.46
  const focusedRotationY = -0.72 + focusIndex * 0.28

  if (phase === 'focused') {
    return {
      rotation: [0.12 + focusIndex * 0.04, focusedRotationY, 0.16 - focusIndex * 0.1],
      position: [0.35, focusedY, 0],
      scale: 1.95,
    }
  }

  if (phase === 'committing') {
    return {
      rotation: [0, focusedRotationY * 0.25, 0],
      position: [0.3, focusedY, 0],
      scale: 1.5,
    }
  }

  if (phase === 'impact') {
    return {
      rotation: [0.24, focusedRotationY + Math.PI * 0.72, 0.52],
      position: [0.1, focusedY, 0],
      scale: 2.45,
    }
  }

  if (phase === 'transitioning') {
    return {
      rotation: [-0.12, focusedRotationY + Math.PI * 0.5, -0.24],
      position: [0.45, focusedY * 0.35, 0],
      scale: 2.12,
    }
  }

  return {
    rotation: [0.16, -0.42, 0.06],
    position: [0.42, 0.04, 0],
    scale: 1.85,
  }
}

function getHeldProjectDrift(elapsedTime: number) {
  const cycleTime = elapsedTime % PROJECT_IDLE_CYCLE_SECONDS
  if (cycleTime >= PROJECT_IDLE_DRIFT_SECONDS) return 0

  return Math.sin((cycleTime / PROJECT_IDLE_DRIFT_SECONDS) * Math.PI) * 0.03
}

function ProjectRamiel({ phase, focusIndex }: ProjectRamielSceneProps) {
  const ramiel = useRef<Group>(null)
  const reducedMotion = useReducedMotion()
  const pose = getProjectPose(phase, focusIndex)

  useFrame(({ clock }, delta) => {
    if (!ramiel.current) return

    const idleDrift = phase === 'idle' && !reducedMotion
      ? getHeldProjectDrift(clock.getElapsedTime())
      : 0

    if (reducedMotion) {
      ramiel.current.rotation.set(...pose.rotation)
      ramiel.current.position.set(...pose.position)
      ramiel.current.scale.setScalar(pose.scale)
      return
    }

    const damping = phase === 'impact' ? 11 : phase === 'committing' ? 7.5 : 5.2
    ramiel.current.rotation.x = MathUtils.damp(
      ramiel.current.rotation.x,
      pose.rotation[0] + idleDrift * 0.25,
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
      pose.rotation[2] - idleDrift * 0.35,
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
      pose.scale,
      damping,
      delta,
    ))
  })

  const initialPose = getProjectPose('idle', focusIndex)
  const energy = phase === 'impact'
    ? 1
    : phase === 'committing' || phase === 'focused'
      ? 0.68
      : 0.2

  return (
    <group
      ref={ramiel}
      position={initialPose.position}
      rotation={initialPose.rotation}
      scale={initialPose.scale}
    >
      <RamielModel energy={energy} />
    </group>
  )
}

export function ProjectRamielScene({ phase, focusIndex }: ProjectRamielSceneProps) {
  const [webGLAvailable] = useState(canCreateWebGLContext)

  if (!webGLAvailable) return null

  return (
    <SceneErrorBoundary>
      <Canvas
        className="scene-canvas ramiel-canvas projects__ramiel-canvas"
        camera={{ position: [0, 0, 11], fov: 33 }}
        dpr={[1, 1.5]}
        frameloop="always"
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={1.4} color={reiColors.light} />
        <directionalLight position={[-5, 6, 7]} intensity={3.5} color={reiColors.light} />
        <pointLight position={[5, 2, 5]} intensity={12} color={reiColors.blueSoft} distance={14} />
        <pointLight position={[-4, -4, 3]} intensity={5} color={reiColors.blueInk} distance={11} />
        <pointLight position={[2, -3, 3]} intensity={2} color={reiColors.red} distance={8} />
        <ProjectRamiel phase={phase} focusIndex={focusIndex} />
      </Canvas>
    </SceneErrorBoundary>
  )
}
