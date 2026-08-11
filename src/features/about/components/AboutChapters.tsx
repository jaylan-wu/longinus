import type { ComponentType } from 'react'
import { aboutChapters } from '../data/chapters'
import {
  ABOUT_CHAPTER_IDS,
  type AboutChapterId,
  type AboutChapterMotionState,
} from '../types/about'
import type { AboutChapterComponentProps } from './AboutChapter'
import { CreativeInfluencesChapter } from './chapters/CreativeInfluencesChapter'
import { CurrentDirectionChapter } from './chapters/CurrentDirectionChapter'
import { IdentityChapter } from './chapters/IdentityChapter'
import { OutsideSystemChapter } from './chapters/OutsideSystemChapter'
import { TrajectoryChapter } from './chapters/TrajectoryChapter'

const chapterComponents = {
  [ABOUT_CHAPTER_IDS.identity]: IdentityChapter,
  [ABOUT_CHAPTER_IDS.trajectory]: TrajectoryChapter,
  [ABOUT_CHAPTER_IDS.outsideSystem]: OutsideSystemChapter,
  [ABOUT_CHAPTER_IDS.creativeInfluences]: CreativeInfluencesChapter,
  [ABOUT_CHAPTER_IDS.currentDirection]: CurrentDirectionChapter,
} satisfies Record<AboutChapterId, ComponentType<AboutChapterComponentProps>>

function getChapterMotionState(
  chapterIndex: number,
  observedChapterIndex: number,
): AboutChapterMotionState {
  const distanceFromObserved = chapterIndex - observedChapterIndex

  if (distanceFromObserved === 0) return 'active'
  if (distanceFromObserved === -1) return 'preceding'
  if (distanceFromObserved === 1) return 'following'
  return 'inactive'
}

type AboutChaptersProps = {
  observedChapter: AboutChapterId
}

export function AboutChapters({ observedChapter }: AboutChaptersProps) {
  const observedChapterIndex = Math.max(
    0,
    aboutChapters.findIndex((chapter) => chapter.id === observedChapter),
  )

  return (
    <>
      {aboutChapters.map((chapter, chapterIndex) => {
        const Chapter = chapterComponents[chapter.id]
        const motionState = getChapterMotionState(
          chapterIndex,
          observedChapterIndex,
        )

        return (
          <Chapter
            chapter={chapter}
            key={chapter.id}
            motionState={motionState}
          />
        )
      })}
    </>
  )
}
