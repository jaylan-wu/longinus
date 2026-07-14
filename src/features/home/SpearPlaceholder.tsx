import type { CSSProperties } from 'react'
import type { SpearMotionPhase } from './SpearScene'

type SpearPlaceholderProps = {
  phase?: SpearMotionPhase
  focusIndex?: number
}

export function SpearPlaceholder({ phase = 'idle', focusIndex = 0 }: SpearPlaceholderProps) {
  const style = {
    '--spear-angle': `${31 + focusIndex * 7}deg`,
    '--spear-y': `${(focusIndex - 1) * 3.2}rem`,
  } as CSSProperties

  return (
    <>
      <div className={`spear-shadow spear-shadow--${phase}`} style={style} aria-hidden="true" />
      <div className={`spear-fallback spear-fallback--${phase}`} style={style} aria-hidden="true">
        <div className="spear-fallback__shaft" />
        <div className="spear-fallback__head" />
        <div className="spear-fallback__fork spear-fallback__fork--left" />
        <div className="spear-fallback__fork spear-fallback__fork--right" />
      </div>
    </>
  )
}
