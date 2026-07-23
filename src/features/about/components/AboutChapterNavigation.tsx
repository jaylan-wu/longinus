import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { aboutChapters } from '../data/chapters'
import type { AboutChapterId } from '../types/about'

type AboutChapterNavigationProps = {
  activeChapter: AboutChapterId
}

export function AboutChapterNavigation({ activeChapter }: AboutChapterNavigationProps) {
  const reducedMotion = useReducedMotion()

  const scrollToChapter = (chapterId: AboutChapterId) => {
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
                className={isActive ? 'is-active' : undefined}
                aria-controls={chapter.id}
                aria-current={isActive ? 'location' : undefined}
                onClick={() => scrollToChapter(chapter.id)}
              >
                <span>{chapter.index}</span>
                <span>{chapter.label}</span>
              </button>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
