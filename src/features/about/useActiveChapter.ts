import { useEffect, useState } from 'react'
import { chapterIds, type AboutChapterId } from './aboutData'

export function useActiveChapter() {
  const [activeChapter, setActiveChapter] = useState<AboutChapterId>('identity')

  useEffect(() => {
    let animationFrame = 0

    const updateActiveChapter = () => {
      const readingLine = window.innerHeight * 0.38
      let currentChapter: AboutChapterId = 'identity'

      for (const id of chapterIds) {
        const section = document.getElementById(id)
        if (section && section.getBoundingClientRect().top <= readingLine) currentChapter = id
      }

      setActiveChapter((current) => current === currentChapter ? current : currentChapter)
    }

    const requestUpdate = () => {
      cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(updateActiveChapter)
    }

    updateActiveChapter()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [])

  return activeChapter
}
