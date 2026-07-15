type PageIndexProps = {
  value: string
}

export function PageIndex({ value }: PageIndexProps) {
  return (
    <div className="page-index" aria-hidden="true">
      {Array.from(value, (digit, index) => (
        <span key={`${digit}-${index}`}>{digit}</span>
      ))}
    </div>
  )
}
