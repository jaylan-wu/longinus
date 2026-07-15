import { HomeIdentity } from './HomeIdentity'
import { HomeNavigation } from './HomeNavigation'
import { navigationItems } from './navigation'
import { SpearFallback } from '../../components/spear/SpearFallback'
import { HomeSpearScene } from './HomeSpearScene'
import './home.css'
export function HomePage() {
  return (
    <main className="home" id="home">
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
        <div className="home__scene-index" aria-hidden="true">
          <span>0</span>
          <span>0</span>
        </div>
      </aside>
    </main>
  )
}
