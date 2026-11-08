import type { ReactNode } from 'react'
import { themeClass } from './theme.css'
import * as styles from './ThemeProvider.css'

interface ThemeProviderProps {
  children: ReactNode
}

function ThemeProvider({ children }: ThemeProviderProps) {
  return <div className={`${themeClass} ${styles.root}`}>{children}</div>
}

export default ThemeProvider
