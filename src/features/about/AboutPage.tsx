import { PageIndex } from '../../components/PageIndex'
import '../../components/navigation/navigationAction.css'
import { AboutChapterNavigation } from './components/AboutChapterNavigation'
import { AboutChapters } from './components/AboutChapters'
import { getAboutChapter } from './data/chapters'
import { AboutMotif } from './AboutMotif'
import { useActiveAboutChapter } from './hooks/useActiveAboutChapter'
import { useAboutChapterSelection } from './hooks/useAboutChapterSelection'
import './about.css'

export function AboutPage() {
  const detectedChapter = useActiveAboutChapter()
  const { activeChapter, selectChapter } = useAboutChapterSelection(detectedChapter)
  const currentChapter = getAboutChapter(activeChapter)

  return (
    <main
      className="about"
      data-active-chapter={activeChapter}
      data-observed-chapter={detectedChapter}
    >
      <h1 className="about__page-title">About Jaylan Wu</h1>
      <PageIndex value="04" />

      <header className="about__header">
        <nav className="about__site-navigation" aria-label="Primary navigation">
          <a
            className="about__back navigation-action"
            href="#home"
            aria-label="Return to home index"
          >
            <span className="about__back-icon" aria-hidden="true">←</span>
            <span className="navigation-action__label">Index</span>
          </a>
        </nav>
        <p className="about__header-location" aria-live="polite">
          <span>Current chapter</span>
          <strong>{currentChapter.index} / {currentChapter.label}</strong>
        </p>
      </header>

      <AboutChapterNavigation
        activeChapter={activeChapter}
        onSelectChapter={selectChapter}
      />

      <div className="about__composition">
        <div className="about__narrative">
          <AboutChapters observedChapter={detectedChapter} />
        </div>

        <AboutMotif
          activeChapter={activeChapter}
          chapterLabel={currentChapter.label}
        />
      </div>
    </main>
  )
}
