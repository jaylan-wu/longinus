import {
  type ReactNode,
  useCallback,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react'
import { ThemeContext } from './ThemeContext'
import {
  getDocumentTheme,
  persistTheme,
  synchronizeThemeDocument,
  type ThemeId,
} from './theme'

type ThemeProviderProps = {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<ThemeId>(getDocumentTheme)

  useLayoutEffect(() => {
    synchronizeThemeDocument(theme)
  }, [theme])

  const setTheme = useCallback((nextTheme: ThemeId) => {
    synchronizeThemeDocument(nextTheme)
    persistTheme(nextTheme)
    setThemeState(nextTheme)
  }, [])

  const context = useMemo(() => ({ theme, setTheme }), [setTheme, theme])

  return (
    <ThemeContext.Provider value={context}>
      {children}
    </ThemeContext.Provider>
  )
}
