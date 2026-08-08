import { usePhotographyCarousel } from '../../hooks/usePhotographyCarousel'
import type { PhotographyRecord } from '../../types/about'
import { PhotographyCarousel } from './PhotographyCarousel'
import { formatPhotoLocation } from './photographyPresentation'
import { SelectedPhotograph } from './SelectedPhotograph'

type PhotographyGalleryProps = {
  photos: readonly PhotographyRecord[]
}

export function PhotographyGallery({ photos }: PhotographyGalleryProps) {
  const carousel = usePhotographyCarousel(photos)

  if (!carousel.selectedPhoto) return null

  return (
    <div className="photo-gallery">
      <SelectedPhotograph
        photo={carousel.selectedPhoto}
        prioritize={carousel.selectedPhotoIndex === 0}
      />
      <p className="about__visually-hidden" aria-live="polite" aria-atomic="true">
        {carousel.selectedPhoto.id} selected, {formatPhotoLocation(carousel.selectedPhoto)}, {carousel.selectedPhoto.year}
      </p>

      <PhotographyCarousel
        carouselRef={carousel.carouselRef}
        isWrapping={carousel.isWrapping}
        photoCount={carousel.photoCount}
        selectedPhotoIndex={carousel.selectedPhotoIndex}
        slides={carousel.slides}
        onKeyDown={carousel.handleCarouselKeyDown}
        onSelectAdjacentPhoto={carousel.selectAdjacentPhoto}
        onSelectPhoto={carousel.selectPhoto}
        setPhotoButtonRef={carousel.setPhotoButtonRef}
      />
    </div>
  )
}
