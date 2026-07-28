import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { aboutChapters } from '../data/chapters'
import type { AboutChapterId } from '../types/about'

type AboutChapterNavigationProps = {
  activeChapter: AboutChapterId
  onSelectChapter: (chapterId: AboutChapterId) => void
}

export function AboutChapterNavigation({
  activeChapter,
  onSelectChapter,
}: AboutChapterNavigationProps) {
  const reducedMotion = useReducedMotion()

  const scrollToChapter = (chapterId: AboutChapterId) => {
    onSelectChapter(chapterId)
    document.getElementById(chapterId)?.scrollIntoView({
      behavior: reducedMotion ? 'auto' : 'smooth',
      block: 'start',
    })
  }

  return (
    <nav className="about__chapter-nav" aria-label="About chapters">
      <ol>
        {aboutChapters.map((chapter) => {
          const isActive = activeChapter === chapter.id

          return (
            <li key={chapter.id}>
              <button
                type="button"
                className={`navigation-action${isActive ? ' is-active' : ''}`}
                aria-controls={chapter.id}
                aria-current={isActive ? 'location' : undefined}
                onClick={() => scrollToChapter(chapter.id)}
              >
                <span>{chapter.index}</span>
                <span className="navigation-action__label">
                  {chapter.navigationLabel}
                </span>
              </button>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
