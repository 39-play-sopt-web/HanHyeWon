const theme = {
  colors: {
    background: '#18181d',
    surface: '#26262c',
    border: '#2f2f36',
    point: '#9ef5e6',
    pointGradient: 'linear-gradient(90deg, #9ef5e6, #a3e4ff)',
    white: '#ffffff',
    gray: '#a1a1aa',
  },
  fonts: {
    title: 'font-size: 24px; font-weight: 700;',
    subtitle: 'font-size: 18px; font-weight: 700;',
    caption: 'font-size: 12px; font-weight: 400;',
  },
}

export type Theme = typeof theme

export default theme
