import { useCallback } from 'react'
import { PageIndex } from '../../components/PageIndex'
import { RamielFallback } from '../../components/ramiel/RamielFallback'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import type { Project } from './projectData'
import { projects } from './projectData'
import { ProjectList } from './ProjectList'
import { ProjectRamielScene } from './ProjectRamielScene'
import { useProjectTransition } from './projectTransition'
import './projects.css'

export function ProjectsPage() {
  const reducedMotion = useReducedMotion()
  const navigateToProject = useCallback((project: Project) => {
    window.location.hash = `projects/${encodeURIComponent(project.slug)}`
  }, [])
  const transition = useProjectTransition({ reducedMotion, onNavigate: navigateToProject })
  const focusedIndex = Math.max(0, projects.findIndex((project) => project.id === transition.focusedId))
  const ramielEnergy = transition.phase === 'impact'
    ? 1
    : transition.phase === 'focused' || transition.phase === 'committing'
      ? 0.68
      : 0.2

  return (
    <main
      className="projects"
      data-phase={transition.phase}
      data-ramiel-destination={transition.ramielDestination}
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

      <aside className="projects__scene" aria-label="Ramiel geometric project selector">
        <div className="projects__scene-label" aria-hidden="true">
          <span>Geometric alignment</span>
          <span>{transition.focusedId ?? 'Awaiting input'}</span>
        </div>
        <RamielFallback
          motionState={transition.phase}
          focusIndex={focusedIndex}
          energy={ramielEnergy}
        />
        <ProjectRamielScene phase={transition.phase} focusIndex={focusedIndex} />
        <PageIndex value="01" />
      </aside>
    </main>
  )
}
