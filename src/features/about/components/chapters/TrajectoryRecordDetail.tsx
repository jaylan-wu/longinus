import type { ExperienceRecord } from '../../types/about'
import { PERSONAL_AXIS_LABELS } from '../../../../types/personalAxis'
import { TrajectoryOrganizationMark } from './TrajectoryOrganizationMark'

type TrajectoryRecordDetailProps = {
  experience: ExperienceRecord
}

export function TrajectoryRecordDetail({ experience }: TrajectoryRecordDetailProps) {
  const narrativeSections = [
    experience.context,
    experience.definingContribution,
    experience.reflection,
  ]

  return (
    <article
      className={`experience-detail experience-detail--title-${experience.titleVariant}`}
      id="trajectory-current-record"
      aria-live="polite"
    >
      <TrajectoryOrganizationMark markId={experience.organizationMark} />
      <div className="experience-detail__content">
        <header className="experience-detail__header">
          <div className="experience-detail__identifier">
            <span>Current record</span>
            <strong>{experience.id}</strong>
          </div>
          <h3 aria-label={experience.displayTitle.join(' ')}>
            {experience.displayTitle.map((line) => (
              <span key={line} aria-hidden="true">{line}</span>
            ))}
          </h3>
          <p className="experience-detail__organization">
            <span>{experience.organization}</span>
            <span>{experience.period}</span>
          </p>
        </header>
        <div className="experience-detail__record-metadata-region">
          <ul className="experience-detail__record-metadata" aria-label="Record details">
            {experience.detailMetadata.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <dl className="experience-detail__narrative">
          {narrativeSections.map((section, index) => (
            <div className={index === narrativeSections.length - 1 ? 'experience-detail__reflection' : undefined} key={section.label}>
              <dt>{section.label}</dt>
              <dd>{section.body}</dd>
            </div>
          ))}
        </dl>
        <footer className="experience-detail__metadata">
          <p><span>Connected axes</span>{experience.personalAxes.map((axis) => PERSONAL_AXIS_LABELS[axis]).join(' / ')}</p>
          <p><span>Supporting themes</span>{experience.supportingThemes.join(' / ')}</p>
        </footer>
      </div>
    </article>
  )
}
