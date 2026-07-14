import { useEffect, useState } from 'react'
import { AboutPage } from './features/about/AboutPage'
import { HomePage } from './features/home/HomePage'
import { ProjectDetailPage } from './features/projects/ProjectDetailPage'
import { ProjectsPage } from './features/projects/ProjectsPage'
import { getProjectBySlug } from './features/projects/projectData'

type Route =
  | { name: 'home' }
  | { name: 'about' }
  | { name: 'projects' }
  | { name: 'project-detail'; slug: string }

function getRouteFromHash(): Route {
  const path = window.location.hash.replace(/^#\/?/, '')

  if (path === 'about') return { name: 'about' }
  if (path === 'projects') return { name: 'projects' }
  if (path.startsWith('projects/')) {
    return { name: 'project-detail', slug: decodeURIComponent(path.slice('projects/'.length)) }
  }

  return { name: 'home' }
}

function getDocumentTitle(route: Route) {
  if (route.name === 'about') return 'About — Jaylan Wu'
  if (route.name === 'projects') return 'Projects — Jaylan Wu'
  if (route.name === 'project-detail') {
    const project = getProjectBySlug(route.slug)
    return project ? `${project.title} — Jaylan Wu` : 'Project Not Found — Jaylan Wu'
  }
  return 'Jaylan Wu — Creative Developer'
}

export function App() {
  const [route, setRoute] = useState<Route>(getRouteFromHash)

  useEffect(() => {
    const handleHashChange = () => setRoute(getRouteFromHash())
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    document.title = getDocumentTitle(route)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [route])

  if (route.name === 'about') return <AboutPage />
  if (route.name === 'projects') return <ProjectsPage />
  if (route.name === 'project-detail') return <ProjectDetailPage slug={route.slug} />
  return <HomePage />
}
