import {
  experienceOrganizationMarks,
} from '../../data/experiences'
import type { ExperienceOrganizationMarkId } from '../../types/about'

type TrajectoryOrganizationMarkProps = {
  markId: ExperienceOrganizationMarkId
}

export function TrajectoryOrganizationMark({ markId }: TrajectoryOrganizationMarkProps) {
  const mark = experienceOrganizationMarks[markId]

  return (
    <div className="experience-detail__organization-mark" aria-hidden="true">
      <img
        key={mark.id}
        className={`experience-detail__organization-mark-image experience-detail__organization-mark-image--${mark.position} experience-detail__organization-mark-image--${mark.scale} experience-detail__organization-mark-image--${mark.id} is-incoming`}
        src={mark.imageSrc}
        alt=""
      />
    </div>
  )
}
