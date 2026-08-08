import { lazy, Suspense } from 'react'
import { PageIndex } from '../../components/PageIndex'
import { RamielFallback } from '../../components/ramiel/RamielFallback'
import { SpearFallback } from '../../components/spear/SpearFallback'
import { SceneErrorBoundary } from '../../components/three/SceneErrorBoundary'
import { THEME_IDS } from '../../theme/theme'
import { useTheme } from '../../theme/useTheme'
import type { InteractionPhase } from '../../types/interaction'
import type { NavigationItem } from '../../types/navigation'
import { navigationItems } from './navigation'

const HomeRamielScene = lazy(() => import('./HomeRamielScene').then((module) => ({
  default: module.HomeRamielScene,
})))
const HomeSpearScene = lazy(() => import('./HomeSpearScene').then((module) => ({
  default: module.HomeSpearScene,
})))

type HomeMotifProps = {
  focusedTarget: NavigationItem['id'] | null
}

export function HomeMotif({ focusedTarget }: HomeMotifProps) {
  const { theme } = useTheme()
  const usesRamiel = theme === THEME_IDS.reiLight
  const focusedIndex = Math.max(
    0,
    navigationItems.findIndex((item) => item.id === focusedTarget),
  )
  const phase: InteractionPhase = focusedTarget ? 'focused' : 'idle'

  return (
    <aside
      className="home__scene"
      aria-label={usesRamiel
        ? 'Procedural blue crystalline geometric form'
        : 'Procedural Spear of Longinus illustration'}
    >
      <div className="home__scene-label" aria-hidden="true">
        {usesRamiel ? 'Ramiel study / suspended form' : 'Spear of Longinus'}
      </div>
      {usesRamiel ? (
        <>
          <RamielFallback
            motionState={phase}
            pose={{
              angleDegrees: -4 + focusedIndex * 7,
              verticalOffsetRem: 0,
            }}
            energy={focusedTarget ? 1 : 0.18}
          />
          <SceneErrorBoundary key={theme}>
            <Suspense fallback={null}>
              <HomeRamielScene focusedTarget={focusedTarget} />
            </Suspense>
          </SceneErrorBoundary>
        </>
      ) : (
        <>
          <SpearFallback motionState={phase} focusIndex={focusedIndex} />
          <SceneErrorBoundary key={theme}>
            <Suspense fallback={null}>
              <HomeSpearScene />
            </Suspense>
          </SceneErrorBoundary>
        </>
      )}
      <PageIndex value="00" />
    </aside>
  )
}
