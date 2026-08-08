import {
  type KeyboardEventHandler,
  type RefObject,
} from 'react'
import type { PhotographySlide } from '../../hooks/usePhotographyCarousel'
import type { PhotographyRecord } from '../../types/about'
import { formatPhotoLocation } from './photographyPresentation'

type PhotographyThumbnailProps = {
  isActive: boolean
  isClone: boolean
  photo: PhotographyRecord
  photoIndex: number
  setButtonRef: (button: HTMLButtonElement | null) => void
  onSelect: () => void
}

function PhotographyThumbnail({
  isActive,
  isClone,
  photo,
  photoIndex,
  setButtonRef,
  onSelect,
}: PhotographyThumbnailProps) {
  return (
    <button
      type="button"
      className={`photo-record${isActive ? ' is-active' : ''}`}
      aria-label={`Select ${photo.id}, ${formatPhotoLocation(photo)}, ${photo.year}`}
      aria-pressed={isClone ? undefined : isActive}
      aria-current={!isClone && isActive ? 'true' : undefined}
      data-photo-index={isClone ? undefined : photoIndex}
      tabIndex={isClone || !isActive ? -1 : 0}
      ref={isClone ? undefined : setButtonRef}
      onClick={onSelect}
    >
      <span className="photo-record__image" aria-hidden="true">
        <img
          src={photo.thumbnailSrc}
          alt=""
          width={photo.thumbnailWidth}
          height={photo.thumbnailHeight}
          loading="eager"
          decoding="async"
        />
      </span>
      <span className="photo-record__label">{photo.id}</span>
    </button>
  )
}

type PhotographyCarouselProps = {
  carouselRef: RefObject<HTMLUListElement | null>
  isWrapping: boolean
  photoCount: number
  selectedPhotoIndex: number
  slides: readonly PhotographySlide[]
  onKeyDown: KeyboardEventHandler<HTMLUListElement>
  onSelectAdjacentPhoto: (direction: -1 | 1) => void
  onSelectPhoto: (photoIndex: number, trackIndex: number) => void
  setPhotoButtonRef: (
    photoIndex: number,
    button: HTMLButtonElement | null,
  ) => void
}

export function PhotographyCarousel({
  carouselRef,
  isWrapping,
  photoCount,
  selectedPhotoIndex,
  slides,
  onKeyDown,
  onSelectAdjacentPhoto,
  onSelectPhoto,
  setPhotoButtonRef,
}: PhotographyCarouselProps) {
  return (
    <div
      className="photo-carousel"
      role="region"
      aria-label="Photography archive carousel"
      aria-busy={isWrapping || undefined}
    >
      <button
        type="button"
        className="photo-carousel__control photo-carousel__control--previous"
        aria-label="Select previous photograph"
        aria-controls="photo-carousel-track"
        disabled={isWrapping || photoCount < 2}
        onClick={() => onSelectAdjacentPhoto(-1)}
      >
        <span aria-hidden="true">←</span>
      </button>

      <ul
        className="photo-carousel__track"
        id="photo-carousel-track"
        ref={carouselRef}
        onKeyDown={onKeyDown}
      >
        {slides.map((slide) => (
          <li
            key={slide.key}
            data-track-index={slide.trackIndex}
            aria-hidden={slide.isClone || undefined}
          >
            <PhotographyThumbnail
              photo={slide.photo}
              photoIndex={slide.photoIndex}
              isActive={slide.photoIndex === selectedPhotoIndex}
              isClone={slide.isClone}
              setButtonRef={(button) => {
                setPhotoButtonRef(slide.photoIndex, button)
              }}
              onSelect={() => onSelectPhoto(slide.photoIndex, slide.trackIndex)}
            />
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="photo-carousel__control photo-carousel__control--next"
        aria-label="Select next photograph"
        aria-controls="photo-carousel-track"
        disabled={isWrapping || photoCount < 2}
        onClick={() => onSelectAdjacentPhoto(1)}
      >
        <span aria-hidden="true">→</span>
      </button>
    </div>
  )
}
