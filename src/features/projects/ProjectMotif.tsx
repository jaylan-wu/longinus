import { lazy, Suspense } from 'react'
import { PageIndex } from '../../components/PageIndex'
import { RamielFallback } from '../../components/ramiel/RamielFallback'
import { SpearFallback } from '../../components/spear/SpearFallback'
import { SceneErrorBoundary } from '../../components/three/SceneErrorBoundary'
import { THEME_IDS } from '../../theme/theme'
import { useTheme } from '../../theme/useTheme'
import type { Project } from './projectData'
import type { ProjectTransitionPhase } from './projectTransition'

const ProjectRamielScene = lazy(() => import('./ProjectRamielScene').then((module) => ({
  default: module.ProjectRamielScene,
})))
const ProjectSpearScene = lazy(() => import('./ProjectSpearScene').then((module) => ({
  default: module.ProjectSpearScene,
})))

type ProjectMotifProps = {
  phase: ProjectTransitionPhase
  focusIndex: number
  focusedId: Project['id'] | null
}

export function ProjectMotif({ phase, focusIndex, focusedId }: ProjectMotifProps) {
  const { theme } = useTheme()
  const usesRamiel = theme === THEME_IDS.reiLight
  const ramielEnergy = phase === 'impact'
    ? 1
    : phase === 'focused' || phase === 'committing'
      ? 0.68
      : 0.2

  return (
    <aside
      className="projects__scene"
      aria-label={usesRamiel
        ? 'Ramiel geometric project selector'
        : 'Spear of Longinus project selector'}
    >
      <div className="projects__scene-label" aria-hidden="true">
        <span>{usesRamiel ? 'Geometric alignment' : 'Target acquisition'}</span>
        <span>{focusedId ?? 'Awaiting input'}</span>
      </div>
      {usesRamiel ? (
        <>
          <RamielFallback
            motionState={phase}
            pose={{
              angleDegrees: -4 + focusIndex * 7,
              verticalOffsetRem: (focusIndex - 1.5) * 1.4,
            }}
            energy={ramielEnergy}
          />
          <SceneErrorBoundary key={theme}>
            <Suspense fallback={null}>
              <ProjectRamielScene phase={phase} focusIndex={focusIndex} />
            </Suspense>
          </SceneErrorBoundary>
        </>
      ) : (
        <>
          <SpearFallback motionState={phase} focusIndex={focusIndex} />
          <SceneErrorBoundary key={theme}>
            <Suspense fallback={null}>
              <ProjectSpearScene phase={phase} focusIndex={focusIndex} />
            </Suspense>
          </SceneErrorBoundary>
        </>
      )}
      <PageIndex value="01" />
    </aside>
  )
}
