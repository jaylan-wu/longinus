import { useEffect, useState } from 'react'
import type { AboutChapterId } from '../types/about'

const SCROLL_INTERRUPTION_KEYS = new Set([
  'ArrowDown',
  'ArrowUp',
  'End',
  'Home',
  'PageDown',
  'PageUp',
  ' ',
])

export function useAboutChapterSelection(detectedChapter: AboutChapterId) {
  const [requestedChapter, setRequestedChapter] = useState<AboutChapterId | null>(null)
  const activeChapter = requestedChapter ?? detectedChapter

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

  return {
    activeChapter,
    selectChapter,
  }
}
