import type { InfluenceRecord } from '../../types/about'

type InfluenceRecordListProps = {
  detailId: string
  records: readonly InfluenceRecord[]
  selectedId: InfluenceRecord['id']
  onSelect: (id: InfluenceRecord['id']) => void
}

export function InfluenceRecordList({
  detailId,
  records,
  selectedId,
  onSelect,
}: InfluenceRecordListProps) {
  return (
    <ul className="influence-records__index" aria-label="Creative influence records">
      {records.map((influence) => {
        const isSelected = influence.id === selectedId

        return (
          <li key={influence.id}>
            <button
              type="button"
              className={isSelected ? 'is-active' : undefined}
              aria-controls={detailId}
              aria-pressed={isSelected}
              onClick={() => onSelect(influence.id)}
            >
              <span className="influence-records__identifier">
                <span>{influence.id}</span>
                <span>{isSelected ? 'Selected' : 'View'}</span>
              </span>
              <strong>{influence.title}</strong>
              <span className="influence-records__metadata">
                <span>{influence.medium}</span>
                <span aria-hidden="true">/</span>
                <span>{influence.releaseYear}</span>
              </span>
            </button>
          </li>
        )
      })}
    </ul>
  )
}
