type ChapterHeadingProps = {
  index: string
  label: string
  title: string
}

export function ChapterHeading({ index, label, title }: ChapterHeadingProps) {
  return (
    <header className="about-chapter__heading">
      <p className="about-chapter__kicker"><span>{index}</span> {label}</p>
      <h2>{title}</h2>
    </header>
  )
}
