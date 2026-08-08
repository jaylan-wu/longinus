export const THEME_IDS = {
  longinusDark: 'longinus-dark',
  reiLight: 'rei-light',
} as const

export type ThemeId = (typeof THEME_IDS)[keyof typeof THEME_IDS]

export const DEFAULT_THEME_ID: ThemeId = THEME_IDS.longinusDark
export const THEME_STORAGE_KEY = 'longinus-theme'

const THEME_BROWSER_COLORS: Record<ThemeId, string> = {
  [THEME_IDS.longinusDark]: '#09090b',
  [THEME_IDS.reiLight]: '#f8f9fc',
}

export function isThemeId(value: unknown): value is ThemeId {
  return value === THEME_IDS.longinusDark || value === THEME_IDS.reiLight
}

export function getDocumentTheme(): ThemeId {
  if (typeof document === 'undefined') return DEFAULT_THEME_ID

  const documentTheme = document.documentElement.dataset.theme
  return isThemeId(documentTheme) ? documentTheme : DEFAULT_THEME_ID
}

export function synchronizeThemeDocument(theme: ThemeId) {
  if (typeof document === 'undefined') return

  document.documentElement.dataset.theme = theme

  const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
  if (themeColor) themeColor.content = THEME_BROWSER_COLORS[theme]
}

export function persistTheme(theme: ThemeId) {
  if (typeof window === 'undefined') return

  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // Storage can be unavailable in privacy-restricted browsing contexts.
  }
}
