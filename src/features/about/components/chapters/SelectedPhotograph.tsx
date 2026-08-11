import type { PhotographyRecord } from '../../types/about'
import { formatPhotoLocation } from './photographyPresentation'

export function SelectedPhotograph({ photo, prioritize }: {
  photo: PhotographyRecord
  prioritize: boolean
}) {
  const imprint = [photo.camera, photo.year].filter(Boolean).join(' | ')
  const location = formatPhotoLocation(photo)
  const titleClassName = location.length > 22
    ? 'photo-selected__title photo-selected__title--long'
    : 'photo-selected__title'

  return (
    <div className="photo-selected about-motion-group about-motion-group--detail">
      <div className="photo-selected__visual" key={`visual-${photo.id}`}>
        <figure className="photo-image photo-image--selected">
          <img
            src={photo.imageSrc}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            loading="eager"
            decoding="async"
            fetchPriority={prioritize ? 'high' : 'auto'}
          />
          <figcaption aria-hidden="true">
            <span className="photo-image__record">{photo.id}</span>
            {imprint ? <span className="photo-image__imprint">{imprint}</span> : null}
          </figcaption>
        </figure>
      </div>

      <div
        className="photo-selected__caption about-motion-rule about-motion-rule--vertical"
        key={`caption-${photo.id}`}
      >
        <p className="photo-selected__eyebrow">
          <span>Selected image</span>
          <strong>{photo.id}</strong>
        </p>
        <h3 className={titleClassName}>{location} | {photo.year}</h3>
        {photo.caption ? <p className="photo-selected__personal-caption">{photo.caption}</p> : null}
        {photo.reflection ? <p className="photo-selected__reflection">{photo.reflection}</p> : null}
      </div>
    </div>
  )
}
