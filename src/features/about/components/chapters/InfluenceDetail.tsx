import type { InfluenceRecord } from '../../types/about'
import { InfluenceNarrative } from './InfluenceNarrative'

type InfluenceDetailProps = {
  detailId: string
  influence: InfluenceRecord
}

export function InfluenceDetail({ detailId, influence }: InfluenceDetailProps) {
  const titleId = `influence-${influence.id.toLowerCase()}-title`
  const categoriesId = `influence-${influence.id.toLowerCase()}-categories`

  return (
    <article
      className="influence-detail about-motion-group about-motion-group--detail"
      id={detailId}
      aria-labelledby={titleId}
      aria-live="polite"
    >
      <div className="influence-detail__content" key={influence.id}>
        <h3 className="about__visually-hidden" id={titleId}>
          {influence.title}
        </h3>
        <p className="influence-detail__eyebrow">
          <span>{influence.id}</span>
          <span>{influence.displayMedium ?? influence.medium} / {influence.releaseYear}</span>
        </p>

        {influence.image ? (
          <img
            className="influence-detail__image"
            src={influence.image.src}
            alt={influence.image.alt}
            width={influence.image.width}
            height={influence.image.height}
            loading="lazy"
            decoding="async"
          />
        ) : null}

        <figure className="influence-detail__quote">
          <blockquote>
            <p>{influence.featuredQuote}</p>
          </blockquote>
          {influence.quoteAttribution ? (
            <figcaption>— {influence.quoteAttribution}</figcaption>
          ) : null}
        </figure>

        <InfluenceNarrative
          className="influence-detail__reflection"
          heading="Personal reflection"
          paragraphs={influence.displayReflection}
        />

        <section
          className="influence-detail__categories"
          aria-labelledby={categoriesId}
        >
          <h4 id={categoriesId}>Influence categories</h4>
          <ul>
            {influence.categories.map((category) => <li key={category}>{category}</li>)}
          </ul>
        </section>
      </div>
    </article>
  )
}
