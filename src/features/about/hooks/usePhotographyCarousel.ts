import {
  type KeyboardEvent,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import type { PhotographyRecord } from '../types/about'

export type PhotographySlide = {
  key: string
  photo: PhotographyRecord
  photoIndex: number
  trackIndex: number
  isClone: boolean
}

const PHOTO_CAROUSEL_VISIBLE_ITEM_COUNT = 5
const PHOTO_CAROUSEL_EDGE_CLONE_COUNT = PHOTO_CAROUSEL_VISIBLE_ITEM_COUNT - 1
const PHOTO_CAROUSEL_SETTLE_TOLERANCE = 1.5
const PHOTO_CAROUSEL_MAX_SETTLE_DURATION_MS = 2500

function centerCarouselItem(
  carousel: HTMLUListElement,
  item: HTMLElement,
  behavior: ScrollBehavior,
) {
  const carouselBounds = carousel.getBoundingClientRect()
  const itemBounds = item.getBoundingClientRect()
  const centeredPosition = (
    carousel.scrollLeft
    + itemBounds.left
    + itemBounds.width / 2
    - carouselBounds.left
    - carousel.clientWidth / 2
  )
  const maximumScrollPosition = Math.max(
    0,
    carousel.scrollWidth - carousel.clientWidth,
  )
  const targetPosition = Math.min(
    maximumScrollPosition,
    Math.max(0, centeredPosition),
  )

  carousel.scrollTo({ left: targetPosition, behavior })
  return targetPosition
}

export function usePhotographyCarousel(photos: readonly PhotographyRecord[]) {
  const photoCount = photos.length
  const edgeCloneCount = Math.min(PHOTO_CAROUSEL_EDGE_CLONE_COUNT, photoCount)
  const realTrackStart = edgeCloneCount
  const realTrackEnd = edgeCloneCount + photoCount
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0)
  const [trackIndex, setTrackIndex] = useState(realTrackStart)
  const [isWrapping, setIsWrapping] = useState(false)
  const carouselRef = useRef<HTMLUListElement>(null)
  const trackIndexRef = useRef(trackIndex)
  const selectedPhotoIndexRef = useRef(selectedPhotoIndex)
  const isWrappingRef = useRef(false)
  const photoButtonRefs = useRef<Array<HTMLButtonElement | null>>([])
  const hasPositionedCarousel = useRef(false)
  const skipScrollAnimation = useRef(false)
  const reducedMotion = useReducedMotion()

  const slides = useMemo<PhotographySlide[]>(() => {
    if (photoCount === 0) return []

    const leadingSlides = Array.from({ length: edgeCloneCount }, (_, cloneIndex) => {
      const photoIndex = photoCount - edgeCloneCount + cloneIndex
      const photo = photos[photoIndex]

      return {
        key: `leading-${cloneIndex}-${photo.id}`,
        photo,
        photoIndex,
        trackIndex: cloneIndex,
        isClone: true,
      }
    })

    const realSlides = photos.map((photo, photoIndex) => ({
      key: photo.id,
      photo,
      photoIndex,
      trackIndex: realTrackStart + photoIndex,
      isClone: false,
    }))

    const trailingSlides = Array.from({ length: edgeCloneCount }, (_, cloneIndex) => {
      const photoIndex = cloneIndex
      const photo = photos[photoIndex]

      return {
        key: `trailing-${cloneIndex}-${photo.id}`,
        photo,
        photoIndex,
        trackIndex: realTrackEnd + cloneIndex,
        isClone: true,
      }
    })

    return [
      ...leadingSlides,
      ...realSlides,
      ...trailingSlides,
    ]
  }, [edgeCloneCount, photoCount, photos, realTrackEnd, realTrackStart])

  useLayoutEffect(() => {
    trackIndexRef.current = trackIndex
  }, [trackIndex])

  useLayoutEffect(() => {
    const carousel = carouselRef.current
    const selectedItem = carousel?.querySelector<HTMLElement>(
      `[data-track-index="${trackIndex}"]`,
    )

    if (!carousel || !selectedItem) return

    const shouldAnimate = (
      hasPositionedCarousel.current
      && !skipScrollAnimation.current
      && !reducedMotion
    )

    const targetPosition = centerCarouselItem(
      carousel,
      selectedItem,
      shouldAnimate ? 'smooth' : 'auto',
    )
    hasPositionedCarousel.current = true
    skipScrollAnimation.current = false

    const normalizedTrackIndex = trackIndex < realTrackStart
      ? trackIndex + photoCount
      : trackIndex >= realTrackEnd
        ? trackIndex - photoCount
        : null

    if (normalizedTrackIndex === null) return

    const normalizeTrack = () => {
      const focusedClone = (
        document.activeElement instanceof HTMLElement
        && document.activeElement.closest('.photo-carousel__track li[aria-hidden="true"]')
      )

      skipScrollAnimation.current = true
      trackIndexRef.current = normalizedTrackIndex
      isWrappingRef.current = false
      setIsWrapping(false)
      setTrackIndex(normalizedTrackIndex)

      if (focusedClone) {
        photoButtonRefs.current[selectedPhotoIndexRef.current]?.focus({
          preventScroll: true,
        })
      }
    }

    if (!shouldAnimate) {
      normalizeTrack()
      return
    }

    let animationFrame = 0
    let settledFrameCount = 0
    let settleStartedAt: number | null = null

    const waitForCenteredPosition = (timestamp: number) => {
      settleStartedAt ??= timestamp

      const distanceFromTarget = Math.abs(carousel.scrollLeft - targetPosition)
      settledFrameCount = distanceFromTarget <= PHOTO_CAROUSEL_SETTLE_TOLERANCE
        ? settledFrameCount + 1
        : 0

      if (
        settledFrameCount >= 2
        || timestamp - settleStartedAt >= PHOTO_CAROUSEL_MAX_SETTLE_DURATION_MS
      ) {
        normalizeTrack()
        return
      }

      animationFrame = requestAnimationFrame(waitForCenteredPosition)
    }

    animationFrame = requestAnimationFrame(waitForCenteredPosition)
    return () => cancelAnimationFrame(animationFrame)
  }, [photoCount, realTrackEnd, realTrackStart, reducedMotion, trackIndex])

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let animationFrame = 0
    const recenterSelectedPhoto = () => {
      cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(() => {
        const selectedItem = carousel.querySelector<HTMLElement>(
          `[data-track-index="${trackIndexRef.current}"]`,
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

  const getRealTrackIndex = (photoIndex: number) => realTrackStart + photoIndex

  const selectPhoto = (
    photoIndex: number,
    nextTrackIndex = getRealTrackIndex(photoIndex),
  ) => {
    if (isWrappingRef.current) return

    const nextSelectionWraps = (
      nextTrackIndex < realTrackStart
      || nextTrackIndex >= realTrackEnd
    )

    selectedPhotoIndexRef.current = photoIndex
    trackIndexRef.current = nextTrackIndex
    isWrappingRef.current = nextSelectionWraps
    setIsWrapping(nextSelectionWraps)
    setSelectedPhotoIndex(photoIndex)
    setTrackIndex(nextTrackIndex)
  }

  const selectAdjacentPhoto = (direction: -1 | 1) => {
    if (isWrappingRef.current) return

    const nextPhotoIndex = (
      selectedPhotoIndexRef.current + direction + photoCount
    ) % photoCount
    selectPhoto(nextPhotoIndex, trackIndexRef.current + direction)
  }

  const handleCarouselKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    const target = event.target as HTMLElement
    const photoButton = target.closest<HTMLButtonElement>('[data-photo-index]')
    const currentPhotoIndex = Number(photoButton?.dataset.photoIndex)

    if (!photoButton || Number.isNaN(currentPhotoIndex)) return

    if (isWrappingRef.current) {
      if (
        event.key === 'ArrowLeft'
        || event.key === 'ArrowRight'
        || event.key === 'Home'
        || event.key === 'End'
      ) {
        event.preventDefault()
      }
      return
    }

    let nextPhotoIndex: number | null = null
    let nextTrackIndex: number | undefined

    if (event.key === 'ArrowLeft') {
      nextPhotoIndex = (currentPhotoIndex - 1 + photoCount) % photoCount
      if (currentPhotoIndex === 0) nextTrackIndex = realTrackStart - 1
    } else if (event.key === 'ArrowRight') {
      nextPhotoIndex = (currentPhotoIndex + 1) % photoCount
      if (currentPhotoIndex === photoCount - 1) nextTrackIndex = realTrackEnd
    } else if (event.key === 'Home') {
      nextPhotoIndex = 0
    } else if (event.key === 'End') {
      nextPhotoIndex = photoCount - 1
    }

    if (nextPhotoIndex === null) return

    event.preventDefault()
    selectPhoto(nextPhotoIndex, nextTrackIndex)
    photoButtonRefs.current[nextPhotoIndex]?.focus({ preventScroll: true })
  }

  const setPhotoButtonRef = (
    photoIndex: number,
    button: HTMLButtonElement | null,
  ) => {
    photoButtonRefs.current[photoIndex] = button
  }

  return {
    carouselRef,
    handleCarouselKeyDown,
    isWrapping,
    photoCount,
    selectedPhoto: photos[selectedPhotoIndex],
    selectedPhotoIndex,
    selectAdjacentPhoto,
    selectPhoto,
    setPhotoButtonRef,
    slides,
  }
}
