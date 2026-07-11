import { capabilities, principles } from './aboutData'

export function AboutPage() {
  return (
    <main className="about" id="about">
      <div className="about__grid" aria-hidden="true" />
      <div className="about__marker" aria-hidden="true">03</div>

      <header className="about__header">
        <a className="about__back" href="#home" aria-label="Return to home">
          <span aria-hidden="true">←</span> Index / Home
        </a>
        <div className="about__status" aria-hidden="true">
          <span>Profile record</span>
          <span>03—A</span>
        </div>
      </header>

      <section className="about__hero" aria-labelledby="about-title">
        <p className="about__eyebrow">About / Personal transmission</p>
        <h1 className="about__title" id="about-title">
          Building systems<br />with a point of view.
        </h1>
        <p className="about__intro">
          I’m Jaylan Wu, a software engineer and creative developer interested in
          the space where precise engineering meets expressive interaction.
        </p>
        <div className="about__coordinates" aria-hidden="true">
          <span>Based in New York</span>
          <span>40.7128° N / 74.0060° W</span>
        </div>
      </section>

      <section className="about__body" aria-label="About Jaylan">
        <div className="about__statement">
          <p className="about__section-label">01 / Perspective</p>
          <div className="about__copy">
            <p>
              I like making digital work that feels considered from the first
              impression through the smallest transition. My practice brings
              together interface engineering, visual systems, and real-time 3D.
            </p>
            <p>
              I’m drawn to projects with a strong identity: experiences where
              technical decisions support atmosphere, movement clarifies intent,
              and performance is part of the design rather than an afterthought.
            </p>
          </div>
        </div>

        <div className="about__capabilities">
          <p className="about__section-label">02 / Capabilities</p>
          <ul className="about__capability-list">
            {capabilities.map((capability, index) => (
              <li key={capability}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {capability}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about__principles" aria-labelledby="principles-title">
        <div className="about__principles-heading">
          <p className="about__section-label">03 / Working philosophy</p>
          <h2 id="principles-title">How I approach the work</h2>
        </div>
        <ol className="about__principle-list">
          {principles.map((principle) => (
            <li key={principle.index}>
              <span className="about__principle-index">{principle.index}</span>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <footer className="about__footer">
        <p>End of profile record / 03—A</p>
        <a href="#home">Return to index <span aria-hidden="true">↗</span></a>
      </footer>
    </main>
  )
}
