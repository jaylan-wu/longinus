import type { NavigationItem } from '../../types/navigation'

type HomeNavigationProps = {
  items: NavigationItem[]
  selectedId: NavigationItem['id']
  onSelect: (id: NavigationItem['id']) => void
}

export function HomeNavigation({ items, selectedId, onSelect }: HomeNavigationProps) {
  return (
    <nav className="home-navigation" aria-label="Primary navigation">
      <ol className="home-navigation__list">
        {items.map((item) => {
          const isSelected = item.id === selectedId

          return (
            <li className="home-navigation__item" key={item.id}>
              <a
                className="home-navigation__link"
                href={`#${item.id}`}
                aria-current={isSelected ? 'page' : undefined}
                onClick={() => onSelect(item.id)}
              >
                <span className="home-navigation__index">{item.index}</span>
                <span className="home-navigation__label">{item.label}</span>
                <span className="home-navigation__description">{item.description}</span>
                <span className="home-navigation__arrow" aria-hidden="true">↗</span>
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
