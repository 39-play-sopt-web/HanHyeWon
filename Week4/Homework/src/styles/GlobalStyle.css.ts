import { globalStyle } from '@vanilla-extract/css'

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
})

globalStyle('body', {
  fontFamily: 'system-ui, -apple-system, sans-serif',
})

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
})

globalStyle('button', {
  font: 'inherit',
  color: 'inherit',
  border: 'none',
  background: 'none',
  cursor: 'pointer',
})

globalStyle('input, textarea', {
  font: 'inherit',
})

globalStyle('ul', {
  listStyle: 'none',
})
