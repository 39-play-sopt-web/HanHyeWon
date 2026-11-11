import { style } from '@vanilla-extract/css'
import { vars } from './theme.css'

export const root = style({
  minHeight: '100vh',
  color: vars.colors.white,
  backgroundColor: vars.colors.background,
})
