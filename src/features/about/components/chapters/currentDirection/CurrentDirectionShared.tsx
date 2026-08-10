import { currentDirection } from '../../../data/currentDirection'

const directionJourney = [
  'Who I am',
  'What shaped me',
  'What I notice',
  'What influences me',
  'What I am moving toward',
] as const

export function DirectionJourney() {
  return (
    <ol className="direction-journey" aria-label="About narrative progression">
      {directionJourney.map((step, index) => (
        <li
          className={index === directionJourney.length - 1 ? 'is-current' : undefined}
          key={step}
          aria-current={index === directionJourney.length - 1 ? 'step' : undefined}
        >
          <span>{String(index + 1).padStart(2, '0')}</span>
          <span>{step}</span>
        </li>
      ))}
    </ol>
  )
}

export function CurrentExperimentRecord() {
  return (
    <article
      className="direction-experiment-record"
      data-direction-region="experiment"
      aria-labelledby="direction-experiment-title"
    >
      <header className="direction-experiment-record__header">
        <p><span>REC-001</span> Current experiment</p>
        <p>About / Current Direction</p>
      </header>

      <div className="direction-experiment-record__identity">
        <p>Interactive portfolio system</p>
        <h3 id="direction-experiment-title">Longinus</h3>
      </div>

      <dl className="direction-experiment-record__metadata">
        <div>
          <dt>Format</dt>
          <dd>Interactive portfolio</dd>
        </div>
        <div>
          <dt>Foundation</dt>
          <dd>Software engineering skills</dd>
        </div>
        <div>
          <dt>Purpose</dt>
          <dd>Testing ground</dd>
        </div>
      </dl>

      <p className="direction-experiment-record__reflection">
        {currentDirection.longinusStatement}
      </p>
    </article>
  )
}

export function DirectionClosing() {
  return (
    <footer className="direction-closing" data-direction-page="closing">
      <p className="direction-closing__statement">{currentDirection.closing}</p>
      <nav className="direction-closing__actions" aria-label="Current Direction actions">
        {currentDirection.actions.map((action) => (
          <a key={action.label} href={action.href}>
            {action.label} <span aria-hidden="true">↗</span>
          </a>
        ))}
      </nav>
    </footer>
  )
}
