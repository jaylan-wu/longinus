import { lazy, Suspense, useEffect, useState } from 'react'
import { HomePage } from './features/home/HomePage'
import { getProjectRouteBySlug } from './features/projects/projectRouteData'
import { ThemeToggle } from './theme/ThemeToggle'

const AboutPage = lazy(() => import('./features/about/AboutPage').then((module) => ({ default: module.AboutPage })))
const ProjectsPage = lazy(() => import('./features/projects/ProjectsPage').then((module) => ({ default: module.ProjectsPage })))
const ProjectDetailPage = lazy(() => import('./features/projects/ProjectDetailPage').then((module) => ({ default: module.ProjectDetailPage })))

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
    const project = getProjectRouteBySlug(route.slug)
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

  let page = <HomePage />

  if (route.name === 'about') page = <AboutPage />
  if (route.name === 'projects') page = <ProjectsPage />
  if (route.name === 'project-detail') page = <ProjectDetailPage slug={route.slug} />

  return (
    <>
      <ThemeToggle />
      <Suspense fallback={<main className="route-pending" aria-busy="true" aria-label="Loading view" />}>
        {page}
      </Suspense>
    </>
  )
}
