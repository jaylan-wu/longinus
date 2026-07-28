import type { AboutChapterDefinition } from '../types/about'

type AboutActiveChapterHeaderProps = {
  chapter: AboutChapterDefinition
}

export function AboutActiveChapterHeader({
  chapter,
}: AboutActiveChapterHeaderProps) {
  return (
    <div className="about__active-chapter" aria-hidden="true">
      <span>{chapter.index} /</span>
      <span>{chapter.label}</span>
    </div>
  )
}
