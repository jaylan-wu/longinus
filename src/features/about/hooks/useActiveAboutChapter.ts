import { useEffect, useState } from 'react'
import { aboutChapters } from '../data/chapters'
import {
  ABOUT_CHAPTER_IDS,
  type AboutChapterId,
} from '../types/about'

const CHAPTER_READING_LINE_RATIO = 0.38
const CHAPTER_OBSERVER_ROOT_MARGIN = '-38% 0px -61% 0px'

type AboutChapterSection = {
  id: AboutChapterId
  element: HTMLElement
}

function findActiveChapter(sections: readonly AboutChapterSection[]) {
  const readingLine = window.innerHeight * CHAPTER_READING_LINE_RATIO
  let activeChapter: AboutChapterId = ABOUT_CHAPTER_IDS.identity

  for (const section of sections) {
    const bounds = section.element.getBoundingClientRect()

    if (bounds.top <= readingLine) activeChapter = section.id
    if (bounds.top <= readingLine && bounds.bottom > readingLine) return section.id
  }

  return activeChapter
}

export function useActiveAboutChapter() {
  const [activeChapter, setActiveChapter] = useState<AboutChapterId>(ABOUT_CHAPTER_IDS.identity)

  useEffect(() => {
    const sections = aboutChapters
      .map((chapter) => ({
        id: chapter.id,
        element: document.getElementById(chapter.id),
      }))
      .filter((section): section is AboutChapterSection => section.element !== null)

    if (sections.length === 0) return

    let animationFrame = 0

    const updateActiveChapter = () => {
      const nextChapter = findActiveChapter(sections)
      setActiveChapter((currentChapter) => (
        currentChapter === nextChapter ? currentChapter : nextChapter
      ))
    }

    const requestUpdate = () => {
      cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(updateActiveChapter)
    }

    updateActiveChapter()

    if (typeof IntersectionObserver === 'undefined') {
      window.addEventListener('scroll', requestUpdate, { passive: true })
      window.addEventListener('resize', requestUpdate)

      return () => {
        cancelAnimationFrame(animationFrame)
        window.removeEventListener('scroll', requestUpdate)
        window.removeEventListener('resize', requestUpdate)
      }
    }

    const observer = new IntersectionObserver(requestUpdate, {
      rootMargin: CHAPTER_OBSERVER_ROOT_MARGIN,
      threshold: 0,
    })

    sections.forEach(({ element }) => observer.observe(element))
    window.addEventListener('resize', requestUpdate)

    return () => {
      cancelAnimationFrame(animationFrame)
      observer.disconnect()
      window.removeEventListener('resize', requestUpdate)
    }
  }, [])

  return activeChapter
}
