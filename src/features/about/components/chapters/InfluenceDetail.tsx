import type { InfluenceRecord } from '../../types/about'
import { InfluenceNarrative } from './InfluenceNarrative'

type InfluenceDetailProps = {
  detailId: string
  influence: InfluenceRecord
}

export function InfluenceDetail({ detailId, influence }: InfluenceDetailProps) {
  const titleId = `influence-${influence.id.toLowerCase()}-title`

  return (
    <article
      className="influence-detail"
      id={detailId}
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
