import type { CSSProperties } from 'react'
import type { InteractionPhase } from '../../types/interaction'
import './ramiel.css'

export type RamielMotionState = InteractionPhase

export type RamielFallbackPose = {
  angleDegrees: number
  verticalOffsetRem: number
}

type RamielFallbackProps = {
  motionState?: RamielMotionState
  pose: RamielFallbackPose
  energy?: number
}

export function RamielFallback({
  motionState = 'idle',
  pose,
  energy = 0,
}: RamielFallbackProps) {
  const normalizedEnergy = Math.min(1, Math.max(0, energy))
  const style = {
    '--ramiel-angle': `${pose.angleDegrees}deg`,
    '--ramiel-y': `${pose.verticalOffsetRem}rem`,
    '--ramiel-energy': normalizedEnergy,
  } as CSSProperties

  return (
    <>
      <div
        className={`ramiel-shadow ramiel-shadow--${motionState}`}
        style={style}
        aria-hidden="true"
      />
      <div
        className={`ramiel-fallback ramiel-fallback--${motionState}`}
        style={style}
        aria-hidden="true"
      >
        <div className="ramiel-fallback__body">
          <span className="ramiel-fallback__facet ramiel-fallback__facet--northwest" />
          <span className="ramiel-fallback__facet ramiel-fallback__facet--northeast" />
          <span className="ramiel-fallback__facet ramiel-fallback__facet--southeast" />
          <span className="ramiel-fallback__facet ramiel-fallback__facet--southwest" />
          <span className="ramiel-fallback__core" />
        </div>
      </div>
    </>
  )
}
