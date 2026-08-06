import type { ExperienceRecord } from '../../types/about'

type TrajectoryRecordListProps = {
  records: readonly ExperienceRecord[]
  selectedId: ExperienceRecord['id']
  onSelect: (id: ExperienceRecord['id']) => void
}

export function TrajectoryRecordList({ records, selectedId, onSelect }: TrajectoryRecordListProps) {
  return (
    <ul className="trajectory-records__index" aria-label="Experience records">
      {records.map((experience, index) => (
        <li key={experience.id}>
          <button
            type="button"
            className={`navigation-action trajectory-records__button--${experience.selectorTitleVariant ?? experience.titleVariant}${experience.id === selectedId ? ' is-active' : ''}`}
            aria-pressed={experience.id === selectedId}
            aria-controls="trajectory-current-record"
            onClick={() => onSelect(experience.id)}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <span><strong className="navigation-action__label">{experience.roleOrDegree}</strong>{experience.organization}</span>
            <span aria-hidden="true">{experience.id === selectedId ? 'Selected' : 'View'}</span>
          </button>
        </li>
      ))}
    </ul>
  )
}
