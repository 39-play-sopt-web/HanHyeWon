import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
})

export const input = style({
  padding: '10px 12px',
  color: vars.colors.white,
  backgroundColor: vars.colors.background,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: '8px',
})

export const textarea = style([
  input,
  {
    height: '200px',
    resize: 'none',
  },
])

export const saveButton = style({
  alignSelf: 'flex-end',
  padding: '8px 14px',
  fontSize: '14px',
  fontWeight: 600,
  color: vars.colors.background,
  backgroundColor: vars.colors.point,
  borderRadius: '8px',
})
