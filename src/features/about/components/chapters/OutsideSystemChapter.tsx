import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useReducedMotion } from '../../../../hooks/useReducedMotion'
import { outsideSystem } from '../../data/photographs'
import type { PhotographyRecord } from '../../types/about'
import {
  AboutChapter,
  type AboutChapterComponentProps,
} from '../AboutChapter'
import { ChapterHeading } from '../ChapterHeading'

function PhotoImage({ photo }: { photo: PhotographyRecord }) {
  const imprint = [photo.camera, photo.year].filter(Boolean).join(' / ')

  return (
    <div className="photo-image">
      <img src={photo.imageSrc} alt={photo.alt} />
      <span className="photo-image__record" aria-hidden="true">{photo.id}</span>
      <span className="photo-image__imprint" aria-hidden="true">{imprint}</span>
    </div>
  )
}

const PHOTO_CAROUSEL_SCROLL_DURATION = 420

function centerCarouselItem(
  carousel: HTMLUListElement,
  item: HTMLElement,
  behavior: ScrollBehavior,
) {
  const centeredPosition = item.offsetLeft - (carousel.clientWidth - item.clientWidth) / 2
  carousel.scrollTo({ left: Math.max(0, centeredPosition), behavior })
}

export function OutsideSystemChapter({ chapter }: AboutChapterComponentProps) {
  const photoCount = outsideSystem.photos.length
  const [carouselIndex, setCarouselIndex] = useState(photoCount)
  const carouselRef = useRef<HTMLUListElement>(null)
  const carouselIndexRef = useRef(carouselIndex)
  const hasPositionedCarousel = useRef(false)
  const skipScrollAnimation = useRef(false)
  const reducedMotion = useReducedMotion()
  const selectedPhotoIndex = ((carouselIndex % photoCount) + photoCount) % photoCount
  const selected = outsideSystem.photos[selectedPhotoIndex]
  const carouselSlides = Array.from({ length: 3 }, (_, cycle) =>
    outsideSystem.photos.map((photo, photoIndex) => ({
      carouselIndex: cycle * photoCount + photoIndex,
      cycle,
      photo,
      photoIndex,
    })),
  ).flat()

  useLayoutEffect(() => {
    carouselIndexRef.current = carouselIndex
  }, [carouselIndex])

  useLayoutEffect(() => {
    const carousel = carouselRef.current
    const selectedItem = carousel?.querySelector<HTMLElement>(`[data-carousel-index="${carouselIndex}"]`)

    if (!carousel || !selectedItem) return

    const shouldAnimate = hasPositionedCarousel.current && !skipScrollAnimation.current && !reducedMotion

    centerCarouselItem(carousel, selectedItem, shouldAnimate ? 'smooth' : 'auto')
    hasPositionedCarousel.current = true
    skipScrollAnimation.current = false

    const normalizedIndex = carouselIndex < photoCount
      ? carouselIndex + photoCount
      : carouselIndex >= photoCount * 2
        ? carouselIndex - photoCount
        : null

    if (normalizedIndex === null) return

    const normalizationTimer = window.setTimeout(() => {
      skipScrollAnimation.current = true
      setCarouselIndex(normalizedIndex)
    }, reducedMotion ? 0 : PHOTO_CAROUSEL_SCROLL_DURATION)

    return () => window.clearTimeout(normalizationTimer)
  }, [carouselIndex, photoCount, reducedMotion])

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let animationFrame = 0
    const recenterSelectedPhoto = () => {
      cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(() => {
        const selectedItem = carousel.querySelector<HTMLElement>(
          `[data-carousel-index="${carouselIndexRef.current}"]`,
        )
        if (selectedItem) centerCarouselItem(carousel, selectedItem, 'auto')
      })
    }
    const resizeObserver = new ResizeObserver(recenterSelectedPhoto)

    resizeObserver.observe(carousel)
    return () => {
      cancelAnimationFrame(animationFrame)
      resizeObserver.disconnect()
    }
  }, [])

  const selectAdjacentPhoto = (direction: -1 | 1) => {
    let currentIndex = carouselIndex
    const nextIndex = currentIndex + direction

    if (nextIndex < 0 || nextIndex >= photoCount * 3) {
      currentIndex = selectedPhotoIndex + photoCount

      const carousel = carouselRef.current
      const matchingMiddleSlide = carousel?.querySelector<HTMLElement>(
        `[data-carousel-index="${currentIndex}"]`,
      )

      if (carousel && matchingMiddleSlide) {
        centerCarouselItem(carousel, matchingMiddleSlide, 'auto')
      }
    }

    setCarouselIndex(currentIndex + direction)
  }

  return (
    <AboutChapter chapter={chapter} modifier="outside">
      <ChapterHeading chapter={chapter} />
      <p className="about-chapter__lead">{outsideSystem.travelStatement}</p>
      <p className="about-chapter__lead">{outsideSystem.photographyStatement}</p>
      <div className="photo-selected" aria-live="polite">
        <div className="photo-selected__visual" key={`visual-${selected.id}`}>
          <PhotoImage photo={selected} />
        </div>
        <div className="photo-selected__caption" key={`caption-${selected.id}`}>
          <p><span>Selected image</span>{selected.id}</p>
          <h3>
            {selected.location}{selected.country ? `, ${selected.country}` : ''} / {selected.year}
          </h3>
          {selected.caption ? <p>{selected.caption}</p> : null}
          {selected.reflection ? <p>{selected.reflection}</p> : null}
        </div>
      </div>
      <div className="photo-carousel" role="region" aria-label="Photography archive carousel">
        <button
          type="button"
          className="photo-carousel__control photo-carousel__control--previous"
          aria-label="Select previous photograph"
          aria-controls="photo-carousel-track"
          onClick={() => selectAdjacentPhoto(-1)}
        >
          <span aria-hidden="true">←</span>
        </button>
        <ul className="photo-carousel__track" id="photo-carousel-track" ref={carouselRef}>
          {carouselSlides.map(({ carouselIndex: slideIndex, cycle, photo, photoIndex }) => (
            <li
              key={`${cycle}-${photo.id}`}
              data-carousel-index={slideIndex}
              aria-hidden={cycle !== 1}
            >
              <button
                type="button"
                className={`photo-record${photo.id === selected.id ? ' is-active' : ''}`}
                aria-label={`Select photograph from ${photo.location}`}
                aria-pressed={photo.id === selected.id}
                aria-current={slideIndex === carouselIndex ? 'true' : undefined}
                tabIndex={cycle === 1 ? 0 : -1}
                onClick={() => setCarouselIndex(cycle === 1 ? photoCount + photoIndex : slideIndex)}
              >
                <PhotoImage photo={photo} />
                <span className="photo-record__metadata"><strong>{photo.id}</strong>{photo.location} / {photo.year}</span>
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="photo-carousel__control photo-carousel__control--next"
          aria-label="Select next photograph"
          aria-controls="photo-carousel-track"
          onClick={() => selectAdjacentPhoto(1)}
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </AboutChapter>
  )
}
