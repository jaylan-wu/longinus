import { PageIndex } from '../../components/PageIndex'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { AboutChapters } from './AboutChapters'
import { chapters } from './aboutData'
import { AboutSpearScene } from './AboutSpearScene'
import { useActiveChapter } from './useActiveChapter'
import './about.css'

export function AboutPage() {
  const activeChapter = useActiveChapter()
  const reducedMotion = useReducedMotion()
  const currentChapter = chapters.find((chapter) => chapter.id === activeChapter) ?? chapters[0]

  const scrollToChapter = (chapterId: string) => {
    document.getElementById(chapterId)?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' })
  }

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
          <nav className="about__chapter-nav" aria-label="About chapters">
            <ol>
              {chapters.map((chapter) => (
                <li key={chapter.id}>
                  <button
                    type="button"
                    className={activeChapter === chapter.id ? 'is-active' : undefined}
                    aria-current={activeChapter === chapter.id ? 'location' : undefined}
                    onClick={() => scrollToChapter(chapter.id)}
                  >
                    <span>{chapter.index}</span>
                    <span>{chapter.label}</span>
                  </button>
                </li>
              ))}
            </ol>
          </nav>
          <AboutSpearScene activeChapter={activeChapter} />
        </aside>

        <div className="about__narrative">
          <AboutChapters />
        </div>
      </div>
    </main>
  )
}
