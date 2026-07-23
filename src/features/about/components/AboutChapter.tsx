import type { PropsWithChildren } from 'react'
import type { AboutChapterDefinition } from '../types/about'

type AboutChapterModifier = 'identity' | 'trajectory' | 'outside' | 'influences' | 'direction'

export type AboutChapterComponentProps = {
  chapter: AboutChapterDefinition
}

type AboutChapterProps = PropsWithChildren<AboutChapterComponentProps & {
  modifier: AboutChapterModifier
}>

export function AboutChapter({ chapter, modifier, children }: AboutChapterProps) {
  return (
    <section
      className={`about-chapter about-chapter--${modifier}`}
      id={chapter.id}
      aria-labelledby={chapter.headingId}
    >
      {children}
    </section>
  )
}
