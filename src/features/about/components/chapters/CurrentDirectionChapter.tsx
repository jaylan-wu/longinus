import { currentDirection } from '../../data/currentDirection'
import {
  AboutChapter,
  type AboutChapterComponentProps,
} from '../AboutChapter'
import { ChapterHeading } from '../ChapterHeading'

export function CurrentDirectionChapter({ chapter }: AboutChapterComponentProps) {
  return (
    <AboutChapter chapter={chapter} modifier="direction">
      <ChapterHeading chapter={chapter} />
      <p className="about-direction__statement">
        {currentDirection.statement}
      </p>
      <p className="about-chapter__lead">{currentDirection.longinusStatement}</p>
      <ul className="about-direction__areas" aria-label="Current areas of exploration">
        {currentDirection.explorationAreas.map((area, index) => <li key={area}><span>{String(index + 1).padStart(2, '0')}</span>{area}</li>)}
      </ul>
      <p className="about-direction__closing">{currentDirection.closing}</p>
      <nav className="about-direction__actions" aria-label="About page actions">
        {currentDirection.actions.map((action) => (
          <a key={action.label} href={action.href}>{action.label} <span aria-hidden="true">↗</span></a>
        ))}
      </nav>
    </AboutChapter>
  )
}
