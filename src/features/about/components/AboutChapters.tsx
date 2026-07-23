import type { ComponentType } from 'react'
import { aboutChapters } from '../data/chapters'
import {
  ABOUT_CHAPTER_IDS,
  type AboutChapterId,
} from '../types/about'
import type { AboutChapterComponentProps } from './AboutChapter'
import { CurrentDirectionChapter } from './chapters/CurrentDirectionChapter'
import { IdentityChapter } from './chapters/IdentityChapter'
import { InteractiveInfluencesChapter } from './chapters/InteractiveInfluencesChapter'
import { OutsideSystemChapter } from './chapters/OutsideSystemChapter'
import { TrajectoryChapter } from './chapters/TrajectoryChapter'

const chapterComponents = {
  [ABOUT_CHAPTER_IDS.identity]: IdentityChapter,
  [ABOUT_CHAPTER_IDS.trajectory]: TrajectoryChapter,
  [ABOUT_CHAPTER_IDS.outsideSystem]: OutsideSystemChapter,
  [ABOUT_CHAPTER_IDS.interactiveInfluences]: InteractiveInfluencesChapter,
  [ABOUT_CHAPTER_IDS.currentDirection]: CurrentDirectionChapter,
} satisfies Record<AboutChapterId, ComponentType<AboutChapterComponentProps>>

export function AboutChapters() {
  return (
    <>
      {aboutChapters.map((chapter) => {
        const Chapter = chapterComponents[chapter.id]
        return <Chapter chapter={chapter} key={chapter.id} />
      })}
    </>
  )
}
