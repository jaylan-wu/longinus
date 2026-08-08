export const projectRouteRecords = [
  {
    id: 'project-001',
    slug: 'longinus-interface',
    title: 'Longinus Interface',
  },
  {
    id: 'project-002',
    slug: 'signal-archive',
    title: 'Signal Archive',
  },
  {
    id: 'project-003',
    slug: 'unit-cerberus',
    title: 'Unit Cerberus',
  },
] as const

export type ProjectRouteRecord = (typeof projectRouteRecords)[number]

export function getProjectRouteBySlug(slug: string) {
  return projectRouteRecords.find((project) => project.slug === slug)
}
