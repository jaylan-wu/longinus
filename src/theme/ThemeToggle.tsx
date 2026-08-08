import { THEME_IDS } from './theme'
import { useTheme } from './useTheme'
import './themeToggle.css'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const lightIsActive = theme === THEME_IDS.reiLight
  const activeLabel = lightIsActive ? 'Light' : 'Dark'
  const nextLabel = lightIsActive ? 'Dark' : 'Light'
  const nextTheme = lightIsActive
    ? THEME_IDS.longinusDark
    : THEME_IDS.reiLight

  // Temporary app-shell control for pre-merge visual QA on rei-light-mode.
  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={`Theme QA: ${activeLabel} active. Switch to ${nextLabel}.`}
      aria-pressed={lightIsActive}
      onClick={() => setTheme(nextTheme)}
    >
      <span className="theme-toggle__prefix" aria-hidden="true">Theme / </span>
      <span>{activeLabel}</span>
    </button>
  )
}
