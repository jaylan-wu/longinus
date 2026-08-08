import { createContext } from 'react'
import type { ThemeId } from './theme'

export type ThemeContextValue = {
  theme: ThemeId
  setTheme: (theme: ThemeId) => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)
