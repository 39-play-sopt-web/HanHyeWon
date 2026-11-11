import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  padding: '16px 20px',
  backgroundColor: vars.colors.surface,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: '12px',
})

export const title = style({
  fontSize: '16px',
  fontWeight: 700,
})

export const content = style({
  fontSize: '14px',
  color: vars.colors.gray,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})

export const info = style({
  display: 'flex',
  gap: '8px',
  fontSize: '12px',
  color: vars.colors.gray,
})

export const author = style({
  fontWeight: 600,
  color: vars.colors.point,
})
