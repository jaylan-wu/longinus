import { identity } from '../../aboutData'

export function IdentityChapter() {
  return (
    <section className="about-chapter about-chapter--identity" id="identity" aria-labelledby="identity-title">
      <div className="about-identity__content">
        <div className="about-chapter__heading about-chapter__heading--identity">
          <p className="about-chapter__kicker"><span>01 /</span> Identity</p>
          <dl className="about-identity__subject" aria-label="Primary identity">
            <div><dt>Name</dt><dd>{identity.name}</dd></div>
            <div><dt>Location</dt><dd>{identity.location}</dd></div>
          </dl>
          <h1 id="identity-title" aria-label={identity.displayStatement.join(' ')}>
            {identity.displayStatement.map((line) => <span key={line} aria-hidden="true">{line}</span>)}
          </h1>
        </div>
        <div className="about-identity__statement">
          {identity.openingStatement.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <ul className="about-identity__axes" aria-label="Primary areas of interest">
          {identity.axes.map((axis) => (
            <li key={axis.id}>
              <p className="about-identity__axis-heading"><span>{axis.id}</span>{axis.label}</p>
              <p className="about-identity__axis-statement" aria-label={axis.shortStatement.join(' ')}>
                {axis.shortStatement.map((line) => <span key={line} aria-hidden="true">{line}</span>)}
              </p>
              <p className="about-identity__axis-supporting">{axis.supportingStatement}</p>
            </li>
          ))}
        </ul>
        <p className="about-identity__signature"><span>Creative signature</span>{identity.creativeSignature}</p>
      </div>
    </section>
  )
}
