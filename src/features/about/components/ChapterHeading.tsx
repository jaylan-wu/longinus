import type { AboutChapterDefinition } from '../types/about'

type ChapterHeadingProps = {
  chapter: AboutChapterDefinition
}

export function ChapterHeading({ chapter }: ChapterHeadingProps) {
  return (
    <h2 className="about-chapter__semantic-heading" id={chapter.headingId}>
      {chapter.label}
    </h2>
  )
}
