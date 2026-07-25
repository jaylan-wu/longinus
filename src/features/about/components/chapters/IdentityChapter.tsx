import { identity } from '../../data/identity'
import {
  AboutChapter,
  type AboutChapterComponentProps,
} from '../AboutChapter'

export function IdentityChapter({ chapter }: AboutChapterComponentProps) {
  return (
    <AboutChapter chapter={chapter} modifier="identity">
      <div className="about-identity__content">
        <div className="about-chapter__heading about-chapter__heading--identity">
          <p className="about-chapter__kicker"><span>{chapter.index} /</span> {chapter.label}</p>
          <dl className="about-identity__subject" aria-label="Primary identity">
            <div><dt>Name</dt><dd>{identity.name}</dd></div>
          </dl>
          <h1 id={chapter.headingId} aria-label={identity.displayStatement.join(' ')}>
            {identity.displayStatement.map((line) => <span key={line} aria-hidden="true">{line}</span>)}
          </h1>
        </div>
        <div className="about-identity__statement">
          <p>{identity.openingStatement.context}</p>
          <p className="about-identity__pivot">
            <strong>{identity.openingStatement.pivot}</strong>{' '}
            {identity.openingStatement.realization}
          </p>
          <p>{identity.openingStatement.connection}</p>
        </div>
        <ul className="about-identity__axes" aria-label="Primary areas of interest">
          {identity.axes.map((axis) => (
            <li key={axis.id}>
              <p className="about-identity__axis-heading"><span>{axis.id}</span>{axis.label}</p>
              <p className="about-identity__axis-statement">{axis.shortStatement}</p>
              <p className="about-identity__axis-supporting">{axis.supportingStatement}</p>
            </li>
          ))}
        </ul>
        <p className="about-identity__signature"><span>Creative signature</span>{identity.creativeSignature}</p>
      </div>
    </AboutChapter>
  )
}
