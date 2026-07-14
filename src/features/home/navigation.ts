import type { NavigationItem } from '../../types/navigation'

export const navigationItems: NavigationItem[] = [
  { id: 'projects', label: 'Projects', index: '01', description: 'Selected engineering work', availability: 'available' },
  { id: 'music', label: 'Music', index: '02', description: 'Curated personal records', availability: 'planned' },
  { id: 'playground', label: 'Playground', index: '03', description: 'Technical and visual experiments', availability: 'planned' },
  { id: 'about', label: 'About', index: '04', description: 'Profile and working philosophy', availability: 'available' },
]
