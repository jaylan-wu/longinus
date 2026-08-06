import { useState } from 'react'
import { creativeInfluences } from '../../data/influences'
import type { InfluenceRecord } from '../../types/about'
import {
  AboutChapter,
  type AboutChapterComponentProps,
} from '../AboutChapter'

const SELECTED_INFLUENCE_DETAIL_ID = 'selected-influence-detail'

type InfluenceListProps = {
  records: readonly InfluenceRecord[]
  selectedId: InfluenceRecord['id']
  onSelect: (id: InfluenceRecord['id']) => void
}

function InfluenceList({ records, selectedId, onSelect }: InfluenceListProps) {
  return (
    <ul className="influence-records__index" aria-label="Creative influence records">
      {records.map((influence) => {
        const isSelected = influence.id === selectedId

        return (
          <li key={influence.id}>
            <button
              type="button"
              className={isSelected ? 'is-active' : undefined}
              aria-controls={SELECTED_INFLUENCE_DETAIL_ID}
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

type InfluenceNarrativeProps = {
  className?: string
  heading: string
  paragraphs: readonly string[]
}

function FormattedInfluenceText({ children }: { children: string }) {
  return (
    <>
      {children.split(/(\*[^*]+\*)/).map((part, index) => (
        part.startsWith('*') && part.endsWith('*')
          ? <cite key={`${part}-${index}`}>{part.slice(1, -1)}</cite>
          : part
      ))}
    </>
  )
}

function InfluenceNarrative({
  className,
  heading,
  paragraphs,
}: InfluenceNarrativeProps) {
  return (
    <section className={className} aria-labelledby={`influence-${heading.toLowerCase().replaceAll(' ', '-')}`}>
      <h4 id={`influence-${heading.toLowerCase().replaceAll(' ', '-')}`}>{heading}</h4>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}><FormattedInfluenceText>{paragraph}</FormattedInfluenceText></p>
      ))}
    </section>
  )
}

function InfluenceDetail({ influence }: { influence: InfluenceRecord }) {
  const titleId = `influence-${influence.id.toLowerCase()}-title`

  return (
    <article
      className="influence-detail"
      id={SELECTED_INFLUENCE_DETAIL_ID}
      aria-labelledby={titleId}
      aria-live="polite"
    >
      <div className="influence-detail__content" key={influence.id}>
        <p className="influence-detail__eyebrow">
          <span>{influence.id} / Selected influence</span>
          <span>{influence.medium} / {influence.releaseYear}</span>
        </p>
        <h3 id={titleId}>{influence.title}</h3>

        {influence.creator || influence.includedWorks ? (
          <dl className="influence-detail__work-metadata">
            {influence.creator ? (
              <div>
                <dt>Creator</dt>
                <dd>{influence.creator}</dd>
              </div>
            ) : null}
            {influence.includedWorks ? (
              <div>
                <dt>Included works</dt>
                <dd>
                  <ul>
                    {influence.includedWorks.map((work) => <li key={work}>{work}</li>)}
                  </ul>
                </dd>
              </div>
            ) : null}
          </dl>
        ) : null}

        <figure className="influence-detail__quote">
          <blockquote>
            <p>{influence.featuredQuote}</p>
          </blockquote>
          {influence.quoteAttribution ? (
            <figcaption>— {influence.quoteAttribution}</figcaption>
          ) : null}
        </figure>

        <section className="influence-detail__categories" aria-labelledby={`influence-${influence.id.toLowerCase()}-categories`}>
          <h4 id={`influence-${influence.id.toLowerCase()}-categories`}>Influence categories</h4>
          <ul>
            {influence.categories.map((category) => <li key={category}>{category}</li>)}
          </ul>
        </section>

        <InfluenceNarrative
          heading="Specific influence"
          paragraphs={influence.specificElement}
        />
        <InfluenceNarrative
          className="influence-detail__reflection"
          heading="Personal reflection"
          paragraphs={influence.displayReflection}
        />
        <InfluenceNarrative
          className="influence-detail__takeaway"
          heading="Design takeaway"
          paragraphs={[influence.designTakeaway]}
        />
        {influence.connectionToLonginus ? (
          <InfluenceNarrative
            className="influence-detail__connection"
            heading="Connection to Longinus"
            paragraphs={influence.connectionToLonginus}
          />
        ) : null}
      </div>
    </article>
  )
}

export function CreativeInfluencesChapter({ chapter }: AboutChapterComponentProps) {
  const [selectedId, setSelectedId] = useState<InfluenceRecord['id']>(
    creativeInfluences[0].id,
  )
  const selectedInfluence = creativeInfluences.find((influence) => (
    influence.id === selectedId
  )) ?? creativeInfluences[0]

  return (
    <AboutChapter chapter={chapter} modifier="influences">
      <div className="influence-records">
        <InfluenceList
          records={creativeInfluences}
          selectedId={selectedInfluence.id}
          onSelect={setSelectedId}
        />
        <InfluenceDetail influence={selectedInfluence} />
      </div>
    </AboutChapter>
  )
}
