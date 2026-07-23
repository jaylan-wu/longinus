import type { ExperienceRecord } from '../../types/about'
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
    <article className="experience-detail" aria-live="polite">
      <TrajectoryOrganizationMark markId={experience.organizationMark} />
      <div className="experience-detail__content">
        <div className="experience-detail__identifier"><span>Current record</span><strong>{experience.id}</strong></div>
        <h3 aria-label={experience.displayTitle.join(' ')}>
          {experience.displayTitle.map((line) => <span key={line} aria-hidden="true">{line}</span>)}
        </h3>
        {experience.interpretiveStatement ? (
          <p className="experience-detail__interpretive">{experience.interpretiveStatement}</p>
        ) : null}
        <p className="experience-detail__organization">{experience.organization} / {experience.period}</p>
        {experience.detailMetadata.length > 0 ? (
          <ul className="experience-detail__record-metadata" aria-label="Record details">
            {experience.detailMetadata.map((item) => <li key={item}>{item}</li>)}
          </ul>
        ) : null}
        <dl>
          {narrativeSections.map((section, index) => (
            <div className={index === narrativeSections.length - 1 ? 'experience-detail__reflection' : undefined} key={section.label}>
              <dt>{section.label}</dt>
              <dd>{section.body}</dd>
            </div>
          ))}
        </dl>
        <div className="experience-detail__metadata">
          <p><span>Connected axes</span>{experience.personalAxes.join(' / ')}</p>
          <p><span>Supporting themes</span>{experience.supportingThemes.join(' / ')}</p>
        </div>
      </div>
    </article>
  )
}
