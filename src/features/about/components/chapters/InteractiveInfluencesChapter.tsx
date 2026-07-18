import { useState } from 'react'
import { interactiveInfluences, type InfluenceRecord } from '../../aboutData'
import { ChapterHeading } from '../ChapterHeading'

function InfluenceDetail({ influence }: { influence: InfluenceRecord }) {
  return (
    <article className="influence-detail" aria-live="polite">
      <p>{influence.id} / Selected influence</p>
      <h3>{influence.title}</h3>
      <p>{influence.releaseYear}</p>
      <ul>{influence.categories.map((category) => <li key={category}>{category}</li>)}</ul>
      <blockquote>{influence.reflection}</blockquote>
    </article>
  )
}

export function InteractiveInfluencesChapter() {
  const [selectedId, setSelectedId] = useState(interactiveInfluences.records[0].id)
  const selected = interactiveInfluences.records.find((influence) => influence.id === selectedId) ?? interactiveInfluences.records[0]

  return (
    <section className="about-chapter about-chapter--influences" id="interactive-influences" aria-labelledby="influences-title">
      <ChapterHeading index="04" label="Interactive Influences" title="Interactive Influences" />
      <p className="about-chapter__lead">{interactiveInfluences.lead}</p>
      <div className="influence-records">
        <ul aria-label="Interactive influence records">
          {interactiveInfluences.records.map((influence) => (
            <li key={influence.id}>
              <button
                type="button"
                className={influence.id === selected.id ? 'is-active' : undefined}
                aria-pressed={influence.id === selected.id}
                onClick={() => setSelectedId(influence.id)}
              >
                <span>{influence.id}</span>
                <strong>{influence.title}</strong>
                <span>{influence.categories.join(' / ')}</span>
              </button>
            </li>
          ))}
        </ul>
        <InfluenceDetail influence={selected} />
      </div>
    </section>
  )
}
