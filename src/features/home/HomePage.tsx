import { useLayoutEffect, useRef, useState } from 'react'
import { HomeIdentity } from './HomeIdentity'
import { HomeNavigation } from './HomeNavigation'
import { HomeMotif } from './HomeMotif'
import { navigationItems } from './navigation'
import { THEME_IDS } from '../../theme/theme'
import { useTheme } from '../../theme/useTheme'
import type { NavigationItem } from '../../types/navigation'
import './home.css'

const HOME_GRID_TARGET_CELL_SIZE_PX = 90

function updateHomeGrid(element: HTMLElement) {
  const { width, height } = element.getBoundingClientRect()
  if (width <= 0 || height <= 0) return

  const columnCount = Math.max(1, Math.round(width / HOME_GRID_TARGET_CELL_SIZE_PX))
  const cellSize = width / columnCount
  const rowCount = Math.max(1, Math.ceil(height / cellSize))
  const verticalOverflow = rowCount * cellSize - height

  element.style.setProperty('--home-grid-cell-size', `${cellSize}px`)
  element.style.setProperty('--home-grid-offset-y', `${-verticalOverflow / 2}px`)
}

export function HomePage() {
  const homeRef = useRef<HTMLElement>(null)
  const [focusedTarget, setFocusedTarget] = useState<NavigationItem['id'] | null>(null)
  const { theme } = useTheme()

  useLayoutEffect(() => {
    const home = homeRef.current
    if (!home) return

    updateHomeGrid(home)

    const resizeObserver = new ResizeObserver(() => updateHomeGrid(home))
    resizeObserver.observe(home)

    return () => resizeObserver.disconnect()
  }, [])

  return (
    <main className="home" id="home" ref={homeRef}>
      <div className="home__watermark" aria-hidden="true">
        {theme === THEME_IDS.reiLight ? 'RAMIEL' : 'LONGINUS'}
      </div>

      <section className="home__interface" aria-label="Introduction and site navigation">
        <HomeIdentity />
        <HomeNavigation items={navigationItems} onFocusTarget={setFocusedTarget} />
        <footer className="home__footer" aria-label="Site status">
          <span>NYC / 40.7128° N</span>
          <span>VER-001</span>
          <span className="home__availability">Available for transmission</span>
        </footer>
      </section>

      <HomeMotif focusedTarget={focusedTarget} />
    </main>
  )
}
