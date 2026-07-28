import { useEffect, useState } from 'react'
import { PageIndex } from '../../components/PageIndex'
import '../../components/navigation/navigationAction.css'
import { AboutActiveChapterHeader } from './components/AboutActiveChapterHeader'
import { AboutChapterNavigation } from './components/AboutChapterNavigation'
import { AboutChapters } from './components/AboutChapters'
import { getAboutChapter } from './data/chapters'
import { AboutSpearScene } from './AboutSpearScene'
import { useActiveAboutChapter } from './hooks/useActiveAboutChapter'
import type { AboutChapterId } from './types/about'
import './about.css'

const SCROLL_INTERRUPTION_KEYS = new Set([
  'ArrowDown',
  'ArrowUp',
  'End',
  'Home',
  'PageDown',
  'PageUp',
  ' ',
])

export function AboutPage() {
  const detectedChapter = useActiveAboutChapter()
  const [requestedChapter, setRequestedChapter] = useState<AboutChapterId | null>(null)
  const activeChapter = requestedChapter ?? detectedChapter
  const currentChapter = getAboutChapter(activeChapter)

  useEffect(() => {
    if (requestedChapter !== detectedChapter) return

    const animationFrame = window.requestAnimationFrame(() => {
      setRequestedChapter((currentChapter) => (
        currentChapter === detectedChapter ? null : currentChapter
      ))
    })

    return () => window.cancelAnimationFrame(animationFrame)
  }, [detectedChapter, requestedChapter])

  useEffect(() => {
    if (requestedChapter === null) return

    const clearRequestedChapter = () => {
      setRequestedChapter(null)
    }
    const clearForKeyboardScroll = (event: KeyboardEvent) => {
      if (SCROLL_INTERRUPTION_KEYS.has(event.key)) clearRequestedChapter()
    }

    window.addEventListener('pointerdown', clearRequestedChapter)
    window.addEventListener('touchstart', clearRequestedChapter, { passive: true })
    window.addEventListener('wheel', clearRequestedChapter, { passive: true })
    window.addEventListener('keydown', clearForKeyboardScroll)

    return () => {
      window.removeEventListener('pointerdown', clearRequestedChapter)
      window.removeEventListener('touchstart', clearRequestedChapter)
      window.removeEventListener('wheel', clearRequestedChapter)
      window.removeEventListener('keydown', clearForKeyboardScroll)
    }
  }, [requestedChapter])

  const selectChapter = (chapterId: AboutChapterId) => {
    setRequestedChapter(chapterId)
  }

  return (
    <main className="about" data-active-chapter={activeChapter}>
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

      <AboutActiveChapterHeader chapter={currentChapter} />
      <AboutChapterNavigation
        activeChapter={activeChapter}
        onSelectChapter={selectChapter}
      />

      <div className="about__composition">
        <div className="about__narrative">
          <AboutChapters />
        </div>

        <aside
          className="about__scene"
          aria-label={`Spear of Longinus posture for ${currentChapter.label}`}
        >
          <AboutSpearScene activeChapter={activeChapter} />
        </aside>
      </div>
    </main>
  )
}
