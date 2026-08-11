import { identity } from '../../data/identity'
import { PERSONAL_AXIS_LABELS } from '../../../../types/personalAxis'
import {
  AboutChapter,
  type AboutChapterComponentProps,
} from '../AboutChapter'

export function IdentityChapter({
  chapter,
  motionState,
}: AboutChapterComponentProps) {
  return (
    <AboutChapter
      chapter={chapter}
      modifier="identity"
      motionState={motionState}
    >
      <div className="about-identity__content">
        <div className="about-identity__introduction">
          <p className="about-chapter__display-title about-identity__display about-motion-group about-motion-group--title">
            {identity.displayStatement.map((line) => (
              <span key={line} aria-hidden="true">{line}</span>
            ))}
            <span className="about__visually-hidden">
              {identity.displayStatement.join(' ')}
            </span>
          </p>
          <div className="about-identity__statement about-motion-group about-motion-group--lead">
            <p>{identity.openingStatement.context}</p>
            <p className="about-identity__pivot">
              <strong>{identity.openingStatement.pivot}</strong>{' '}
              {identity.openingStatement.realization}
            </p>
            <p>{identity.openingStatement.connection}</p>
          </div>
        </div>
        <ul
          className="about-identity__axes about-motion-group about-motion-group--structure about-motion-rule about-motion-rule--frame"
          aria-label="Primary areas of interest"
        >
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
        <div className="about-identity__metadata about-motion-group about-motion-group--metadata">
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
