import { lazy, Suspense } from 'react'
import { SceneErrorBoundary } from '../../components/three/SceneErrorBoundary'
import { THEME_IDS } from '../../theme/theme'
import { useTheme } from '../../theme/useTheme'
import type { AboutChapterId } from './types/about'

const AboutRamielScene = lazy(() => import('./AboutRamielScene').then((module) => ({
  default: module.AboutRamielScene,
})))
const AboutSpearScene = lazy(() => import('./AboutSpearScene').then((module) => ({
  default: module.AboutSpearScene,
})))

type AboutMotifProps = {
  activeChapter: AboutChapterId
  chapterLabel: string
}

export function AboutMotif({ activeChapter, chapterLabel }: AboutMotifProps) {
  const { theme } = useTheme()
  const usesRamiel = theme === THEME_IDS.reiLight

  return (
    <aside
      className="about__scene"
      aria-label={usesRamiel
        ? `Ramiel-inspired geometric posture for ${chapterLabel}`
        : `Spear of Longinus posture for ${chapterLabel}`}
    >
      <SceneErrorBoundary key={theme}>
        <Suspense fallback={null}>
          {usesRamiel
            ? <AboutRamielScene activeChapter={activeChapter} />
            : <AboutSpearScene activeChapter={activeChapter} />}
        </Suspense>
      </SceneErrorBoundary>
    </aside>
  )
}
