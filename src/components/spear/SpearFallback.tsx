import type { CSSProperties } from 'react'
import type { InteractionPhase } from '../../types/interaction'
import './spear.css'

type SpearFallbackProps = {
  motionState?: InteractionPhase
  focusIndex?: number
}

export function SpearFallback({ motionState = 'idle', focusIndex = 0 }: SpearFallbackProps) {
  const style = {
    '--spear-angle': `${31 + focusIndex * 7}deg`,
    '--spear-y': `${(focusIndex - 1) * 3.2}rem`,
  } as CSSProperties

  return (
    <>
      <div className={`spear-shadow spear-shadow--${motionState}`} style={style} aria-hidden="true" />
      <div className={`spear-fallback spear-fallback--${motionState}`} style={style} aria-hidden="true">
        <div className="spear-fallback__shaft" />
        <div className="spear-fallback__head" />
        <div className="spear-fallback__fork spear-fallback__fork--left" />
        <div className="spear-fallback__fork spear-fallback__fork--right" />
      </div>
    </>
  )
}
