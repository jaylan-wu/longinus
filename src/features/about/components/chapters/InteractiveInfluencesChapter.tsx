import { useState } from 'react'
import { interactiveInfluences } from '../../data/influences'
import type { InteractiveInfluenceRecord } from '../../types/about'
import {
  AboutChapter,
  type AboutChapterComponentProps,
} from '../AboutChapter'
import { ChapterHeading } from '../ChapterHeading'

function InfluenceDetail({ influence }: { influence: InteractiveInfluenceRecord }) {
  return (
    <article className="influence-detail" aria-live="polite">
      <p>{influence.id} / Selected influence</p>
      <h3>{influence.gameTitle}</h3>
      <p>{influence.releaseYear}</p>
      <ul>{influence.categories.map((category) => <li key={category}>{category}</li>)}</ul>
      <blockquote>{influence.reflection}</blockquote>
    </article>
  )
}

export function InteractiveInfluencesChapter({ chapter }: AboutChapterComponentProps) {
  const [focusedId, setFocusedId] = useState<InteractiveInfluenceRecord['id']>(
    interactiveInfluences.records[0].id,
  )
  const focusedInfluence = interactiveInfluences.records.find((influence) => (
    influence.id === focusedId
  )) ?? interactiveInfluences.records[0]

  return (
    <AboutChapter chapter={chapter} modifier="influences">
      <ChapterHeading chapter={chapter} title="Interactive Influences" />
      <p className="about-chapter__lead">{interactiveInfluences.lead}</p>
      <div className="influence-records">
        <ul aria-label="Interactive influence records">
          {interactiveInfluences.records.map((influence) => (
            <li key={influence.id}>
              <button
                type="button"
                className={influence.id === focusedInfluence.id ? 'is-active' : undefined}
                aria-pressed={influence.id === focusedInfluence.id}
                onClick={() => setFocusedId(influence.id)}
              >
                <span>{influence.id}</span>
                <strong>{influence.gameTitle}</strong>
                <span>{influence.categories.join(' / ')}</span>
              </button>
            </li>
          ))}
        </ul>
        <InfluenceDetail influence={focusedInfluence} />
      </div>
    </AboutChapter>
  )
}
