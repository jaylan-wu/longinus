import { PageIndex } from '../../components/PageIndex'
import { AboutChapterNavigation } from './components/AboutChapterNavigation'
import { AboutChapters } from './components/AboutChapters'
import { getAboutChapter } from './data/chapters'
import { AboutSpearScene } from './AboutSpearScene'
import { useActiveAboutChapter } from './hooks/useActiveAboutChapter'
import './about.css'

export function AboutPage() {
  const activeChapter = useActiveAboutChapter()
  const currentChapter = getAboutChapter(activeChapter)

  return (
    <main className="about" data-active-chapter={activeChapter}>
      <div className="about__grid" aria-hidden="true" />
      <PageIndex value="04" />

      <header className="about__header">
        <a className="about__back" href="#home" aria-label="Return to home">
          <span aria-hidden="true">←</span> Index
        </a>
        <p className="about__header-location" aria-live="polite">
          <span>Current chapter</span>
          <strong>{currentChapter.index} / {currentChapter.label}</strong>
        </p>
      </header>

      <div className="about__composition">
        <aside className="about__scene" aria-label={`Spear posture: ${currentChapter.label}`}>
          <AboutChapterNavigation activeChapter={activeChapter} />
          <AboutSpearScene activeChapter={activeChapter} />
        </aside>

        <div className="about__narrative">
          <AboutChapters />
        </div>
      </div>
    </main>
  )
}
