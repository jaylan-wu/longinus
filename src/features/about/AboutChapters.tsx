import { useState } from 'react'
import {
  experiences,
  explorationAreas,
  influences,
  photos,
  type ExperienceRecord,
  type InfluenceRecord,
  type PhotoRecord,
} from './aboutData'

function ChapterHeading({ index, label, title }: { index: string; label: string; title: string }) {
  return (
    <header className="about-chapter__heading">
      <p className="about-chapter__kicker"><span>{index}</span> {label}</p>
      <h2>{title}</h2>
    </header>
  )
}

function PlaceholderNote() {
  return <p className="about-chapter__placeholder">Exploratory placeholder copy / pending editorial and Figma approval</p>
}

function IdentityChapter() {
  return (
    <section className="about-chapter about-chapter--identity" id="identity" aria-labelledby="identity-title">
      <div className="about-chapter__heading about-chapter__heading--identity">
        <p className="about-chapter__kicker"><span>01</span> Identity / Subject profile</p>
        <h1 id="identity-title">A point of view built across systems.</h1>
      </div>
      <p className="about-identity__statement">
        I build software at the meeting point of engineering, interactive systems, and education—shaped by how games, travel, and photography teach me to notice space, behavior, and detail.
      </p>
      <PlaceholderNote />
      <ul className="about-identity__axes" aria-label="Primary areas of interest">
        <li><span>AX-01</span>Engineering</li>
        <li><span>AX-02</span>Game Development</li>
        <li><span>AX-03</span>Education</li>
      </ul>
      <p className="about-identity__signature">alter-egoist / personal signal</p>
    </section>
  )
}

function ExperienceDetail({ experience }: { experience: ExperienceRecord }) {
  return (
    <article className="experience-detail" aria-live="polite">
      <div className="experience-detail__identifier"><span>Current record</span><strong>{experience.id}</strong></div>
      <h3>{experience.role}</h3>
      <p className="experience-detail__organization">{experience.organization}</p>
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
  const [selectedId, setSelectedId] = useState(experiences[0].id)
  const selected = experiences.find((experience) => experience.id === selectedId) ?? experiences[0]

  return (
    <section className="about-chapter about-chapter--trajectory" id="trajectory" aria-labelledby="trajectory-title">
      <ChapterHeading index="02" label="Trajectory / Context" title="Systems become meaningful in use." />
      <p className="about-chapter__lead">A selective progression through technical foundation, applied technology, software engineering, educational infrastructure, and teaching.</p>
      <PlaceholderNote />
      <div className="trajectory-records">
        <ul className="trajectory-records__index" aria-label="Experience records">
          {experiences.map((experience, index) => (
            <li key={experience.id}>
              <button
                type="button"
                className={experience.id === selected.id ? 'is-active' : undefined}
                aria-pressed={experience.id === selected.id}
                onClick={() => setSelectedId(experience.id)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span><strong>{experience.organization}</strong>{experience.role}</span>
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

function PhotoPlaceholder({ photo }: { photo: PhotoRecord }) {
  return (
    <div
      className={`photo-placeholder photo-placeholder--${photo.composition}`}
      role="img"
      aria-label={photo.alt}
    >
      <span>{photo.id}</span>
      <span>{photo.orientation} image placeholder</span>
    </div>
  )
}

function OutsideSystemChapter() {
  const [selectedId, setSelectedId] = useState(photos[0].id)
  const selected = photos.find((photo) => photo.id === selectedId) ?? photos[0]

  return (
    <section className="about-chapter about-chapter--outside" id="outside-system" aria-labelledby="outside-title">
      <ChapterHeading index="03" label="Outside the System / Person" title="Attention changes when the map is unfamiliar." />
      <p className="about-chapter__lead">Travel creates room to observe architecture, transit, signage, public space, and the quiet intervals between destinations. Photography is how those observations become memories.</p>
      <PlaceholderNote />
      <div className="photo-selected" aria-live="polite">
        <PhotoPlaceholder photo={selected} />
        <div className="photo-selected__caption">
          <p><span>Selected image</span>{selected.id}</p>
          <h3>{selected.location} / {selected.year}</h3>
          <p>{selected.caption}</p>
        </div>
      </div>
      <ul className="photo-archive" aria-label="Photography archive placeholders">
        {photos.map((photo) => (
          <li key={photo.id}>
            <button
              type="button"
              className={`photo-record photo-record--${photo.orientation}${photo.id === selected.id ? ' is-active' : ''}`}
              aria-pressed={photo.id === selected.id}
              onClick={() => setSelectedId(photo.id)}
            >
              <PhotoPlaceholder photo={photo} />
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
      <ul>{influence.categories.map((category) => <li key={category}>{category}</li>)}</ul>
      <blockquote>{influence.reflection}</blockquote>
    </article>
  )
}

function InteractiveInfluencesChapter() {
  const [selectedId, setSelectedId] = useState(influences[0].id)
  const selected = influences.find((influence) => influence.id === selectedId) ?? influences[0]

  return (
    <section className="about-chapter about-chapter--influences" id="interactive-influences" aria-labelledby="influences-title">
      <ChapterHeading index="04" label="Interactive Influences / Influence" title="What interaction can make us feel." />
      <p className="about-chapter__lead">Not a ranking or review: a small set of records about the systems, worlds, and expressive decisions that shaped what I want to create.</p>
      <PlaceholderNote />
      <div className="influence-records">
        <ul aria-label="Interactive influence placeholders">
          {influences.map((influence) => (
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
      <ChapterHeading index="05" label="Current Direction / Vector" title="Build rigorous systems that leave room for expression." />
      <p className="about-direction__statement">
        I want to keep working where software engineering, game-oriented thinking, real-time 3D, creative development, and teaching reinforce one another. Longinus is an ongoing study in making that relationship visible—not a conclusion, but a direction.
      </p>
      <PlaceholderNote />
      <ul className="about-direction__areas" aria-label="Current areas of exploration">
        {explorationAreas.map((area, index) => <li key={area}><span>{String(index + 1).padStart(2, '0')}</span>{area}</li>)}
      </ul>
      <p className="about-direction__closing">The work ahead should be technically sound, visually intentional, and clear enough to share.</p>
      <nav className="about-direction__actions" aria-label="About page actions">
        <a href="#projects">View Projects <span aria-hidden="true">↗</span></a>
        <button type="button" disabled>View Résumé <span>Destination pending</span></button>
        <button type="button" disabled>Contact <span>Destination pending</span></button>
        <a href="#home">Return Home <span aria-hidden="true">↗</span></a>
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
