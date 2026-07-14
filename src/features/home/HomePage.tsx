import { HomeIdentity } from './HomeIdentity'
import { HomeNavigation } from './HomeNavigation'
import { navigationItems } from './navigation'
import { SpearFallback } from '../../components/spear/SpearFallback'
import { HomeSpearScene } from './HomeSpearScene'
import './home.css'
export function HomePage() {
  return (
    <main className="home" id="home">
      <div className="home__grid" aria-hidden="true" />
      <div className="home__watermark" aria-hidden="true">LONGINUS</div>

      <section className="home__interface" aria-label="Introduction and site navigation">
        <HomeIdentity />
        <HomeNavigation items={navigationItems} />
        <footer className="home__footer" aria-label="Site status">
          <span>NYC / 40.7128° N</span>
          <span>System 001—A</span>
          <span className="home__availability">Available for transmission</span>
        </footer>
      </section>

      <aside className="home__scene" aria-label="Procedural Spear of Longinus illustration">
        <div className="home__scene-label" aria-hidden="true">
          <span>Object 01</span>
          <span>Temporary geometry</span>
        </div>
        <SpearFallback />
        <HomeSpearScene />
        <div className="home__scene-index" aria-hidden="true">00</div>
      </aside>
    </main>
  )
}
