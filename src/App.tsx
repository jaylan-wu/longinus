import { useEffect, useState } from 'react'
import { AboutPage } from './features/about/AboutPage'
import { HomePage } from './features/home/HomePage'

type Page = 'home' | 'about'

function getPageFromHash(): Page {
  return window.location.hash === '#about' ? 'about' : 'home'
}

export function App() {
  const [page, setPage] = useState<Page>(getPageFromHash)

  useEffect(() => {
    const handleHashChange = () => setPage(getPageFromHash())
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    document.title = page === 'about'
      ? 'About — Jaylan Wu'
      : 'Jaylan Wu — Creative Developer'
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [page])

  return page === 'about' ? <AboutPage /> : <HomePage />
}
