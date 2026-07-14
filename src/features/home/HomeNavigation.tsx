import type { NavigationItem } from '../../types/navigation'

type HomeNavigationProps = {
  items: NavigationItem[]
}

export function HomeNavigation({ items }: HomeNavigationProps) {
  return (
    <nav className="home-navigation" aria-label="Primary navigation">
      <ol className="home-navigation__list">
        {items.map((item) => {
          const content = (
            <>
              <span className="home-navigation__index">{item.index}</span>
              <span className="home-navigation__label">{item.label}</span>
              <span className="home-navigation__description">
                {item.availability === 'planned' ? `${item.description} / Planned` : item.description}
              </span>
              <span className="home-navigation__arrow" aria-hidden="true">
                {item.availability === 'planned' ? '—' : '↗'}
              </span>
            </>
          )

          return (
            <li className="home-navigation__item" key={item.id}>
              {item.availability === 'available' ? (
                <a className="home-navigation__link" href={`#${item.id}`}>{content}</a>
              ) : (
                <span className="home-navigation__link home-navigation__link--planned" aria-disabled="true">
                  {content}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
