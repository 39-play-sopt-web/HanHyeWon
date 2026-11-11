import { createTheme } from '@vanilla-extract/css'

export const [themeClass, vars] = createTheme({
  colors: {
    background: '#18181d',
    surface: '#26262c',
    border: '#2f2f36',
    point: '#9ef5e6',
    pointHover: '#5fd9c4',
    white: '#ffffff',
    gray: '#a1a1aa',
    error: '#f87171',
  },
})
