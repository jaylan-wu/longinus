import { outsideSystem } from '../../data/photographs'
import {
  AboutChapter,
  type AboutChapterComponentProps,
} from '../AboutChapter'
import { ChapterHeading } from '../ChapterHeading'
import { PhotographyGallery } from './PhotographyGallery'

export function OutsideSystemChapter({ chapter }: AboutChapterComponentProps) {
  return (
    <AboutChapter chapter={chapter} modifier="outside">
      <ChapterHeading chapter={chapter} />
      <div className="about-outside__content">
        <p className="about-outside__display-title" aria-hidden="true">
          Outside the System
        </p>
        <p className="about-outside__introduction">{outsideSystem.introduction}</p>
        <PhotographyGallery photos={outsideSystem.photos} />
      </div>
    </AboutChapter>
  )
}
