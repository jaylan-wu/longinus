import { useLayoutEffect, useRef } from 'react'
import { HomeIdentity } from './HomeIdentity'
import { HomeNavigation } from './HomeNavigation'
import { navigationItems } from './navigation'
import { PageIndex } from '../../components/PageIndex'
import { SpearFallback } from '../../components/spear/SpearFallback'
import { HomeSpearScene } from './HomeSpearScene'
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
      <div className="home__watermark" aria-hidden="true">LONGINUS</div>

      <section className="home__interface" aria-label="Introduction and site navigation">
        <HomeIdentity />
        <HomeNavigation items={navigationItems} />
        <footer className="home__footer" aria-label="Site status">
          <span>NYC / 40.7128° N</span>
          <span>VER-001</span>
          <span className="home__availability">Available for transmission</span>
        </footer>
      </section>

      <aside className="home__scene" aria-label="Procedural Spear of Longinus illustration">
        <div className="home__scene-label" aria-hidden="true">Spear of Longinus</div>
        <SpearFallback />
        <HomeSpearScene />
        <PageIndex value="00" />
      </aside>
    </main>
  )
}
