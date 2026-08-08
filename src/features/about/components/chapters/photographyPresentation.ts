import type { PhotographyRecord } from '../../types/about'

export function formatPhotoLocation(photo: PhotographyRecord) {
  return [photo.location, photo.country].filter(Boolean).join(', ')
}
