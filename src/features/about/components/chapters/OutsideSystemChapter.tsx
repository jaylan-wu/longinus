import { outsideSystem } from '../../data/photographs'
import {
  AboutChapter,
  type AboutChapterComponentProps,
} from '../AboutChapter'
import { PhotographyGallery } from './PhotographyGallery'

export function OutsideSystemChapter({
  chapter,
  motionState,
}: AboutChapterComponentProps) {
  return (
    <AboutChapter
      chapter={chapter}
      modifier="outside"
      motionState={motionState}
    >
      <div className="about-outside__content">
        <p
          className="about-chapter__display-title about-outside__display-title about-motion-group about-motion-group--title"
          aria-hidden="true"
        >
          Outside the System
        </p>
        <p className="about-outside__introduction about-motion-group about-motion-group--lead">
          {outsideSystem.introduction}
        </p>
        <PhotographyGallery photos={outsideSystem.photos} />
      </div>
    </AboutChapter>
  )
}
