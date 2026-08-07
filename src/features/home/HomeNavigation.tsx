import type { NavigationItem } from '../../types/navigation'
import '../../components/navigation/navigationAction.css'

type HomeNavigationProps = {
  items: NavigationItem[]
  onFocusTarget: (target: NavigationItem['id'] | null) => void
}

export function HomeNavigation({ items, onFocusTarget }: HomeNavigationProps) {
  return (
    <nav className="home-navigation" aria-label="Primary navigation">
      <ol className="home-navigation__list">
        {items.map((item) => {
          const content = (
            <>
              <span className="home-navigation__index">{item.index}</span>
              <span className="home-navigation__label navigation-action__label">
                {item.label}
              </span>
            </>
          )

          return (
            <li className="home-navigation__item" key={item.id}>
              {item.availability === 'available' ? (
                <a
                  className="home-navigation__link navigation-action"
                  href={`#${item.id}`}
                  onMouseEnter={() => onFocusTarget(item.id)}
                  onMouseLeave={() => onFocusTarget(null)}
                  onFocus={() => onFocusTarget(item.id)}
                  onBlur={() => onFocusTarget(null)}
                >
                  {content}
                </a>
              ) : (
                <button
                  className="home-navigation__link home-navigation__link--planned"
                  type="button"
                  disabled
                  aria-label={`${item.label}: ${item.description}. Planned destination.`}
                >
                  {content}
                </button>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
