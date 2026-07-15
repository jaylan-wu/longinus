const titleCards = [
  'Do you love me?',
  'Take care of yourself.',
  'Love is destructive.',
  'I need you.',
] as const

const titleCard = titleCards[Math.floor(Math.random() * titleCards.length)]

export function HomeIdentity() {
  return (
    <header
      className="home-identity"
      aria-label="Jaylan Wu — a portfolio spanning engineering, game development, and education"
    >
      <div className="home-identity__eyebrow">
        <span>alter-egoist</span>
        <span className="home-identity__signal">System online</span>
      </div>
      <h1 className="home-identity__name">
        <span>Jaylan</span>
        <span>Wu</span>
      </h1>
      <div className="home-identity__statement">
        <p className="home-identity__role">Portfolio:</p>
        <p className="home-identity__question">{titleCard}</p>
      </div>
    </header>
  )
}
