import { useState } from 'react'
import {
  currentDirection,
  identity,
  interactiveInfluences,
  outsideSystem,
  trajectory,
  type InfluenceRecord,
  type PhotoRecord,
  type TrajectoryRecord,
} from './aboutData'

function ChapterHeading({ index, label, title }: { index: string; label: string; title: string }) {
  return (
    <header className="about-chapter__heading">
      <p className="about-chapter__kicker"><span>{index}</span> {label}</p>
      <h2>{title}</h2>
    </header>
  )
}

function IdentityChapter() {
  return (
    <section className="about-chapter about-chapter--identity" id="identity" aria-labelledby="identity-title">
      <div className="about-chapter__heading about-chapter__heading--identity">
        <p className="about-chapter__kicker"><span>01</span> Identity</p>
        <h1 id="identity-title">{identity.name}</h1>
      </div>
      <p className="about-identity__statement">
        {identity.statement}
      </p>
      <ul className="about-identity__axes" aria-label="Primary areas of interest">
        {identity.axes.map((axis, index) => (
          <li key={axis}><span>AX-{String(index + 1).padStart(2, '0')}</span>{axis}</li>
        ))}
      </ul>
      <p className="about-identity__signature">{identity.creativeSignature} / {identity.location}</p>
    </section>
  )
}

function ExperienceDetail({ experience }: { experience: TrajectoryRecord }) {
  return (
    <article className="experience-detail" aria-live="polite">
      <div className="experience-detail__identifier"><span>Current record</span><strong>{experience.id}</strong></div>
      <h3>{experience.title}</h3>
      <p className="experience-detail__organization">{experience.organization} / {experience.period}</p>
      <dl>
        <div><dt>Context</dt><dd>{experience.context}</dd></div>
        <div><dt>Defining contribution</dt><dd>{experience.contribution}</dd></div>
        <div className="experience-detail__reflection"><dt>Reflection</dt><dd>{experience.reflection}</dd></div>
      </dl>
      <div className="experience-detail__metadata">
        <p><span>Connected axes</span>{experience.axes.join(' / ')}</p>
        <p><span>Supporting themes</span>{experience.themes.join(' / ')}</p>
      </div>
    </article>
  )
}

function TrajectoryChapter() {
  const [selectedId, setSelectedId] = useState(trajectory.records[0].id)
  const selected = trajectory.records.find((experience) => experience.id === selectedId) ?? trajectory.records[0]

  return (
    <section className="about-chapter about-chapter--trajectory" id="trajectory" aria-labelledby="trajectory-title">
      <ChapterHeading index="02" label="Trajectory" title="Trajectory" />
      <p className="about-chapter__lead">{trajectory.lead}</p>
      <div className="trajectory-records">
        <ul className="trajectory-records__index" aria-label="Experience records">
          {trajectory.records.map((experience, index) => (
            <li key={experience.id}>
              <button
                type="button"
                className={experience.id === selected.id ? 'is-active' : undefined}
                aria-pressed={experience.id === selected.id}
                onClick={() => setSelectedId(experience.id)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span><strong>{experience.organization}</strong>{experience.title}</span>
                <span aria-hidden="true">{experience.id === selected.id ? 'Selected' : 'View'}</span>
              </button>
            </li>
          ))}
        </ul>
        <ExperienceDetail experience={selected} />
      </div>
    </section>
  )
}

function PhotoImage({ photo }: { photo: PhotoRecord }) {
  return (
    <div className="photo-image">
      <img src={photo.imageSrc} alt={photo.alt} />
      <span aria-hidden="true">{photo.id}</span>
      <span aria-hidden="true">{photo.orientation}</span>
    </div>
  )
}

function OutsideSystemChapter() {
  const [selectedId, setSelectedId] = useState(outsideSystem.photos[0].id)
  const selected = outsideSystem.photos.find((photo) => photo.id === selectedId) ?? outsideSystem.photos[0]

  return (
    <section className="about-chapter about-chapter--outside" id="outside-system" aria-labelledby="outside-title">
      <ChapterHeading index="03" label="Outside the System" title="Outside the System" />
      <p className="about-chapter__lead">{outsideSystem.travelStatement}</p>
      <p className="about-chapter__lead">{outsideSystem.photographyStatement}</p>
      <div className="photo-selected" aria-live="polite">
        <PhotoImage photo={selected} />
        <div className="photo-selected__caption">
          <p><span>Selected image</span>{selected.id}</p>
          <h3>{selected.location}, {selected.country} / {selected.year}</h3>
          <p>{selected.caption}</p>
          <p>{selected.reflection}</p>
        </div>
      </div>
      <ul className="photo-archive" aria-label="Photography archive">
        {outsideSystem.photos.map((photo) => (
          <li key={photo.id}>
            <button
              type="button"
              className={`photo-record photo-record--${photo.orientation}${photo.id === selected.id ? ' is-active' : ''}`}
              aria-pressed={photo.id === selected.id}
              onClick={() => setSelectedId(photo.id)}
            >
              <PhotoImage photo={photo} />
              <span className="photo-record__metadata"><strong>{photo.id}</strong>{photo.location} / {photo.year}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

function InfluenceDetail({ influence }: { influence: InfluenceRecord }) {
  return (
    <article className="influence-detail" aria-live="polite">
      <p>{influence.id} / Selected influence</p>
      <h3>{influence.title}</h3>
      <p>{influence.releaseYear}</p>
      <ul>{influence.categories.map((category) => <li key={category}>{category}</li>)}</ul>
      <blockquote>{influence.reflection}</blockquote>
    </article>
  )
}

function InteractiveInfluencesChapter() {
  const [selectedId, setSelectedId] = useState(interactiveInfluences.records[0].id)
  const selected = interactiveInfluences.records.find((influence) => influence.id === selectedId) ?? interactiveInfluences.records[0]

  return (
    <section className="about-chapter about-chapter--influences" id="interactive-influences" aria-labelledby="influences-title">
      <ChapterHeading index="04" label="Interactive Influences" title="Interactive Influences" />
      <p className="about-chapter__lead">{interactiveInfluences.lead}</p>
      <div className="influence-records">
        <ul aria-label="Interactive influence records">
          {interactiveInfluences.records.map((influence) => (
            <li key={influence.id}>
              <button
                type="button"
                className={influence.id === selected.id ? 'is-active' : undefined}
                aria-pressed={influence.id === selected.id}
                onClick={() => setSelectedId(influence.id)}
              >
                <span>{influence.id}</span>
                <strong>{influence.title}</strong>
                <span>{influence.categories.join(' / ')}</span>
              </button>
            </li>
          ))}
        </ul>
        <InfluenceDetail influence={selected} />
      </div>
    </section>
  )
}

function CurrentDirectionChapter() {
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

export function AboutChapters() {
  return (
    <>
      <IdentityChapter />
      <TrajectoryChapter />
      <OutsideSystemChapter />
      <InteractiveInfluencesChapter />
      <CurrentDirectionChapter />
    </>
  )
}
