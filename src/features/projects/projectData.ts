import { projectRouteRecords, type ProjectRouteRecord } from './projectRouteData'

export type Project = {
  id: string
  slug: string
  title: string
  shortDescription: string
  description: string
  technologies: string[]
  role: string
  year: string
  status: string
}

type ProjectDetails = Omit<Project, keyof ProjectRouteRecord>

const projectDetails: Record<ProjectRouteRecord['id'], ProjectDetails> = {
  'project-001': {
    shortDescription: 'A cinematic portfolio navigated through a reactive 3D artifact.',
    description:
      'An ongoing exploration of how real-time 3D, editorial typography, and physical-feeling motion can turn a personal portfolio into a coherent interactive world.',
    technologies: ['React', 'TypeScript', 'React Three Fiber', 'Three.js'],
    role: 'Design engineering',
    year: '2026',
    status: 'In development',
  },
  'project-002': {
    shortDescription: 'An experimental interface for preserving personal audio transmissions.',
    description:
      'A tactile digital archive that treats listening as an intentional ritual, bringing together curated audio, kinetic layouts, and responsive visual systems.',
    technologies: ['React', 'Web Audio API', 'GSAP', 'Vite'],
    role: 'Creative development',
    year: '2026',
    status: 'Prototype',
  },
  'project-003': {
    shortDescription: 'A real-time systems visualization for complex operational signals.',
    description:
      'A speculative monitoring environment focused on making dense system states legible through hierarchy, spatial organization, and restrained motion.',
    technologies: ['TypeScript', 'WebGL', 'Node.js', 'WebSockets'],
    role: 'Software engineering',
    year: '2025',
    status: 'Concept study',
  },
}

export const projects: Project[] = projectRouteRecords.map((project) => ({
  ...project,
  ...projectDetails[project.id],
}))

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
