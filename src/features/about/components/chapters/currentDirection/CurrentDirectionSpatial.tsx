import { currentDirection } from '../../../data/currentDirection'
import {
  CurrentExperimentRecord,
  DirectionClosing,
  DirectionJourney,
} from './CurrentDirectionShared'
import {
  currentDirectionAxes,
  useDirectionAxisInteraction,
} from './currentDirectionState'

export function CurrentDirectionSpatial() {
  const {
    activeAxis,
    getAxisInteractionProps,
  } = useDirectionAxisInteraction()
  const emphasizedAxis = activeAxis
  const emphasizedAxisRecord = currentDirectionAxes.find(
    (axis) => axis.axis === emphasizedAxis,
  )

  return (
    <div className="direction-spatial">
      <div
        className="direction-spatial__page direction-spatial__page--system"
        data-direction-page="system"
      >
        <header className="direction-spatial__introduction">
          <h3
            className="about-chapter__display-title direction-spatial__title"
            id="direction-spatial-title"
          >
            Current Direction
          </h3>
          <p className="direction-spatial__statement">
            {currentDirection.statement}
          </p>
        </header>

        <div className="direction-spatial__journey">
          <DirectionJourney />
        </div>

        <section
          className="direction-spatial__system"
          aria-label="Perspectives shaping Current Direction"
        >
          <header className="direction-spatial__system-header">
            <span>Perspective relationship</span>
            <span aria-hidden="true">AX-01 — AX-03</span>
          </header>

          <div
            className="direction-spatial__field"
            data-active-axis={emphasizedAxis ?? 'all'}
          >
            <svg
              className="direction-spatial__connections"
              viewBox="0 0 1000 720"
              preserveAspectRatio="none"
              aria-hidden="true"
              focusable="false"
            >
              <path
                className="direction-spatial__connection direction-spatial__connection--engineering"
                d="M 332 142 C 414 152, 402 256, 470 329"
                pathLength="1"
              />
              <path
                className="direction-spatial__connection direction-spatial__connection--game-design"
                d="M 766 248 C 674 246, 606 301, 508 343"
                pathLength="1"
              />
              <path
                className="direction-spatial__connection direction-spatial__connection--education"
                d="M 341 532 C 420 524, 414 427, 474 379"
                pathLength="1"
              />
              <path
                className="direction-spatial__connection direction-spatial__connection--output"
                d="M 508 389 C 552 463, 696 456, 704 532 L 585 618"
                pathLength="1"
              />
              <path
                className="direction-spatial__connection direction-spatial__connection--output"
                d="M 508 389 C 552 463, 696 456, 704 532 L 754 630"
                pathLength="1"
              />
              <path
                className="direction-spatial__connection direction-spatial__connection--output"
                d="M 508 389 C 552 463, 696 456, 704 532 L 912 642"
                pathLength="1"
              />
              <rect
                className="direction-spatial__junction"
                x="697"
                y="525"
                width="14"
                height="14"
              />
            </svg>

            <div className="direction-spatial__core" id="direction-spatial-resolution">
              <span className="direction-spatial__core-index">Resolution / 01</span>
              <p
                className="direction-spatial__core-focus"
                aria-live="polite"
                aria-atomic="true"
              >
                {emphasizedAxisRecord?.label ?? 'All axes'}
              </p>
              <p className="direction-spatial__core-status">Perspective</p>
            </div>

            <ol
              className="direction-spatial__axes"
              aria-label="Perspectives shaping current direction"
            >
              {currentDirectionAxes.map((axis) => {
                const isEmphasized = emphasizedAxis === axis.axis

                return (
                  <li
                    className={[
                      'direction-spatial__axis',
                      `direction-spatial__axis--${axis.axis}`,
                      isEmphasized ? 'is-emphasized' : '',
                    ].filter(Boolean).join(' ')}
                    key={axis.id}
                  >
                    <button
                      {...getAxisInteractionProps(axis.axis)}
                      className="direction-spatial__axis-button"
                      type="button"
                      aria-controls="direction-spatial-resolution"
                    >
                      <span className="direction-spatial__axis-heading">
                        <span>{axis.id}</span>
                        <strong>{axis.label}</strong>
                      </span>
                      <span className="direction-spatial__axis-statement">
                        {axis.shortStatement}
                      </span>
                      <span className="direction-spatial__axis-supporting">
                        {axis.supportingStatement}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ol>

            <section
              className="direction-spatial__explorations"
              aria-labelledby="direction-spatial-exploration-title"
            >
              <h4 id="direction-spatial-exploration-title">Current exploration</h4>
              <ol>
                {currentDirection.explorationAreas.map((area, index) => (
                  <li key={area}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{area}</strong>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </section>

        <CurrentExperimentRecord />
      </div>

      <DirectionClosing />
    </div>
  )
}
