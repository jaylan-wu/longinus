import { getProjectBySlug } from './projectData'
import './projects.css'

type ProjectDetailPageProps = {
  slug: string
}

export function ProjectDetailPage({ slug }: ProjectDetailPageProps) {
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <main className="project-detail project-detail--missing">
        <p className="project-detail__eyebrow">Record not found / 404</p>
        <h1>Unknown transmission.</h1>
        <a className="project-detail__back" href="#projects">← Return to projects</a>
      </main>
    )
  }

  return (
    <main className="project-detail">
      <div className="project-detail__grid" aria-hidden="true" />
      <div className="project-detail__marker" aria-hidden="true">{project.id.slice(-3)}</div>
      <header className="project-detail__header">
        <a className="project-detail__back" href="#projects"><span aria-hidden="true">←</span> Projects / Archive</a>
        <div className="project-detail__status" aria-hidden="true">
          <span>{project.status}</span>
          <span>{project.year}</span>
        </div>
      </header>

      <article className="project-detail__content">
        <p className="project-detail__eyebrow">Project record / {project.id}</p>
        <h1>{project.title}</h1>
        <p className="project-detail__lead">{project.description}</p>

        <dl className="project-detail__metadata">
          <div><dt>Role</dt><dd>{project.role}</dd></div>
          <div><dt>Year</dt><dd>{project.year}</dd></div>
          <div><dt>Status</dt><dd>{project.status}</dd></div>
        </dl>

        <section className="project-detail__technologies" aria-labelledby="technology-title">
          <p id="technology-title">Technology system</p>
          <ul>
            {project.technologies.map((technology, index) => (
              <li key={technology}><span>{String(index + 1).padStart(2, '0')}</span>{technology}</li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  )
}
