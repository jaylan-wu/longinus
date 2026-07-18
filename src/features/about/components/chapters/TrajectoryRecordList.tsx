import type { TrajectoryRecord } from '../../aboutData'

type TrajectoryRecordListProps = {
  records: readonly TrajectoryRecord[]
  selectedId: TrajectoryRecord['id']
  onSelect: (id: TrajectoryRecord['id']) => void
}

export function TrajectoryRecordList({ records, selectedId, onSelect }: TrajectoryRecordListProps) {
  return (
    <ul className="trajectory-records__index" aria-label="Experience records">
      {records.map((experience, index) => (
        <li key={experience.id}>
          <button
            type="button"
            className={experience.id === selectedId ? 'is-active' : undefined}
            aria-pressed={experience.id === selectedId}
            onClick={() => onSelect(experience.id)}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <span><strong>{experience.title}</strong>{experience.organization}</span>
            <span aria-hidden="true">{experience.id === selectedId ? 'Selected' : 'View'}</span>
          </button>
        </li>
      ))}
    </ul>
  )
}
