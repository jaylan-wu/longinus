type InfluenceNarrativeProps = {
  className?: string
  heading: string
  paragraphs: readonly string[]
}

function FormattedInfluenceText({ children }: { children: string }) {
  return (
    <>
      {children.split(/(\*[^*]+\*)/).map((part, index) => (
        part.startsWith('*') && part.endsWith('*')
          ? <cite key={`${part}-${index}`}>{part.slice(1, -1)}</cite>
          : part
      ))}
    </>
  )
}

export function InfluenceNarrative({
  className,
  heading,
  paragraphs,
}: InfluenceNarrativeProps) {
  const headingId = `influence-${heading.toLowerCase().replaceAll(' ', '-')}`

  return (
    <section className={className} aria-labelledby={headingId}>
      <h4 id={headingId}>{heading}</h4>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}><FormattedInfluenceText>{paragraph}</FormattedInfluenceText></p>
      ))}
    </section>
  )
}
