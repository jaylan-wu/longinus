import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '../../../../hooks/useReducedMotion'
import {
  trajectoryOrganizationMarks,
  type TrajectoryOrganizationMarkId,
} from '../../aboutData'

const ORGANIZATION_MARK_FADE_MS = 260

type TrajectoryOrganizationMarkProps = {
  markId: TrajectoryOrganizationMarkId
}

export function TrajectoryOrganizationMark({ markId }: TrajectoryOrganizationMarkProps) {
  const reducedMotion = useReducedMotion()
  const previousMarkId = useRef(markId)
  const [visibleMarkId, setVisibleMarkId] = useState(markId)
  const [outgoingMarkId, setOutgoingMarkId] = useState<TrajectoryOrganizationMarkId | null>(null)

  useEffect(() => {
    if (reducedMotion) {
      previousMarkId.current = markId
      const updateFrame = requestAnimationFrame(() => {
        setVisibleMarkId(markId)
        setOutgoingMarkId(null)
      })
      return () => cancelAnimationFrame(updateFrame)
    }

    if (markId === previousMarkId.current) return

    const outgoingId = previousMarkId.current
    previousMarkId.current = markId

    let fadeTimer = 0
    const updateFrame = requestAnimationFrame(() => {
      setOutgoingMarkId(outgoingId)
      setVisibleMarkId(markId)
      fadeTimer = window.setTimeout(() => setOutgoingMarkId(null), ORGANIZATION_MARK_FADE_MS)
    })

    return () => {
      cancelAnimationFrame(updateFrame)
      window.clearTimeout(fadeTimer)
    }
  }, [markId, reducedMotion])

  const visibleMark = trajectoryOrganizationMarks[visibleMarkId]
  const outgoingMark = outgoingMarkId ? trajectoryOrganizationMarks[outgoingMarkId] : null

  return (
    <div className="experience-detail__organization-mark" aria-hidden="true">
      {outgoingMark ? (
        <img
          className={`experience-detail__organization-mark-image experience-detail__organization-mark-image--${outgoingMark.position} experience-detail__organization-mark-image--${outgoingMark.id} is-outgoing`}
          src={outgoingMark.imageSrc}
          alt=""
        />
      ) : null}
      <img
        key={visibleMark.id}
        className={`experience-detail__organization-mark-image experience-detail__organization-mark-image--${visibleMark.position} experience-detail__organization-mark-image--${visibleMark.id} is-incoming`}
        src={visibleMark.imageSrc}
        alt=""
      />
    </div>
  )
}
