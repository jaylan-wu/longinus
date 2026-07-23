import type { AboutChapterDefinition } from '../types/about'

type ChapterHeadingProps = {
  chapter: AboutChapterDefinition
  title: string
}

export function ChapterHeading({ chapter, title }: ChapterHeadingProps) {
  return (
    <header className="about-chapter__heading">
      <p className="about-chapter__kicker"><span>{chapter.index}</span> {chapter.label}</p>
      <h2 id={chapter.headingId}>{title}</h2>
    </header>
  )
}
