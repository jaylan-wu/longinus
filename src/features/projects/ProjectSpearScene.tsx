import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { MathUtils, type Group } from 'three'
import { SpearModel } from '../../components/spear/SpearModel'
import { canCreateWebGLContext } from '../../components/three/canCreateWebGLContext'
import { SceneCanvas } from '../../components/three/SceneCanvas'
import { SceneErrorBoundary } from '../../components/three/SceneErrorBoundary'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { longinusColors } from '../../styles/colors'
import type { ProjectTransitionPhase } from './projectTransition'

type ProjectSpearSceneProps = {
  phase: ProjectTransitionPhase
  focusIndex: number
}

function ProjectSpear({ phase, focusIndex }: ProjectSpearSceneProps) {
  const spear = useRef<Group>(null)
  const reducedMotion = useReducedMotion()

  useFrame(({ clock }, delta) => {
    if (!spear.current || reducedMotion) return

    const time = clock.getElapsedTime()
    const idleDrift = phase === 'idle' ? Math.sin(time * 0.32) : 0
    const aimRotation = 0.42 + focusIndex * 0.12
    const targetRotationZ = phase === 'focused'
      ? aimRotation
      : phase === 'committing'
        ? -0.24
        : phase === 'impact' || phase === 'transitioning'
          ? aimRotation + 0.42
          : -0.38 + idleDrift * 0.025
    const targetRotationY = phase === 'committing' ? -0.42 : phase === 'impact' ? 0.08 : -0.18
    const targetX = phase === 'committing' ? 0.8 : phase === 'impact' || phase === 'transitioning' ? -5.4 : 0
    const targetY = phase === 'focused' || phase === 'impact' || phase === 'transitioning'
      ? 0.46 - focusIndex * 0.46
      : idleDrift * 0.08
    const targetScale = phase === 'committing' ? 0.78 : phase === 'impact' ? 1.04 : 0.84
    const damping = phase === 'impact' ? 11 : phase === 'committing' ? 6 : 4.2

    spear.current.rotation.z = MathUtils.damp(
      spear.current.rotation.z,
      targetRotationZ,
      damping,
      delta,
    )
    spear.current.rotation.y = MathUtils.damp(
      spear.current.rotation.y,
      targetRotationY,
      damping,
      delta,
    )
    spear.current.position.x = MathUtils.damp(
      spear.current.position.x,
      targetX,
      damping,
      delta,
    )
    spear.current.position.y = MathUtils.damp(
      spear.current.position.y,
      targetY,
      damping,
      delta,
    )
    spear.current.scale.setScalar(MathUtils.damp(
      spear.current.scale.x,
      targetScale,
      damping,
      delta,
    ))
  })

  return (
    <group ref={spear} rotation={[-0.08, -0.18, -0.38]} scale={0.84}>
      <SpearModel />
    </group>
  )
}

export function ProjectSpearScene({ phase, focusIndex }: ProjectSpearSceneProps) {
  const [webGLAvailable] = useState(canCreateWebGLContext)

  if (!webGLAvailable) return null

  return (
    <SceneErrorBoundary>
      <SceneCanvas
        className="scene-canvas spear-canvas projects__spear-canvas"
        camera={{ position: [0, 0, 11], fov: 33 }}
        dpr={[1, 1.5]}
        frameloop="always"
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.85} color={longinusColors.foreground} />
        <directionalLight
          position={[-5, 6, 7]}
          intensity={4.5}
          color={longinusColors.primary}
        />
        <pointLight
          position={[5, 1, 5]}
          intensity={30}
          color={longinusColors.secondary}
          distance={12}
        />
        <pointLight
          position={[-4, -5, 3]}
          intensity={18}
          color={longinusColors.highlight}
          distance={10}
        />
        <ProjectSpear phase={phase} focusIndex={focusIndex} />
      </SceneCanvas>
    </SceneErrorBoundary>
  )
}
