import type { CSSProperties } from 'react'
import './ramiel.css'

export type RamielMotionState =
  | 'idle'
  | 'focused'
  | 'committing'
  | 'impact'
  | 'transitioning'
  | 'settled'

type RamielFallbackProps = {
  motionState?: RamielMotionState
  focusIndex?: number
  energy?: number
}

export function RamielFallback({
  motionState = 'idle',
  focusIndex = 0,
  energy = 0,
}: RamielFallbackProps) {
  const normalizedEnergy = Math.min(1, Math.max(0, energy))
  const style = {
    '--ramiel-angle': `${-4 + focusIndex * 7}deg`,
    '--ramiel-y': `${(focusIndex - 1.5) * 1.4}rem`,
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
