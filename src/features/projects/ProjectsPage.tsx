import { useCallback } from 'react'
import { SpearPlaceholder } from '../home/SpearPlaceholder'
import { SpearScene } from '../home/SpearScene'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import type { Project } from './projectData'
import { projects } from './projectData'
import { ProjectList } from './ProjectList'
import { useProjectTransition } from './projectTransition'

export function ProjectsPage() {
  const reducedMotion = useReducedMotion()
  const navigateToProject = useCallback((project: Project) => {
    window.location.hash = `projects/${encodeURIComponent(project.slug)}`
  }, [])
  const transition = useProjectTransition({ reducedMotion, onNavigate: navigateToProject })
  const focusedIndex = Math.max(0, projects.findIndex((project) => project.id === transition.focusedId))

  return (
    <main
      className="projects"
      data-phase={transition.phase}
      data-spear-destination={transition.spearDestination}
    >
      <div className="projects__grid" aria-hidden="true" />
      <section className="projects__interface" aria-labelledby="projects-title">
        <header className="projects__header">
          <a className="projects__back" href="#home"><span aria-hidden="true">←</span> Index</a>
          <span>Archive 01—A</span>
        </header>

        <div className="projects__heading">
          <p className="projects__eyebrow">Selected engineering work / {projects.length} records</p>
          <h1 id="projects-title">Projects</h1>
        </div>

        <ProjectList
          projects={projects}
          focusedId={transition.focusedId}
          selectedId={transition.selectedId}
          locked={transition.locked}
          onFocus={transition.focusProject}
          onSelect={transition.selectProject}
        />

        <footer className="projects__footer">
          <span>{transition.phase === 'idle' ? 'Select a record' : transition.phase}</span>
          <span>Focus / Enter to engage</span>
        </footer>
      </section>

      <aside className="projects__scene" aria-label="Spear of Longinus project selector">
        <div className="projects__scene-label" aria-hidden="true">
          <span>Target acquisition</span>
          <span>{transition.focusedId ?? 'Awaiting input'}</span>
        </div>
        <SpearPlaceholder phase={transition.phase} focusIndex={focusedIndex} />
        <SpearScene phase={transition.phase} focusIndex={focusedIndex} />
        <div className="projects__scene-index" aria-hidden="true">01</div>
      </aside>
    </main>
  )
}
