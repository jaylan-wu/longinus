import { outsideSystem } from '../../data/photographs'
import {
  AboutChapter,
  type AboutChapterComponentProps,
} from '../AboutChapter'
import { PhotographyGallery } from './PhotographyGallery'

export function OutsideSystemChapter({ chapter }: AboutChapterComponentProps) {
  return (
    <AboutChapter chapter={chapter} modifier="outside">
      <div className="about-outside__content">
        <p
          className="about-chapter__display-title about-outside__display-title"
          aria-hidden="true"
        >
          Outside the System
        </p>
        <p className="about-outside__introduction">{outsideSystem.introduction}</p>
        <PhotographyGallery photos={outsideSystem.photos} />
      </div>
    </AboutChapter>
  )
}
