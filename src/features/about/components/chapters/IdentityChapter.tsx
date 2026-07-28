import { identity } from '../../data/identity'
import { PERSONAL_AXIS_LABELS } from '../../../../types/personalAxis'
import {
  AboutChapter,
  type AboutChapterComponentProps,
} from '../AboutChapter'
import { ChapterHeading } from '../ChapterHeading'

export function IdentityChapter({ chapter }: AboutChapterComponentProps) {
  return (
    <AboutChapter chapter={chapter} modifier="identity">
      <ChapterHeading chapter={chapter} />
      <div className="about-identity__content">
        <div className="about-identity__introduction">
          <p className="about-identity__display">
            {identity.displayStatement.map((line) => (
              <span key={line} aria-hidden="true">{line}</span>
            ))}
            <span className="about__visually-hidden">
              {identity.displayStatement.join(' ')}
            </span>
          </p>
          <div className="about-identity__statement">
            <p>{identity.openingStatement.context}</p>
            <p className="about-identity__pivot">
              <strong>{identity.openingStatement.pivot}</strong>{' '}
              {identity.openingStatement.realization}
            </p>
            <p>{identity.openingStatement.connection}</p>
          </div>
        </div>
        <ul className="about-identity__axes" aria-label="Primary areas of interest">
          {identity.axes.map((axis) => (
            <li key={axis.id}>
              <p className="about-identity__axis-heading">
                <span>{axis.id}</span>
                {PERSONAL_AXIS_LABELS[axis.axis]}
              </p>
              <p
                className="about-identity__axis-statement"
                aria-label={axis.shortStatement}
              >
                {axis.shortStatementLines.map((line) => (
                  <span key={line} aria-hidden="true">{line}</span>
                ))}
              </p>
              <p className="about-identity__axis-supporting">{axis.supportingStatement}</p>
            </li>
          ))}
        </ul>
        <div className="about-identity__metadata">
          <dl aria-label="Identity metadata">
            <div>
              <dt>Name</dt>
              <dd>{identity.name}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{identity.location}</dd>
            </div>
          </dl>
          <p className="about-identity__signature">
            <span>Creative signature</span>
            {identity.creativeSignature}
          </p>
        </div>
      </div>
    </AboutChapter>
  )
}
