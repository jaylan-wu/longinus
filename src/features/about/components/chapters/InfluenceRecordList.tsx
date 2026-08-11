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
    <ul
      className="influence-records__index about-motion-group about-motion-group--structure about-motion-rule"
      aria-label="Creative influence records"
    >
      {records.map((influence, index) => {
        const isSelected = influence.id === selectedId

        return (
          <li key={influence.id}>
            <button
              type="button"
              className={`navigation-action${isSelected ? ' is-active' : ''}`}
              data-influence-id={influence.id}
              aria-controls={detailId}
              aria-pressed={isSelected}
              onClick={() => onSelect(influence.id)}
            >
              <span className="influence-records__identifier">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>{isSelected ? 'Selected' : 'View'}</span>
              </span>
              <strong
                className="influence-records__title-parts navigation-action__label"
              >
                <span className="about__visually-hidden">{influence.title}</span>
                <span
                  className={`influence-records__visual-title${influence.directoryTitleVariant ? ` influence-records__visual-title--${influence.directoryTitleVariant}` : ''}`}
                  aria-hidden="true"
                >
                  {influence.directoryTitleParts.map((part) => (
                    <span
                      className={`influence-records__title-part influence-records__title-part--${part.prominence}`}
                      key={`${influence.id}-${part.text}`}
                    >
                      {part.text}
                    </span>
                  ))}
                </span>
              </strong>
            </button>
          </li>
        )
      })}
    </ul>
  )
}
