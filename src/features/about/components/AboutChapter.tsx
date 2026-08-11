import type { PropsWithChildren } from 'react'
import type {
  AboutChapterDefinition,
  AboutChapterMotionState,
} from '../types/about'

type AboutChapterModifier = 'identity' | 'trajectory' | 'outside' | 'influences' | 'direction'

export type AboutChapterComponentProps = {
  chapter: AboutChapterDefinition
  motionState: AboutChapterMotionState
}

type AboutChapterProps = PropsWithChildren<AboutChapterComponentProps & {
  modifier: AboutChapterModifier
}>

export function AboutChapter({
  chapter,
  modifier,
  motionState,
  children,
}: AboutChapterProps) {
  return (
    <section
      className={`about-chapter about-chapter--${modifier}`}
      id={chapter.id}
      aria-labelledby={chapter.headingId}
      data-motion-state={motionState}
    >
      <h2 className="about__visually-hidden" id={chapter.headingId}>
        {chapter.label}
      </h2>
      {children}
    </section>
  )
}
