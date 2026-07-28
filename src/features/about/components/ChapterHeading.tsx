import type { AboutChapterDefinition } from '../types/about'

type ChapterHeadingProps = {
  chapter: AboutChapterDefinition
}

export function ChapterHeading({ chapter }: ChapterHeadingProps) {
  return (
    <h2 className="about-chapter__heading" id={chapter.headingId}>
      <span>{chapter.index} /</span>
      <span>{chapter.label}</span>
    </h2>
  )
}
