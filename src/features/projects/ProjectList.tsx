import type { Project } from './projectData'

type ProjectListProps = {
  projects: Project[]
  focusedId: Project['id'] | null
  selectedId: Project['id'] | null
  locked: boolean
  onFocus: (projectId: Project['id'] | null) => void
  onSelect: (project: Project) => void
}

export function ProjectList({
  projects,
  focusedId,
  selectedId,
  locked,
  onFocus,
  onSelect,
}: ProjectListProps) {
  return (
    <ol className="project-list" aria-label="Selected projects" aria-busy={locked}>
      {projects.map((project, index) => {
        const isFocused = focusedId === project.id
        const isSelected = selectedId === project.id

        return (
          <li className="project-list__item" key={project.id}>
            <button
              className="project-card"
              type="button"
              disabled={locked && !isSelected}
              data-active={isFocused || isSelected || undefined}
              data-selected={isSelected || undefined}
              onMouseEnter={() => onFocus(project.id)}
              onMouseLeave={() => onFocus(null)}
              onFocus={() => onFocus(project.id)}
              onBlur={() => onFocus(null)}
              onClick={() => onSelect(project)}
              aria-label={`Open project: ${project.title}`}
            >
              <span className="project-card__index">{String(index + 1).padStart(2, '0')}</span>
              <span className="project-card__content">
                <span className="project-card__meta">{project.role} / {project.year}</span>
                <span className="project-card__title">{project.title}</span>
                <span className="project-card__description">{project.shortDescription}</span>
              </span>
              <span className="project-card__target" aria-hidden="true">＋</span>
            </button>
          </li>
        )
      })}
    </ol>
  )
}
