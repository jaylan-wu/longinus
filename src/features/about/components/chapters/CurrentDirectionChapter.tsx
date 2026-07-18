import { currentDirection } from '../../aboutData'
import { ChapterHeading } from '../ChapterHeading'

export function CurrentDirectionChapter() {
  return (
    <section className="about-chapter about-chapter--direction" id="current-direction" aria-labelledby="direction-title">
      <ChapterHeading index="05" label="Current Direction" title="Current Direction" />
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
    </section>
  )
}
